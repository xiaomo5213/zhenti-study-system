/**
 * 讲解模式 · 通用引擎（Lecture Core）
 * ==================================================================
 * 目标：一套引擎驱动 6 个题型的讲解模式，题型差异全部由「适配器」吸收。
 *
 * 适配器接口（window.LectureAdapter，每页面实现一份）：
 *   meta(exam)                  -> { title, subtitle, total }
 *   sections(exam)              -> [{ id, title, items:[{ id, text }] }]  朗读材料（左栏）
 *   questions(exam)             -> [{ id, no, stem, answer, options, explain,
 *                                    evidenceRefs:[itemId], sectionRefs:[itemId] }]
 *   optionText(q)               -> 'A. xxx'（可选）
 *   answerText(q)               -> 'A' / 'used' / 'True'（展示用答案原文）
 *   script(exam, qIndex)        -> [{ text, kind, speakText, speakLang, focus }]
 *                                  不提供则由 buildDefaultScript 生成
 *   hasUnderline()              -> 是否支持原文划线（阅读类可 true）
 *
 * 依赖（宿主页面提供，缺失时自动降级）：
 *   window.TTS_WORKER_URL       TTS 接口地址
 *   window.loadVoicePreference() 当前音色（建议多语言版）
 *   window.unlockAudio()        用户手势内解锁音频（可选）
 *   window.getGlobalAudio()     复用页面 audio（可选，引擎自建）
 */
(function (global) {
  'use strict';

  // ================= 常量 / 音色方案 =================
  const ZH_VOICE = 'zh-CN-XiaoxiaoNeural';
  const EN_VOICE_DEFAULT = 'en-US-JennyNeural';

  // 多语言音色：自身即可中英混读 → 整行不切分，避免分段边界误判导致漏读
  const MULTILINGUAL_VOICES = {
    'zh-cn-xiaoxiaomultilingualneural': 1,
    'zh-cn-xiaochenmultilingualneural': 1,
    'zh-cn-xiaoyumultilingualneural': 1,
    'zh-cn-yunyimultilingualneural': 1,
    'en-us-avamultilingualneural': 1,
    'en-us-emmamultilingualneural': 1,
    'en-us-andrewmultilingualneural': 1,
    'en-us-brianmultilingualneural': 1
  };

  function isMultilingualVoice(v) {
    return !!(v && MULTILINGUAL_VOICES[String(v).toLowerCase()]);
  }
  function currentEnVoice() {
    var v = null;
    try { v = global.loadVoicePreference ? global.loadVoicePreference() : null; } catch (e) { v = null; }
    if (v && typeof v === 'string') return v;
    // 兜底：部分页面的 loadVoicePreference 只做同步不返回，直接读下拉框
    try {
      var sel = document.querySelector('#voiceSelect');
      if (sel && sel.value) return sel.value;
    } catch (e2) {}
    try {
      var el = document.getElementById('voiceSelect');
      if (el && el.value) return el.value;
    } catch (e3) {}
    return EN_VOICE_DEFAULT;
  }
  function voiceFor(lang) {
    const en = currentEnVoice();
    if (isMultilingualVoice(en)) return en;
    return lang === 'en' ? en : ZH_VOICE;
  }

  const MAX_SPEAK_CHARS = 180;

  // ================= 文本工具 =================
  function hasChinese(s) { return /[\u4e00-\u9fa5]/.test(s); }
  function hasEnglish(s) { return /[A-Za-z]{2,}/.test(s); }

  // 清洗朗读文本：去引号/书名号/间隔号，括号转停顿，标点序列归一化保留终结符
  function cleanForSpeech(text) {
    if (text == null) return '';
    let s = String(text);
    s = s.replace(/[""\u201C\u201D\u2018\u2019'`]/g, '');
    s = s.replace(/[（(]/g, '，').replace(/[）)]/g, '，');
    s = s.replace(/[《》〈〉【】〔〕]/g, '');
    s = s.replace(/[·•‧]/g, '');
    s = s.replace(/[*#~^|<>{}\[\]\\\/]/g, ' ');
    s = s.replace(/[—–]+/g, '，').replace(/…+|\.{3,}/g, '，');
    const TERM = '。！？.!?';
    s = s.replace(/([，,、；;：:。！？.!?]+)/g, (seq) => {
      for (let i = seq.length - 1; i >= 0; i--) {
        if (TERM.indexOf(seq[i]) >= 0) return seq[i];
      }
      return seq[seq.length - 1];
    });
    s = s.replace(/\s+/g, ' ').trim();
    s = s.replace(/^[，,、；;：:\s]+/, '');
    s = s.replace(/[，,、；;：:\s]+$/, '');
    if (s && !/[。！？.!?]$/.test(s)) s += '。';
    if (!hasChinese(s) && /[A-Za-z]/.test(s)) {
      s = s.replace(/[。！？]/g, (m) => ({ '。': '.', '！': '!', '？': '?' }[m]));
    }
    return s;
  }

  const EN_AS_SEG_MIN_WORDS = 2;
  const EN_AS_SEG_MIN_LETTERS = 12;
  const KEY_EN_WORDS = /^(?:true|false|not\s*given|a|b|c|d|e|f|yes|no)$/i;

  // 中英混排 → 按语言切分
  function splitByLang(text) {
    const s = cleanForSpeech(text);
    if (!s) return [];
    const chunks = [];
    const re = /[\u4e00-\u9fa5]+|[^\u4e00-\u9fa5]+/g;
    let m;
    while ((m = re.exec(s)) !== null) {
      const t = m[0];
      const isZh = hasChinese(t);
      const hasLetter = /[A-Za-z]/.test(t);
      let lang;
      if (isZh) lang = 'zh';
      else if (hasLetter) lang = 'en';
      else {
        const prev = chunks[chunks.length - 1];
        lang = prev ? prev.lang : 'zh';
      }
      chunks.push({ text: t, lang: lang });
    }
    const merged = [];
    chunks.forEach((c) => {
      const prev = merged[merged.length - 1];
      if (prev && prev.lang === c.lang) prev.text += c.text;
      else merged.push({ text: c.text, lang: c.lang });
    });

    const shouldStandaloneEn = (txt) => {
      const t = txt.trim().replace(/^[\s，,。.、；;：:]+|[\s，,。.、；;：:]+$/g, '');
      if (!t) return false;
      const stripped = t.replace(/[\s，,。.、；;：:]/g, ' ').replace(/\s+/g, ' ').trim();
      const toks = stripped.split(' ').filter(Boolean);
      if (toks.length && toks.every((w) => KEY_EN_WORDS.test(w))) return true;
      const words = t.split(/\s+/).filter((w) => /[A-Za-z]/.test(w));
      const letters = (t.match(/[A-Za-z]/g) || []).length;
      return words.length >= EN_AS_SEG_MIN_WORDS || letters >= EN_AS_SEG_MIN_LETTERS;
    };

    for (let i = merged.length - 1; i >= 0; i--) {
      const seg = merged[i];
      if (seg.lang !== 'en' || shouldStandaloneEn(seg.text)) continue;
      const prev = merged[i - 1];
      const next = merged[i + 1];
      if (prev) { prev.text += seg.text; merged.splice(i, 1); }
      else if (next) { next.text = seg.text + next.text; merged.splice(i, 1); }
    }

    const final = [];
    merged.forEach((c) => {
      const prev = final[final.length - 1];
      if (prev && prev.lang === c.lang) prev.text += c.text;
      else final.push({ text: c.text, lang: c.lang });
    });

    const out = final.map((seg) => {
      let t = seg.text.replace(/^[\s，,。.、；;：:！!？?]+/, '').replace(/[\s，,、；;：:]+$/, '').trim();
      if (seg.lang === 'en') {
        t = t.replace(/[，]/g, ', ').replace(/[。]/g, '.').replace(/[、]/g, ', ')
             .replace(/[；]/g, '; ').replace(/[：]/g, ': ').replace(/[！]/g, '!').replace(/[？]/g, '?')
             .replace(/\s{2,}/g, ' ').replace(/\s+([,.;:!?])/g, '$1').trim();
      } else {
        t = t.replace(/[，,]\s*([。！？])/g, '$1');
      }
      return { text: t, lang: seg.lang };
    }).filter((seg) => {
      if (!seg.text) return false;
      return seg.lang === 'zh' ? hasChinese(seg.text) : /[A-Za-z]/.test(seg.text);
    });

    const result = [];
    out.forEach((seg) => {
      if (seg.text.length <= MAX_SPEAK_CHARS) { result.push(seg); return; }
      splitLongSegment(seg.text, seg.lang, MAX_SPEAK_CHARS).forEach((p) => result.push({ text: p, lang: seg.lang }));
    });
    return result;
  }

  function splitLongSegment(text, lang, max) {
    const endRe = lang === 'en' ? /(?<=[.!?])\s+/ : /(?<=[。！？；])/;
    const sents = text.split(endRe).filter((x) => x.trim());
    const out = [];
    let buf = '';
    sents.forEach((s) => {
      let piece = s;
      while (piece.length > max) {
        const softRe = lang === 'en' ? /[,;:]\s+/ : /[，、；：]/;
        let cut = -1;
        for (let i = max; i > max * 0.4; i--) {
          if (softRe.test(piece[i] || '')) { cut = i + 1; break; }
        }
        if (cut < 0) cut = max;
        const head = piece.slice(0, cut).trim();
        if (head) out.push(head);
        piece = piece.slice(cut).trim();
      }
      if (buf && (buf + piece).length > max) { out.push(buf.trim()); buf = piece; }
      else buf += piece;
    });
    if (buf.trim()) out.push(buf.trim());
    return out.filter(Boolean);
  }

  // ================= 默认讲解稿生成 =================
  // 适配器未提供 script() 时使用：题干 → 答案 → 解析 → 依据
  const OPENERS = [
    (n) => `好，我们来看第${n}题。`,
    (n) => `接下来是第${n}题。`,
    (n) => `我们进入第${n}题。`,
    (n) => `现在来分析第${n}题。`
  ];
  const ENDINGS = [
    '好，这一题就讲到这里。',
    '这样这一题就分析完了。',
    '那么这一题的答案就确定了。',
    '这一题的讲解就到这里。'
  ];

  function pick(arr, i) { return arr[Math.abs(i) % arr.length]; }

  function buildDefaultScript(exam, q, qIndex) {
    const A = global.LectureAdapter;
    const lines = [];
    const num = qIndex + 1;

    const push = (text, kind, extra) => {
      const line = Object.assign({ text: String(text), kind: kind, speakText: cleanForSpeech(text) }, extra || {});
      if (!line.speakLang) {
        const t = line.speakText;
        line.speakLang = (hasChinese(t) && hasEnglish(t)) ? 'mixed' : (hasChinese(t) ? 'zh' : 'en');
      }
      if (!line.speakText) line.speakText = String(text).trim();
      lines.push(line);
      return line;
    };

    push(pick(OPENERS, qIndex)(num), 'question');

    // 题干
    if (q.stem) push(`我们先看题目。${q.stem}`, 'question-detail', { focus: 'stem' });

    // 正确答案
    const ansZh = A && A.answerText ? A.answerText(q) : q.answer;
    push(`正确答案是 ${ansZh}。`, 'answer', { focus: 'answer' });

    // 选项逐个朗读（选择题类）
    if (Array.isArray(q.options) && q.options.length) {
      push('我们看一下选项。', 'options-lead');
      q.options.forEach((op) => {
        const t = (A && A.optionText) ? A.optionText(q, op) : (typeof op === 'string' ? op : (op.text || ''));
        if (t) push(t, 'option', { optionRef: (op && op.id != null) ? op.id : null });
      });
    }

    // 解析
    if (q.explain) push(`我们来看解析。${q.explain}`, 'explain', { focus: 'explain' });

    // 依据（可划线）
    const evs = (A && A.evidenceOf) ? A.evidenceOf(exam, q) : [];
    if (evs.length) {
      push('我们再回到文章，找到对应的依据。', 'evidence-lead');
      evs.forEach((ev, i) => {
        const lead = i === 0 ? '文章里是这样写的：' : '紧接着这一句是：';
        push(`${lead}${ev.text}`, 'evidence', { evidenceRef: ev.id, evidenceText: ev.text });
        if (ev.zh) push(`这句话的意思是，${ev.zh}`, 'evidence-zh', { evidenceRef: ev.id });
      });
    }

    push(pick(ENDINGS, qIndex), 'ending');
    return lines;
  }

  // ================= 播放器 =================
  function Player(opts) {
    opts = opts || {};
    this.onLine = opts.onLine || function () {};
    this.onQuestion = opts.onQuestion || function () {};
    this.onEnd = opts.onEnd || function () {};
    this.onStateChange = opts.onStateChange || function () {};
    this.onFallback = opts.onFallback || function () {};
    this.onAutoplayBlocked = opts.onAutoplayBlocked || function () {};
    this.script = [];
    this.cursor = 0;
    this.playing = false;
    this.stopped = false;
    this._ownAudio = null;
    this._gen = 0;
  }

  Player.prototype._getAudio = function () {
    if (!this._ownAudio) {
      const a = new Audio();
      a.preload = 'auto';
      a.setAttribute('playsinline', 'true');
      a.setAttribute('webkit-playsinline', 'true');
      this._ownAudio = a;
    }
    return this._ownAudio;
  };

  Player.prototype.load = function (script) {
    this.stop();
    this.script = script || [];
    this.cursor = 0;
    this.stopped = false;
  };
  Player.prototype.isPlaying = function () { return this.playing; };

  Player.prototype.play = function () {
    if (this.playing) return;
    if (this.cursor >= this.script.length) this.cursor = 0;
    this.playing = true;
    this.stopped = false;
    this._gen++;
    if (this.onStateChange) this.onStateChange(true);
    this._step();
  };

  Player.prototype.pause = function () {
    if (!this.playing) return;
    this._gen++;           // 作废在途回调
    this.playing = false;
    this._silence();
    if (this.onStateChange) this.onStateChange(false);
  };

  Player.prototype.stop = function () {
    this._gen++;
    this.playing = false;
    this.stopped = true;
    this.cursor = 0;
    this._silence();
    if (this.onStateChange) this.onStateChange(false);
  };

  Player.prototype.jumpToQuestion = function (qi) {
    const idx = this.script.findIndex((l) => l.questionIndex === qi && l.kind === 'question');
    if (idx < 0) return;
    const wasPlaying = this.playing;
    this._gen++;
    this._silence();
    this.cursor = idx;
    this.stopped = false;
    if (wasPlaying) {
      this.playing = true;
      this._gen++;
      this._step();
    } else {
      this.playing = false;
      if (this.onStateChange) this.onStateChange(false);
    }
  };

  Player.prototype._silence = function () {
    const a = this._getAudio();
    try {
      a.pause();
      if (a.src) { a.removeAttribute('src'); a.load(); }
    } catch (e) {}
    try { if (global.speechSynthesis) global.speechSynthesis.cancel(); } catch (e) {}
  };

  Player.prototype._step = function () {
    const self = this;
    const gen = this._gen;
    if (!this.playing || this.stopped) return;
    if (this.cursor >= this.script.length) {
      this.playing = false;
      if (this.onEnd) this.onEnd();
      return;
    }
    const line = this.script[this.cursor];
    if (this.onLine) this.onLine(line, this.cursor);
    if (line.questionIndex != null && this.onQuestion) this.onQuestion(line.questionIndex);

    // 预取下一行
    this._prefetch(this.cursor + 1);

    this._speak(line, () => {
      if (gen !== this._gen || !this.playing || this.stopped) return;
      this.cursor++;
      setTimeout(() => {
        if (gen !== this._gen || !this.playing || this.stopped) return;
        this._step();
      }, 260);
    });
  };

  Player.prototype._prefetch = function (idx) {
    const self = this;
    if (!this._cache) this._cache = {};
    if (global.location && global.location.protocol === 'file:') return;
    if (idx >= this.script.length) return;
    if (!global.TTS_WORKER_URL) return;
    const line = this.script[idx];
    if (!line) return;

    this._segmentsOf(line).forEach((seg) => {
      const voice = seg.lang === 'mixed' ? currentEnVoice() : voiceFor(seg.lang === 'en' ? 'en' : 'zh');
      const key = voice + '|' + seg.text;
      if (self._cache[key]) return;
      const controller = new AbortController();
      const to = setTimeout(() => controller.abort(), 20000);
      fetch(global.TTS_WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: seg.text, voice: voice, speed: seg.lang === 'mixed' ? 1.0 : (seg.lang === 'en' ? 0.9 : 1.0) }),
        signal: controller.signal
      })
        .then((res) => { if (!res.ok) throw new Error('pf ' + res.status); return res.blob(); })
        .then((blob) => { clearTimeout(to); if (blob && blob.size >= 512) self._cache[key] = blob; })
        .catch(() => { clearTimeout(to); });
    });
  };

  Player.prototype._takeCached = function (text, voice) {
    if (!this._cache) return null;
    const key = voice + '|' + text;
    const blob = this._cache[key];
    if (blob) { delete this._cache[key]; return blob; }
    return null;
  };

  Player.prototype._segmentsOf = function (line) {
    const speakText = line.speakText || line.text || '';
    const cleaned = cleanForSpeech(speakText) || String(speakText).trim();
    if (!cleaned) return [];
    const zh = hasChinese(cleaned);
    const en = hasEnglish(cleaned);

    // 多语言音色 → 整行送出（超长才切）
    if (isMultilingualVoice(currentEnVoice())) {
      const lang = zh ? (en ? 'mixed' : 'zh') : 'en';
      if (cleaned.length <= MAX_SPEAK_CHARS) return [{ text: cleaned, lang: lang }];
      const parts = splitLongSegment(cleaned, hasChinese(cleaned) ? 'zh' : 'en', MAX_SPEAK_CHARS);
      return parts.map((p) => ({ text: p, lang: zh && en ? 'mixed' : lang }));
    }

    if (zh && en) {
      const segs = splitByLang(cleaned);
      if (segs.length) return segs;
    }
    return [{ text: cleaned, lang: zh ? 'zh' : 'en' }];
  };

  Player.prototype._speak = function (line, done) {
    const self = this;
    const gen = this._gen;
    const alive = () => gen === self._gen && self.playing && !self.stopped;
    const finish = (() => { let c = false; return function () { if (!c) { c = true; done(); } }; })();
    const isLocalFile = global.location && global.location.protocol === 'file:';
    const segs = this._segmentsOf(line);
    if (!segs.length) { finish(); return; }

    let i = 0;
    const next = () => {
      if (!alive()) { finish(); return; }
      if (i >= segs.length) { finish(); return; }
      const seg = segs[i++];
      self._speakSegment(seg, line, isLocalFile, () => {
        if (!alive()) { finish(); return; }
        setTimeout(next, 130);
      });
    };
    next();
  };

  Player.prototype._speakSegment = function (seg, line, isLocalFile, done) {
    const self = this;
    const gen = this._gen;
    const alive = () => gen === self._gen && self.playing && !self.stopped;
    const finish = (() => { let c = false; return function () { if (!c) { c = true; done(); } }; })();

    const isEn = seg.lang === 'en';
    const voice = seg.lang === 'mixed' ? currentEnVoice() : voiceFor(isEn ? 'en' : 'zh');
    const speed = seg.lang === 'mixed' ? 1.0 : (isEn ? 0.9 : 1.0);
    const text = seg.text;

    // 无 TTS 接口 或 本地 file:// → 浏览器语音兜底
    if (isLocalFile || !global.TTS_WORKER_URL) {
      this._fallback({ text: text, speakLang: seg.lang }, finish);
      return;
    }

    const cached = this._takeCached(text, voice);
    if (cached) { this._playBlob(cached, line, finish); return; }

    let attempt = 0;
    const maxAttempts = 4;
    const tryFetch = () => {
      if (!alive()) { finish(); return; }
      attempt++;
      const controller = new AbortController();
      const to = setTimeout(() => controller.abort(), 20000);
      fetch(global.TTS_WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: text, voice: voice, speed: speed }),
        signal: controller.signal
      })
        .then((res) => {
          if (!res.ok) { const e = new Error('接口 ' + res.status); e.retryable = true; throw e; }
          return res.blob();
        })
        .then((blob) => {
          clearTimeout(to);
          if (!alive()) { finish(); return; }
          if (!blob || blob.size < 512) throw new Error('音频为空');
          this._playBlob(blob, line, finish);
        })
        .catch(() => {
          clearTimeout(to);
          if (!alive()) { finish(); return; }
          if (attempt < maxAttempts) setTimeout(tryFetch, 300 * attempt);
          else self._fallback({ text: text, speakLang: seg.lang }, finish);
        });
    };
    tryFetch();
  };

  Player.prototype._playBlob = function (blob, line, done) {
    const self = this;
    const gen = this._gen;
    const finish = (() => { let c = false; return function () { if (!c) { c = true; done(); } }; })();
    const a = this._getAudio();
    let url;
    try { url = URL.createObjectURL(blob); } catch (e) { finish(); return; }
    a.src = url;
    let settled = false;
    const settle = () => {
      if (settled) return;
      settled = true;
      try { URL.revokeObjectURL(url); } catch (e) {}
      finish();
    };
    a.onended = settle;
    a.onerror = settle;
    a.play().catch((e) => {
      if (gen !== self._gen || !self.playing || self.stopped) { settled = true; finish(); return; }
      self.onAutoplayBlocked();
      setTimeout(settle, 800);
    });
  };

  Player.prototype._fallback = function (line, done) {
    const self = this;
    const gen = this._gen;
    if (!('speechSynthesis' in global)) { done(); return; }
    const isEn = line.speakLang === 'en';
    const isMixed = line.speakLang === 'mixed';
    const text = cleanForSpeech(line.text) || String(line.text || '').trim();
    if (!text) { done(); return; }
    try { global.speechSynthesis.cancel(); } catch (e) {}

    const u = new SpeechSynthesisUtterance(text);
    u.lang = (isEn && !isMixed) ? 'en-US' : 'zh-CN';
    u.rate = (isEn && !isMixed) ? 0.9 : 1.0;
    u.pitch = 1;
    const voices = global.speechSynthesis.getVoices() || [];
    const pk = voices.find((v) => (isEn && !isMixed) ? /^en/i.test(v.lang) : /^zh/i.test(v.lang));
    if (pk) u.voice = pk;

    let settled = false;
    const settle = () => { if (!settled) { settled = true; done(); } };
    u.onend = settle;
    u.onerror = settle;
    const est = Math.max(1200, Math.min(15000, text.length * 130));
    setTimeout(() => {
      if (gen !== self._gen || !self.playing || self.stopped) { settled = true; return; }
      settle();
    }, est);

    if (self.onFallback) self.onFallback(text);
    global.speechSynthesis.speak(u);
  };

  // ================= 界面层 =================
  const state = {
    exam: null, script: [], player: null,
    activeQuestion: -1, root: null, onClose: null,
    adapter: null, sections: [], questions: []
  };

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function shell(meta, total, hasUnderline, hasNav) {
    return `
    <div class="lm-mask" id="lmMask"></div>
    <div class="lm-panel" id="lmPanel" role="dialog" aria-label="讲解模式">
      <header class="lm-head">
        <div class="lm-title">
          <span class="lm-badge">🎧 讲解模式</span>
          <h3>${esc(meta.subtitle || meta.title || '')}</h3>
          <span class="lm-meta">${esc(meta.title || '')} · 共 ${total} 题</span>
        </div>
        <button class="lm-close" id="lmClose" title="退出讲解模式">✕</button>
      </header>
      <div class="lm-body">
        ${hasNav ? `<section class="lm-col lm-col-left">
          <div class="lm-col-head"><span class="lm-dot dot-a"></span>英语材料</div>
          <div class="lm-scroll" id="lmArticle"></div>
        </section>` : ''}
        <section class="lm-col lm-col-mid">
          <div class="lm-col-head"><span class="lm-dot dot-b"></span>答案与详解</div>
          <div class="lm-scroll" id="lmExplain"></div>
        </section>
        <section class="lm-col lm-col-right">
          <div class="lm-col-head"><span class="lm-dot dot-c"></span>题号 / 口播</div>
          <div class="lm-controls">
            <button class="lm-btn lm-btn-primary" id="lmPlay">▶ 开始讲解</button>
            <button class="lm-btn" id="lmPause" disabled>⏸ 暂停</button>
            <button class="lm-btn" id="lmStop" disabled>⏹ 停止</button>
            <div class="lm-progress"><div class="lm-progress-bar" id="lmBar"></div></div>
            <div class="lm-status" id="lmStatus">准备就绪</div>
          </div>
          <div class="lm-scroll lm-qlist" id="lmQList"></div>
        </section>
      </div>
      <footer class="lm-foot" id="lmFoot">点击「开始讲解」后逐题口播，讲到哪题高亮哪题${hasUnderline ? '；播到原文依据时，左侧会出现笔迹划线标注' : ''}。</footer>
    </div>`;
  }

  function renderArticle() {
    let html = '';
    state.sections.forEach((sec, si) => {
      const cls = `para-${(si % 5) + 1}`;
      html += `<div class="lm-para ${cls}" data-sec="${si}">`;
      if (sec.title) html += `<div class="lm-sec-title">${esc(sec.title)}</div>`;
      sec.items.forEach((it) => {
        html += `<span class="lm-sent" data-sent="${esc(it.id)}" id="lmSent-${esc(it.id)}">${it.html || esc(it.text)}</span> `;
      });
      html += `</div>`;
    });
    return html;
  }

  function renderExplain() {
    let html = '';
    state.questions.forEach((q, idx) => {
      html += `
      <div class="lm-qcard" data-q="${idx}" id="lmQCard${idx}">
        <div class="lm-qhead">
          <span class="lm-qno">Q${esc(q.no != null ? q.no : idx + 1)}</span>
          ${q.answer ? `<span class="lm-qans">答案 ${esc(q.answerLabel || q.answer)}</span>` : ''}
        </div>
        <div class="lm-qtext">${esc(q.stem || '')}</div>
        ${q.optionsHtml ? `<div class="lm-qopts">${q.optionsHtml}</div>` : ''}
        <div class="lm-qexplain">${esc(q.explain || '暂无解析')}</div>
        ${q.evidence && q.evidence.length ? `<div class="lm-evidence">
            <div class="lm-ev-title">📌 原文依据</div>
            ${q.evidence.map((e) => `<div class="lm-ev-item" data-ev="${esc(e.id)}">
                <div class="lm-ev-en">${esc(e.text)}</div>
                <div class="lm-ev-zh">${esc(e.zh || '')}</div>
              </div>`).join('')}
          </div>` : ''}
      </div>`;
    });
    return html;
  }

  function renderQList() {
    let html = '';
    state.questions.forEach((q, idx) => {
      const label = q.listLabel || q.stem || '';
      const short = label.length > 34 ? label.slice(0, 34) + '…' : label;
      html += `<button class="lm-qitem" data-jump="${idx}">
          <span class="lm-qitem-no">${esc(q.no != null ? q.no : idx + 1)}</span>
          <span class="lm-qitem-txt">${esc(short)}</span>
          <span class="lm-qitem-ans">${esc(q.answerLabel || q.answer || '')}</span>
        </button>`;
    });
    return html;
  }

  // ================= 高亮 / 划线 =================
  function setActiveQuestion(qIdx) {
    if (state.activeQuestion === qIdx) return;
    state.activeQuestion = qIdx;
    state.root.querySelectorAll('.lm-qcard').forEach((el) => {
      el.classList.toggle('active', Number(el.dataset.q) === qIdx);
    });
    state.root.querySelectorAll('.lm-qitem').forEach((el) => {
      const on = Number(el.dataset.jump) === qIdx;
      el.classList.toggle('active', on);
      if (on) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    });
    if (state.root.classList.contains('lm-mobile')) {
      const tb = state.root.querySelector('.lm-tab[data-t="explain"]');
      if (tb) tb.textContent = qIdx >= 0 ? ('✅ 详解 · Q' + (qIdx + 1)) : '✅ 详解';
    }
    const card = state.root.querySelector(`#lmQCard${qIdx}`);
    if (card) card.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  function underlineItem(id) {
    if (id == null) return;
    const el = state.root.querySelector(`#lmSent-${cssEsc(id)}`);
    if (!el) return;
    el.scrollIntoView({ block: 'center', behavior: 'smooth' });
    if (el.classList.contains('lm-underlined')) return;
    const rect = el.getBoundingClientRect();
    const pen = document.createElement('div');
    pen.className = 'lm-pen';
    pen.innerHTML = `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#e0483a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 21l3.5-1L20 6.5a2.1 2.1 0 0 0-3-3L3.5 17 3 21z"/><path d="M15.5 5.5l3 3"/></svg>`;
    pen.style.left = (rect.left + window.scrollX - 4) + 'px';
    pen.style.top = (rect.bottom + window.scrollY - 24) + 'px';
    document.body.appendChild(pen);
    requestAnimationFrame(() => {
      el.classList.add('lm-underlined');
      const travel = Math.max(0, rect.width - 16);
      pen.style.transition = 'transform .85s cubic-bezier(.4,0,.2,1), opacity .35s ease .55s';
      pen.style.transform = `translateX(${travel}px)`;
      pen.style.opacity = '0';
      setTimeout(() => pen.remove(), 1300);
    });
  }

  function setActiveItem(id) {
    state.root.querySelectorAll('.lm-sent.lm-sent-active').forEach((el) => el.classList.remove('lm-sent-active'));
    if (id == null) return;
    const el = state.root.querySelector(`#lmSent-${cssEsc(id)}`);
    if (el) el.classList.add('lm-sent-active');
  }

  function clearUnderline() {
    state.root.querySelectorAll('.lm-sent.lm-underlined').forEach((el) => el.classList.remove('lm-underlined'));
    state.root.querySelectorAll('.lm-sent.lm-sent-active').forEach((el) => el.classList.remove('lm-sent-active'));
    document.querySelectorAll('.lm-pen').forEach((el) => el.remove());
  }

  function cssEsc(s) {
    return String(s).replace(/["\\]/g, (m) => '\\' + m);
  }

  // ================= 移动端 / 微信端适配 =================
  // ≤900px：三栏改为「Tab 切换 + 底部固定控制条」，一次只看一栏，简洁省空间
  function xtIsMobile() {
    return global.matchMedia ? global.matchMedia('(max-width: 900px)').matches : false;
  }

  function xtSetTab(root, t) {
    root._xtTab = t;
    root.setAttribute('data-tab', t);
    root.querySelectorAll('.lm-tab').forEach((b) => {
      b.classList.toggle('is-on', b.getAttribute('data-t') === t);
    });
    if (t === 'article') {
      // 切回材料：滚到最近一次划线 / 正在讲解的句子
      const mark = root.querySelector('.lm-sent.lm-underlined, .lm-sent.lm-sent-active');
      if (mark) mark.scrollIntoView({ block: 'center', behavior: 'smooth' });
    } else if (t === 'explain') {
      const card = root.querySelector('.lm-qcard.active');
      if (card) card.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }

  function mountMobileUI(root, hasNav) {
    const panel = root.querySelector('.lm-panel');
    if (!panel || !xtIsMobile()) return;
    root.classList.add('lm-mobile');

    if (!panel.querySelector('.lm-tabs')) {
      const tabs = document.createElement('div');
      tabs.className = 'lm-tabs';
      tabs.innerHTML =
        (hasNav ? '<button class="lm-tab" data-t="article">📄 材料</button>' : '') +
        '<button class="lm-tab' + (hasNav ? '' : ' is-on') + '" data-t="explain">✅ 详解</button>' +
        '<button class="lm-tab" data-t="nav">☰ 题号</button>';
      panel.insertBefore(tabs, panel.querySelector('.lm-body'));
      tabs.addEventListener('click', (e) => {
        const b = e.target.closest('.lm-tab');
        if (b) xtSetTab(root, b.getAttribute('data-t'));
      });

      // 把口播控制条从右栏移到底部固定条，三个 Tab 下都能操作
      const dock = document.createElement('div');
      dock.className = 'lm-dock';
      const ctl = panel.querySelector('.lm-controls');
      if (ctl) dock.appendChild(ctl);
      panel.appendChild(dock);
    }
    xtSetTab(root, root._xtTab || (hasNav ? 'article' : 'explain'));
  }

  // ================= 打开 / 关闭 =================
  function open(exam, opts) {
    opts = opts || {};
    close(true);
    const A = global.LectureAdapter;
    if (!A) { console.error('[讲解模式] 未找到 LectureAdapter'); return; }

    state.adapter = A;
    state.exam = exam;
    const meta = A.meta ? A.meta(exam) : { title: exam.title || exam.session || '', subtitle: '' };
    state.sections = (A.sections ? A.sections(exam) : []) || [];
    state.questions = (A.questions ? A.questions(exam) : []) || [];
    state.activeQuestion = -1;

    // 生成全篇讲解稿
    const script = [];
    state.questions.forEach((q, qi) => {
      let lines;
      if (A.script) lines = A.script(exam, qi);
      else lines = buildDefaultScript(exam, q, qi);
      (lines || []).forEach((l) => script.push(Object.assign({}, l, { questionIndex: qi })));
    });
    state.script = script;

    const hasUnderline = A.hasUnderline ? !!A.hasUnderline() : false;
    const hasNav = state.sections.length > 0;

    const holder = document.createElement('div');
    holder.className = 'lm-root';
    holder.innerHTML = shell(meta, state.questions.length, hasUnderline, hasNav);
    document.body.appendChild(holder);
    state.root = holder;

    if (hasNav) holder.querySelector('#lmArticle').innerHTML = renderArticle();
    holder.querySelector('#lmExplain').innerHTML = renderExplain();
    holder.querySelector('#lmQList').innerHTML = renderQList();

    function syncButtons() {
      const p = state.player;
      const playBtn = holder.querySelector('#lmPlay');
      const pauseBtn = holder.querySelector('#lmPause');
      const stopBtn = holder.querySelector('#lmStop');
      if (!playBtn) return;
      const playing = p.isPlaying();
      playBtn.disabled = playing;
      pauseBtn.disabled = !playing;
      stopBtn.disabled = !playing && p.cursor === 0;
      playBtn.textContent = playing ? '▶ 讲解中…'
        : (p.cursor > 0 && !p.stopped ? '▶ 继续讲解' : '▶ 开始讲解');
    }

    function setStatus(t) {
      const el = holder.querySelector('#lmStatus');
      if (el) el.textContent = t;
    }
    function updateBar(r) {
      const bar = holder.querySelector('#lmBar');
      if (bar) bar.style.width = Math.round(r * 100) + '%';
    }

    state.player = new Player({
      onLine: (line, idx) => {
        updateBar((idx + 1) / state.script.length);
        syncButtons();
        const qn = (line.questionIndex != null) ? (line.questionIndex + 1) : '';
        if (line.kind === 'question') {
          setActiveQuestion(line.questionIndex);
          setStatus(`正在讲解 第 ${qn} 题`);
        } else if (line.kind === 'answer') {
          setStatus(`第 ${qn} 题 · 公布答案`);
        } else if (line.kind === 'evidence') {
          setStatus(`第 ${qn} 题 · 划线标注原文依据`);
          if (line.evidenceRef != null) {
            setActiveItem(line.evidenceRef);
            underlineItem(line.evidenceRef);
            const evEl = holder.querySelector(`.lm-ev-item[data-ev="${cssEsc(line.evidenceRef)}"]`);
            if (evEl) {
              holder.querySelectorAll('.lm-ev-item.active').forEach((x) => x.classList.remove('active'));
              evEl.classList.add('active');
            }
          }
        } else if (line.kind === 'evidence-zh') {
          setStatus(`第 ${qn} 题 · 依据翻译`);
        } else {
          setStatus(`第 ${qn} 题 · 讲解中`);
        }
      },
      onQuestion: (qi) => setActiveQuestion(qi),
      onEnd: () => { setStatus('✅ 全部讲解完毕'); updateBar(1); syncButtons(); },
      onStateChange: (playing) => {
        syncButtons();
        if (!playing && !state.player.stopped && state.player.cursor > 0) {
          setStatus('已暂停，点击「继续讲解」');
        }
      }
    });

    state.player.onAutoplayBlocked = () => setStatus('⚠️ 浏览器拦截了自动播放，请再点一次「讲解」');
    state.player.onFallback = () => {
      const el = holder.querySelector('#lmStatus');
      const base = el ? el.textContent : '';
      if (base.indexOf('浏览器语音') === -1 && el) el.textContent = base + '（浏览器语音）';
    };

    // 交互
    holder.querySelector('#lmClose').addEventListener('click', close);
    holder.querySelector('#lmMask').addEventListener('click', close);
    holder.querySelector('#lmPlay').addEventListener('click', () => {
      if (state.player.isPlaying()) return;
      if (global.unlockAudio) { try { global.unlockAudio(); } catch (e) {} }
      if (state.player.cursor === 0 || state.player.stopped) {
        clearUnderline();
        state.player.load(state.script);
      }
      state.player.play();
    });
    holder.querySelector('#lmPause').addEventListener('click', () => state.player.pause());
    holder.querySelector('#lmStop').addEventListener('click', () => {
      state.player.stop();
      clearUnderline();
      setActiveQuestion(-1);
      setStatus('已停止');
      updateBar(0);
      syncButtons();
    });
    holder.querySelectorAll('.lm-qitem').forEach((btn) => {
      btn.addEventListener('click', () => {
        const qi = Number(btn.dataset.jump);
        setActiveQuestion(qi);
        if (holder.classList.contains('lm-mobile')) xtSetTab(holder, 'explain');
        if (state.script.length) { clearUnderline(); state.player.jumpToQuestion(qi); }
      });
    });
    holder.querySelectorAll('.lm-qcard').forEach((card) => {
      card.addEventListener('click', () => {
        const qi = Number(card.dataset.q);
        if (state.script.length) { clearUnderline(); state.player.jumpToQuestion(qi); }
      });
    });
    mountMobileUI(holder, hasNav);
    document.addEventListener('keydown', onKey);

    holder._dbg = { player: state.player, getScript: () => state.script };
    global.__lm = holder._dbg;

    document.body.style.overflow = 'hidden';
    state.onClose = opts.onClose || null;
  }

  function onKey(e) {
    if (!state.root) return;
    if (e.key === 'Escape') close();
  }

  function close(silent) {
    if (state.player) state.player.stop();
    if (state.root) {
      document.removeEventListener('keydown', onKey);
      state.root.remove();
      state.root = null;
    }
    document.body.style.overflow = '';
    if (!silent && state.onClose) state.onClose();
  }

  // ================= 对外接口 =================
  global.LectureCore = {
    open: open,
    close: close,
    // 工具（适配器可复用）
    cleanForSpeech: cleanForSpeech,
    splitByLang: splitByLang,
    hasChinese: hasChinese,
    hasEnglish: hasEnglish,
    isMultilingualVoice: isMultilingualVoice,
    currentEnVoice: currentEnVoice,
    voiceFor: voiceFor,
    buildDefaultScript: buildDefaultScript,
    Player: Player,
    ZH_VOICE: ZH_VOICE,
    EN_VOICE_DEFAULT: EN_VOICE_DEFAULT,
    MULTILINGUAL_VOICES: MULTILINGUAL_VOICES,
    _state: state
  };
})(window);
