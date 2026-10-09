/* ============================================================
   撷墨 · 自考英语（专升本）真题学习系统 —— 全局外壳脚本
   ------------------------------------------------------------
   1. 向 6 个题型页面注入统一的顶部导航（品牌 / 题型切换 / 期次 / 回首页）
   2. 期次同步：切换题型时保持停在同一个考期（?p=N），无需重新翻页
   3. 不改动任何题型自身的渲染逻辑，只在页面渲染完成后「驱动」它
   ============================================================ */
(function () {
    'use strict';

    var MODULES = window.XT_MODULES || [];
    var PERIODS = window.XT_PERIODS || [];
    var KEY = 'xt_period';                 // sessionStorage / localStorage 键
    var PREFIX = '../../';                 // modules/<key>/index.html 回站点根
    /* 当前题型：优先读 <html data-xt-module>，否则从路径 modules/<key>/ 推断 */
    var MODULE = document.documentElement.getAttribute('data-xt-module') || '';
    if (!MODULE) {
        var m = location.pathname.replace(/\\/g, '/').match(/modules\/([^/]+)\//);
        MODULE = m ? m[1] : '';
    }

    /* ---------------- 工具 ---------------- */
    function qs(name) {
        var m = location.search.match(new RegExp('[?&]' + name + '=([^&#]*)'));
        return m ? decodeURIComponent(m[1]) : null;
    }

    function store(kind, val) {
        try {
            if (val === undefined) return window[kind].getItem(KEY);
            window[kind].setItem(KEY, String(val));
        } catch (e) { /* 隐私模式 / file:// 下忽略 */ }
        return null;
    }

    /* 当前期次：优先取已有存储，其次还原 URL */
    var desired = (function () {
        var p = parseInt(qs('p') || '', 10);
        if (p >= 1 && p <= PERIODS.length) return p;
        var s = parseInt(store('sessionStorage') || store('localStorage') || '', 10);
        if (s >= 1 && s <= PERIODS.length) return s;
        return 1;
    })();

    function persist(n) {
        if (!(n >= 1)) return;
        store('sessionStorage', n);
        store('localStorage', n);
    }

    function labelOf(n) {
        var p = PERIODS[n - 1];
        return p ? p.label : ('第 ' + n + ' 期');
    }

    /* ---------------- 读取 / 驱动题型页面 ---------------- */
    /* 各题型都暴露了期次信息，优先 #pageInput，退化到 #pageIndicator（完形补文） */
    function indicator() {
        var el = document.getElementById('pageIndicator');
        if (!el) return null;
        var m = (el.textContent || '').match(/(\d+)\s*\/\s*(\d+)/);
        return m ? { cur: parseInt(m[1], 10), total: parseInt(m[2], 10) } : null;
    }

    function readPeriod() {
        var el = document.getElementById('pageInput');
        var n = el ? parseInt(el.value, 10) : NaN;
        if (n >= 1) return n;
        var ind = indicator();
        return ind && ind.cur >= 1 ? ind.cur : NaN;
    }

    function pageCount() {
        var el = document.getElementById('pageInput');
        var n = el ? parseInt(el.getAttribute('max') || '', 10) : NaN;
        if (n >= 1) return n;
        var ind = indicator();
        if (ind && ind.total >= 1) return ind.total;
        return PERIODS.length;
    }

    /* 跳转期次：
       ① 优先用页面自带的期次输入框 #pageInput 直接跳（瞬时，无翻页闪烁）
       ② 没有输入框的页面（如完形补文）退化为点「上/下一页」逐期推进 */
    var stepping = false;

    function jumpByInput(target) {
        var inp = document.getElementById('pageInput');
        if (!inp) return false;
        try {
            inp.value = String(target);
            var ev = { bubbles: true };
            inp.dispatchEvent(new Event('change', ev));   // dldy 监听 change
            inp.dispatchEvent(new Event('blur'));         // 其余题型监听 blur
        } catch (e) { return false; }
        return true;
    }

    function stepTo(target) {
        var total = pageCount();
        target = Math.min(Math.max(target, 1), total);
        desired = target;

        var cur = readPeriod();
        if (!isNaN(cur) && cur === target) {
            stepping = false;
            persist(target);
            syncUI(target);
            return;
        }

        if (jumpByInput(target)) {
            setTimeout(function () {
                if (readPeriod() === target) {
                    stepping = false;
                    persist(target);
                    syncUI(target);
                } else {
                    clickStep(target);
                }
            }, 90);
            return;
        }
        clickStep(target);
    }

    function clickStep(target) {
        if (stepping) return;
        var guard = 0;
        stepping = true;

        (function tick() {
            var cur = readPeriod();
            if (!isNaN(cur) && cur === target) {
                stepping = false;
                persist(target);
                syncUI(target);
                return;
            }
            if (++guard > 60) { stepping = false; return; }
            var guess = isNaN(cur) ? 1 : cur;
            var btn = document.getElementById(guess < target ? 'nextBtn' : 'prevBtn');
            if (!btn || btn.disabled) {
                stepping = false;
                if (!isNaN(guess)) { persist(guess); syncUI(guess); }
                return;
            }
            btn.click();
            setTimeout(tick, 45);
        })();
    }

    /* ---------------- 顶部导航 ---------------- */
    var selEl = null, tabEls = [], labelEl = null;

    function buildBar() {
        if (!MODULES.length || document.getElementById('xt-bar')) return;
        var cur = null;
        for (var i = 0; i < MODULES.length; i++) {
            if (MODULES[i].key === MODULE) { cur = MODULES[i]; break; }
        }

        var bar = document.createElement('nav');
        bar.id = 'xt-bar';
        if (cur) bar.style.setProperty('--xt-accent', cur.color);

        /* 品牌 */
        var brand = document.createElement('a');
        brand.className = 'xt-brand';
        brand.href = PREFIX + 'index.html?p=' + desired;
        brand.title = '返回学习中心';
        brand.innerHTML =
            '<span class="xt-mark">墨</span>' +
            '<span class="xt-brand-text"><b>撷墨真题</b>' +
            '<span>自考英语（专升本）真题学习系统</span></span>';
        bar.appendChild(brand);

        /* 题型切换 */
        var tabs = document.createElement('div');
        tabs.className = 'xt-tabs';
        MODULES.forEach(function (m) {
            var a = document.createElement('a');
            a.className = 'xt-tab' + (m.key === MODULE ? ' is-active' : '');
            a.href = '../' + m.key + '/index.html?p=' + desired;
            a.title = m.part + '　' + m.name + '（' + m.perScore + '）';
            a.innerHTML = '<span class="xt-tab-i">' + m.icon + '</span>' + m.name;
            a.style.setProperty('--xt-accent', m.color);
            tabEls.push(a);
            tabs.appendChild(a);
        });
        bar.appendChild(tabs);

        /* 期次选择 */
        var wrap = document.createElement('div');
        wrap.className = 'xt-period';
        var lab = document.createElement('label');
        lab.setAttribute('for', 'xt-period-select');
        lab.textContent = '期次';
        selEl = document.createElement('select');
        selEl.id = 'xt-period-select';
        selEl.title = '切换考期（所有题型同步）';
        PERIODS.forEach(function (p, idx) {
            var o = document.createElement('option');
            o.value = String(idx + 1);
            o.textContent = p.label;
            selEl.appendChild(o);
        });
        selEl.addEventListener('change', function () {
            stepTo(parseInt(selEl.value, 10) || 1);
        });
        wrap.appendChild(lab);
        wrap.appendChild(selEl);
        bar.appendChild(wrap);

        /* 生词本 */
        var wb = document.createElement('a');
        wb.className = 'xt-home xt-wblink';
        wb.href = PREFIX + 'wordbook.html';
        wb.title = '查看点词查词收藏的生词';
        wb.innerHTML = '📖<span>生词本</span>';
        bar.appendChild(wb);

        /* 回首页 */
        var home = document.createElement('a');
        home.className = 'xt-home';
        home.href = PREFIX + 'index.html?p=' + desired;
        home.innerHTML = '🏠<span>学习中心</span>';
        bar.appendChild(home);

        document.body.insertBefore(bar, document.body.firstChild);
        labelEl = lab;
        syncUI(desired);
    }

    function syncUI(n) {
        if (selEl && String(selEl.value) !== String(n)) selEl.value = String(n);
        if (selEl) selEl.title = '第 ' + n + ' / ' + pageCount() + ' 期 · '
            + labelOf(n) + '（切换后各题型同步）';
        for (var i = 0; i < tabEls.length; i++) {
            var href = tabEls[i].getAttribute('href') || '';
            tabEls[i].setAttribute('href', href.replace(/p=\d+/, 'p=' + n));
        }
        var bh = document.querySelector('a.xt-brand');
        if (bh) bh.href = PREFIX + 'index.html?p=' + n;
        var hh = document.querySelector('a.xt-home:not(.xt-wblink)');
        if (hh) hh.href = PREFIX + 'index.html?p=' + n;
    }

    /* ---------------- 启动：等题型页面渲染完成 ---------------- */
    function boot() {
        try { localStorage.setItem('xt_last_module', MODULE); } catch (e) { }
        buildBar();
        var waited = 0;
        var timer = setInterval(function () {
            var cur = readPeriod();
            if (!isNaN(cur)) {
                clearInterval(timer);
                if (cur !== desired) stepTo(desired);
                else { persist(cur); syncUI(cur); }
                watch();
                return;
            }
            if ((waited += 150) > 12000) clearInterval(timer);
        }, 150);
    }

    /* 监听用户在题型页面内自己的翻页，回写期次（供切换题型时继承） */
    function watch() {
        var last = readPeriod();
        setInterval(function () {
            if (stepping) return;
            var cur = readPeriod();
            if (!isNaN(cur) && cur !== last) {
                last = cur;
                persist(cur);
                syncUI(cur);
            }
        }, 350);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
