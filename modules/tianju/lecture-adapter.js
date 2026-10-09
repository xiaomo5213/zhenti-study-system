/**
 * 讲解模式 · 填句补文（tianju）适配器
 * ============================================================
 * 数据结构：
 *   exam = { id:'2013-10', session:'2013年10月', articleTitle,
 *            passage:['My grandfather had only one child ... [26] When my mom got pregnant ...'],
 *            options:[{letter:'A', text:'I was so happy ...'}],
 *            answers:{'26':'B'},
 *            explanations:{'26':'空格前说...'} }
 *   translationsTianju: { '2013-10': { '英文原句':'中文' } }
 * 特点：空格以 [26] 形式内嵌；选项是完整句子；未选的 1 个为干扰项。
 */
(function (global) {
  'use strict';

  var BLANK_KEYS = ['26', '27', '28', '29', '30'];
  var MARK_RE = /\[(\d{2})\]/g;

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function loaderMap() {
    try {
      if (typeof translationsTianju !== 'undefined' && translationsTianju) return translationsTianju;
    } catch (e) {}
    return (global.translationsTianju || {});
  }

  function examKey(exam) { return exam.id || exam.session || ''; }

  function norm(s) { return String(s || '').replace(/\s+/g, ' ').trim().toLowerCase(); }

  function optionOf(exam, letter) {
    var list = exam.options || [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].letter === letter) return list[i];
    }
    return null;
  }

  // 把 [26] 就地还原为该项正确答案的句子
  function fillBlanks(exam, text) {
    return String(text || '').replace(MARK_RE, function (m, no) {
      var letter = (exam.answers || {})[no];
      var op = letter ? optionOf(exam, letter) : null;
      return op ? op.text : m;
    });
  }

  function displayBlanks(text) {
    return String(text || '').replace(MARK_RE, '＿＿＿＿');
  }

  // 取某空格前后的上下文（未填空原文）
  function contextOf(exam, no) {
    var noStr = String(no);
    var full = (exam.passage || []).join(' ');
    var markers = full.match(/\d{2}\s*\[(\d{2})\]/g) || [];
    // 直接按 [nn] 定位
    var idx = full.indexOf('[' + noStr + ']');
    if (idx < 0) return { before: '', after: '' };
    var before = fillBlanks(exam, full.slice(Math.max(0, idx - 160), idx)).trim();
    var after = fillBlanks(exam, full.slice(idx + noStr.length + 2, idx + noStr.length + 2 + 160)).trim();
    return { before: before, after: after, full: fillBlanks(exam, full) };
  }

  // 该空格所在句/段（含空白标记 → 已填空）
  function segmentOf(exam, no) {
    var noStr = '[' + String(no) + ']';
    for (var i = 0; i < (exam.passage || []).length; i++) {
      var raw = exam.passage[i];
      if (raw.indexOf(noStr) < 0) continue;
      return {
        paraIndex: i,
        raw: raw,
        filled: fillBlanks(exam, raw).replace(/\s+/g, ' ').trim()
      };
    }
    return null;
  }

  var A = {
    meta: function (exam) {
      return {
        title: exam.articleTitle || '填句补文',
        subtitle: exam.session || '',
        total: BLANK_KEYS.length
      };
    },

    sections: function (exam) {
      var dict = loaderMap()[examKey(exam)] || {};
      var secs = [];
      (exam.passage || []).forEach(function (raw, pi) {
        var filledText = fillBlanks(exam, raw);
        var shownText = displayBlanks(raw);
        var fs = filledText.match(/[^.!?]+[.!?]*/g) || [filledText];
        var ss = shownText.match(/[^.!?]+[.!?]*/g) || [shownText];
        var items = [];
        fs.forEach(function (s, si) {
          var t = s.trim();
          if (t.length < 2) return;
          var zh = '';
          var nk = norm(t);
          for (var k in dict) {
            if (!Object.prototype.hasOwnProperty.call(dict, k)) continue;
            if (norm(k) === nk) { zh = dict[k]; break; }
          }
          items.push({
            id: 'p' + pi + 's' + si,
            text: t,
            html: esc((ss[si] || t).trim()),
            zh: zh
          });
        });
        if (items.length) secs.push({ id: 'p' + pi, title: '', items: items });
      });
      return secs;
    },

    questions: function (exam) {
      return BLANK_KEYS.map(function (no, qi) {
        var letter = (exam.answers || {})[no] || '';
        var op = optionOf(exam, letter);
        var seg = segmentOf(exam, no);
        var optsHtml = (exam.options || []).map(function (o) {
          var on = (o.letter === letter);
          return '<div class="lm-opt' + (on ? ' lm-opt-correct' : '') + '">' +
            '<span class="lm-opt-letter">' + esc(o.letter) + '</span>' +
            '<span class="lm-opt-text">' + esc(o.text) + '</span></div>';
        }).join('');
        return {
          id: 'q' + no,
          no: Number(no),
          stem: '第 ' + no + ' 空：' + (seg ? seg.filled.slice(0, 120) + (seg.filled.length > 120 ? '…' : '') : ''),
          answer: letter,
          answerLabel: letter,
          options: (exam.options || []).map(function (o) { return { letter: o.letter, text: o.text }; }),
          optionsHtml: optsHtml,
          explain: (exam.explanations || {})[no] || '',
          listLabel: '第 ' + no + ' 空 · ' + (op ? op.text.slice(0, 26) + (op.text.length > 26 ? '…' : '') : ''),
          _letter: letter,
          _option: op,
          _seg: seg
        };
      });
    },

    optionText: function (q, op) {
      return op.letter + '，' + op.text;
    },

    answerText: function (q) {
      return '选 ' + q._letter + '。';
    },

    evidenceOf: function (exam, q) {
      var seg = q._seg;
      if (!seg) return [];
      var secs = A.sections(exam);
      var ctx = contextOf(exam, q.no);
      // 优先用「空格后的句子」，其次「空格前的句子」定位到具体那一句
      var keys = [];
      if (ctx.after) keys.push(norm(ctx.after).slice(0, 60));
      if (ctx.before) keys.push(norm(ctx.before).slice(-60));
      var hit = null;
      for (var k = 0; k < keys.length && !hit; k++) {
        if (keys[k].length < 10) continue;
        for (var i = 0; i < secs.length && !hit; i++) {
          for (var j = 0; j < secs[i].items.length; j++) {
            var cur = norm(secs[i].items[j].text);
            if (cur.indexOf(keys[k]) >= 0 || keys[k].indexOf(cur) >= 0) {
              hit = secs[i].items[j];
              break;
            }
          }
        }
      }
      // 退路：整段匹配
      if (!hit) {
        var target = norm(seg.filled);
        for (var i2 = 0; i2 < secs.length && !hit; i2++) {
          for (var j2 = 0; j2 < secs[i2].items.length; j2++) {
            var c2 = norm(secs[i2].items[j2].text);
            if (c2 === target || c2.indexOf(target.slice(0, 40)) >= 0 || target.indexOf(c2) >= 0) {
              hit = secs[i2].items[j2]; break;
            }
          }
        }
      }
      if (!hit) return [];
      return [{ id: hit.id, text: hit.text, zh: hit.zh || '' }];
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
      var ctx = contextOf(exam, q.no);
      if (ctx.before) push('空格前面是这样说的：' + ctx.before.slice(-100), 'question-detail', { focus: 'stem' });
      if (ctx.after) push('空格后面接着说：' + ctx.after.slice(0, 100), 'question-detail');
      push('正确答案是 ' + q._letter + '。', 'answer', { focus: 'answer' });
      if (q._option) push('填进去的句子是：' + q._option.text, 'answer-detail', { focus: 'answer' });

      push('我们看一下六个选项。', 'options-lead');
      (exam.options || []).forEach(function (o) {
        push(o.letter + '，' + o.text, 'option');
      });

      if (q.explain) push('我们来看解析。' + q.explain, 'explain', { focus: 'explain' });

      var evs = A.evidenceOf(exam, q);
      if (evs.length) {
        push('我们回到文章看这一段。', 'evidence-lead');
        evs.forEach(function (ev, i) {
          push((i === 0 ? '文章里是这样写的：' : '紧接着这一句是：') + ev.text, 'evidence',
            { evidenceRef: ev.id, evidenceText: ev.text });
          if (ev.zh) push('这段话的意思是，' + ev.zh, 'evidence-zh', { evidenceRef: ev.id });
        });
      }
      push('这一空就讲到这里。', 'ending');
      return lines;
    }
  };

  global.LectureAdapter = A;
})(window);
