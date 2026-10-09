/**
 * 讲解模式 · 界面层
 * ------------------------------------------------------------------
 * 三栏：左 材料原文 | 中 答案详解 | 右 题号列表 + 口播控制
 * 特性：讲到哪题高亮哪题、播到依据句时原文出现鼠标笔划线
 *
 * 用法：
 *   LectureUI.open(exam, { voiceSelect: () => 'en-US-JennyNeural' });
 */
(function (global) {
  'use strict';

  const LM = global.LectureMode;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

  const ANSWER_TAG = { A: 'True', B: 'False', C: 'Not Given' };

  // ---------- 状态 ----------
  let state = {
    exam: null,
    flat: [],
    script: [],
    player: null,
    activeQuestion: -1,
    activeEvidence: -1,
    activeLine: null,
    root: null,
    onClose: null
  };

  // ---------- 展平句子 ----------
  function flatten(exam) {
    const flat = [];
    (exam.paragraphs || []).forEach((p, pIdx) => {
      (p.sentences || []).forEach((s, sIdx) => {
        flat.push({ en: s.en, zh: s.zh, paraIdx: pIdx, sentIdx: sIdx, index: flat.length });
      });
    });
    return flat;
  }

  function paraStart(exam, pIdx) {
    let n = 0;
    for (let i = 0; i < pIdx; i++) n += exam.paragraphs[i].sentences.length;
    return n;
  }

  // ================= 渲染 =================
  function renderShell(exam) {
    const total = exam.questions.length;

    const html = `
    <div class="lm-mask" id="lmMask"></div>
    <div class="lm-panel" id="lmPanel" role="dialog" aria-label="讲解模式">
      <header class="lm-head">
        <div class="lm-title">
          <span class="lm-badge">🎧 讲解模式</span>
          <h3>${esc(exam.subtitle || exam.title || exam.id)}</h3>
          <span class="lm-meta">${esc(exam.title || '')} · 共 ${total} 题</span>
        </div>
        <button class="lm-close" id="lmClose" title="退出讲解模式">✕</button>
      </header>

      <div class="lm-body">
        <!-- 左：材料 -->
        <section class="lm-col lm-col-left">
          <div class="lm-col-head"><span class="lm-dot dot-a"></span>英语材料</div>
          <div class="lm-scroll" id="lmArticle"></div>
        </section>

        <!-- 中：答案与详解 -->
        <section class="lm-col lm-col-mid">
          <div class="lm-col-head"><span class="lm-dot dot-b"></span>答案与详解</div>
          <div class="lm-scroll" id="lmExplain"></div>
        </section>

        <!-- 右：题号 + 口播 -->
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

      <footer class="lm-foot" id="lmFoot">点击「开始讲解」后将逐题口播，讲到哪题高亮哪题；播到原文依据时，左侧会出现笔迹划线标注。</footer>
    </div>`;

    return html;
  }

  function renderArticle() {
    const exam = state.exam;
    let html = '';
    exam.paragraphs.forEach((para, pIdx) => {
      const cls = `para-${(pIdx % 5) + 1}`;
      html += `<div class="lm-para ${cls}" data-para="${pIdx}">`;
      para.sentences.forEach((s, sIdx) => {
        const idx = paraStart(exam, pIdx) + sIdx;
        html += `<span class="lm-sent" data-sent="${idx}" id="lmSent${idx}">${esc(s.en)}</span> `;
      });
      html += `</div>`;
    });
    return html;
  }

  function renderExplain() {
    const exam = state.exam;
    let html = '';
    exam.questions.forEach((q, idx) => {
      const evs = LM.collectEvidence(exam, q);
      html += `
      <div class="lm-qcard" data-q="${idx}" id="lmQCard${idx}">
        <div class="lm-qhead">
          <span class="lm-qno">Q${idx + 1}</span>
          <span class="lm-qans ans-${q.answer}">答案 ${q.answer} · ${ANSWER_TAG[q.answer] || ''}</span>
        </div>
        <div class="lm-qtext">${esc(q.q)}</div>
        <div class="lm-qexplain">${esc(q.explain || '暂无解析')}</div>
        ${evs.length ? `<div class="lm-evidence">
            <div class="lm-ev-title">📌 原文依据</div>
            ${evs.map((e) => `<div class="lm-ev-item" data-ev="${e.index}">
                <div class="lm-ev-en">${esc(e.en)}</div>
                <div class="lm-ev-zh">${esc(e.zh || '')}</div>
              </div>`).join('')}
          </div>` : ''}
      </div>`;
    });
    return html;
  }

  function renderQList() {
    const exam = state.exam;
    let html = '';
    exam.questions.forEach((q, idx) => {
      html += `<button class="lm-qitem" data-jump="${idx}">
          <span class="lm-qitem-no">${idx + 1}</span>
          <span class="lm-qitem-txt">${esc(q.q.slice(0, 34))}${q.q.length > 34 ? '…' : ''}</span>
          <span class="lm-qitem-ans">${q.answer}</span>
        </button>`;
    });
    return html;
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // ================= 高亮 / 划线 =================
  function setActiveQuestion(qIdx) {
    if (state.activeQuestion === qIdx) return;
    state.activeQuestion = qIdx;

    $$('.lm-qcard', state.root).forEach((el) => {
      const on = Number(el.dataset.q) === qIdx;
      el.classList.toggle('active', on);
    });
    $$('.lm-qitem', state.root).forEach((el) => {
      const on = Number(el.dataset.jump) === qIdx;
      el.classList.toggle('active', on);
      if (on) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    });

    if (state.root.classList.contains('lm-mobile')) {
      const tb = state.root.querySelector('.lm-tab[data-t="explain"]');
      if (tb) tb.textContent = qIdx >= 0 ? ('✅ 详解 · Q' + (qIdx + 1)) : '✅ 详解';
    }
    const card = $(`#lmQCard${qIdx}`, state.root);
    if (card) card.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  // 划线标注：在句子正下方画一条红线（带鼠标笔）
  // 实现方式：句子自身 background 渐变 + background-size 从左到右生长
  //   —— 不用绝对定位子元素，因为 inline 元素换行时子元素取百分比宽度不可靠（会画短）
  //   —— 背景天然按每一行铺开，多行句子也能完整划到
  // 已划过的句子保留划线，形成完整讲解痕迹
  function underlineSentence(sentIdx) {
    if (sentIdx == null || sentIdx < 0) return;
    const el = $(`#lmSent${sentIdx}`, state.root);
    if (!el) return;

    // 滚动到可视区域（先滚再动画，避免动画过程中被滚动打断视觉）
    el.scrollIntoView({ block: 'center', behavior: 'smooth' });

    if (el.classList.contains('lm-underlined')) return; // 已划过，保留不动

    // 鼠标笔：从句子左端滑到右端，模拟"手动划线"动作
    const rect = el.getBoundingClientRect();
    const pen = document.createElement('div');
    pen.className = 'lm-pen';
    pen.innerHTML = `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#e0483a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 21l3.5-1L20 6.5a2.1 2.1 0 0 0-3-3L3.5 17 3 21z"/>
        <path d="M15.5 5.5l3 3"/>
      </svg>`;
    // 用 fixed 定位：坐标系与 getBoundingClientRect 一致，不会被父级 overflow / transform 影响
    pen.style.left = (rect.left + window.scrollX - 4) + 'px';
    pen.style.top = (rect.bottom + window.scrollY - 24) + 'px';
    document.body.appendChild(pen);

    // 下一帧同时启动：红线生长 + 鼠标笔右移
    requestAnimationFrame(() => {
      el.classList.add('lm-underlined');
      const travel = Math.max(0, rect.width - 16);
      pen.style.transition = 'transform .85s cubic-bezier(.4,0,.2,1), opacity .35s ease .55s';
      pen.style.transform = `translateX(${travel}px)`;
      pen.style.opacity = '0';
      setTimeout(() => pen.remove(), 1300);
    });
  }

  // 标记"当前正在讲解的句子"（只做加粗锚点，不做背景高亮）
  function setActiveSentence(sentIdx) {
    $$('.lm-sent.lm-sent-active', state.root).forEach((el) => el.classList.remove('lm-sent-active'));
    if (sentIdx == null || sentIdx < 0) return;
    const el = $(`#lmSent${sentIdx}`, state.root);
    if (el) el.classList.add('lm-sent-active');
  }

  // 清除全部划线（重新讲解 / 停止 / 切题时按需调用）
  function clearAllUnderline() {
    $$('.lm-sent.lm-underlined', state.root).forEach((el) => el.classList.remove('lm-underlined'));
    $$('.lm-sent.lm-sent-active', state.root).forEach((el) => el.classList.remove('lm-sent-active'));
    $$('.lm-pen', document.body).forEach((el) => el.remove());
  }

  function clearUnderline() {
    clearAllUnderline();
  }

  // ================= 交互绑定 =================
  function bind() {
    const root = state.root;

    $('#lmClose', root).addEventListener('click', close);
    $('#lmMask', root).addEventListener('click', close);

    $('#lmPlay', root).addEventListener('click', () => {
      if (state.player.isPlaying()) return;
      // 用户手势内解锁音频，否则后续 play() 会被浏览器拦截
      if (global.unlockAudio) { try { global.unlockAudio(); } catch (e) {} }
      if (state.player.cursor === 0 || state.player.stopped) {
        // 从头开始讲解时清空旧划线
        clearAllUnderline();
        state.player.load(state.script);
      }
      state.player.play();
    });

    $('#lmPause', root).addEventListener('click', () => {
      state.player.pause();
    });

    $('#lmStop', root).addEventListener('click', () => {
      state.player.stop();
      clearAllUnderline();
      setActiveQuestion(-1);
      setStatus('已停止');
      updateBar(0);
      syncButtons();
    });

    // 点击题号跳转讲解
    $$('.lm-qitem', root).forEach((btn) => {
      btn.addEventListener('click', () => {
        const qIdx = Number(btn.dataset.jump);
        setActiveQuestion(qIdx);
        if (state.root.classList.contains('lm-mobile')) xtSetTab(state.root, 'explain');
        if (state.script.length) {
          clearAllUnderline(); // 跳转时清空旧划线，从该题重新开始
          state.player.jumpToQuestion(qIdx);
        }
      });
    });

    // 点击详解卡片也跳转
    $$('.lm-qcard', root).forEach((card) => {
      card.addEventListener('click', () => {
        const qIdx = Number(card.dataset.q);
        if (state.script.length) {
          clearAllUnderline();
          state.player.jumpToQuestion(qIdx);
        }
      });
    });

    // 键盘
    document.addEventListener('keydown', onKey);
  }

  function onKey(e) {
    if (!state.root || state.root.style.display === 'none') return;
    if (e.key === 'Escape') close();
  }

  function setStatus(t) {
    const el = $('#lmStatus', state.root);
    if (el) el.textContent = t;
  }

  function updateBar(ratio) {
    const bar = $('#lmBar', state.root);
    if (bar) bar.style.width = Math.round(ratio * 100) + '%';
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

    state.exam = exam;
    state.flat = flatten(exam);
    state.activeQuestion = -1;
    state.script = [];

    // 生成全篇讲解稿
    // 优先读取离线生成的口播稿（lecture-script.js），无则用运行时 buildScript 兜底
    const script = [];
    exam.questions.forEach((q, qi) => {
      LM.getScript(exam, qi).forEach((l) => {
        script.push(Object.assign({}, l, { questionIndex: qi }));
      });
    });
    state.script = script;

    const holder = document.createElement('div');
    holder.className = 'lm-root';
    holder.innerHTML = renderShell(exam);
    document.body.appendChild(holder);
    state.root = holder;

    $('#lmArticle', holder).innerHTML = renderArticle();
    $('#lmExplain', holder).innerHTML = renderExplain();
    $('#lmQList', holder).innerHTML = renderQList();

    // 同步播放控制按钮的可用状态（onStateChange 与句子推进时都会调用）
    function syncButtons() {
      const p = state.player;
      const playBtn = $('#lmPlay', holder);
      const pauseBtn = $('#lmPause', holder);
      const stopBtn = $('#lmStop', holder);
      if (!playBtn) return;
      const playing = p.isPlaying();
      playBtn.disabled = playing;
      pauseBtn.disabled = !playing;
      // 停止：只要在播放，或已有播放进度，就可以停止
      stopBtn.disabled = !playing && p.cursor === 0;
      playBtn.textContent = playing
        ? '▶ 讲解中…'
        : (p.cursor > 0 && !p.stopped ? '▶ 继续讲解' : '▶ 开始讲解');
    }

    // 播放器
    state.player = new LM.LecturePlayer({
      onLine: (line, idx) => {
        // 暴露调试状态
        if (holder._dbg) holder._dbg.lastLineKind = line.kind;
        updateBar((idx + 1) / state.script.length);
        // 句子推进后同步按钮可用状态（否则停止按钮会停在初始的 disabled）
        syncButtons();
        if (line.kind === 'question') {
          setActiveQuestion(line.questionIndex);
          setStatus(`正在讲解 第 ${line.questionIndex + 1} 题`);
        } else if (line.kind === 'answer') {
          setStatus(`第 ${line.questionIndex + 1} 题 · 公布答案`);
        } else if (line.kind === 'evidence') {
          setStatus(`第 ${line.questionIndex + 1} 题 · 划线标注原文依据`);
          setActiveSentence(line.evidenceIndex);
          underlineSentence(line.evidenceIndex);
          if (line.evidenceIndex != null) {
            const evEl = $(`.lm-ev-item[data-ev="${line.evidenceIndex}"]`, holder);
            if (evEl) {
              $$('.lm-ev-item.active', holder).forEach((x) => x.classList.remove('active'));
              evEl.classList.add('active');
            }
          }
        } else if (line.kind === 'evidence-zh') {
          setStatus(`第 ${line.questionIndex + 1} 题 · 依据翻译`);
        } else {
          setStatus(`第 ${line.questionIndex + 1} 题 · 讲解中`);
        }
      },
      onQuestion: (qi) => setActiveQuestion(qi),
      onEnd: () => {
        setStatus('✅ 全部讲解完毕');
        updateBar(1);
        syncButtons();
      },
      onStateChange: (playing) => {
        syncButtons();
        if (!playing && !state.player.stopped && state.player.cursor > 0) {
          setStatus('已暂停，点击「继续讲解」');
        }
      }
    });

    // 播放异常提示（避免"静默跳过"）
    state.player.onAutoplayBlocked = () => {
      setStatus('⚠️ 浏览器拦截了自动播放，请再点一次「讲解」');
    };
    let fallbackNotified = false;
    state.player.onTtsError = (msg) => {
      if (!fallbackNotified) {
        fallbackNotified = true;
        // 只在第一次回退时提示，避免频繁刷屏
        setTimeout(() => { fallbackNotified = false; }, 20000);
      }
    };
    state.player.onFallback = () => {
      const base = (document.getElementById('lmStatus') || {}).textContent || '';
      if (base.indexOf('浏览器语音') === -1) {
        setStatus(base.replace(/^.*?·\s*/, '') + '（浏览器语音）');
      }
    };

    // 调试入口
    holder._dbg = { player: state.player, getScript: () => state.script };
    global.__lm = holder._dbg;

    bind();
    mountMobileUI(state.root, true);
    document.body.style.overflow = 'hidden';
    state.onClose = opts.onClose || null;
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

  global.LectureUI = { open: open, close: close };
})(window);
