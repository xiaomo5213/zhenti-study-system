// data-cibu.js - 填词补文题库（26个考期，第31~40题，每题1.5分，共15分）
const cibuExams = [
    // ========== 1. 2013年10月 ==========
    {
        id: '2013-10',
        session: '2013年10月',
        articleTitle: 'Protecting the Few',
        passage: [
            'How we live our lives affects the environment. The environment is all the things around you. All across Earth, humans are [31] the environment in small and large ways. We cut down trees to build houses. We plow fields to [32] crops. We pour waste into rivers, lakes and oceans. We use [33] numbers of fish. Activities like these affect plants and animals. They [34] affect things like the soil and water.',
            'Sometimes our actions make the number of a [35] plant or animal get larger. For example, if you planted roses in your yard, there would be more roses in your area.',
            'Our activities can also [36] to a smaller number of plants and animals. If a park were turned into an apartment building, what would happen to the plants and animals there? Well, they would [37] die or move to other [38]. There would be fewer plants and animals.',
            'Pollution and other activities sometimes cause the number of a species to become so [39] that it cannot survive. A species that is in [40] of dying out is called an endangered species.'
        ],
        wordBank: [
            { letter: 'A', word: 'changing' }, { letter: 'B', word: 'grow' },
            { letter: 'C', word: 'lead' }, { letter: 'D', word: 'either' },
            { letter: 'E', word: 'huge' }, { letter: 'F', word: 'places' },
            { letter: 'G', word: 'certain' }, { letter: 'H', word: 'also' },
            { letter: 'I', word: 'increase' }, { letter: 'J', word: 'small' },
            { letter: 'K', word: 'survival' }, { letter: 'L', word: 'danger' }
        ],
        answers: { '31': 'A', '32': 'B', '33': 'E', '34': 'H', '35': 'G', '36': 'C', '37': 'D', '38': 'F', '39': 'J', '40': 'L' },
        explanations: {
            '31': '【正确答案：A. changing】空格所在句为"humans are ___ the environment"（人类正以大大小小的方式___环境）。"are + 现在分词"构成现在进行时，空格需要填入一个现在分词。选项A "changing"（改变）符合语境，人类正在改变环境。干扰项：B "grow"是动词原形，不能构成进行时；H "also"是副词，语法不通。',
            '32': '【正确答案：B. grow】空格所在句为"We plow fields to ___ crops"（我们耕田来___庄稼）。"to + 动词原形"构成不定式，表示目的。选项B "grow"（种植）符合语境，"grow crops"（种植庄稼）是固定搭配。干扰项：A "changing"是现在分词；C "lead"（导致）不能构成"lead crops"。',
            '33': '【正确答案：E. huge】空格所在句为"We use ___ numbers of fish"（我们使用___数量的鱼）。空格修饰"numbers"，需要填入一个形容词。选项E "huge"（巨大的）符合语境，"huge numbers of"（大量的）是固定搭配。干扰项：G "certain"（某些）语义不自然；J "small"（小的）与过度捕捞语境不符。',
            '34': '【正确答案：H. also】空格所在句为"They ___ affect things like the soil and water"（它们___影响土壤和水等事物）。空格需要填入副词修饰动词。选项H "also"（也）符合语境，表明除了动植物，人类活动也影响土壤和水。',
            '35': '【正确答案：G. certain】空格所在句为"the number of a ___ plant or animal"（某一___植物或动物的数量）。空格修饰"plant or animal"，需要填入一个形容词。选项G "certain"（某种、某一）符合语境，"a certain plant or animal"（某种特定的动植物）是固定搭配。',
            '36': '【正确答案：C. lead】空格所在句为"Our activities can also ___ to a smaller number of plants and animals"（我们的活动也会___动植物数量减少）。"can also ___ to"需要填入动词原形。选项C "lead"（导致）符合语境，"lead to"（导致）是固定搭配。干扰项：I "increase"（增加）与"smaller number"语义相反。',
            '37': '【正确答案：D. either】空格所在句为"they would ___ die or move to other ___"（它们会___死亡或迁移到其他___）。"___ ... or ..."是固定搭配。选项D "either"（两者之一）符合语境，"either...or..."（要么……要么……）是固定搭配。',
            '38': '【正确答案：F. places】空格所在句为"move to other ___"（迁移到其他___）。"move to other ___"需要填入名词复数。选项F "places"（地方）符合语境，"move to other places"（迁移到其他地方）是固定搭配。',
            '39': '【正确答案：J. small】空格所在句为"the number of a species to become so ___ that it cannot survive"（物种数量变得如此___以至于无法生存）。"so + 形容词 + that"是固定结构。选项J "small"（小）符合语境，"so small that it cannot survive"（少到无法生存）与"endangered species"（濒危物种）呼应。干扰项：E "huge"（巨大的）语义相反。',
            '40': '【正确答案：L. danger】空格所在句为"A species that is in ___ of dying out"（处于灭绝___中的物种）。"in ___ of"是固定搭配。选项L "danger"（危险）符合语境，"in danger of"（处于……的危险中）是固定搭配。干扰项：K "survival"不能构成"in survival of"。'
        }
    },

    // ========== 2. 2014年4月 ==========
    {
        id: '2014-04',
        session: '2014年4月',
        articleTitle: 'Life is Difficult',
        passage: [
            'What makes life difficult is that the process of facing and solving problems is a painful one. Problems cause [31], anger, fear or despair. These are [32] feelings, often as painful as any kind of physical pain. And since life [33] an endless series of problems, it is [34] difficult and is full of pain as well as joy.',
            'Yet it is in this process of [35] and solving problems that life has its meaning. Problems call forth our [36] and our wisdom. It is only because of problem that we grow [37] and spiritually. When we want to encourage the [38] of the human spirit, we encourage the human capacity to solve problems, just as in school we deliberately [39] problems for our children to solve. It is for this reason that [40] people learn not to fear but actually to welcome problems.'
        ],
        wordBank: [
            { letter: 'A', word: 'meeting' }, { letter: 'B', word: 'courage' },
            { letter: 'C', word: 'careful' }, { letter: 'D', word: 'growth' },
            { letter: 'E', word: 'wise' }, { letter: 'F', word: 'takes' },
            { letter: 'G', word: 'sadness' }, { letter: 'H', word: 'set' },
            { letter: 'I', word: 'poses' }, { letter: 'J', word: 'always' },
            { letter: 'K', word: 'uncomfortable' }, { letter: 'L', word: 'mentally' }
        ],
        answers: { '31': 'G', '32': 'K', '33': 'I', '34': 'J', '35': 'A', '36': 'B', '37': 'L', '38': 'D', '39': 'H', '40': 'E' },
        explanations: {
            '31': '【正确答案：G. sadness】空格所在句为"Problems cause ___, anger, fear or despair"（问题导致___、愤怒、恐惧或绝望）。空格与 anger、fear、despair 并列，需要填入表示负面情绪的名词。选项G "sadness"（悲伤）符合语境。干扰项：D "growth"（成长）是正面词；A "meeting"（会议）语义不通。',
            '32': '【正确答案：K. uncomfortable】空格所在句为"These are ___ feelings, often as painful as any kind of physical pain"（这些是___感受，往往和身体疼痛一样痛苦）。空格修饰"feelings"，需要填入形容词。选项K "uncomfortable"（不舒服的）符合语境。干扰项：C "careful"（仔细的）语义不符；E "wise"（明智的）不能修饰 feelings 表示"负面"。',
            '33': '【正确答案：I. poses】空格所在句为"since life ___ an endless series of problems"（既然生活___一系列无穷无尽的问题）。"since"引导原因状语从句，主语为 life，需要动词第三人称单数。选项I "poses"（提出、造成）符合语境，"pose problems"（造成问题）是固定搭配。干扰项：F "takes"不能构成"take problems"。',
            '34': '【正确答案：J. always】空格所在句为"it is ___ difficult and is full of pain as well as joy"（它___是困难的，既充满痛苦又充满欢乐）。空格修饰"difficult"，需要填入副词。选项J "always"（总是）符合语境。干扰项：L "mentally"（精神上）语义不符。',
            '35': '【正确答案：A. meeting】空格所在句为"it is in this process of ___ and solving problems"（正是在___和解决问题的过程中）。空格与"solving"并列，需要动名词。选项A "meeting"（面对）符合语境，"meeting and solving problems"（面对和解决问题）与文章开头"facing and solving problems"呼应。',
            '36': '【正确答案：B. courage】空格所在句为"Problems call forth our ___ and our wisdom"（问题激发我们的___和智慧）。空格与"wisdom"并列，需要名词。选项B "courage"（勇气）符合语境，"courage and wisdom"（勇气和智慧）是固定搭配。',
            '37': '【正确答案：L. mentally】空格所在句为"we grow ___ and spiritually"（我们在___和精神上成长）。空格与"spiritually"并列，需要副词。选项L "mentally"（心理上、精神上）符合语境。干扰项：J "always"（总是）不能与 spiritually 并列。',
            '38': '【正确答案：D. growth】空格所在句为"we want to encourage the ___ of the human spirit"（我们想要促进人类精神的___）。"the ___ of"需要名词。选项D "growth"（成长）符合语境，"the growth of the human spirit"（人类精神的成长）是固定搭配。',
            '39': '【正确答案：H. set】空格所在句为"in school we deliberately ___ problems for our children to solve"（在学校我们故意___问题让孩子去解决）。主语为 we，需要动词原形。选项H "set"（设置）符合语境，"set problems"（设置题目）是固定搭配。干扰项：F "takes"是第三人称单数；I "poses"也是第三人称单数。',
            '40': '【正确答案：E. wise】空格所在句为"It is for this reason that ___ people learn not to fear"（正是因为这个原因，___的人学会不害怕）。空格修饰"people"，需要形容词。选项E "wise"（明智的）符合语境，"wise people"（明智的人）与后文"learn not to fear"呼应。'
        }
    },

    // ========== 3. 2014年10月 ==========
    {
        id: '2014-10',
        session: '2014年10月',
        articleTitle: 'Mental Activities Help Save Memory',
        passage: [
            'Doing mental activities is helpful. Reading books and writing at any age may save memory, a new [31] finds.',
            'The study was conducted by some American neurologists. It [32] 294 people. They were given [33] on memory and thinking. They had the tests once a year for six years. They were also asked to talk about their mental activities during childhood, in their youth, during middle age and at their [34] age.',
            'Some of those people did mental activities both [35] and late in life. They had a slower [36] of decline in memory than the others. The others [37] did such activities. Their rate of decline in memory was 48% [38].',
            'Mental activities like reading and writing are great. They [39] bring benefits. We should not [40] their effects on our children, ourselves and our parents, said Robert Wilson, lead author of the study.'
        ],
        wordBank: [
            { letter: 'A', word: 'early' }, { letter: 'B', word: 'tests' },
            { letter: 'C', word: 'seldom' }, { letter: 'D', word: 'taught' },
            { letter: 'E', word: 'faster' }, { letter: 'F', word: 'produce' },
            { letter: 'G', word: 'study' }, { letter: 'H', word: 'current' },
            { letter: 'I', word: 'involved' }, { letter: 'J', word: 'neglect' },
            { letter: 'K', word: 'rate' }, { letter: 'L', word: 'really' }
        ],
        answers: { '31': 'G', '32': 'I', '33': 'B', '34': 'H', '35': 'A', '36': 'K', '37': 'C', '38': 'E', '39': 'L', '40': 'J' },
        explanations: {
            '31': '【正确答案：G. study】空格所在句为"a new ___ finds"（一项新的___发现）。"a new ___ finds"需要填入名词作主语。选项G "study"（研究）符合语境，"a new study finds"（一项新研究发现）是固定表达。干扰项：B "tests"不能构成"a new tests finds"；K "rate"语义不通。',
            '32': '【正确答案：I. involved】空格所在句为"It ___ 294 people"（它___294人）。空格需要动词过去式。选项I "involved"（涉及）符合语境，"involved 294 people"（涉及294人）是描述研究样本的标准搭配。干扰项：D "taught"（教）语义不符；F "produce"是动词原形。',
            '33': '【正确答案：B. tests】空格所在句为"They were given ___ on memory and thinking"（他们接受了关于记忆和思维的___）。"were given ___ on"需要名词复数。选项B "tests"（测试）符合语境，"be given tests on"（接受关于……的测试）是固定搭配。干扰项：G "study"是单数；K "rate"不能与"on"搭配。',
            '34': '【正确答案：H. current】空格所在句为"at their ___ age"（在他们___的年龄）。空格修饰 age，需要形容词。选项H "current"（当前的）符合语境，与前文"during childhood, in their youth, during middle age"形成完整年龄序列。干扰项：A "early"（早的）不能与"at their"搭配表示"当前"。',
            '35': '【正确答案：A. early】空格所在句为"did mental activities both ___ and late in life"（在生命的___和晚期都进行脑力活动）。"both ___ and late"是并列结构。选项A "early"（早期）符合语境，与"late"形成对比。干扰项：H "current"（当前的）不能与 late 形成"早/晚"对比。',
            '36': '【正确答案：K. rate】空格所在句为"They had a slower ___ of decline in memory"（他们的记忆衰退___较慢）。"a slower ___ of decline"需要名词。选项K "rate"（速度）符合语境，"rate of decline"（衰退速度）是固定搭配。',
            '37': '【正确答案：C. seldom】空格所在句为"The others ___ did such activities"（其他人___做这样的活动）。空格修饰"did"，需要副词。选项C "seldom"（很少）符合语境，与前半句形成对比。干扰项：L "really"（真正地）语义不同。',
            '38': '【正确答案：E. faster】空格所在句为"Their rate of decline in memory was 48% ___"（他们的记忆衰退速度___48%）。空格需要副词比较级。选项E "faster"（更快）符合语境，"48% faster"（快48%）是常见表达。',
            '39': '【正确答案：L. really】空格所在句为"They ___ bring benefits"（它们___带来好处）。空格修饰"bring"，需要副词。选项L "really"（真正地）符合语境，强调脑力活动确实有益。干扰项：C "seldom"（很少）语义相反。',
            '40': '【正确答案：J. neglect】空格所在句为"We should not ___ their effects on our children"（我们不应该___它们对我们孩子的影响）。"should not + 动词原形"构成否定结构。选项J "neglect"（忽视）符合语境，"should not neglect their effects"（不应忽视它们的影响）是常见搭配。'
        }
    },

        // ========== 4. 2015年4月 ==========
    {
        id: '2015-04',
        session: '2015年4月',
        articleTitle: 'Learn from Your Failures',
        passage: [
            'Have you ever failed? If not, it is [31] that you have never taken a [32] on trying anything new, or else you are lying.',
            'There is nothing [33] with failing, as long as you learn from your mistakes, modify your approach and try again. In fact, the more often you fail, the sooner it will be that you [34] succeed, provided that you do learn and keep trying.',
            'You can [35] only from experience and you get experience only from having a go at something. It may be more [36] to succeed, but you can [37] learn more from failing. This is only if you are observant and take [38] of what you are doing and which things have worked and which have not. You then need to [39] what has happened, alter your [40] and move on.',
            'So go for it! You will eventually get there -- unless you stop trying.'
        ],
        wordBank: [
            { letter: 'A', word: 'probable' }, { letter: 'B', word: 'actually' },
            { letter: 'C', word: 'direction' }, { letter: 'D', word: 'finally' },
            { letter: 'E', word: 'start' }, { letter: 'F', word: 'chance' },
            { letter: 'G', word: 'special' }, { letter: 'H', word: 'grow' },
            { letter: 'I', word: 'wrong' }, { letter: 'J', word: 'note' },
            { letter: 'K', word: 'analyze' }, { letter: 'L', word: 'pleasant' }
        ],
        answers: { '31': 'A', '32': 'F', '33': 'I', '34': 'D', '35': 'H', '36': 'L', '37': 'B', '38': 'J', '39': 'K', '40': 'C' },
        explanations: {
            '31': '【正确答案：A. probable】空格所在句为"it is ___ that you have never taken a chance on trying anything new"（那你很可能从未冒险尝试过任何新事物）。"it is ___ that..."结构中，"it"是形式主语，真正的主语是后面的"that"从句，空格需要填入一个形容词作表语。选项A "probable"（可能的）符合语境，"it is probable that..."是常见的固定句型，表达一种推测。干扰项：L "pleasant"（令人愉快的）不能构成"it is pleasant that you have never tried"；I "wrong"（错误的）语义不通；D "finally"（最终）是副词。',
            '32': '【正确答案：F. chance】空格所在句为"you have never taken a ___ on trying anything new"（你从未冒险尝试过尝试新事物）。"taken a ___ on"是固定搭配，需要填入一个名词。选项F "chance"（机会）符合语境，"take a chance on"（冒险尝试）是极为常见的固定搭配。干扰项：E "start"（开始）不能构成"take a start on"；G "special"（特别的）是形容词；J "note"（笔记）不能构成"take a note on"表示"冒险"。',
            '33': '【正确答案：I. wrong】空格所在句为"There is nothing ___ with failing"（失败没有什么不对）。"nothing ___ with"是固定搭配，需要填入一个形容词。选项I "wrong"（错的）符合语境，"nothing wrong with"（……没什么不对）是极为常见的固定搭配，指失败本身没有问题。干扰项：G "special"（特别的）虽然可以构成"nothing special with"，但语义是"没什么特别的"，不如"没什么不对"贴切；L "pleasant"不能构成"nothing pleasant with"。',
            '34': '【正确答案：D. finally】空格所在句为"the sooner it will be that you ___ succeed"（你最终成功的时间就越早）。空格修饰"succeed"，需要填入一个副词。选项D "finally"（最终）符合语境，"finally succeed"（最终成功）与"the sooner"（越快）形成呼应。干扰项：B "actually"（实际上）语义不同；A "probable"是形容词；E "start"是动词。',
            '35': '【正确答案：H. grow】空格所在句为"You can ___ only from experience"（你只能从经验中成长）。"can + 动词原形"构成情态动词结构，空格需要填入动词原形。选项H "grow"（成长）符合语境，"grow from experience"（从经验中成长）是极为常见的搭配，与文章主题"从失败中学习"呼应。干扰项：E "start"（开始）不能构成"start from experience"表示"成长"；K "analyze"（分析）语义不同；J "note"（注意）是名词。',
            '36': '【正确答案：L. pleasant】空格所在句为"It may be more ___ to succeed"（成功可能更令人愉快）。"more ___ to succeed"需要填入一个形容词作表语。选项L "pleasant"（愉快的）符合语境，"more pleasant to succeed"（成功可能更令人愉快）与后文"but you can actually learn more from failing"（但你实际上能从失败中学到更多）形成对比。干扰项：G "special"（特别的）语义不通；I "wrong"（错误的）语义相反；A "probable"（可能的）不能构成"more probable to succeed"表示"更令人愉快"。',
            '37': '【正确答案：B. actually】空格所在句为"but you can ___ learn more from failing"（但你实际上能从失败中学到更多）。空格修饰"learn"，需要填入一个副词。选项B "actually"（实际上）符合语境，"actually learn more"（实际上学到更多）与前文"more pleasant to succeed"（成功更令人愉快）形成转折。干扰项：D "finally"（最终）语义不同；E "start"是动词；L "pleasant"是形容词。',
            '38': '【正确答案：J. note】空格所在句为"take ___ of what you are doing"（注意你正在做的事情）。"take ___ of"是固定搭配，需要填入一个名词。选项J "note"（注意）符合语境，"take note of"（注意）是极为常见的固定搭配，指要仔细观察自己正在做的事。干扰项：F "chance"（机会）不能构成"take chance of"；C "direction"（方向）不能构成"take direction of"；K "analyze"是动词。',
            '39': '【正确答案：K. analyze】空格所在句为"You then need to ___ what has happened"（然后你需要分析发生了什么）。"need to + 动词原形"构成不定式，空格需要填入动词原形。选项K "analyze"（分析）符合语境，"analyze what has happened"（分析发生了什么）是极为常见的搭配，与"学习失败"的主题呼应。干扰项：E "start"（开始）不能构成"start what has happened"；H "grow"（成长）语义不通；J "note"（注意）是名词。',
            '40': '【正确答案：C. direction】空格所在句为"alter your ___ and move on"（改变你的方向并继续前进）。"alter your ___"需要填入一个名词。选项C "direction"（方向）符合语境，"alter your direction"（改变方向）是极为常见的搭配，与"move on"（继续前进）形成语义呼应，指调整方向后继续前进。干扰项：F "chance"（机会）不能构成"alter your chance"；G "special"（特别的）是形容词；J "note"（笔记）语义不通。'
        }
    },

    // ========== 5. 2015年10月 ==========
    {
        id: '2015-10',
        session: '2015年10月',
        articleTitle: 'People Use Technology More, Sleep Less',
        passage: [
            'People in Britain now spend more time watching TV, gaming, and using their mobile phones and computers than sleeping. A study [31] that British people use technology for 20 minutes longer than they spend sleeping. The average UK adult uses technology for eight hours and 41 minutes a day. They [32] for an average of eight hours and 21 minutes. One of the biggest [33] for this is wi-fi. People can get online almost [34]. Many people make telephone calls or surf the web while watching TV. TV is still the most [35] activity.',
            'The study looked at technology and [36] age groups. It found that six-year-olds understand how to use technology at the same [37] as 45-year-olds. Another [38] was that people understand digital technology most when they are 14 or 15. A doctor said technology is [39] the way people communicate with each other. He said we are moving [40] from face-to-face conversations because of technology.'
        ],
        wordBank: [
            { letter: 'A', word: 'changing' }, { letter: 'B', word: 'reasons' },
            { letter: 'C', word: 'popular' }, { letter: 'D', word: 'found' },
            { letter: 'E', word: 'anywhere' }, { letter: 'F', word: 'down' },
            { letter: 'G', word: 'finding' }, { letter: 'H', word: 'level' },
            { letter: 'I', word: 'different' }, { letter: 'J', word: 'away' },
            { letter: 'K', word: 'outdoor' }, { letter: 'L', word: 'sleep' }
        ],
        answers: { '31': 'D', '32': 'L', '33': 'B', '34': 'E', '35': 'C', '36': 'I', '37': 'H', '38': 'G', '39': 'A', '40': 'J' },
        explanations: {
            '31': '【正确答案：D. found】空格所在句为"A study ___ that British people use technology for 20 minutes longer"（一项研究发现，英国人使用科技的时间多20分钟）。"A study ___ that..."需要填入一个动词过去式，与"study"构成主谓关系。选项D "found"（发现）符合语境，"A study found that..."（一项研究发现……）是极为常见的学术表达，用于引出研究结果。干扰项：A "changing"（改变）是现在分词，不能作谓语；B "reasons"（原因）是名词复数；G "finding"（发现）是动名词。',
            '32': '【正确答案：L. sleep】空格所在句为"They ___ for an average of eight hours and 21 minutes"（他们平均睡8小时21分钟）。空格需要一个动词原形（主语为 They）。选项L "sleep"（睡觉）符合语境，"sleep for an average of..."（平均睡……）与文章主题"人们使用科技时间比睡眠更多"呼应。干扰项：B "reasons"（原因）是名词；F "down"（向下）是副词；G "finding"（发现）是动名词。',
            '33': '【正确答案：B. reasons】空格所在句为"One of the biggest ___ for this is wi-fi"（其中一个最大的原因是Wi-Fi）。"One of the biggest ___ for"是固定搭配，需要填入一个名词复数。选项B "reasons"（原因）符合语境，"one of the biggest reasons for"（……最大的原因之一）是极为常见的固定搭配。干扰项：G "finding"（发现）是单数，与"one of the biggest"搭配不当；H "level"（水平）不能构成"level for this"；E "anywhere"（任何地方）是副词。',
            '34': '【正确答案：E. anywhere】空格所在句为"People can get online almost ___"（人们几乎可以在任何地方上网）。"almost ___"需要填入一个副词，修饰"get online"（上网）。选项E "anywhere"（任何地方）符合语境，"get online almost anywhere"（几乎在任何地方上网）与"wi-fi"（无线网络）形成语义呼应。干扰项：F "down"（向下）语义不通；J "away"（离开）语义不符；K "outdoor"（户外的）是形容词。',
            '35': '【正确答案：C. popular】空格所在句为"TV is still the most ___ activity"（电视仍然是最流行的活动）。"the most ___ activity"需要填入一个形容词，修饰 activity。选项C "popular"（流行的）符合语境，"the most popular activity"（最流行的活动）与"TV"（电视）搭配自然。干扰项：K "outdoor"（户外的）不能修饰 TV；A "changing"（变化的）是现在分词；H "level"是名词。',
            '36': '【正确答案：I. different】空格所在句为"The study looked at technology and ___ age groups"（研究考察了科技和不同年龄段）。"technology and ___ age groups"需要填入一个形容词修饰 age groups。选项I "different"（不同的）符合语境，"different age groups"（不同年龄段）是极为常见的搭配，与后文"six-year-olds"（6岁）和"45-year-olds"（45岁）呼应。干扰项：C "popular"（流行的）不能修饰 age groups；K "outdoor"（户外的）语义不通；H "level"是名词。',
            '37': '【正确答案：H. level】空格所在句为"six-year-olds understand how to use technology at the same ___ as 45-year-olds"（6岁孩子使用科技的理解力与45岁的人在同一水平）。"at the same ___ as"是固定搭配，需要填入一个名词。选项H "level"（水平）符合语境，"at the same level as"（与……在同一水平）是极为常见的固定搭配。干扰项：E "anywhere"（任何地方）是副词；B "reasons"（原因）不能构成"at the same reasons"；F "down"是副词。',
            '38': '【正确答案：G. finding】空格所在句为"Another ___ was that people understand digital technology most when they are 14 or 15"（另一个发现是，人们在14、15岁时最懂数字科技）。"Another ___ was that"是固定搭配，需要填入一个名词单数。选项G "finding"（发现）符合语境，"another finding was that..."（另一个发现是……）是学术文本中的常见表达。干扰项：B "reasons"（原因）是复数，与"another"（另一个，单数）不搭配；H "level"（水平）不能构成"another level was that"表示"另一个发现"。',
            '39': '【正确答案：A. changing】空格所在句为"A doctor said technology is ___ the way people communicate with each other"（一位医生说科技正在改变人们相互交流的方式）。"is ___ the way"构成进行时，空格需要填入一个现在分词。选项A "changing"（改变）符合语境，"changing the way people communicate"（改变人们交流的方式）是极为常见的搭配。干扰项：D "found"是过去式，不能构成进行时；C "popular"（流行的）是形容词；H "level"是名词。',
            '40': '【正确答案：J. away】空格所在句为"we are moving ___ from face-to-face conversations"（我们正远离面对面交谈）。"moving ___ from"是固定搭配，需要填入一个副词。选项J "away"（离开）符合语境，"move away from"（远离）是极为常见的固定搭配，指人们越来越远离面对面交流。干扰项：F "down"（向下）不能构成"move down from"表示"远离"；E "anywhere"（任何地方）语义不通；K "outdoor"（户外的）是形容词。'
        }
    },

    // ========== 6. 2016年4月 ==========
    {
        id: '2016-04',
        session: '2016年4月',
        articleTitle: 'Business English Helps',
        passage: [
            'English plays an important role in the workplace. When used in the correct and proper [31], it can help to promote a career or a business. Some may [32] or want to study business English [33] they start their careers. Those who are already working have the [34] to see what they can and cannot do [35] in English in their current job.',
            'Business English provides you with valuable skills needed for your work. For example, you will learn [36] to negotiate. Being able to deal with a [37] and knowing how to bargain and [38] an agreement can make a [39] difference to the outcome.',
            'Business English learning encourages professional and efficient communication, and promotes service to customers and business partners, [40] is a great advantage for any business.'
        ],
        wordBank: [
            { letter: 'A', word: 'big' }, { letter: 'B', word: 'need' },
            { letter: 'C', word: 'what' }, { letter: 'D', word: 'before' },
            { letter: 'E', word: 'reach' }, { letter: 'F', word: 'which' },
            { letter: 'G', word: 'conflict' }, { letter: 'H', word: 'effectively' },
            { letter: 'I', word: 'way' }, { letter: 'J', word: 'how' },
            { letter: 'K', word: 'small' }, { letter: 'L', word: 'opportunity' }
        ],
        answers: { '31': 'I', '32': 'B', '33': 'D', '34': 'L', '35': 'H', '36': 'J', '37': 'G', '38': 'E', '39': 'A', '40': 'F' },
        explanations: {
            '31': '【正确答案：I. way】空格所在句为"When used in the correct and proper ___"（当以正确恰当的方式使用时）。"in the correct and proper ___"需要填入一个名词，与"in the"搭配成介词短语。选项I "way"（方式）符合语境，"in the correct and proper way"（以正确恰当的方式）是极为常见的固定搭配。干扰项：J "how"（如何）是疑问副词，不能作名词；C "what"（什么）也不能作名词；B "need"（需要）语义不通。',
            '32': '【正确答案：B. need】空格所在句为"Some may ___ or want to study business English"（一些人可能需要或想学习商务英语）。"may ___ or want to"是两个动词并列，空格需要填入动词原形。选项B "need"（需要）符合语境，"need or want to study"（需要或想学习）是极为自然的并列搭配。干扰项：E "reach"（到达）不能构成"reach or want to study"；J "how"（如何）是疑问词，语法不通；A "big"是形容词。',
            '33': '【正确答案：D. before】空格所在句为"___ they start their careers"（在他们开始职业生涯之前）。"___ they start their careers"是时间状语从句，空格需要填入一个连词或介词。选项D "before"（在……之前）符合语境，"before they start their careers"（在他们开始职业生涯之前）是极为常见的时间状语从句。干扰项：C "what"（什么）不能引导时间状语从句；F "which"（哪一个）也不能引导时间状语；I "way"（方式）是名词。',
            '34': '【正确答案：L. opportunity】空格所在句为"Those who are already working have the ___ to see what they can and cannot do"（已经工作的人有机会看到他们能做什么、不能做什么）。"have the ___ to do"是固定搭配，需要填入一个名词。选项L "opportunity"（机会）符合语境，"have the opportunity to do"（有机会做）是极为常见的固定搭配。干扰项：I "way"（方式）不能构成"have the way to do"表示"有机会做"；J "how"（如何）是疑问词；B "need"（需要）不能与"have the"搭配表示"有机会"。',
            '35': '【正确答案：H. effectively】空格所在句为"what they can and cannot do ___ in English"（他们在英语中能有效地做什么、不能做什么）。空格修饰"do"，需要填入一个副词。选项H "effectively"（有效地）符合语境，"do effectively in English"（在英语中有效地做）指在实际工作中能用英语做什么、不能做什么。干扰项：A "big"（大的）是形容词；K "small"（小的）是形容词；I "way"是名词。',
            '36': '【正确答案：J. how】空格所在句为"you will learn ___ to negotiate"（你将学习如何谈判）。"learn ___ to do"是固定句型，需要填入一个疑问词。选项J "how"（如何）符合语境，"learn how to negotiate"（学习如何谈判）是极为常见的搭配。干扰项：C "what"（什么）虽然也可以构成"learn what to do"，但后面是"negotiate"（谈判），"learn what to negotiate"语义不通；I "way"（方式）不能构成"learn way to negotiate"；B "need"是动词。',
            '37': '【正确答案：G. conflict】空格所在句为"Being able to deal with a ___"（能够处理冲突）。"deal with a ___"需要填入一个名词，与"deal with"（处理）搭配。选项G "conflict"（冲突）符合语境，"deal with a conflict"（处理冲突）是极为常见的搭配。干扰项：B "need"（需要）不能构成"deal with a need"；I "way"（方式）语义不通；L "opportunity"（机会）不能构成"deal with an opportunity"。',
            '38': '【正确答案：E. reach】空格所在句为"knowing how to bargain and ___ an agreement"（知道如何讨价还价并达成协议）。"bargain and ___ an agreement"是两个动词并列，空格需要填入动词原形。选项E "reach"（达成）符合语境，"reach an agreement"（达成协议）是极为常见的固定搭配，与"bargain"（讨价还价）并列，都是谈判技巧。干扰项：B "need"（需要）不能构成"need an agreement"表示"达成"；J "how"（如何）是疑问词；G "conflict"是名词。',
            '39': '【正确答案：A. big】空格所在句为"can make a ___ difference to the outcome"（能对结果产生重大影响）。"make a ___ difference"是固定搭配，需要填入一个形容词。选项A "big"（大的）符合语境，"make a big difference"（产生重大影响）是极为常见的固定搭配。干扰项：K "small"（小的）语义是"影响小"，与语境强调谈判技巧的重要性不符；H "effectively"（有效地）是副词；F "which"是关系代词。',
            '40': '【正确答案：F. which】空格所在句为"promotes service to customers and business partners, ___ is a great advantage for any business"（促进对客户和商业伙伴的服务，这对任何企业都是很大的优势）。"___ is a great advantage"是一个非限定性定语从句，空格需要填入一个关系代词。选项F "which"（这）符合语境，引导非限定性定语从句，指代前面整个句子。干扰项：C "what"（什么）不能引导定语从句；J "how"（如何）也不能引导定语从句；I "way"是名词。'
        }
    },

    // ========== 7. 2016年10月 ==========
    {
        id: '2016-10',
        session: '2016年10月',
        articleTitle: 'Positive Attitude towards Failure',
        passage: [
            'I clearly remember a period during which I felt like a failure. But what I [31] learned was that failing at one thing is not failing at all things. And, in fact, failure is a [32] part of growth. Life is filled with trial and [33]. In order to walk the path to [34], you need to make some [35] turns along the way. What I learned was to "fail forward", to [36] each mistake to make myself better. One of the [37] problems people have with failure is that they are too quick to judge isolated [38] in their lives and label them as failures. [39], they need to keep the bigger picture in mind. A successful baseball player does not [40] at a mistake he makes and think of failure. He sees it within the context of the bigger picture.'
        ],
        wordBank: [
            { letter: 'A', word: 'error' }, { letter: 'B', word: 'use' },
            { letter: 'C', word: 'eventually' }, { letter: 'D', word: 'graceful' },
            { letter: 'E', word: 'necessary' }, { letter: 'F', word: 'situations' },
            { letter: 'G', word: 'Firstly' }, { letter: 'H', word: 'wrong' },
            { letter: 'I', word: 'Instead' }, { letter: 'J', word: 'success' },
            { letter: 'K', word: 'greatest' }, { letter: 'L', word: 'look' }
        ],
        answers: { '31': 'C', '32': 'E', '33': 'A', '34': 'J', '35': 'H', '36': 'B', '37': 'K', '38': 'F', '39': 'I', '40': 'L' },
        explanations: {
            '31': '【正确答案：C. eventually】空格所在句为"But what I ___ learned was that..."（但我最终学到的是……）。空格修饰"learned"，需要填入一个副词。选项C "eventually"（最终）符合语境，"what I eventually learned"（我最终学到的）与"during which I felt like a failure"（在那段时间我感到自己是个失败者）呼应。干扰项：G "Firstly"（首先）表示顺序，不能构成"what I firstly learned"；I "Instead"（相反）语义不同；D "graceful"是形容词。',
            '32': '【正确答案：E. necessary】空格所在句为"failure is a ___ part of growth"（失败是成长的必要一部分）。空格修饰"part"，需要填入一个形容词。选项E "necessary"（必要的）符合语境，"a necessary part of growth"（成长的必要部分）与文章主题"从失败中学习"呼应。干扰项：D "graceful"（优雅的）不能修饰 part；H "wrong"（错误的）语义相反；K "greatest"（最大的）虽然是形容词，但"a greatest part"语法错误（greatest前需加 the）。',
            '33': '【正确答案：A. error】空格所在句为"Life is filled with trial and ___"（生活充满尝试和错误）。"trial and ___"是固定搭配，需要填入一个名词。选项A "error"（错误）符合语境，"trial and error"（试错法）是极为常见的固定搭配，指通过不断尝试和犯错来学习。干扰项：J "success"（成功）不能构成"trial and success"；B "use"（使用）不能构成"trial and use"；F "situations"（情况）语义不符。',
            '34': '【正确答案：J. success】空格所在句为"In order to walk the path to ___"（为了走上通往成功的道路）。"the path to ___"需要填入一个名词。选项J "success"（成功）符合语境，"the path to success"（通往成功的道路）是极为常见的搭配。干扰项：A "error"（错误）语义相反；B "use"（使用）不能构成"the path to use"；F "situations"（情况）语义不通。',
            '35': '【正确答案：H. wrong】空格所在句为"you need to make some ___ turns along the way"（你需要沿途走一些弯路）。"___ turns"需要填入一个形容词。选项H "wrong"（错误的）符合语境，"wrong turns"（走错的路、弯路）是极为常见的搭配。干扰项：D "graceful"（优雅的）不能修饰 turns 表示"弯路"；E "necessary"（必要的）虽然可以修饰 turns，但"necessary turns"不是固定表达；K "greatest"（最大的）不能修饰 turns。',
            '36': '【正确答案：B. use】空格所在句为"to ___ each mistake to make myself better"（利用每个错误让自己变得更好）。"to + 动词原形"构成不定式，空格需要填入动词原形。选项B "use"（利用）符合语境，"use each mistake to make myself better"（利用每个错误让自己变得更好）是极为自然的表达。干扰项：A "error"（错误）是名词；L "look"（看）不能构成"look each mistake to"；H "wrong"是形容词。',
            '37': '【正确答案：K. greatest】空格所在句为"One of the ___ problems people have with failure"（人们对失败最大的问题之一）。"one of the ___ problems"需要填入一个形容词最高级。选项K "greatest"（最大的）符合语境，"one of the greatest problems"（最大的问题之一）是极为常见的搭配。干扰项：D "graceful"（优雅的）不能修饰 problems；E "necessary"（必要的）不能构成"one of the necessary problems"；H "wrong"（错误的）语义不符。',
            '38': '【正确答案：F. situations】空格所在句为"too quick to judge isolated ___ in their lives"（太急于评判生活中孤立的情况）。"judge isolated ___"需要填入一个名词复数，与"judge"（评判）搭配。选项F "situations"（情况）符合语境，"judge isolated situations"（评判孤立的情况）指人们容易把单个情况当作整体失败。干扰项：A "error"（错误）是单数，与"isolated"（孤立的，复数语境）不搭配；J "success"（成功）语义相反；B "use"（使用）语义不通。',
            '39': '【正确答案：I. Instead】空格位于句首，后接逗号，需要填入一个过渡词。选项I "Instead"（相反）符合语境，"Instead, they need to keep the bigger picture in mind"（相反，他们需要把整体情况放在心里）与前文"too quick to judge isolated situations"（太急于评判孤立情况）形成转折。干扰项：G "Firstly"（首先）表示顺序，不能表示转折；C "eventually"（最终）表示时间，不能表示转折；D "graceful"是形容词。',
            '40': '【正确答案：L. look】空格所在句为"A successful baseball player does not ___ at a mistake he makes"（成功的棒球运动员不会盯着他犯的错误）。"does not ___ at"需要填入一个动词原形。选项L "look"（看）符合语境，"look at a mistake"（盯着错误）是极为常见的搭配，与"think of failure"（认为是失败）呼应。干扰项：B "use"（使用）不能构成"use at"；A "error"（错误）是名词；H "wrong"是形容词。'
        }
    },
    // ========== 8. 2017年4月 ==========
    {
        id: '2017-04',
        session: '2017年4月',
        articleTitle: 'Meet Famous People in London',
        passage: [
            'Many people like to see famous people. But famous people do not [31] like to be looked at. At least, they do not like to be looked at all day every day! However, there is one [32] in England where you can look at lots of famous people every day. That is Madame Tussauds, the most popular [33] attraction in London.',
            'On most days of the year, [34] of visitors can be seen outside Madame Tussauds. They want to [35] in and see some of the most famous people in the world. If you like, you can [36] to those film stars, sports stars or politicians in Madame Tussauds, but they will not [37] anything to you, because they cannot! Madame Tussauds is a waxworks, and the "famous people" in the building are made out of wax. But, this does not [38] to be a problem. Ordinary people like looking at [39] people, even if they are only [40]. It is better than nothing!'
        ],
        wordBank: [
            { letter: 'A', word: 'rarely' }, { letter: 'B', word: 'say' },
            { letter: 'C', word: 'usually' }, { letter: 'D', word: 'seem' },
            { letter: 'E', word: 'give' }, { letter: 'F', word: 'place' },
            { letter: 'G', word: 'talk' }, { letter: 'H', word: 'statues' },
            { letter: 'I', word: 'tourist' }, { letter: 'J', word: 'extraordinary' },
            { letter: 'K', word: 'lines' }, { letter: 'L', word: 'get' }
        ],
        answers: { '31': 'C', '32': 'F', '33': 'I', '34': 'K', '35': 'L', '36': 'G', '37': 'B', '38': 'D', '39': 'J', '40': 'H' },
        explanations: {
            '31': '【正确答案：C. usually】空格所在句为"But famous people do not ___ like to be looked at"（但名人通常不喜欢被盯着看）。空格修饰"like"，需要填入一个副词。选项C "usually"（通常）符合语境，"do not usually like"（通常不喜欢）是部分否定。干扰项：A "rarely"（很少）虽然也是频率副词，但"do not rarely like"构成双重否定，语义混乱；D "seem"（似乎）是动词，语法不通；E "give"是动词。',
            '32': '【正确答案：F. place】空格所在句为"there is one ___ in England where you can look at lots of famous people"（在英格兰有一个地方，你可以在那里看到很多名人）。"one ___ in England"需要填入一个名词单数，且后文由"where"引导定语从句。选项F "place"（地方）符合语境。干扰项：I "tourist"（游客）是名词，但"one tourist in England"语义是"一个游客在英格兰"，与后文不符；J "extraordinary"（非凡的）是形容词；K "lines"（队伍）是复数，与"one"不搭配。',
            '33': '【正确答案：I. tourist】空格所在句为"the most popular ___ attraction in London"（伦敦最受欢迎的旅游景点）。"___ attraction"是一个固定的复合名词，需要填入一个名词作定语。选项I "tourist"（旅游的）符合语境，"tourist attraction"（旅游景点）是极为常见的固定搭配。干扰项：F "place"（地方）不能构成"place attraction"；J "extraordinary"（非凡的）是形容词；K "lines"（队伍）不能构成"lines attraction"。',
            '34': '【正确答案：K. lines】空格所在句为"___ of visitors can be seen outside Madame Tussauds"（在杜莎夫人蜡像馆外面可以看到排队的游客）。"___ of visitors"需要填入一个名词复数，与"of visitors"搭配。选项K "lines"（队列）符合语境，"lines of visitors"（游客的队列）是极为常见的搭配。干扰项：H "statues"（雕像）不能构成"statues of visitors"表示"游客"；J "extraordinary"（非凡的）是形容词；L "get"（得到）是动词。',
            '35': '【正确答案：L. get】空格所在句为"They want to ___ in and see some of the most famous people"（他们想进去看看一些最著名的人物）。"want to + 动词原形"构成不定式，空格需要填入动词原形，与"in"构成固定搭配。选项L "get"（进入）符合语境，"get in"（进入）是极为常见的固定搭配，指游客想进去参观。干扰项：B "say"（说）不能构成"say in"；E "give"（给）不能构成"give in"表示"进入"（give in 是"屈服"）；K "lines"是名词。',
            '36': '【正确答案：G. talk】空格所在句为"you can ___ to those film stars"（你可以和那些电影明星交谈）。"can ___ to"需要填入一个动词原形，与"to"构成固定搭配。选项G "talk"（交谈）符合语境，"talk to"（与……交谈）是极为常见的固定搭配。干扰项：B "say"（说）不能构成"say to sb."表示"和某人说话"；E "give"（给）不能构成"give to"表示"和……说话"；K "lines"是名词。',
            '37': '【正确答案：B. say】空格所在句为"they will not ___ anything to you"（它们不会对你说任何话）。"will not ___ anything to you"需要填入一个动词原形，与"anything to you"搭配。选项B "say"（说）符合语境，"say anything to you"（对你说任何话）是极为常见的搭配。干扰项：G "talk"（交谈）不能构成"talk anything to you"（talk是不及物动词）；E "give"（给）不能构成"give anything to you"表示"说话"；D "seem"（似乎）语义不符。',
            '38': '【正确答案：D. seem】空格所在句为"this does not ___ to be a problem"（这似乎不成为一个问题）。"does not ___ to be"需要填入一个动词原形，与"to be"搭配。选项D "seem"（似乎）符合语境，"does not seem to be a problem"（似乎不是问题）是极为常见的表达。干扰项：B "say"（说）不能构成"say to be"；L "get"（得到）不能构成"get to be a problem"；E "give"是动词，不能构成此结构。',
            '39': '【正确答案：J. extraordinary】空格所在句为"Ordinary people like looking at ___ people"（普通人喜欢看非凡的人）。空格修饰"people"，需要填入一个形容词，且与"Ordinary people"（普通人）形成对比。选项J "extraordinary"（非凡的）符合语境，"ordinary people like looking at extraordinary people"（普通人喜欢看非凡的人）形成对比。干扰项：C "usually"（通常）是副词，不能修饰 people；A "rarely"（很少）是副词；F "place"是名词。',
            '40': '【正确答案：H. statues】空格所在句为"even if they are only ___"（即使它们只是雕像）。"they are only ___"需要填入一个名词复数，指代前文的"famous people"（名人）。选项H "statues"（雕像）符合语境，"even if they are only statues"（即使它们只是雕像）与前文"made out of wax"（由蜡制成）呼应。干扰项：K "lines"（队伍）语义不符；J "extraordinary"（非凡的）是形容词；F "place"（地方）是单数。'
        }
    },

    // ========== 9. 2017年10月 ==========
    {
        id: '2017-10',
        session: '2017年10月',
        articleTitle: 'Choosing Friends',
        passage: [
            'In our daily life, it is nice to have friends. While family is [31] important, friends are a different support system of your choosing. As the [32] goes, "You cannot choose your family, but you can choose your friends." Choosing them wisely can [33] your life more exciting and inspiring.',
            'Deciding whom you choose as your friends says as much about you as it does them. You may choose your friends [34] on similar interests. You may choose them because you are opposites of each other and find this interesting. Often, friends become "friends" because they are naturally attracted towards each other due to [35] personalities. Sometimes it is just circumstances that bring two individuals together who then become friends.',
            'Whatever prompts a friendship, developing one is a very [36] experience. This is especially true when, before you know it, a certain [37] turns into a unique lifelong close friendship. Again, it has been said that a person [38] has only a couple of very close friends in their life. Think of whom you [39] as truly close friends. These are those few individuals you can [40] and share deep thoughts and concerns with.'
        ],
        wordBank: [
            { letter: 'A', word: 'saying' }, { letter: 'B', word: 'make' },
            { letter: 'C', word: 'normally' }, { letter: 'D', word: 'similar' },
            { letter: 'E', word: 'trust' }, { letter: 'F', word: 'relied' },
            { letter: 'G', word: 'consider' }, { letter: 'H', word: 'relationship' },
            { letter: 'I', word: 'speech' }, { letter: 'J', word: 'rewarding' },
            { letter: 'K', word: 'based' }, { letter: 'L', word: 'extremely' }
        ],
        answers: { '31': 'L', '32': 'A', '33': 'B', '34': 'K', '35': 'D', '36': 'J', '37': 'H', '38': 'C', '39': 'G', '40': 'E' },
        explanations: {
            '31': '【正确答案：L. extremely】空格所在句为"While family is ___ important"（虽然家庭极其重要）。空格修饰"important"，需要填入一个副词，表示程度。选项L "extremely"（极其）符合语境，"extremely important"（极其重要）是极为常见的搭配。干扰项：C "normally"（通常）不能修饰 important 表示程度；D "similar"（相似的）是形容词；J "rewarding"（有回报的）是形容词。',
            '32': '【正确答案：A. saying】空格所在句为"As the ___ goes"（正如谚语所说）。"As the ___ goes"是固定搭配，需要填入一个名词。选项A "saying"（谚语）符合语境，"As the saying goes"（正如谚语所说）是极为常见的固定搭配，后面接引用的谚语。干扰项：I "speech"（演讲）不能构成"As the speech goes"；H "relationship"（关系）语义不通；C "normally"是副词。',
            '33': '【正确答案：B. make】空格所在句为"Choosing them wisely can ___ your life more exciting"（明智地选择朋友可以让你的生活更精彩）。"can + 动词原形"构成情态动词结构，空格需要填入动词原形，且与"your life more exciting"构成"make + 宾语 + 宾补"结构。选项B "make"（使）符合语境，"make your life more exciting"（让你的生活更精彩）是极为常见的搭配。干扰项：K "based"（基于）是过去分词；G "consider"（考虑）不能构成"consider your life more exciting"；E "trust"（信任）语义不通。',
            '34': '【正确答案：K. based】空格所在句为"You may choose your friends ___ on similar interests"（你可能基于相似兴趣选择朋友）。"___ on"是固定搭配，需要填入一个过去分词。选项K "based"（基于）符合语境，"based on"（基于）是极为常见的固定搭配。干扰项：D "similar"（相似的）是形容词，不能构成"similar on"；J "rewarding"（有回报的）是形容词；L "extremely"是副词。',
            '35': '【正确答案：D. similar】空格所在句为"due to ___ personalities"（由于相似性格）。"due to + 名词"结构中，空格修饰"personalities"（性格），需要填入一个形容词。选项D "similar"（相似的）符合语境，"similar personalities"（相似的性格）与前文"based on similar interests"（基于相似兴趣）呼应。干扰项：J "rewarding"（有回报的）不能修饰 personalities；E "trust"（信任）是动词；L "extremely"是副词。',
            '36': '【正确答案：J. rewarding】空格所在句为"developing one is a very ___ experience"（发展友谊是非常有回报的经历）。空格修饰"experience"（经历），需要填入一个形容词。选项J "rewarding"（有回报的）符合语境，"a very rewarding experience"（一段非常有回报的经历）是极为常见的搭配。干扰项：D "similar"（相似的）不能修饰 experience 表示"有回报"；H "relationship"（关系）是名词；K "based"是过去分词。',
            '37': '【正确答案：H. relationship】空格所在句为"a certain ___ turns into a unique lifelong close friendship"（某种关系变成一种独特的终身亲密友谊）。"a certain ___"需要填入一个名词，与"turns into... friendship"（变成……友谊）呼应。选项H "relationship"（关系）符合语境。干扰项：A "saying"（谚语）不能构成"a saying turns into a friendship"；I "speech"（演讲）语义不通；E "trust"（信任）是动词。',
            '38': '【正确答案：C. normally】空格所在句为"a person ___ has only a couple of very close friends in their life"（一个人一生中通常只有几个非常亲密的朋友）。空格修饰"has"，需要填入一个副词。选项C "normally"（通常）符合语境，"normally has only a couple of very close friends"（通常只有几个非常亲密的朋友）是客观描述。干扰项：L "extremely"（极其）不能修饰 has 表示频率；E "trust"（信任）是动词；D "similar"（相似的）是形容词。',
            '39': '【正确答案：G. consider】空格所在句为"Think of whom you ___ as truly close friends"（想想你把谁视为真正的亲密朋友）。"whom you ___ as"需要填入一个动词原形，与"as"搭配。选项G "consider"（认为）符合语境，"consider...as"（认为是）是极为常见的固定搭配。干扰项：E "trust"（信任）不能构成"trust...as"表示"认为"；B "make"（使）不能构成"make...as"；H "relationship"是名词。',
            '40': '【正确答案：E. trust】空格所在句为"those few individuals you can ___ and share deep thoughts"（那些你能信任并分享深层想法的少数人）。"you can ___"需要填入一个动词原形，且与"share deep thoughts"（分享深层想法）并列。选项E "trust"（信任）符合语境，"you can trust and share deep thoughts with"（你可以信任并与之分享深层想法的）是描述亲密朋友的标准搭配。干扰项：G "consider"（认为）不能构成"consider and share"；B "make"（使）不能构成"make and share deep thoughts"；H "relationship"是名词。'
        }
    },

    // ========== 10. 2018年4月 ==========
    {
        id: '2018-04',
        session: '2018年4月',
        articleTitle: 'Planting Potatoes',
        passage: [
            'When I was a boy we had several gardens around our old house. The largest one of all was used just for growing potatoes.',
            'I can still remember those potato planting days. All the family [31] helped. After my Dad had [32] the soil, my Mom, brothers, and I went to work. It was my [33] to drop the little seed potatoes in the [34] while my Mom dropped handfuls of fertilizer beside them. My brothers then covered them all with the [35] turned earth.',
            'For months [36] I would glance over at the garden while I played outside and wonder what was going on underneath the [37]. When the harvest time came I was amazed at the huge size of the potatoes my Dad [38] out of the soil. Those little seed potatoes had grown into big potatoes. They would be turned into meal after meal of [39] food. They would keep the [40] family well fed throughout the whole year. It truly was a miracle.'
        ],
        wordBank: [
            { letter: 'A', word: 'true' }, { letter: 'B', word: 'ground' },
            { letter: 'C', word: 'members' }, { letter: 'D', word: 'job' },
            { letter: 'E', word: 'delicious' }, { letter: 'F', word: 'prepared' },
            { letter: 'G', word: 'rows' }, { letter: 'H', word: 'afterward' },
            { letter: 'I', word: 'freshly' }, { letter: 'J', word: 'entire' },
            { letter: 'K', word: 'tools' }, { letter: 'L', word: 'pulled' }
        ],
        answers: { '31': 'C', '32': 'F', '33': 'D', '34': 'G', '35': 'I', '36': 'H', '37': 'B', '38': 'L', '39': 'E', '40': 'J' },
        explanations: {
            '31': '【正确答案：C. members】空格所在句为"All the family ___ helped"，主语是"All the family"（全家人），谓语是"helped"（帮忙），空格处需要填入一个能与 family 搭配、且作主语的词。选项C "members"（成员）构成固定搭配"family members"（家庭成员），即"所有家庭成员都帮忙"。干扰项：A "true"（真实的）不能与 family 搭配作主语；K "tools"（工具）语义不通，家庭成员不是"工具"。',
            '32': '【正确答案：F. prepared】空格前是"After my Dad had ___ the soil"（在我爸爸准备好土壤之后），"had + 过去分词"构成过去完成时，空格处需要填入一个动词的过去分词。选项F "prepared"（准备）符合语境，指爸爸先把土壤准备好；且"prepare the soil"是农业场景中的固定搭配，意为"整地、备耕"。干扰项：A "true"是形容词不能作动词；L "pulled"（拉）虽然也是过去分词，但"pull the soil"不成立；I "freshly"（新近地）是副词，不能作动词。',
            '33': '【正确答案：D. job】空格所在句为"It was my ___ to drop the little seed potatoes"（我的任务是把小种子土豆放下），"It was my ___ to do sth."是英语中表达"做某事是我的职责/任务"的常见句型。选项D "job"（工作、任务）符合语境，构成"It was my job to do"结构。干扰项：C "members"（成员）不能构成此句型；H "afterward"（之后）是副词，语义不通；G "rows"（行）是名词，但"it was my rows to do"语法错误。',
            '34': '【正确答案：G. rows】空格所在句为"drop the little seed potatoes in the ___"（把小种子土豆放进行里）。结合前文可知，这是种土豆的场景，农业中常常把种子成行地放入土中。选项G "rows"（行）符合语境，构成"in the rows"（在行里），且"rows"的复数形式与种土豆的实际情况（多行）一致。干扰项：B "ground"（地面）虽然语义相关，但"in the ground"更倾向于"在地里"，与下文"covered them"（盖上它们）重复；F "prepared"是过去分词，不能作名词使用。',
            '35': '【正确答案：I. freshly】空格所在句为"covered them all with the ___ turned earth"（用新翻过的土把它们全部盖上），空格修饰过去分词"turned"（翻过的），需要填入一个副词。选项I "freshly"（新近地、刚刚）符合语境，构成"freshly turned earth"（新翻的泥土），这是英语中的常见搭配。干扰项：A "true"是形容词；E "delicious"（美味的）虽然也是形容词，但"delicious turned earth"搭配不当；J "entire"（整个的）是形容词，不能修饰"turned"。',
            '36': '【正确答案：H. afterward】空格所在句为"For months ___ I would glance over at the garden"（之后的几个月里，我会瞥一眼花园），空格作时间状语，表示"在……之后"。选项H "afterward"（之后）符合语境，与"For months"（数月）搭配，构成"For months afterward"（之后的数月里）。干扰项：C "members"是名词，不能作时间状语；I "freshly"（新近地）虽为副词，但"For months freshly"语义不通；D "job"是名词。',
            '37': '【正确答案：B. ground】空格所在句为"wonder what was going on underneath the ___"（想知道地面下面发生了什么）。前文提到种植土豆，土豆是种在土里的，因此空格处应填入与"土壤"相关的词。选项B "ground"（地面、土地）符合语境，构成"underneath the ground"（在地面下）。干扰项：A "true"（真实的）是形容词；D "job"（工作）语义不通；G "rows"（行）虽然与种植相关，但"underneath the rows"语义不够精确，且上文已用过"in the rows"。',
            '38': '【正确答案：L. pulled】空格所在句为"the huge size of the potatoes my Dad ___ out of the soil"（我爸爸从土里拔出来的巨大土豆）。"___ out of the soil"是一个完整的动词短语，指从土里拔出/挖出，需要填入一个动词的过去分词（因为作定语修饰 potatoes）。选项L "pulled"（拔出）符合语境，"pull sth. out of sth."（把某物从某处拔出）是固定搭配。干扰项：F "prepared"（准备）与"out of the soil"不搭配；I "freshly"是副词；J "entire"是形容词。',
            '39': '【正确答案：E. delicious】空格所在句为"meal after meal of ___ food"（一顿又一顿美味的食物），空格修饰 food（食物），需要填入一个形容词。选项E "delicious"（美味的）符合语境，指土豆做成一餐又一餐美味的食物。干扰项：A "true"（真实的）可以修饰食物但"true food"不常见；I "freshly"是副词，不能直接修饰名词；K "tools"是名词。',
            '40': '【正确答案：J. entire】空格所在句为"They would keep the ___ family well fed throughout the whole year"（它们能让整个家庭整年都吃饱）。空格修饰 family（家庭），需要填入一个形容词。选项J "entire"（整个的）符合语境，"the entire family"（整个家庭）是常见搭配。干扰项：A "true"（真实的）不能修饰 family；C "members"（成员）是名词，不能作定语；E "delicious"（美味的）修饰 family 语义不通。'
        }
    },

    // ========== 11. 2018年10月 ==========
    {
        id: '2018-10',
        session: '2018年10月',
        articleTitle: 'Warmth at Midnight',
        passage: [
            'Canberra winters are extremely cold, and 2014 brought some of our coldest days. One weekday night I walked to the [31] supermarket before it closed at midnight.',
            'As I approached, I noticed a group of six or seven people [32] by the supermarket entrance. Aware of the [33] of late-night walking, I made sure I paid attention. The scene ahead looked unusual.',
            'And unusual it was. Expecting to see a group of [34] troublemakers, I found a weak, well-dressed old man distributing items of food to a group of homeless people. Rather than just feeding them, he was also engaging them in a [35] of warm discussion.',
            'The homeless people were rough-looking and [36] dressed. But they listened to the man [37], not just with gratitude for the food they had been [38]. With no charity vehicle in sight, this old man was only representing himself.',
            'After I finished shopping, the group was still there, food [39], but all laughing. If a weak old man can give to others in the [40] cold at midnight, what excuse do we have?'
        ],
        wordBank: [
            { letter: 'A', word: 'dangers' }, { letter: 'B', word: 'local' },
            { letter: 'C', word: 'happy' }, { letter: 'D', word: 'reading' },
            { letter: 'E', word: 'freezing' }, { letter: 'F', word: 'attentively' },
            { letter: 'G', word: 'potential' }, { letter: 'H', word: 'sitting' },
            { letter: 'I', word: 'poorly' }, { letter: 'J', word: 'given' },
            { letter: 'K', word: 'consumed' }, { letter: 'L', word: 'circle' }
        ],
        answers: { '31': 'B', '32': 'H', '33': 'A', '34': 'G', '35': 'L', '36': 'I', '37': 'F', '38': 'J', '39': 'K', '40': 'E' },
        explanations: {
            '31': '【正确答案：B. local】空格所在句为"I walked to the ___ supermarket before it closed at midnight"（我在午夜超市关门前走到当地超市）。空格修饰 supermarket（超市），需要填入一个形容词。选项B "local"（当地的）符合语境，"the local supermarket"（当地超市）是极为常见的搭配。干扰项：A "dangers"（危险）是名词，不能修饰 supermarket；C "happy"（快乐的）不能修饰超市；E "freezing"（极冷的）指天气，与超市搭配不当。',
            '32': '【正确答案：H. sitting】空格所在句为"I noticed a group of six or seven people ___ by the supermarket entrance"（我注意到六七个坐在超市入口旁的人）。"notice sb. doing sth."是英语中表示"注意到某人正在做某事"的固定句型，空格处需要填入现在分词。选项H "sitting"（坐着）符合语境。干扰项：D "reading"（阅读）语义不符；J "given"是过去分词，不符合"notice sb. doing"结构；G "potential"是形容词。',
            '33': '【正确答案：A. dangers】空格所在句为"Aware of the ___ of late-night walking"（意识到深夜步行的危险）。"Aware of"（意识到）后接名词，"the ___ of late-night walking"是名词短语，需要填入一个名词。选项A "dangers"（危险）符合语境，"the dangers of late-night walking"（深夜步行的危险）是完整搭配。干扰项：F "attentively"（专注地）是副词；H "sitting"是现在分词；I "poorly"是副词。',
            '34': '【正确答案：G. potential】空格所在句为"Expecting to see a group of ___ troublemakers"（本以为会看到一群潜在的捣乱者）。空格修饰 troublemakers（捣乱者），需要填入一个形容词。选项G "potential"（潜在的）符合语境，"potential troublemakers"（潜在的捣乱者）是常见搭配。干扰项：B "local"（当地的）语义不通；C "happy"（快乐的）与捣乱者形象矛盾；E "freezing"（极冷的）不能修饰人。',
            '35': '【正确答案：L. circle】空格所在句为"he was also engaging them in a ___ of warm discussion"（他还让他们参与了一个温暖的讨论圈）。"engage sb. in sth."是固定搭配，意为"让某人参与某事"。选项L "circle"（圆圈）符合语境，"in a circle of warm discussion"（在温暖的讨论圈中）形象地描述了老人和流浪者围坐一圈讨论的场景。干扰项：D "reading"（阅读）与"discussion"语义不搭配；H "sitting"（坐着）作名词时语义不通；A "dangers"（危险）语义矛盾。',
            '36': '【正确答案：I. poorly】空格所在句为"The homeless people were rough-looking and ___ dressed"（这些无家可归的人外表粗糙，穿着破旧）。空格修饰过去分词 dressed（穿着），需要填入一个副词。选项I "poorly"（破旧地、差地）符合语境，"poorly dressed"（穿着破旧）是常见搭配，与前文"rough-looking"（外表粗糙）形成对应。干扰项：F "attentively"（专注地）不能修饰 dressed；C "happy"（快乐的）是形容词；E "freezing"（极冷的）是形容词，不能修饰 dressed。',
            '37': '【正确答案：F. attentively】空格所在句为"But they listened to the man ___"（但他们专注地听那个人说话）。空格修饰动词 listened，需要填入一个副词。选项F "attentively"（专注地）符合语境，"listen attentively"（专注地听）是固定搭配。干扰项：H "sitting"是现在分词；J "given"是过去分词；K "consumed"是过去分词，均不能修饰 listened。',
            '38': '【正确答案：J. given】空格所在句为"gratitude for the food they had been ___"（对他们被给予的食物的感激）。"had been ___"是过去完成时的被动语态，空格处需要填入过去分词。选项J "given"（给予）符合语境，构成"the food they had been given"（他们被给予的食物）。干扰项：H "sitting"是现在分词，不能被"had been"接续；D "reading"是现在分词；K "consumed"（消费）语义是"吃掉"，但此处指的是接收食物的感激。',
            '39': '【正确答案：K. consumed】空格所在句为"the group was still there, food ___, but all laughing"（那群人还在那里，食物已经吃完，但都在笑）。这是一个独立主格结构："food + 过去分词"表示食物被消耗的状态，空格需要填入过去分词。选项K "consumed"（被消耗、被吃完）符合语境，说明食物已经被吃完了。干扰项：J "given"（被给予）虽然也是过去分词，但"food given"需要接完整结构；H "sitting"是现在分词，不能用于独立主格表被动。',
            '40': '【正确答案：E. freezing】空格所在句为"If a weak old man can give to others in the ___ cold at midnight"（如果一位虚弱的老人能在午夜刺骨的寒冷中给予他人）。空格修饰 cold（寒冷），需要填入一个形容词。选项E "freezing"（极冷的、冰冻的）符合语境，"freezing cold"（刺骨的寒冷）是英语中的固定搭配。干扰项：C "happy"（快乐的）不能修饰 cold；B "local"（当地的）语义不通；G "potential"（潜在的）与 cold 搭配不当。'
        }
    },
    // ========== 12. 2019年4月 ==========
    {
        id: '2019-04',
        session: '2019年4月',
        articleTitle: "Young Readers, Tomorrow's Leaders?",
        passage: [
            'A new study has good news for kids with strong reading skills. Such kids will have high intelligence as they get [31]. They will have a bright future.',
            'The study included 1,890 twins who did reading tests at [32] 7 and 12, and an intelligence test at 16. The twins had the same genes and home environment. Therefore, the [33] between them had to be due to factors that they did not [34]. For example, one had a better teacher than the other. Some kids did better on the reading [35] than their twin brother or sister. They [36] did better on the intelligence test. The reading skills [37] to enhanced intelligence were evident by age 7. This shows that reading skills can [38] a child\'s intellectual development.',
            'The study also helps to [39] the differences among kids in the same family. They share genes, [40] conditions and parents. But they can be different in intelligence.'
        ],
        wordBank: [
            { letter: 'A', word: 'also' }, { letter: 'B', word: 'differences' },
            { letter: 'C', word: 'only' }, { letter: 'D', word: 'explain' },
            { letter: 'E', word: 'tests' }, { letter: 'F', word: 'affect' },
            { letter: 'G', word: 'ages' }, { letter: 'H', word: 'living' },
            { letter: 'I', word: 'share' }, { letter: 'J', word: 'older' },
            { letter: 'K', word: 'related' }, { letter: 'L', word: 'interested' }
        ],
        answers: { '31': 'J', '32': 'G', '33': 'B', '34': 'I', '35': 'E', '36': 'A', '37': 'K', '38': 'F', '39': 'D', '40': 'H' },
        explanations: {
            '31': '【正确答案：J. older】空格所在句为"Such kids will have high intelligence as they get ___"（这样的孩子会随着长大而拥有高智商）。"as they get ___"表示"当他们变得……时"，"get + 形容词"表示"变得……"。选项J "older"（更大、更年长）符合语境，"as they get older"（随着他们长大）是英语中的固定表达。干扰项：C "only"（仅仅）是副词，不能作"get"的表语；A "also"（也）是副词；B "differences"（差异）是名词，语法上不成立。',
            '32': '【正确答案：G. ages】空格所在句为"who did reading tests at ___ 7 and 12"（在7岁和12岁时做阅读测试）。"at ___ 7 and 12"表示在某个特定年龄段，需要填入一个名词。选项G "ages"（年龄）符合语境，"at ages 7 and 12"（在7岁和12岁时）是极为标准的英语表达。干扰项：E "tests"（测试）与"at"搭配成"at tests"错误；H "living"（生活）不能与数字搭配；J "older"（更年长）不能作名词用。',
            '33': '【正确答案：B. differences】空格所在句为"Therefore, the ___ between them had to be due to factors"（因此，他们之间的差异一定是由某些因素造成的）。"the ___ between them"需要填入一个名词，且与"between"搭配。选项B "differences"（差异）符合语境，"the differences between them"（他们之间的差异）是极为常见的搭配。干扰项：A "also"是副词；C "only"是副词；D "explain"（解释）是动词。',
            '34': '【正确答案：I. share】空格所在句为"factors that they did not ___"（他们没有共享的因素）。"did not + 动词原形"构成否定句，空格处需要填入动词原形。选项I "share"（分享、共有）符合语境，"factors that they did not share"（他们不共有的因素）指双胞胎之间不同的外部因素，例如老师不同。干扰项：D "explain"（解释）语义不通；F "affect"（影响）与"factors"搭配不当；K "related"（相关）是过去分词，不能与"did not"直接连用。',
            '35': '【正确答案：E. tests】空格所在句为"Some kids did better on the reading ___ than their twin brother or sister"（一些孩子在阅读测试上比他们的双胞胎兄弟姐妹表现更好）。"on the reading ___"需要填入一个名词，与"reading"构成固定搭配。选项E "tests"（测试）符合语境，"reading tests"（阅读测试）与前文"did reading tests at ages 7 and 12"直接呼应。干扰项：B "differences"（差异）语义不通；G "ages"（年龄）与"on"搭配不当；J "older"（更年长）不能作名词。',
            '36': '【正确答案：A. also】空格所在句为"They ___ did better on the intelligence test"（他们在智力测试中也表现更好）。空格修饰动词"did"，需要填入一个副词。选项A "also"（也）符合语境，表示这些孩子在阅读测试中表现更好，"也"在智力测试中表现更好，强调了阅读能力与智力的关联。干扰项：C "only"（仅仅）语义不同；E "tests"是名词；J "older"是形容词比较级。',
            '37': '【正确答案：K. related】空格所在句为"The reading skills ___ to enhanced intelligence"（与提高的智力相关的阅读技能）。"___ to"是常见搭配，选项K "related"（相关的）符合语境，"related to"（与……相关）是固定搭配，构成"reading skills related to enhanced intelligence"（与智力提升相关的阅读技能）。干扰项：D "explain"（解释）与"to"搭配为"explain to sb."（向某人解释），但这里的主语是"reading skills"，语义不通；F "affect"（影响）不与"to"搭配；I "share"（分享）与"to"搭配语义不通。',
            '38': '【正确答案：F. affect】空格所在句为"This shows that reading skills can ___ a child\'s intellectual development"（这表明阅读技能可以影响孩子的智力发展）。"can + 动词原形"构成情态动词结构，空格处需要填入动词原形。选项F "affect"（影响）符合语境，"affect a child\'s intellectual development"（影响孩子的智力发展）是完整的动宾搭配。干扰项：D "explain"（解释）语义是"解释发展"，搭配不通；I "share"（分享）与"development"搭配不当；K "related"是过去分词，不能直接跟在"can"后面。',
            '39': '【正确答案：D. explain】空格所在句为"The study also helps to ___ the differences among kids"（这项研究还有助于解释孩子之间的差异）。"helps to + 动词原形"构成不定式，空格处需要填入动词原形。选项D "explain"（解释）符合语境，"explain the differences"（解释差异）是完整的动宾搭配。干扰项：F "affect"（影响）语义是"影响差异"，但此处研究的目的是"解释"而非"影响"；I "share"（分享）与"differences"搭配语义错误；K "related"是过去分词。',
            '40': '【正确答案：H. living】空格所在句为"They share genes, ___ conditions and parents"（他们共享基因、生活条件和父母）。空格修饰 conditions（条件），需要填入一个形容词或名词作定语。选项H "living"（生活的）符合语境，"living conditions"（生活条件）是英语中的固定搭配。干扰项：A "also"（也）是副词；C "only"（仅仅）是副词；E "tests"（测试）语义不通；J "older"（更年长）与 conditions 搭配不当。'
        }
    },

    // ========== 13. 2019年10月 ==========
    {
        id: '2019-10',
        session: '2019年10月',
        articleTitle: 'Success for 99 Cents',
        passage: [
            'How do you sell things in a time when the economy is down and people just do not want to [31]? Try the 99 cent approach.',
            'Steve Jobs, former [32] of Apple Computers, tried it and [33] saved the music industry. He [34] a standard price of 99 cents for each song that he wanted to sell on iTunes and built a successful music download company.',
            'In the 1960s, Dave Gold [35] a store that sold alcoholic drinks in southern California. He sold wine in three [36] categories: $0.79, $0.99 and $1.49. When he saw that the 99 cent wine did best, he started selling the other two at the same price and sales went up. In 1982, he started [37] 99 cent stores across the US. Today the company is [38] almost 500 million dollars and has 280 shops.',
            'Why does a 99 cent price tag make so much success? Researchers have found out that the price ending with .99 shows a [39] price for consumers. It looks less and consumers [40] feel that they can get something back.'
        ],
        wordBank: [
            { letter: 'A', word: 'owned' }, { letter: 'B', word: 'market' },
            { letter: 'C', word: 'set' }, { letter: 'D', word: 'worth' },
            { letter: 'E', word: 'finally' }, { letter: 'F', word: 'several' },
            { letter: 'G', word: 'buy' }, { letter: 'H', word: 'usually' },
            { letter: 'I', word: 'boss' }, { letter: 'J', word: 'sell' },
            { letter: 'K', word: 'lower' }, { letter: 'L', word: 'price' }
        ],
        answers: { '31': 'G', '32': 'I', '33': 'E', '34': 'C', '35': 'A', '36': 'L', '37': 'F', '38': 'D', '39': 'K', '40': 'H' },
        explanations: {
            '31': '【正确答案：G. buy】空格所在句为"people just do not want to ___"（人们就是不想购买）。"want to + 动词原形"构成不定式，空格处需要填入动词原形。结合前半句"the economy is down"（经济不景气），可推断此处指人们不想购买。选项G "buy"（购买）符合语境，"want to buy"（想买）是完整搭配。干扰项：J "sell"（卖）方向相反，语义不通；C "set"（设定）、D "worth"（值得）、H "usually"（通常）语义均不符合语境。',
            '32': '【正确答案：I. boss】空格所在句为"Steve Jobs, former ___ of Apple Computers"（史蒂夫·乔布斯，苹果公司的前老板）。空格作 Steve Jobs 的同位语，需要填入一个名词，表示他在公司的身份。选项I "boss"（老板）符合语境，"former boss of Apple Computers"（苹果公司前老板）是常见表述。干扰项：A "owned"（拥有）是动词过去式；B "market"（市场）语义是"市场"，不能指人；E "finally"（最终）是副词。',
            '33': '【正确答案：E. finally】空格所在句为"tried it and ___ saved the music industry"（尝试了它，最终挽救了音乐产业）。空格修饰动词"saved"，需要填入一个副词。选项E "finally"（最终）符合语境，"finally saved the music industry"（最终挽救了音乐产业）符合乔布斯通过iTunes改变音乐产业的历史事实。干扰项：H "usually"（通常）与"最终"语义不同；A "owned"是动词；F "several"（几个）不能修饰动词。',
            '34': '【正确答案：C. set】空格所在句为"He ___ a standard price of 99 cents for each song"（他为每首歌设定了一个99美分的标准价格）。空格需要一个动词过去式（描述过去发生的事）。选项C "set"（设定）符合语境，"set a price"（设定价格）是固定搭配。干扰项：A "owned"（拥有）与"price"搭配语义不通；D "worth"（值得）不与"price"搭配；E "finally"是副词。',
            '35': '【正确答案：A. owned】空格所在句为"In the 1960s, Dave Gold ___ a store that sold alcoholic drinks"（20世纪60年代，戴夫·戈尔德拥有一家卖酒精饮料的店）。空格需要一个动词过去式。选项A "owned"（拥有）符合语境，"owned a store"（拥有一家店）与后文"He sold wine"（他卖酒）形成连贯的语义。干扰项：C "set"（设定）不与"store"搭配；E "finally"是副词；J "sell"（卖）与"store"搭配为"sell a store"（卖店），但下文明确说他在店里卖酒。',
            '36': '【正确答案：L. price】空格所在句为"He sold wine in three ___ categories: $0.79, $0.99 and $1.49"（他按三个价格类别卖酒：0.79美元、0.99美元和1.49美元）。从冒号后的"$0.79, $0.99 and $1.49"可以判断，这三个类别是按价格划分的。选项L "price"（价格）符合语境，"price categories"（价格类别）是常见搭配。干扰项：B "market"（市场）不能与数字价格构成类别；E "finally"是副词；I "boss"是名词，语义不通。',
            '37': '【正确答案：F. several】空格所在句为"In 1982, he started ___ 99 cent stores across the US"（1982年，他在全美开了几家99美分商店）。"started ___ 99 cent stores"需要填入一个限定词或数词来修饰复数名词"stores"。选项F "several"（几家的）符合语境，"several stores"（几家店）是语法正确的搭配。干扰项：A "owned"是动词；C "set"是动词；L "price"是名词，均不能作数量修饰词。',
            '38': '【正确答案：D. worth】空格所在句为"Today the company is ___ almost 500 million dollars"（如今该公司价值近5亿美元）。"be worth + 金额"是英语中表示"值多少钱、价值多少"的固定用法，需要填入形容词 worth。选项D "worth"（值）符合语境。干扰项：A "owned"（被拥有）语法不通；E "finally"是副词；H "usually"是副词。',
            '39': '【正确答案：K. lower】空格所在句为"the price ending with .99 shows a ___ price for consumers"（以.99结尾的价格给消费者显示一个更低的价格）。空格修饰"price"（价格），需要填入一个形容词。选项K "lower"（更低的）符合语境，"a lower price"（更低的价格）与后文"It looks less"（看起来更少）直接呼应。干扰项：B "market"（市场）是名词；D "worth"（值得）不能修饰 price；F "several"（几个）是数词。',
            '40': '【正确答案：H. usually】空格所在句为"consumers ___ feel that they can get something back"（消费者通常觉得他们能得到一些回报）。空格修饰动词"feel"，需要填入一个副词。选项H "usually"（通常）符合语境，"consumers usually feel"（消费者通常感觉）表明这是一种普遍的消费心理现象。干扰项：E "finally"（最终）与"通常"语义不同；F "several"（几个）是数词；K "lower"是形容词比较级，不能修饰动词。'
        }
    },

    // ========== 14. 2020年8月 ==========
    {
        id: '2020-08',
        session: '2020年8月',
        articleTitle: 'Planting a Garden',
        passage: [
            'Planting a garden is a lot like having a family. Both require a great deal of work. [31] as they grow and as the seasons [32]. As summer days lengthen, your plants become [33] on you, much like your children depend on you for food and drink. Like a [34] child asking for drink of water, your plants do the same. Their bent body issues a demand much the way your child requests milk or juice. Getting enough water, they would thrive soon.',
            'You might also find you have to [35] the space around your plants, much like you pick up toys and clothes that have been thrown in your kid\'s room. Similarly, roses need to be pruned, and weeds need to be pulled. To keep children healthy, parents protect their children against disease with [36], and gardeners do the same with insect repellent. To nourish them, parents [37] children vitamins, and gardeners use fertilizer, as both promote healthy growth.',
            'As children grow up, they need less care. However, here is where the similarity ends. While plants die or become [38] during winter, children [39] maintain an important role in the family, and parents will find their [40] does not come to an end.'
        ],
        wordBank: [
            { letter: 'A', word: 'help' }, { letter: 'B', word: 'clean' },
            { letter: 'C', word: 'change' }, { letter: 'D', word: 'inactive' },
            { letter: 'E', word: 'dependent' }, { letter: 'F', word: 'still' },
            { letter: 'G', word: 'strong' }, { letter: 'H', word: 'give' },
            { letter: 'I', word: 'responsibility' }, { letter: 'J', word: 'thirsty' },
            { letter: 'K', word: 'medicine' }, { letter: 'L', word: 'especially' }
        ],
        answers: { '31': 'L', '32': 'C', '33': 'E', '34': 'J', '35': 'B', '36': 'K', '37': 'H', '38': 'D', '39': 'F', '40': 'I' },
        explanations: {
            '31': '【正确答案：L. especially】空格所在句为"___ as they grow and as the seasons change"（尤其是当它们成长、当季节变化时）。空格位于句首，修饰整个"as they grow"从句，需要一个副词。选项L "especially"（尤其）符合语境，"especially as they grow"（尤其是当它们成长时）强调植物成长过程中需要的照料越来越多。干扰项：C "change"（变化）是动词；F "still"（仍然）是副词，但"still as they grow"语义不通；K "medicine"是名词。',
            '32': '【正确答案：C. change】空格所在句为"as the seasons ___"（当季节变化时）。"as + 从句"结构中，从句需要一个动词，"the seasons"是主语。选项C "change"（变化）符合语境，"as the seasons change"（随着季节变化）是极为常见的英语表达。干扰项：A "help"（帮助）与"seasons"搭配语义不通；B "clean"（清洁）不能与"seasons"搭配；L "especially"是副词。',
            '33': '【正确答案：E. dependent】空格所在句为"your plants become ___ on you"（你的植物变得依赖你）。"become + 形容词"表示"变得……"，"become ___ on"是固定搭配，构成"be/become dependent on"（依赖）。选项E "dependent"（依赖的）符合语境，与后文"much like your children depend on you"（就像你的孩子依赖你）形成直接呼应。干扰项：D "inactive"（不活跃的）与"on"搭配不通；G "strong"（强壮的）语义相反；J "thirsty"（口渴的）是形容词，但不与"on"搭配。',
            '34': '【正确答案：J. thirsty】空格所在句为"Like a ___ child asking for drink of water"（像一个口渴的孩子要水喝）。空格修饰 child，需要填入一个形容词。选项J "thirsty"（口渴的）符合语境，"a thirsty child asking for water"（一个口渴的孩子要水喝）与后文"your plants do the same"（你的植物也一样）形成类比。干扰项：D "inactive"（不活跃的）与要水喝的孩子形象不符；G "strong"（强壮的）语义不通；E "dependent"（依赖的）虽然语义相关，但不如"thirsty"直接对应"asking for water"。',
            '35': '【正确答案：B. clean】空格所在句为"You might also find you have to ___ the space around your plants"（你可能还会发现你必须清理植物周围的空间）。空格需要一个动词原形。选项B "clean"（清理）符合语境，"clean the space around your plants"（清理植物周围的空间）与后文"much like you pick up toys and clothes"（就像你捡起玩具和衣服）形成类比，都指"整理、清理"。干扰项：A "help"（帮助）与"space"搭配语义不通；C "change"（改变）语义是"改变空间"，但下文强调的是"清理"；H "give"（给）不能与"space"搭配。',
            '36': '【正确答案：K. medicine】空格所在句为"parents protect their children against disease with ___"（父母用药物保护孩子抵御疾病）。空格需要一个名词。选项K "medicine"（药物）符合语境，"protect against disease with medicine"（用药物抵御疾病）是常见表述，与后文"gardeners do the same with insect repellent"（园丁用驱虫剂做同样的事）形成类比。干扰项：A "help"（帮助）不能与"with"搭配成"with help"表示"用帮助"；B "clean"是动词；I "responsibility"（责任）与"with"搭配成"with responsibility"（负责任地），但语义不通。',
            '37': '【正确答案：H. give】空格所在句为"parents ___ children vitamins"（父母给孩子维生素）。空格需要一个动词原形，构成双宾语结构"give sb. sth."（给某人某物）。选项H "give"（给）符合语境，"give children vitamins"（给孩子维生素）是完整的双宾语结构，与后文"gardeners use fertilizer"（园丁使用肥料）形成对照。干扰项：A "help"（帮助）不能构成"help children vitamins"；B "clean"（清洁）与"vitamins"搭配不当；K "medicine"是名词。',
            '38': '【正确答案：D. inactive】空格所在句为"plants die or become ___ during winter"（植物在冬天死亡或变得不活跃）。"become + 形容词"表示"变得……"，空格需要一个形容词，且与"die"（死亡）形成并列或递进关系。选项D "inactive"（不活跃的、休眠的）符合语境，"become inactive"（变得不活跃）与"die"形成程度递进。干扰项：E "dependent"（依赖的）语义不通；G "strong"（强壮的）语义相反；J "thirsty"（口渴的）语境不符。',
            '39': '【正确答案：F. still】空格所在句为"children ___ maintain an important role in the family"（孩子们仍然在家庭中保持重要角色）。空格修饰动词"maintain"，需要一个副词。选项F "still"（仍然）符合语境，"children still maintain an important role"（孩子仍然保持重要角色）与前半句"plants die or become inactive"（植物死亡或变得不活跃）形成对比，突出文章主旨。干扰项：L "especially"（尤其）不能修饰 maintain；C "change"是动词；D "inactive"是形容词。',
            '40': '【正确答案：I. responsibility】空格所在句为"parents will find their ___ does not come to an end"（父母会发现他们的责任并没有结束）。"their ___"需要填入一个名词。选项I "responsibility"（责任）符合语境，"their responsibility does not come to an end"（他们的责任没有结束）是文章结论：养育孩子的责任是终身的，而种植植物的照料是季节性的。干扰项：A "help"（帮助）是名词，但"their help does not come to an end"语义不如"responsibility"贴切；K "medicine"（药物）语义不通；E "dependent"是形容词。'
        }
    },

    // ========== 15. 2020年10月 ==========
    {
        id: '2020-10',
        session: '2020年10月',
        articleTitle: 'Talking Counts!',
        passage: [
            'Most words in a child\'s vocabulary come from everyday encounters with language. Children [31] up language from books, media, and conversations.',
            'You can increase your child\'s vocabulary and [32] knowledge by having conversations with them. With babies, you can talk to them about what you are doing so they can begin to [33] words with concepts. As your baby begins to speak, start asking,\'What is that?\'when [34] to objects or pictures. Elaborate on their [35] answers as a way to have them listening to more words. "Yes, that is a banana! It is [36] and smooth."',
            'With young children, you can talk about the things you see in your [37] on trips around town, or on television. These conversations help build a child\'s [38] of his world. When reading, pause to ask questions on the story. Ask, "Why do you think he did that?" or "What do you think is going to happen [39]?" Tell your children stories from your own life, or about the day they were [40]. This helps develop their personal and cultural identity.'
        ],
        wordBank: [
            { letter: 'A', word: 'link' }, { letter: 'B', word: 'simple' },
            { letter: 'C', word: 'secondly' }, { letter: 'D', word: 'neighborhood' },
            { letter: 'E', word: 'yellow' }, { letter: 'F', word: 'build' },
            { letter: 'G', word: 'understanding' }, { letter: 'H', word: 'pointing' },
            { letter: 'I', word: 'pick' }, { letter: 'J', word: 'born' },
            { letter: 'K', word: 'background' }, { letter: 'L', word: 'next' }
        ],
        answers: { '31': 'I', '32': 'K', '33': 'A', '34': 'H', '35': 'B', '36': 'E', '37': 'D', '38': 'G', '39': 'L', '40': 'J' },
        explanations: {
            '31': '【正确答案：I. pick】空格所在句为"Children ___ up language from books, media, and conversations"（孩子们从书籍、媒体和对话中习得语言）。"___ up"是一个固定短语，需要填入一个动词原形。选项I "pick"（捡起）符合语境，"pick up"（学会、习得）是固定搭配，指孩子在日常接触中自然习得语言。干扰项：A "link"（连接）不能构成"link up"表示"学习语言"；F "build"（建造）不能构成"build up language"表示"习得语言"。',
            '32': '【正确答案：K. background】空格所在句为"increase your child\'s vocabulary and ___ knowledge"（增加孩子的词汇量和背景知识）。空格修饰 knowledge（知识），需要填入一个名词作定语。选项K "background"（背景）符合语境，"background knowledge"（背景知识）是英语中的固定搭配，指对世界的广泛了解。干扰项：B "simple"（简单的）是形容词；D "neighborhood"（社区）与 knowledge 搭配不自然；G "understanding"（理解）是名词，但与"knowledge"形成同义反复。',
            '33': '【正确答案：A. link】空格所在句为"they can begin to ___ words with concepts"（他们可以开始把词语和概念联系起来）。空格需要一个动词原形。选项A "link"（连接）符合语境，"link A with B"（把A和B联系起来）是固定搭配，指婴儿逐渐学会把听到的词和实际概念联系起来。干扰项：I "pick"（捡起）不能构成"pick words with concepts"；F "build"（建造）与"words with concepts"搭配不当；H "pointing"（指）是现在分词。',
          '34': '【正确答案：H. pointing】空格所在句为"start asking, \'What is that?\' when pointing to objects or pictures"（当指着物体或图片时，开始问"那是什么？"）。"when + 现在分词"是英语中表示"当……时"的常见结构，空格需要一个现在分词。选项H "pointing"（指着）符合语境，"when pointing to objects"（当指着物体时）说明家长应该指着物体问孩子。干扰项：I "pick"（捡起）是动词原形，不能与"when"直接连用；F "build"也是原形；A "link"也是原形。',
            '35': '【正确答案：B. simple】空格所在句为"Elaborate on their ___ answers"（详细阐述他们简单的回答）。空格修饰 answers（回答），需要填入一个形容词。选项B "simple"（简单的）符合语境，"simple answers"（简单的回答）符合婴儿刚开始说话时的特征，与"Elaborate on"（详细阐述）形成对比，说明家长应该把孩子简单的话扩展成更完整的句子。干扰项：E "yellow"（黄色的）语义不通；J "born"（出生的）不能修饰 answers；K "background"（背景）是名词。',
            '36': '【正确答案：E. yellow】空格所在句为"It is ___ and smooth"（它（香蕉）是黄色的、光滑的）。空格与"smooth"（光滑的）并列，需要填入一个形容词，描述香蕉的特征。选项E "yellow"（黄色的）符合语境，香蕉是黄色的、光滑的，这是一个很自然的描述。干扰项：B "simple"（简单的）不能描述香蕉的外观；J "born"（出生的）语义不通；D "neighborhood"是名词。',
            '37': '【正确答案：D. neighborhood】空格所在句为"you can talk about the things you see in your ___ on trips around town"（你可以在城里游玩时谈论在你附近看到的东西）。"in your ___"需要填入一个名词，与"trips around town"（在城里游玩）呼应。选项D "neighborhood"（社区、附近）符合语境，"in your neighborhood"（在你附近）是常见表达，指孩子在社区里看到的东西。干扰项：K "background"（背景）不能与"in"搭配成"in your background"表示"在附近"；G "understanding"（理解）语义不通；B "simple"是形容词。',
            '38': '【正确答案：G. understanding】空格所在句为"These conversations help build a child\'s ___ of his world"（这些对话有助于建立孩子对他世界的理解）。"a child\'s ___ of his world"需要填入一个名词。选项G "understanding"（理解）符合语境，"understanding of the world"（对世界的理解）是极为常见的搭配。干扰项：K "background"（背景）不与"of his world"搭配；D "neighborhood"（社区）语义不符；F "build"（建造）是动词。',
            '39': '【正确答案：L. next】空格所在句为"What do you think is going to happen ___?"（你认为接下来会发生什么？）。空格作时间状语，需要填入一个副词或形容词。选项L "next"（接下来）符合语境，"happen next"（接下来发生什么）是英语中极为常见的表达，用于预测故事情节。干扰项：C "secondly"（其次）是列举词，不用于问句；E "yellow"（黄色的）是形容词，语义不通；J "born"（出生的）是过去分词。',
            '40': '【正确答案：J. born】空格所在句为"about the day they were ___"（关于他们出生的那一天）。"the day they were ___"需要填入一个过去分词，与"were"构成被动语态。选项J "born"（出生）符合语境，"the day they were born"（他们出生的那天）是常见的家庭故事主题，与后文"This helps develop their personal and cultural identity"（这有助于发展他们的个人和文化认同）呼应。干扰项：E "yellow"是形容词；K "background"是名词；L "next"不能作过去分词。'
        }
    },
    // ========== 16. 2021年4月 ==========
    {
        id: '2021-04',
        session: '2021年4月',
        articleTitle: 'Education in New Zealand',
        passage: [
            'Education in New Zealand is compulsory between the ages of 6 and 16. All children between these ages must [31] school. Most children begin their schooling at 5. This period includes primary and secondary education, and it is [32].',
            'Early childhood covers the period from birth to 6 years old. This period may include both care and education. There are many [33] such as play centers and kindergartens. More and more people are realizing the [34] of early childhood education. Now 60 percent of children under 5 join in some form of pre-school education.',
            'Children go to primary school for 8 years or up to the age of about 13. They [35] go to secondary schools for a further 5 years. Some students may decide to leave school at 16.',
            '[36] any education or training that takes place after secondary school. In New Zealand, this includes universities, [37], and training schools. New Zealand is [38] becoming multi-cultural. More and more international [39] are studying there. The education system is adapting to [40] the needs of different cultural groups.'
        ],
        wordBank: [
            { letter: 'A', word: 'meet' }, { letter: 'B', word: 'students' },
            { letter: 'C', word: 'quickly' }, { letter: 'D', word: 'means' },
            { letter: 'E', word: 'free' }, { letter: 'F', word: 'wisely' },
            { letter: 'G', word: 'then' }, { letter: 'H', word: 'value' },
            { letter: 'I', word: 'choices' }, { letter: 'J', word: 'quit' },
            { letter: 'K', word: 'attend' }, { letter: 'L', word: 'colleges' }
        ],
        answers: { '31': 'K', '32': 'E', '33': 'I', '34': 'H', '35': 'G', '36': 'D', '37': 'L', '38': 'C', '39': 'B', '40': 'A' },
        explanations: {
            '31': '【正确答案：K. attend】空格所在句为"All children between these ages must ___ school"（所有这个年龄段的孩子必须上学）。"must + 动词原形"构成情态动词结构，空格需要填入动词原形。选项K "attend"（上、参加）符合语境，"attend school"（上学）是英语中的固定搭配。干扰项：J "quit"（放弃）语义相反，文章说"义务教育"即必须上学；A "meet"（遇见）与"school"搭配不当；D "means"（意味着）是第三人称单数。',
            '32': '【正确答案：E. free】空格所在句为"This period includes primary and secondary education, and it is ___"（这个阶段包括小学和中学教育，而且是免费的）。"it is ___"需要一个形容词作表语，描述新西兰教育的特点。选项E "free"（免费的）符合语境，新西兰的公立中小学教育对本国公民是免费的，这是其教育制度的特色。干扰项：C "quickly"（迅速地）是副词，不能作表语；H "value"（价值）是名词；F "wisely"（明智地）是副词。',
            '33': '【正确答案：I. choices】空格所在句为"There are many ___ such as play centers and kindergartens"（有许多选择，比如游乐中心和幼儿园）。"There are many ___"需要填入一个复数名词，且后文"such as play centers and kindergartens"（如游乐中心和幼儿园）是举例。选项I "choices"（选择）符合语境，"many choices"（许多选择）与"such as"的举例形成呼应。干扰项：B "students"（学生）是复数名词，但游乐中心和幼儿园不是"学生"；L "colleges"（大学）与举例不符；H "value"是单数名词。',
            '34': '【正确答案：H. value】空格所在句为"More and more people are realizing the ___ of early childhood education"（越来越多的人意识到早期儿童教育的价值）。"the ___ of"需要填入一个名词。选项H "value"（价值）符合语境，"the value of early childhood education"（早期儿童教育的价值）是极为常见的表达，与"realizing"（意识到）构成完整语义。干扰项：I "choices"（选择）与"of early childhood education"搭配不通；B "students"（学生）语义不通；D "means"（方式）语义不同。',
            '35': '【正确答案：G. then】空格所在句为"They ___ go to secondary schools for a further 5 years"（然后他们再上中学5年）。空格修饰动词"go"，需要一个副词，表示时间顺序。选项G "then"（然后）符合语境，"then go to secondary schools"（然后上中学）与前半句"go to primary school for 8 years"（上小学8年）形成时间上的先后关系。干扰项：C "quickly"（迅速地）语义不同；F "wisely"（明智地）语义不通；E "free"（免费）是形容词。',
            '36': '【正确答案：D. means】空格所在句为"___ any education or training that takes place after secondary school"（指的是中学之后发生的任何教育或培训）。空格需要填入一个动词，与"any education or training"构成主谓关系。选项D "means"（意味着）符合语境，"means any education or training"（指的是任何教育或培训）是定义性表述，符合文章介绍教育体系的语境。干扰项：A "meet"（遇见）是动词原形，但"meet any education"搭配不当；K "attend"（参加）也是动词原形，但"attend any education"语义不如"means"贴切。',
            '37': '【正确答案：L. colleges】空格所在句为"This includes universities, ___, and training schools"（这包括大学、学院和培训学校）。空格与"universities"（大学）和"training schools"（培训学校）并列，需要填入一个复数名词，指教育机构。选项L "colleges"（学院）符合语境，"universities, colleges, and training schools"（大学、学院和培训学校）是新西兰高等教育的常见分类。干扰项：B "students"（学生）不是教育机构；I "choices"（选择）语义不符；A "meet"是动词。',
            '38': '【正确答案：C. quickly】空格所在句为"New Zealand is ___ becoming multi-cultural"（新西兰正在迅速变得多元文化）。空格修饰"becoming"，需要一个副词。选项C "quickly"（迅速地）符合语境，"quickly becoming multi-cultural"（迅速变得多元文化）与后文"More and more international students"（越来越多的国际学生）形成语义呼应。干扰项：F "wisely"（明智地）与"becoming"搭配语义不同；E "free"是形容词；H "value"是名词。',
            '39': '【正确答案：B. students】空格所在句为"More and more international ___ are studying there"（越来越多的国际学生在那里学习）。"international ___"需要填入一个复数名词，与"are studying"（正在学习）构成主谓关系。选项B "students"（学生）符合语境，"international students"（国际学生）是极为常见的搭配。干扰项：L "colleges"（学院）与"are studying"搭配不当，学院不会学习；I "choices"（选择）语义不通；A "meet"是动词。',
            '40': '【正确答案：A. meet】空格所在句为"The education system is adapting to ___ the needs of different cultural groups"（教育系统正在调整以满足不同文化群体的需求）。"adapting to + 动词原形"构成不定式，空格需要填入动词原形。选项A "meet"（满足）符合语境，"meet the needs"（满足需求）是极为常见的固定搭配。干扰项：K "attend"（参加）不与"needs"搭配；J "quit"（放弃）语义相反；D "means"（意味着）不与"needs"搭配。'
        }
    },

    // ========== 17. 2021年10月 ==========
    {
        id: '2021-10',
        session: '2021年10月',
        articleTitle: 'Learning from Mistakes',
        passage: [
            'Lots of people do not dare to make mistakes. They fear that they will be blamed by others or lose their money and [31]. Therefore, they are under a lot of stress. But risks are unavoidable and they do [32] the way towards success. Have you ever heard of someone who achieves success without making any mistakes?',
            'So it is [33] that making mistakes in your effort to realize your [34] is considered a must. You should not worry about making mistakes as you may get a lot of [35] from them. By making mistakes you can [36] between the correct and the [37] things you did. Anthony D\'Angelo said, "In order to succeed you must fail, so that you know what to do the next time." Robert Stevenson even went to the [38] as to say, "Our business in life is not to succeed, but to continue to [39] in good spirits."',
            'You need not worry about anything as long as you keep on going by [40] learning from your mistakes and trying even harder.'
        ],
        wordBank: [
            { letter: 'A', word: 'extreme' }, { letter: 'B', word: 'discover' },
            { letter: 'C', word: 'distinguish' }, { letter: 'D', word: 'advantages' },
            { letter: 'E', word: 'fail' }, { letter: 'F', word: 'belongings' },
            { letter: 'G', word: 'recently' }, { letter: 'H', word: 'natural' },
            { letter: 'I', word: 'pave' }, { letter: 'J', word: 'incorrect' },
            { letter: 'K', word: 'wisely' }, { letter: 'L', word: 'dreams' }
        ],
        answers: { '31': 'F', '32': 'I', '33': 'H', '34': 'L', '35': 'D', '36': 'C', '37': 'J', '38': 'A', '39': 'E', '40': 'K' },
        explanations: {
            '31': '【正确答案：F. belongings】空格所在句为"They fear that they will be blamed by others or lose their money and ___"（他们害怕被别人责备或失去金钱和财产）。空格与"money"（金钱）并列，需要填入一个名词，表示人们可能失去的东西。选项F "belongings"（财产、所有物）符合语境，"lose their money and belongings"（失去金钱和财产）是完整的并列结构。干扰项：L "dreams"（梦想）虽然可以与"lose"搭配，但"money and dreams"不如"money and belongings"更贴合"物质损失"的语境；D "advantages"（优势）不与"lose"搭配；A "extreme"是形容词。',
            '32': '【正确答案：I. pave】空格所在句为"But risks are unavoidable and they do ___ the way towards success"（但风险是不可避免的，它们确实为成功铺平道路）。"do ___ the way"结构强调动词，空格需要填入动词原形。选项I "pave"（铺）符合语境，"pave the way towards success"（为成功铺平道路）是极为常见的固定搭配。干扰项：B "discover"（发现）不与"the way"搭配；E "fail"（失败）语义不通；C "distinguish"（区分）不与"the way"搭配。',
            '33': '【正确答案：H. natural】空格所在句为"So it is ___ that making mistakes in your effort to realize your ___ is considered a must"（因此，在努力实现你的梦想时犯错被认为是必须的，这是很自然的）。"it is ___ that..."结构中的"it"是形式主语，真正的主语是后面的从句，空格需要填入一个形容词。选项H "natural"（自然的）符合语境，"it is natural that..."（……是自然的）是常见句型，强调犯错是自然而然的。干扰项：A "extreme"（极端的）语义不符；G "recently"（最近）是副词；J "incorrect"（不正确的）语义相反。',
            '34': '【正确答案：L. dreams】空格所在句为"realize your ___"（实现你的梦想）。"realize"（实现）与"dreams"（梦想）是常见搭配。选项L "dreams"符合语境，"realize your dreams"（实现你的梦想）是固定搭配。干扰项：D "advantages"（优势）不与"realize"搭配；F "belongings"（财产）也不与"realize"搭配；B "discover"（发现）是动词。',
            '35': '【正确答案：D. advantages】空格所在句为"you may get a lot of ___ from them"（你可能从中获得许多好处）。"get a lot of ___ from"需要填入一个名词复数。选项D "advantages"（优势、好处）符合语境，"get advantages from mistakes"（从错误中获得好处）与上下文"不应该担心犯错"呼应。干扰项：F "belongings"（财产）语义不符；L "dreams"（梦想）不与"get"搭配；A "extreme"是形容词。',
            '36': '【正确答案：C. distinguish】空格所在句为"By making mistakes you can ___ between the correct and the ___ things you did"（通过犯错你可以在你做的正确和错误的事情之间进行区分）。"___ between A and B"是固定搭配，空格需要填入动词原形。选项C "distinguish"（区分）符合语境，"distinguish between A and B"（区分A和B）是极为常见的搭配。干扰项：B "discover"（发现）不与"between"搭配；E "fail"（失败）也不与"between"搭配；I "pave"（铺）语义不通。',
            '37': '【正确答案：J. incorrect】空格所在句为"between the correct and the ___ things you did"（在你做的正确和错误的事情之间）。空格与"correct"（正确的）形成对比，需要填入一个形容词。选项J "incorrect"（不正确的）符合语境，"the correct and the incorrect things"（正确和不正确的事情）形成鲜明的正反对比。干扰项：H "natural"（自然的）不与"correct"形成对比；A "extreme"（极端的）语义不同；L "dreams"是名词。',
            '38': '【正确答案：A. extreme】空格所在句为"Robert Stevenson even went to the ___ as to say..."（罗伯特·史蒂文森甚至走到极端说……）。"go to the ___"需要填入一个名词，构成固定搭配。选项A "extreme"（极端）符合语境，"go to the extreme"（走极端）是固定搭配，说明史蒂文森甚至说出了更极端的话。干扰项：D "advantages"（优势）不与"go to the"搭配；L "dreams"（梦想）语义不通；H "natural"是形容词。',
            '39': '【正确答案：E. fail】空格所在句为"Our business in life is not to succeed, but to continue to ___ in good spirits"（我们人生的事业不是成功，而是继续在好心情中失败）。空格与"succeed"（成功）形成对比，需要填入动词原形。选项E "fail"（失败）符合语境，"continue to fail in good spirits"（继续在好心情中失败）正是史蒂文森的那句名言，与文章主题"从错误中学习"呼应。干扰项：B "discover"（发现）不与"continue to"搭配成这种语义；I "pave"（铺）语义不通；C "distinguish"（区分）语义不符。',
            '40': '【正确答案：K. wisely】空格所在句为"as long as you keep on going by ___ learning from your mistakes"（只要你通过明智地从错误中学习来继续前进）。"by + 动名词"结构表示"通过……"，空格修饰"learning"，需要填入一个副词。选项K "wisely"（明智地）符合语境，"wisely learning from your mistakes"（明智地从错误中学习）与文章主旨"从错误中学习"呼应。干扰项：G "recently"（最近）语义不同；H "natural"是形容词；A "extreme"是形容词。'
        }
    },

    // ========== 18. 2022年4月 ==========
    {
        id: '2022-04',
        session: '2022年4月',
        articleTitle: 'Slavery in the United States',
        passage: [
            'In most parts of the United States in the early 1800s, blacks had no rights at all. They did not have the right to vote. It was against the [31] for them to go to school with whites. In some states, it was even [32] for them to learn to read and write. Free people had the right to come and go as they [33], but slaves had to have a pass, or paper, from their [34] in order to leave the master\'s land. Slaves were often [35] from their families when they were sold. They had to work very [36] hours, but were not paid. If they did not do as they were told, they could be beaten. If they tried to escape, they were hunted down with dogs, and could be tortured or even [37] when caught.',
            'Until about 1800, there were slaves in [38] every state in the United States. But slaves were not a big part of the Northern way of [39]. Northern factories hired workers and did not use slaves. By 1850, all Northern states had made slavery illegal.',
            'In the Southern states, however, most of the field workers were slaves; one out of every four families [40] slaves. These people were often rich and had large farms.'
        ],
        wordBank: [
            { letter: 'A', word: 'seldom' }, { letter: 'B', word: 'master' },
            { letter: 'C', word: 'separated' }, { letter: 'D', word: 'illegal' },
            { letter: 'E', word: 'killed' }, { letter: 'F', word: 'life' },
            { letter: 'G', word: 'owned' }, { letter: 'H', word: 'law' },
            { letter: 'I', word: 'long' }, { letter: 'J', word: 'almost' },
            { letter: 'K', word: 'liked' }, { letter: 'L', word: 'played' }
        ],
        answers: { '31': 'H', '32': 'D', '33': 'K', '34': 'B', '35': 'C', '36': 'I', '37': 'E', '38': 'J', '39': 'F', '40': 'G' },
        explanations: {
            '31': '【正确答案：H. law】空格所在句为"It was against the ___ for them to go to school with whites"（对他们来说，和白人一起上学是违法的）。"against the ___"是固定搭配，需要填入一个名词。选项H "law"（法律）符合语境，"against the law"（违法）是极为常见的固定搭配。干扰项：B "master"（主人）不能与"against the"搭配表示"违法"；F "life"（生命）语义不通；D "illegal"（非法的）是形容词，不能作"against the"的宾语。',
            '32': '【正确答案：D. illegal】空格所在句为"In some states, it was even ___ for them to learn to read and write"（在一些州，对他们来说，学习读写甚至是非法的）。"it was ___ for sb. to do sth."结构中，空格需要填入一个形容词作表语。选项D "illegal"（非法的）符合语境，"it was illegal for them to learn"（他们学习是非法的）与前文"against the law"形成递进。干扰项：A "seldom"（很少）是副词；I "long"（长的）是形容词，但"it was long for them to learn"语法不通；J "almost"（几乎）是副词。',
            '33': '【正确答案：K. liked】空格所在句为"Free people had the right to come and go as they ___"（自由人有权按他们喜欢的方式自由来去）。"as they ___"是方式状语从句，空格需要填入一个动词。选项K "liked"（喜欢）符合语境，"as they liked"（随心所欲地）是英语中的固定表达，意为"随他们的意愿"。干扰项：G "owned"（拥有）不能与"as they"搭配表示"随心所欲"；E "killed"（杀死）语义不通；C "separated"（分开）语义不符。',
            '34': '【正确答案：B. master】空格所在句为"slaves had to have a pass, or paper, from their ___"（奴隶必须有一张来自他们主人的通行证或纸张）。"from their ___"需要填入一个名词，指发出通行证的人。选项B "master"（主人）符合语境，"from their master"（从他们的主人那里）说明奴隶必须得到主人的许可才能离开。干扰项：F "life"（生命）不能作"from"的宾语；H "law"（法律）语义不符；G "owned"是动词。',
            '35': '【正确答案：C. separated】空格所在句为"Slaves were often ___ from their families when they were sold"（奴隶在被卖掉时常常与家人分离）。"be ___ from"是固定搭配，需要填入一个过去分词构成被动语态。选项C "separated"（分开）符合语境，"be separated from"（与……分开）是固定搭配。干扰项：E "killed"（杀死）虽然也常与"from"搭配，但此处指"被卖"而非"被杀"；G "owned"（拥有）不与"from"搭配；K "liked"（喜欢）不与"from"搭配。',
            '36': '【正确答案：I. long】空格所在句为"They had to work very ___ hours, but were not paid"（他们不得不工作非常长的时间，但没有报酬）。空格修饰 hours（时间），需要填入一个形容词。选项I "long"（长的）符合语境，"work long hours"（工作很长时间）是常见的固定搭配，突出奴隶劳动的残酷。干扰项：A "seldom"（很少）是副词，不能修饰名词；J "almost"（几乎）是副词；E "killed"是过去分词。',
            '37': '【正确答案：E. killed】空格所在句为"they were hunted down with dogs, and could be tortured or even ___ when caught"（他们被狗追捕，被抓到后可能被折磨甚至被杀死）。空格与"tortured"（折磨）并列，需要填入一个过去分词。选项E "killed"（杀死）符合语境，"tortured or even killed"（被折磨甚至被杀死）构成了递进。干扰项：C "separated"（分开）语义不同；G "owned"（拥有）语义不通；K "liked"（喜欢）语义相反。',
            '38': '【正确答案：J. almost】空格所在句为"Until about 1800, there were slaves in ___ every state in the United States"（直到1800年左右，美国几乎每个州都有奴隶）。空格修饰"every"，需要填入一个副词。选项J "almost"（几乎）符合语境，"almost every state"（几乎每个州）是极为常见的搭配。干扰项：A "seldom"（很少）语义相反；I "long"（长的）是形容词；H "law"是名词。',
            '39': '【正确答案：F. life】空格所在句为"But slaves were not a big part of the Northern way of ___"（但奴隶并不是北方生活方式的重要部分）。"way of ___"是固定搭配，需要填入一个名词。选项F "life"（生活）符合语境，"way of life"（生活方式）是极为常见的固定搭配。干扰项：H "law"（法律）不能构成"way of law"；B "master"（主人）语义不通；G "owned"是动词。',
            '40': '【正确答案：G. owned】空格所在句为"one out of every four families ___ slaves"（每四户家庭中就有一户拥有奴隶）。空格需要一个动词过去式（描述历史事实），且与"slaves"构成动宾关系。选项G "owned"（拥有）符合语境，"owned slaves"（拥有奴隶）是描述奴隶主的标准搭配。干扰项：K "liked"（喜欢）语义不如"owned"贴切；E "killed"（杀死）语义极端；C "separated"（分开）语义不通。'
        }
    },

    // ========== 19. 2022年10月 ==========
    {
        id: '2022-10',
        session: '2022年10月',
        articleTitle: 'Smiles',
        passage: [
            'A smile costs nothing but creates much. It enriches those who [31], without making those who give poor. It happens in a [32] and the memory of it sometimes lasts [33]. None are so rich that they can get along without it, and none so [34] but are richer for its benefits. It creates [35] in the home, and fosters goodwill in a business. It is rest to the weary, daylight to the [36] and sunshine to the sad. Yet it cannot be bought, begged, borrowed, or stolen, for it is something that is no earthly good to anybody till it is given [37]. And if in the last-minute rush of Christmas [38], some of our salespeople should be too [39] to give you a smile, may we [40] you to leave one of yours? For nobody needs a smile so much as those who have none left to give!'
        ],
        wordBank: [
            { letter: 'A', word: 'forever' }, { letter: 'B', word: 'away' },
            { letter: 'C', word: 'happiness' }, { letter: 'D', word: 'satisfied' },
            { letter: 'E', word: 'discouraged' }, { letter: 'F', word: 'flash' },
            { letter: 'G', word: 'receive' }, { letter: 'H', word: 'tired' },
            { letter: 'I', word: 'poor' }, { letter: 'J', word: 'enough' },
            { letter: 'K', word: 'buying' }, { letter: 'L', word: 'ask' }
        ],
        answers: { '31': 'G', '32': 'F', '33': 'A', '34': 'I', '35': 'C', '36': 'E', '37': 'B', '38': 'K', '39': 'H', '40': 'L' },
        explanations: {
            '31': '【正确答案：G. receive】空格所在句为"It enriches those who ___"（它让那些接受的人富有）。"those who ___"是一个定语从句，空格需要填入一个动词，与"enriches"（使富有）构成逻辑关系。选项G "receive"（接受）符合语境，"enriches those who receive"（让接受的人富有）与后文"without making those who give poor"（而不使给予的人贫穷）形成对比，是微笑的经典描述。干扰项：L "ask"（请求）语义不同；K "buying"（购买）是动名词；H "tired"（累的）是形容词。',
            '32': '【正确答案：F. flash】空格所在句为"It happens in a ___ and the memory of it sometimes lasts forever"（它发生在一瞬间，而它的记忆有时持续永远）。"in a ___"需要填入一个名词，与"happens"（发生）搭配，表示时间极短。选项F "flash"（闪光）符合语境，"in a flash"（一瞬间）是极为常见的固定搭配。干扰项：C "happiness"（幸福）不能构成"in a happiness"；J "enough"（足够）是形容词；I "poor"（贫穷）是形容词。',
            '33': '【正确答案：A. forever】空格所在句为"the memory of it sometimes lasts ___"（而它的记忆有时持续永远）。空格修饰"lasts"（持续），需要填入一个副词。选项A "forever"（永远）符合语境，"lasts forever"（永远持续）与前半句"in a flash"（一瞬间）形成鲜明对比。干扰项：B "away"（离开）不能与"lasts"搭配；J "enough"（足够）是形容词；H "tired"是形容词。',
            '34': '【正确答案：I. poor】空格所在句为"none so ___ but are richer for its benefits"（也没有人贫穷到不因它的好处而变得更富有）。"none so ___ but..."是特殊结构，空格需要填入一个形容词。选项I "poor"（贫穷）符合语境，"none so poor but are richer"（没有人穷到不因微笑而更富有）与前文"none are so rich"（没有人富有到不需要微笑）形成穷富对比。干扰项：D "satisfied"（满意的）语义不同；H "tired"（累的）不能与 rich 形成对比；E "discouraged"（气馁的）语义不符。',
            '35': '【正确答案：C. happiness】空格所在句为"It creates ___ in the home"（它在家中创造幸福）。"creates ___"需要填入一个名词作宾语。选项C "happiness"（幸福）符合语境，"creates happiness in the home"（在家庭中创造幸福）与后文"fosters goodwill in a business"（在企业中培养善意）形成并列。干扰项：A "forever"（永远）是副词；F "flash"（闪光）语义是"瞬间"，不能是"家庭中被创造"的；J "enough"是形容词。',
            '36': '【正确答案：E. discouraged】空格所在句为"It is rest to the weary, daylight to the ___ and sunshine to the sad"（它是疲惫者的休息，气馁者的日光，悲伤者的阳光）。空格与"weary"（疲惫的）、"sad"（悲伤的）并列，需要填入一个形容词。选项E "discouraged"（气馁的）符合语境，"daylight to the discouraged"（对气馁的人来说是日光）与后文"sunshine to the sad"（对悲伤的人来说是阳光）形成三层递进的隐喻。干扰项：D "satisfied"（满意的）与 daylight 隐喻不符；H "tired"（累的）与前文"weary"重复；I "poor"（贫穷的）语义不同。',
            '37': '【正确答案：B. away】空格所在句为"it is something that is no earthly good to anybody till it is given ___"（它是那种在没被送出之前对任何人都没有世俗价值的东西）。"given ___"需要填入一个副词。选项B "away"（离开）符合语境，"given away"（送出、赠予）是固定短语，指微笑只有被送出才有价值。干扰项：A "forever"（永远）不能构成"given forever"表示"赠予"；J "enough"（足够）语义不通；H "tired"是形容词。',
            '38': '【正确答案：K. buying】空格所在句为"And if in the last-minute rush of Christmas ___"（如果在圣诞节购物的最后冲刺中）。"Christmas ___"需要填入一个动名词，与"Christmas"（圣诞）搭配。选项K "buying"（购买）符合语境，"Christmas buying"（圣诞购物）是极为常见的搭配，指圣诞节的购物热潮。干扰项：L "ask"（请求）是动词；A "forever"（永远）是副词；C "happiness"（幸福）虽可作名词，但"Christmas happiness"不如"Christmas buying"符合"rush"（匆忙）的语境。',
            '39': '【正确答案：H. tired】空格所在句为"some of our salespeople should be too ___ to give you a smile"（我们的一些售货员可能太累而无法给你一个微笑）。"too ___ to do"是固定结构，空格需要填入一个形容词。选项H "tired"（累的）符合语境，"too tired to give you a smile"（累得无法给你微笑）是常见表达。干扰项：D "satisfied"（满意的）与"too...to"结构搭配语义不通；E "discouraged"（气馁的）语义是"气馁"，不如"tired"贴合圣诞节忙绿的场景；I "poor"（贫穷的）语义不符。',
            '40': '【正确答案：L. ask】空格所在句为"may we ___ you to leave one of yours?"（我们可以请求你留下一个你的微笑吗？）。"may we ___ you to do"是礼貌的请求结构，空格需要填入动词原形。选项L "ask"（请求）符合语境，"ask you to leave one of yours"（请求你留下一个微笑）是极为礼貌的表达。干扰项：G "receive"（接受）与"you to leave"结构不搭配；K "buying"是动名词；B "away"是副词。'
        }
    },
    // ========== 20. 2023年4月 ==========
    {
        id: '2023-04',
        session: '2023年4月',
        articleTitle: 'Failing Forward',
        passage: [
            'There are several key abilities that allow successful people to fail forward instead of taking each setback personally. First, successful people do not blame themselves when they fail. They take [31] for each setback, but they do not take the failure personally. Second, successful people do not [32] themselves by individual failures. They [33] that each setback is a small [34] of the whole. Third, achievers are [35] to vary their approaches to problems. That is important in every walk of life. If one [36] does not work for you, if it brings repeated failures, [37] try something else. To fail forward, you must do what works for you, not [38] what works for other people. Finally, successful people are [39]. They do not let one error keep them down. They learn from their mistakes and [40] on.'
        ],
        wordBank: [
            { letter: 'A', word: 'lucky' }, { letter: 'B', word: 'move' },
            { letter: 'C', word: 'responsibility' }, { letter: 'D', word: 'then' },
            { letter: 'E', word: 'necessarily' }, { letter: 'F', word: 'part' },
            { letter: 'G', word: 'tough' }, { letter: 'H', word: 'willing' },
            { letter: 'I', word: 'approach' }, { letter: 'J', word: 'recognize' },
            { letter: 'K', word: 'easily' }, { letter: 'L', word: 'define' }
        ],
        answers: { '31': 'C', '32': 'L', '33': 'J', '34': 'F', '35': 'H', '36': 'I', '37': 'D', '38': 'E', '39': 'G', '40': 'B' },
        explanations: {
            '31': '【正确答案：C. responsibility】空格所在句为"They take ___ for each setback"（他们为每次挫折承担责任）。"take ___ for"是固定搭配，需要填入一个名词。选项C "responsibility"（责任）符合语境，"take responsibility for"（为……负责）是极为常见的固定搭配。干扰项：F "part"（部分）不能构成"take part for"表示"负责"；B "move"（行动）不与"take...for"搭配；L "define"是动词。',
            '32': '【正确答案：L. define】空格所在句为"successful people do not ___ themselves by individual failures"（成功者不会因个别失败而定义自己）。"do not ___ themselves by"需要填入一个动词原形。选项L "define"（定义）符合语境，"define oneself by"（用……来定义自己）是常见搭配。干扰项：J "recognize"（认出）不与"themselves by"搭配；A "lucky"是形容词；H "willing"是形容词。',
            '33': '【正确答案：J. recognize】空格所在句为"They ___ that each setback is a small ___ of the whole"（他们认识到每次挫折都只是整体的一小部分）。"They ___ that..."需要填入一个动词原形。选项J "recognize"（认识到）符合语境，"recognize that..."（认识到……）是常见的表达，与后文"each setback is a small part"（每次挫折只是一小部分）形成语义衔接。干扰项：B "move"（移动）不能接"that"从句；L "define"（定义）不与"that"从句搭配成此语义；H "willing"是形容词。',
            '34': '【正确答案：F. part】空格所在句为"each setback is a small ___ of the whole"（每次挫折都只是整体的一小部分）。"a small ___ of"需要填入一个名词。选项F "part"（部分）符合语境，"a small part of the whole"（整体的一小部分）是极为常见的固定搭配，强调不要把挫折看得太大。干扰项：C "responsibility"（责任）不与"of the whole"搭配；I "approach"（方法）语义不通；B "move"（移动）不与"of the whole"搭配。',
            '35': '【正确答案：H. willing】空格所在句为"achievers are ___ to vary their approaches to problems"（成功者愿意改变他们解决问题的方法）。"are ___ to do"需要填入一个形容词。选项H "willing"（愿意）符合语境，"be willing to do"（愿意做）是极为常见的固定搭配。干扰项：G "tough"（困难的）与"to do"搭配语义不通；A "lucky"（幸运的）不能与"to vary"搭配；K "easily"（容易地）是副词。',
            '36': '【正确答案：I. approach】空格所在句为"If one ___ does not work for you"（如果一种方法对你不奏效）。"one ___"需要填入一个名词，与前文"approaches to problems"（解决问题的方法）呼应。选项I "approach"（方法）符合语境，"one approach does not work"（一种方法不奏效）与后文"try something else"（尝试其他方法）形成语义链条。干扰项：B "move"（行动）语义不如"approach"贴切；F "part"（部分）语义不通；C "responsibility"（责任）语义不同。',
            '37': '【正确答案：D. then】空格所在句为"if it brings repeated failures, ___ try something else"（如果它带来反复失败，那么就尝试其他方法）。空格位于祈使句句首，需要一个副词表示"那么"。选项D "then"（那么）符合语境，"if...then..."是典型的条件句结构，指如果方法反复失败，那么就尝试其他方法。干扰项：E "necessarily"（必然）是副词，但不用于"if...then"结构；K "easily"（容易地）语义不通；A "lucky"是形容词。',
            '38': '【正确答案：E. necessarily】空格所在句为"you must do what works for you, not ___ what works for other people"（你必须做对你奏效的事，而不一定是对别人奏效的事）。"not ___"需要填入一个副词修饰后面的从句。选项E "necessarily"（必然）符合语境，"not necessarily what works for others"（不一定是对别人奏效的）是英语中常见的表达，强调个体差异。干扰项：K "easily"（容易地）语义不通；D "then"（那么）是时间副词；A "lucky"是形容词。',
            '39': '【正确答案：G. tough】空格所在句为"successful people are ___"（成功者是坚韧的）。"are ___"需要填入一个形容词作表语，且与后文"They do not let one error keep them down"（他们不会让一次错误击垮他们）呼应。选项G "tough"（坚韧的）符合语境，"successful people are tough"（成功者是坚韧的）与后文"do not let one error keep them down"（不让一次错误击垮他们）形成语义呼应。干扰项：A "lucky"（幸运的）语义不符；H "willing"（愿意的）不能单独作表语；E "necessarily"是副词。',
            '40': '【正确答案：B. move】空格所在句为"They learn from their mistakes and ___ on"（他们从错误中学习并继续前进）。"___ on"是固定搭配，需要填入一个动词原形。选项B "move"（移动）符合语境，"move on"（继续前进）是极为常见的固定搭配，指从错误中学习后继续前进。干扰项：J "recognize"（认识到）不与"on"搭配；L "define"（定义）不与"on"搭配；D "then"（那么）是副词。'
        }
    },

    // ========== 21. 2023年10月 ==========
    {
        id: '2023-10',
        session: '2023年10月',
        articleTitle: 'Friendship and Loyalty',
        passage: [
            'Loyalty found in a friend is similar to making a deposit in a bank account. More often than not, your deposits [31] interest, an interest in your well-being and welfare. A loyal friend attracts another loyal friend. In essence, water does seek its own level.',
            'If you were a best loyal friend, [32] I am sure you understand the principle of loyalty in a friend. You should never [33] your best loyal friend to gain more friends or make yourself seem more [34] to others. These are not the traits of a best loyal friend.',
            'A best loyal friend does not care who is invited to your party. They will [35] your party and celebrate you, just in the way a best loyal friend should do.',
            'Reconnecting with a best loyal friend is [36] to do on the Internet. A virtual friend, [37] does not assure you of his loyalty. My [38] to you is that you had better pay [39] to the smiling faces on the Internet. In the 1980s we were warned of smiling faces in a song, which contained these lyrics, "A smile is just a frown turned upside down, my friend." Now, that is the [40] for my generation.'
        ],
        wordBank: [
            { letter: 'A', word: 'truth' }, { letter: 'B', word: 'attend' },
            { letter: 'C', word: 'attention' }, { letter: 'D', word: 'then' },
            { letter: 'E', word: 'however' }, { letter: 'F', word: 'know' },
            { letter: 'G', word: 'exploit' }, { letter: 'H', word: 'easier' },
            { letter: 'I', word: 'important' }, { letter: 'J', word: 'more' },
            { letter: 'K', word: 'me' }, { letter: 'L', word: 'advice' }
        ],
        answers: { '31': 'H', '32': 'D', '33': 'G', '34': 'I', '35': 'B', '36': 'H', '37': 'E', '38': 'L', '39': 'C', '40': 'A' },
        explanations: {
            '31': '【正确答案：H. easier】空格所在句为"More often than not, your deposits ___ interest"（通常，你的存款更容易产生利息）。"your deposits ___ interest"需要填入一个形容词或动词。选项H "easier"（更容易）符合语境，指忠诚就像存款一样，更容易产生"利息"（即回报）。干扰项：B "attend"（参加）语义是"参加利息"，不通；F "know"（知道）语义不符；J "more"（更多）不能直接作谓语。',
            '32': '【正确答案：D. then】空格所在句为"If you were a best loyal friend, ___ I am sure you understand the principle"（如果你是一个最好的忠诚朋友，那么我相信你理解这一原则）。空格位于让步状语从句后，需要一个副词表示"那么"。选项D "then"（那么）符合语境，"if...then..."是典型的条件句结构。干扰项：E "however"（然而）语义相反；J "more"（更多）是副词，但不能连接主从句；K "me"（我）是代词。',
            '33': '【正确答案：G. exploit】空格所在句为"You should never ___ your best loyal friend to gain more friends"（你永远不应该为了获得更多朋友而利用你最好的忠诚朋友）。"never ___ your friend"需要填入一个动词原形。选项G "exploit"（利用）符合语境，"exploit your friend"（利用你的朋友）与后文"to gain more friends"（为了获得更多朋友）形成负面语义。干扰项：B "attend"（参加）语义不通；F "know"（知道）不能构成"知道你的朋友"表示"利用"；J "more"（更多）不能作动词。',
            '34': '【正确答案：I. important】空格所在句为"or make yourself seem more ___ to others"（或者让自己在别人眼里显得更重要）。"make yourself seem more ___"需要填入一个形容词。选项I "important"（重要的）符合语境，"make yourself seem more important"（让自己显得更重要）与"exploit your friend"（利用朋友）形成并列，说明都不该做。干扰项：J "more"（更多）本身是比较级，不能再被"more"修饰；H "easier"（更容易）语义不符；A "truth"（真相）是名词。',
            '35': '【正确答案：B. attend】空格所在句为"They will ___ your party and celebrate you"（他们会参加你的派对并庆祝你）。"___ your party"需要填入一个动词原形。选项B "attend"（参加）符合语境，"attend your party"（参加你的派对）是固定搭配，与后文"celebrate you"（庆祝你）呼应。干扰项：G "exploit"（利用）语义不符；F "know"（知道）不能构成"知道派对"；H "easier"是形容词比较级。',
            '36': '【正确答案：H. easier】空格所在句为"Reconnecting with a best loyal friend is ___ to do on the Internet"（在网上与最好的忠诚朋友重新联系是更容易做的）。"is ___ to do"需要填入一个形容词比较级。选项H "easier"（更容易）符合语境，"is easier to do"（更容易做）表示网上重新联系旧友比较容易，与后文"virtual friend does not assure loyalty"（虚拟朋友不保证忠诚）形成对比。干扰项：I "important"（重要的）虽然也可以填入"is important to do"，但语义上与后文形成对比的是"easier"；J "more"（更多）不能单独作表语；E "however"是副词。',
            '37': '【正确答案：E. however】空格所在句为"A virtual friend, ___ does not assure you of his loyalty"（一个虚拟朋友，然而不保证他的忠诚）。空格插入句子中间，需要一个副词。选项E "however"（然而）符合语境，"A virtual friend, however, does not assure you"（然而虚拟朋友不保证）与前半句"Reconnecting... is easier on the Internet"（网上重新联系更容易）形成转折。干扰项：D "then"（那么）不能表示转折；J "more"（更多）是副词，不能表示转折；H "easier"是形容词。',
            '38': '【正确答案：L. advice】空格所在句为"My ___ to you is that you had better pay ___ to the smiling faces"（我对你的建议是你最好注意网上的笑脸）。"My ___ to you"需要填入一个名词。选项L "advice"（建议）符合语境，"my advice to you"（我对你的建议）是极为常见的搭配，引出作者的具体建议。干扰项：A "truth"（真相）不与"to you"搭配成"我对你的真相"；C "attention"（注意力）语义不同；I "important"是形容词。',
            '39': '【正确答案：C. attention】空格所在句为"you had better pay ___ to the smiling faces"（你最好注意网上的笑脸）。"pay ___ to"是固定搭配，需要填入一个名词。选项C "attention"（注意力）符合语境，"pay attention to"（注意）是极为常见的固定搭配。干扰项：A "truth"（真相）不能构成"pay truth to"；L "advice"（建议）不能构成"pay advice to"；I "important"是形容词。',
            '40': '【正确答案：A. truth】空格所在句为"Now, that is the ___ for my generation"（现在，这就是我们这一代人的真理）。"the ___ for my generation"需要填入一个名词。选项A "truth"（真理）符合语境，"the truth for my generation"（我们这一代人的真理）指"笑脸可能只是伪装"这一真理，作为文章的总结升华。干扰项：L "advice"（建议）不与"for my generation"搭配；C "attention"（注意力）语义不同；I "important"是形容词。'
        }
    },

    // ========== 22. 2024年4月 ==========
    {
        id: '2024-04',
        session: '2024年4月',
        articleTitle: 'Tips for Improving Your Body Image',
        passage: [
            'Some people think that they need to change how they look or act to feel good about themselves. [31] is change the way you see your body and how you think about yourself.',
            'The first thing to do is [32] that your body is your own. If you are very worried about your weight or size, [33] with your doctor to verify that things are OK. But it is no one\'s business but your own what your body is like. Ultimately, you have to be happy with yourself.',
            '[34], identify which aspects of your appearance you can [35] change and which you cannot. Everyone has things about themselves that they cannot change and need to accept, like their height, for example, or their shoe size.',
            'If there are [36] about yourself that you want to change and can change (such as how fit you are), do this by setting [37] for yourself. For example, if you want to get fit, [38] make a plan to exercise every day and eat [39] foods. Then keep track of your [40] until you reach your goal. Meeting a challenge you set for yourself is a great way to boost self-esteem!'
        ],
        wordBank: [
            { letter: 'A', word: 'check' }, { letter: 'B', word: 'things' },
            { letter: 'C', word: 'Instead' }, { letter: 'D', word: 'goals' },
            { letter: 'E', word: 'Next' }, { letter: 'F', word: 'do' },
            { letter: 'G', word: 'just' }, { letter: 'H', word: 'healthy' },
            { letter: 'I', word: 'recognize' }, { letter: 'J', word: 'method' },
            { letter: 'K', word: 'progress' }, { letter: 'L', word: 'realistically' }
        ],
        answers: { '31': 'C', '32': 'I', '33': 'A', '34': 'E', '35': 'L', '36': 'B', '37': 'D', '38': 'G', '39': 'H', '40': 'K' },
        explanations: {
            '31': '【正确答案：C. Instead】空格位于段首，且句首为空格+谓语"is change the way you see your body"，是一个倒装句。原句还原应为"What you need to do ___ is change the way you see your body"（你真正需要做的反而是改变你看待自己身体的方式）。选项C "Instead"（相反）符合语境，位于句首，表示转折——人们常常想改变外貌，但相反应该改变的是自己看待身体的方式。干扰项：E "Next"（接下来）表示顺序，不能构成"相反"的语义；G "just"（仅仅）是副词，不能位于句首与"is change"构成这种倒装结构；B "things"是名词，语法不通。',
            '32': '【正确答案：I. recognize】空格所在句为"The first thing to do is ___ that your body is your own"（首先要做的是认识到你的身体是你自己的）。"The first thing to do is + 动词原形"是常见结构，空格需要填入动词原形。选项I "recognize"（认识到）符合语境，"recognize that..."（认识到……）是常见表达。干扰项：A "check"（检查）语义不如"recognize"贴切；F "do"（做）不能与"that"从句搭配；L "realistically"（现实地）是副词。',
            '33': '【正确答案：A. check】空格所在句为"If you are very worried about your weight or size, ___ with your doctor to verify that things are OK"（如果你非常担心自己的体重或体型，和你的医生确认以确认一切正常）。空格需要一个动词原形与"with"搭配。选项A "check"（检查）符合语境，"check with your doctor"（向医生咨询）是极为常见的搭配。干扰项：F "do"（做）不能构成"do with your doctor"；G "just"（仅仅）是副词；I "recognize"不能与"with"搭配。',
            '34': '【正确答案：E. Next】空格位于段首，句首后接逗号，需要填入一个过渡词或副词。选项E "Next"（接下来）符合语境，"Next, identify which aspects..."（接下来，确定哪些方面……）表示下一步行动，与文章结构一致（前一段讲"首先要做的"，此段讲"接下来"）。干扰项：C "Instead"（相反）虽然可以位于句首，但语义不通；G "just"（仅仅）不能作段落起始的引导词；L "realistically"（现实地）虽然可以放在句首，但此处需要一个表示顺序的过渡词。',
            '35': '【正确答案：L. realistically】空格所在句为"identify which aspects of your appearance you can ___ change and which you cannot"（确定你外貌的哪些方面你可以现实地改变，哪些你不能）。空格修饰动词"change"，需要一个副词。选项L "realistically"（现实地）符合语境，"realistically change"（现实地改变）指要现实地评估哪些方面可以改变。干扰项：G "just"（仅仅）语义是"仅仅改变"，不如"现实地改变"贴切；A "check"是动词；I "recognize"是动词。',
            '36': '【正确答案：B. things】空格所在句为"If there are ___ about yourself that you want to change"（如果有些关于你自己的事情你想改变）。"there are ___ about yourself"需要填入一个复数名词。选项B "things"（事情、方面）符合语境，"things about yourself"（关于你自己的事情）是极为常见的搭配。干扰项：D "goals"（目标）不与"about yourself"搭配成这种语义；J "method"（方法）是单数名词，与"are"不搭配；K "progress"（进步）是不可数名词，与"are"不搭配。',
            '37': '【正确答案：D. goals】空格所在句为"do this by setting ___ for yourself"（通过为自己设定目标来做这件事）。"setting ___ for yourself"是固定搭配，需要填入一个名词复数。选项D "goals"（目标）符合语境，"setting goals for yourself"（为自己设定目标）是极为常见的搭配。干扰项：B "things"（事情）不与"setting...for yourself"搭配成"设定事情"；J "method"（方法）不与"for yourself"搭配；K "progress"是"进步"，不能"设定进步"。',
            '38': '【正确答案：G. just】空格所在句为"if you want to get fit, ___ make a plan to exercise every day"（如果你想健身，就制定每天锻炼的计划）。空格修饰动词"make"，需要一个副词。选项G "just"（就）符合语境，"just make a plan"（就制定一个计划）表示"你只需要制定一个计划"，语气轻松，鼓励读者行动。干扰项：L "realistically"（现实地）语义不通；A "check"是动词；E "Next"（接下来）是顺序词，不用于此处。',
            '39': '【正确答案：H. healthy】空格所在句为"eat ___ foods"（吃健康食物）。空格修饰 foods，需要填入一个形容词。选项H "healthy"（健康的）符合语境，"healthy foods"（健康食物）是极为常见的搭配，与"exercise every day"（每天锻炼）并列。干扰项：B "things"（事物）是名词；D "goals"（目标）是名词；K "progress"（进步）是名词。',
            '40': '【正确答案：K. progress】空格所在句为"Then keep track of your ___ until you reach your goal"（然后记录你的进步直到达成目标）。"keep track of your ___"是固定搭配，需要填入一个名词。选项K "progress"（进步）符合语境，"keep track of your progress"（记录你的进步）是极为常见的搭配。干扰项：B "things"（事物）不与"keep track of"搭配成这种语义；D "goals"（目标）虽然语法可以，但"记录目标"不如"记录进步"贴切；J "method"（方法）语义不符。'
        }
    },

    // ========== 23. 2024年10月 ==========
    {
        id: '2024-10',
        session: '2024年10月',
        articleTitle: 'My Little Niece',
        passage: [
            'My little niece, a ten-month-old baby, is the most lovely child I have ever seen. Her face is like a red apple and her eyes are like [31] stars. When you carry her in your arms, she likes to put her arms around your neck. All the [32] in the family love her very much and often try to make her smile. But quite [33] it is she who makes us [34]. Once I winked at her and she smiled. When I did it again, she watched me [35]. Then she tried to imitate. While I closed one eye to wink, she had to close [36] eyes at the same time, and then [37] opened them again. And that was her way to wink. We all [38] into laughter. When we looked at her again, she was staring at us, puzzled, as if she were [39] "What are you laughing at?" We all love this [40] little baby.'
        ],
        wordBank: [
            { letter: 'A', word: 'laugh' }, { letter: 'B', word: 'both' },
            { letter: 'C', word: 'drink' }, { letter: 'D', word: 'grown-ups' },
            { letter: 'E', word: 'attentively' }, { letter: 'F', word: 'asking' },
            { letter: 'G', word: 'cute' }, { letter: 'H', word: 'flowers' },
            { letter: 'I', word: 'burst' }, { letter: 'J', word: 'often' },
            { letter: 'K', word: 'bright' }, { letter: 'L', word: 'quickly' }
        ],
        answers: { '31': 'K', '32': 'D', '33': 'J', '34': 'A', '35': 'E', '36': 'B', '37': 'L', '38': 'I', '39': 'F', '40': 'G' },
        explanations: {
            '31': '【正确答案：K. bright】空格所在句为"her eyes are like ___ stars"（她的眼睛像明亮的星星）。空格修饰 stars（星星），需要填入一个形容词，描述星星的特征，且此句为比喻，形容眼睛明亮。选项K "bright"（明亮的）符合语境，"bright stars"（明亮的星星）与"like a red apple"（像红苹果）形成并列的两个比喻句。干扰项：H "flowers"（花）是名词，不能修饰 stars；G "cute"（可爱的）虽然可以形容星星，但不如"bright"贴切；A "laugh"（笑）是动词。',
            '32': '【正确答案：D. grown-ups】空格所在句为"All the ___ in the family love her very much"（家里所有的成年人都非常爱她）。"All the ___ in the family"需要填入一个复数名词，指家庭中的成员。选项D "grown-ups"（成年人）符合语境，"all the grown-ups in the family"（家里所有的成年人）与后文"often try to make her smile"（经常试图逗她笑）呼应。干扰项：H "flowers"（花）不是家庭成员；B "both"（两者都）是限定词；G "cute"（可爱的）是形容词。',
            '33': '【正确答案：J. often】空格所在句为"But quite ___ it is she who makes us ___"（但相当经常是她让我们笑）。"quite ___"需要填入一个副词。选项J "often"（经常）符合语境，"quite often"（相当经常）是常见的固定搭配，强调频率。干扰项：L "quickly"（迅速地）是副词，但"quite quickly"语义是"相当迅速"，不如"相当经常"贴合语境；E "attentively"（专注地）语义不符；I "burst"（爆发）是动词。',
            '34': '【正确答案：A. laugh】空格所在句为"it is she who makes us ___"（是她让我们笑）。"make sb. do sth."结构，空格需要填入一个动词原形。选项A "laugh"（笑）符合语境，"makes us laugh"（让我们笑）是常见的固定搭配，与前文"try to make her smile"（试图让她笑）形成对比。干扰项：I "burst"（爆发）虽然可以与"into laughter"搭配，但此处后面没有"into"；C "drink"（喝）语义不通；F "asking"（问）是现在分词。',
            '35': '【正确答案：E. attentively】空格所在句为"When I did it again, she watched me ___"（当我再做一次时，她专注地看着我）。空格修饰"watched"，需要一个副词。选项E "attentively"（专注地）符合语境，"watched me attentively"（专注地看着我）说明婴儿很认真地在学习眨眼。干扰项：L "quickly"（迅速地）语义不同；J "often"（经常）不能修饰 watched 表示"专注"；I "burst"是动词。',
            '36': '【正确答案：B. both】空格所在句为"While I closed one eye to wink, she had to close ___ eyes at the same time"（当我闭一只眼睛眨眼时，她却不得不同时闭上两只眼睛）。"close ___ eyes"需要填入一个限定词，与"eyes"搭配。选项B "both"（两只）符合语境，"close both eyes"（闭上两只眼睛）与前半句"close one eye"（闭一只眼睛）形成对比。干扰项：D "grown-ups"（成年人）是名词；J "often"（经常）是副词；L "quickly"是副词。',
            '37': '【正确答案：L. quickly】空格所在句为"and then ___ opened them again"（然后迅速再次睁开）。空格修饰"opened"，需要一个副词。选项L "quickly"（迅速地）符合语境，"quickly opened them again"（迅速再次睁开）描述了婴儿模仿眨眼时的快速动作。干扰项：E "attentively"（专注地）不能修饰 opened 表"迅速"；J "often"（经常）语义不通；I "burst"是动词。',
            '38': '【正确答案：I. burst】空格所在句为"We all ___ into laughter"（我们都爆发出笑声）。"___ into laughter"是固定搭配，需要填入一个动词过去式。选项I "burst"（爆发）符合语境，"burst into laughter"（爆发出笑声）是极为常见的固定搭配。干扰项：A "laugh"（笑）虽然也可以表达"笑"，但"laugh into laughter"不成立；C "drink"（喝）语义不通；F "asking"（问）是现在分词。',
                      '39': '【正确答案：F. asking】空格所在句为"she was staring at us, puzzled, as if she were asking"（她盯着我们，一脸困惑，仿佛她在问"你们在笑什么？"）。"as if she were ___"是虚拟语气，需要填入一个现在分词。选项F "asking"（问）符合语境，"as if she were asking"（仿佛她在问）是自然表达，指婴儿的表情像在问问题。干扰项：A "laugh"（笑）语义不同；I "burst"（爆发）不能接引语；E "attentively"是副词。',
            '40': '【正确答案：G. cute】空格所在句为"We all love this ___ little baby"（我们都爱这个可爱的小宝宝）。空格修饰 little baby，需要填入一个形容词。选项G "cute"（可爱的）符合语境，"cute little baby"（可爱的小宝宝）是极为常见的搭配，与文章开头"most lovely child"（最可爱的孩子）呼应。干扰项：K "bright"（明亮的）不能修饰 baby；D "grown-ups"（成年人）不能修饰 baby；B "both"（两者都）是限定词。'
        }
    },
    // ========== 24. 2025年4月 ==========
    {
        id: '2025-04',
        session: '2025年4月',
        articleTitle: 'The Impact of Artificial Intelligence on Jobs',
        passage: [
            'As you grew up, there is a good chance you heard the saying "go to a good school, get a good job, and make lots of money." On the surface, that seems like [31] advice. After all, college graduates, on [32], earn almost $1 million more in their lifetime than those with [33] a high school education.',
            'Perhaps you were encouraged to earn a professional degree to [34] a high-paying job like a doctor, dentist, lawyer or something [35]. This also seems like great advice. A professional degree holder [36] earns more than $2 million more in their lifetime than the average college graduate. But that was then, not now.',
            'Thanks to rapid [37] in artificial intelligence, jobs are falling to machines. And it is not just blue-collar jobs that are being taken [38] by automation. It is white-collar professions as well.',
            'The safe, high paying jobs of the past are starting to look much less secure. If you are currently in one of the professions of finance, [39] or law, or going to school to get into these fields, you should [40] twice before continuing.'
        ],
        wordBank: [
            { letter: 'A', word: 'get' }, { letter: 'B', word: 'called' },
            { letter: 'C', word: 'similar' }, { letter: 'D', word: 'think' },
            { letter: 'E', word: 'medicine' }, { letter: 'F', word: 'over' },
            { letter: 'G', word: 'average' }, { letter: 'H', word: 'valuable' },
            { letter: 'I', word: 'only' }, { letter: 'J', word: 'use' },
            { letter: 'K', word: 'usually' }, { letter: 'L', word: 'development' }
        ],
        answers: { '31': 'H', '32': 'G', '33': 'I', '34': 'A', '35': 'C', '36': 'K', '37': 'L', '38': 'F', '39': 'E', '40': 'D' },
        explanations: {
            '31': '【正确答案：H. valuable】空格所在句为"that seems like ___ advice"（那似乎是有价值的建议）。空格修饰 advice（建议），需要填入一个形容词。选项H "valuable"（有价值的）符合语境，"valuable advice"（有价值的建议）与后文"After all, college graduates..."（毕竟，大学毕业生……）呼应，说明上学找好工作看起来是个有价值的建议。干扰项：C "similar"（相似的）不与 advice 搭配成"相似建议"；K "usually"（通常）是副词；G "average"（平均的）不能修饰 advice。',
            '32': '【正确答案：G. average】空格所在句为"college graduates, on ___, earn almost $1 million more"（大学毕业生平均而言赚近100万美元更多）。"on ___"是固定搭配，需要填入一个名词。选项G "average"（平均）符合语境，"on average"（平均而言）是极为常见的固定搭配，用于引出统计数据。干扰项：K "usually"（通常）不能构成"on usually"；F "over"（超过）不能构成"on over"；L "development"（发展）不能构成"on development"表示"平均"。',
            '33': '【正确答案：I. only】空格所在句为"than those with ___ a high school education"（比那些仅有高中学历的人）。空格修饰"a high school education"，需要填入一个副词或形容词。选项I "only"（仅仅）符合语境，"those with only a high school education"（那些仅有高中学历的人）与"college graduates"（大学毕业生）形成对比。干扰项：K "usually"（通常）不能修饰名词短语；H "valuable"（有价值的）语义不通；C "similar"（相似的）语义不符。',
            '34': '【正确答案：A. get】空格所在句为"to earn a professional degree to ___ a high-paying job"（获得专业学位以得到一份高薪工作）。"to + 动词原形"构成不定式，空格需要填入动词原形。选项A "get"（得到）符合语境，"get a high-paying job"（得到一份高薪工作）是常见的固定搭配。干扰项：D "think"（想）不与"job"搭配成"think a job"；J "use"（使用）语义不通；H "valuable"是形容词。',
            '35': '【正确答案：C. similar】空格所在句为"like a doctor, dentist, lawyer or something ___"（比如医生、牙医、律师或类似的）。空格需要一个形容词，与前面的职业并列。选项C "similar"（相似的）符合语境，"something similar"（类似的）是极为常见的表达，指其他类似的传统高薪职业。干扰项：H "valuable"（有价值的）语义不同；G "average"（平均的）语义不通；E "medicine"（医药）是名词。',
            '36': '【正确答案：K. usually】空格所在句为"A professional degree holder ___ earns more than $2 million more"（专业学位持有者通常比平均水平多赚200多万美元）。空格修饰动词"earns"，需要一个副词。选项K "usually"（通常）符合语境，"usually earns"（通常赚到）表明这是一种普遍现象，不是绝对。干扰项：I "only"（仅仅）语义相反；F "over"（超过）是介词；L "development"是名词。',
            '37': '【正确答案：L. development】空格所在句为"Thanks to rapid ___ in artificial intelligence"（由于人工智能的快速发展）。"rapid ___ in"是固定搭配，需要填入一个名词。选项L "development"（发展）符合语境，"rapid development in artificial intelligence"（人工智能的快速发展）是极为常见的搭配，解释了下文"jobs are falling to machines"（工作岗位被机器抢走）的原因。干扰项：H "valuable"（有价值的）是形容词；G "average"（平均）不能与"rapid"搭配；A "get"（得到）是动词。',
            '38': '【正确答案：F. over】空格所在句为"jobs are being taken ___ by automation"（工作岗位正被自动化接管）。"take ___ by"是固定搭配，需要填入一个副词或介词。选项F "over"（接管）符合语境，"take over"（接管、取代）是极为常见的固定搭配，指工作岗位正被自动化取代。干扰项：I "only"（仅仅）不能构成"take only by"；J "use"是动词；K "usually"是副词。',
            '39': '【正确答案：E. medicine】空格所在句为"one of the professions of finance, ___ or law"（金融、医药或法律职业之一）。空格与"finance"（金融）和"law"（法律）并列，需要填入一个名词。选项E "medicine"（医药）符合语境，"finance, medicine or law"（金融、医药或法律）是传统三大高薪职业领域，与上文"doctor, dentist, lawyer"（医生、牙医、律师）呼应。干扰项：L "development"（发展）不是职业领域；J "use"（使用）不是职业；H "valuable"是形容词。',
            '40': '【正确答案：D. think】空格所在句为"you should ___ twice before continuing"（你应该在继续之前三思而行）。"should ___ twice"需要填入一个动词原形。选项D "think"（思考）符合语境，"think twice"（三思而行）是极为常见的固定搭配，表示要慎重考虑。干扰项：A "get"（得到）不能与"twice"搭配成"再想想"；J "use"（使用）语义不通；H "valuable"是形容词。'
        }
    },

    // ========== 25. 2025年10月 ==========
    {
        id: '2025-10',
        session: '2025年10月',
        articleTitle: 'The Word "Try"',
        passage: [
            'The word "try" is a small word yet it has an amazing impact upon us. If someone says, "I will try to do that," you [31] that they will not put their whole [32] into it, and may not even do it at all. How [33] do you use the word "try" when talking about the things that [34] to you?',
            'Think about something that you would like to [35], say it to yourself in two [36] ways, and see how you feel. Firstly say, "I will try to...," and [37] say, "I will do..." The latter makes you feel [38] than the former, right? It gives you a sense of [39]. Listen to the people around you. When they say they will try, notice if it gets done or not. Eliminate the word "try" from your [40] and see how your life improves.'
        ],
        wordBank: [
            { letter: 'A', word: 'matter' }, { letter: 'B', word: 'different' },
            { letter: 'C', word: 'determination' }, { letter: 'D', word: 'only' },
            { letter: 'E', word: 'achieve' }, { letter: 'F', word: 'know' },
            { letter: 'G', word: 'smart' }, { letter: 'H', word: 'next' },
            { letter: 'I', word: 'often' }, { letter: 'J', word: 'better' },
            { letter: 'K', word: 'dictionary' }, { letter: 'L', word: 'heart' }
        ],
        answers: { '31': 'F', '32': 'L', '33': 'I', '34': 'A', '35': 'E', '36': 'B', '37': 'H', '38': 'J', '39': 'C', '40': 'K' },
        explanations: {
            '31': '【正确答案：F. know】空格所在句为"If someone says, ‘I will try to do that,’ you ___ that they will not put their whole heart into it"（如果有人说"我会试着做那件事"，你知道他们不会投入全部心思）。"you ___ that..."需要填入一个动词原形，与"you"构成主谓关系。选项F "know"（知道）符合语境，"you know that..."（你知道……）是常见的表达，指"你会知道他们不会全力以赴"。干扰项：E "achieve"（实现）不能接"that"从句；I "often"（经常）是副词，不能作谓语；J "better"（更好）是形容词比较级。',
            '32': '【正确答案：L. heart】空格所在句为"they will not put their whole ___ into it"（他们不会把全部心思投入其中）。"put one\'s whole ___ into sth."是固定搭配，需要填入一个名词。选项L "heart"（心）符合语境，"put one\'s whole heart into"（全身心投入）是极为常见的固定搭配。干扰项：C "determination"（决心）虽然语义相关，但"put one\'s whole determination into"不是固定搭配；K "dictionary"（字典）语义不通；G "smart"（聪明的）是形容词。',
            '33': '【正确答案：I. often】空格所在句为"How ___ do you use the word ‘try’"（你多久使用一次"try"这个词？）。"How ___ do you..."需要填入一个副词，与"How often"构成问频率的问句。选项I "often"（经常）符合语境，"How often"（多久一次）是极为常见的疑问搭配，询问频率。干扰项：D "only"（仅仅）不能构成"How only"；H "next"（接下来）语义不通；J "better"（更好）不能构成"How better"。',
            '34': '【正确答案：A. matter】空格所在句为"when talking about the things that ___ to you"（当谈论对你重要的事情时）。"things that ___ to you"是一个定语从句，空格需要填入一个动词，与"to you"构成固定搭配。选项A "matter"（重要）符合语境，"matter to you"（对你重要）是固定搭配，指对你重要的事情。干扰项：E "achieve"（实现）不能与"to you"搭配；F "know"（知道）不能构成"know to you"；J "better"（更好）是形容词。',
            '35': '【正确答案：E. achieve】空格所在句为"Think about something that you would like to ___"（想想你希望实现的事情）。"would like to + 动词原形"构成不定式，空格需要填入动词原形。选项E "achieve"（实现）符合语境，"achieve something"（实现某事）是常见的固定搭配。干扰项：F "know"（知道）语义是"知道某事"，与"would like to"的搭配语义不如"achieve"贴切；A "matter"（重要）不与"would like to"搭配；I "often"（经常）是副词。',
            '36': '【正确答案：B. different】空格所在句为"say it to yourself in two ___ ways"（用两种不同的方式对自己说）。空格修饰 ways（方式），需要填入一个形容词。选项B "different"（不同的）符合语境，"in two different ways"（以两种不同的方式）指下面将要介绍的两种说法。干扰项：J "better"（更好）不能修饰"two...ways"表示"两种更好的方式"；G "smart"（聪明的）语义不通；H "next"（下一个）不能修饰"two...ways"。',
            '37': '【正确答案：H. next】空格所在句为"Firstly say, ‘I will try to...,’ and ___ say, ‘I will do...’"（首先说"我会试着……"，然后说"我会做……"）。"Firstly...and ___..."构成顺序结构，需要填入一个副词或序数词。选项H "next"（接下来）符合语境，"and next say"（然后说）与"Firstly say"（首先说）形成顺序对应。干扰项：J "better"（更好）不能表示顺序；D "only"（仅仅）语义不通；I "often"（经常）不表示顺序。',
            '38': '【正确答案：J. better】空格所在句为"The latter makes you feel ___ than the former"（后者让你感觉比前者更好）。"makes you feel ___ than"需要填入一个形容词比较级。选项J "better"（更好）符合语境，"feel better than"（感觉比……更好）是常见的比较结构，指说"我会做"比说"我会试着做"让人感觉更好。干扰项：G "smart"（聪明的）是原级，不能与"than"搭配；C "determination"（决心）是名词；H "next"（接下来）是副词。',
            '39': '【正确答案：C. determination】空格所在句为"It gives you a sense of ___"（它给你一种决心感）。"a sense of ___"是固定搭配，需要填入一个名词。选项C "determination"（决心）符合语境，"a sense of determination"（决心感）是极为常见的搭配，指说"我会做"能让你感到决心。干扰项：L "heart"（心）虽然可以构成"a sense of heart"，但不常见；K "dictionary"（字典）语义不通；J "better"（更好）是形容词。',
            '40': '【正确答案：K. dictionary】空格所在句为"Eliminate the word ‘try’ from your ___ and see how your life improves"（从你的字典中删除"try"这个词，看看你的生活如何改善）。"from your ___"需要填入一个名词，与"Eliminate the word ‘try’"（删除"try"这个词）呼应。选项K "dictionary"（字典）符合语境，"from your dictionary"（从你的字典中）是一种比喻用法，指从你的词汇中删除"try"这个词。干扰项：L "heart"（心）不能与"Eliminate the word"形成语义呼应；C "determination"（决心）语义不通；J "better"是形容词。'
        }
    },

    // ========== 26. 2026年4月 ==========
    {
        id: '2026-04',
        session: '2026年4月',
        articleTitle: 'My Hometown and My College Town',
        passage: [
            'My hometown and my college town have several things in common. First, both are [31] communities. My hometown, Gridlock, has a population of only about 10,000 people. Similarly, my college town, Subnormal, [32] of about 11,000 local residents. This population rises to 15,000 people when the college students are [33] classes. Second, both are located in rural areas. Gridlock is surrounded by farmland, which is devoted [34] to growing corn and beans. Likewise, Subnormal lies in the [35] of farmland that is used to [36] pigs and cattle. Third, both contain college campuses. Gridlock is [37] to Neutron College, which is famous for its Agricultural Economics program. In the same [38], Subnormal boasts the [39] campus of Quark College, which is well [40] for its Agricultural Engineering Department.'
        ],
        wordBank: [
            { letter: 'A', word: 'consists' }, { letter: 'B', word: 'mainly' },
            { letter: 'C', word: 'attending' }, { letter: 'D', word: 'clear' },
            { letter: 'E', word: 'raise' }, { letter: 'F', word: 'small' },
            { letter: 'G', word: 'home' }, { letter: 'H', word: 'known' },
            { letter: 'I', word: 'way' }, { letter: 'J', word: 'middle' },
            { letter: 'K', word: 'vein' }, { letter: 'L', word: 'major' }
        ],
        answers: { '31': 'F', '32': 'A', '33': 'C', '34': 'B', '35': 'J', '36': 'E', '37': 'G', '38': 'I', '39': 'L', '40': 'H' },
        explanations: {
            '31': '【正确答案：F. small】空格所在句为"both are ___ communities"（两者都是小社区）。空格修饰 communities（社区），需要填入一个形容词。选项F "small"（小的）符合语境，"small communities"（小社区）与后文"population of only about 10,000 people"（人口仅约1万人）和"about 11,000 local residents"（约1.1万居民）呼应。干扰项：L "major"（主要的）语义相反；D "clear"（清晰的）不能修饰 communities；H "known"（著名的）语义不符。',
            '32': '【正确答案：A. consists】空格所在句为"my college town, Subnormal, ___ of about 11,000 local residents"（我的大学城Subnormal由约1.1万当地居民构成）。"___ of"是固定搭配，需要填入一个动词第三人称单数。选项A "consists"（由……组成）符合语境，"consist of"（由……组成）是固定搭配，指小镇由1.1万居民构成。干扰项：E "raise"（提高）不与"of"搭配；H "known"（已知）是过去分词；C "attending"（参加）是现在分词。',
            '33': '【正确答案：C. attending】空格所在句为"when the college students are ___ classes"（当大学生们上课时）。"are ___ classes"是进行时结构，需要填入一个现在分词。选项C "attending"（参加、上）符合语境，"attending classes"（上课）是极为常见的搭配，指大学生来上学时人口增加。干扰项：B "mainly"（主要地）是副词；E "raise"（提高）是动词；H "known"（已知）是过去分词。',
            '34': '【正确答案：B. mainly】空格所在句为"farmland, which is devoted ___ to growing corn and beans"（农田，主要用于种植玉米和豆类）。空格修饰"to growing"，需要一个副词。选项B "mainly"（主要地）符合语境，"mainly devoted to growing corn"（主要用于种植玉米）说明农田的主要用途。干扰项：C "attending"（参加）是现在分词；D "clear"（清晰的）是形容词；H "known"（已知）是过去分词。',
            '35': '【正确答案：J. middle】空格所在句为"Subnormal lies in the ___ of farmland"（Subnormal位于农田的中间）。"in the ___ of"是固定搭配，需要填入一个名词。选项J "middle"（中间）符合语境，"in the middle of farmland"（在农田中间）是极为常见的搭配，指小镇位于农田环绕之中。干扰项：K "vein"（血管、纹理）语义不通；I "way"（路）不能构成"in the way of farmland"；G "home"（家）不能构成"in the home of farmland"。',
            '36': '【正确答案：E. raise】空格所在句为"farmland that is used to ___ pigs and cattle"（用于饲养猪和牛的农田）。"used to + 动词原形"构成不定式，空格需要填入动词原形。选项E "raise"（饲养）符合语境，"raise pigs and cattle"（饲养猪和牛）是极为常见的搭配，指农田用于养殖。干扰项：A "consists"（组成）是第三人称单数；H "known"（已知）是过去分词；C "attending"（参加）是现在分词。',
            '37': '【正确答案：G. home】空格所在句为"Gridlock is ___ to Neutron College"（Gridlock是Neutron学院的所在地）。"is ___ to"需要填入一个名词。选项G "home"（家园）符合语境，"is home to"（是……的家园/所在地）是极为常见的固定搭配，指Gridlock是Neutron学院的所在地。干扰项：H "known"（已知）不能构成"is known to"表示"所在地"；D "clear"（清晰的）不能作名词；J "middle"（中间）不能构成"is middle to"。',
            '38': '【正确答案：I. way】空格所在句为"In the same ___, Subnormal boasts the ___ campus of Quark College"（同样地，Subnormal拥有Quark学院的主校区）。"In the same ___"是固定搭配，需要填入一个名词。选项I "way"（方式）符合语境，"in the same way"（以同样的方式）是极为常见的固定搭配，用于引出与前文相似的情况。干扰项：K "vein"（血管、纹理）不能构成"in the same vein"表示"同样地"；G "home"（家）不能构成"in the same home"；J "middle"（中间）不能构成"in the same middle"。',
            '39': '【正确答案：L. major】空格所在句为"Subnormal boasts the ___ campus of Quark College"（Subnormal拥有Quark学院的主校区）。"the ___ campus"需要填入一个形容词。选项L "major"（主要的）符合语境，"major campus"（主校区）是极为常见的搭配，指Quark学院的主校区位于Subnormal。干扰项：F "small"（小的）语义相反；D "clear"（清晰的）不能修饰 campus；H "known"（著名的）不能修饰 campus 表示"主校区"。',
            '40': '【正确答案：H. known】空格所在句为"which is well ___ for its Agricultural Engineering Department"（它以农业工程系而闻名）。"is well ___ for"是固定搭配，需要填入一个过去分词。选项H "known"（已知）符合语境，"is well known for"（以……而闻名）是极为常见的固定搭配。干扰项：L "major"（主要的）是形容词；E "raise"（提高）是动词；C "attending"（参加）是现在分词。'
        }
    }
];