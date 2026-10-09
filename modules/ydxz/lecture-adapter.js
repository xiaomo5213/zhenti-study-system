/**
 * 讲解模式 · 阅读选择（ydxz）适配器
 * ============================================================
 * 数据结构：
 *   exam = { session, articleTitle, articleParas:[{para,text}],
 *            questions:[{ q, options:['A. xxx'], answer:Number, explanation, sourceSentence }] }
 */
(function (global) {
  'use strict';

  var LETTERS = 'ABCDEFGHIJKL';

  function loaderMap() {
    // 页面内 translationsMap: { session: { '英文句子': '中文' } }（const 声明，不挂 window）
    try {
      if (typeof translationsMap !== 'undefined' && translationsMap) return translationsMap;
    } catch (e) {}
    return (global.translationsMap || {});
  }

  function splitSentences(text) {
    var out = String(text || '').match(/[^.!?]+[.!?]*/g) || [];
    return out.map(function (s) { return s.trim(); }).filter(function (s) { return s.length > 1; });
  }

  function normalize(s) {
    return String(s || '')
      .replace(/[""\u201C\u201D\u2018\u2019'`]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
  }

  // 在翻译字典里找某句中文（做轻度模糊：去引号、压缩空白、小写）
  function findZh(dict, sentence) {
    if (!dict) return '';
    if (dict[sentence]) return dict[sentence];
    var key = normalize(sentence);
    for (var k in dict) {
      if (!Object.prototype.hasOwnProperty.call(dict, k)) continue;
      if (normalize(k) === key) return dict[k];
    }
    return '';
  }

  var A = {
    meta: function (exam) {
      return {
        title: exam.articleTitle || exam.session || '阅读选择',
        subtitle: exam.session || '',
        total: (exam.questions || []).length
      };
    },

    // 左栏朗读材料：逐段、逐句，句 id 用 p{索引}s{句索引}
    sections: function (exam) {
      var dict = loaderMap()[exam.session] || {};
      var secs = [];
      (exam.articleParas || []).forEach(function (p, pi) {
        var sentences = splitSentences(p.text);
        secs.push({
          id: 'p' + pi,
          title: '',
          items: sentences.map(function (s, si) {
            return {
              id: 'p' + pi + 's' + si,
              text: s,
              zh: findZh(dict, s)
            };
          })
        });
      });
      return secs;
    },

    questions: function (exam) {
      return (exam.questions || []).map(function (q, qi) {
        var opts = (q.options || []).map(function (text, i) {
          return { letter: LETTERS[i], text: text, index: i };
        });
        var correct = opts[q.answer];
        return {
          id: 'q' + qi,
          no: qi + 1,
          stem: q.q || '',
          answer: q.answer,
          answerLabel: correct ? correct.letter : String(q.answer),
          options: opts,
          optionsHtml: opts.map(function (o) {
            var on = (o.index === q.answer);
            return '<div class="lm-opt' + (on ? ' lm-opt-correct' : '') + '">' +
              '<span class="lm-opt-letter">' + o.letter + '</span>' +
              '<span class="lm-opt-text">' + esc(o.text.replace(/^[A-Z]\.\s*/, '')) + '</span></div>';
          }).join(''),
          explain: q.explanation || '',
          listLabel: q.q || '',
          _src: q
        };
      });
    },

    optionText: function (q, op) {
      return op.letter + '，' + String(op.text).replace(/^[A-Z]\.\s*/, '') + '。';
    },

    answerText: function (q) {
      return '选项 ' + (q.answerLabel || q.answer) + '。';
    },

    // 依据 = 该题的原文来源句
    evidenceOf: function (exam, q) {
      var src = q._src && q._src.sourceSentence;
      if (!src) return [];
      var zh = findZh(loaderMap()[exam.session] || {}, src);
      return locateEvidence(exam, [src], zh);
    },

    // 定位依据句在左栏中的 itemId，供划线高亮
    locateEvidence: locateEvidence,

    hasUnderline: function () { return true; },

    script: function (exam, qIndex) {
      var qs = A.questions(exam);
      var q = qs[qIndex];
      if (!q) return [];
      var lines = [];
      var zhOpts = [];
      var zhAnswer = '';

      var push = function (text, kind, extra) {
        var line = Object.assign({ text: String(text), kind: kind }, extra || {});
        line.speakText = global.LectureCore.cleanForSpeech(text);
        lines.push(line);
        return line;
      };

      push('我们来看第 ' + (qIndex + 1) + ' 题。', 'question');
      push('题目问的是：' + q.stem, 'question-detail', { focus: 'stem' });
      push('正确答案是 ' + q.answerLabel + '。', 'answer', { focus: 'answer' });

      push('我们看一下选项。', 'options-lead');
      q.options.forEach(function (o) {
        push(o.letter + '，' + esc(o.text.replace(/^[A-Z]\.\s*/, '')) + '。', 'option');
      });

      if (q.explain) push('我们来看解析。' + q.explain, 'explain', { focus: 'explain' });

      var evs = A.evidenceOf(exam, q);
      if (evs.length) {
        push('我们再回到文章，找到题目对应的那句话。', 'evidence-lead');
        evs.forEach(function (ev, i) {
          push((i === 0 ? '文章里是这样写的：' : '紧接着这一句是：') + ev.text, 'evidence',
            { evidenceRef: ev.id, evidenceText: ev.text });
          if (ev.zh) push('这句话的意思是，' + ev.zh, 'evidence-zh', { evidenceRef: ev.id });
        });
      }
      push('那么这一题的讲解就到这里。', 'ending');
      return lines;
    }
  };

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // 把依据句映射到 sections 里的 itemId（做模糊匹配：包含关系 / 前 40 字符）
  function locateEvidence(exam, texts, zh) {
    var secs = A.sections(exam);
    var out = [];
    texts.forEach(function (src) {
      var target = normalize(src);
      if (!target) return;
      var hit = null;
      for (var i = 0; i < secs.length && !hit; i++) {
        for (var j = 0; j < secs[i].items.length; j++) {
          var it = secs[i].items[j];
          var cur = normalize(it.text);
          if (cur === target || cur.indexOf(target) >= 0 || target.indexOf(cur) >= 0 ||
              cur.indexOf(target.slice(0, 40)) >= 0) {
            hit = it;
            break;
          }
        }
      }
      if (hit) out.push({ id: hit.id, text: hit.text, zh: zh || hit.zh || '' });
      else out.push({ id: null, text: src, zh: zh || '' });
    });
    return out.filter(function (e) { return e.text; });
  }

  global.LectureAdapter = A;
})(window);
