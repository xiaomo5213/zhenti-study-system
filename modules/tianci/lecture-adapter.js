/**
 * 讲解模式 · 填词补文（tianci）适配器
 * ============================================================
 * 数据结构：
 *   exam = { id:'2013-10', session:'2013年10月', articleTitle,
 *            passage:['... humans are [31] the environment ...'],
 *            wordBank:[{letter:'A',word:'changing'}],
 *            answers:{'31':'A'},
 *            explanations:{'31':'【正确答案：A. changing】...'} }
 *   translationsCibu: { '2013-10': { '英文完整句':'中文' } }
 * 特点：空格以 [31] 形式内嵌；答案用字母对应 wordBank；翻译 key 为「已填空」的完整句。
 */
(function (global) {
  'use strict';

  var BLANK_KEYS = ['31', '32', '33', '34', '35', '36', '37', '38', '39', '40'];
  var MARK_RE = /\[(\d{2})\]/g;

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function loaderMap() {
    try {
      if (typeof translationsCibu !== 'undefined' && translationsCibu) return translationsCibu;
    } catch (e) {}
    return (global.translationsCibu || {});
  }

  function examKey(exam) {
    return exam.id || exam.session || '';
  }

  function norm(s) {
    return String(s || '').replace(/\s+/g, ' ').trim().toLowerCase();
  }

  // wordBank 查词
  function wordOf(exam, letter) {
    var bank = exam.wordBank || [];
    for (var i = 0; i < bank.length; i++) {
      if (bank[i].letter === letter) return bank[i].word;
    }
    return '';
  }

  // 把 [31] 就地还原为答案词
  function fillBlanks(exam, text) {
    return String(text || '').replace(MARK_RE, function (m, no) {
      var letter = (exam.answers || {})[no];
      var w = letter ? wordOf(exam, letter) : '';
      return w || m;
    });
  }

  // 显示用：空格标记替换为下划线占位
  function displayBlanks(text) {
    return String(text || '').replace(MARK_RE, '＿＿＿＿');
  }

  // 该空格所在句（已填空 / 未填空）
  function sentenceOf(exam, no) {
    var noStr = String(no);
    for (var i = 0; i < (exam.passage || []).length; i++) {
      var raw = exam.passage[i];
      if (raw.indexOf('[' + noStr + ']') < 0) continue;
      var sentences = raw.match(/[^.!?]+[.!?]*/g) || [raw];
      for (var j = 0; j < sentences.length; j++) {
        if (sentences[j].indexOf('[' + noStr + ']') >= 0) {
          return {
            paraIndex: i,
            raw: sentences[j].trim(),
            filled: fillBlanks(exam, sentences[j]).trim()
          };
        }
      }
    }
    return null;
  }

  var A = {
    meta: function (exam) {
      return {
        title: exam.articleTitle || '填词补文',
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
          // 翻译字典 key 为已填空完整句，做归一化查询
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
        var word = wordOf(exam, letter);
        var sen = sentenceOf(exam, no);
        // 选项 = wordBank 全部字母项，但只高亮正确项
        var opts = (exam.wordBank || []).map(function () { return null; });
        return {
          id: 'q' + no,
          no: Number(no),
          stem: '第 ' + no + ' 空：' + (sen ? sen.filled : ''),
          answer: letter,
          answerLabel: letter + '. ' + word,
          options: [],
          optionsHtml: '<div class="lm-opt lm-opt-correct">' +
            '<span class="lm-opt-letter">' + esc(letter) + '</span>' +
            '<span class="lm-opt-text">' + esc(word) + '</span></div>',
          explain: (exam.explanations || {})[no] || '',
          listLabel: '第 ' + no + ' 空 · ' + (word || ''),
          _letter: letter,
          _word: word,
          _sen: sen
        };
      });
    },

    optionText: function () { return ''; },

    answerText: function (q) {
      return '第 ' + q.no + ' 空选 ' + q._letter + '，' + q._word + '。';
    },

    evidenceOf: function (exam, q) {
      var sen = q._sen;
      if (!sen) return [];
      var secs = A.sections(exam);
      var target = norm(sen.filled);
      var hit = null;
      for (var i = 0; i < secs.length && !hit; i++) {
        for (var j = 0; j < secs[i].items.length; j++) {
          var cur = norm(secs[i].items[j].text);
          if (cur === target || cur.indexOf(target.slice(0, 40)) >= 0 || target.indexOf(cur) >= 0) {
            hit = secs[i].items[j];
            break;
          }
        }
      }
      if (!hit) return [{ id: null, text: sen.filled, zh: '' }];
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
      if (q._sen) push('这句话是：' + q._sen.filled, 'question-detail', { focus: 'stem' });
      push('正确答案是 ' + q._letter + '，也就是 ' + q._word + '。', 'answer',
        { focus: 'answer', focusText: q._word });
      // 词语库概览（帮听众理解可选范围）
      var bank = (exam.wordBank || []).slice(0, 12).map(function (b) {
        return b.letter + ' ' + b.word;
      }).join('，');
      if (bank) push('本题的备选词有：' + bank + '。', 'options-lead');

      if (q.explain) push('我们来看解析。' + q.explain, 'explain', { focus: 'explain' });

      var evs = A.evidenceOf(exam, q);
      if (evs.length) {
        push('我们回到文章看这个句子。', 'evidence-lead');
        evs.forEach(function (ev, i) {
          push((i === 0 ? '文章里是这样写的：' : '紧接着这一句是：') + ev.text, 'evidence',
            { evidenceRef: ev.id, evidenceText: ev.text });
          if (ev.zh) push('这句话的意思是，' + ev.zh, 'evidence-zh', { evidenceRef: ev.id });
        });
      }
      push('这一空就讲到这里。', 'ending');
      return lines;
    }
  };

  global.LectureAdapter = A;
})(window);
