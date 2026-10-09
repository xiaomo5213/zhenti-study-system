/**
 * 讲解模式引擎（Lecture Mode）
 * ------------------------------------------------------------------
 * 三栏布局：左=英语材料原文 / 中=答案与详解 / 右=题号列表 + 口播控制
 *
 * 核心能力：
 *  1. 逐题口播：TTS 逐句合成，播到哪句哪句高亮
 *  2. 题目高亮：讲到第 N 题时，中间详解与右侧题号同步高亮
 *  3. 原文划线：播报"依据句"时，左侧原文对应句子上出现一支鼠标笔逐字划出横线
 *
 * 依赖：宿主页面提供
 *   - window.TTS_WORKER_URL / window.loadVoicePreference() / window.getGlobalAudio()
 *   - 一个符合 LectureAdapter 结构的数据适配器
 */
(function (global) {
  'use strict';

  // ============ 工具 ============
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function escapeHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  const ANSWER_LABEL = { A: 'True（正确）', B: 'False（错误）', C: 'Not Given（未提及）' };

  // ============ 音色方案 ============
  // 中文音色：读中文片段
  const ZH_VOICE = 'zh-CN-XiaoxiaoNeural';
  // 英文缺省音色：读英文片段（宿主可用 localStorage 覆盖）
  const EN_VOICE_DEFAULT = 'en-US-JennyNeural';

  // 多语言音色白名单：这些音色**本身就能中英混读**，无需按语言切分。
  // 命中时整行文本一次性送 TTS，由引擎自行处理中英切换 ——
  // 既避免分段边界判断失误导致的漏读，又保持同一个人的音色，听感更连贯。
  const MULTILINGUAL_VOICES = {
    // 中文多语言
    'zh-cn-xiaoxiaomultilingualneural': true,
    'zh-cn-xiaochenmultilingualneural': true,
    'zh-cn-xiaoyumultilingualneural': true,
    'zh-cn-yunyimultilingualneural': true,
    // 英文多语言
    'en-us-avamultilingualneural': true,
    'en-us-emmamultilingualneural': true,
    'en-us-andrewmultilingualneural': true,
    'en-us-brianmultilingualneural': true
  };

  // 该音色是否为多语言音色（可中英混读）
  function isMultilingualVoice(v) {
    return !!(v && MULTILINGUAL_VOICES[String(v).toLowerCase()]);
  }

  // 当前该用哪个音色读英文段落
  function currentEnVoice() {
    return (global.loadVoicePreference ? global.loadVoicePreference() : null) || EN_VOICE_DEFAULT;
  }

  // 当前讲解模式使用的音色：英文段落用宿主偏好；中文段落固定中文音色。
  // 若宿主偏好的是多语言音色，则整行统一用该音色（不再区分中英）。
  function voiceFor(lang) {
    const en = currentEnVoice();
    if (isMultilingualVoice(en)) return en;
    return lang === 'en' ? en : ZH_VOICE;
  }

  // ============ 发音文本清洗 ============
  // TTS 引擎会把引号、括号等当作标记或静默符号处理，导致"有文字但没声音"。
  // 这里统一把标点转成引擎一定能读出的形式（显示文本不受影响，只改朗读文本）。
  //
  // 设计要点（避免"末尾句号被逗号吃掉"这类 bug）：
  //   - 先做字符替换（引号/括号/书名号/破折号）
  //   - 再做"标点序列归一化"：只保留序列的最后一个标点，且拒绝把句末句号降级为逗号
  function cleanForSpeech(text) {
    if (text == null) return '';
    let s = String(text);

    // 1) 引号（直/弯/中文）→ 去掉，避免被当作 SSML 标记
    s = s.replace(/[""\u201C\u201D\u2018\u2019'`]/g, '');
    // 2) 括号 → 逗号停顿（保留括号内内容，"（True）" → "，True，"）
    s = s.replace(/[（(]/g, '，').replace(/[）)]/g, '，');
    // 3) 书名号 → 去掉
    s = s.replace(/[《》〈〉【】〔〕]/g, '');
    // 4) 间隔号 → 去掉
    s = s.replace(/[·•‧]/g, '');
    // 5) 其他控制符号 → 空格
    s = s.replace(/[*#~^|<>{}\[\]\\\/]/g, ' ');
    // 6) 破折号 / 省略号 → 逗号停顿
    s = s.replace(/[—–]+/g, '，').replace(/…+|\.{3,}/g, '，');

    // 7) 标点序列归一化
    //    规则：把连续标点压成一个；若序列中含句子终结符（。！？.!?），保留终结符；
    //          否则保留最后一个（，、；：）。
    const TERM = '。！？.!?';
    s = s.replace(/([，,、；;：:。！？.!?]+)/g, (seq) => {
      // 序列里找终结符（从后往前优先，句末语气更重要）
      for (let i = seq.length - 1; i >= 0; i--) {
        if (TERM.indexOf(seq[i]) >= 0) {
          // 半角 .!? 保持半角；中文终结符保持中文
          return seq[i];
        }
      }
      return seq[seq.length - 1];
    });

    // 8) 归一空白
    s = s.replace(/\s+/g, ' ').trim();
    // 9) 去句首标点（保留句末终结符）
    s = s.replace(/^[，,、；;：:\s]+/, '');
    // 10) 去句末逗号/顿号/分号/冒号（**不**去 .!?。！？），
    //     若去掉后句子没结束符且有一定长度，补一个句号
    s = s.replace(/[，,、；;：:\s]+$/, '');
    if (s && !/[。！？.!?]$/.test(s)) s += '。';
    // 11) 英文句末的中文句号统一为半角点（英文音色更稳）
    if (!hasChinese(s) && /[A-Za-z]/.test(s)) s = s.replace(/[。！？]/g, (m) => ({ '。': '.', '！': '!', '？': '?' }[m]));
    return s;
  }

  // 判断文本是否含中文
  function hasChinese(s) { return /[\u4e00-\u9fa5]/.test(s); }
  // 判断文本是否含英文单词（2 个以上连续字母）
  function hasEnglish(s) { return /[A-Za-z]{2,}/.test(s); }

  // 把中英混排文本切成 [{ text, lang }] 片段，各用对应音色朗读，
  // 避免"中文音色读英文糊过去"造成的漏读。
  // 策略（重要）：
  //   - 中文为界切块；非中文块含英文字母才算"英文候选"
  //   - 独立成段条件（满足其一即可）：
  //       ① 是"关键英文词"（True / False / Not Given / A / B / C）→ 必须用英文音色
  //          （这些是答案本身，用中文音色会读成含糊的音，必须切出来）
  //       ② 英文块足够长（≥2 个单词或 ≥12 字母）
  //   - 其他零碎短英文并入相邻中文段，避免音色来回跳变
  //   - 数字/标点跟随前一块语言
  const EN_AS_SEG_MIN_WORDS = 2;    // 英文块至少这么多词才独立成段
  const EN_AS_SEG_MIN_LETTERS = 12; // 或字母数达到这个长度
  // 关键英文词白名单：这些必须独立成段、用英文音色
  const KEY_EN_WORDS = /^(?:true|false|not\s*given|a|b|c|yes|no)$/i;

  // 单次送 TTS 的最大字符数（超长会合成不稳定）；与 splitByLang 内部的 MAX_SEG 保持一致
  const MAX_SPEAK_CHARS = 180;

  function splitByLang(text) {
    const s = cleanForSpeech(text);
    if (!s) return [];

    // 按"中文字符"与"非中文字符"切块
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

    // 合并相邻同语言块
    const merged = [];
    chunks.forEach((c) => {
      const prev = merged[merged.length - 1];
      if (prev && prev.lang === c.lang) prev.text += c.text;
      else merged.push({ text: c.text, lang: c.lang });
    });

    // 决定哪些"英文块"值得独立成段
    const shouldStandaloneEn = (txt) => {
      const t = txt.trim().replace(/^[\s，,。.、；;：:]+|[\s，,。.、；;：:]+$/g, '');
      if (!t) return false;
      // 拆掉标点后看是否为关键英文词组合（如 "A，True" → "A True"）
      const stripped = t.replace(/[\s，,。.、；;：:]/g, ' ').replace(/\s+/g, ' ').trim();
      const toks = stripped.split(' ').filter(Boolean);
      // ① 全是关键英文词 → 一定独立（"A True" / "Not Given" / "True"）
      if (toks.length && toks.every((w) => KEY_EN_WORDS.test(w))) return true;
      // ② 足够长的英文块
      const words = t.split(/\s+/).filter((w) => /[A-Za-z]/.test(w));
      const letters = (t.match(/[A-Za-z]/g) || []).length;
      return words.length >= EN_AS_SEG_MIN_WORDS || letters >= EN_AS_SEG_MIN_LETTERS;
    };

    // 把不够格的英文块并入相邻段（优先并入前一段，无前段则并入后一段）
    for (let i = merged.length - 1; i >= 0; i--) {
      const seg = merged[i];
      if (seg.lang !== 'en' || shouldStandaloneEn(seg.text)) continue;
      const prev = merged[i - 1];
      const next = merged[i + 1];
      if (prev) {
        prev.text += seg.text;
        merged.splice(i, 1);
      } else if (next) {
        next.text = seg.text + next.text;
        merged.splice(i, 1);
      }
    }

    // 重新合并相邻同语言块（上一步并入后可能产生相邻同语言）
    const final = [];
    merged.forEach((c) => {
      const prev = final[final.length - 1];
      if (prev && prev.lang === c.lang) prev.text += c.text;
      else final.push({ text: c.text, lang: c.lang });
    });

    // 收尾：去段首尾游离标点；英文段的中文标点换成英文标点；丢掉无有效内容的段
    const out = final
      .map((seg) => {
        let t = seg.text
          .replace(/^[\s，,。.、；;：:！!？?]+/, '')
          .replace(/[\s，,、；;：:]+$/, '')
          .trim();
        // 英文段：把残留的中文标点转成英文标点，避免英文音色读不出来
        if (seg.lang === 'en') {
          t = t.replace(/[，]/g, ', ').replace(/[。]/g, '.').replace(/[、]/g, ', ')
               .replace(/[；]/g, '; ').replace(/[：]/g, ': ').replace(/[！]/g, '!').replace(/[？]/g, '?')
               .replace(/\s{2,}/g, ' ').replace(/\s+([,.;:!?])/g, '$1').trim();
        } else {
          // 中文段：清掉尾部孤立标点（保留句末句号）
          t = t.replace(/[，,]\s*([。！？])/g, '$1');
        }
        return { text: t, lang: seg.lang };
      })
      .filter((seg) => {
        if (!seg.text) return false;
        return seg.lang === 'zh' ? hasChinese(seg.text) : /[A-Za-z]/.test(seg.text);
      });

    // 超长片段（>180 字）按句子边界再切一次，避免单次请求过大导致合成不稳定
    const MAX_SEG = 180;
    const result = [];
    out.forEach((seg) => {
      if (seg.text.length <= MAX_SEG) { result.push(seg); return; }
      const parts = splitLongSegment(seg.text, seg.lang, MAX_SEG);
      parts.forEach((p) => result.push({ text: p, lang: seg.lang }));
    });
    return result;
  }

  // 把超长文本按句子边界切成 ≤max 字的片段；
  // 若单句本身就超过 max，则在逗号/空格处继续软切，保证不会出现超长片段
  function splitLongSegment(text, lang, max) {
    const endRe = lang === 'en' ? /(?<=[.!?])\s+/ : /(?<=[。！？；])/;
    const sents = text.split(endRe).filter((x) => x.trim());
    const out = [];
    let buf = '';
    sents.forEach((s) => {
      let piece = s;
      // 单句超长 → 先按逗号软切
      while (piece.length > max) {
        const softRe = lang === 'en' ? /[,;:]\s+/ : /[，、；：]/;
        let cut = -1;
        for (let i = max; i > max * 0.4; i--) {
          if (softRe.test(piece[i] || '')) { cut = i + 1; break; }
        }
        if (cut < 0) cut = max; // 实在找不到标点，硬切
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

  // ============ 采集依据句 ============
  // 从题目中提取"原文依据"句子对象数组 [{index, en, zh}]
  function collectEvidence(exam, q) {
    const flat = [];
    (exam.paragraphs || []).forEach((p, pIdx) => {
      (p.sentences || []).forEach((s, sIdx) => {
        flat.push(Object.assign({}, s, { paraIdx: pIdx, sentIdx: sIdx, index: flat.length }));
      });
    });

    const out = [];
    const pushIdx = (i) => {
      if (typeof i !== 'number' || i < 0 || i >= flat.length) return;
      if (out.some((x) => x.index === i)) return;
      out.push(flat[i]);
    };

    // 1) 优先用 sourceIndices
    if (Array.isArray(q.sourceIndices)) q.sourceIndices.forEach(pushIdx);

    // 2) 回退：从 explain 中提取英文引号内容，在原文里模糊匹配
    if (!out.length && q.explain) {
      const quoted = q.explain.match(/[""\"]([A-Za-z][^""\"]{12,})[""\"]/g) || [];
      quoted.forEach((raw) => {
        const needle = raw.replace(/^[""\"']|[""\"']$/g, '').replace(/\.\.\.|…/g, '').trim().toLowerCase();
        if (needle.length < 10) return;
        const core = needle.slice(0, 30);
        const hit = flat.find((s) => (s.en || '').toLowerCase().includes(core));
        if (hit) pushIdx(hit.index);
      });
    }
    return out;
  }

  // ============ 生成讲解稿 ============
  // 返回 [{ text, kind, evidenceIndex, speakLang, speakText }]
  //   text     —— 界面展示用（可含引号等符号，保持可读）
  //   speakText—— 实际送 TTS 的文本（已清洗，保证每个字都能发音）
  //   speakLang—— 'zh' | 'en' | 'mixed'（mixed 会在播放时按语言再切分）
  function buildScript(exam, q, qIndex) {
    const lines = [];
    const num = qIndex + 1;
    const evList = collectEvidence(exam, q);

    // 小工具：同时写入展示文本与朗读文本
    const push = (text, kind, extra) => {
      const line = Object.assign({ text: text, kind: kind, speakText: cleanForSpeech(text) }, extra || {});
      if (!line.speakLang) {
        const t = line.speakText;
        line.speakLang = (hasChinese(t) && hasEnglish(t)) ? 'mixed' : (hasChinese(t) ? 'zh' : 'en');
      }
      // 兜底：清洗后为空则用原文，绝不让某一行完全没声音
      if (!line.speakText) line.speakText = String(text).trim();
      lines.push(line);
      return line;
    };

    push(`第${num}题，${q.q}`, 'question');

    // 答案解析（示范语音）：「所以选 A（True）」这类要读得清楚
    push(`正确答案是${answerLabelZh(q.answer)}。`, 'answer');

    // 解析：清理后朗读。依据句会单独朗读，所以这里把夹带的引文/定位语直接删掉，
    // 不留"（见原文依据）"占位符，避免读起来反复出现啰嗦的过渡语。
    let explain = (q.explain || '').replace(/\s+/g, ' ').trim();

    // ===== 解析文本清理 =====
    // 说明：这里只做"移除重复朗读 + 修破损标点"，尽量不动原句结构，
    // 以免正则改动过度导致语句不通（原解析文本来自真题，措辞本身是通顺的）。
    let explainDisplay = explain
      // 1) 长引文（≥20字）是依据原文，会单独朗读 → 删除；短引文（题目复述）保留
      .replace(/[""\u201C\u201D]([^""\u201C\u201D]{20,})[""\u201C\u201D]/g, '')
      // 2) "原文第X段第Y句："这类纯定位语删除（信息在后文依据里）
      .replace(/原文第[一二三四五六七八九十百千\d]+段(第[一二三四五六七八九十百千\d]+句)?\s*(最后[一二三四五六七八九十\d]+[句段])?\s*(只)?(提到|说|讲|指出|表明)?\s*[，,：:]\s*/g, '')
      // 未带冒号的连写形式："原文第三段最后一句只提到…" → 去掉定位部分，保留后文
      .replace(/^原文第[一二三四五六七八九十百千\d]+段(第[一二三四五六七八九十百千\d]+句)?\s*(最后[一二三四五六七八九十\d]+[句段])?\s*(只)?(提到|说|讲|指出|表明)?\s*/g, '')
      .replace(/原文(只|仅)(提到|说|讲|讨论|涉及)\s*[，,：:]\s*/g, '')
      // 3) 孤立过渡语与占位残渣
      .replace(/原文此处/g, '')
      .replace(/意思是：\s*(?=[，,。.、；;：:]|$)/g, '')
      // 4) 修破损标点（只处理明显异常的相邻标点）
      .replace(/([，,。.、；;：:])\s*(?=[，,。.、；;：:])/g, '')
      .replace(/[（(]\s*[）)]/g, '')
      .replace(/[，,]{2,}/g, '，')
      .replace(/\s{2,}/g, ' ')
      .replace(/^[\s，,。.、；;：:]+/, '')
      .trim();
    if (explainDisplay && !/[。.！!？?]$/.test(explainDisplay)) explainDisplay += '。';

    // 清完后若只剩标点或没实质内容，用题目本身兜底（保证一定有话说）
    if (!/[\u4e00-\u9fa5A-Za-z0-9]/.test(explainDisplay)) {
      explainDisplay = '请参考下方原文依据进行判断。';
    }
    push(explainDisplay, 'explain');

    // 依据句逐句朗读并划线
    // 注意：不硬编码 speakLang —— "文章里是这样写的：" 是中文引导语，
    // 整行的 speakLang 交给 push() 自动判定为 mixed，播放时再按语言切分，
    // 中文引导语用中文音色、英文原句用英文音色，避免"用英文音色读中文"造成漏读。
    evList.forEach((ev) => {
      push(`文章里是这样写的：${ev.en}`, 'evidence', {
        evidenceIndex: ev.index,
        evidenceText: ev.en
      });
      if (ev.zh) {
        push(`这句话的意思是，${ev.zh}`, 'evidence-zh', {
          evidenceIndex: ev.index
        });
      }
    });

    return lines;
  }

  function answerLabelZh(a) {
    return ({ A: 'True，也就是说，题目说法与原文一致', B: 'False，也就是说，题目说法与原文相反', C: 'Not Given，也就是说，原文没有提及' })[a] || a;
  }

  // ============ 播放控制器 ============
  function LecturePlayer(opts) {
    this.onLine = opts.onLine || function () {};
    this.onQuestion = opts.onQuestion || function () {};
    this.onEnd = opts.onEnd || function () {};
    this.onStateChange = opts.onStateChange || function () {};
    this.script = [];
    this.cursor = 0;
    this.playing = false;
    this.stopped = false;
    this._audio = null;
    // 讲解模式使用独立 Audio 实例，避免与页面上的"句子发音"共用同一个 audio 而互相打断
    this._ownAudio = null;
    // 播放代次：每次 暂停/停止/跳转 递增，用于作废所有在途的异步回调
    this._gen = 0;
  }

  LecturePlayer.prototype._getAudio = function () {
    if (!this._ownAudio) {
      const a = new Audio();
      a.preload = 'auto';
      a.setAttribute('playsinline', 'true');
      a.setAttribute('webkit-playsinline', 'true');
      this._ownAudio = a;
    }
    return this._ownAudio;
  };

  LecturePlayer.prototype.load = function (script) {
    this.stop();
    this.script = script || [];
    this.cursor = 0;
  };

  LecturePlayer.prototype.isPlaying = function () { return this.playing; };

  LecturePlayer.prototype.play = function () {
    if (this.playing) return;
    this.playing = true;
    this.stopped = false;
    this.onStateChange(true);
    this._step();
  };

  LecturePlayer.prototype.pause = function () {
    if (!this.playing) return;
    this.playing = false;
    // 代次 +1：所有在途的 fetch / 定时器回调据此判定"已过期"，不再推进
    this._gen = (this._gen || 0) + 1;
    this.onStateChange(false);
    this._silence();
  };

  LecturePlayer.prototype.resume = function () {
    if (this.playing || this.stopped) return;
    this.playing = true;
    this._gen = (this._gen || 0) + 1;
    this.onStateChange(true);
    // 从当前光标处续播
    this._step();
  };

  LecturePlayer.prototype.stop = function () {
    this.playing = false;
    this.stopped = true;
    this.cursor = 0;
    this._gen = (this._gen || 0) + 1;
    this.onStateChange(false);
    this._silence();
  };

  // 立即静音：停掉 HTMLAudio 与浏览器语音合成两条通道
  LecturePlayer.prototype._silence = function () {
    if (this._audio) {
      try {
        this._audio.pause();
        this._audio.currentTime = 0;
        this._audio.onended = null;
        this._audio.onerror = null;
        if (this._audio.src && this._audio.src.startsWith('blob:')) {
          URL.revokeObjectURL(this._audio.src);
        }
        this._audio.removeAttribute('src');
        this._audio.load();   // 强制停止缓冲/播放
      } catch (e) { /* 忽略 */ }
    }
    try {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    } catch (e) { /* 忽略 */ }
  };

  LecturePlayer.prototype.seekToLine = function (idx) {
    this.stop();
    this.cursor = Math.max(0, Math.min(idx, this.script.length - 1));
    this.stopped = false;
    this.playing = true;
    this._gen = (this._gen || 0) + 1;
    this.onStateChange(true);
    this._step();
  };

  LecturePlayer.prototype.jumpToQuestion = function (qIndex) {
    const idx = this.script.findIndex((l) => l.questionIndex === qIndex);
    this.seekToLine(idx < 0 ? 0 : idx);
  };

  LecturePlayer.prototype._step = function () {
    if (!this.playing || this.stopped) return;
    if (this.cursor >= this.script.length) {
      this.playing = false;
      this.onStateChange(false);
      this.onEnd();
      return;
    }
    const gen = this._gen;
    const line = this.script[this.cursor];
    this.onLine(line, this.cursor);
    if (line.questionIndex != null) this.onQuestion(line.questionIndex);
    // 预取下一句，减少等待和失败率
    this._prefetch(this.cursor + 1);
    this._speak(line, () => {
      // 代次已变（期间暂停/停止/跳转）→ 丢弃这次回调，不推进
      if (gen !== this._gen || !this.playing || this.stopped) return;
      this.cursor++;
      // 句间留 300ms 空隙，避免连续请求触发接口限流，也让高亮切换更自然
      setTimeout(() => {
        if (gen !== this._gen || !this.playing || this.stopped) return;
        this._step();
      }, 300);
    });
  };

  // 预取：提前请求下一行的音频片段并缓存为 blob（不播放）
  // 一行可能被切成多个语言片段（如 question 的中英混排），逐个预取
  LecturePlayer.prototype._prefetch = function (idx) {
    const self = this;
    if (!this._cache) this._cache = {};
    // 本地 file:// 下跨域 fetch 必失败，不浪费请求
    if (global.location && global.location.protocol === 'file:') return;
    if (idx >= this.script.length) return;
    const line = this.script[idx];
    if (!line) return;

    this._segmentsOf(line).forEach((seg) => {
      const isEn = seg.lang === 'en';
      // 多语言音色 → 中英段统一用同一个音色（否则预取缓存键会对不上实际播放用的音色）
      const voice = seg.lang === 'mixed' ? currentEnVoice() : voiceFor(isEn ? 'en' : 'zh');
      const key = voice + '|' + seg.text;
      if (self._cache[key]) return;

      const controller = new AbortController();
      const to = setTimeout(() => controller.abort(), 20000);
      fetch(global.TTS_WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: seg.text, voice: voice, speed: isEn ? 0.9 : 1.0 }),
        signal: controller.signal
      })
        .then((res) => { if (!res.ok) throw new Error('prefetch ' + res.status); return res.blob(); })
        .then((blob) => {
          clearTimeout(to);
          if (blob && blob.size >= 512) self._cache[key] = blob;
        })
        .catch(() => { clearTimeout(to); });
    });
  };

  // 取出预取缓存（键 = 音色 + '|' + 文本，与预取时一致）
  LecturePlayer.prototype._takeCached = function (text, voice) {
    if (!this._cache) return null;
    const key = voice + '|' + text;
    const blob = this._cache[key];
    if (blob) { delete this._cache[key]; return blob; }
    return null;
  };

  // 取出一行的朗读分段：[{ text, lang }]
  // 关键策略（修复漏读）：
  //   只要该行**同时含中文和英文**，就一律走 splitByLang 按语言切分，
  //   不信任数据里存的 speakLang（那是生成时的静态标注，容易与实际文本不同步）。
  //   这样可以彻底避免"用中文音色读英文"或"用英文音色读中文"导致的整段糊掉/跳过。
  //
  // 例外：当使用**多语言音色**时，该音色自身就能中英混读 →
  //   整行一次性送出（不切分），由引擎处理语言切换，杜绝分段边界误判。
  LecturePlayer.prototype._segmentsOf = function (line) {
    const speakText = line.speakText || line.text || '';
    const cleaned = cleanForSpeech(speakText) || String(speakText).trim();
    if (!cleaned) return [];

    const zh = hasChinese(cleaned);
    const en = hasEnglish(cleaned);

    // 多语言音色 → 不切分，整行交给它混读（仍做超长保护）
    if (isMultilingualVoice(currentEnVoice())) {
      const lang = zh ? (en ? 'mixed' : 'zh') : 'en';
      if (cleaned.length <= MAX_SPEAK_CHARS) return [{ text: cleaned, lang: lang }];
      // 整行太长 → 按句子边界切，但不按语言切
      const parts = splitLongSegment(cleaned, hasChinese(cleaned) ? 'zh' : 'en', MAX_SPEAK_CHARS);
      return parts.map((p) => ({ text: p, lang: zh && en ? 'mixed' : lang }));
    }

    // 中英混排 → 按语言切分（这是最关键的一步）
    if (zh && en) {
      const segs = splitByLang(cleaned);
      if (segs.length) return segs;
    }
    // 单一语言 → 直接用对应音色
    const lang = zh ? 'zh' : 'en';
    return [{ text: cleaned, lang: lang }];
  };

  LecturePlayer.prototype._speak = function (line, done) {
    const self = this;
    const gen = this._gen;
    // 代次已过期（暂停/停止/跳转）→ 不再发声，也不推进
    const alive = () => gen === self._gen && self.playing && !self.stopped;
    const finish = (() => {
      let called = false;
      return function () { if (!called) { called = true; done(); } };
    })();

    // 本地 file:// 打开时，浏览器把 Origin 视为 null，跨域 fetch 必被拦截
    // （重试 4 次要等十几秒才失败）→ 直接走浏览器语音，保证讲解与划线能正常推进
    const isLocalFile = global.location && global.location.protocol === 'file:';

    const segs = this._segmentsOf(line);
    if (!segs.length) { finish(); return; }

    // 依次朗读各语言片段（同一行的中文段+英文段顺序播完才算这行结束）
    let segIdx = 0;
    const nextSeg = () => {
      if (!alive()) { finish(); return; }
      if (segIdx >= segs.length) { finish(); return; }
      const seg = segs[segIdx++];
      self._speakSegment(seg, line, isLocalFile, () => {
        if (!alive()) { finish(); return; }
        // 段间留 150ms，听感更自然
        setTimeout(nextSeg, 150);
      });
    };
    nextSeg();
  };

  // 朗读单个语言片段（seg: {text, lang}）
  LecturePlayer.prototype._speakSegment = function (seg, line, isLocalFile, done) {
    const self = this;
    const gen = this._gen;
    const alive = () => gen === self._gen && self.playing && !self.stopped;
    const finish = (() => {
      let called = false;
      return function () { if (!called) { called = true; done(); } };
    })();

    const isEn = seg.lang === 'en';
    const voice = seg.lang === 'mixed' ? currentEnVoice() : voiceFor(isEn ? 'en' : 'zh');
    // 多语言音色读混排时用正常语速；纯英文段稍慢便于跟读
    const speed = seg.lang === 'mixed' ? 1.0 : (isEn ? 0.9 : 1.0);
    const text = seg.text;

    if (isLocalFile) {
      this._speakFallback({ text: text, speakLang: seg.lang }, finish);
      return;
    }

    // 命中预取缓存则直接播放
    const cached = this._takeCached(text, voice);
    if (cached) {
      this._playBlob(cached, line, finish);
      return;
    }

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
          if (!res.ok) {
            const err = new Error('接口返回 ' + res.status);
            err.retryable = true; // 5xx / 429 一律重试
            throw err;
          }
          return res.blob();
        })
        .then((blob) => {
          clearTimeout(to);
          if (!alive()) { finish(); return; }
          if (!blob || blob.size < 512) {
            // 返回了空音频，视为失败并重试
            const err = new Error('返回音频为空');
            err.retryable = true;
            throw err;
          }
          self.lastError = null;
          self._playBlob(blob, line, finish);
        })
        .catch((e) => {
          clearTimeout(to);
          // 代次已变或已暂停 → 不重试、不回退、不出声
          if (!alive()) { finish(); return; }
          // 网络层失败（TypeError / AbortError / 5xx / 429）统一重试
          const canRetry = attempt < maxAttempts && self.playing && !self.stopped;
          if (canRetry) {
            // 指数退避：500 / 1000 / 1800 ms
            const delay = e && e.name === 'AbortError' ? 400 : Math.min(1800, 500 * attempt);
            setTimeout(tryFetch, delay);
            return;
          }
          // 重试用尽 → 回退到浏览器内置语音，保证讲解不中断
          self.lastError = (e && e.name === 'AbortError')
            ? 'TTS 请求超时，已切换浏览器语音'
            : ('TTS 请求失败，已切换浏览器语音');
          if (self.onTtsError) self.onTtsError(self.lastError);
          self._speakFallback({ text: text, speakLang: seg.lang }, finish);
        });
    };

    tryFetch();
  };

  // 播放一个音频 blob（复用同一 Audio 实例）
  LecturePlayer.prototype._playBlob = function (blob, line, finish) {
    const self = this;
    const gen = this._gen;
    if (gen !== self._gen || !self.playing || self.stopped) { finish(); return; }

    const url = URL.createObjectURL(blob);
    const audio = self._getAudio();
    self._audio = audio;
    audio.src = url;

    let settled = false;
    const done = () => {
      if (settled) return;
      settled = true;
      URL.revokeObjectURL(url);
      finish();
    };

    audio.onended = done;
    audio.onerror = () => {
      URL.revokeObjectURL(url);
      if (gen !== self._gen || !self.playing || self.stopped) { settled = true; finish(); return; }
      self.lastError = '音频解码失败，切换浏览器语音';
      if (self.onTtsError) self.onTtsError(self.lastError);
      settled = true;
      self._speakFallback(line, finish);
    };

    const pr = audio.play();
    if (pr && pr.catch) {
      pr.catch((e) => {
        // 暂停/停止导致的 play() 中断（AbortError）不算异常，静默处理
        if (gen !== self._gen || !self.playing || self.stopped) { settled = true; finish(); return; }
        self.lastError = '浏览器阻止了自动播放（' + (e && e.name ? e.name : 'unknown') + '）';
        if (self.onAutoplayBlocked) self.onAutoplayBlocked();
        setTimeout(done, 900);
      });
    }
  };

  // 回退：浏览器内置语音合成（不依赖网络）
  // 参数 line 已被上游传入 { text, speakLang } —— text 是**已切好的语言片段**，
  // speakLang 就是该片段的语言（zh/en），所以这里只需清洗、不需再切分。
  LecturePlayer.prototype._speakFallback = function (line, done) {
    const self = this;
    const gen = this._gen;
    if (gen !== self._gen || !self.playing || self.stopped) { done(); return; }
    if (!('speechSynthesis' in window)) { done(); return; }

    try { window.speechSynthesis.cancel(); } catch (e) {}

    const isEn = line.speakLang === 'en';
    const isMixed = line.speakLang === 'mixed';
    // 再次清洗兜底，保证没有引号/残缺标点
    const text = cleanForSpeech(line.text) || String(line.text || '').trim();
    if (!text) { done(); return; }

    const u = new SpeechSynthesisUtterance(text);
    // 混排（多语言音色场景）：交给浏览器自动判语言，用中文引擎更稳
    u.lang = isEn && !isMixed ? 'en-US' : 'zh-CN';
    u.rate = isEn && !isMixed ? 0.9 : 1.0;
    u.pitch = 1;

    // 尽量挑选匹配语言的音色
    const voices = window.speechSynthesis.getVoices() || [];
    const pick = voices.find((v) => (isEn && !isMixed) ? /^en/i.test(v.lang) : /^zh/i.test(v.lang));
    if (pick) u.voice = pick;

    let settled = false;
    const settle = () => { if (!settled) { settled = true; done(); } };
    u.onend = settle;
    u.onerror = settle;
    // 兜底：按文本长度估算时长，避免 onend 不触发时卡住
    const est = Math.max(1200, Math.min(15000, text.length * 130));
    setTimeout(() => {
      if (gen !== self._gen || !self.playing || self.stopped) { settled = true; return; }
      settle();
    }, est);

    if (self.onFallback) self.onFallback(text);
    window.speechSynthesis.speak(u);
  };

  global.LectureMode = {
    buildScript: buildScript,
    // 优先使用离线生成的口播稿数据（lecture-script.js 注入的 window.READING_LECTURE_SCRIPTS）；
    // 取不到时回退到运行时生成（buildScript），保证任何情况下都有稿可播。
    getScript: function (exam, qIndex) {
      const store = global.READING_LECTURE_SCRIPTS;
      if (store && exam && exam.id && Array.isArray(store[exam.id])) {
        const entry = store[exam.id][qIndex];
        if (entry && Array.isArray(entry.lines) && entry.lines.length) {
          // 深拷贝，避免播放过程污染原始数据
          return entry.lines.map(function (l) { return Object.assign({}, l); });
        }
      }
      const q = (exam.questions || [])[qIndex];
      return q ? buildScript(exam, q, qIndex) : [];
    },
    hasScriptData: function (exam) {
      const store = global.READING_LECTURE_SCRIPTS;
      return !!(store && exam && exam.id && Array.isArray(store[exam.id]));
    },
    collectEvidence: collectEvidence,
    cleanForSpeech: cleanForSpeech,
    splitByLang: splitByLang,
    // 音色方案（供宿主页面/UI 查询与渲染下拉框）
    isMultilingualVoice: isMultilingualVoice,
    currentEnVoice: currentEnVoice,
    voiceFor: voiceFor,
    ZH_VOICE: ZH_VOICE,
    MULTILINGUAL_VOICES: MULTILINGUAL_VOICES,
    LecturePlayer: LecturePlayer,
    ANSWER_LABEL: ANSWER_LABEL
  };
})(window);
