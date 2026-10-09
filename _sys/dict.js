/* ==========================================================================
   撷墨真题学习系统 · 点词查词（_sys/dict.js）
   - 材料中的英文单词可点击，弹出「单词 / 发音 / 音标 / 释义 / 例句」卡片
   - 数据来源：有道词典（中文释义，JSONP）+ Free Dictionary API（音标/英英例句）
              + 有道 dictvoice（英音 / 美音发音）+ 当前短文原文例句
   - 可配置自建代理：页面里设置 window.XT_DICT_PROXY = 'https://xxx/dict.php?q='
     代理需返回 {word, mean:[{pos,zh}]} 或 {word, explain}
   ========================================================================== */
(function () {
    'use strict';
    if (window.__XT_DICT_READY__) return;
    window.__XT_DICT_READY__ = true;

    /* ---------------- 配置 ---------------- */
    var CFG = {
        youdao: 'https://dict.youdao.com/suggest',                     // 中文释义（JSONP，浏览器直连可用）
        dictapi: 'https://api.dictionaryapi.dev/api/v2/entries/en/',   // 音标 / 英英例句（CORS 开放）
        voice: 'https://dict.youdao.com/dictvoice',                    // 发音（音频流，不受跨域限制）
        proxy: window.XT_DICT_PROXY || '',                             // 可选：自建服务端代理
        cacheDays: 7,
        timeout: 6000
    };

    var WORD_RE = /[A-Za-z]+(?:['’][A-Za-z]+)?/g;
    // 这些元素内部不做分词 / 不响应点词
    var SKIP_SEL = 'script,style,input,select,textarea,button,svg,code,' +
        '.speaker,.blank-slot,.blank-input,.blank-state,.trans-text,.opt,.xt-dict-pop';
    var MARK_ROOTS = '.article-card, .lm-col-left, #articleCard';
    var MARK_FLAG = 'data-xt-dict-done';

    /* ---------------- 小工具 ---------------- */
    function esc(s) {
        return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
        });
    }
    function norm(w) { return String(w || '').toLowerCase().replace(/[^a-z'’-]/g, ''); }
    function unique(a) {
        var o = {}, r = [];
        a.forEach(function (x) { if (x && !o[x]) { o[x] = 1; r.push(x); } });
        return r;
    }
    // 词形还原候选（dogs→dog, studied→study…）
    function lemmas(w) {
        var s = w.toLowerCase(), out = [];
        if (/ies$/.test(s)) out.push(s.replace(/ies$/, 'y'));
        if (/(ches|shes|sses|xes|zes)$/.test(s)) out.push(s.replace(/es$/, ''));
        if (/ves$/.test(s)) { out.push(s.replace(/ves$/, 'f'), s.replace(/ves$/, 'fe')); }
        if (/s$/.test(s) && !/(ss|us|is)$/.test(s)) out.push(s.replace(/s$/, ''));
        if (/(ing|ed)$/.test(s)) {
            out.push(s.replace(/ing$/, ''), s.replace(/ing$/, 'e'),
                s.replace(/ed$/, ''), s.replace(/ed$/, 'e'));
            if (/([bcdfghjklmnpqrstvwxyz])\1(ed|ing)$/.test(s)) {
                out.push(s.replace(/(.)\1(ed|ing)$/, '$1'));
            }
        }
        return unique(out).filter(function (x) { return x.length >= 2 && x !== s; }).slice(0, 4);
    }
    function settle(p) {
        return p.then(function (v) { return { ok: true, v: v }; },
            function (e) { return { ok: false, e: e }; });
    }

    /* ---------------- 缓存（localStorage，7 天） ---------------- */
    var CK = 'xt.dict.v1.';
    function cacheGet(w) {
        try {
            var raw = localStorage.getItem(CK + w); if (!raw) return null;
            var o = JSON.parse(raw);
            if (!o || !o.ts || Date.now() - o.ts > CFG.cacheDays * 864e5) return null;
            return o.data;
        } catch (e) { return null; }
    }
    function cacheSet(w, d) {
        try { localStorage.setItem(CK + w, JSON.stringify({ ts: Date.now(), data: d })); } catch (e) { }
    }

    /* ---------------- 数据抓取 ---------------- */
    var seed = 0;
    function jsonp(url) {
        return new Promise(function (res, rej) {
            var cb = '__xtjp' + (++seed) + '_' + Date.now();
            var s = document.createElement('script');
            var timer = setTimeout(function () { done(); rej(new Error('timeout')); }, CFG.timeout);
            function done() {
                clearTimeout(timer);
                try { delete window[cb]; } catch (e) { window[cb] = undefined; }
                if (s.parentNode) s.parentNode.removeChild(s);
            }
            window[cb] = function (d) { done(); res(d); };
            s.onerror = function () { done(); rej(new Error('network')); };
            s.src = url + (url.indexOf('?') > -1 ? '&' : '?') + 'callback=' + cb;
            document.head.appendChild(s);
        });
    }
    function fetchT(url) {
        if (window.AbortController) {
            var ac = new AbortController();
            var to = setTimeout(function () { try { ac.abort(); } catch (e) { } }, CFG.timeout);
            return fetch(url, { signal: ac.signal }).then(function (r) {
                clearTimeout(to); return r;
            }, function (e) { clearTimeout(to); throw e; });
        }
        return fetch(url);
    }

    /* 有道：中文释义 */
    function fetchYoudao(w) {
        var url = CFG.youdao + '?q=' + encodeURIComponent(w) + '&num=3&ver=3.0&doctype=json&jsonversion=2';
        return jsonp(url).then(function (d) {
            var entries = (d && d.data && d.data.entries) || [];
            var hit = entries.filter(function (e) { return norm(e.entry) === norm(w); })[0] || entries[0];
            if (!hit || !hit.explain) return null;
            return { word: hit.entry || w, explain: hit.explain };
        });
    }

    /* Free Dictionary API：音标 + 英英释义 + 例句 */
    function fetchDictApi(w) {
        return fetchT(CFG.dictapi + encodeURIComponent(w)).then(function (r) {
            if (!r.ok) throw new Error('http' + r.status);
            return r.json();
        }).then(function (arr) {
            var d = Array.isArray(arr) ? arr[0] : null; if (!d) return null;
            var ph = '', au = '';
            (d.phonetics || []).forEach(function (p) {
                if (!ph && p.text) ph = p.text;
                if (!au && p.audio) au = p.audio;
            });
            if (!ph && d.phonetic) ph = d.phonetic;
            var meanings = (d.meanings || []).map(function (m) {
                return {
                    pos: m.partOfSpeech || '',
                    defs: (m.definitions || []).map(function (x) {
                        return { definition: x.definition || '', example: x.example || '' };
                    })
                };
            });
            return { word: d.word || w, ph: ph, audio: au, meanings: meanings };
        });
    }

    /* 可选：自建代理（返回 {word, explain} 或 {word, mean:[{pos,zh}]}） */
    function fetchProxy(w) {
        if (!CFG.proxy) return Promise.reject(new Error('no-proxy'));
        return fetchT(CFG.proxy + encodeURIComponent(w)).then(function (r) {
            if (!r.ok) throw new Error('http' + r.status);
            return r.json();
        });
    }

    /* ---------------- 释义整理 ---------------- */
    /* 有道 explain 形如 "adv. 前文; prep. 在……上面; n. 荒野, 海;"：
       按分号切片 → 无词性的条目继承上一个词性 → 同词性合并为一条（词性 + 「；」连接） */
    function parseZh(str) {
        var out = [], lastPos = '';
        String(str || '').split(/[;；]/).forEach(function (seg) {
            seg = seg.replace(/\s+/g, ' ').trim();
            if (!seg) return;
            var m = seg.match(/^([a-zA-Z]{1,6}\.)\s*([\s\S]*)$/);
            var pos = m ? m[1] : '';
            var zh = (m ? m[2] : seg).trim();
            if (!zh) return;
            if (pos) lastPos = pos; else pos = lastPos;
            var last = out[out.length - 1];
            if (last && last.pos === pos) {
                // 同词性合并为一条；完全重复的义项（如词典重复给出）自动跳过
                if (last.zh.split('；').indexOf(zh) === -1) last.zh += '；' + zh;
            } else {
                out.push({ pos: pos, zh: zh });
            }
        });
        return out.length ? out.slice(0, 4) : null;
    }
    function pickEn(da, posTag, i) {
        if (!da || !da.meanings || !da.meanings.length) return '';
        var ms = da.meanings, hit = null;
        if (posTag) {
            var p = posTag.toLowerCase()[0];
            hit = ms.filter(function (m) { return (m.pos || '').toLowerCase()[0] === p; })[0] || null;
        }
        if (!hit) hit = ms[Math.min(i, ms.length - 1)];
        if (!hit || !hit.defs || !hit.defs.length) return '';
        var seen = {}, out = [];
        hit.defs.forEach(function (d) {
            if (d.definition && !seen[d.definition] && out.length < 2) {
                seen[d.definition] = 1; out.push(d.definition);
            }
        });
        return out.join('；');
    }
    function collectExamples(da, limit) {
        var out = [];
        if (!da || !da.meanings) return out;
        da.meanings.forEach(function (m) {
            (m.defs || []).forEach(function (d) {
                if (d.example && out.length < limit) out.push(d.example);
            });
        });
        return out;
    }
    function buildResult(w, yd, da) {
        var defs = [];
        var zhList = yd && yd.explain ? parseZh(yd.explain) : null;
        if (zhList) {
            zhList.forEach(function (z, i) {
                defs.push({ pos: z.pos, zh: z.zh, en: pickEn(da, z.pos, i) });
            });
        } else if (da && da.meanings && da.meanings.length) {
            da.meanings.slice(0, 3).forEach(function (m) {
                defs.push({
                    pos: m.pos,
                    zh: '',
                    en: (m.defs || []).slice(0, 2).map(function (d) { return d.definition; }).join('；')
                });
            });
        }
        var srcs = [];
        if (yd) srcs.push('有道词典');
        if (da) srcs.push('Dictionary API');
        return {
            word: w,
            display: (yd && yd.word) || (da && da.word) || w,
            ph: (da && da.ph) || '',
            audio: (da && da.audio) || '',
            defs: defs,
            examples: collectExamples(da, 2),
            srcs: srcs
        };
    }

    /* ---------------- 查询：先出中文释义，再补音标例句 ---------------- */
    function attempt(word, isBase, onPartial) {
        var p1 = settle(CFG.proxy ? fetchProxy(word) : fetchYoudao(word));
        var p2 = settle(fetchDictApi(word));
        // 中文释义一到就先渲染，避免音标接口慢时干等
        p1.then(function (a) {
            if (!isBase || !a.ok || !a.v || !onPartial) return;
            var yd = a.v;
            if (yd.mean && !yd.explain) {
                yd = {
                    word: yd.word || word,
                    explain: yd.mean.map(function (x) {
                        return (x.pos ? x.pos + ' ' : '') + (x.zh || x.cn || '');
                    }).join('; ')
                };
            }
            var r = buildResult(word, yd, null);
            if (r.defs.length) onPartial(r);
        });
        return Promise.all([p1, p2]).then(function (rs) {
            var yd = rs[0].ok ? rs[0].v : null;
            var da = rs[1].ok ? rs[1].v : null;
            if (yd && yd.mean && !yd.explain) {
                yd = {
                    word: yd.word || word,
                    explain: yd.mean.map(function (x) {
                        return (x.pos ? x.pos + ' ' : '') + (x.zh || x.cn || '');
                    }).join('; ')
                };
            }
            if (!yd && !da) return null;
            var r = buildResult(word, yd, da);
            r.lemma = isBase ? '' : word;
            r.queryWord = norm(word);
            return (r.defs.length || r.examples.length) ? r : null;
        });
    }

    function resolve(raw, onPartial) {
        var w = norm(raw);
        if (w.length < 2) return Promise.resolve(null);
        var cached = cacheGet(w);
        if (cached) { if (onPartial) onPartial(cached); return Promise.resolve(cached); }

        return attempt(w, true, onPartial).then(function (r) {
            if (r) { cacheSet(w, r); return r; }
            var chain = Promise.resolve(null);
            lemmas(w).forEach(function (l) {
                chain = chain.then(function (cur) {
                    return cur || attempt(l, false, null);
                });
            });
            return chain.then(function (final) {
                if (final) cacheSet(w, final);
                return final;
            });
        });
    }

    /* ---------------- 发音 ---------------- */
    var curAudio = null;
    function stopAudio() {
        if (curAudio) { try { curAudio.pause(); } catch (e) { } curAudio = null; }
    }
    function playUrl(url, btn) {
        try {
            stopAudio();
            var a = new Audio(url);
            curAudio = a;
            if (btn) {
                btn.classList.add('playing');
                var off = function () { btn.classList.remove('playing'); };
                a.addEventListener('ended', off);
                a.addEventListener('error', off);
                setTimeout(off, 15000);
            }
            a.play().catch(function () { stopAudio(); if (btn) btn.classList.remove('playing'); });
            return a;
        } catch (e) { return null; }
    }
    function playWord(word, type) {
        return playUrl(CFG.voice + '?audio=' + encodeURIComponent(word) +
            '&type=' + (type === 'uk' ? 1 : 2));
    }

    /* ---------------- 生词本（localStorage） ---------------- */
    var WB = 'xt.wordbook.v1';
    function wbList() {
        try { return JSON.parse(localStorage.getItem(WB) || '[]'); } catch (e) { return []; }
    }
    function wbHas(w) { return wbList().some(function (x) { return x.w === w; }); }
    function wbAdd(item) {
        var l = wbList();
        if (l.some(function (x) { return x.w === item.w; })) return false;
        l.unshift(item);
        try { localStorage.setItem(WB, JSON.stringify(l.slice(0, 500))); } catch (e) { }
        return true;
    }

    /* ---------------- 弹窗 UI ---------------- */
    var pop = null, mask = null, card = null;
    var curWord = '', curAnchor = null, curResult = null, curCtx = null;
    var WB_URL = '../wordbook.html';

    function isMobile() {
        return window.matchMedia && window.matchMedia('(max-width: 760px)').matches;
    }
    function ensurePop() {
        if (pop) return pop;
        pop = document.createElement('div');
        pop.className = 'xt-dict-pop';
        pop.id = 'xtDictPop';
        pop.hidden = true;
        mask = document.createElement('div');
        mask.className = 'xt-dict-mask';
        mask.hidden = true;
        card = document.createElement('div');
        card.className = 'xt-dict-card';
        pop.appendChild(card);
        document.body.appendChild(mask);
        document.body.appendChild(pop);

        pop.addEventListener('click', function (e) {
            if (e.target.closest('.xt-dict-close')) { close(); return; }
            var snd = e.target.closest('.xt-dict-sound button');
            if (snd) {
                playWord(curWord, snd.getAttribute('data-type'));
                markPlaying(snd);
                return;
            }
            var exs = e.target.closest('.xt-dict-ex-snd');
            if (exs) {
                if (curCtx && curCtx.sent) {
                    playUrl(CFG.voice + '?audio=' + encodeURIComponent(curCtx.sent) + '&type=2');
                    markPlaying(exs);
                }
                return;
            }
            var add = e.target.closest('.xt-dict-add');
            if (add && !add.classList.contains('done')) {
                var item = {
                    w: curWord,
                    ph: curResult ? (curResult.ph || '') : '',
                    defs: curResult ? (curResult.defs || []).slice(0, 3) : [],
                    ctx: curCtx ? (curCtx.sent || '') : '',
                    ctxZh: curCtx ? (curCtx.zh || '') : '',
                    ts: Date.now()
                };
                if (wbAdd(item)) {
                    add.textContent = '✓ 已加入生词本';
                    add.classList.add('done');
                }
            }
        });
        mask.addEventListener('click', close);
        document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
        document.addEventListener('scroll', function () {
            if (pop && !pop.hidden && !isMobile() && curAnchor) {
                var r = curAnchor.getBoundingClientRect();
                if (r.top < 40 || r.bottom > window.innerHeight - 20) close();
            }
        }, true);
        return pop;
    }
    function markPlaying(btn) {
        btn.classList.add('playing');
        setTimeout(function () { btn.classList.remove('playing'); }, 6000);
    }

    function place(anchor) {
        if (!pop || !card || !anchor) return;
        if (isMobile()) { pop.style.left = pop.style.top = ''; return; }
        var r = anchor.getBoundingClientRect();
        var cw = card.offsetWidth || 380, ch = card.offsetHeight || 240;
        var vw = window.innerWidth, vh = window.innerHeight, pad = 12;
        var left = r.left - 6;
        if (left + cw > vw - pad) left = vw - cw - pad;
        if (left < pad) left = pad;
        var top = r.bottom + 8;
        if (top + ch > vh - pad) {
            var up = r.top - ch - 8;
            top = up >= pad ? up : Math.max(pad, vh - ch - pad);
        }
        pop.style.left = Math.round(left) + 'px';
        pop.style.top = Math.round(top) + 'px';
    }

    /* 原文例句：从所在句子/段落里截取含该词的那一句，并尽量带上中文翻译 */
    function ctxSentence(el, word) {
        var host = el.closest('.sentence-block, .lm-sent, .lm-para, .eng-text, .para-block');
        if (!host) {
            // 落在标题这类小容器里：向上找一段“像句子”的文字，避免把整张卡片（含按钮）当成例句
            var p0 = el.parentElement, guard = 0;
            while (p0 && p0 !== document.body && guard++ < 5) {
                var t0 = (p0.textContent || '').replace(/\s+/g, ' ').trim();
                if (t0 && t0.length < 600 && /[.!?]/.test(t0)) { host = p0; break; }
                p0 = p0.parentElement;
            }
            if (!host) host = el.parentElement;
        }
        var txt = ((host || el).textContent || '').replace(/\s+/g, ' ').trim();
        if (!txt) return { sent: '', zh: '' };
        var parts = txt.match(/[^.!?]+[.!?]*/g) || [txt];
        var re = new RegExp('\\b' + word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
        var sent = parts[0].trim().slice(0, 200);
        for (var i = 0; i < parts.length; i++) {
            if (re.test(parts[i])) { sent = parts[i].trim(); break; }
        }

        /* 翻译：① 点击块内已有的 .trans-text；② 各模块全局翻译库按句子匹配 */
        var zh = '';
        var sb = el.closest('.sentence-block');
        var tEl = sb ? sb.querySelector('.trans-text') :
            (host && host.querySelector ? host.querySelector('.trans-text') : null);
        if (tEl) zh = tEl.textContent.replace(/\s+/g, ' ').trim();
        if (!zh) {
            var est = sb ? sb.querySelector('.eng-sentence-text') : null;
            if (est) sent = est.textContent.replace(/\s+/g, ' ').trim();
            zh = findMapZh(sent);
        }
        return { sent: sent, zh: zh };
    }

    /* 各模块翻译库变量名不同（translationsMap / translationsTianju / translationsCibu），
       均为顶层 const（不挂 window），通过全局词法环境直接访问；按句子 key 遍历匹配。
       完形补文 / 阅读判断 由页面把当期句子译文写入 window.__xtTrans */
    function normSent(s) {
        return String(s || '').replace(/\s*\([^)]*\)/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
    }
    function findMapZh(sent) {
        if (!sent) return '';
        var i, k, d;
        var maps = [];
        try { if (typeof translationsMap !== 'undefined') maps.push(translationsMap); } catch (e) { }
        try { if (typeof translationsTianju !== 'undefined') maps.push(translationsTianju); } catch (e) { }
        try { if (typeof translationsCibu !== 'undefined') maps.push(translationsCibu); } catch (e) { }
        try { if (window.translationsMap) maps.push(window.translationsMap); } catch (e) { }
        for (i = 0; i < maps.length; i++) {
            for (k in maps[i]) {
                d = maps[i][k];
                if (d && typeof d === 'object' && d[sent]) return d[sent];
            }
        }
        var own = window.__xtTrans;
        if (own && typeof own === 'object') {
            if (own[sent]) return own[sent];
            var ns = normSent(sent);
            for (k in own) {
                if (!own[k]) continue;
                if (normSent(k) === ns) return own[k];
            }
            // 分句规则略有差异时的兜底：包含关系匹配（双方长度 ≥8 字符，避免误命中）
            if (ns.length >= 8) {
                for (k in own) {
                    if (!own[k]) continue;
                    var nk = normSent(k);
                    if (nk.length >= 8 && (ns.indexOf(nk) > -1 || nk.indexOf(ns) > -1)) return own[k];
                }
            }
        }
        return '';
    }
    function hlWord(sent, word) {
        var re = new RegExp('(' + word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
        return esc(sent).replace(re, '<em>$1</em>');
    }
    function posClass(p) {
        p = String(p || '').toLowerCase().replace(/\./g, '');
        if (/^v/.test(p)) return 'pos-v';
        if (/^n/.test(p)) return 'pos-n';
        if (/^adj/.test(p)) return 'pos-adj';
        if (/^adv/.test(p)) return 'pos-adv';
        return 'pos-other';
    }

    function headHtml(word, ph, lemma) {
        var h = '<button class="xt-dict-close" aria-label="关闭" title="关闭">✕</button>';
        // 标题行（右侧留出关闭按钮空间），发音按钮单独一行，避免与 ✕ 重叠
        h += '<div class="xt-dict-head">';
        h += '<span class="xt-dict-word">' + esc(word) + '</span>';
        if (lemma) h += '<span class="xt-dict-ph">（原形 ' + esc(lemma) + '）</span>';
        if (ph) h += '<span class="xt-dict-ph">' + esc(ph) + '</span>';
        h += '</div>';
        h += '<div class="xt-dict-sound">' +
            '<button data-type="uk">🔊 英音</button>' +
            '<button data-type="us">🔊 美音</button></div>';
        return h;
    }

    function ctxHtml(ctx, word) {
        if (!ctx || !ctx.sent) return '';
        var h = '<div class="xt-dict-sec"><div class="xt-dict-sec-t">📌 原文例句' +
            '<button class="xt-dict-ex-snd" title="朗读例句">🔊</button></div>' +
            '<div class="xt-dict-ex">' + hlWord(ctx.sent, word) + '</div>';
        if (ctx.zh) h += '<div class="xt-dict-ex-zh">' + esc(ctx.zh) + '</div>';
        h += '</div>';
        return h;
    }

    function renderLoading(word) {
        card.innerHTML = headHtml(word, '', '') +
            '<div class="xt-dict-loading"><span class="xt-dict-spin"></span>正在查询词典…</div>';
    }

    function renderResult(r, ctx) {
        var h = headHtml(r.display || r.word, r.ph, r.lemma);
        h += '<div class="xt-dict-body">';
        h += ctxHtml(ctx, r.word);
        if (r.defs && r.defs.length) {
            h += '<div class="xt-dict-sec"><div class="xt-dict-sec-t">📖 释义</div>';
            r.defs.forEach(function (d) {
                h += '<div class="xt-dict-def">';
                if (d.pos) h += '<span class="xt-dict-pos ' + posClass(d.pos) + '">' + esc(d.pos) + '</span>';
                h += '<div><div class="xt-dict-zh">' + esc(d.zh || d.en) + '</div>';
                if (d.zh && d.en) h += '<div class="xt-dict-en">' + esc(d.en) + '</div>';
                h += '</div></div>';
            });
            h += '</div>';
        }
        if (r.examples && r.examples.length) {
            h += '<div class="xt-dict-sec"><div class="xt-dict-sec-t">💬 词典例句</div>';
            r.examples.forEach(function (x) {
                h += '<div class="xt-dict-ex">' + hlWord(x, r.word) + '</div>';
            });
            h += '</div>';
        }
        if (!ctx && (!r.defs || !r.defs.length)) {
            h += '<div class="xt-dict-empty">未查到该词的释义，换个词再试试。</div>';
        }
        h += '</div>';
        h += '<div class="xt-dict-foot"><span class="xt-dict-src">来源：' +
            esc((r.srcs && r.srcs.length ? r.srcs.join(' · ') : '本地')) + '</span>' +
            '<button class="xt-dict-add' + (wbHas(r.word) ? ' done' : '') + '">' +
            (wbHas(r.word) ? '✓ 已加入生词本' : '⭐ 加入生词本') + '</button>' +
            '<a class="xt-dict-wb" href="' + WB_URL + '" target="_blank" title="打开生词本">生词本</a></div>';
        card.innerHTML = h;
    }

    function renderFail(word, ctx) {
        var h = headHtml(word, '', '');
        h += '<div class="xt-dict-body">';
        h += ctxHtml(ctx, word);
        h += '<div class="xt-dict-empty">词典服务暂时不可用（网络受限）。<br>' +
            '<button class="xt-dict-retry" id="xtDictRetry">重试</button></div></div>';
        card.innerHTML = h;
        var rb = card.querySelector('#xtDictRetry');
        if (rb) rb.addEventListener('click', function () { open(word, curAnchor); });
    }

    function open(word, anchor) {
        ensurePop();
        var w = norm(word);
        if (!w) return;
        curWord = w;
        curAnchor = anchor || curAnchor;
        curResult = null;
        curCtx = curAnchor ? ctxSentence(curAnchor, w) : { sent: '', zh: '' };

        // 讲解模式正在口播时先暂停
        try {
            var pb = document.getElementById('lmPause');
            if (pb && !pb.disabled) pb.click();
        } catch (e) { }

        document.querySelectorAll('.xt-w.is-active').forEach(function (x) { x.classList.remove('is-active'); });
        if (curAnchor) curAnchor.classList.add('is-active');

        pop.hidden = false;
        mask.hidden = !isMobile();
        renderLoading(w);
        place(curAnchor);

        var got = false;
        resolve(w, function (r) {          // 先到的中文释义
            if (curWord !== w || !r) return;
            got = true;
            curResult = r;
            renderResult(r, curCtx);
            place(curAnchor);
        }).then(function (r) {             // 完整结果（含音标 / 英英例句）
            if (curWord !== w) return;
            if (r) { curResult = r; renderResult(r, curCtx); }
            else if (!got) { renderFail(w, curCtx); }
            place(curAnchor);
        }, function () {
            if (curWord === w && !got) renderFail(w, curCtx);
        });
    }

    function close() {
        if (!pop) return;
        pop.hidden = true;
        if (mask) mask.hidden = true;
        document.querySelectorAll('.xt-w.is-active').forEach(function (x) { x.classList.remove('is-active'); });
        stopAudio();
    }

    /* ---------------- 分词：材料里的英文单词包成可点 span ---------------- */
    function skipNode(node) {
        var p = node.parentElement;
        if (!p) return true;
        if (p.classList && p.classList.contains('xt-w')) return true;
        if (p.closest && p.closest(SKIP_SEL)) return true;
        return false;
    }

    /* 不做容器级缓存标记：内容可能是后填入的（dldy / zikao-test 的 #articleContent），
       每次都遍历一遍，靠「文本节点已包在 .xt-w 里」天然去重，不会重复处理 */
    function markRoot(root) {
        if (!root) return;
        var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
        var targets = [];
        while (walker.nextNode()) {
            var n = walker.currentNode;
            if (!n.nodeValue || !/[A-Za-z]{2,}/.test(n.nodeValue)) continue;
            if (skipNode(n)) continue;
            targets.push(n);
        }
        targets.forEach(function (n) {
            var txt = n.nodeValue;
            var frag = document.createDocumentFragment();
            var last = 0, m, hit = false;
            WORD_RE.lastIndex = 0;
            while ((m = WORD_RE.exec(txt)) !== null) {
                var w = m[0];
                if (w.length < 2) continue;
                if (m.index > last) frag.appendChild(document.createTextNode(txt.slice(last, m.index)));
                var span = document.createElement('span');
                span.className = 'xt-w';
                span.setAttribute('data-w', w);
                span.textContent = w;
                frag.appendChild(span);
                last = m.index + w.length;
                hit = true;
            }
            if (!hit) return;
            if (last < txt.length) frag.appendChild(document.createTextNode(txt.slice(last)));
            if (n.parentNode) n.parentNode.replaceChild(frag, n);
        });
    }

    function markAll() {
        try {
            var roots = document.querySelectorAll(MARK_ROOTS);
            for (var i = 0; i < roots.length; i++) markRoot(roots[i]);
        } catch (e) { }
    }

    /* ---------------- 点击单词 ---------------- */
    document.addEventListener('click', function (e) {
        var el = e.target && e.target.closest ? e.target.closest('.xt-w') : null;
        if (!el) {
            if (pop && !pop.hidden && e.target &&
                !(e.target.closest && e.target.closest('#xtDictPop')) &&
                !(e.target.closest && e.target.closest('.xt-dict-mask'))) close();
            return;
        }
        if (e.target.closest(SKIP_SEL)) return;
        var w = el.getAttribute('data-w');
        if (!w) return;
        if (pop && !pop.hidden && curWord === norm(w) && curAnchor === el) { close(); return; }
        open(w, el);
    }, false);

    /* ---------------- 页面重渲染后重新分词 ---------------- */
    var timer = null, obs = null;
    function schedule() {
        if (timer) clearTimeout(timer);
        timer = setTimeout(function () {
            if (obs) obs.disconnect();
            markAll();
            if (obs && document.body) obs.observe(document.body, { childList: true, subtree: true });
        }, 280);
    }
    function boot() {
        markAll();
        if (window.MutationObserver && document.body) {
            obs = new MutationObserver(schedule);
            obs.observe(document.body, { childList: true, subtree: true });
        }
        window.addEventListener('resize', function () {
            if (pop && !pop.hidden) {
                mask.hidden = !isMobile();
                place(curAnchor);
            }
        });
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
    setTimeout(markAll, 700);
    setTimeout(markAll, 2200);

    window.XT_DICT = { open: open, close: close, lookup: resolve, markAll: markAll, wordbook: wbList };
})();
