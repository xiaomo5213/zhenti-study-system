// ============================================================
// 自考英语专升本 · 阅读选择 · 题库数据（2013年10月—2026年4月）
// 每个考期包含：文章段落、翻译数据、5道试题（含答案来源句）
// 共26个考期，130道试题
// ============================================================

const exams = [
  // ==========================================================
  // 1. 2013年10月
  // ==========================================================
  {
    session: '2013年10月',
    articleTitle: 'A Good Lesson',
    articleParas: [
      { para: 0, text: 'After living in Europe for seven years, my parents decided that my family would move to the United States. We all looked forward to this. What would people think of us? For me, I hoped to be the hero of the class.' },
      { para: 1, text: 'I was not disappointed. All my classmates admired my experience, and I quickly became well known as "the French guy." I was very popular for a time. However, I was not interested in many things my classmates did, and it was hard for me to connect with them. I enjoyed listening to classical music, never watched TV, and almost never watched movies.' },
      { para: 2, text: 'I did not have a common background with my friends because I grew up in Europe. I had few friends, and fewer good friends. When I look back now, I realize I was a bit of an idiot to many people around me. I kept talking proudly about my experience. And I thought myself better than those around me because I lived in Europe but they didn\'t.' },
      { para: 3, text: 'I had decided I wanted better friends when my parents said that we were going to move again! I saw this as a perfect chance to get better friends, where people did not know of my unkind past.' },
      { para: 4, text: 'When we moved to California, I did not show off as I had done for five years. I did not tell everyone that I lived in Europe. I still listened to classical music, but I just kept my music to myself. Sure enough, I found that people like someone who is not typical but does not boast about it.' },
      { para: 5, text: 'Nothing can replace good friends, and if I had to control my temper and pride, it was well worth it.' }
    ],
    questions: [
      {
        q: '11. When I first moved to the US, I was very popular because of my',
        options: ['A. good appearance', 'B. outstanding talents', 'C. French accent', 'D. overseas experiences'],
        answer: 3,
        explanation: '定位第二段第一句："All my classmates admired my experience, and I quickly became well known as \'the French guy.\'" 该句明确指出，同学们羡慕的是"my experience"（我的经历），而作者之所以有这段经历，是因为他在欧洲生活了七年。因此，受欢迎的原因是"overseas experiences"（海外经历），对应选项D。A"good appearance"、B"outstanding talents"、C"French accent"在文中均无依据。',
        sourceSentence: 'All my classmates admired my experience, and I quickly became well known as "the French guy."'
      },
      {
        q: '12. I had few good friends partly because I',
        options: ['A. looked down upon my classmates', 'B. liked listening to classical music', 'C. never went to the movies', 'D. came from a very rich family'],
        answer: 0,
        explanation: '定位第三段倒数第二句："And I thought myself better than those around me because I lived in Europe but they didn\'t." 作者明确承认自己当时认为比周围人优越，这种心态即"看不起同学"。因此朋友少的部分原因是"looked down upon my classmates"，对应选项A。B"喜欢听古典音乐"和C"从不看电影"只是作者的个人爱好，不是朋友少的原因；D"来自富裕家庭"文中未提及。',
        sourceSentence: 'And I thought myself better than those around me because I lived in Europe but they didn\'t.'
      },
      {
        q: '13. The phrase "an idiot" (Line 3, Part. 3) most probably means',
        options: ['A. an actor', 'B. a cheater', 'C. a fool', 'D. a loser'],
        answer: 2,
        explanation: '定位第三段第三句："When I look back now, I realize I was a bit of an idiot to many people around me." 结合上下文，作者反思自己过去骄傲自大、自认为了不起，这种行为在别人看来很愚蠢。idiot在英语中本义就是"傻瓜、白痴"，与fool同义，对应选项C。A"演员"、B"骗子"、D"失败者"均与语境不符。',
        sourceSentence: 'When I look back now, I realize I was a bit of an idiot to many people around me.'
      },
      {
        q: '14. When we moved to California, I stopped',
        options: ['A. boasting about my experience', 'B. talking about people around me', 'C. enjoying the classical music alone', 'D. making friends with my classmates'],
        answer: 0,
        explanation: '定位第五段第一、二句："When we moved to California, I did not show off as I had done for five years. I did not tell everyone that I lived in Europe." "show off"意为"炫耀"，"did not show off"即"不再炫耀"；后一句进一步说明"不再告诉每个人我住过欧洲"。因此，作者停止的行为是"boasting about my experience"，对应选项A。B、C、D在文中均无依据。',
        sourceSentence: 'When we moved to California, I did not show off as I had done for five years. I did not tell everyone that I lived in Europe.'
      },
      {
        q: '15. The writer would probably agree that',
        options: ['A. good friends like the same kind of music', 'B. friends are more important than anything else', 'C. similar background is the key to friendship', 'D. a good friend never loses his/her temper'],
        answer: 1,
        explanation: '定位最后一段："Nothing can replace good friends, and if I had to control my temper and pride, it was well worth it." "Nothing can replace good friends"意为"没有什么能取代好朋友"，说明朋友在作者心中地位极高；后半句说为了朋友控制脾气和骄傲是值得的，进一步强调朋友的重要性。因此B"朋友比任何事都重要"最符合作者观点。A、C、D均属过度推断或无依据。',
        sourceSentence: 'Nothing can replace good friends, and if I had to control my temper and pride, it was well worth it.'
      }
    ]
  },

  // ==========================================================
  // 2. 2014年04月
  // ==========================================================
  {
    session: '2014年04月',
    articleTitle: 'Kindness of Strangers',
    articleParas: [
      { para: 0, text: 'At the store where I worked, I noticed a young boy of about ten shopping alone with his school list. He placed everything in his basket and went to the checkout.' },
      { para: 1, text: 'The young shop assistant told him the total price, $37.60. The boy was instantly disappointed and said he had only been given $20. He took out one thing at a time until he got down to his $20. With eyes full of tears, he asked if he could phone his mum to pick him up. When he got through, it appeared that even this was inconvenient for his mother.' },
      { para: 2, text: 'He bit hard on his lip to stop the tears and walked outside to wait on the bench in front of the shop. This was all too much for the young assistant who had served him and she said, "I wish I could afford to pay for the rest of his things." One of the other girls said she had a few dollars. Then two others said they could help as well.' },
      { para: 3, text: 'These four young girls pooled their money and found that they had more than enough money for the boy\'s extra purchases. So they upgraded his pens and pencils to top-quality ones, then took the bag out to the boy on the seat. His young face changed from sadness to the most beautiful smile. His mother arrived much later to pick him up. Instead of running to the car, he ran back into the store and called out, "Thank you!"' },
      { para: 4, text: 'I was so proud of my team that day. They did something wonderful for that boy and also found the pleasure of giving was as great as receiving.' }
    ],
    questions: [
      {
        q: '11. The boy went to the store to',
        options: ['A. buy some school things', 'B. meet his mother', 'C. find a part-time job', 'D. look for a friend'],
        answer: 0,
        explanation: '定位第一段第一句："At the store where I worked, I noticed a young boy of about ten shopping alone with his school list." 关键词"shopping"（购物）和"school list"（学校用品清单）直接说明男孩是来购买学习用品的，对应选项A。B"见妈妈"、C"找兼职"、D"找朋友"均与原文不符。',
        sourceSentence: 'At the store where I worked, I noticed a young boy of about ten shopping alone with his school list.'
      },
      {
        q: '12. At the checkout, the boy found that he',
        options: ['A. did not have enough money', 'B. did not have his money on him', 'C. forgot to ask his mum for money', 'D. had lost his money in the store'],
        answer: 0,
        explanation: '定位第二段第一、二句："The young shop assistant told him the total price, $37.60. The boy was instantly disappointed and said he had only been given $20." 总价37.60美元，男孩只有20美元，钱不够，因此"instantly disappointed"（立刻失望）。对应选项A。B"身上没带钱"、C"忘记向妈妈要钱"、D"在店里丢了钱"均与原文不符。',
        sourceSentence: 'The young shop assistant told him the total price, $37.60. The boy was instantly disappointed and said he had only been given $20.'
      },
      {
        q: '13. The boy walked out of the store to',
        options: ['A. wait for his mum', 'B. rest on the bench', 'C. get more money', 'D. look for a friend'],
        answer: 0,
        explanation: '定位第二段后半部分：男孩打电话"asked if he could phone his mum to pick him up"（问能否打电话让妈妈来接他），接着第三段开头"He bit hard on his lip to stop the tears and walked outside to wait on the bench in front of the shop." 可见他走出去是为了等妈妈，对应选项A。B"在长椅上休息"是表面行为，不是目的；C、D无依据。',
        sourceSentence: 'He bit hard on his lip to stop the tears and walked outside to wait on the bench in front of the shop.'
      },
      {
        q: '14. The shop assistants were',
        options: ['A. curious', 'B. wealthy', 'C. well-trained', 'D. kind-hearted'],
        answer: 3,
        explanation: '定位第三、四段：店员们主动提出"I wish I could afford to pay for the rest of his things."，然后四个女孩"pooled their money"（凑钱），不仅付了钱还"upgraded his pens and pencils to top-quality ones"（把文具升级为最好的）。这些行为充分体现了她们"kind-hearted"（心地善良），对应选项D。A"好奇"、B"富有"、C"训练有素"均不能概括她们的行为动机。',
        sourceSentence: 'These four young girls pooled their money and found that they had more than enough money for the boy\'s extra purchases. So they upgraded his pens and pencils to top-quality ones'
      },
      {
        q: '15. The boy ran back into the store to',
        options: ['A. do extra shopping', 'B. express his thanks', 'C. return the money', 'D. take his bag out'],
        answer: 1,
        explanation: '定位第四段最后一句："Instead of running to the car, he ran back into the store and called out, \'Thank you!\'" 男孩没有跑向汽车，而是跑回商店喊"谢谢你们！"，明确表明他是回来表达感谢的，对应选项B。A"额外购物"、C"还钱"、D"取袋子"均与原文不符。',
        sourceSentence: 'Instead of running to the car, he ran back into the store and called out, "Thank you!"'
      }
    ]
  },

  // ==========================================================
  // 3. 2014年10月
  // ==========================================================
  {
    session: '2014年10月',
    articleTitle: 'Talk to Your Kids about Their Eating Habits Carefully',
    articleParas: [
      { para: 0, text: 'Weight is never an easy subject. It can be risky for parents to raise the issue of eating habits and weight with their kids.' },
      { para: 1, text: '"No kid ever lost weight because his mother told him he was fat," a friend told me when I was worried about my son\'s weight.' },
      { para: 2, text: 'It turns out she was right, according to a new study. The study was directed by Dr. Berge at University of Minnesota. She found that kids whose parents discussed eating in a healthy way were less likely to have eating problems. But 64% of the kids whose parents focused on their weight turned to unhealthy eating behaviors. Some kids went on extreme diets, and others even ate no food. So eating disorders were caused. Things were worse when fathers joined in the discussions with their daughters and focused on weight. "Fathers should never comment on their daughters\' weight," says Berge. Instead, she suggests, fathers should focus on their daughters\' interests. That can help them feel loved and confident enough to work on their weight issues.' },
      { para: 3, text: 'How should parents talk to kids about eating behaviors? According to Berge, they should avoid focusing on how much their kids weigh. They should talk to them about being healthy. Don\'t compare them with others. Ideally, both parents should share the responsibility. If that\'s not possible, choose the parent whose words cause the least amount of stress and who demonstrates healthy eating.' }
    ],
    questions: [
      {
        q: '11. The writer\'s friend advised her not to',
        options: ['A. worry about her son\'s weight', 'B. take the risk of gaining weight', 'C. change her own eating habits', 'D. talk to her son about his weight'],
        answer: 3,
        explanation: '定位第二段："No kid ever lost weight because his mother told him he was fat," a friend told me when I was worried about my son\'s weight. 朋友的话意思是"从来没有孩子因为妈妈说他胖而减肥成功"，言外之意是告诉孩子他胖不仅没用，反而有风险。因此朋友建议不要和孩子谈论体重，对应选项D。A"担心儿子体重"是作者的行为，不是朋友的建议；B、C无依据。',
        sourceSentence: '"No kid ever lost weight because his mother told him he was fat," a friend told me when I was worried about my son\'s weight.'
      },
      {
        q: '12. The study found that some kids had fewer eating problems because they',
        options: ['A. learned to eat healthily', 'B. took part in the study', 'C. focused on their weight', 'D. believed the scientists'],
        answer: 0,
        explanation: '定位第三段第三句："She found that kids whose parents discussed eating in a healthy way were less likely to have eating problems." 研究发现，父母以健康方式讨论饮食的孩子，出现饮食问题的可能性更小。也就是说，这些孩子学到了健康的饮食方式，对应选项A。B"参加研究"、C"关注体重"、D"相信科学家"均不是原因。',
        sourceSentence: 'She found that kids whose parents discussed eating in a healthy way were less likely to have eating problems.'
      },
      {
        q: '13. When told about their fatness, some kids',
        options: ['A. felt helpless', 'B. became angry', 'C. began to eat no food', 'D. refused to take any advice'],
        answer: 2,
        explanation: '定位第三段第五句："Some kids went on extreme diets, and others even ate no food." 说明有些孩子进行极端节食，甚至完全不吃东西。对应选项C"began to eat no food"。A"感到无助"、B"变得愤怒"、D"拒绝接受建议"文中均未提及。',
        sourceSentence: 'Some kids went on extreme diets, and others even ate no food.'
      },
      {
        q: '14. If a father focuses on his daughter\'s interests, she will feel',
        options: ['A. amused', 'B. encouraged', 'C. surprised', 'D. challenged'],
        answer: 1,
        explanation: '定位第三段最后一句："That can help them feel loved and confident enough to work on their weight issues." 父亲关注女儿的兴趣，能帮助她们感到被爱和自信，从而有足够的力量处理体重问题。这种被爱和自信的感觉就是一种"encouraged"（鼓励），对应选项B。A"好笑"、C"惊讶"、D"挑战"均不准确。',
        sourceSentence: 'That can help them feel loved and confident enough to work on their weight issues.'
      },
      {
        q: '15. When talking to their kids about eating behaviors, parents should',
        options: ['A. focus on being healthy', 'B. use short and simple words', 'C. respect their kids\' views', 'D. compare their kids with others'],
        answer: 0,
        explanation: '定位最后一段第二句："They should talk to them about being healthy." 明确建议父母和孩子谈论保持健康，对应选项A。B"用简短的话"、C"尊重孩子观点"、D"把孩子和别人比较"（原文明确说Don\'t compare them with others）均与原文不符。',
        sourceSentence: 'They should talk to them about being healthy.'
      }
    ]
  },

  // ==========================================================
  // 4. 2015年04月
  // ==========================================================
  {
    session: '2015年04月',
    articleTitle: 'Just Introduce Yourself',
    articleParas: [
      { para: 0, text: 'It\'s so easy to walk into your first job and feel like a stranger in a strange land. But you don\'t have to stay that way, and you shouldn\'t.' },
      { para: 1, text: 'You have to remind yourself to kick your shyness away and introduce yourself. Just a handshake will do. Ask the supervisor who hired you to introduce you around a bit. That\'s the best way to make contacts. Then you\'ll know what to do and say when you meet these people again.' },
      { para: 2, text: 'Don\'t do what my friend Sue did at her first job at Entertainment Weekly. "That is one of my biggest regrets: I hardly talked to anyone at all when I was there. I was scared and just thought people would talk to me first. For a long time, I was hung up on the thought that if someone was older, I respected them automatically. And even if someone started on Monday, and I started Tuesday, I just felt they had more experience. In the area I worked for four months, I hardly spoke to these people," she said.' },
      { para: 3, text: '"Of course, now I realize that was the most stupid thing. If I could do that again, I\'d remember that it\'s so important not to feel shy about introducing yourself. It\'s not like you have to be very bold, ready to take over the place. Just introduce yourself and ask if there is anything you can do for them. That breaks the ice."' },
      { para: 4, text: 'Sue believes that if she had introduced herself around a bit, there would be just no telling what other opportunities or what other acquaintances she might have now. Not that she regrets where she is now at all. But had she talked to more people at her first job, "maybe it would have helped me get somewhere sooner," she said.' }
    ],
    questions: [
      {
        q: '11. How do people usually feel when meeting people at their first job?',
        options: ['A. Shy.', 'B. Puzzled.', 'C. Curious.', 'D. Excited.'],
        answer: 0,
        explanation: '定位第一段第一句："It\'s so easy to walk into your first job and feel like a stranger in a strange land." 初入职场感觉像在陌生土地上的陌生人。第二段又提到"kick your shyness away"（摆脱害羞），说明初入职场通常感到害羞，对应选项A。B"困惑"、C"好奇"、D"兴奋"均不是原文强调的重点。',
        sourceSentence: 'It\'s so easy to walk into your first job and feel like a stranger in a strange land.'
      },
      {
        q: '12. When Sue started her first job, she ______.',
        options: ['A. introduced herself around', 'B. asked her supervisor for help', 'C. shook hands with colleagues', 'D. waited for others to talk to her'],
        answer: 3,
        explanation: '定位第三段Sue的自述："I was scared and just thought people would talk to me first." 她害怕，只是想着别人会先跟她说话。也就是说，她等着别人主动，对应选项D。A"四处介绍自己"、B"向主管求助"、C"和同事握手"均与Sue实际做法相反。',
        sourceSentence: 'I was scared and just thought people would talk to me first.'
      },
      {
        q: '13. "I was hung up on the thought" in Paragraph 3 probably means "I ______".',
        options: ['A. believed', 'B. guessed', 'C. learned', 'D. admitted'],
        answer: 0,
        explanation: '定位第三段："For a long time, I was hung up on the thought that if someone was older, I respected them automatically." be hung up on 意为"对……念念不忘、固执地认为"。结合后文"如果某人年长，我就自动尊敬他们""即使晚一天入职也觉得别人更有经验"，说明Sue一直"认为/相信"这些想法，对应选项A"believed"。B"猜测"、C"学会"、D"承认"均不如A准确。',
        sourceSentence: 'For a long time, I was hung up on the thought that if someone was older, I respected them automatically.'
      },
      {
        q: '14. What did Sue suggest we do at our first job?',
        options: ['A. Seize every possible opportunity.', 'B. Get ready to take over the place.', 'C. Make active contacts with others.', 'D. Stay humble before the older staff.'],
        answer: 2,
        explanation: '定位第四段Sue的建议："Just introduce yourself and ask if there is anything you can do for them. That breaks the ice." 她建议主动介绍自己，问问有没有什么能帮忙的，这能打破僵局。也就是说，要主动与人接触，对应选项C"Make active contacts with others"。A"抓住每个机会"、B"准备接管"、D"对老员工保持谦卑"均不是Sue建议的重点。',
        sourceSentence: 'Just introduce yourself and ask if there is anything you can do for them. That breaks the ice.'
      },
      {
        q: '15. In talking about her first job experience, Sue expressed a sense of ______.',
        options: ['A. relief', 'B. regret', 'C. failure', 'D. longing'],
        answer: 1,
        explanation: '定位第三段Sue的第一句话："That is one of my biggest regrets: I hardly talked to anyone at all when I was there." 她明确说这是她"最大的遗憾之一"。全文反复表达后悔当初没有主动介绍自己，对应选项B"regret"（遗憾/后悔）。A"解脱"、C"失败"、D"渴望"均不准确。',
        sourceSentence: 'That is one of my biggest regrets: I hardly talked to anyone at all when I was there.'
      }
    ]
  },

  // ==========================================================
  // 5. 2015年10月
  // ==========================================================
  {
    session: '2015年10月',
    articleTitle: 'Living in Brazil and Switzerland',
    articleParas: [
      { para: 0, text: 'Moving to a different city may seem difficult. You have to change schools and get used to your new home. But you can always go back to that city to visit. When you move to another country, things are different. However, difficult as it may be, the experience can be rewarding.' },
      { para: 1, text: 'My dad, a Brazilian, is really funny and can make friends quickly. My mom, a Swiss, is usually quiet and a bit shy. She likes to be organized, but my dad never makes plans. She enjoys staying home, but my dad always wants to go out. Swiss and Brazilian -- what a mix!' },
      { para: 2, text: 'After my parents got married, they moved to Switzerland. There they had my brother and me. When I was two, we moved to Brazil. During my childhood we visited Switzerland every year.' },
      { para: 3, text: 'Many people ask me where I prefer to live: Brazil or Switzerland. It\'s really hard to answer because I love both countries. Brazil is a big country with many states and people. There are multiple dialects and many types of foods. People here have beautiful smiles and are always happy, even if they are poor. In the south the climate is cool, but in the north it\'s hot and humid.' },
      { para: 4, text: 'Switzerland, on the other hand, is small but beautiful and clean. There are four languages in that tiny country. People there are very different from Brazilians: they are wealthy, independent, and organized. The food is delicious, and of course, the famous Swiss chocolate is great, and the climate is dry and cool.' },
      { para: 5, text: 'I love both countries. In Switzerland, it\'s pleasant, calm, and peaceful everywhere. I enjoyed my stay there very much. But now I am happy here in Brazil. I feel excited and at home.' }
    ],
    questions: [
      {
        q: '11. The author\'s parents',
        options: ['A. share similar interests', 'B. have different jobs', 'C. have different personalities', 'D. enjoy reading books'],
        answer: 2,
        explanation: '定位第二段：爸爸是巴西人，funny（有趣）、can make friends quickly（能快速交朋友）、never makes plans（从不做计划）、always wants to go out（总想出门）；妈妈是瑞士人，quiet（安静）、a bit shy（有点害羞）、likes to be organized（喜欢有条理）、enjoys staying home（喜欢待在家）。两者性格截然不同，对应选项C"have different personalities"。A"兴趣相似"与原文相反；B"工作不同"、D"喜欢读书"文中未提及。',
        sourceSentence: 'My dad, a Brazilian, is really funny and can make friends quickly. My mom, a Swiss, is usually quiet and a bit shy.'
      },
      {
        q: '12. When the author was a child, the family used to',
        options: ['A. have many good friends', 'B. move between the two countries', 'C. speak two dialects', 'D. visit Brazil from time to time'],
        answer: 1,
        explanation: '定位第三段："After my parents got married, they moved to Switzerland. There they had my brother and me. When I was two, we moved to Brazil. During my childhood we visited Switzerland every year." 家庭先住在瑞士，后搬到巴西，童年时每年回瑞士，说明在两国之间往返，对应选项B"move between the two countries"。A"有很多好朋友"、C"说两种方言"、D"偶尔访问巴西"（原文是住在巴西、访问瑞士）均不准确。',
        sourceSentence: 'After my parents got married, they moved to Switzerland. There they had my brother and me. When I was two, we moved to Brazil. During my childhood we visited Switzerland every year.'
      },
      {
        q: '13. The author thinks Brazilians are',
        options: ['A. organized', 'B. independent', 'C. indifferent', 'D. optimistic'],
        answer: 3,
        explanation: '定位第四段（描述巴西）："People here have beautiful smiles and are always happy, even if they are poor." 巴西人拥有美丽的笑容，总是很快乐，即使贫穷。这种"always happy"的态度就是"optimistic"（乐观的），对应选项D。A"有条理"、B"独立"是第四段描述瑞士人的特点；C"冷漠"与原文相反。',
        sourceSentence: 'People here have beautiful smiles and are always happy, even if they are poor.'
      },
      {
        q: '14. According to the text, Switzerland',
        options: ['A. is famous for its chocolate.', 'B. has many big cities.', 'C. has a lot in common with Brazil.', 'D. is hot and humid.'],
        answer: 0,
        explanation: '定位第五段（描述瑞士）："The food is delicious, and of course, the famous Swiss chocolate is great" 明确提到瑞士著名的巧克力很棒，对应选项A"is famous for its chocolate"。B"有很多大城市"、C"与巴西有很多共同点"（原文强调两国差异很大）、D"炎热潮湿"（原文说瑞士气候dry and cool，巴西北部才是hot and humid）均错误。',
        sourceSentence: 'The food is delicious, and of course, the famous Swiss chocolate is great, and the climate is dry and cool.'
      },
      {
        q: '15. According to the author, living in two different cultures is a(n)',
        options: ['A. appealing idea', 'B. difficult decision', 'C. expensive choice', 'D. pleasant experience'],
        answer: 3,
        explanation: '定位第一段最后一句："However, difficult as it may be, the experience can be rewarding." 以及最后一段："I love both countries. In Switzerland, it\'s pleasant, calm, and peaceful everywhere. I enjoyed my stay there very much. But now I am happy here in Brazil. I feel excited and at home." 作者虽然承认有困难，但整体上认为这段经历是"rewarding"（有回报的）、愉快的，对应选项D"pleasant experience"。A"吸引人的想法"、B"艰难的决定"、C"昂贵的选择"均不准确。',
        sourceSentence: 'However, difficult as it may be, the experience can be rewarding.'
      }
    ]
  },

  // ==========================================================
  // 6. 2016年04月
  // ==========================================================
  {
    session: '2016年04月',
    articleTitle: 'Those Who Ride on Two Wheels',
    articleParas: [
      { para: 0, text: 'In the United States there are six million tennis players and twelve million golfers. These figures would not surprise most people. But many would be surprised to learn that twenty million Americans ride motorcycles. Few people realize that motorcycling is fast becoming one of America\'s most popular sports.' },
      { para: 1, text: 'According to the Cycle News, many kinds of people enjoy motorcycling. They include black people and white people, businessmen, professionals, and blue-collar workers. Among them, about 55% are businessmen, 3% are in the professions and 9% in government service.' },
      { para: 2, text: 'Such information is offered by the Cycle News in the hope of improving the general public\'s impression of the sport. The public has tended to believe that all motorcyclists are wild and lawless young men.' },
      { para: 3, text: 'There are several things about motorcycling that the average citizen dislikes. A motorcyclist\'s appearance has something to do with this dislike. Motorcyclists often look dirty; in fact, they are dirty. On the road, there is little to protect them from mud. For practical reasons, they often dress in old clothing which looks much less respectable than the clothing of people who ride in cars. For the same reason, motorcyclists usually wear dark colors. Perhaps this helps to explain why they are sometimes suspected of having bad natures.' },
      { para: 4, text: 'Probably motorcycles themselves also produce anger and fear. They are noisy, though some trucks are even noisier. But trucks are acceptable because they perform a needed service. Motorcycles, on the other hand, make an uncomfortable noise just to give their riders pleasure. Roaring along quiet streets, they wake sleeping families and make babies cry.' },
      { para: 5, text: 'Yet, as motorcycling becomes more and more common, it will be interesting to see how people in general feel about the sport. Perhaps it will someday become as "respectable" as tennis or golf.' }
    ],
    questions: [
      {
        q: '11. According to the text, more and more Americans like',
        options: ['A. playing tennis', 'B. playing golf', 'C. motorcycling', 'D. car-racing'],
        answer: 2,
        explanation: '定位第一段最后一句："Few people realize that motorcycling is fast becoming one of America\'s most popular sports." "fast becoming"（迅速成为）说明骑摩托车越来越受欢迎，对应选项C"motorcycling"。A"打网球"、B"打高尔夫"虽然文中提到人数，但没有说"越来越多"；D"赛车"文中未提及。',
        sourceSentence: 'Few people realize that motorcycling is fast becoming one of America\'s most popular sports.'
      },
      {
        q: '12. According to the Cycle News, over half of the motorcyclists are',
        options: ['A. black people', 'B. white people', 'C. businessmen', 'D. professionals'],
        answer: 2,
        explanation: '定位第二段最后一句："Among them, about 55% are businessmen, 3% are in the professions and 9% in government service." 55%超过一半，且明确对应"businessmen"，对应选项C。A"黑人"、B"白人"虽然文中提到，但没有说超过一半；D"专业人士"只占3%。',
        sourceSentence: 'Among them, about 55% are businessmen, 3% are in the professions and 9% in government service.'
      },
      {
        q: '13. The Cycle News wants to',
        options: ['A. make motorcyclists lawful citizens', 'B. improve the image of motorcycling', 'C. persuade people to buy motorcycles', 'D. raise the status of blue-collar workers'],
        answer: 1,
        explanation: '定位第三段第一句："Such information is offered by the Cycle News in the hope of improving the general public\'s impression of the sport." 明确说明提供这些信息是为了"improving the general public\'s impression"（改善公众印象），对应选项B"improve the image of motorcycling"。A"使摩托车手成为守法公民"、C"说服人们买摩托车"、D"提高蓝领地位"均不是Cycle News的目的。',
        sourceSentence: 'Such information is offered by the Cycle News in the hope of improving the general public\'s impression of the sport.'
      },
      {
        q: '14. Motorcyclists usually wear dark colors because',
        options: ['A. they want to be respectable', 'B. they want to be impressive', 'C. the colors look different', 'D. the colors suit their sport'],
        answer: 3,
        explanation: '定位第四段："For practical reasons, they often dress in old clothing which looks much less respectable than the clothing of people who ride in cars. For the same reason, motorcyclists usually wear dark colors." 关键词"For practical reasons"和"For the same reason"说明穿深色是出于实际需要（路上灰尘多、容易脏），即"the colors suit their sport"（颜色适合这项运动），对应选项D。A"想受尊重"与原文相反；B"想给人深刻印象"、C"颜色看起来不同"均无依据。',
        sourceSentence: 'For the same reason, motorcyclists usually wear dark colors.'
      },
      {
        q: '15. Some people dislike the motorcycle because it is',
        options: ['A. noisy', 'B. heavy', 'C. costly', 'D. illegal'],
        answer: 0,
        explanation: '定位第五段："Probably motorcycles themselves also produce anger and fear. They are noisy..." 直接指出摩托车"noisy"（噪音大），会让人们产生愤怒和恐惧，对应选项A。B"重"、C"贵"、D"违法"文中均未提及。',
        sourceSentence: 'They are noisy, though some trucks are even noisier.'
      }
    ]
  },

  // ==========================================================
  // 7. 2016年10月
  // ==========================================================
  {
    session: '2016年10月',
    articleTitle: 'Origin of Restaurant',
    articleParas: [
      { para: 0, text: 'It is estimated that there are more than 8 million restaurants in the world today. So it might surprise you to learn that restaurants as we know have only existed for a few centuries. Before 1765, there were no restaurants. There was nowhere in which a server brought you food and drink that you chose from a menu. In fact, there were no menus anywhere.' },
      { para: 1, text: 'There were places where travelers could eat centuries before that. The countryside was full of inns that would serve food. And there were bars where one could get a drink. The rich could also eat meals supplied by private cooks. But there was nothing that could be called a "restaurant".' },
      { para: 2, text: 'A Frenchman changed that. In 1765, he opened a place in Paris that sold soups. On his sign, he used the term "restaurants" to describe what he was selling. Soups were considered "restorative", so he called them "restaurants". Finally, people started buying his soups even when not ill. And as time went on, people began to use the term "restaurant" to refer to the place where soup was sold rather than the soup itself. More "restaurants" opened up in France, and people began to buy soups more regularly.' },
      { para: 3, text: 'Then, restaurants in Paris began to serve food other than soups. In the 1780s, menus started to appear. By the 1800s, there were many types of restaurants, and the restaurant concept was spread throughout the British Empire.' },
      { para: 4, text: 'A slow start gave way to rapid growth. Cities and towns around the world are filled with restaurants today. It is estimated that there are 1.6 million restaurants in Europe. In America, there are nearly a half million restaurants. Today, diners have millions of choices.' }
    ],
    questions: [
      {
        q: '11. Before 1765, travelers could have meals at a(n)',
        options: ['A. bar', 'B. inn', 'C. restaurant', 'D. canteen'],
        answer: 1,
        explanation: '定位第二段："There were places where travelers could eat centuries before that. The countryside was full of inns that would serve food." 明确说旅行者可以在"inns"（客栈）吃饭，对应选项B。A"bar"只是喝酒的地方；C"restaurant"在1765年之前不存在（第一段明确说Before 1765, there were no restaurants）；D"canteen"文中未提及。',
        sourceSentence: 'There were places where travelers could eat centuries before that. The countryside was full of inns that would serve food.'
      },
      {
        q: '12. The first "restaurant" only served',
        options: ['A. soups', 'B. desserts', 'C. drinks', 'D. fruits'],
        answer: 0,
        explanation: '定位第三段："In 1765, he opened a place in Paris that sold soups." 第一家"restaurant"只卖汤（soups），对应选项A。B"甜点"、C"饮料"、D"水果"均与原文不符。',
        sourceSentence: 'In 1765, he opened a place in Paris that sold soups.'
      },
      {
        q: '13. The word "restorative" (Line 3, Para. 3) most probably means',
        options: ['A. having a special flavor', 'B. making you happier', 'C. having a pleasant smell', 'D. making you healthier'],
        answer: 3,
        explanation: '定位第三段："Soups were considered \'restorative\', so he called them \'restaurants\'." 结合上下文，汤被认为有"restorative"（恢复健康的）功效，所以人们即使没病也开始买。restorative与"making you healthier"（让你更健康）同义，对应选项D。A"有特殊风味"、B"让你更快乐"、C"有宜人气味"均不准确。',
        sourceSentence: 'Soups were considered "restorative", so he called them "restaurants".'
      },
      {
        q: '14. The restaurant concept started in',
        options: ['A. America', 'B. Britain', 'C. Germany', 'D. France'],
        answer: 3,
        explanation: '定位第三段："A Frenchman changed that. In 1765, he opened a place in Paris that sold soups." 以及第四段："By the 1800s, there were many types of restaurants, and the restaurant concept was spread throughout the British Empire." 餐厅概念起源于法国（Paris），然后传播到英国等地，对应选项D"France"。A"美国"、B"英国"、C"德国"均不是起源地。',
        sourceSentence: 'A Frenchman changed that. In 1765, he opened a place in Paris that sold soups.'
      },
      {
        q: '15. The best title for this text is',
        options: ['A. Definition of Restaurant', 'B. Importance of Restaurant', 'C. Origin of Restaurant', 'D. Types of Restaurant'],
        answer: 2,
        explanation: '通读全文，文章从"Before 1765, there were no restaurants"开始，讲述了餐厅如何从1765年法国人卖汤开始，逐渐演变到提供各种食物、出现菜单、传播到世界各地。全文主线是餐厅的"起源"和"发展历史"，对应选项C"Origin of Restaurant"。A"定义"、B"重要性"、D"类型"均不能概括全文主旨。',
        sourceSentence: 'Before 1765, there were no restaurants.'
      }
    ]
  },

  // ==========================================================
  // 8. 2017年04月
  // ==========================================================
  {
    session: '2017年04月',
    articleTitle: 'Dog Training',
    articleParas: [
      { para: 0, text: 'Dog training is a must for all dogs. It is more than just telling your dog to stop doing what he\'s doing; it is the process of teaching a dog to exhibit certain desired behaviors in specific circumstances. Proper dog training is not a "quick fix" -- it is an ongoing process.' },
      { para: 1, text: 'Dog training also involves teaching the owner. Going through dog training is something that every dog owner should do. It is like going to school over again. It is all about communication, and you need to learn to communicate with your dog.' },
      { para: 2, text: 'Training your dog to "sit" is probably the first thing you will train your dog to do. When you want your dog to sit, hold a treat above his head and say "sit". As the dog sits, say "sit" again and then immediately give him the treat. Your dog should drop into a "sit" position in order to reach the food.' },
      { para: 3, text: 'Teaching your dog to fetch promotes bonding. To do this, first throw a ball, and give the command "fetch". As he starts to run towards it, yell "fetch" again. Instead of a ball, you may use the object your dog loves most. Do not play fetch with heavy items or sticks, however, as this can damage the dog\'s teeth or injure the dog.' },
      { para: 4, text: 'A well-trained dog should remain where his owner commands, so "stay" is an important command in dog training as well. Since it is more involved, which will be the subject of another article.' },
      { para: 5, text: 'Dog training is a very physical activity, so be prepared to be tired. And dog training is never without risk of injury, especially with more aggressive dogs. One major mistake many dog owners make is to think that the dog training is over. Training your dog continues throughout your dog\'s life.' }
    ],
    questions: [
      {
        q: '11. What does the author say about dog training?',
        options: ['A. It is necessary for every dog.', 'B. It is a quick fix.', 'C. It is only for aggressive dogs.', 'D. It is an easy process.'],
        answer: 0,
        explanation: '定位第一段第一句："Dog training is a must for all dogs." "a must"意为"必须做的事"，说明每只狗都需要训练，对应选项A"It is necessary for every dog"。B"快速解决方案"与原文"not a quick fix"相反；C"只针对有攻击性的狗"、D"简单过程"均与原文不符。',
        sourceSentence: 'Dog training is a must for all dogs.'
      },
      {
        q: '12. What is the most important thing for dog trainers to do?',
        options: ['A. Give dogs timely encouragement.', 'B. Create right circumstances for dogs.', 'C. Teach dogs desired behaviors.', 'D. Learn to communicate with dogs.'],
        answer: 3,
        explanation: '定位第二段最后一句："It is all about communication, and you need to learn to communicate with your dog." 明确说训练的核心是"communication"（沟通），主人需要学会和狗沟通，对应选项D"Learn to communicate with dogs"。A"及时鼓励"、B"创造合适环境"、C"教狗期望的行为"虽然文中提到，但不是"最重要"的。',
        sourceSentence: 'It is all about communication, and you need to learn to communicate with your dog.'
      },
      {
        q: '13. Dog trainers usually train their dogs first to',
        options: ['A. stay', 'B. fetch', 'C. sit', 'D. jump'],
        answer: 2,
        explanation: '定位第三段第一句："Training your dog to \'sit\' is probably the first thing you will train your dog to do." 明确说"sit"（坐下）可能是你训练狗的第一件事，对应选项C。A"stay"、B"fetch"虽然文中提到，但不是第一项；D"jump"文中未提及。',
        sourceSentence: 'Training your dog to "sit" is probably the first thing you will train your dog to do.'
      },
      {
        q: '14. To train dogs to fetch, trainers often start with a',
        options: ['A. ball', 'B. treat', 'C. trick', 'D. stick'],
        answer: 0,
        explanation: '定位第四段第二句："To do this, first throw a ball, and give the command \'fetch\'." 明确说训练"fetch"（捡回）时，先扔一个"ball"（球），对应选项A。B"零食"是训练"sit"用的；C"把戏"、D"棍子"（原文说不要用棍子）均不符合。',
        sourceSentence: 'To do this, first throw a ball, and give the command "fetch".'
      },
      {
        q: '15. Many dog owners tend to think that dog training',
        options: ['A. costs much money', 'B. takes a short time', 'C. can be very tiring', 'D. can be dangerous'],
        answer: 1,
        explanation: '定位最后一段第三句："One major mistake many dog owners make is to think that the dog training is over. Training your dog continues throughout your dog\'s life." 许多狗主人犯的一个主要错误是认为训练结束了，而实际上训练要持续狗的一生。这说明他们误以为训练"takes a short time"（花的时间短），对应选项B。A"花费很多钱"、C"非常累"、D"危险"虽然文中提到，但不是狗主人"认为"的内容。',
        sourceSentence: 'One major mistake many dog owners make is to think that the dog training is over.'
      }
    ]
  },

  // ==========================================================
  // 9. 2017年10月
  // ==========================================================
  {
    session: '2017年10月',
    articleTitle: 'The Kilt',
    articleParas: [
      { para: 0, text: 'Whenever people from Scotland live in foreign countries, they are always asked: "Is Scotland that place where men wear skirts?" The short answer is yes, but there is more about the myths of Scottish "skirts."' },
      { para: 1, text: 'The "skirt" that Scotsmen sometimes wear is called a kilt. It is part of the traditional dress of Scotland. The kilt is clearly very famous across the world. It seems that everybody has heard of it, and that most people have seen a picture of a man wearing one.' },
      { para: 2, text: 'People\'s knowledge and ideas about Scotsmen wearing these funny kilts come from films and television. Every time people from other countries ask about the kilt, they mention Mel Gibson\'s film, Braveheart. In many countries, there are television programmes about Scotland. These programmes always include information or images of men in kilts.' },
      { para: 3, text: 'Of course, in Scotland, you will often see the kilt. The reality is, though, that you will most commonly see it in tourist areas. The main streets and tourist areas of Scotland always have a Scotsman wearing a kilt and all tourist shops in the country sell kilts in different colours.' },
      { para: 4, text: 'But kilts are not something that Scottish people see every day. Kilts are for special occasions, such as weddings, funerals and other big and important events. Scotsmen do not put on their kilt just to buy a bottle of milk and a loaf of bread at the local supermarket.' },
      { para: 5, text: 'The reason for this may be that kilts are very expensive. When a man wears a kilt, he normally wears it with a special shirt, jacket, socks and shoes. This is obviously not cheap. In fact, an average kilt outfit costs around £500.' }
    ],
    questions: [
      {
        q: '11. According to the text, Scotsmen',
        options: ['A. like foreign culture', 'B. sometimes wear kilts', 'C. enjoy talking about kilts', 'D. often visit foreign countries'],
        answer: 1,
        explanation: '定位第二段第一句："The \'skirt\' that Scotsmen sometimes wear is called a kilt." 明确说苏格兰人"sometimes wear"（有时穿）kilt，对应选项B。A"喜欢外国文化"、C"喜欢谈论kilt"、D"经常访问外国"文中均无依据。',
        sourceSentence: 'The "skirt" that Scotsmen sometimes wear is called a kilt.'
      },
      {
        q: '12. Mel Gibson is probably a',
        options: ['A. painter', 'B. musician', 'C. movie star', 'D. fashion designer'],
        answer: 2,
        explanation: '定位第三段："Every time people from other countries ask about the kilt, they mention Mel Gibson\'s film, Braveheart." 提到"Mel Gibson\'s film"（梅尔·吉布森的电影），说明Mel Gibson是电影演员，对应选项C"movie star"。A"画家"、B"音乐家"、D"时装设计师"均不准确。',
        sourceSentence: 'Every time people from other countries ask about the kilt, they mention Mel Gibson\'s film, Braveheart.'
      },
      {
        q: '13. In Scotland, kilts are more often seen',
        options: ['A. in tourist shops', 'B. in public schools', 'C. on the stage', 'D. at local markets'],
        answer: 0,
        explanation: '定位第四段："The reality is, though, that you will most commonly see it in tourist areas. The main streets and tourist areas of Scotland always have a Scotsman wearing a kilt and all tourist shops in the country sell kilts in different colours." 明确说最常见到kilt的地方是"tourist areas"（旅游区）和"tourist shops"（旅游商店），对应选项A。B"公立学校"、C"舞台上"、D"当地市场"均与原文不符。',
        sourceSentence: 'The reality is, though, that you will most commonly see it in tourist areas.'
      },
      {
        q: '14. People do not wear kilts every day probably because of their',
        options: ['A. funny designs', 'B. dull colours', 'C. poor quality', 'D. high prices'],
        answer: 3,
        explanation: '定位第六段第一句："The reason for this may be that kilts are very expensive." 明确说原因是kilt"very expensive"（非常贵），后文还提到一套平均约500英镑。对应选项D"high prices"。A"有趣的设计"、B"暗淡的颜色"、C"质量差"均与原文不符。',
        sourceSentence: 'The reason for this may be that kilts are very expensive.'
      },
      {
        q: '15. This text is mainly about the',
        options: ['A. history of kilts', 'B. production of kilts', 'C. myths of kilts', 'D. styles of kilts'],
        answer: 2,
        explanation: '定位第一段最后一句："The short answer is yes, but there is more about the myths of Scottish \'skirts.\'" 文章开头就点明主题是关于苏格兰"裙子"的"myths"（迷思/误解），后文澄清了人们对kilt的常见误解（如是否每天穿、为什么穿等）。对应选项C"myths of kilts"。A"历史"、B"生产"、D"款式"均不是全文主旨。',
        sourceSentence: 'The short answer is yes, but there is more about the myths of Scottish "skirts."'
      }
    ]
  },

  // ==========================================================
  // 10. 2018年04月
  // ==========================================================
  {
    session: '2018年04月',
    articleTitle: 'Christmas Gift',
    articleParas: [
      { para: 0, text: 'Mary didn\'t know what to send to her grandparents for Christmas. It was always hard to choose a good Christmas present for them. They didn\'t need much, and it was hard for her to be creative every year.' },
      { para: 1, text: 'One year, she sent them a big wooden elephant. It sat on the counter for a year, but then it disappeared, probably into a closet somewhere. Another year, she made handmade soaps with nice smells, but they probably weren\'t any better than store-bought soaps. Last year, she sent lots of nice pictures of herself in frames, but grandparents\' house was small, and they couldn\'t hang up very many.' },
      { para: 2, text: 'This year, she decided on fruit. She lived where it was warm and there was lots of nice fruit. Her grandparents lived up north, where it was colder and they couldn\'t get fresh fruit all year, or at least not oranges and grapefruit. Fresh fruit was healthy for her grandparents, too.' },
      { para: 3, text: 'Mary went to a fruit store and sampled the red oranges. She really liked them and bought a kilogram. Then she tried three kinds of grapefruit. The white ones were sour. The star grapefruit were interesting, but the dark red grapefruit were great. So she got a kilogram.' },
      { para: 4, text: 'Mary carefully packed the fruit in a box to keep them safe and dry in case one got smashed and its juice got everywhere. Then she wrote the address on the box and mailed it from the store. She felt happy with what she bought.' },
      { para: 5, text: 'A few days later, Mary got a phone call from her grandparents, thanking her for the lovely fruit. They said it was a healthy, tasty, and very thoughtful gift. Mary had never felt so good before.' }
    ],
    questions: [
      {
        q: '11. Mary was troubled because she ______.',
        options: ['A. had no idea for a holiday gift', 'B. was not creative in her work', 'C. could not afford Christmas gifts', 'D. found her grandma hard to please'],
        answer: 0,
        explanation: '定位第一段："Mary didn\'t know what to send to her grandparents for Christmas. It was always hard to choose a good Christmas present for them." 明确说Mary不知道该送什么圣诞礼物，对应选项A"had no idea for a holiday gift"。B"工作中没有创意"、C"买不起圣诞礼物"、D"发现奶奶很难取悦"均与原文不符。',
        sourceSentence: 'Mary didn\'t know what to send to her grandparents for Christmas.'
      },
      {
        q: '12. What did Mary send her grandparents last year?',
        options: ['A. A wooden elephant.', 'B. Handmade soaps.', 'C. Her own pictures.', 'D. A store-bought closet.'],
        answer: 2,
        explanation: '定位第二段最后一句："Last year, she sent lots of nice pictures of herself in frames..." 明确说去年她送的是"pictures of herself"（自己的照片），对应选项C。A"木制大象"是"One year"（某一年）送的；B"手工皂"是"Another year"（另一年）送的；D"商店买的柜子"文中未提及。',
        sourceSentence: 'Last year, she sent lots of nice pictures of herself in frames...'
      },
      {
        q: '13. In selecting the gifts, Mary was ______.',
        options: ['A. excited', 'B. impatient', 'C. exhausted', 'D. thoughtful'],
        answer: 3,
        explanation: '通读全文，Mary每年都认真思考送什么礼物，今年特意选择祖父母北方难以买到的鲜水果，还亲自品尝挑选，仔细包装。这些行为都体现她"thoughtful"（体贴的、周到的），对应选项D。A"兴奋"、B"不耐烦"、C"疲惫"均不能概括她的行为。',
        sourceSentence: 'They said it was a healthy, tasty, and very thoughtful gift.'
      },
      {
        q: '14. Which of the following did Mary buy for her grandparents this year?',
        options: ['A. Yellow oranges.', 'B. Dark red grapefruit.', 'C. White grapefruit.', 'D. Star grapefruit.'],
        answer: 1,
        explanation: '定位第四段："Then she tried three kinds of grapefruit. The white ones were sour. The star grapefruit were interesting, but the dark red grapefruit were great. So she got a kilogram." 她最终买的是"dark red grapefruit"（深红色葡萄柚），对应选项B。A"黄橙子"（原文是red oranges）、C"白葡萄柚"（太酸）、D"星葡萄柚"（只是有趣，不是最好）均不符合。',
        sourceSentence: 'The dark red grapefruit were great. So she got a kilogram.'
      },
      {
        q: '15. Mary\'s grandparents ______.',
        options: ['A. loved her gift', 'B. sent her a card', 'C. wrote her a letter', 'D. put her gift away'],
        answer: 0,
        explanation: '定位最后一段："A few days later, Mary got a phone call from her grandparents, thanking her for the lovely fruit. They said it was a healthy, tasty, and very thoughtful gift." 祖父母打电话感谢她，说礼物健康、美味、体贴，说明他们"loved her gift"（喜欢她的礼物），对应选项A。B"寄了卡片"、C"写了信"、D"把礼物收起来"均与原文不符（原文是打电话）。',
        sourceSentence: 'A few days later, Mary got a phone call from her grandparents, thanking her for the lovely fruit.'
      }
    ]
  },

  // ==========================================================
  // 11. 2018年10月
  // ==========================================================
  {
    session: '2018年10月',
    articleTitle: 'Horse Talk',
    articleParas: [
      { para: 0, text: 'Do you know horses talk? You can learn to understand "horse talk" if you pay close attention to them.' },
      { para: 1, text: 'When horses live in the wild, other animals try to eat them, so a lot of horse talk is about staying alive. Even now, when most horses live on farms, they watch for danger. For this reason, never walk behind a horse. If you surprise it, the horse might mistake you for a lion or wolf and give a dangerous kick.' },
      { para: 2, text: 'By watching the ears, you can get clues to what the horse is hearing. A horse can turn each ear in a different direction. For a wild horse, this skill is important for survival. The horse can hear something creeping up behind it while also checking out a threatening noise in front. When a horse lets its ears down, it\'s feeling safe and relaxed. Though these actions may be natural responses and not deliberate communications, they help you know what the horse is thinking.' },
      { para: 3, text: 'Sometimes horses can send definite messages. For example, they know they are safer when they\'re with other horses. If they become isolated, they "whinny" (嘶鸣), calling for company. They\'re saying, "Where are you? I\'m over here!" Domestic horses use the same sounds to stay in touch with other horses.' },
      { para: 4, text: 'If a horse snorts (打响鼻儿), it\'s not communicating anything. It\'s just clearing dust or grass seed out of its nose. But if it snorts while holding its head high and staring at something, it\'s saying, "That\'s dangerous!"' }
    ],
    questions: [
      {
        q: '11. Horses in the wild "talk" mainly to',
        options: ['A. stay alive', 'B. make friends', 'C. find food', 'D. keep awake'],
        answer: 0,
        explanation: '定位第二段第一句："When horses live in the wild, other animals try to eat them, so a lot of horse talk is about staying alive." 明确说野马"talk"主要是为了"staying alive"（生存），对应选项A。B"交朋友"、C"找食物"、D"保持清醒"均不是原文强调的重点。',
        sourceSentence: 'When horses live in the wild, other animals try to eat them, so a lot of horse talk is about staying alive.'
      },
      {
        q: '12. It is dangerous to',
        options: ['A. touch a horse\'s ears', 'B. ride a horse on farms', 'C. surprise a horse from behind', 'D. stare at a horse from front'],
        answer: 2,
        explanation: '定位第二段最后两句："For this reason, never walk behind a horse. If you surprise it, the horse might mistake you for a lion or wolf and give a dangerous kick." 明确说不要走到马后面，如果从后面吓到它，它可能误以为是狮子或狼而踢人，对应选项C"surprise a horse from behind"。A"摸马耳朵"、B"在农场骑马"、D"从前面盯着马"文中均未说危险。',
        sourceSentence: 'For this reason, never walk behind a horse. If you surprise it, the horse might mistake you for a lion or wolf and give a dangerous kick.'
      },
      {
        q: '13. A horse\'s ears are special because they can',
        options: ['A. send messages', 'B. turn to different directions', 'C. sense temperatures', 'D. clear out the dust'],
        answer: 1,
        explanation: '定位第三段第二句："A horse can turn each ear in a different direction." 明确说马可以"turn each ear in a different direction"（让每只耳朵转向不同方向），对应选项B。A"发送信息"、C"感知温度"、D"清除灰尘"均不是耳朵的特殊功能。',
        sourceSentence: 'A horse can turn each ear in a different direction.'
      },
      {
        q: '14. When a horse\'s ears are down, we know that it is',
        options: ['A. isolated', 'B. relaxed', 'C. angry', 'D. anxious'],
        answer: 1,
        explanation: '定位第三段倒数第二句："When a horse lets its ears down, it\'s feeling safe and relaxed." 明确说马耳朵放下时，它感到"safe and relaxed"（安全和放松），对应选项B"relaxed"。A"孤立"、C"愤怒"、D"焦虑"均与原文相反。',
        sourceSentence: 'When a horse lets its ears down, it\'s feeling safe and relaxed.'
      },
      {
        q: '15. From the text, we know that horses',
        options: ['A. are dangerous animals', 'B. can hardly survive in the wild', 'C. prefer to stay in groups', 'D. have different language systems'],
        answer: 2,
        explanation: '定位第四段："Sometimes horses can send definite messages. For example, they know they are safer when they\'re with other horses. If they become isolated, they \'whinny\', calling for company." 马知道和其他马在一起更安全，如果被孤立就会嘶鸣呼唤同伴，说明马"prefer to stay in groups"（喜欢群居），对应选项C。A"是危险动物"、B"在野外很难生存"、D"有不同的语言系统"均不准确。',
        sourceSentence: 'For example, they know they are safer when they\'re with other horses. If they become isolated, they "whinny", calling for company.'
      }
    ]
  },

  // ==========================================================
  // 12. 2019年04月
  // ==========================================================
  {
    session: '2019年04月',
    articleTitle: 'Garlic',
    articleParas: [
      { para: 0, text: 'Garlic has a long history of human use of over 7,000 years. It was originally grown in Asia. It finally made its way to Europe and South and North Americas in the 16th century. It rapidly spread to the world because it was easy to grow and could stay alive in poor conditions.' },
      { para: 1, text: 'Garlic has also long been used in medicine. Egyptians fed garlic to the slaves to keep up their strength and to defend against diseases. The Romans believed that garlic cured many diseases and helped heal wounds. Greeks gave garlic to athletes during the Olympic Games in order to increase their strength.' },
      { para: 2, text: 'More recently, garlic has been mentioned as being used as a treatment for battle wounds in both World Wars. In fact, even today people eat garlic for its supposed benefits. For example, many people eat garlic to help fight colds and coughs. Some even claim that garlic can help prevent high blood pressure and cancer.' },
      { para: 3, text: 'A different use for garlic in the past was to keep away bad spirits. In some countries, people believed that if they wore garlic around their necks, bad things would not enter their bodies. And if they hung garlic outside the doors of their homes, bad things would go away.' },
      { para: 4, text: 'Garlic is now grown everywhere in the world. China is the largest producer of garlic, followed by India, South Korea, Egypt and Russia. The popularity of garlic has increased over the years. It is now widely used in all types of cooking. Chinese dishes use garlic. Italian dishes include a lot of garlic, too. Garlic is now highly valued for its taste throughout the world.' }
    ],
    questions: [
      {
        q: '11. Garlic was first grown in',
        options: ['A. North America', 'B. South America', 'C. Europe', 'D. Asia'],
        answer: 3,
        explanation: '定位第一段第二句："It was originally grown in Asia." 明确说大蒜最初种植于"Asia"（亚洲），对应选项D。A"北美"、B"南美"、C"欧洲"都是16世纪才传入的，不是最初种植地。',
        sourceSentence: 'It was originally grown in Asia.'
      },
      {
        q: '12. Garlic was quickly accepted by people everywhere because it was',
        options: ['A. simple to cook', 'B. easy to grow', 'C. good for health', 'D. tasty in many dishes'],
        answer: 1,
        explanation: '定位第一段最后一句："It rapidly spread to the world because it was easy to grow and could stay alive in poor conditions." 明确说大蒜迅速传播是因为"easy to grow"（容易种植）和能在恶劣条件下存活，对应选项B。A"容易烹饪"、C"对健康有益"、D"在很多菜里很美味"虽然文中提到，但不是"迅速传播"的原因。',
        sourceSentence: 'It rapidly spread to the world because it was easy to grow and could stay alive in poor conditions.'
      },
      {
        q: '13. Ancient Greeks believed that garlic can help',
        options: ['A. cure many diseases', 'B. heal battle wounds', 'C. increase body strength', 'D. keep people healthy'],
        answer: 2,
        explanation: '定位第二段最后一句："Greeks gave garlic to athletes during the Olympic Games in order to increase their strength." 明确说古希腊人给运动员吃大蒜是为了"increase their strength"（增强体力），对应选项C。A"治愈许多疾病"和B"治愈战伤"是罗马人的看法；D"保持健康"是埃及人的做法。',
        sourceSentence: 'Greeks gave garlic to athletes during the Olympic Games in order to increase their strength.'
      },
      {
        q: '14. Some ancient people hung garlic outside their doors to',
        options: ['A. frighten bad spirits', 'B. decorate their houses', 'C. keep away insects', 'D. show their wishes'],
        answer: 0,
        explanation: '定位第四段："A different use for garlic in the past was to keep away bad spirits. ... if they hung garlic outside the doors of their homes, bad things would go away." 明确说挂大蒜在门外是为了"keep away bad spirits"（驱赶恶灵），对应选项A"frighten bad spirits"。B"装饰房子"、C"驱虫"、D"表达愿望"均与原文不符。',
        sourceSentence: 'A different use for garlic in the past was to keep away bad spirits.'
      },
      {
        q: '15. The largest garlic grower in the world now is',
        options: ['A. Egypt', 'B. Korea', 'C. China', 'D. Russia'],
        answer: 2,
        explanation: '定位第五段第二句："China is the largest producer of garlic, followed by India, South Korea, Egypt and Russia." 明确说中国是最大的大蒜生产国，对应选项C"China"。A"埃及"、B"韩国"、D"俄罗斯"都排在中国之后。',
        sourceSentence: 'China is the largest producer of garlic, followed by India, South Korea, Egypt and Russia.'
      }
    ]
  },

  // ==========================================================
  // 13. 2019年10月
  // ==========================================================
  {
    session: '2019年10月',
    articleTitle: 'Mental Illness Hits Small Business Owners Hard',
    articleParas: [
      { para: 0, text: 'While there is a growing focus on mental health in the workplace, there are fewer resources and support available to those running small businesses.' },
      { para: 1, text: 'There are many reasons people choose to have their own business — being their own boss, working on something they love, being able to set their own hours, or having some control over whom they work with. Yet the reality many small business owners face is far less attractive — financial stress, long working hours and unclear boundaries between work and family life. And all of these factors can have a huge impact on their mental health.' },
      { para: 2, text: 'Leanne Fawkner is a business owner of an award-winning skin-care range. She knows very well the impact that a small business can have on the mental health of its owner. When her successful business struggled due to the global financial crisis, she suffered a lot mentally. "As business slowed, I was more and more affected," she says. "I couldn\'t separate myself from my business. It was the worst experience of my life. I could no longer go to work and was crying all day."' },
      { para: 3, text: 'Fawkner was diagnosed with depression. She had to take several months off work. Fortunately, her husband was able to keep things going while Fawkner was recovering. She saw a counselor for help and took part in a workplace mental health promotion program. This program was designed for small to medium business owners. "The stories on the DVD in the program were so helpful. I was crying because I didn\'t feel so alone." For Fawkner, small business owners are overlooked. While employees in larger organizations often have access to employee assistance programs, small business owners are struggling on their own.' }
    ],
    questions: [
      {
        q: '11. One reason to have one\'s own business is that one can have more',
        options: ['A. flexible working hours', 'B. support from others', 'C. available resources', 'D. life experience'],
        answer: 0,
        explanation: '定位第二段第一句："There are many reasons people choose to have their own business — being their own boss, working on something they love, being able to set their own hours..." "set their own hours"意为"自己设定工作时间"，即"flexible working hours"（灵活的工作时间），对应选项A。B"他人的支持"、C"可用资源"、D"生活经验"均不是文中提到的创业理由。',
        sourceSentence: 'There are many reasons people choose to have their own business — being their own boss, working on something they love, being able to set their own hours...'
      },
      {
        q: '12. A small business owner usually has',
        options: ['A. a more colorful life', 'B. a bigger profit', 'C. less stress from work', 'D. longer working time'],
        answer: 3,
        explanation: '定位第二段第二句："Yet the reality many small business owners face is far less attractive — financial stress, long working hours and unclear boundaries between work and family life." 明确说小企业主面临"long working hours"（长时间工作），对应选项D。A"更丰富多彩的生活"、B"更大的利润"、C"更少的工作压力"均与原文相反。',
        sourceSentence: 'Yet the reality many small business owners face is far less attractive — financial stress, long working hours and unclear boundaries between work and family life.'
      },
      {
        q: '13. Fawkner\'s business ran into trouble because',
        options: ['A. it was taken over by her husband', 'B. she had a serious mental problem', 'C. it was hit by the financial crisis', 'D. she started a mental health program'],
        answer: 2,
        explanation: '定位第三段第二句："When her successful business struggled due to the global financial crisis, she suffered a lot mentally." 明确说她的生意遇到困难是因为"the global financial crisis"（全球金融危机），对应选项C。A"被丈夫接管"、B"她有严重心理问题"、D"她开始了一个心理健康项目"均不是生意遇到困难的原因。',
        sourceSentence: 'When her successful business struggled due to the global financial crisis, she suffered a lot mentally.'
      },
      {
        q: '14. Fawkner didn\'t feel so alone because',
        options: ['A. she had her family around', 'B. she could watch DVD at work', 'C. others had similar experiences', 'D. the counselor was helpful to her'],
        answer: 2,
        explanation: '定位第四段："The stories on the DVD in the program were so helpful. I was crying because I didn\'t feel so alone." 她看节目中的DVD故事，发现别人也有类似经历，所以"didn\'t feel so alone"（不再感到孤单），对应选项C"others had similar experiences"。A"家人陪伴"、B"能在工作看DVD"、D"咨询师有帮助"均不是她不再感到孤单的直接原因。',
        sourceSentence: 'The stories on the DVD in the program were so helpful. I was crying because I didn\'t feel so alone.'
      },
      {
        q: '15. According to Fawkner, small business owners need more',
        options: ['A. financial aid', 'B. technical knowledge', 'C. management skills', 'D. mental health assistance'],
        answer: 3,
        explanation: '定位第四段最后两句："For Fawkner, small business owners are overlooked. While employees in larger organizations often have access to employee assistance programs, small business owners are struggling on their own." 大企业员工有"employee assistance programs"（员工援助计划），而小企业主只能独自挣扎，说明他们需要更多"mental health assistance"（心理健康援助），对应选项D。A"经济援助"、B"技术知识"、C"管理技能"均不是原文强调的重点。',
        sourceSentence: 'While employees in larger organizations often have access to employee assistance programs, small business owners are struggling on their own.'
      }
    ]
  },

  // ==========================================================
  // 14. 2020年08月
  // ==========================================================
  {
    session: '2020年08月',
    articleTitle: 'Spilt Milk',
    articleParas: [
      { para: 0, text: 'I recently heard a story about a famous scientist who had made several very important medical achievements. He was asked why he was so much more creative than the average person.' },
      { para: 1, text: 'He responded that it all came from an experience when he was about two. He had been trying to remove a bottle of milk from the refrigerator when he lost his grip and it fell, spilling the milk all over the floor.' },
      { para: 2, text: 'When his mother came into the kitchen, instead of yelling at him, or punishing him, she said, "Robert, what a wonderful mess you have made! Well, the damage has already been done. Would you like to play in the milk for a few minutes before we clean it up?"' },
      { para: 3, text: 'Indeed, he did. After a few minutes, his mother said, "Robert, whenever you make a mess like this, eventually you have to clean it up. So, how would you like to do that? We could use a sponge or a towel. Which do you prefer?" He chose the sponge and together they cleaned up the spilt milk.' },
      { para: 4, text: 'His mother then said, "You know, what we have here is a failed experiment in how to effectively carry a big milk bottle with two tiny hands. Let\'s go out in the back yard and fill the bottle with water and see if you can discover a way to carry it without dropping it." The little boy learned that if he grasped the bottle at the top near the lip with both hands, he could carry it without dropping it.' },
      { para: 5, text: 'The scientist remarked that it was then that he knew he didn\'t need to be afraid to make mistakes. Instead, mistakes were just opportunities for learning something new, which is, after all, what scientific experiments are all about. Even if the experiment "doesn\'t work," we usually learn something valuable from it.' }
    ],
    questions: [
      {
        q: '11. This story is about a scientist who',
        options: ['A. was extraordinary when he was young', 'B. became well-known after an interview', 'C. was smarter than the average person', 'D. achieved great success in the medical field'],
        answer: 3,
        explanation: '定位第一段第一句："I recently heard a story about a famous scientist who had made several very important medical achievements." 明确说这位科学家取得了"several very important medical achievements"（多项非常重要的医学成就），对应选项D"achieved great success in the medical field"。A"小时候就非凡"、B"采访后成名"、C"比普通人聪明"均不是文章介绍的重点。',
        sourceSentence: 'I recently heard a story about a famous scientist who had made several very important medical achievements.'
      },
      {
        q: '12. He got the milk spilt all over the kitchen floor because he',
        options: ['A. dropped the bottle', 'B. was naughty', 'C. slipped and fell', 'D. was weak'],
        answer: 0,
        explanation: '定位第二段："He had been trying to remove a bottle of milk from the refrigerator when he lost his grip and it fell, spilling the milk all over the floor." "lost his grip"（手滑了）导致瓶子掉落，牛奶洒了一地，对应选项A"dropped the bottle"。B"淘气"、C"滑倒"、D"虚弱"均不是直接原因。',
        sourceSentence: 'He had been trying to remove a bottle of milk from the refrigerator when he lost his grip and it fell, spilling the milk all over the floor.'
      },
      {
        q: '13. After seeing the spilt milk, his mother',
        options: ['A. shouted at him', 'B. cleaned the floor herself', 'C. encouraged him to play in the milk', 'D. forced him to clean the kitchen'],
        answer: 2,
        explanation: '定位第三段："When his mother came into the kitchen, instead of yelling at him, or punishing him, she said, \'Robert, what a wonderful mess you have made! ... Would you like to play in the milk for a few minutes before we clean it up?\'" 母亲没有吼他或惩罚他，反而问他想不想在牛奶里玩几分钟，对应选项C"encouraged him to play in the milk"。A"吼他"、B"自己打扫"、D"强迫他打扫厨房"均与原文相反。',
        sourceSentence: 'Would you like to play in the milk for a few minutes before we clean it up?'
      },
      {
        q: '14. The mother and the son went out in the back yard to',
        options: ['A. fill the bottle with milk', 'B. clean the bottle', 'C. find a way to carry the bottle', 'D. search for a new bottle'],
        answer: 2,
        explanation: '定位第五段："His mother then said, \'You know, what we have here is a failed experiment in how to effectively carry a big milk bottle with two tiny hands. Let\'s go out in the back yard and fill the bottle with water and see if you can discover a way to carry it without dropping it.\'" 母亲带他去后院，用水装满瓶子，让他找到不掉瓶子的方法，对应选项C"find a way to carry the bottle"。A"装牛奶"（是装水）、B"洗瓶子"、D"找新瓶子"均不准确。',
        sourceSentence: 'Let\'s go out in the back yard and fill the bottle with water and see if you can discover a way to carry it without dropping it.'
      },
      {
        q: '15. According to the text, mistakes give us chances to',
        options: ['A. know the truth', 'B. learn something new', 'C. do some experiments', 'D. teach a child a lesson'],
        answer: 1,
        explanation: '定位最后一段："Instead, mistakes were just opportunities for learning something new, which is, after all, what scientific experiments are all about." 明确说错误是"opportunities for learning something new"（学习新东西的机会），对应选项B。A"了解真相"、C"做实验"、D"给孩子一个教训"均不准确。',
        sourceSentence: 'Instead, mistakes were just opportunities for learning something new, which is, after all, what scientific experiments are all about.'
      }
    ]
  },

  // ==========================================================
  // 15. 2020年10月
  // ==========================================================
  {
    session: '2020年10月',
    articleTitle: 'Urban Gardening',
    articleParas: [
      { para: 0, text: 'Urban gardening refers to the practice of planting a garden in the city. Apartments, town homes, and other areas with little or no land are being used for gardening. This method of gardening is becoming more common as the amount of land for gardening in cities is becoming smaller and smaller.' },
      { para: 1, text: 'Containers, hanging baskets and raised beds are examples of items people use to create a garden in a confined space. Some cities also offer a shared community garden for people who have no room to grow plants at home.' },
      { para: 2, text: 'Many types of plants can be grown in containers and baskets. Tomatoes and peppers, for instance, can grow in containers on windowsills. Plants grown on a windowsill should usually receive at least six to eight hours of sunlight daily. Herbs are often grown in containers or baskets in the kitchen. They do not require much space and can be handy for cooking.' },
      { para: 3, text: 'People who want to grow more plants may use raised beds which are usually made of wood pieces and filled with a mixture of soil and fertilizers. They can be built on top of any hard surface, including roof tops. People like them because the beds often cost much less than most other methods of gardening.' },
      { para: 4, text: 'Community gardening could be an option for anyone who does not have space for a garden at home. Most cities that offer this will rent a small plot of land to someone for a fee, or allow them to use it free of charge. Instead of dividing the land into separate plots, some cities allow everyone in the neighborhood to share and work on the same land. This method could be beneficial for people in the neighborhood who share the passion for growing things.' }
    ],
    questions: [
      {
        q: '11. Urban gardening came into being as a result of',
        options: ['A. the lack of land for gardening', 'B. new technology', 'C. government encouragement', 'D. the increasing population'],
        answer: 0,
        explanation: '定位第一段最后一句："This method of gardening is becoming more common as the amount of land for gardening in cities is becoming smaller and smaller." 明确说城市园艺越来越普遍是因为城市可用于园艺的土地"smaller and smaller"（越来越少），对应选项A"the lack of land for gardening"。B"新技术"、C"政府鼓励"、D"人口增长"均不是文中提到的直接原因。',
        sourceSentence: 'This method of gardening is becoming more common as the amount of land for gardening in cities is becoming smaller and smaller.'
      },
      {
        q: '12. The word "confined" (Para. 2) means',
        options: ['A. open', 'B. empty', 'C. limited', 'D. occupied'],
        answer: 2,
        explanation: '定位第二段："Containers, hanging baskets and raised beds are examples of items people use to create a garden in a confined space." 结合上下文，城市园艺是在公寓、小地块等空间有限的地方进行，confined意为"有限的、狭小的"，与limited同义，对应选项C。A"开放的"、B"空的"、D"被占用的"均不准确。',
        sourceSentence: 'Containers, hanging baskets and raised beds are examples of items people use to create a garden in a confined space.'
      },
      {
        q: '13. Plants grown on windowsills require a lot of',
        options: ['A. water', 'B. space', 'C. soil', 'D. sunlight'],
        answer: 3,
        explanation: '定位第三段第三句："Plants grown on a windowsill should usually receive at least six to eight hours of sunlight daily." 明确说窗台上的植物每天需要至少六到八小时的"sunlight"（阳光），对应选项D。A"水"、B"空间"、C"土壤"均不是原文强调的窗台植物的需求。',
        sourceSentence: 'Plants grown on a windowsill should usually receive at least six to eight hours of sunlight daily.'
      },
      {
        q: '14. Raised beds are popular because they',
        options: ['A. are efficient', 'B. are cheap', 'C. last long', 'D. contain fertilizers'],
        answer: 1,
        explanation: '定位第四段最后一句："People like them because the beds often cost much less than most other methods of gardening." 明确说人们喜欢raised beds是因为它们比其他大多数园艺方法"cost much less"（花费少得多），对应选项B"are cheap"。A"高效"、C"持久"、D"含肥料"均不是人们喜欢它们的主要原因。',
        sourceSentence: 'People like them because the beds often cost much less than most other methods of gardening.'
      },
      {
        q: '15. Community gardening is beneficial because it',
        options: ['A. saves more land', 'B. requires less work', 'C. increases output', 'D. connects people'],
        answer: 3,
        explanation: '定位第五段最后一句："This method could be beneficial for people in the neighborhood who share the passion for growing things." 社区园艺对社区里有共同种植爱好的人有益，说明它能"connects people"（连接人们），对应选项D。A"节省土地"、B"需要更少劳动"、C"增加产量"均不是原文强调的社区园艺的好处。',
        sourceSentence: 'This method could be beneficial for people in the neighborhood who share the passion for growing things.'
      }
    ]
  },

  // ==========================================================
  // 16. 2021年04月
  // ==========================================================
  {
    session: '2021年04月',
    articleTitle: 'What Happens When You Stop Exercising',
    articleParas: [
      { para: 0, text: 'Have you ever wondered what would happen if you stopped exercising? A new study on twins was published in the journal Medicine & Science. The results of the study are dramatic.' },
      { para: 1, text: 'In the study, researchers looked at 10 pairs of twin men. Each set of twins was in their mid-30s. Each had been brought up in the same family. Since they were identical, they shared the same DNA. They had maintained the same level of physical activity for most of their lives. But there was one difference. One twin of each set had cut on exercising in the past few years due to work or family pressure. On average, the less active twin exercised less than twice a week, while the active twin exercised at least twice a week. The research team put each twin through a set of medical tests to study their overall health.' },
      { para: 2, text: 'The results showed big differences. While the more active twins had lower body fat percentage, better endurance level, and normal sensitivity, the inactive twins had about seven more pounds of body fat, worse endurance, and signs of disease. Not only were their bodies different; their brains were different as well. The active twins had more gray matter (the information processing part of the brain), particularly in areas that control balance.' },
      { para: 3, text: 'The conclusion of the study is clear. Quitting your fitness routine can bring negative effects to your body and your brain as well. Considering the less active twins in the study had become couch potatoes only recently, these changes can sneak up on you a lot sooner than you\'d think. So keep exercising. It is beneficial to your overall health!' }
    ],
    questions: [
      {
        q: '11. This text is mainly about',
        options: ['A. the importance of DNA', 'B. the role of exercise', 'C. the birth of a new journal', 'D. the difference between twins'],
        answer: 1,
        explanation: '通读全文，文章开头提出"what would happen if you stopped exercising"，然后介绍了一项关于双胞胎的研究，发现停止锻炼会导致身体和大脑出现负面变化（体脂增加、耐力下降、灰质减少等），最后建议"keep exercising"。全文主线是"运动的作用"，对应选项B"the role of exercise"。A"DNA的重要性"、C"新期刊的诞生"、D"双胞胎的差异"均只是文章的部分内容，不是主旨。',
        sourceSentence: 'So keep exercising. It is beneficial to your overall health!'
      },
      {
        q: '12. Researchers chose twins for their study mostly because they',
        options: ['A. shared the same DNA', 'B. looked alike', 'C. had the same lifestyle', 'D. grew up together'],
        answer: 0,
        explanation: '定位第二段："Since they were identical, they shared the same DNA." 研究者选择同卵双胞胎是因为他们"shared the same DNA"（拥有相同的DNA），这样可以排除基因差异对研究结果的干扰，对应选项A。B"长得像"、C"生活方式相同"（文中说有一个双胞胎减少了锻炼，生活方式不同）、D"一起长大"均不是选择双胞胎的主要原因。',
        sourceSentence: 'Since they were identical, they shared the same DNA.'
      },
      {
        q: '13. The twins in the study differed in',
        options: ['A. sleeping habits', 'B. exercise frequency', 'C. working hours', 'D. food preference'],
        answer: 1,
        explanation: '定位第二段："But there was one difference. One twin of each set had cut on exercising in the past few years due to work or family pressure. On average, the less active twin exercised less than twice a week, while the active twin exercised at least twice a week." 双胞胎之间的唯一差异是"exercising"（锻炼频率），对应选项B"exercise frequency"。A"睡眠习惯"、C"工作时间"、D"食物偏好"文中均未提及。',
        sourceSentence: 'On average, the less active twin exercised less than twice a week, while the active twin exercised at least twice a week.'
      },
      {
        q: '14. The study found that the more active twins became',
        options: ['A. less creative', 'B. less sensitive', 'C. more emotional', 'D. more endurable'],
        answer: 3,
        explanation: '定位第三段："While the more active twins had lower body fat percentage, better endurance level, and normal sensitivity..." 明确说更活跃的双胞胎有"better endurance level"（更好的耐力），对应选项D"more endurable"。A"更不 creative"、B"更不敏感"、C"更情绪化"均与原文相反（原文说更活跃的双胞胎有normal sensitivity，即正常的敏感性）。',
        sourceSentence: 'While the more active twins had lower body fat percentage, better endurance level, and normal sensitivity...'
      },
      {
        q: '15. The phrase "sneak up on" (Para. 4) most probably means',
        options: ['A. protect', 'B. attack', 'C. affect', 'D. benefit'],
        answer: 2,
        explanation: '定位第四段："Considering the less active twins in the study had become couch potatoes only recently, these changes can sneak up on you a lot sooner than you\'d think." 结合上下文，这些负面变化会比你想象的更快地"sneak up on"（悄悄逼近/影响）你。sneak up on意为"悄悄接近、不知不觉地影响"，对应选项C"affect"。A"保护"、B"攻击"（过于强烈）、D"有益"（与负面变化相反）均不准确。',
        sourceSentence: 'Considering the less active twins in the study had become couch potatoes only recently, these changes can sneak up on you a lot sooner than you\'d think.'
      }
    ]
  },

  // ==========================================================
  // 17. 2021年10月
  // ==========================================================
  {
    session: '2021年10月',
    articleTitle: 'Universal Gestures',
    articleParas: [
      { para: 0, text: 'Gestures for victory, defeat and stress are almost the same in all countries.' },
      { para: 1, text: 'On the front page of a newspaper we often see the picture of people holding their head in shock. People put their hands on their head or over their mouth when they look on a scene with shock or horror.' },
      { para: 2, text: 'Chris Ulrich is an expert on body language. He said that covering your mouth or putting your hands on your head helps make you feel safer from a perceived threat. By covering part of your face you can feel hidden from the shocking event. Additionally these reactions can help a person comfort himself through touch. Ulrich said it is a self-comforting gesture to help people in the moment.' },
      { para: 3, text: 'In times of strong anxiety, people will twist their hands to calm themselves. Ulrich said it is a reaction people often have when they are in front of an audience or nervous. "It\'s a comfort for them that they\'ll get through it." said Ulrich. He relates that gesture to a parent trying to calm a child.' },
      { para: 4, text: 'Most athletes react to victories or defeats with specific behaviors. A 2008 study examined pictures of judo competitors during the 2008 Olympic Games. They were from different countries, but they showed similar behaviors when they won a match. The winners would throw their head back or raise their hands in triumph. Ulrich said these victory behaviors are a way winners "explode" out and take up more space.' },
      { para: 5, text: 'However, if an athlete suffers a loss, he will act in a way that makes him physically smaller, such as hanging his head. "When you lose, you want to disappear," said Ulrich. The study also found that the judo competitors had the same behavior when they lost.' }
    ],
    questions: [
      {
        q: '11. People put their hands over their mouth to',
        options: ['A. avoid a danger', 'B. gain self-comfort', 'C. hide their shock', 'D. show their anxiety'],
        answer: 1,
        explanation: '定位第三段："He said that covering your mouth or putting your hands on your head helps make you feel safer from a perceived threat. ... Ulrich said it is a self-comforting gesture to help people in the moment." 明确说用手捂住嘴是一种"self-comforting gesture"（自我安慰的手势），帮助人们当下感觉更安全，对应选项B"gain self-comfort"。A"避免危险"、C"隐藏震惊"、D"表现焦虑"均不如B准确。',
        sourceSentence: 'Ulrich said it is a self-comforting gesture to help people in the moment.'
      },
      {
        q: '12. People tend to twist their hands when they are',
        options: ['A. depressed', 'B. angry', 'C. shocked', 'D. nervous'],
        answer: 3,
        explanation: '定位第四段第一、二句："In times of strong anxiety, people will twist their hands to calm themselves. Ulrich said it is a reaction people often have when they are in front of an audience or nervous." 明确说在强烈焦虑时、在观众面前或"nervous"（紧张）时，人们会扭手，对应选项D"nervous"。A"沮丧"、B"愤怒"、C"震惊"均不是原文提到的扭手的情境。',
        sourceSentence: 'In times of strong anxiety, people will twist their hands to calm themselves. Ulrich said it is a reaction people often have when they are in front of an audience or nervous.'
      },
      {
        q: '13. In Paragraph 4, "that gesture" refers to',
        options: ['A. shaking one\'s hands', 'B. covering one\'s face', 'C. twisting one\'s hands', 'D. rubbing one\'s face'],
        answer: 2,
        explanation: '定位第四段："In times of strong anxiety, people will twist their hands to calm themselves. ... He relates that gesture to a parent trying to calm a child." "that gesture"指代前一句提到的动作，即"twist their hands"（扭手），对应选项C。A"摇手"、B"捂脸"、D"搓脸"均不是前文提到的动作。',
        sourceSentence: 'In times of strong anxiety, people will twist their hands to calm themselves.'
      },
      {
        q: '14. Judo winners often act in a way that makes them',
        options: ['A. occupy more space', 'B. appear physically smaller', 'C. obtain more respect', 'D. become more competitive'],
        answer: 0,
        explanation: '定位第五段："The winners would throw their head back or raise their hands in triumph. Ulrich said these victory behaviors are a way winners \'explode\' out and take up more space." 明确说获胜者的行为是"take up more space"（占据更多空间），对应选项A"occupy more space"。B"显得身体更小"是失败者的行为；C"获得更多尊重"、D"变得更有竞争力"均不是原文描述。',
        sourceSentence: 'Ulrich said these victory behaviors are a way winners "explode" out and take up more space.'
      },
      {
        q: '15. The judo losers would',
        options: ['A. raise their arms', 'B. lower their heads', 'C. beat their chests', 'D. sit on their knees'],
        answer: 1,
        explanation: '定位第六段："However, if an athlete suffers a loss, he will act in a way that makes him physically smaller, such as hanging his head." 明确说失败者会"hanging his head"（低下头），对应选项B"lower their heads"。A"举起手臂"是获胜者的行为；C"捶胸"、D"跪坐"文中均未提及。',
        sourceSentence: 'However, if an athlete suffers a loss, he will act in a way that makes him physically smaller, such as hanging his head.'
      }
    ]
  },

  // ==========================================================
  // 18. 2022年04月
  // ==========================================================
  {
    session: '2022年04月',
    articleTitle: 'Self-esteem and Body Image',
    articleParas: [
      { para: 0, text: 'Self-esteem is all about what people think of themselves. It is important because feeling good about yourself can affect how you act. People who have high self-esteem will make friends easily. They are more in control of their behavior, and will enjoy life more.' },
      { para: 1, text: 'Some teenagers struggle with their self-esteem when they grow into adults because the body goes through many changes. Along with the changes comes a natural desire to feel accepted. What\'s more, they can\'t help but compare themselves with others. They may compare themselves with the people around them or with actors and other famous people they see on TV, in movies, or in magazines.' },
      { para: 2, text: 'The physical changes can affect how both girls and boys feel about themselves. Some girls may feel uncomfortable about their growing bodies. Others may wish that they were developing faster. Girls may feel like being thin but boys may feel like they don\'t look big enough.' },
      { para: 3, text: 'It\'s not just body development that affects self-esteem. Many other factors can affect a person\'s body image too. Family life, for example, can sometimes influence self-esteem. Some parents spend more time criticizing their kids and the way they look than praising them. This can reduce kids\' ability to develop good self-esteem. Also their classmates and peers may tease them about the way they look. These sometimes can affect their self-esteem.' },
      { para: 4, text: 'If there are things about yourself that you want to change and you can change, do this by making goals for yourself. If there are things that you can\'t change, recognize that your body is your own. It\'s no one\'s business but your own what your body is like. Actually, to be happy with yourself, all you need to do is to change the way you see your body.' }
    ],
    questions: [
      {
        q: '11. People with high self-esteem often',
        options: ['A. control others\' behavior', 'B. think highly of others', 'C. have lots of friends', 'D. work very hard'],
        answer: 2,
        explanation: '定位第一段第三句："People who have high self-esteem will make friends easily." 明确说自尊心强的人容易交到朋友，即"have lots of friends"，对应选项C。A"控制他人行为"（原文是more in control of their behavior，控制自己的行为）、B"高度评价他人"、D"工作非常努力"均与原文不符。',
        sourceSentence: 'People who have high self-esteem will make friends easily.'
      },
      {
        q: '12. Some teenagers struggle with their self-esteem because',
        options: ['A. their teachers don\'t like them', 'B. their bodies have changed a lot', 'C. they cannot accept famous people', 'D. they need more time to watch TV'],
        answer: 1,
        explanation: '定位第二段第一句："Some teenagers struggle with their self-esteem when they grow into adults because the body goes through many changes." 明确说青少年自尊心挣扎是因为"the body goes through many changes"（身体经历许多变化），对应选项B"their bodies have changed a lot"。A"老师不喜欢他们"、C"无法接受名人"、D"需要更多时间看电视"均不是原文提到的原因。',
        sourceSentence: 'Some teenagers struggle with their self-esteem when they grow into adults because the body goes through many changes.'
      },
      {
        q: '13. The word "tease" (Line 5, Para. 4) most probably means',
        options: ['A. laugh at', 'B. talk about', 'C. argue with', 'D. look at'],
        answer: 0,
        explanation: '定位第四段最后两句："Also their classmates and peers may tease them about the way they look. These sometimes can affect their self-esteem." 同学和同龄人可能会因为他们的外表而"tease"他们，从而影响自尊。tease意为"取笑、嘲笑"，与laugh at同义，对应选项A。B"谈论"、C"争论"、D"看着"均不如A准确。',
        sourceSentence: 'Also their classmates and peers may tease them about the way they look.'
      },
      {
        q: '14. To help kids develop good self-esteem, parents should',
        options: ['A. compare them with others', 'B. make goals for them', 'C. criticize their peers', 'D. praise them'],
        answer: 3,
        explanation: '定位第四段："Some parents spend more time criticizing their kids and the way they look than praising them. This can reduce kids\' ability to develop good self-esteem." 父母花更多时间批评孩子而不是表扬他们，这会降低孩子发展良好自尊的能力。反过来说，父母应该多"praise them"（表扬他们），对应选项D。A"把他们和别人比较"、B"为他们制定目标"、C"批评他们的同龄人"均与原文相反或无依据。',
        sourceSentence: 'Some parents spend more time criticizing their kids and the way they look than praising them. This can reduce kids\' ability to develop good self-esteem.'
      },
      {
        q: '15. To be happy with yourself you should',
        options: ['A. do business', 'B. love your body', 'C. find new friends', 'D. change your behavior'],
        answer: 1,
        explanation: '定位最后一段最后一句："Actually, to be happy with yourself, all you need to do is to change the way you see your body." 要对自己满意，需要改变你看待自己身体的方式，即"love your body"（爱你的身体），对应选项B。A"做生意"、C"找新朋友"、D"改变行为"均不是原文的建议。',
        sourceSentence: 'Actually, to be happy with yourself, all you need to do is to change the way you see your body.'
      }
    ]
  },

  // ==========================================================
  // 19. 2022年10月
  // ==========================================================
  {
    session: '2022年10月',
    articleTitle: 'Organic Farming',
    articleParas: [
      { para: 0, text: 'During thousands of years of human civilization, the raising of animals and growing of plants have always been organic. Chemicals for farming first came up at the turn of the 20th century. Widespread use of chemicals began after World War II. In the 1950s and 60s farmers started using chemical fertilizers and pesticides. Recently, however, more and more farmers have been returning to organic farming.' },
      { para: 1, text: 'In organic farming, farm products are produced in more natural ways. Crops, meat and other food are produced without chemicals. Chemical fertilizers, pesticides, and growth hormones are forbidden. Farmers enrich the soil with natural fertilizers. They pull out weeds by hand. Hay and straw are put between the rows of plants to stop weeding. They rely on the natural enemies of pests to control pests. Animals are fed organically and can eat grass outdoors. Cows, for example, are kept in pastures and fields. Vegetables and fruit are also produced with organic methods.' },
      { para: 2, text: 'Organic farming enjoys many advantages. For example, crop rotation can preserve the good qualities of soils. The growing of different crops can keep soils healthy and fertile. Organic farming is healthier for farm workers, and there are fewer remains of chemicals in food. In the long term, organic farms save energy and protect the environment. It can slow down global warming and reduce the pollution of ground water.' },
      { para: 3, text: 'Meanwhile, there are some disadvantages. Organic food is more expensive. Organic products may cost up to 40% more. Production costs are higher as farmers need more workers, and the land output is much less. Marketing and distribution is not efficient because organic food is produced in smaller amounts. Crop illness may happen very often. Besides, organic farming cannot produce enough food for the world\'s population to survive. This could lead to starvation in countries that can produce enough food today.' }
    ],
    questions: [
      {
        q: '11. Organic farming',
        options: ['A. started in the 1950s', 'B. had a short history', 'C. has become popular in recent years', 'D. was promoted by World War II'],
        answer: 2,
        explanation: '定位第一段最后一句："Recently, however, more and more farmers have been returning to organic farming." 明确说近年来越来越多的农民回归有机农业，对应选项C"has become popular in recent years"。A"始于20世纪50年代"（那是化学农业普及的时间）、B"历史很短"（有机农业有数千年历史）、D"由二战推动"（二战推动了化学农业）均与原文相反。',
        sourceSentence: 'Recently, however, more and more farmers have been returning to organic farming.'
      },
      {
        q: '12. In organic farming',
        options: ['A. cows can move around in fields', 'B. natural enemies of pests are scarce', 'C. chemicals are used to kill pests', 'D. machines are used to pull out weeds'],
        answer: 0,
        explanation: '定位第二段："Animals are fed organically and can eat grass outdoors. Cows, for example, are kept in pastures and fields." 明确说牛被养在"pastures and fields"（牧场和田野），可以在户外吃草、走动，对应选项A"cows can move around in fields"。B"害虫的天敌稀少"（原文说依赖害虫的天敌控制害虫，说明天敌存在）、C"使用化学药品杀虫"（原文说禁止使用化学药品）、D"用机器除草"（原文说用手拔草）均与原文相反。',
        sourceSentence: 'Animals are fed organically and can eat grass outdoors. Cows, for example, are kept in pastures and fields.'
      },
      {
        q: '13. The phrase "crop rotation" (Para. 3) probably means',
        options: ['A. growing high-yielding crops', 'B. seasonal growing of crops', 'C. planting soil-enriching crops', 'D. regular changing of crops'],
        answer: 3,
        explanation: '定位第三段："For example, crop rotation can preserve the good qualities of soils. The growing of different crops can keep soils healthy and fertile." crop rotation后紧跟的解释是"种植不同的作物可以保持土壤健康和肥沃"，说明crop rotation指的是"轮作"，即"regular changing of crops"（定期更换作物），对应选项D。A"种植高产作物"、B"季节性种植"、C"种植滋养土壤的作物"均不准确。',
        sourceSentence: 'For example, crop rotation can preserve the good qualities of soils. The growing of different crops can keep soils healthy and fertile.'
      },
      {
        q: '14. One advantage of organic farming is that it is',
        options: ['A. water-saving', 'B. labor-saving', 'C. market-friendly', 'D. environment-friendly'],
        answer: 3,
        explanation: '定位第三段："In the long term, organic farms save energy and protect the environment. It can slow down global warming and reduce the pollution of ground water." 明确说有机农场"protect the environment"（保护环境），对应选项D"environment-friendly"。A"节水"、B"省力"（原文说需要更多工人）、C"市场友好"（原文说营销和分销效率低）均不是有机农业的优势。',
        sourceSentence: 'In the long term, organic farms save energy and protect the environment.'
      },
      {
        q: '15. The problem of organic farming is',
        options: ['A. poor qualities of soils', 'B. high production costs', 'C. the use of too much land', 'D. the shortage of farm workers'],
        answer: 1,
        explanation: '定位第四段："Meanwhile, there are some disadvantages. Organic food is more expensive. ... Production costs are higher as farmers need more workers, and the land output is much less." 明确说有机农业的缺点包括"Production costs are higher"（生产成本更高），对应选项B"high production costs"。A"土壤质量差"（有机农业改善土壤）、C"使用太多土地"（原文说土地产出少）、D"农场工人短缺"（原文说需要更多工人，不是短缺）均不准确。',
        sourceSentence: 'Production costs are higher as farmers need more workers, and the land output is much less.'
      }
    ]
  },

  // ==========================================================
  // 20. 2023年04月
  // ==========================================================
  {
    session: '2023年04月',
    articleTitle: 'Public Wi-Fi Users Neglect Safety',
    articleParas: [
      { para: 0, text: 'A recent survey shows that 25% of Internet users have done online banking through public Wi-Fi in the last three months. It also shows that 27% have bought a product or service with a credit card this way.' },
      { para: 1, text: 'Experts worry that hackers will take advantage of these practices. Doug Shadel said that hackers usually attack in two ways. They may create Wi-Fi hotspots that have the same name of the ones you trust, such as a hotel or a coffee shop. They may also provide a stronger Wi-Fi signal to get between you and the safe hotspot. In either case, the hackers can see your email, credit card information, user names and passwords.' },
      { para: 2, text: 'Sometimes hackers just set up their electronic traps near a business where people enjoy the free Wi-Fi. "In most cases they are after your personal information," Shadel said. "If you use the same user name and password for many accounts, they can get into them all. It\'s possible for any hacker to do it. The software to hack into a Wi-Fi network is available at little or no cost."' },
      { para: 3, text: '"It\'s difficult for people to know if a Wi-Fi network is safe," Shadel said. "So you should just think they are not. Any shared Internet access, free or paid, carries the same level of risk. It is safe only when you or someone you trust directly controls it."' },
      { para: 4, text: 'Shadel sometimes checks email through public Wi-Fi. But he never does any banking that way. In an unfamiliar place, he uses a Virtual Private Network (VPN). "This service creates a passage between your device and a safe place on the Internet," he said.' }
    ],
    questions: [
      {
        q: '11. A recent survey finds that 25% of Internet users use public Wi-Fi to',
        options: ['A. do banking', 'B. buy things', 'C. provide service', 'D. play cards'],
        answer: 0,
        explanation: '定位第一段第一句："A recent survey shows that 25% of Internet users have done online banking through public Wi-Fi in the last three months." 明确说25%的用户通过公共Wi-Fi进行"online banking"（网上银行），对应选项A"do banking"。B"买东西"是27%的用户（第二句）；C"提供服务"、D"打牌"均与原文不符。',
        sourceSentence: 'A recent survey shows that 25% of Internet users have done online banking through public Wi-Fi in the last three months.'
      },
      {
        q: '12. The phrase "take advantage of" (Para. 2) can best be replaced by',
        options: ['A. adjust to', 'B. benefit from', 'C. lead to', 'D. result from'],
        answer: 1,
        explanation: '定位第二段第一句："Experts worry that hackers will take advantage of these practices." 结合上下文，黑客会利用这些不安全的行为来获取个人信息，即从中"benefit from"（获益），对应选项B。A"适应"、C"导致"、D"由……导致"均不准确。',
        sourceSentence: 'Experts worry that hackers will take advantage of these practices.'
      },
      {
        q: '13. According to Shadel, any hacker can',
        options: ['A. create different passwords', 'B. open an electronic account', 'C. steal people\'s information', 'D. write software for businesses'],
        answer: 2,
        explanation: '定位第三段："In most cases they are after your personal information," Shadel said. "If you use the same user name and password for many accounts, they can get into them all. It\'s possible for any hacker to do it." 明确说任何黑客都可能"get into them all"（进入所有账户），即"steal people\'s information"（窃取人们的信息），对应选项C。A"创建不同的密码"、B"开电子账户"、D"为企业写软件"均不是原文所述。',
        sourceSentence: '"In most cases they are after your personal information," Shadel said. "If you use the same user name and password for many accounts, they can get into them all. It\'s possible for any hacker to do it."'
      },
      {
        q: '14. For the sake of safety, Internet users are advised to',
        options: ['A. test shared Internet access', 'B. rely on paid Internet access', 'C. look for free Internet access', 'D. avoid shared Internet access'],
        answer: 3,
        explanation: '定位第四段："It\'s difficult for people to know if a Wi-Fi network is safe," Shadel said. "So you should just think they are not. Any shared Internet access, free or paid, carries the same level of risk. It is safe only when you or someone you trust directly controls it." 明确说任何共享的互联网接入，无论免费还是付费，都有风险，建议人们"avoid shared Internet access"（避免共享的互联网接入），对应选项D。A"测试共享接入"、B"依赖付费接入"（原文说付费也有风险）、C"寻找免费接入"均与原文相反。',
        sourceSentence: 'Any shared Internet access, free or paid, carries the same level of risk.'
      },
      {
        q: '15. Shadel uses public Wi-Fi to',
        options: ['A. learn about VPN', 'B. deal with his emails', 'C. keep his account safe', 'D. handle financial matters'],
        answer: 1,
        explanation: '定位第五段第一句："Shadel sometimes checks email through public Wi-Fi. But he never does any banking that way." 明确说Shadel有时通过公共Wi-Fi"checks email"（查看邮件），但从不进行银行业务，对应选项B"deal with his emails"。A"了解VPN"、C"保持账户安全"、D"处理财务事务"均与原文不符。',
        sourceSentence: 'Shadel sometimes checks email through public Wi-Fi. But he never does any banking that way.'
      }
    ]
  },

  // ==========================================================
  // 21. 2023年10月
  // ==========================================================
  {
    session: '2023年10月',
    articleTitle: 'Exercise at Home',
    articleParas: [
      { para: 0, text: 'Home exercise is the new phenomenon in fitness. It\'s easy to see why more and more people are taking interest in home exercise.' },
      { para: 1, text: 'All it takes to get results at home is an exercise mat, and some free weights. Even if you don\'t have these tools, there are several kinds of exercise you can do around the house. You can always try the exercise that uses your own body weight. The secret to success is to exercise the right way without hurting yourself.' },
      { para: 2, text: 'At home, you can train at your own time. You are not affected by the timings of your gym or your trainer. This is an excellent solution for stay-at-home moms, and those individuals who work from home or have an irregular work schedule. With the number of tools available today, it is simple to set up a gym atmosphere in the comfort of your own home.' },
      { para: 3, text: 'To get results at home, you need self-motivation and discipline, since you\'re going to be on your own. It\'s not as hard as you think and can be enjoyable and beneficial. When you are committed mentally to pursuing a leaner, energized and dynamic fitness level, changes happen much faster.' },
      { para: 4, text: 'There\'re some other advantages home exercise has over a health club. After all, a club is a social institution. If one gets there to socialize more, he will exercise less. A club could also be crowded. Many people may wait in line for the equipment. With home exercise, there\'s no waiting period. So, many individuals are now exercising at home. In fact, as a recent study says, exercising at home is just as beneficial as working out at a health club. It also found that people who trained at home were more likely to stick with their program than those who exercised at a club.' }
    ],
    questions: [
      {
        q: '11. A good aspect about home exercise is that it',
        options: ['A. causes no injury', 'B. yields quick results', 'C. requires few tools', 'D. takes little hard work'],
        answer: 2,
        explanation: '定位第二段第一句："All it takes to get results at home is an exercise mat, and some free weights." 明确说在家锻炼只需要"an exercise mat, and some free weights"（一个瑜伽垫和一些自由重量），即"requires few tools"（需要很少的工具），对应选项C。A"不会受伤"（原文说exercise the right way without hurting yourself，说明要注意避免受伤）、B"效果快"、D"不需要努力"（原文说需要self-motivation and discipline）均与原文不符。',
        sourceSentence: 'All it takes to get results at home is an exercise mat, and some free weights.'
      },
      {
        q: '12. Home exercise best fits',
        options: ['A. housewives', 'B. policewomen', 'C. office workers', 'D. school children'],
        answer: 0,
        explanation: '定位第三段："This is an excellent solution for stay-at-home moms, and those individuals who work from home or have an irregular work schedule." 明确说在家锻炼非常适合"stay-at-home moms"（全职妈妈），对应选项A"housewives"。B"女警察"、C"办公室职员"、D"学龄儿童"虽然也可以在家锻炼，但原文特别强调的是全职妈妈和在家工作的人。',
        sourceSentence: 'This is an excellent solution for stay-at-home moms, and those individuals who work from home or have an irregular work schedule.'
      },
      {
        q: '13. To achieve the desired results from home exercise, you need to',
        options: ['A. enjoy yourself', 'B. know its benefits', 'C. discipline yourself', 'D. record your changes'],
        answer: 2,
        explanation: '定位第四段第一句："To get results at home, you need self-motivation and discipline, since you\'re going to be on your own." 明确说在家锻炼需要"self-motivation and discipline"（自我激励和自律），对应选项C"discipline yourself"。A"享受"、B"了解好处"、D"记录变化"均不是原文强调的取得效果的必要条件。',
        sourceSentence: 'To get results at home, you need self-motivation and discipline, since you\'re going to be on your own.'
      },
      {
        q: '14. People who go to health clubs are likely to',
        options: ['A. stick with their favorite programs', 'B. make better use of gym equipment', 'C. reap more gains from the training', 'D. spend much time making friends'],
        answer: 3,
        explanation: '定位最后一段："There\'re some other advantages home exercise has over a health club. After all, a club is a social institution. If one gets there to socialize more, he will exercise less." 明确说健身房是一个社交场所，如果人们去那里更多是为了社交，锻炼就会减少。因此去健身房的人可能会"spend much time making friends"（花很多时间交朋友），对应选项D。A"坚持自己喜欢的项目"（原文说在家锻炼的人更容易坚持）、B"更好地利用健身设备"、C"从训练中获得更多收益"均与原文相反或无依据。',
        sourceSentence: 'After all, a club is a social institution. If one gets there to socialize more, he will exercise less.'
      },
      {
        q: '15. This passage mainly talks about',
        options: ['A. types of home exercise', 'B. advantages of home exercise', 'C. ways to do home exercise', 'D. people fit for home exercise'],
        answer: 1,
        explanation: '通读全文，文章从"Home exercise is the new phenomenon"开始，介绍了在家锻炼需要的工具少、时间灵活、适合全职妈妈和在家工作的人，最后一段还比较了在家锻炼与健身房的优势（不用排队、更容易坚持等）。全文主线是"在家锻炼的优势"，对应选项B"advantages of home exercise"。A"类型"、C"方法"、D"适合人群"均只是文章的部分内容，不是主旨。',
        sourceSentence: 'Home exercise is the new phenomenon in fitness. It\'s easy to see why more and more people are taking interest in home exercise.'
      }
    ]
  },

  // ==========================================================
  // 22. 2024年04月
  // ==========================================================
  {
    session: '2024年04月',
    articleTitle: 'Marta Garcia: Inspired by Technology',
    articleParas: [
      { para: 0, text: 'Marta Garcia is a high school senior. In the past years she has been working on a variety of projects. The projects are part of her work with Techbridge, a nonprofit organization. Techbridge was set up in 2000 to increase the number of women in science, technology, engineering and math (STEM). It offers a range of after-school activities for students.' },
      { para: 1, text: 'Techbridge focuses on learning by doing. It attracts Marta\'s interest. "When I was a kid," says Marta, "I wasn\'t into English. I was really into technology and math. My older sister was in Techbridge. She encouraged me to join. It was something for me to do after school. I found it pretty fun."' },
      { para: 2, text: 'Marta has created a complex music-making machine. Her latest project is a digital piano, which shows how far her STEM skills have advanced. Marta\'s instructors have been following her progress closely. "I\'ve seen her master STEM skills," says Techbridge CEO Linda Kekelis. "She\'s very confident to face challenges. She isn\'t afraid of temporary setbacks."' },
      { para: 3, text: 'Marta plans to attend Smith College this fall. She is still drawn to math and technology. But she does not want to be limited to one particular course of study.' },
      { para: 4, text: '"I\'m not sure what I want to do after college graduation," says Marta. "I know a STEM career is an option." The future will be filled with jobs that require STEM skills. So her love of technology and her experience with Techbridge will serve her well.' }
    ],
    questions: [
      {
        q: '11. Techbridge was set up to',
        options: ['A. train women teachers', 'B. offer jobs for students', 'C. teach STEM at school', 'D. help girls learn STEM'],
        answer: 3,
        explanation: '定位第一段最后两句："Techbridge was set up in 2000 to increase the number of women in science, technology, engineering and math (STEM). It offers a range of after-school activities for students." 明确说Techbridge成立是为了"increase the number of women in STEM"（增加STEM领域的女性人数），即为女孩学习STEM提供帮助，对应选项D"help girls learn STEM"。A"培训女教师"、B"为学生提供工作"、C"在学校教STEM"均不准确。',
        sourceSentence: 'Techbridge was set up in 2000 to increase the number of women in science, technology, engineering and math (STEM).'
      },
      {
        q: '12. Marta Garcia works with Techbridge to',
        options: ['A. develop her interest', 'B. finish her education', 'C. improve her English', 'D. please her older sister'],
        answer: 0,
        explanation: '定位第二段："Techbridge focuses on learning by doing. It attracts Marta\'s interest. ... I was really into technology and math. My older sister was in Techbridge. She encouraged me to join. ... I found it pretty fun." Marta本来就对科技和数学感兴趣，Techbridge吸引了她，她加入后觉得很有趣，说明她参与Techbridge是为了"develop her interest"（发展她的兴趣），对应选项A。B"完成教育"、C"提高英语"（原文说她不喜欢英语）、D"取悦姐姐"均不准确。',
        sourceSentence: 'Techbridge focuses on learning by doing. It attracts Marta\'s interest.'
      },
      {
        q: '13. Linda Kekelis is impressed by Marta Garcia\'s',
        options: ['A. knowledge', 'B. interests', 'C. confidence', 'D. instructions'],
        answer: 2,
        explanation: '定位第三段："I\'ve seen her master STEM skills," says Techbridge CEO Linda Kekelis. "She\'s very confident to face challenges. She isn\'t afraid of temporary setbacks." Linda Kekelis明确称赞Marta"very confident"（非常自信），对应选项C"confidence"。A"知识"、B"兴趣"、D"指导"均不是Linda Kekelis特别称赞的内容。',
        sourceSentence: '"She\'s very confident to face challenges. She isn\'t afraid of temporary setbacks."'
      },
      {
        q: '14. The word "setbacks" (Para. 3) most probably means',
        options: ['A. advances', 'B. difficulties', 'C. activities', 'D. projects'],
        answer: 1,
        explanation: '定位第三段："She\'s very confident to face challenges. She isn\'t afraid of temporary setbacks." setbacks与challenges并列，且是"temporary"（暂时的），意为"挫折、困难"，与difficulties同义，对应选项B。A"进步"、C"活动"、D"项目"均不准确。',
        sourceSentence: 'She isn\'t afraid of temporary setbacks.'
      },
      {
        q: '15. Marta Garcia\'s experience with Techbridge will',
        options: ['A. help her finish university', 'B. benefit her in the future', 'C. limit her to a STEM job', 'D. let her take fewer courses'],
        answer: 1,
        explanation: '定位最后一段："So her love of technology and her experience with Techbridge will serve her well." "serve her well"意为"对她大有裨益"，说明她在Techbridge的经历会在未来"benefit her"（使她受益），对应选项B。A"帮她完成大学"、C"限制她只能做STEM工作"（原文说她不希望被限制）、D"让她少修课程"均不准确。',
        sourceSentence: 'So her love of technology and her experience with Techbridge will serve her well.'
      }
    ]
  },

  // ==========================================================
  // 23. 2024年10月
  // ==========================================================
  {
    session: '2024年10月',
    articleTitle: 'The Grand in Grandmother',
    articleParas: [
      { para: 0, text: 'When I was growing up, my parents took teaching jobs in a remote town, leaving me in the care of my grandmother.' },
      { para: 1, text: 'Nanay, as we called her, did not hug or kiss children. Her tongue was sharp and her words harsh. She was a tyrant, but she was there. As early as I could remember, Nanay had always been a part of my life. I believed grandmothers lived forever.' },
      { para: 2, text: 'She taught me many lessons, though I often ignored them. Nanay urged me never to accept second-best. For her, "good enough" was never enough, from the grades you bring home from school to the service you receive in restaurants.' },
      { para: 3, text: 'When I was 13, Nanay sent me to Manila to attend high school, and I stayed there for university. I came back each summer, but after I got married the visits became less frequent. Soon all of her grandchildren had moved out. Nanay was left on her own. In her letters to me, she wrote of how lonely she was, but I never made the effort to spend more time with her.' },
      { para: 4, text: 'Nanay died last year. She was 83. After the funeral, I went to our old house. Grandmother had kept so many things from my childhood: the toys; the letters I wrote home in my high school and university years, either asking for more rice or thanking her for sending fruit. Photos of her grandchildren were on display in the living room.' },
      { para: 5, text: 'When I visited her grave and reflected on all her birthdays I had allowed to pass, I was filled with sorrow. I thought about all the stories she never got a chance to tell me, about her life, about the girl she once had been, about the town I left behind. It occurred to me that perhaps she did not tell me because I did not know how to ask.' }
    ],
    questions: [
      {
        q: '11. The author was left in the care of Nanay because',
        options: ['A. his parents worked far away', 'B. Nanay loved children', 'C. he wanted to stay with Nanay', 'D. Nanay was a good teacher'],
        answer: 0,
        explanation: '定位第一段："When I was growing up, my parents took teaching jobs in a remote town, leaving me in the care of my grandmother." 明确说父母在"a remote town"（偏远城镇）工作，所以把作者留给祖母照顾，对应选项A"his parents worked far away"。B"祖母爱孩子"、C"他想和祖母住"、D"祖母是好老师"均不是原文所述原因。',
        sourceSentence: 'When I was growing up, my parents took teaching jobs in a remote town, leaving me in the care of my grandmother.'
      },
      {
        q: '12. In his childhood, the author thought that Nanay was',
        options: ['A. friendly', 'B. unkind', 'C. lonely', 'D. patient'],
        answer: 1,
        explanation: '定位第二段："Nanay, as we called her, did not hug or kiss children. Her tongue was sharp and her words harsh. She was a tyrant, but she was there." 明确说Nanay不拥抱亲吻孩子，说话尖刻，用词严厉，是个"tyrant"（暴君）。这些描述说明作者童年时认为她"unkind"（不友善），对应选项B。A"友好"、C"孤独"、D"耐心"均与原文相反。',
        sourceSentence: 'Nanay, as we called her, did not hug or kiss children. Her tongue was sharp and her words harsh. She was a tyrant, but she was there.'
      },
      {
        q: '13. According to the author, Nanay',
        options: ['A. ignored teaching the children', 'B. received little education', 'C. urged him to work for the best', 'D. preferred to live on her own'],
        answer: 2,
        explanation: '定位第三段："She taught me many lessons, though I often ignored them. Nanay urged me never to accept second-best. For her, \'good enough\' was never enough..." 明确说Nanay教导作者"never to accept second-best"（绝不接受次优），即要追求最好，对应选项C"urged him to work for the best"。A"忽视教育孩子"、B"受教育少"、D"喜欢独自生活"均与原文不符。',
        sourceSentence: 'Nanay urged me never to accept second-best.'
      },
      {
        q: '14. The author felt sad because he missed',
        options: ['A. the stories about Nanay', 'B. Nanay\'s funeral', 'C. the photo display of Nanay', 'D. Nanay\'s lessons'],
        answer: 0,
        explanation: '定位最后一段："I thought about all the stories she never got a chance to tell me, about her life, about the girl she once had been, about the town I left behind. It occurred to me that perhaps she did not tell me because I did not know how to ask." 作者感到悲伤是因为他错过了Nanay的故事——她从未有机会讲，而他也没有问。对应选项A"the stories about Nanay"。B"Nanay的葬礼"、C"Nanay的照片展示"、D"Nanay的课"均不是作者悲伤的核心原因。',
        sourceSentence: 'I thought about all the stories she never got a chance to tell me, about her life, about the girl she once had been, about the town I left behind.'
      },
      {
        q: '15. The tone of the text can be described as',
        options: ['A. humorous', 'B. joyful', 'C. critical', 'D. regretful'],
        answer: 3,
        explanation: '通读全文，作者回忆了祖母对他的照顾和教导，但成年后因忙于自己的生活而很少探望她。祖母去世后，作者感到"filled with sorrow"（充满悲伤），后悔没有多花时间陪她，后悔没有问她的故事。整篇文章充满了"regretful"（遗憾、后悔）的语气，对应选项D。A"幽默"、B"快乐"、C"批判"均不符合文章的基调。',
        sourceSentence: 'When I visited her grave and reflected on all her birthdays I had allowed to pass, I was filled with sorrow.'
      }
    ]
  },

  // ==========================================================
  // 24. 2025年04月
  // ==========================================================
  {
    session: '2025年04月',
    articleTitle: 'The Spread of Cats',
    articleParas: [
      { para: 0, text: 'Today\'s house cats all come from a single type of wildcat. Researchers believe that it was originally from the Near East, in a region from modern-day Turkiye down to Lebanon. Around 10,000 years ago, farmers began storing grain. The grain attracted mice. Cats could help out with that.' },
      { para: 1, text: 'The same type of cats also ruled in Ancient Egypt. They left their traces in statues and paintings. Researchers wondered how these two separate lines led to today\'s worldwide success of cats. Unlike other archaeologists, Eva-Maria Geigl studied DNA instead of bones.' },
      { para: 2, text: 'Combining the genetic information with other records, the researchers figured out the cats\' paths. After cats befriended the Near East farmers, they began to appear on farms in other places. One example is a 9,500-year-old cat buried in a human grave on the island of Cyprus. There were no wild cats on the island. They must have come from somewhere else. Humans must have brought them on a boat.' },
      { para: 3, text: 'A second wave of cats began living with humans in Egypt 2,500 years ago. The new study shows that during Roman times, these Egyptian cats also began expanding through the Mediterranean. They mixed with the Near East cats and then went farther. They went through Europe and into Southwest Asia.' },
      { para: 4, text: 'When the Viking age began, the expansion of Egyptian cat families exploded. It was likely due to the popularity of using ship cats to kill rats. "Rats on ships not only eat and spoil the food, they also destroy the ropes, so rats could be a disaster for sailors," says Geigl. "Cats prevent these types of disasters."' }
    ],
    questions: [
      {
        q: '11. The first cats were believed to come from',
        options: ['A. Egypt', 'B. the Far East', 'C. the Near East', 'D. East Asia'],
        answer: 2,
        explanation: '定位第一段第二句："Researchers believe that it was originally from the Near East, in a region from modern-day Turkiye down to Lebanon." 明确说猫最初来自"the Near East"（近东），对应选项C。A"埃及"是第二波猫的来源；B"远东"、D"东亚"均与原文不符。',
        sourceSentence: 'Researchers believe that it was originally from the Near East, in a region from modern-day Turkiye down to Lebanon.'
      },
      {
        q: '12. How does Geigl study the spread of cats?',
        options: ['A. By following their traces.', 'B. By analyzing their statues.', 'C. By examining their bones.', 'D. By testing their DNA.'],
        answer: 3,
        explanation: '定位第二段最后一句："Unlike other archaeologists, Eva-Maria Geigl studied DNA instead of bones." 明确说Geigl研究的是"DNA"而不是骨头，对应选项D"By testing their DNA"。A"追踪痕迹"、B"分析雕像"、C"检查骨头"（原文说instead of bones）均不准确。',
        sourceSentence: 'Unlike other archaeologists, Eva-Maria Geigl studied DNA instead of bones.'
      },
      {
        q: '13. The cat found in the Cyprus grave was probably',
        options: ['A. born on the island', 'B. brought to the island', 'C. the world\'s first wild cat', 'D. the world\'s first pet cat'],
        answer: 1,
        explanation: '定位第三段："One example is a 9,500-year-old cat buried in a human grave on the island of Cyprus. There were no wild cats on the island. They must have come from somewhere else. Humans must have brought them on a boat." 明确说塞浦路斯岛上没有野猫，猫一定是人类用船带过来的，对应选项B"brought to the island"。A"在岛上出生"、C"世界第一只野猫"、D"世界第一只宠物猫"均与原文不符。',
        sourceSentence: 'There were no wild cats on the island. They must have come from somewhere else. Humans must have brought them on a boat.'
      },
      {
        q: '14. The cats in Southwest Asia were originally from',
        options: ['A. Egypt', 'B. Cyprus', 'C. Europe', 'D. the Mediterranean'],
        answer: 0,
        explanation: '定位第四段："A second wave of cats began living with humans in Egypt 2,500 years ago. ... They mixed with the Near East cats and then went farther. They went through Europe and into Southwest Asia." 明确说第二波猫来自埃及，它们与近东猫混合后，经过欧洲进入西南亚。因此西南亚的猫最初来自埃及，对应选项A"Egypt"。B"塞浦路斯"、C"欧洲"、D"地中海"均不准确。',
        sourceSentence: 'A second wave of cats began living with humans in Egypt 2,500 years ago. ... They went through Europe and into Southwest Asia.'
      },
      {
        q: '15. Who contributed most to the spread of cats during the Viking age?',
        options: ['A. Researchers.', 'B. Painters.', 'C. Farmers.', 'D. Sailors.'],
        answer: 3,
        explanation: '定位第五段："When the Viking age began, the expansion of Egyptian cat families exploded. It was likely due to the popularity of using ship cats to kill rats. ... Rats on ships ... could be a disaster for sailors. ... Cats prevent these types of disasters." 明确说维京时代猫的扩张是因为船上用猫抓老鼠，而船上的老鼠对"sailors"（水手）是灾难，所以是水手促进了猫的传播，对应选项D"Sailors"。A"研究者"、B"画家"、C"农民"均不是维京时代猫传播的主要推动者。',
        sourceSentence: 'It was likely due to the popularity of using ship cats to kill rats. ... Rats on ships ... could be a disaster for sailors. ... Cats prevent these types of disasters.'
      }
    ]
  },

  // ==========================================================
  // 25. 2025年10月
  // ==========================================================
  {
    session: '2025年10月',
    articleTitle: 'An Important Piece of Life Advice for the Young',
    articleParas: [
      { para: 0, text: 'I spend a lot of time interviewing older people in my research. In one project, I asked them the question: "What can young people do to avoid having regrets when they come to the end of life?" One of the most important messages they have for younger people is to travel—and to do it now.' },
      { para: 1, text: 'An old woman once told me that among the most regretful elders she knows are those who put off travel until it was too late—a mistake she almost made if it had not been for her husband. Her husband said, "I\'m not waiting until I retire. Who knows what things will be like then?"' },
      { para: 2, text: 'So, here\'s a clear opportunity to avoid a future regret: travel in your first 30 years, while you have time and energy. This message comes from some who delayed travel until it was too late. One 86-year-old lady I talked to had lived close to home. With a sad look in her eyes, she told me: "I always wanted to go to Hawaii, but I never made it. Oh, it\'s too late for me."' },
      { para: 3, text: 'I can hear some people saying: That\'s all well and good, but how can we afford it? The elders counter that argument by saying that travel is so rewarding that it should take precedence over other things younger people spend money on. The key is travel\'s value specifically for the young; it broadens their horizons, helps them to find a focus for their lives, and challenges them in new ways.' },
      { para: 4, text: 'Of course, travel is by no means only for the young. Seeing the world is also important in the middle 30 years and the last 30 years. Travel is just that important to feeling like your life has been well-lived.' }
    ],
    questions: [
      {
        q: '11. The writer of this text is most probably a',
        options: ['A. technician', 'B. librarian', 'C. researcher', 'D. consultant'],
        answer: 2,
        explanation: '定位第一段第一句："I spend a lot of time interviewing older people in my research." 明确说作者在"research"（研究）中花大量时间采访老年人，说明作者是"researcher"（研究者），对应选项C。A"技术员"、B"图书管理员"、D"顾问"均与原文不符。',
        sourceSentence: 'I spend a lot of time interviewing older people in my research.'
      },
      {
        q: '12. What can we infer about the old woman and her husband?',
        options: ['A. They had many regrets in their life.', 'B. They traveled a lot before retirement.', 'C. They made a big mistake in their work.', 'D. They avoided the mistake of delaying travel.'],
        answer: 3,
        explanation: '定位第二段："An old woman once told me that among the most regretful elders she knows are those who put off travel until it was too late—a mistake she almost made if it had not been for her husband. Her husband said, \'I\'m not waiting until I retire.\'" 老妇人说推迟旅行是个错误，她差点犯这个错误，幸好她丈夫说"不等退休"。说明他们避免了推迟旅行的错误，对应选项D"They avoided the mistake of delaying travel"。A"他们生活中有很多遗憾"、B"退休前经常旅行"、C"工作中犯了大错"均不准确。',
        sourceSentence: 'a mistake she almost made if it had not been for her husband. Her husband said, "I\'m not waiting until I retire."'
      },
      {
        q: '13. According to Para. 4, the elders think that younger people should',
        options: ['A. give priority to travel', 'B. make time for their families', 'C. find a focus for their lives', 'D. work hard to save money'],
        answer: 0,
        explanation: '定位第四段："The elders counter that argument by saying that travel is so rewarding that it should take precedence over other things younger people spend money on." 明确说老年人认为旅行"should take precedence over other things"（应该优先于其他事情），即"give priority to travel"（优先考虑旅行），对应选项A。B"为家庭腾出时间"、C"找到生活重心"（这是旅行带来的好处，不是老年人建议的做法）、D"努力工作存钱"均不准确。',
        sourceSentence: 'The elders counter that argument by saying that travel is so rewarding that it should take precedence over other things younger people spend money on.'
      },
      {
        q: '14. The 86-year-old lady feels sad as she can no longer',
        options: ['A. stay in Hawaii', 'B. go on a tour', 'C. live close to home', 'D. take care of herself'],
        answer: 1,
        explanation: '定位第三段："One 86-year-old lady I talked to had lived close to home. With a sad look in her eyes, she told me: \'I always wanted to go to Hawaii, but I never made it. Oh, it\'s too late for me.\'" 86岁的老妇人一直想去夏威夷但从未成行，现在太晚了。她感到悲伤是因为她再也不能"go on a tour"（去旅行），对应选项B。A"待在夏威夷"（她从未去过）、C"住在离家近的地方"（这是她一直以来的状态）、D"照顾自己"均不准确。',
        sourceSentence: 'I always wanted to go to Hawaii, but I never made it. Oh, it\'s too late for me.'
      },
      {
        q: '15. The writer of the text thinks that travel is a',
        options: ['A. great midlife activity', 'B. challenge for the old', 'C. lifestyle for the young', 'D. lifelong engagement'],
        answer: 3,
        explanation: '定位最后一段："Of course, travel is by no means only for the young. Seeing the world is also important in the middle 30 years and the last 30 years. Travel is just that important to feeling like your life has been well-lived." 明确说旅行不仅仅是为了年轻人，中年和晚年也很重要，旅行对感觉"人生过得充实"非常重要。说明作者认为旅行是"lifelong engagement"（终身参与的事），对应选项D。A"中年活动"、B"老年人的挑战"、C"年轻人的生活方式"均不全面。',
        sourceSentence: 'Of course, travel is by no means only for the young. Seeing the world is also important in the middle 30 years and the last 30 years.'
      }
    ]
  },

  // ==========================================================
  // 26. 2026年04月
  // ==========================================================
  {
    session: '2026年04月',
    articleTitle: 'Veganism',
    articleParas: [
      { para: 0, text: 'Veganism. What does it mean? To some of you it might be a completely new word. And it\'s certainly a word I have only become familiar with in recent years. A vegan diet is one that contains no animal products. That means no meat, no milk, no eggs, etc.' },
      { para: 1, text: 'I became interested in the vegan lifestyle months ago. As I was surfing videos on the Internet, I came across a woman called Freelee. She claimed to regularly eat around fifty bananas a day to stay healthy. Fifty bananas! I quickly realised that this was not the diet for me. However, what she was saying about veganism did pique my interest. And I went on to watch many more vegan videos. Eventually, I switched to veganism about six months ago.' },
      { para: 2, text: 'My diet at the moment is split roughly equally between fruit and grains such as rice and potatoes. In a typical day, I start off with a fruit drink made of bananas, berries and orange juice. For lunch I typically have potato fries with a sweet sauce. For dinner I normally have rice with a tomato sauce and some vegetables. I even make tasty vegan puddings. One of my favourites is coconut cream mixed with chocolate powder and sugar.' },
      { para: 3, text: 'While veganism is often associated with physical weakness, that is certainly not the case for me. I have discovered many delicious vegan products, which one might never consider as vegan.' },
      { para: 4, text: 'Personally, eating this way has given me a much more positive outlook on life. Another vegan Kristina\'s story is even more amazing. Kristina was bitten by a deadly spider. She was not given the medicines required to survive the bite. Yet she made a full and speedy recovery. She attributes it to the magic power of a vegan lifestyle.' }
    ],
    questions: [
      {
        q: '11. According to Paragraph 1, a vegan diet is',
        options: ['A. advised by food experts', 'B. familiar to most people', 'C. followed by many people', 'D. free from animal products'],
        answer: 3,
        explanation: '定位第一段最后一句："A vegan diet is one that contains no animal products. That means no meat, no milk, no eggs, etc." 明确说纯素饮食"contains no animal products"（不含动物制品），即"free from animal products"，对应选项D。A"由食品专家推荐"、B"大多数人熟悉"（原文说对一些人可能是全新的词）、C"很多人遵循"均与原文不符。',
        sourceSentence: 'A vegan diet is one that contains no animal products. That means no meat, no milk, no eggs, etc.'
      },
      {
        q: '12. The author knew the vegan lifestyle through',
        options: ['A. online videos', 'B. her friends', 'C. vegan books', 'D. TV programs'],
        answer: 0,
        explanation: '定位第二段："As I was surfing videos on the Internet, I came across a woman called Freelee. ... And I went on to watch many more vegan videos. Eventually, I switched to veganism about six months ago." 明确说作者是在网上看视频时了解到纯素生活方式的，对应选项A"online videos"。B"朋友"、C"纯素书籍"、D"电视节目"均与原文不符。',
        sourceSentence: 'As I was surfing videos on the Internet, I came across a woman called Freelee. ... And I went on to watch many more vegan videos.'
      },
      {
        q: '13. The word "pique" (Para. 2) probably means',
        options: ['A. express', 'B. arouse', 'C. expand', 'D. protect'],
        answer: 1,
        explanation: '定位第二段："However, what she was saying about veganism did pique my interest. And I went on to watch many more vegan videos." 她说的话"pique my interest"，然后作者继续看了更多视频。pique意为"激起、引发"，与arouse同义，对应选项B"arouse"。A"表达"、C"扩展"、D"保护"均不准确。',
        sourceSentence: 'However, what she was saying about veganism did pique my interest.'
      },
      {
        q: '14. The author believes that her vegan diet is',
        options: ['A. healthy', 'B. cheap', 'C. sugar-free', 'D. low-salt'],
        answer: 0,
        explanation: '定位第三段："While veganism is often associated with physical weakness, that is certainly not the case for me. I have discovered many delicious vegan products..." 以及第五段："Personally, eating this way has given me a much more positive outlook on life." 作者说纯素饮食没有让她身体虚弱，反而给了她更积极的人生观，说明她认为这种饮食是"healthy"（健康的），对应选项A。B"便宜"、C"无糖"、D"低盐"文中均未提及。',
        sourceSentence: 'While veganism is often associated with physical weakness, that is certainly not the case for me.'
      },
      {
        q: '15. Kristina is mentioned because she',
        options: ['A. attracted a lot of fans', 'B. had a positive attitude toward life', 'C. went on a special fruit-based diet', 'D. quickly recovered from a spider bite'],
        answer: 3,
        explanation: '定位第五段："Another vegan Kristina\'s story is even more amazing. Kristina was bitten by a deadly spider. She was not given the medicines required to survive the bite. Yet she made a full and speedy recovery. She attributes it to the magic power of a vegan lifestyle." 作者提到Kristina是因为她被致命蜘蛛咬伤后没有用药却"made a full and speedy recovery"（完全且迅速地康复了），她把这一切归功于纯素生活方式。对应选项D"quickly recovered from a spider bite"。A"吸引了很多粉丝"、B"对生活有积极态度"、C"进行了特殊的水果饮食"均不是作者提到她的原因。',
        sourceSentence: 'Kristina was bitten by a deadly spider. She was not given the medicines required to survive the bite. Yet she made a full and speedy recovery.'
      }
    ]
  }
];

// 导出（如果使用模块系统）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { exams };
}