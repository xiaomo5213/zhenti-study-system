/**
 * 讲解模式 · 概括段落大意与补全句子（dldy）适配器
 * ============================================================
 * 数据结构：
 *   exam = { year:'2013年10月', articleTitle,
 *            paragraphs:[{ id:'p1', colorClass:'para-1', text:'...' }],
 *            tasks:[
 *              { type:'matchHeading',  title:'Task 1: 为第1~5段选择正确的小标题',
 *                questions:[{ id:'16', label:'Paragraph ①:', correct:'A', options:['A'..'F'], color }],
 *                optionTexts:{ A:'start a new life', ... } },
 *              { type:'completeSentence', title:'Task 2: 补全句子',
 *                questions:[{ id:'21', label:'21. If you make no effort, you will ______.', correct:'C', ... }],
 *                optionTexts:{ ... } }
 *            ] }
 *   explanations: { '2013年10月': { '16':'第①段开头说...', ... } }
 * 特点：两套 Task 共用一份 optionTexts；解析在独立 explanations 变量里；
 *       选项只是字母，文本在 optionTexts；Task1 对应段落，Task2 对应句子。
 */
(function (global) {
  'use strict';

  var ROMAN = ['①', '②', '③', '④', '⑤', '⑥'];

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function loaderMap() {
    try {
      if (typeof explanations !== 'undefined' && explanations) return explanations;
    } catch (e) {}
    return (global.explanations || {});
  }

  function norm(s) {
    return String(s || '')
      .replace(/[""\u201C\u201D\u2018\u2019'`]/g, '')
      .replace(/[，,。.；;：:、!！?？]/g, ' ')
      .replace(/\.{2,}|…+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
  }

  function splitSentences(text) {
    var out = String(text || '').match(/[^.!?]+[.!?]*/g) || [];
    return out.map(function (s) { return s.trim(); }).filter(function (s) { return s.length > 1; });
  }

  // 展开全部题目：Task1(段落大意) 与 Task2(补全句子) 串成一个线性列表
  function flatten(exam) {
    var out = [];
    (exam.tasks || []).forEach(function (task, ti) {
      var texts = task.optionTexts || {};
      (task.questions || []).forEach(function (q) {
        out.push({
          id: q.id,
          label: q.label || '',
          correct: q.correct,
          taskIndex: ti,
          taskType: task.type,
          taskTitle: task.title || '',
          optionTexts: texts,
          paragraphIndex: task.type === 'matchHeading'
            ? (String(q.label).match(/[①②③④⑤⑥]/) ? ROMAN.indexOf(String(q.label).match(/[①②③④⑤⑥]/)[0]) : -1)
            : -1
        });
      });
    });
    return out;
  }

  var A = {
    meta: function (exam) {
      var flat = flatten(exam);
      return {
        title: exam.articleTitle || '概括段落大意与补全句子',
        subtitle: exam.year || '',
        total: flat.length
      };
    },

    sections: function (exam) {
      var secs = [];
      (exam.paragraphs || []).forEach(function (p, pi) {
        var sentences = splitSentences(p.text);
        secs.push({
          id: p.id || ('p' + pi),
          title: '第' + (ROMAN[pi] || (pi + 1)) + '段',
          items: sentences.map(function (s, si) {
            return { id: (p.id || 'p' + pi) + '-s' + si, text: s, zh: '' };
          })
        });
      });
      return secs;
    },

    questions: function (exam) {
      var flat = flatten(exam);
      var exps = loaderMap()[exam.year] || {};
      return flat.map(function (f, qi) {
        var texts = f.optionTexts || {};
        var opts = Object.keys(texts).sort();
        var correctText = texts[f.correct] || '';
        return {
          id: 'q' + f.id,
          no: f.id,
          stem: (f.taskType === 'matchHeading'
            ? '为' + f.label.replace(/[:：]\s*$/, '') + '选择正确的小标题'
            : f.label) + '（' + f.taskTitle + '）',
          answer: f.correct,
          answerLabel: f.correct + '. ' + correctText,
          options: opts.map(function (L) { return { letter: L, text: texts[L] }; }),
          optionsHtml: opts.map(function (L) {
            var on = (L === f.correct);
            return '<div class="lm-opt' + (on ? ' lm-opt-correct' : '') + '">' +
              '<span class="lm-opt-letter">' + esc(L) + '</span>' +
              '<span class="lm-opt-text">' + esc(texts[L]) + '</span></div>';
          }).join(''),
          explain: exps[f.id] || '',
          listLabel: f.taskType === 'matchHeading'
            ? ('段落' + (f.paragraphIndex >= 0 ? (ROMAN[f.paragraphIndex] || '') : '') + ' · ' + correctText)
            : (f.label + ' → ' + correctText),
          _flat: f,
          _correctText: correctText
        };
      });
    },

    optionText: function (q, op) {
      return op.letter + '，' + op.text + '。';
    },

    answerText: function (q) {
      return q._correctText
        ? '选 ' + q.answer + '，也就是：' + q._correctText + '。'
        : '选 ' + q.answer + '。';
    },

    // 依据 = Task1 取整段原文；Task2 取解析中引用的句子（用引号提取）
    evidenceOf: function (exam, q) {
      var f = q._flat;
      var secs = A.sections(exam);
      if (!secs.length) return [];

      if (f.taskType === 'matchHeading' && f.paragraphIndex >= 0) {
        var sec = secs[f.paragraphIndex];
        if (!sec) return [];
        // 取该段前 2 句 + 末句，足够支撑判断
        var items = sec.items;
        var picked = items.slice(0, 2);
        if (items.length > 2) picked.push(items[items.length - 1]);
        return picked.map(function (it) { return { id: it.id, text: it.text, zh: '' }; });
      }

      // Task2：从解析文本里抽出英文引号句作为依据
      var exp = q.explain || '';
      var quoted = [];
      var re = /[""\u201C\u201D]([^""\u201C\u201D]{12,240})[""\u201C\u201D]/g;
      var m;
      while ((m = re.exec(exp)) !== null) {
        if (/[A-Za-z]{3,}/.test(m[1])) quoted.push(m[1]);
      }
      var out = [];
      var matchIn = function (frag) {
        var target = norm(frag);
        if (target.length < 10) return null;
        // 1) 整体包含
        for (var i = 0; i < secs.length; i++) {
          for (var j = 0; j < secs[i].items.length; j++) {
            var it = secs[i].items[j];
            var cur = norm(it.text);
            if (cur === target || cur.indexOf(target) >= 0 || target.indexOf(cur) >= 0) return it;
          }
        }
        // 2) 容错：按词比对，命中率达 70% 即认作同一句
        var tw = target.split(' ').filter(function (w) { return w.length > 1; });
        if (tw.length < 3) return null;
        var best = null, bestScore = 0;
        for (var i2 = 0; i2 < secs.length; i2++) {
          for (var j2 = 0; j2 < secs[i2].items.length; j2++) {
            var cur2 = norm(secs[i2].items[j2].text);
            var hit = 0;
            for (var w = 0; w < tw.length; w++) { if (cur2.indexOf(tw[w]) >= 0) hit++; }
            var score = hit / tw.length;
            if (score > bestScore) { bestScore = score; best = secs[i2].items[j2]; }
          }
        }
        return bestScore >= 0.7 ? best : null;
      };
      quoted.forEach(function (s) {
        // 含省略号 → 拆成片段，逐个找；命中即用原文的完整句
        var frags = s.split(/\.{2,}|…+/).map(function (x) { return x.trim(); })
          .filter(function (x) { return x.length >= 8; });
        if (frags.length > 1) {
          var found = null;
          for (var fi = 0; fi < frags.length && !found; fi++) {
            found = matchIn(frags[fi]);
          }
          if (found) { out.push({ id: found.id, text: found.text, zh: '' }); return; }
        }
        var hit = matchIn(s);
        if (hit) out.push({ id: hit.id, text: hit.text, zh: '' });
        else out.push({ id: null, text: s, zh: '' });
      });
      return out;
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

      var isHeading = q._flat.taskType === 'matchHeading';
      push('我们来看第 ' + q.no + ' 题。', 'question');
      push('这题是' + (isHeading ? '为段落选小标题。段落是第 ' + ROMAN[q._flat.paragraphIndex] + ' 段。'
                                 : '补全句子。' + q._flat.label),
        'question-detail', { focus: 'stem' });
      push('正确答案是 ' + q.answer + '。', 'answer', { focus: 'answer' });
      if (q._correctText) push(isHeading ? ('对应的小标题是：' + q._correctText)
                                         : ('补全后是：' + q._correctText), 'answer-detail');

      // 选项只有字母 → 用「字母 + 文本」逐个朗读
      var texts = q._flat.optionTexts || {};
      var keys = Object.keys(texts).sort();
      if (keys.length) {
        push('六个小标题分别是：', 'options-lead');
        keys.forEach(function (L) {
          push(L + '，' + texts[L] + '。', 'option', { optionRef: L });
        });
      }

      if (q.explain) push('我们来看解析。' + q.explain, 'explain', { focus: 'explain' });

      var evs = A.evidenceOf(exam, q);
      if (evs.length) {
        push(isHeading ? '我们再回到这一段看原文。' : '我们再回到文章，找到对应的原文。', 'evidence-lead');
        evs.forEach(function (ev, i) {
          push((i === 0 ? '文章里是这样写的：' : '紧接着这一句是：') + ev.text, 'evidence',
            { evidenceRef: ev.id, evidenceText: ev.text });
        });
      }
      push('那么这一题的讲解就到这里。', 'ending');
      return lines;
    }
  };

  global.LectureAdapter = A;
})(window);
