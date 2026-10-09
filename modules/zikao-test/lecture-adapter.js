/**
 * 讲解模式 · 完形补文（zikao-test）适配器
 * ============================================================
 * 数据结构：
 *   exam = { title, year, passage:['... <span class="hint-word">defines</span> (define) ... 41 (use) ...'],
 *            blanks:{ '41':{answer:'used', explanation:'【语法点：被动语态】...'} },
 *            translations:['中文逐句'] }
 * 特点：无选项字母；空格以「41 (use)」形式内嵌在段落里；提示词用 span.hint-word 标注。
 */
(function (global) {
  'use strict';

  var SPAN_RE = /<span class="hint-word">([^<]*)<\/span>/g;
  var BLANK_RE = /(\d{2})\s*\(([a-zA-Z]+)\)/g;

  function stripTags(s) {
    return String(s || '').replace(/<[^>]+>/g, '');
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // 把提示词 span 还原为纯文本：<span class=hint-word>defines</span> (define) -> defines (define)
  function plainPassage(text) {
    return stripTags(text).replace(/\s+/g, ' ').trim();
  }

  // 把「41 (use)」就地还原为答案词，得到可朗读的完整句子
  function fillBlanks(exam, text) {
    return String(text || '').replace(/(\d{2})\s*\(([a-zA-Z]+)\)/g, function (m, no) {
      var b = (exam.blanks || {})[no];
      return (b && b.answer) ? b.answer : m;
    });
  }

  // 左栏显示用：保留空格标记为空白下划线，其余同朗读
  function displayPassage(exam, text) {
    return String(text || '').replace(/(\d{2})\s*\(([a-zA-Z]+)\)/g, function (m, no) {
      return '＿＿＿＿';
    });
  }

  function blankList(exam) {
    return Object.keys(exam.blanks || {})
      .filter(function (k) { return /^\d+$/.test(k); })
      .sort(function (a, b) { return Number(a) - Number(b); });
  }

  // 该空格的前后文（用于生成讲解话术）；基于「已填空」的完整文本，避免被标记干扰
  function contextOf(exam, no) {
    var full = (exam.passage || []).map(function (p) { return plainPassage(p); }).join(' ');
    var matches = full.match(/(\d{2})\s*\(([a-zA-Z]+)\)/g) || [];
    var found = null;
    for (var i = 0; i < matches.length; i++) {
      var mm = /^(\d{2})\s*\(([a-zA-Z]+)\)$/.exec(matches[i]);
      if (mm && mm[1] === String(no)) {
        var idx = full.indexOf(matches[i]);
        if (idx >= 0) { found = { index: idx, hint: mm[2], len: matches[i].length }; break; }
      }
    }
    if (!found) return { before: '', after: '', hint: '', full: fillBlanks(exam, full) };
    var filled = fillBlanks(exam, full);
    // 原文长度与填充后长度一致（标记被等长替换的可能性不高），改用「标记前的原文短语」定位
    var beforeRaw = full.slice(Math.max(0, found.index - 110), found.index).trim();
    var afterRaw = full.slice(found.index + found.len, found.index + found.len + 110).trim();
    // 把 beforeRaw 里可能含的其它标记也还原，便于与 filled 文本比对
    var before = fillBlanks(exam, beforeRaw);
    var after = fillBlanks(exam, afterRaw);
    return { before: before, after: after, hint: found.hint, full: filled };
  }

  var A = {
    meta: function (exam) {
      return {
        title: exam.title || exam.year || '完形补文',
        subtitle: exam.year || '',
        total: blankList(exam).length
      };
    },

    // 左栏：按段落切句。朗读时空格还原成答案词，句 id 用 p{段}s{句}
    sections: function (exam) {
      var secs = [];
      (exam.passage || []).forEach(function (raw, pi) {
        var filled = fillBlanks(exam, plainPassage(raw));
        var shown = displayPassage(exam, plainPassage(raw));
        var sentences = filled.match(/[^.!?]+[.!?]*/g) || [filled];
        var shownSent = shown.match(/[^.!?]+[.!?]*/g) || [shown];
        var items = [];
        sentences.forEach(function (s, si) {
          var t = s.trim();
          if (t.length < 2) return;
          items.push({
            id: 'p' + pi + 's' + si,
            text: t,
            html: esc((shownSent[si] || t).trim()),
            zh: ''
          });
        });
        if (items.length) secs.push({ id: 'p' + pi, title: '', items: items });
      });
      return secs;
    },

    questions: function (exam) {
      return blankList(exam).map(function (no, qi) {
        var b = (exam.blanks || {})[no] || {};
        var ctx = contextOf(exam, no);
        // 从解析里抽出「【语法点：xxx】」作为知识点标签
        var m = /【([^】]+)】/.exec(b.explanation || '');
        return {
          id: 'q' + no,
          no: Number(no),
          stem: '第 ' + no + ' 空' + (ctx.before ? '（前文：…' + ctx.before.slice(-50) + '）' : '') +
                (ctx.after ? '（后文：' + (ctx.after.length > 40 ? ctx.after.slice(0, 40) + '…' : ctx.after) + '）' : ''),
          answer: b.answer || '',
          answerLabel: b.answer || '',
          options: [],                 // 无选项字母
          optionsHtml: '<div class="lm-opt lm-opt-correct"><span class="lm-opt-letter">✓</span>' +
                       '<span class="lm-opt-text">' + esc(b.answer || '') +
                       (ctx.hint ? '（提示词：' + esc(ctx.hint) + '）' : '') + '</span></div>',
          explain: b.explanation || '',
          listLabel: '第 ' + no + ' 空' + (m ? ' · ' + m[1] : ''),
          _hint: ctx.hint,
          _ctx: ctx
        };
      });
    },

    optionText: function () { return ''; },

    answerText: function (q) {
      return '第 ' + q.no + ' 空填 ' + q.answer + '。';
    },

    evidenceOf: function (exam, q) {
      var ctx = q._ctx || {};
      var norm = function (s) { return String(s || '').replace(/\s+/g, ' ').trim().toLowerCase(); };
      // 优先用前文（取足够长度），不足时退化为后文
      var keys = [];
      var b = norm((ctx.before || '')).slice(-40);
      var a = norm((ctx.after || '')).slice(0, 40);
      if (b.length >= 12) keys.push(b);
      if (a.length >= 12) keys.push(a);
      if (!keys.length) return [];

      var secs = A.sections(exam);
      var hit = null;
      for (var k = 0; k < keys.length && !hit; k++) {
        for (var i = 0; i < secs.length && !hit; i++) {
          for (var j = 0; j < secs[i].items.length; j++) {
            if (norm(secs[i].items[j].text).indexOf(keys[k]) >= 0) { hit = secs[i].items[j]; break; }
          }
        }
      }
      if (!hit) return [];
      // 左栏 text 已含答案词，可直接作为依据朗读
      return [{ id: hit.id, text: hit.text, zh: '' }];
    },

    hasUnderline: function () { return true; },

    script: function (exam, qIndex) {
      var qs = A.questions(exam);
      var q = qs[qIndex];
      if (!q) return [];
      var lines = [];
      var push = function (text, kind, extra) {
        var line = Object.assign({ text: String(text), kind: kind }, extra || {});
        line.speakText = global.LectureCore.cleanForSpeech(text);
        lines.push(line);
        return line;
      };

      push('我们来看第 ' + q.no + ' 空。', 'question');
      push('题目给出的提示词是 ' + (q._hint || '无') + '。', 'question-detail', { focus: 'stem' });
      push('答案是 ' + q.answer + '。', 'answer', { focus: 'answer', focusText: q.answer });
      if (q.explain) push('我们来看解析。' + q.explain, 'explain', { focus: 'explain' });

      var evs = A.evidenceOf(exam, q);
      if (evs.length) {
        push('我们看一下原文所在的句子。', 'evidence-lead');
        push('原句是：' + evs[0].text, 'evidence', { evidenceRef: evs[0].id, evidenceText: evs[0].text });
      }
      push('这一空就讲到这里。', 'ending');
      return lines;
    }
  };

  global.LectureAdapter = A;
})(window);
