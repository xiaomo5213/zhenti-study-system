// data-tianju.js - 填句补文题库（26个考期，第26~30题，每题2分，共10分）
// 结构：每期考试包含一篇有5处空白的短文，文后6个句子中选5个填入空白处
const tianjuExams = [
    // ========== 1. 2013年10月 ==========
    {
        id: '2013-10',
        session: '2013年10月',
        articleTitle: 'Grandpa My Hero',
        passage: [
            'My grandfather had only one child and that was my mother. He always wanted a son but it never happened. [26] When my mom got pregnant, he thought he finally had a boy in the family, but it turned out that her first child was my older sister. When I was born, Grandpa was very happy.',
            'He was the first person to give me a baseball glove and to play baseball with me. My first glove was as small as my whole hand is now. When Grandpa gave me that glove, I was very excited. [27] It was my pride and joy.',
            'When I was five, I played on my first baseball team and Grandpa was the coach. He wanted me to play one position, but I wanted to play another. [28] I tried so hard that I made good progress. Grandpa was very proud of me. Ever since then, he has worked with me to make me a better player.',
            'Grandpa has helped me become not only a better player, but a better person. [29] Today Grandpa does not play baseball with me so often, but he still comes to every practice and game. He sits and watches my practices through rain and shine. [30] I love him and hope he will be around for many more years to support me and baseball.'
        ],
        options: [
            { letter: 'A', text: 'I was so happy I even slept with it at my side.' },
            { letter: 'B', text: 'He wanted a son because he wanted to teach him to play baseball.' },
            { letter: 'C', text: 'I owe him all my success in baseball and in my life.' },
            { letter: 'D', text: 'In order to make me happy, he let me play what I wanted.' },
            { letter: 'E', text: 'He was named our baseball team\'s number one fan by my coach.' },
            { letter: 'F', text: 'My grandpa is still working at a store.' }
        ],
        answers: { '26': 'B', '27': 'A', '28': 'D', '29': 'C', '30': 'E' },
        explanations: {
            '26': '空格前说"He always wanted a son but it never happened"，空格后说"When my mom got pregnant, he thought he finally had a boy in the family"。选项B "He wanted a son because he wanted to teach him to play baseball" 解释了他想要儿子的原因，与后文他给"我"棒球手套、教"我"打球呼应。',
            '27': '空格前说"When Grandpa gave me that glove, I was very excited"，空格后说"It was my pride and joy"。选项A "I was so happy I even slept with it at my side" 具体描述了他得到手套后的兴奋程度，与"very excited / pride and joy"直接衔接。',
            '28': '空格前说"He wanted me to play one position, but I wanted to play another"，空格后说"I tried so hard that I made good progress"。选项D "In order to make me happy, he let me play what I wanted" 中的"let me play what I wanted"与"he wanted me to play one position, but I wanted another"呼应，说明爷爷最终让步。',
            '29': '空格前说"Grandpa has helped me become not only a better player, but a better person"，空格后说"Today Grandpa does not play baseball with me so often"。选项C "I owe him all my success in baseball and in my life" 总结爷爷对作者的影响，与前文"better player / better person"呼应。',
            '30': '空格前说"He sits and watches my practices through rain and shine"，空格后说"I love him and hope he will be around for many more years"。选项E "He was named our baseball team\'s number one fan by my coach" 中的"number one fan"与"watches my practices through rain and shine"呼应，说明爷爷对棒球的支持。'
        }
    },

    // ========== 2. 2014年4月 ==========
    {
        id: '2014-04',
        session: '2014年4月',
        articleTitle: 'Biological Clock',
        passage: [
            'When the sun rises on a warm and sunny day, you can see some flowers open up. When they close late in the afternoon, other flowers open.',
            'Biological rhythms (生物节律), like the opening and closing of flowers, happen all over nature. But not all of them are daily rhythms. Some, like the beating of our heart, happen every second. [26] Scientists use the term biological clock to describe the timing that controls biological rhythms. [27] In some animals it is probably controlled by the brain. In plants and other living things that have no brain, it must be something else.',
            'The migration of animals happens when a signal is sent out. For example, when days become shorter, birds leave the northern parts of the world and fly south where it is warm. [28]',
            'Humans also have biological clocks that control their daily rhythms. When people travel by plane from one continent to another, they often cross many time zones. Their internal clocks don\'t seem to work correctly. We call this jet lag (时差). [29] People who work night shifts also have problems with their biological clocks. They may not be as active as people who work during the daytime.',
            'Biological clocks control many rhythms of life. [30] Doctors are looking for new ways to make traveling more comfortable and medical treatment more effective.'
        ],
        options: [
            { letter: 'A', text: 'But where can you find it?' },
            { letter: 'B', text: 'This makes them feel tired.' },
            { letter: 'C', text: 'In the summer they fly back to have babies.' },
            { letter: 'D', text: 'We are learning more and more about them.' },
            { letter: 'E', text: 'Biological clocks can be adjusted.' },
            { letter: 'F', text: 'Other rhythms are based on months, seasons or years.' }
        ],
        answers: { '26': 'F', '27': 'A', '28': 'C', '29': 'B', '30': 'D' },
        explanations: {
            '26': '空格前说"Some, like the beating of our heart, happen every second"，空格后说"Scientists use the term biological clock..."。选项F "Other rhythms are based on months, seasons or years" 中的"Other rhythms"与前文"Some... happen every second"形成对比，介绍其他类型的生物节律。',
            '27': '空格前说"Scientists use the term biological clock to describe the timing that controls biological rhythms"，空格后说"In some animals it is probably controlled by the brain"。选项A "But where can you find it?" 中的"it"指代前文的"biological clock"，"where can you find it"引出后文关于它存在于哪里的讨论。',
            '28': '空格前说"when days become shorter, birds leave the northern parts of the world and fly south where it is warm"。选项C "In the summer they fly back to have babies" 中的"In the summer"与"days become shorter"形成季节对比，"fly back"与"fly south"呼应。',
            '29': '空格前说"Their internal clocks don\'t seem to work correctly. We call this jet lag"，空格后说"People who work night shifts also have problems"。选项B "This makes them feel tired" 中的"This"指代"jet lag"，"feel tired"自然引出后文的"not as active"。',
            '30': '空格前说"Biological clocks control many rhythms of life"，空格后说"Doctors are looking for new ways..."。选项D "We are learning more and more about them" 中的"them"指代"biological clocks"，总结前文并引出后文关于研究的描述。'
        }
    },

    // ========== 3. 2014年10月 ==========
    {
        id: '2014-10',
        session: '2014年10月',
        articleTitle: 'Fruit',
        passage: [
            'Imagine a world without fruit. We wouldn\'t be very healthy. We get a lot of important vitamins from eating fruit.',
            'We think of fruit primarily as something to eat. [26] Fruit is part of a flowering plant and it carries the seeds. The purpose of fruit is to protect a plant\'s seeds and help them get spread about. Wind and water spread seeds. So do animals when they eat fruit and drop the seeds. [27]',
            'There are two main types of fruit: fleshy and dry. Fleshy fruits are soft and juicy. Pears, bananas and apples are all fleshy fruits. [28] Grains like wheat and rice, or nuts like chestnuts (板栗), are dry fruits.',
            'But wait: You\'ve eaten oranges and grapes without seeds. How can they be fruits? It\'s because people have changed the way they grow fruit. They can now grow seedless fruit. Seedless fruit comes from special plants that are made by combining two varieties of a fruit to form a new variety. These special plants grow and produce seeds. [29] These plants cannot reproduce themselves. They can make fruit, but the fruit has no seeds.',
            'Fruits are a source of substances that keep us alive and healthy. So people make use of fruits for many foods. We make juices from them. We make jams and sweets. [30] Beer comes from grains and wine comes from grapes, and some particular wines are made from apples, peaches, or other fruits.'
        ],
        options: [
            { letter: 'A', text: 'Dry fruits are thin and hard.' },
            { letter: 'B', text: 'We even make alcohol from fruit.' },
            { letter: 'C', text: 'But fruit has a purpose quite apart from our needs.' },
            { letter: 'D', text: 'So these plants produce fleshy fruits.' },
            { letter: 'E', text: 'Then the seeds grow into new plants.' },
            { letter: 'F', text: 'But the plants grown from these seeds are seedless.' }
        ],
        answers: { '26': 'C', '27': 'E', '28': 'A', '29': 'F', '30': 'B' },
        explanations: {
            '26': '空格前说"We think of fruit primarily as something to eat"，空格后说"Fruit is part of a flowering plant..."。选项C "But fruit has a purpose quite apart from our needs" 中的"But"转折，从"我们吃水果"转向"水果本身的目的"，与后文衔接。',
            '27': '空格前说"So do animals when they eat fruit and drop the seeds"，空格后是新的段落。选项E "Then the seeds grow into new plants" 中的"Then"承接前文种子被传播的过程，说明种子接下来的去向。',
            '28': '空格前说"Pears, bananas and apples are all fleshy fruits"，空格后说"Grains like wheat and rice... are dry fruits"。选项A "Dry fruits are thin and hard" 引出下一种水果类型"dry fruits"，与后文举例对应。',
            '29': '空格前说"These special plants grow and produce seeds"，空格后说"These plants cannot reproduce themselves"。选项F "But the plants grown from these seeds are seedless" 中的"But"转折，"seedless"与后文"cannot reproduce themselves"呼应。',
            '30': '空格前说"We make jams and sweets"，空格后说"Beer comes from grains and wine comes from grapes"。选项B "We even make alcohol from fruit" 中的"even"递进，引出后文关于酒类的说明。'
        }
    },

    // ========== 4. 2015年4月 ==========
    {
        id: '2015-04',
        session: '2015年4月',
        articleTitle: 'Playing Games -- Not Only Fun',
        passage: [
            'For many people, playing games is a way to have some fun. [26] It is a great way to keep your mental health in check. Actually, anything that requires you to do some thinking will help you keep your brain healthy.',
            'You may say that this sounds great but you just don\'t have the time to do it. If you want to improve your mental health, you will make time for it. [27] You can exercise your brain before work and while the rest of your family is still in bed. This can greatly change your attitude for the rest of the day.',
            'Turn the TV off in the evening and spend some time playing games alone or with a family member. [28] Try a variety of new games, too. This way, you don\'t get bored playing the same one all the time.',
            'Most games offer several different levels. To get the most exercise for your brain, start out with the easy stuff. [29] As your level of skill improves, go on to challenge your brain by moving into more advanced levels of the game.',
            'Find the games that you really enjoy playing. Keeping your brain sharp with such games is really going to pay off for you in many ways. [30] You will find that you have less stress and that it is easier to make decisions. You will also find that your memory is improving.'
        ],
        options: [
            { letter: 'A', text: 'Set aside about 30 minutes a day when you can play games.' },
            { letter: 'B', text: 'This is especially true if you are new to a game.' },
            { letter: 'C', text: 'Playing games can help you make new friends.' },
            { letter: 'D', text: 'You will be surprised at how much it improves your life.' },
            { letter: 'E', text: 'However, it can also help you exercise your brain.' },
            { letter: 'F', text: 'You can also invite friends over to play games with you.' }
        ],
        answers: { '26': 'E', '27': 'A', '28': 'F', '29': 'B', '30': 'D' },
        explanations: {
            '26': '空格前说"playing games is a way to have some fun"，空格后说"It is a great way to keep your mental health in check"。选项E "However, it can also help you exercise your brain" 中的"also"承接前文的"fun"，"exercise your brain"与后文"mental health / brain healthy"呼应。',
            '27': '空格前说"If you want to improve your mental health, you will make time for it"，空格后说"You can exercise your brain before work and while the rest of your family is still in bed"。选项A "Set aside about 30 minutes a day when you can play games" 给出了具体的时间建议，与后文"before work"等时间描述衔接。',
            '28': '空格前说"spend some time playing games alone or with a family member"，空格后说"Try a variety of new games, too"。选项F "You can also invite friends over to play games with you" 中的"also"与后文"too"呼应，且"friends"与"family member"形成并列。',
            '29': '空格前说"start out with the easy stuff"，空格后说"As your level of skill improves"。选项B "This is especially true if you are new to a game" 中的"This"指代前文"start out with the easy stuff"，"new to a game"与后文"level of skill improves"形成对比。',
            '30': '空格前说"Keeping your brain sharp with such games is really going to pay off for you in many ways"，空格后说"You will find that you have less stress..."。选项D "You will be surprised at how much it improves your life" 中的"improves your life"总起后文的具体好处，衔接自然。'
        }
    },

      // ========== 5. 2015年10月 ==========
    {
        id: '2015-10',
        session: '2015年10月',
        articleTitle: 'The Princess Disease',
        passage: [
            'Have you ever heard of the princess disease? It is a terrible disease. [26] It wastes away at one\'s social life and people\'s tolerance. People with this disease think they are better than everyone else, without a real reason.',
            'Jin is a girl who suffers from this disease. [27] She thinks she is better looking than her friends and most people she has met. It is, as far as she is concerned, a well-known fact that she dresses better, sings better, and dances better than most people in her school, too.',
            'So is Jin justified in believing that she is better than everyone else? [28] Of course, she thinks this is because the singing coach hates her, since the coach has bad skin and is jealous of her. She is good at sports, but she isn\'t the strongest, fastest, or even the best at any of their school\'s events. [29] She, again thinks it was because of the haters. After losing, she pretended she\'d just run for fun and it was no big deal, but in fact it was a huge deal to her.',
            'Jin definitely has the disease. The treatment is to stop being so mean and get a little modesty. [30] She might even get rid of this disease if she tries hard enough.'
        ],
        options: [
            { letter: 'A', text: 'She is too proud of herself.' },
            { letter: 'B', text: 'Jin is very popular.' },
            { letter: 'C', text: 'Then things might become better for her.' },
            { letter: 'D', text: 'She sings well, but not well enough to be a lead singer.' },
            { letter: 'E', text: 'It threatens to push one\'s friends away.' },
            { letter: 'F', text: 'She ran for class president, but came in third.' }
        ],
        answers: { '26': 'E', '27': 'A', '28': 'D', '29': 'F', '30': 'C' },
        explanations: {
            '26': '空格前说"It is a terrible disease"，空格后说"It wastes away at one\'s social life and people\'s tolerance"。选项E "It threatens to push one\'s friends away" 中的"It"指代"princess disease"，"push one\'s friends away"与后文"wastes away at one\'s social life"直接呼应。',
            '27': '空格前说"Jin is a girl who suffers from this disease"，空格后说"She thinks she is better looking than her friends"。选项A "She is too proud of herself" 概括了Jin的症状，与后文"thinks she is better"呼应。',
            '28': '空格前说"So is Jin justified in believing that she is better than everyone else?"，空格后说"Of course, she thinks this is because the singing coach hates her"。选项D "She sings well, but not well enough to be a lead singer" 举例说明Jin的实际水平，与后文关于唱歌教练的讨论衔接。',
            '29': '空格前说"She is good at sports, but she isn\'t the strongest, fastest, or even the best"，空格后说"She, again thinks it was because of the haters"。选项F "She ran for class president, but came in third" 具体举例说明她的失败，与后文她归咎于"haters"呼应。',
            '30': '空格前说"The treatment is to stop being so mean and get a little modesty"，空格后说"She might even get rid of this disease if she tries hard enough"。选项C "Then things might become better for her" 中的"Then"承接前文的治疗建议，"things might become better"与"get rid of this disease"呼应。'
        }
    },

    // ========== 6. 2016年4月 ==========
    {
        id: '2016-04',
        session: '2016年4月',
        articleTitle: 'Natural Resources',
        passage: [
            'Throughout history, people have often selected where they want to live based on the natural resources that are available in the area. [26] Some of these resources include water, food sources such as fruits and vegetables, and animals that can be caught or hunted.',
            'A region\'s natural resources determine the way of life of its people. [27] On the other hand, poor soil will either send people looking for better places, or attract people with other purposes for the land, such as setting up business or factories.',
            '[28] People who wish to make a living as fishermen can do so by the ocean, but cannot do so in the desert. Desert people have many traditional and unique foods, which cannot be found in the forest. Each area attracts people based on their interests and purposes.',
            'Areas that have rich water resources will naturally have more people. Traditionally, villages, towns and cities built near water have been the most successful. People there are able to use the water resources to meet their daily needs. [29] Places that are hard to reach, such as high mountains or dry deserts, will have fewer people living in them.',
            '[30] For too long, people have destroyed natural resources, using up those resources that cannot be easily replaced. On the earth, we are lucky to have many resources that are renewable, such as sun, wind, water, and trees. As more and more focus is placed on the use of renewable resources, it will become easier to protect our planet from further harm.'
        ],
        options: [
            { letter: 'A', text: 'It is easy to find new resources in nature.' },
            { letter: 'B', text: 'Renewable resources are those that can be replaced easily.' },
            { letter: 'C', text: 'While you may not think of oceans as natural resources, they are.' },
            { letter: 'D', text: 'For example, regions with rich soil can support farming societies.' },
            { letter: 'E', text: 'They can also use the water to help them move goods to other areas.' },
            { letter: 'F', text: 'Natural resources are useful to people, and they come from the earth.' }
        ],
        answers: { '26': 'F', '27': 'D', '28': 'C', '29': 'E', '30': 'B' },
        explanations: {
            '26': '空格前说"based on the natural resources that are available in the area"，空格后说"Some of these resources include water, food sources..."。选项F "Natural resources are useful to people, and they come from the earth" 给出了自然资源的定义，与后文举例"Some of these resources"衔接。',
            '27': '空格前说"A region\'s natural resources determine the way of life of its people"，空格后说"On the other hand, poor soil will..."。选项D "For example, regions with rich soil can support farming societies" 中的"For example"和"rich soil"与后文"poor soil"形成正反对比。',
            '28': '空格后说"People who wish to make a living as fishermen can do so by the ocean"。选项C "While you may not think of oceans as natural resources, they are" 引出"oceans"作为自然资源，与后文"fishermen / ocean"直接对应。',
            '29': '空格前说"People there are able to use the water resources to meet their daily needs"，空格后说"Places that are hard to reach..."。选项E "They can also use the water to help them move goods to other areas" 中的"also"承接前文"use the water resources"，进一步说明水的用途。',
            '30': '空格后说"For too long, people have destroyed natural resources... On the earth, we are lucky to have many resources that are renewable"。选项B "Renewable resources are those that can be replaced easily" 给出了"renewable resources"的定义，与后文讨论可再生资源衔接。'
        }
    },

    // ========== 7. 2016年10月 ==========
    {
        id: '2016-10',
        session: '2016年10月',
        articleTitle: 'Remaining Active',
        passage: [
            'Our body is an amazing object. [26] If you are inactive most of the time, your body will quickly become tired when it should be active. But if you are very active, your body will get used to the hard work, and the work will become easier for you to do.',
            'Physical activity can help people remain active and stay healthy. [27] It also helps people sleep better. This is why active students don\'t complain about being tired. They have a good night\'s sleep and have the energy to study hard and have fun every day.',
            'Physical activity also makes people look and feel good. Activity burns more calories (卡路里) than just sitting. [28] In addition, regular exercise can make your muscles and bones stronger.',
            'There are many factors to look at when you select a new physical activity. The most important is to choose something you enjoy. If you like jumping rope, that is the activity you should do. [29] In fact, two days of basketball, three days of swimming, and two days of bicycling can be more fun than jogging every day.',
            '[30] Some skills will improve with practice while others may always be difficult for you. If you enjoy an activity, feel free to do it. No one cares whether you can do it well or not, and you don\'t need to care about it either.',
            'Whatever activity you choose, remain active. It can make you physically fit and healthy for life.'
        ],
        options: [
            { letter: 'A', text: 'But you don\'t have to do the same thing every day.' },
            { letter: 'B', text: 'Different activities need different skills.' },
            { letter: 'C', text: 'You may prefer to participate in team activities.' },
            { letter: 'D', text: 'It helps the body fight off illness.' },
            { letter: 'E', text: 'The more you ask of it, the more it can do.' },
            { letter: 'F', text: 'It is very important to keep a healthy weight.' }
        ],
        answers: { '26': 'E', '27': 'D', '28': 'F', '29': 'A', '30': 'B' },
        explanations: {
            '26': '空格前说"Our body is an amazing object"，空格后说"If you are inactive most of the time, your body will quickly become tired..."。选项E "The more you ask of it, the more it can do" 中的"it"指代"body"，说明身体越用越强，与后文"if you are very active... the work will become easier"呼应。',
            '27': '空格前说"Physical activity can help people remain active and stay healthy"，空格后说"It also helps people sleep better"。选项D "It helps the body fight off illness" 中的"It"指代"physical activity"，"also"与后文"also"并列，说明体育活动的另一个好处。',
            '28': '空格前说"Activity burns more calories than just sitting"，空格后说"In addition, regular exercise can make your muscles and bones stronger"。选项F "It is very important to keep a healthy weight" 中的"healthy weight"与"burns more calories"呼应，"In addition"承接后文。',
            '29': '空格前说"If you like jumping rope, that is the activity you should do"，空格后说"In fact, two days of basketball, three days of swimming..."。选项A "But you don\'t have to do the same thing every day" 中的"But"转折，引出后文关于多种运动组合的建议。',
            '30': '空格后说"Some skills will improve with practice while others may always be difficult for you"。选项B "Different activities need different skills" 中的"skills"与后文"Some skills"直接呼应，作为新段落的主题句。'
        }
    },

    // ========== 8. 2017年4月 ==========
    {
        id: '2017-04',
        session: '2017年4月',
        articleTitle: 'The Power of Positive Thinking',
        passage: [
            'Human emotion is one of those factors that cannot be defined exactly. The reason is that it is quite uncertain. We cannot change the feelings that are roused when we experience different things. [26]',
            'Some people forget that they are in control. They make their choices based on their emotions. They experience failure and loss and let their emotions rule their decisions. They are trapped in their sadness and thus, experience more failure.',
            'Some people say they need a lucky break to recover from their failures. [27] They need to get over their failures on their own. But how do they do that? The answer is: positive thinking.',
            'People often fail to realize the power of positive thinking. [28] They fail to realize that they only need to overcome their fears in order to truly succeed in life. They just have too much pride and are blinded of their own shortcomings.',
            'The power of positive thinking lies in belief. [29] You make the decisions that affect your life. You may not be able to change your environment, but you are able to change the way you react to it.',
            'The power of positive thinking lies beyond false courage. You need to take another look at the world around you. [30] You can\'t rest on your success, or foolish pride will cause you to make wrong decisions.'
        ],
        options: [
            { letter: 'A', text: 'We can benefit a lot from positive thinking.' },
            { letter: 'B', text: 'However, life rarely gives people a break.' },
            { letter: 'C', text: 'You need to believe that you are in control.' },
            { letter: 'D', text: 'They fail to realize that their worst enemy lies within themselves.' },
            { letter: 'E', text: 'However, we must always remember that we can control our reactions.' },
            { letter: 'F', text: 'You can\'t just take a look at your failures, or you will lose hope.' }
        ],
        answers: { '26': 'E', '27': 'B', '28': 'D', '29': 'C', '30': 'F' },
        explanations: {
            '26': '空格前说"We cannot change the feelings that are roused when we experience different things"。选项E "However, we must always remember that we can control our reactions" 中的"However"转折，指出虽然不能改变感受，但可以控制反应，引出后文关于控制的讨论。',
            '27': '空格前说"Some people say they need a lucky break to recover from their failures"，空格后说"They need to get over their failures on their own"。选项B "However, life rarely gives people a break" 中的"However"转折，"rarely gives people a break"与"need a lucky break"形成对比。',
            '28': '空格前说"People often fail to realize the power of positive thinking"，空格后说"They fail to realize that they only need to overcome their fears"。选项D "They fail to realize that their worst enemy lies within themselves" 与前后文的"They fail to realize"句式一致，形成排比。',
            '29': '空格前说"The power of positive thinking lies in belief"，空格后说"You make the decisions that affect your life"。选项C "You need to believe that you are in control" 中的"believe"与"belief"呼应，"in control"与"make the decisions"呼应。',
            '30': '空格前说"You need to take another look at the world around you"，空格后说"You can\'t rest on your success, or foolish pride will cause you to make wrong decisions"。选项F "You can\'t just take a look at your failures, or you will lose hope" 与后文"You can\'t rest on your success"句式一致，形成正反对比。'
        }
    },

     // ========== 9. 2017年10月 ==========
    {
        id: '2017-10',
        session: '2017年10月',
        articleTitle: 'My Major Problem',
        passage: [
            'Decision-making is something I struggle with. In fact, I\'d rather have someone else make decisions for me.',
            'As I sat in a crowded information session (咨询会) at a college last summer, I was again faced with the pressure of making a decision. [26] He then asked each of us to give our intended major. I looked at my mother with panic.',
            '"A major?" I said. "I can\'t even decide what socks to wear to school!"',
            'I wanted to say I was undecided. But as my turn to speak approached, my confidence decreased. [27] I watched the girl in front of me. She was searching for some obscure (鲜为人知) major. I realized I couldn\'t just say undecided. So, when my turn came, I uneasily said, "I want to major in business." I could feel "liar" written all over my face.',
            '[28] I felt ashamed. "Why couldn\'t I have said that?" I thought. The admissions adviser even said that a lot of people are uncertain. That is why students have to decide until the end of the second year.',
            'I have no idea what I want to do with my life. All I know is that I don\'t want to do anything that involves blood. [29] This isn\'t really narrowing it down. I\'ve been told many people start college with one major, and graduate with a degree in something totally different.',
            'After my experience at the information session, I\'ve learned not to be afraid of saying I\'m "undecided." I know now that I am not the only one uncertain about future studies. I\'m still experiencing a "major" problem. [30]'
        ],
        options: [
            { letter: 'A', text: 'Everyone before me had declared a major.' },
            { letter: 'B', text: 'So I\'ve narrowed my list down to anything but medicine.' },
            { letter: 'C', text: 'The admissions officer asked us to introduce ourselves briefly.' },
            { letter: 'D', text: 'In the end, only one brave person said she was undecided.' },
            { letter: 'E', text: 'Admissions advisors help you to make decisions.' },
            { letter: 'F', text: 'However, I\'m confident I\'ll find a solution.' }
        ],
        answers: { '26': 'C', '27': 'A', '28': 'D', '29': 'B', '30': 'F' },
        explanations: {
            '26': '空格后说"He then asked each of us to give our intended major"（然后他让我们每个人给出意向专业），说明前文刚提到某位官员让我们做介绍。选项C "The admissions officer asked us to introduce ourselves briefly"（招生官让我们简单自我介绍）中的"admissions officer"与后文"He"呼应，"introduce ourselves"与后文"give our intended major"形成先后顺序。',
            '27': '空格后说"I watched the girl in front of me. She was searching for some obscure major. I realized I couldn\'t just say undecided."（我看着前面的女孩，她在寻找某个冷门专业。我意识到我不能只说"还没决定"。）说明作者前面的人都已宣布了专业。选项A "Everyone before me had declared a major"（在我之前的每个人都已宣布了专业）与后文"I watched the girl in front of me"和"I couldn\'t just say undecided"形成因果呼应。',
            '28': '空格后说"I felt ashamed. ‘Why couldn\'t I have said that?’"（我感到羞愧。"为什么我不能那样说呢？"）说明前面有人说了"还没决定"，而作者没有说。选项D "In the end, only one brave person said she was undecided"（最后，只有一个勇敢的人说了她还没决定）中的"only one brave person"与作者"感到羞愧"形成对比，说明作者不够勇敢。',
            '29': '空格前说"All I know is that I don\'t want to do anything that involves blood"（我所知道的就是我不想做任何涉及血液的事情），空格后说"This isn\'t really narrowing it down"（这并没有真正缩小范围）。选项B "So I\'ve narrowed my list down to anything but medicine"（所以我把清单缩小到除了医学以外的任何专业）中的"So"承接前文"不想做涉及血液的事"，"anything but medicine"与后文"isn\'t really narrowing it down"形成自嘲式的呼应。',
            '30': '空格前说"I\'m still experiencing a ‘major’ problem"（我仍在经历一个"专业"问题），作为全文结尾。选项F "However, I\'m confident I\'ll find a solution"（然而，我相信我会找到解决办法）中的"However"形成转折，从"仍有问题"到"但我有信心"，是典型的文章结尾句。'
        }
    },

    // ========== 10. 2018年4月 ==========
    {
        id: '2018-04',
        session: '2018年4月',
        articleTitle: 'Homeschooling vs School',
        passage: [
            'Many kids find it hard to concentrate in school. Classmates, bells, and even cheerful decorations in school can make it hard for some children to concentrate. [26]',
            'In some schools, conditions are bad for children\'s safety and health. [27] Homeschooling parents can control their children\'s environment to make sure it is safe and healthy.',
            'When students sit in a classroom surrounded by classmates, under the tight control of adults, they find it very hard to function in a normal way. Homeschooling children don\'t have to stay in the school. [28] They can interact with people in familiar situations, and they feel they can interact with people as adults.',
            'School bullying (以强欺弱) is a serious problem. [29] Although schools are starting to deal with this problem, many kids are still afraid of going to school. Homeschooling kids can choose who they associate with and walk away from an uncomfortable situation.',
            'Schools are cutting field trips. [30] On the contrary, homeschooling can move outdoors, to the beach or the zoo. For homeschooling families, the whole world is a classroom. Learning takes place everywhere and it never ends.'
        ],
        options: [
            { letter: 'A', text: 'Instead, they are out in the community.' },
            { letter: 'B', text: 'In this case, homeschooling offers fewer interruptions.' },
            { letter: 'C', text: 'Children usually sit at desks or around the kitchen tables.' },
            { letter: 'D', text: 'Some children do not treat their classmates appropriately.' },
            { letter: 'E', text: 'Many students go to class in old or poorly-designed buildings.' },
            { letter: 'F', text: 'Even a short trip to the countryside is controversial in some places.' }
        ],
        answers: { '26': 'B', '27': 'E', '28': 'A', '29': 'D', '30': 'F' },
        explanations: {
            '26': '空格前说"Classmates, bells, and even cheerful decorations in school can make it hard for some children to concentrate"（同学、铃声甚至学校里欢快的装饰都可能让一些孩子难以集中注意力）。选项B "In this case, homeschooling offers fewer interruptions"（在这种情况下，在家上学提供了更少的干扰）中的"In this case"指代前文学校干扰多的情况，"homeschooling offers fewer interruptions"正是解决办法，与第一段主题呼应。',
            '27': '空格前说"In some schools, conditions are bad for children\'s safety and health"（在一些学校，条件对孩子的安全和健康不利），空格后说"Homeschooling parents can control their children\'s environment to make sure it is safe and healthy"（在家上学的父母可以控制孩子的环境以确保其安全健康）。选项E "Many students go to class in old or poorly-designed buildings"（许多学生在老旧或设计糟糕的建筑物里上课）中的"old or poorly-designed buildings"具体说明前文"conditions are bad"，与后文父母可以控制环境形成对比。',
            '28': '空格前说"Homeschooling children don\'t have to stay in the school"（在家上学的孩子不必待在学校），空格后说"They can interact with people in familiar situations"（他们可以在熟悉的情境中与人互动）。选项A "Instead, they are out in the community"（相反，他们身处社区之中）中的"Instead"承接前文"don\'t have to stay in the school"，"out in the community"与"familiar situations"呼应。',
            '29': '空格前说"School bullying is a serious problem"（校园欺凌是一个严重的问题），空格后说"Although schools are starting to deal with this problem"（尽管学校开始处理这个问题）。选项D "Some children do not treat their classmates appropriately"（一些孩子不恰当地对待他们的同学）具体说明了校园欺凌的表现，与"School bullying"呼应，为后文"deal with this problem"做铺垫。',
            '30': '空格前说"Schools are cutting field trips"（学校正在削减实地考察旅行），空格后说"On the contrary, homeschooling can move outdoors, to the beach or the zoo"（相反，在家上学可以走向户外，去海滩或动物园）。选项F "Even a short trip to the countryside is controversial in some places"（在一些地方，即使是去乡村的短途旅行也备受争议）中的"a short trip"与"field trips"呼应，"controversial"与"cutting"呼应，解释了学校为什么削减旅行。'
        }
    },

    // ========== 11. 2018年10月 ==========
    {
        id: '2018-10',
        session: '2018年10月',
        articleTitle: 'George Washington Carver',
        passage: [
            'George Washington Carver was born in Missouri between 1861 and 1864. He was born into slavery. It was not until the end of the Civil War that George became free. As he grew up, George loved to read and learn. Black children were not allowed to go to the same schools as white children. [26] Every early morning, he left home to go to the school. There he studied very hard.',
            'After he finished high school, George wanted to go to college. At that time, few black students could afford the college tuition (学费). He worked for a time until he could borrow money to go to college. In 1890 he went to Simpson College in Iowa. [27] His drawings of plants were so good that his teacher suggested he study botany, which is the science of plants. George went to an agricultural college in Iowa in 1891, where he not only graduated but also taught students.',
            'George continued to study plants. [28] In 1896, he was invited to teach at the Tuskegee Institute in Alabama. He worked there as a professor for 47 years. He also became an important research scientist. He discovered new ways to use plants. [29] These include dyes, plastics, paint, and makeup. He also taught farmers how to grow crops to help the soil, and new ways to farm.',
            'In 1943 George Washington Carver died. [30] There is a national monument to him in Missouri where he grew up. He has had a ship named after him. In 1990 he was admitted to the National Inventors Hall of Fame. The boy who wanted to learn became a great inventor and scientist.'
        ],
        options: [
            { letter: 'A', text: 'There he studied art and music.' },
            { letter: 'B', text: 'He found about 100 new ways to use peanuts.' },
            { letter: 'C', text: 'He has been honored all over the world for his achievements.' },
            { letter: 'D', text: 'He became very famous for his work.' },
            { letter: 'E', text: 'After graduation, George began working for a law firm.' },
            { letter: 'F', text: 'The schools for black children were far from where George lived.' }
        ],
        answers: { '26': 'F', '27': 'A', '28': 'D', '29': 'B', '30': 'C' },
        explanations: {
            '26': '空格后说"Every early morning, he left home to go to the school"（每天一大早，他就离开家去上学），说明学校离家很远，需要早起赶路。选项F "The schools for black children were far from where George lived"（黑人儿童的学校离George住的地方很远）中的"far from"与"left home every early morning"直接呼应。',
            '27': '空格前说"In 1890 he went to Simpson College in Iowa"（1890年他去了爱荷华州的Simpson学院），空格后说"His drawings of plants were so good that his teacher suggested he study botany"（他的植物画非常好，以至于老师建议他学习植物学）。选项A "There he studied art and music"（在那里他学习艺术和音乐）中的"There"指代Simpson College，"art"与后文"drawings"直接呼应，说明他为什么画植物。',
            '28': '空格前说"George continued to study plants"（George继续研究植物），空格后说"In 1896, he was invited to teach at the Tuskegee Institute in Alabama"（1896年，他被邀请到阿拉巴马州的Tuskegee学院任教）。选项D "He became very famous for his work"（他因工作而非常出名）承上启下，说明他的研究使他出名，因此被邀请去教书。',
            '29': '空格前说"He discovered new ways to use plants"（他发现利用植物的新方法），空格后说"These include dyes, plastics, paint, and makeup"（这些包括染料、塑料、油漆和化妆品）。选项B "He found about 100 new ways to use peanuts"（他发现了大约100种使用花生的新方法）中的"new ways to use peanuts"与"new ways to use plants"呼应，"These include"承接后文的具体列举。',
            '30': '空格前说"In 1943 George Washington Carver died"（1943年George Washington Carver去世），空格后说"There is a national monument to him... He has had a ship named after him... he was admitted to the National Inventors Hall of Fame"（有国家纪念碑……有以他命名的船……入选国家发明家名人堂）。选项C "He has been honored all over the world for his achievements"（他因成就而受到全世界的尊敬）总起后文的纪念方式。'
        }
    },

    // ========== 12. 2019年4月 ==========
    {
        id: '2019-04',
        session: '2019年4月',
        articleTitle: 'A Lucky Pen',
        passage: [
            '"Mommy, I\'ve got something for you!" George ran through the door after school one day. He waved something above his head. "See, it\'s a lucky pen!" [26] I looked at the pen in my hand. There was nothing special about it. But I didn\'t realize how special it was at that moment.',
            'I had made the decision to pursue a career in writing. [27] I had dreamed about it for a long time but I was afraid to take a chance. I was scared of rejection. The night before, I had voiced those fears to my husband when I thought George wasn\'t listening. But George must have overheard us. Now he stood in front of me, watching me examine the pen. "You don\'t have to be scared now," he said. "This pen will make your stories great and everyone will love you." Tears filled my eyes. [28] Rejection didn\'t seem like such a big deal any more. Even if I never sold the first story, I had everything I could ever need. George in my life!',
            'I found out later how lucky I was when I heard what he did to get the pen. During lunch break at school that day, George heard a boy talking about a lucky pen he had. [29] The boy was a tough negotiator but George didn\'t give up. In the end, he traded his lunch, his favorite cartoon book, and his new football, his most prized possession for that pen. Just to make me feel better.',
            '[30] It never fails to remind me just how lucky I am! I am the luckiest mother in the world now and forever.'
        ],
        options: [
            { letter: 'A', text: 'He got it as a birthday gift.' },
            { letter: 'B', text: 'It was a decision full of fear and anxiety for me.' },
            { letter: 'C', text: 'He wanted to get it for me.' },
            { letter: 'D', text: 'He handed me the pen happily and proudly.' },
            { letter: 'E', text: 'I grabbed him and pulled him tight against me.' },
            { letter: 'F', text: 'I still have that pen, though it\'s long out of ink.' }
        ],
        answers: { '26': 'D', '27': 'B', '28': 'E', '29': 'C', '30': 'F' },
        explanations: {
            '26': '空格前说"See, it\'s a lucky pen!"（看，这是一支幸运笔！），空格后说"I looked at the pen in my hand"（我看着手里的笔）。选项D "He handed me the pen happily and proudly"（他高兴而自豪地把笔递给我）中的"handed me the pen"与后文"I looked at the pen in my hand"直接衔接，动作连贯。',
            '27': '空格前说"I had made the decision to pursue a career in writing"（我已决定从事写作职业），空格后说"I had dreamed about it for a long time but I was afraid to take a chance"（我梦想了很久，但害怕冒险）。选项B "It was a decision full of fear and anxiety for me"（对我来说，这是一个充满恐惧和焦虑的决定）中的"fear and anxiety"与后文"afraid / scared of rejection"形成呼应，说明这个决定的艰难。',
            '28': '空格前说"Tears filled my eyes"（泪水充满我的眼睛），空格后说"Rejection didn\'t seem like such a big deal any more"（被拒绝似乎不再那么重要了）。选项E "I grabbed him and pulled him tight against me"（我抓住他，把他紧紧抱在怀里）是母亲感动时的动作，与"Tears filled my eyes"的情感一致，也是从感动到释然的过渡。',
            '29': '空格前说"George heard a boy talking about a lucky pen he had"（George听到一个男孩在谈论他有一支幸运笔），空格后说"The boy was a tough negotiator but George didn\'t give up"（那个男孩是个难缠的谈判者，但George没有放弃）。选项C "He wanted to get it for me"（他想为我得到它）说明George想得到那支笔的原因，引出后文的谈判过程。',
            '30': '空格后说"It never fails to remind me just how lucky I am"（它总能提醒我我有多么幸运），说明这支笔仍然存在并一直陪伴着作者。选项F "I still have that pen, though it\'s long out of ink"（我仍然保留着那支笔，虽然它早已没墨水了）中的"still have that pen"与"It never fails to remind me"直接呼应，也点明主题。'
        }
    },

    // ========== 13. 2019年10月 ==========
    {
        id: '2019-10',
        session: '2019年10月',
        articleTitle: 'Cultural Differences in England and France',
        passage: [
            'Cultural differences can take many forms. I have noticed many differences in French culture compared to English culture, from the way people dress, to their attitudes towards food, to what they do for fun. One thing that has struck me in particular in France is people\'s personal interactions with each other. [26]',
            'Firstly, it\'s the kissing. Everyone kisses each other on the cheek. It\'s a greeting, instead of saying "hi" or "hello". [27] Everyone participates in the kissing ritual, the young, the old, male, female, strangers and friends. I kiss my friends. I kiss the teachers at the school. And even if I\'m in a hurry, I am still expected to make time to give acquaintances a quick kiss on the cheek as I rush past. I don\'t mind it. [28] It quickly turns strangers into acquaintances, and acquaintances into friends.',
            'Another thing that I\'ve noticed is that people in France are much more open with people they don\'t know. [29] In France, however, on long train journeys people have often started a conversation with me for no reason. They have a chat simply to pass the time. And I really enjoy being able to share a part of my life and my story with someone else.',
            'Whatever impressions you may have about French people, I have found that they are, for the most part, open and at ease talking to strangers. [30]'
        ],
        options: [
            { letter: 'A', text: 'In fact, I quite like it.' },
            { letter: 'B', text: 'They differ a lot from those in the UK.' },
            { letter: 'C', text: 'Often the kiss is a substitute for words.' },
            { letter: 'D', text: 'This makes me more comfortable with them too.' },
            { letter: 'E', text: 'Britons often greet each other with hugs and kisses.' },
            { letter: 'F', text: 'In England, you talk to a stranger only if completely necessary.' }
        ],
        answers: { '26': 'B', '27': 'C', '28': 'A', '29': 'F', '30': 'D' },
        explanations: {
            '26': '空格前说"One thing that has struck me in particular in France is people\'s personal interactions with each other"（在法国特别让我印象深刻的一件事是人们之间的个人互动）。选项B "They differ a lot from those in the UK"（它们与英国的那些差异很大）中的"They"指代"personal interactions"，"differ from the UK"总起后文关于英法差异的具体讨论。',
            '27': '空格前说"It\'s a greeting, instead of saying ‘hi’ or ‘hello’"（它是一种问候方式，而不是说"嗨"或"你好"），空格后说"Everyone participates in the kissing ritual"（每个人都参与亲吻仪式）。选项C "Often the kiss is a substitute for words"（通常亲吻代替了言语）中的"substitute for words"与"instead of saying hi"直接呼应，补充说明亲吻的作用。',
            '28': '空格前说"I don\'t mind it"（我不介意），空格后说"It quickly turns strangers into acquaintances, and acquaintances into friends"（它迅速把陌生人变成熟人，把熟人变成朋友）。选项A "In fact, I quite like it"（事实上，我相当喜欢它）中的"In fact"递进，比"don\'t mind"表达更积极的态度，与后文作者称赞亲吻的好处呼应。',
            '29': '空格后说"In France, however, on long train journeys people have often started a conversation with me for no reason"（然而在法国，在长途火车旅行中，人们经常无缘无故地和我攀谈）。选项F "In England, you talk to a stranger only if completely necessary"（在英国，只有在完全必要时你才会和陌生人说话）与后文"however"形成英法对比，是典型的对比句式。',
            '30': '空格前说"I have found that they are, for the most part, open and at ease talking to strangers"（我发现他们大多是开放且自在地与陌生人交谈）。选项D "This makes me more comfortable with them too"（这也让我与他们相处更自在）中的"This"指代前文法国人的开放态度，"more comfortable"是作者的个人感受，作为全文结尾句。'
        }
    },

    // ========== 14. 2020年8月 ==========
    {
        id: '2020-08',
        session: '2020年8月',
        articleTitle: 'How to Talk to a Doctor',
        passage: [
            'It\'s one of the saddest situations in modern medicine: The average doctor\'s appointment lasts 15 minutes or less. [26] That doesn\'t leave much time for chatting about the weather or your mood.',
            'What you don\'t realize — but what I see very clearly as a doctor — is that what the patient says is more important than ever. [27] They can also make it much harder for me to figure out what\'s wrong with you.',
            'Medical schools teach a specific way to conduct an office visit. Part one is the complaint. [28] Part two is the physical exam. And part three is when the doctor gives you a diagnosis and prescribes tests or a treatment. Chances are, you focus on part three, but the patients who receive the best care are those who master part one. The key is to describe in detail what you\'ve been feeling — not just "bad" but what kind of bad, for how long, and after what kind of activity.',
            '[29] Even though I\'ve been a doctor for many years, I tend to be a little nervous when I\'m the one sitting on the exam table. If I haven\'t prepared, I lose track of the details I intended to share. [30] When the doctor asks you questions, you can be more specific, and the diagnosis and treatment will be more accurate. And there may be a few minutes left over for a little pleasant conversation!'
        ],
        options: [
            { letter: 'A', text: 'No wonder you feel rushed.' },
            { letter: 'B', text: 'Of course, that\'s easier said than done.' },
            { letter: 'C', text: 'It is wise to see a doctor with your friend.' },
            { letter: 'D', text: 'It is also called the description of your problem.' },
            { letter: 'E', text: 'So I take a few minutes to write down some crucial details.' },
            { letter: 'F', text: 'In fact, your descriptions can help me give you great care.' }
        ],
        answers: { '26': 'A', '27': 'F', '28': 'D', '29': 'B', '30': 'E' },
        explanations: {
            '26': '空格前说"The average doctor\'s appointment lasts 15 minutes or less"（医生门诊平均持续15分钟或更短），空格后说"That doesn\'t leave much time for chatting about the weather or your mood"（那没有留下多少时间聊天气或心情）。选项A "No wonder you feel rushed"（难怪你会感到匆忙）中的"rushed"与"15 minutes or less / doesn\'t leave much time"直接呼应，作为过渡句。',
            '27': '空格后说"They can also make it much harder for me to figure out what\'s wrong with you"（它们也可能使我更难找出你哪里出了问题），其中"also"表示前文还有另一件事。选项F "In fact, your descriptions can help me give you great care"（事实上，你的描述可以帮助我给你很好的护理）说明病人描述的好处，与后文"also make it harder"（如果描述不好）形成对比。',
            '28': '空格前说"Part one is the complaint"（第一部分是主诉），空格后说"Part two is the physical exam"（第二部分是体格检查）。选项D "It is also called the description of your problem"（它也被称为对你问题的描述）中的"also called"补充说明"complaint"的另一种说法，为读者理解医学术语做铺垫。',
            '29': '空格后说"Even though I\'ve been a doctor for many years, I tend to be a little nervous when I\'m the one sitting on the exam table"（即使我行医多年，当我自己坐在检查台上时，我往往也会有点紧张）。选项B "Of course, that\'s easier said than done"（当然，说起来容易做起来难）是过渡句，承认前文建议（详细描述症状）做起来不容易，从而自然引出作者自己作为病人的亲身经历。',
            '30': '空格前说"If I haven\'t prepared, I lose track of the details I intended to share"（如果我没有准备，我就会忘记我想要分享的细节），空格后说"When the doctor asks you questions, you can be more specific"（当医生问你问题时，你可以更具体）。选项E "So I take a few minutes to write down some crucial details"（所以我会花几分钟写下一些关键细节）中的"So"承接前文问题，给出解决办法，与后文"be more specific"呼应。'
        }
    },

    // ========== 15. 2020年10月 ==========
    {
        id: '2020-10',
        session: '2020年10月',
        articleTitle: 'Lack of Sleep Is Dangerous',
        passage: [
            'Do you know that if you miss out too much sleep you will die? It\'s true! If you stay awake for a long, long time, your brain and body will break down.',
            'The unofficial world record for staying awake is 11 days, and it\'s held by Randy Gardner. [26] He also had help from TV and radio reporters, a sleep researcher and a doctor.',
            'What happened? [27] Then his brain started to lose sense. On day 4, he thought a street sign was really a person. On day 6, he began to speak very slowly. On day 9, he couldn\'t finish sentences. On day 10, Randy thought he saw a forest in the next room. [28] Eventually, after he\'d broken the world record, Randy was told to go to sleep. Experiments that keep people awake for dangerously long periods are always stopped before the patients break down.',
            'Rats, however, aren\'t so well cared for. [29] That\'s sooner than if they\'d been allowed to sleep but were given no food. They get really thin. But that\'s not because they stop eating — quite the opposite. Even though these rats are eating food, their bodies can\'t process it in the normal way. On top of that, their little bodies lose more heat than normal, which makes them weak. This means that they need more food to stay at a healthy temperature. [30]',
            'And that\'s what lack of sleep does for you.'
        ],
        options: [
            { letter: 'A', text: 'In fact, he went a bit crazy.' },
            { letter: 'B', text: 'Normally rats wouldn\'t catch a cold.' },
            { letter: 'C', text: 'Towards the end, the health of these rats is failing.' },
            { letter: 'D', text: 'When kept from sleeping, they die within three weeks.' },
            { letter: 'E', text: 'Randy asked two of his friends to stop him falling asleep.' },
            { letter: 'F', text: 'First of all, staying awake long made Randy bad-tempered.' }
        ],
        answers: { '26': 'E', '27': 'F', '28': 'A', '29': 'D', '30': 'C' },
        explanations: {
            '26': '空格前说"The unofficial world record for staying awake is 11 days, and it\'s held by Randy Gardner"（保持清醒的非官方世界纪录是11天，由Randy Gardner保持），空格后说"He also had help from TV and radio reporters, a sleep researcher and a doctor"（他还得到了电视和广播记者、一位睡眠研究员和一位医生的帮助）。选项E "Randy asked two of his friends to stop him falling asleep"（Randy请他的两个朋友阻止他睡着）中的"had help from"与"asked two of his friends"呼应，说明他在挑战过程中需要别人帮助防止入睡。',
            '27': '空格前说"What happened?"（发生了什么？），空格后说"Then his brain started to lose sense"（然后他的大脑开始失去理智）。选项F "First of all, staying awake long made Randy bad-tempered"（首先，长时间保持清醒使Randy脾气暴躁）中的"First of all"引出第一阶段的症状，"Then"承接后文的大脑失去理智，形成时间顺序。',
            '28': '空格前说"On day 10, Randy thought he saw a forest in the next room"（第10天，Randy以为他看到隔壁房间有一片森林）。选项A "In fact, he went a bit crazy"（事实上，他有点疯了）中的"In fact"总结前文列举的各种幻觉现象，"a bit crazy"与"thought he saw a forest in the next room"直接呼应。',
            '29': '空格前说"Rats, however, aren\'t so well cared for"（然而，老鼠就没有被如此照顾），空格后说"That\'s sooner than if they\'d been allowed to sleep but were given no food"（这比让它们睡觉但不给食物还要快）。选项D "When kept from sleeping, they die within three weeks"（当被阻止睡觉时，它们在三周内死亡）中的"die within three weeks"与后文"That\'s sooner than..."形成时间对比，说明缺觉比缺食更致命。',
            '30': '空格前说"This means that they need more food to stay at a healthy temperature"（这意味着它们需要更多食物来保持健康的体温）。选项C "Towards the end, the health of these rats is failing"（到最后，这些老鼠的健康状况正在恶化）中的"Towards the end"作为总结句，"health is failing"与"need more food to stay at a healthy temperature"呼应，为下一段"that\'s what lack of sleep does for you"做铺垫。'
        }
    },

    // ========== 16. 2021年4月 ==========
    {
        id: '2021-04',
        session: '2021年4月',
        articleTitle: 'Swiss Banks',
        passage: [
            'Switzerland is well-known for chocolate and its watch-making industry. It is even more famous for its unique banking and financial system. [26]',
            'Banking in Switzerland goes back to the 18th century. In the past, not only rich people but also dictators (独裁者) kept their money in Swiss banks. During World War II German Nazis (纳粹) put much of their money in Switzerland. [27]',
            'Swiss banks are popular for many reasons. [28] It enjoys one of the highest per capita (人均) incomes in the world. It has been neutral for many centuries, especially during the two world wars. In addition, the Swiss franc is one of the most stable currencies in the world.',
            'Most importantly, Swiss banks follow very strict privacy rules. In 1934, a law was passed that forbade Swiss banks to reveal the names of account holders. [29] If a Swiss banker reveals a person\'s bank account without permission, he or she commits a crime. Such regulations have made Switzerland a popular destination for many people.',
            'Lately, however, the Swiss government has been under heavy pressure from other countries. [30] They want the banks to reveal the names of possible criminals.'
        ],
        options: [
            { letter: 'A', text: 'They urge it to change its bank laws.' },
            { letter: 'B', text: 'Banks strictly protect the privacy of their clients.' },
            { letter: 'C', text: 'Private banking has a long tradition in the country.' },
            { letter: 'D', text: 'Banks play an important role in Switzerland\'s economy.' },
            { letter: 'E', text: 'Foreigners in troubled areas also kept money in Swiss banks.' },
            { letter: 'F', text: 'For one, the country has a very stable and prosperous economy.' }
        ],
        answers: { '26': 'C', '27': 'E', '28': 'F', '29': 'B', '30': 'A' },
        explanations: {
            '26': '空格前说"It is even more famous for its unique banking and financial system"（它更因独特的银行和金融体系而闻名），空格后开始讲"Banking in Switzerland goes back to the 18th century"（瑞士银行业可以追溯到18世纪）。选项C "Private banking has a long tradition in the country"（私人银行业在这个国家有着悠久的传统）中的"long tradition"总起后文关于瑞士银行业历史的介绍。',
            '27': '空格前说"During World War II German Nazis put much of their money in Switzerland"（二战期间，德国纳粹把大量资金存在瑞士），空格后是新段落。选项E "Foreigners in troubled areas also kept money in Swiss banks"（处于动荡地区的外国人也把钱存在瑞士银行）中的"also"承接前文纳粹存钱的例子，"troubled areas"与"World War II"呼应，进一步说明瑞士银行的吸引力。',
            '28': '空格前说"Swiss banks are popular for many reasons"（瑞士银行受欢迎有很多原因），空格后说"It enjoys one of the highest per capita incomes in the world"（它拥有世界上最高的人均收入之一）。选项F "For one, the country has a very stable and prosperous economy"（首先，这个国家有着非常稳定和繁荣的经济）中的"For one"引出第一个原因，"stable and prosperous economy"与后文的"high per capita incomes / neutral / stable currencies"并列。',
            '29': '空格前说"a law was passed that forbade Swiss banks to reveal the names of account holders"（通过了一项法律，禁止瑞士银行透露账户持有人的姓名），空格后说"If a Swiss banker reveals a person\'s bank account without permission, he or she commits a crime"（如果瑞士银行家未经许可透露某人的银行账户，他或她就犯了罪）。选项B "Banks strictly protect the privacy of their clients"（银行严格保护客户的隐私）是对前文法律的总结，与后文的"crime"呼应，形成"法律→保护隐私→犯罪"的逻辑链。',
            '30': '空格前说"the Swiss government has been under heavy pressure from other countries"（瑞士政府一直受到其他国家的巨大压力），空格后说"They want the banks to reveal the names of possible criminals"（他们希望银行透露可能犯罪者的名字）。选项A "They urge it to change its bank laws"（他们敦促它修改银行法）中的"They"指代"other countries"，"urge it to change"与后文"want the banks to reveal"呼应，说明压力的具体内容。'
        }
    },

    // ========== 17. 2021年10月 ==========
    {
        id: '2021-10',
        session: '2021年10月',
        articleTitle: 'North Africa',
        passage: [
            'Africa is the second largest continent on Earth. It is about 8,000 kilometers long from north to south. It can be divided into three major regions: northern Africa, central Africa, and southern Africa. [26]',
            'Africa is separated from Europe by the Mediterranean Sea (地中海). It is connected to Asia in the east. For this reason, it has been easy for people from Europe, Asia and other areas to come to North Africa. [27]',
            'Most of North Africa is covered by the Sahara Desert. [28] There is little rainfall here. The few people who live in the desert live in oases (绿洲). The valley of the Nile River forms one of the oases that stretch across the desert in the east.',
            'Many North African nations have a very important resource. They have large deposits of petroleum. [29] In return, these nations receive a lot of money. They are spending some of this money to make life better for their people.',
            'Egypt is an important nation in North Africa. [30] It has served as a bridge between Africa and Asia. People from many nations have passed through Egypt. Today, it controls the Suez Canal. The canal connects the Mediterranean Sea and the Red Sea. It is important for ships traveling between nations in Europe and Asia.'
        ],
        options: [
            { letter: 'A', text: 'It has always been a great barrier to people traveling south.' },
            { letter: 'B', text: 'This oil is shipped to many parts of the world.' },
            { letter: 'C', text: 'Each region has its special geography and history.' },
            { letter: 'D', text: 'Asia is much larger than Europe.' },
            { letter: 'E', text: 'All these people have left their influence there.' },
            { letter: 'F', text: 'About 40 million people live there today.' }
        ],
        answers: { '26': 'C', '27': 'E', '28': 'A', '29': 'B', '30': 'F' },
        explanations: {
            '26': '空格前说"It can be divided into three major regions: northern Africa, central Africa, and southern Africa"（它可以分为三大区域：北非、中非和南部非洲）。选项C "Each region has its special geography and history"（每个地区都有其独特的地理和历史）中的"Each region"承接前文"three major regions"，作为承上启下的过渡句，引出后文对北非的详细讨论。',
            '27': '空格前说"it has been easy for people from Europe, Asia and other areas to come to North Africa"（来自欧洲、亚洲和其他地区的人们很容易来到北非）。选项E "All these people have left their influence there"（所有这些人都留下了他们的影响）中的"All these people"指代前文"people from Europe, Asia and other areas"，"left their influence"自然引出后文对北非文化的讨论。',
            '28': '空格前说"Most of North Africa is covered by the Sahara Desert"（北非大部分被撒哈拉沙漠覆盖），空格后说"There is little rainfall here"（这里降雨很少）。选项A "It has always been a great barrier to people traveling south"（它一直是人们向南旅行的巨大障碍）中的"It"指代"Sahara Desert"，"a great barrier to people traveling south"解释了沙漠的阻隔作用，与后文"little rainfall"呼应。',
            '29': '空格前说"They have large deposits of petroleum"（他们有大量的石油储量），空格后说"In return, these nations receive a lot of money"（作为回报，这些国家收到很多钱）。选项B "This oil is shipped to many parts of the world"（这些石油被运往世界各地）中的"This oil"指代前文"petroleum"，"shipped to many parts of the world"解释了后文"receive a lot of money"的原因。',
            '30': '空格前说"Egypt is an important nation in North Africa"（埃及是北非的一个重要国家），空格后说"It has served as a bridge between Africa and Asia"（它一直是非洲和亚洲之间的桥梁）。选项F "About 40 million people live there today"（今天大约有4000万人住在那里）中的"live there"指代Egypt，提供人口数据作为埃及重要性的一个证据，与后文"served as a bridge"并列说明埃及的重要性。'
        }
    },

    // ========== 18. 2022年4月 ==========
    {
        id: '2022-04',
        session: '2022年4月',
        articleTitle: 'The Coyote（丛林狼）',
        passage: [
            'The coyote is a relative of the dog and the wolf. Like its relatives, it mostly feeds on other animals. It will, however, eat a wide variety of foods, including insects, fruits and vegetables.',
            'Coyotes are found throughout most of North America, from Mexico and Central America to Canada and Alaska. The color of its coat depends on where it lives. [26]',
            'Like the wolf, coyotes live in groups, or packs. The coyote pack is usually smaller than a wolf pack. [27] The pack will often divide into pairs to hunt. Female coyotes give birth to baby coyotes once a year. Over half of the babies will die before they reach adulthood. Male babies usually leave the pack to find their own territory. [28]',
            'Wolves and coyotes compete for the same animals for food. Since the coyote is smaller than the wolf, wolves will usually drive the coyote out of any shared living areas.',
            'The coyote adapts easily to new areas. Unlike the wolf, the coyote\'s living area increased when more and more people settled across North America. [29] Once the New England settlers eliminated wolves, the coyote moved in. Scientists who have studied the coyote believe it is better than the wolf at living in human areas.',
            '[30] They find enough supply of food in these areas, since coyotes are willing to eat garbage, rodents (such as rabbits and mice) and even small pets. Scientists estimate that as many as 2,000 coyotes may be living in the Chicago area.'
        ],
        options: [
            { letter: 'A', text: 'Female babies stay with the parent\'s pack.' },
            { letter: 'B', text: 'The coyote is not an endangered species.' },
            { letter: 'C', text: 'Coyotes are now found in most large cities.' },
            { letter: 'D', text: 'All members of the pack are usually related.' },
            { letter: 'E', text: 'Mountain coyotes are darker than those living in the desert.' },
            { letter: 'F', text: 'For example, the coyote was not native to New England.' }
        ],
        answers: { '26': 'E', '27': 'D', '28': 'A', '29': 'F', '30': 'C' },
        explanations: {
            '26': '空格前说"The color of its coat depends on where it lives"（它的毛色取决于它住在哪里），说明毛色与居住地有关。选项E "Mountain coyotes are darker than those living in the desert"（山区的丛林狼比沙漠里的颜色更深）举例说明不同地区毛色的差异，与"depends on where it lives"直接呼应。',
            '27': '空格后说"The pack will often divide into pairs to hunt"（群体通常会分成对去捕猎），说明群体成员之间有密切关系。选项D "All members of the pack are usually related"（群体中的所有成员通常都是亲属）解释群体成员通常是亲属，与后文"divide into pairs to hunt"呼应，说明它们为什么能协调捕猎。',
            '28': '空格前说"Male babies usually leave the pack to find their own territory"（雄性幼崽通常会离开群体去寻找自己的领地）。选项A "Female babies stay with the parent\'s pack"（雌性幼崽则留在父母的群体中）与雄性幼崽离开形成对比，符合动物行为中常见的性别差异。',
            '29': '空格前说"the coyote\'s living area increased when more and more people settled across North America"（当越来越多的人在北美定居时，丛林狼的生活区域扩大了），空格后说"Once the New England settlers eliminated wolves, the coyote moved in"（一旦新英格兰定居者消灭了狼，丛林狼就搬了进来）。选项F "For example, the coyote was not native to New England"（例如，丛林狼并非新英格兰的原生物种）中的"For example"和"New England"与后文直接对应，说明丛林狼进入新区域的例子。',
            '30': '空格后说"They find enough supply of food in these areas... Scientists estimate that as many as 2,000 coyotes may be living in the Chicago area"（它们在这些地区找到足够的食物……科学家估计芝加哥地区可能有多达2000只丛林狼）。选项C "Coyotes are now found in most large cities"（现在大多数大城市都能发现丛林狼）中的"large cities"与后文"Chicago"呼应，作为该段主题句。'
        }
    },

    // ========== 19. 2022年10月 ==========
    {
        id: '2022-10',
        session: '2022年10月',
        articleTitle: 'Insomnia (失眠)',
        passage: [
            'I just could not fall asleep the other night. I just didn\'t feel sleepy. I can\'t explain why, but it was really annoying.',
            'I got very bored lying in bed, so I decided to read a book. [26] But even when I finished reading, I still didn\'t feel tired. So I listened to some peaceful music. That didn\'t work, either. I have heard people say if you have a warm drink before bedtime it will help you drift off to sleep. So I went downstairs and made myself a cup of tea. [27] Still, I couldn\'t sleep. I was getting very frustrated by this point!',
            'It felt strange to be awake while everyone else was asleep. [28] In fact, it was a little big frightening. When you go to sleep, it feels like one day ends and another begins. But if you stay up late, you realize that day and night are just a gentle transition (转变), a cycle which has no end and no beginning. At 4 a.m., I noticed a faint light coming through my curtains. The sun had started to rise!',
            'Normally, I\'m a very heavy sleeper. [29] So on this occasion, I considered myself lucky to see a beautiful sunrise. I knew I needed to get some rest, but it seemed the harder I tried to force myself asleep, the more difficult it was.',
            'Eventually, I just let my mind go free. [30] I listened to the birdsong... and the next thing I knew it was 11 a.m.! I was happy that I had managed to get some sleep! I have never struggled with sleeping before, so this was my first experience of insomnia. Fortunately, I have been sleeping well since then.'
        ],
        options: [
            { letter: 'A', text: 'The world seemed so quiet.' },
            { letter: 'B', text: 'I stopped forcing myself to sleep.' },
            { letter: 'C', text: 'After my tea, I got back into bed.' },
            { letter: 'D', text: 'I didn\'t want to wake up my family.' },
            { letter: 'E', text: 'I thought reading would help me get to sleep.' },
            { letter: 'F', text: 'But I still couldn\'t fall asleep.' }
        ],
        answers: { '26': 'E', '27': 'C', '28': 'A', '29': 'F', '30': 'B' },
        explanations: {
            '26': '空格前说"I got very bored lying in bed, so I decided to read a book"（我躺在床上很无聊，所以我决定看书），空格后说"But even when I finished reading, I still didn\'t feel tired"（但即使我看完了书，我仍然不觉得累）。选项E "I thought reading would help me get to sleep"（我以为看书会帮助我入睡）说明读书的目的，与后文"even when I finished reading"形成目的与结果的对比。',
            '27': '空格前说"So I went downstairs and made myself a cup of tea"（所以我下楼给自己泡了杯茶），空格后说"Still, I couldn\'t sleep"（仍然，我睡不着）。选项C "After my tea, I got back into bed"（喝完茶后，我回到床上）承接前文喝茶，引出后文仍然无法入睡，形成"喝茶→回床→仍然睡不着"的完整动作链。',
            '28': '空格前说"It felt strange to be awake while everyone else was asleep"（在别人都睡着时自己醒着，感觉很奇怪），空格后说"In fact, it was a little big frightening"（事实上，这有点吓人）。选项A "The world seemed so quiet"（世界显得如此安静）描述了深夜醒着时周围的环境，与"everyone else was asleep"呼应，同时铺垫后文"a little big frightening"。',
            '29': '空格前说"Normally, I\'m a very heavy sleeper"（通常，我睡得很沉），空格后说"So on this occasion, I considered myself lucky to see a beautiful sunrise"（所以这一次，我认为自己很幸运能看到美丽的日出）。选项F "But I still couldn\'t fall asleep"（但我仍然无法入睡）中的"But"与前文"heavy sleeper"形成对比，"still couldn\'t fall asleep"引出后文失眠的独特体验。',
            '30': '空格前说"Eventually, I just let my mind go free"（最终，我让思绪自由飘荡），空格后说"I listened to the birdsong... and the next thing I knew it was 11 a.m."（我听着鸟鸣……接下来我知道已经是上午11点了）。选项B "I stopped forcing myself to sleep"（我停止强迫自己入睡）中的"stopped forcing"与"let my mind go free"呼应，解释最终入睡的原因。'
        }
    },

    // ========== 20. 2023年4月 ==========
    {
        id: '2023-04',
        session: '2023年4月',
        articleTitle: 'Banning Mobile Phones at School',
        passage: [
            'It is a question that keeps some parents awake at night. Should children be allowed to take mobile phones to school? [26] For parents who want their children to do well at school, it is no.',
            'Banning mobile phones at school is effective. According to a UK study, after schools banned mobile phones, the test scores of students improved by 6.4%. The findings will influence the debate about children and mobile phones. In the UK, more than 90% of teenagers own a mobile phone; in the US, 75% have one. The popular mobile phone is a problem in the eye of teachers. [27] In a 2001 survey, no school banned mobiles. By 2007, this had risen to 50%. By 2012, 98% of schools had taken action. Some did not allow phones. The others required them to be handed in at the beginning of the day.',
            '[28] New York City has lifted a 10-year ban on phones at school. It says that lifting the ban will promote equality. "This view is wrong," the researchers of the UK study write. "We found that the ban led to improvements in test scores among students. Low-achieving students gained the most. [29] Allowing phones into schools will harm the lowest-achieving students the most."',
            'The UK study was carried out at Birmingham, London, Leicester and Manchester schools before and after bans were introduced. "Technology is commonly viewed as increasing efficiency," the researchers write. "Modern technology is used in the classroom to improve student performance. [30] Some students will pay no attention to their class."'
        ],
        options: [
            { letter: 'A', text: 'They are worried about the trend.' },
            { letter: 'B', text: 'The mobile phone is a good example.' },
            { letter: 'C', text: 'However, there are potential problems.' },
            { letter: 'D', text: 'Now researchers say that they have an answer.' },
            { letter: 'E', text: 'Therefore, lifting the ban may in fact lead to the opposite.' },
            { letter: 'F', text: 'However, some schools are starting to allow limited use of mobile phones.' }
        ],
        answers: { '26': 'D', '27': 'A', '28': 'F', '29': 'E', '30': 'C' },
        explanations: {
            '26': '空格前说"Should children be allowed to take mobile phones to school?"（应该允许孩子带手机去学校吗？），空格后说"For parents who want their children to do well at school, it is no"（对于想让孩子在学校表现好的父母来说，答案是不）。选项D "Now researchers say that they have an answer"（现在研究人员说他们有了答案）引出研究者的答案，与后文家长的答案形成对比，也引出后文关于研究的讨论。',
            '27': '空格前说"The popular mobile phone is a problem in the eye of teachers"（在老师看来，流行的手机是个问题），空格后列举了2001、2007、2012年的数据。选项A "They are worried about the trend"（他们担心这一趋势）中的"They"指代"teachers"，"worried about the trend"引出后文的统计数据，说明教师担忧的具体表现。',
            '28': '空格后说"New York City has lifted a 10-year ban on phones at school"（纽约市取消了在学校禁用手机长达10年的禁令），说明有些学校开始允许手机。选项F "However, some schools are starting to allow limited use of mobile phones"（然而，一些学校开始允许有限度地使用手机）中的"However"与上文的禁令形成转折，引出纽约的例子。',
            '29': '空格前说"Low-achieving students gained the most"（成绩差的学生获益最大），空格后说"Allowing phones into schools will harm the lowest-achieving students the most"（允许手机进入学校对成绩最差的学生伤害最大）。选项E "Therefore, lifting the ban may in fact lead to the opposite"（因此，取消禁令实际上可能导致相反的结果）中的"Therefore"总结前文逻辑，"opposite"与后文"harm"呼应，说明取消禁令的危害。',
            '30': '空格前说"Modern technology is used in the classroom to improve student performance"（现代技术被用于课堂以提高学生表现），空格后说"Some students will pay no attention to their class"（一些学生将不关注他们的课堂）。选项C "However, there are potential problems"（然而，存在潜在问题）中的"However"转折，引出后文的负面影响，与"improve student performance"形成对比。'
        }
    },

    // ========== 21. 2023年10月 ==========
    {
        id: '2023-10',
        session: '2023年10月',
        articleTitle: 'How to Shoot a Movie',
        passage: [
            'A movie is a series of pictures. Each image is a still picture, just like a picture you take with a regular camera. But the pictures flash by so fast in a movie. As a result, you see horses run, people talk, and other kinds of motion. [26] Movies are also called films because they are filmed.',
            'Lots of work has to be done before the filming begins. The producer and the director plan how and when they will film each scene.',
            'A movie is filmed scene by scene. [27] The scenes are not usually filmed in the order you see in the movie. Sometimes the weather is bad and an outdoor scene cannot be filmed. Big fancy sets take a long time to build. Scenes using these sets are often shot later. However, you may see them at the beginning of the film.',
            'Sometimes a movie needs special effects. They include small models of huge scenes and cleverly designed sets. [28] Moviemakers use these to film scenes and places that do not exist. They might use a small model of a large building to film the building falling down.',
            'Films can be turned into computer files. [29] They can use computers to make new images. [30] Many images in Titanic, including crowds of people on the ship, were actually made by computer. In some other films, computers were used to make the actors look as if they were fighting while floating in the air.'
        ],
        options: [
            { letter: 'A', text: 'And a scene is filmed shot by shot.' },
            { letter: 'B', text: 'Computers can even make images of actors.' },
            { letter: 'C', text: 'Moviemaking includes several different stages.' },
            { letter: 'D', text: 'They also include computer-made images.' },
            { letter: 'E', text: 'That\'s why movies are sometimes called motion pictures.' },
            { letter: 'F', text: 'Moviemakers can then change the images any way they want.' }
        ],
        answers: { '26': 'E', '27': 'A', '28': 'D', '29': 'F', '30': 'B' },
        explanations: {
            '26': '空格前说"you see horses run, people talk, and other kinds of motion"（你看到马奔跑、人说话以及其他各种运动），空格后说"Movies are also called films because they are filmed"（电影也被称为film，因为它们是被拍摄的）。选项E "That\'s why movies are sometimes called motion pictures"（这就是为什么电影有时被称为motion pictures）中的"That\'s why"总结前文的"motion"，"motion pictures"与"movies"呼应，解释电影名称的由来。',
            '27': '空格前说"A movie is filmed scene by scene"（电影是一个场景一个场景拍摄的），空格后说"The scenes are not usually filmed in the order you see in the movie"（场景通常不是按照你在电影中看到的顺序拍摄的）。选项A "And a scene is filmed shot by shot"（而一个场景是一个镜头一个镜头拍摄的）中的"And"递进，从"scene by scene"到"shot by shot"，进一步说明拍摄方式，为后文"not in the order"做铺垫。',
            '28': '空格前说"They include small models of huge scenes and cleverly designed sets"（它们包括巨大场景的小模型和巧妙设计的布景），空格后说"Moviemakers use these to film scenes and places that do not exist"（电影制作人用这些来拍摄不存在的场景和地点）。选项D "They also include computer-made images"（它们还包括计算机生成的图像）中的"also include"承接前文的"They include"，扩展特技的范围，与后文"scenes and places that do not exist"呼应。',
            '29': '空格前说"Films can be turned into computer files"（电影可以转换为计算机文件），空格后说"They can use computers to make new images"（他们可以用计算机来制作新的图像）。选项F "Moviemakers can then change the images any way they want"（然后电影制作人可以以任何方式改变图像）中的"then"承接"turned into computer files"，说明转为文件后的用途，与后文"make new images"并列。',
            '30': '空格后说"Many images in Titanic, including crowds of people on the ship, were actually made by computer"（《泰坦尼克号》中的许多图像，包括船上的人群，实际上是由计算机生成的）。选项B "Computers can even make images of actors"（计算机甚至可以制作演员的图像）中的"even"递进，"images of actors"与后文"crowds of people"呼应，说明计算机在电影制作中的深度参与。'
        }
    },
    // ========== 22. 2024年4月 ==========
    {
        id: '2024-04',
        session: '2024年4月',
        articleTitle: 'What Does Happiness Mean?',
        passage: [
            'Happiness in life differs for all of us. [26] Very often we are happy, but we just don\'t realize it. If you think about what actually makes you happy, you might find you have those things already around you.',
            '[27] The first step for you to do so is to look at your feelings and ask yourself questions such as "if I could be enjoying something in my life, what would it be?" and "what makes me feel satisfied in my life right now?" Once you understand what your idea of happiness is, you can build on what you have now or focus on changing your life to what you would like it to be.',
            'The important thing to do is to examine your feelings by way of the answers you give to your questions. [28] You should also focus on the good or bad feelings you get from your questions and answers.',
            'Happiness is something that is already right there inside you. You just have to realize what it is and bring it out to start enjoying life. It can be found in family life, work, relationships, nature or a pet, to name just a few. [29] The point is where to look. You should look in the right direction, that is, your inner self.',
            '[30]'
        ],
        options: [
            { letter: 'A', text: 'No one else can give it to you.' },
            { letter: 'B', text: 'You should examine them honestly.' },
            { letter: 'C', text: 'Happiness is easy to define.' },
            { letter: 'D', text: 'You should understand what happiness means to you.' },
            { letter: 'E', text: 'Actually, it can be found in anything and any situation.' },
            { letter: 'F', text: 'What makes one person happy may not bring happiness to another.' }
        ],
        answers: { '26': 'F', '27': 'D', '28': 'B', '29': 'E', '30': 'A' },
        explanations: {
            '26': '空格前说"Happiness in life differs for all of us"（生活中的幸福对我们所有人来说是不同的），空格后说"Very often we are happy, but we just don\'t realize it"（很多时候我们是幸福的，只是我们没有意识到）。选项F "What makes one person happy may not bring happiness to another"（让一个人幸福的事可能不会给另一个人带来幸福）直接解释了前文"differs for all of us"，构成完整的因果逻辑。',
            '27': '空格后说"The first step for you to do so is to look at your feelings and ask yourself questions such as..."（你这样做的第一步是审视你的感受并问自己这样的问题……），说明空格处应该引出"理解幸福的第一步"。选项D "You should understand what happiness means to you"（你应该理解幸福对你意味着什么）中的"understand what happiness means"与后文"look at your feelings"和"understand what your idea of happiness is"直接呼应。',
            '28': '空格前说"The important thing to do is to examine your feelings by way of the answers you give to your questions"（重要的是通过你给问题的答案来审视你的感受），空格后说"You should also focus on the good or bad feelings you get from your questions and answers"（你还应该关注你从问题和答案中得到的好或坏的感觉）。选项B "You should examine them honestly"（你应该诚实地审视它们）中的"examine them"指代前文"examine your feelings"，"honestly"与后文"good or bad feelings"呼应，说明审视时应有的态度。',
            '29': '空格前说"It can be found in family life, work, relationships, nature or a pet, to name just a few"（它可以在家庭生活、工作、人际关系、自然或宠物中找到，仅举几例），空格后说"The point is where to look"（关键是去哪里找）。选项E "Actually, it can be found in anything and any situation"（实际上，它可以在任何事情和任何情况下找到）中的"Actually"递进前文举例，"anything and any situation"拓展了幸福的可寻之处，与后文"The point is where to look"呼应。',
            '30': '空格前说"You should look in the right direction, that is, your inner self"（你应该朝着正确的方向看，也就是你的内在自我）。选项A "No one else can give it to you"（没有其他人能给你）作为全文结尾，强调幸福源于自身，与"your inner self"呼应，点明文章主旨。'
        }
    },

    // ========== 23. 2024年10月 ==========
    {
        id: '2024-10',
        session: '2024年10月',
        articleTitle: 'Enjoy Yourself and Improve Your English',
        passage: [
            'One student I knew in Tanzania was the daughter of a school teacher. On the first day of the long school holidays, a whole set of graded English books arrived at her house. [26] The daughter read them all, starting from the easiest and working up to the most difficult. The holidays passed quickly and when the new school term started, she was far ahead of her classmates in English.',
            '[27] I think there are three. First, learning a new language takes time and practice. It is the same with any skill, like swimming. There are no quicker ways.',
            'Second, successful learning means moving from the easy to the difficult. [28] You have to play very simple tunes before you move on, step by step, to more complex ones.',
            '[29] The student was not trying to improve her English, though her English did improve. She liked the stories and was using them to pass the time. She became better at English without knowing it. Her brain was learning the language while she was concentrating on the stories.',
            'However, many students give two main reasons for not reading much. [30] I am afraid this reason is very weak and simply not true. The other reason is that they do not enjoy it. This reason is stronger. In fact it can be divided into two. You may not enjoy reading because either the language is difficult, or the stories are boring.'
        ],
        options: [
            { letter: 'A', text: 'One is that they have no time.' },
            { letter: 'B', text: 'Why don\'t students read more?' },
            { letter: 'C', text: 'What lessons does this story teach us?' },
            { letter: 'D', text: 'Her mother had bought them for the school.' },
            { letter: 'E', text: 'Third, reading stories in a new language is enjoyable.' },
            { letter: 'F', text: 'This is just like learning to play the piano.' }
        ],
        answers: { '26': 'D', '27': 'C', '28': 'F', '29': 'E', '30': 'A' },
        explanations: {
            '26': '空格前说"a whole set of graded English books arrived at her house"（一整套分级英语书籍送到她家），空格后说"The daughter read them all"（女儿把它们全部读了）。选项D "Her mother had bought them for the school"（她的母亲为学校买了这些书）解释了这些书的来源，与后文"read them all"之间构成"书从哪来→为什么读"的完整逻辑。',
            '27': '空格后说"I think there are three"（我认为有三点），说明空格处是一个引出"三点经验/教训"的过渡句。选项C "What lessons does this story teach us?"（这个故事教给我们什么教训？）中的"What lessons"与后文"I think there are three"直接呼应，作为承上启下的问句，引出后文三点讨论。',
            '28': '空格前说"Second, successful learning means moving from the easy to the difficult"（第二，成功的学习意味着从易到难），空格后说"You have to play very simple tunes before you move on, step by step, to more complex ones"（你必须先演奏非常简单的曲子，然后一步一步地转向更复杂的曲子）。选项F "This is just like learning to play the piano"（这就像学习弹钢琴一样）中的"just like"引出弹钢琴的类比，与后文"play very simple tunes"直接呼应。',
            '29': '空格后说"The student was not trying to improve her English, though her English did improve. She liked the stories and was using them to pass the time"（这个学生并没有想提高英语，尽管她的英语确实提高了。她喜欢这些故事，并用它们来消磨时间）。选项E "Third, reading stories in a new language is enjoyable"（第三，用新语言读故事是令人愉快的）中的"Third"与前文"First / Second"形成排比，引出第三点，与后文"enjoyable / liked the stories"呼应。',
            '30': '空格后说"I am afraid this reason is very weak and simply not true. The other reason is that they do not enjoy it"（恐怕这个理由很弱，根本不是真的。另一个理由是他们对阅读不感兴趣），说明空格处应该是"第一个理由"。选项A "One is that they have no time"（一个理由是他们没有时间）中的"One"与后文"The other reason"形成并列结构，逻辑清晰。'
        }
    },

    // ========== 24. 2025年4月 ==========
    {
        id: '2025-04',
        session: '2025年4月',
        articleTitle: 'Work is a Blessing',
        passage: [
            'I grew up in Lakeland, LA, one of 12 children. We all lived on my parents\' farm. We grew cotton, corn and had a large garden, but it didn\'t bring in much cash. [26] We milked 65 cows at 5 in the morning and again at 2 in the afternoon, seven days a week.',
            'One Saturday before daylight, I remember complaining to my father and grandfather about having to milk those cows. My father said, "You know, boy, to work is a blessing." [27] However, it took many years before it sank in.',
            'Going to college was a rare privilege for a kid from Lakeland. [28] So I joined the ROTC program to help pay for college. And what started out as an obligation to the Army became a way of life that I stayed committed to for 37 years, three months and three days.',
            'In the late 1980s, during a visit to Bangladesh, I saw a woman with a baby on her back, breaking bricks with a hammer. I asked a Bangladesh military officer why they weren\'t using a machine, which would have been a lot easier. [29] Breaking those bricks meant she could earn enough money to feed herself and her baby that day. And as bad as that woman\'s job was, it was enough to keep a small family alive. [30]'
        ],
        options: [
            { letter: 'A', text: 'I don\'t think I will ever quit working.' },
            { letter: 'B', text: 'However, I still wanted to go to college.' },
            { letter: 'C', text: 'He told me a machine would put that lady out of work.' },
            { letter: 'D', text: 'I had a feeling I had been told something really important.' },
            { letter: 'E', text: 'It reminded me of my father\'s words: To work is a blessing.' },
            { letter: 'F', text: 'So when I was 12, I got a part-time job helping to milk cows.' }
        ],
        answers: { '26': 'F', '27': 'D', '28': 'B', '29': 'C', '30': 'E' },
        explanations: {
            '26': '空格前说"We grew cotton, corn and had a large garden, but it didn\'t bring in much cash"（我们种棉花、玉米，还有一个大花园，但没有带来多少现金），空格后说"We milked 65 cows at 5 in the morning"（我们早上5点挤65头牛的奶）。选项F "So when I was 12, I got a part-time job helping to milk cows"（所以当我12岁时，我找了一份兼职帮忙挤牛奶）中的"So"承接前文缺钱的情况，"got a part-time job helping to milk cows"引出后文每天挤牛奶的具体描述。',
            '27': '空格前说"My father said, ‘You know, boy, to work is a blessing.’"（我父亲说："你知道吗，孩子，工作是一种祝福。"），空格后说"However, it took many years before it sank in"（然而，很多年之后我才真正领会）。选项D "I had a feeling I had been told something really important"（我有一种感觉，我被告诉了一些非常重要的事情）说明作者当时就有感觉，与后文"took many years before it sank in"形成对比，突出这句话的重要性。',
            '28': '空格前说"Going to college was a rare privilege for a kid from Lakeland"（对Lakeland的孩子来说，上大学是一种难得的特权），空格后说"So I joined the ROTC program to help pay for college"（所以我加入了ROTC项目来帮助支付大学费用）。选项B "However, I still wanted to go to college"（然而，我仍然想上大学）中的"However"与"rare privilege"形成转折，"still wanted to go to college"引出后文为上大学所做的努力。',
            '29': '空格前说"I asked a Bangladesh military officer why they weren\'t using a machine, which would have been a lot easier"（我问一位孟加拉国军官为什么不用机器，那样会容易得多），空格后说"Breaking those bricks meant she could earn enough money to feed herself and her baby that day"（敲碎那些砖意味着她那天能挣到足够的钱来养活自己和她的孩子）。选项C "He told me a machine would put that lady out of work"（他告诉我机器会让那位女士失业）是对作者问题的回答，解释为什么不用机器，与后文"feed herself and her baby"直接呼应。',
            '30': '空格前说"as bad as that woman\'s job was, it was enough to keep a small family alive"（尽管那位女士的工作如此糟糕，它却足以维持一个小家庭的生计）。选项E "It reminded me of my father\'s words: To work is a blessing"（这让我想起父亲的话：工作是一种祝福）中的"It"指代前文女人的工作，"reminded me of my father\'s words"呼应文章开头父亲的教导，点明文章主题，形成首尾呼应。'
        }
    },

    // ========== 25. 2025年10月 ==========
    {
        id: '2025-10',
        session: '2025年10月',
        articleTitle: 'What is Green Tourism?',
        passage: [
            'The aim of green tourism is to protect the environment and culture of an area. There are many choices for green tourism worldwide.',
            'The number of tourists has been increasing these days. It makes green tourism a must in some areas. In order to protect the environment, it might seem wiser to ban tourists to these areas. But many areas need the income from tourism for their local economy. Green tourism offers the best solution to both. [26] At the same time, it keeps local businesses growing.',
            'Green tourism might not mean a vacation spent with little or no comfort. [27] Green tourism resorts exist in almost every style and taste. From recycling systems to tree houses, there are many vacation choices.',
            'On a green holiday, people study the local plants and culture. [28] Guides, tours and wildlife-viewing platforms help people experience a lot. But little or no impact is made on the environment. Sometimes, tourists can take an active part in improving the local area. They can work to protect the wildlife in the area. They can help to build a school. [29] These vacations can be a lot of work. But people find them very rewarding and interesting.',
            'Nowadays, green tourism is becoming more popular. [30] More areas will take steps to have less of an impact on the environment, allowing tourists to enjoy the beauty that these areas have to offer for many years to come.'
        ],
        options: [
            { letter: 'A', text: 'They also learn ways to protect them.' },
            { letter: 'B', text: 'It protects the environment of an area.' },
            { letter: 'C', text: 'They can do other things that are good for the area.' },
            { letter: 'D', text: 'Its effects need to be further studied.' },
            { letter: 'E', text: 'So there are likely to be more vacationing options available.' },
            { letter: 'F', text: 'On the contrary, people think that it can be a wonderful adventure.' }
        ],
        answers: { '26': 'B', '27': 'F', '28': 'A', '29': 'C', '30': 'E' },
        explanations: {
            '26': '空格前说"Green tourism offers the best solution to both"（绿色旅游为两者提供了最佳解决方案），空格后说"At the same time, it keeps local businesses growing"（同时，它保持当地企业增长）。选项B "It protects the environment of an area"（它保护一个地区的环境）中的"It"指代"Green tourism"，"protects the environment"与"At the same time, it keeps local businesses growing"构成并列，说明绿色旅游同时解决环保和经济两个问题。',
            '27': '空格前说"Green tourism might not mean a vacation spent with little or no comfort"（绿色旅游可能并不意味着度过一个几乎没有舒适度的假期），空格后说"Green tourism resorts exist in almost every style and taste"（几乎每一种风格和品味都有绿色旅游度假村）。选项F "On the contrary, people think that it can be a wonderful adventure"（相反，人们认为它可以是一次美妙的冒险）中的"On the contrary"与前文"might not mean little comfort"形成转折，解释绿色旅游并不意味不舒适，与后文"every style and taste"呼应。',
            '28': '空格前说"On a green holiday, people study the local plants and culture"（在绿色假期中，人们学习当地的植物和文化），空格后说"Guides, tours and wildlife-viewing platforms help people experience a lot"（导游、旅行和野生动物观赏平台帮助人们体验很多）。选项A "They also learn ways to protect them"（他们还学习保护它们的方法）中的"They"指代"people"，"also learn"承接前文"study the local plants and culture"，"protect them"与后文"protect the wildlife"呼应。',
            '29': '空格前说"They can help to build a school"（他们可以帮助建一所学校），空格后说"These vacations can be a lot of work"（这些假期可能有很多工作）。选项C "They can do other things that are good for the area"（他们可以做其他对该地区有益的事情）中的"other things"承接前文的"protect the wildlife / build a school"，"good for the area"总结这些活动的共同特点，与后文"a lot of work"呼应。',
            '30': '空格前说"Nowadays, green tourism is becoming more popular"（如今，绿色旅游正变得越来越受欢迎），空格后说"More areas will take steps to have less of an impact on the environment"（更多地区将采取措施减少对环境的影响）。选项E "So there are likely to be more vacationing options available"（因此可能会有更多的度假选择）中的"So"承接前文"becoming more popular"，"more vacationing options"引出后文"More areas will take steps"，形成逻辑链。'
        }
    },

    // ========== 26. 2026年4月 ==========
    {
        id: '2026-04',
        session: '2026年4月',
        articleTitle: 'Bird Maps and Compasses (罗盘)',
        passage: [
            'Every year hundreds of species of birds take long trips. [26] In the fall, they fly to warmer climates where food is plentiful all winter. When spring comes, they fly back to raise their young where they were born. For a long time people wondered where the birds went and what routes they took.',
            'Researchers now know that migrating birds are guided by their own sorts of maps and compasses. But it has taken many decades to uncover the secrets of these navigation (导航) tools. In the 1800s, scientists started putting bands around birds\' legs. [27] When people found the banded birds, they contacted the person named on the band and told him where and when they had found the bird. In this simple way, scientists learned a lot about where birds traveled, where they stopped, and how fast they moved.',
            'Today scientists still put bands on birds\' legs. They also use new ways of tracking birds such as airplanes, computers, and satellites. [28]',
            'Birds often migrate in groups. You may have seen Canada geese flying high in the sky in a V-form. Young birds follow their parents. [29] They may follow a river and remember what it looks like. Also, birds use the position of the sun and stars as a compass to find their way.',
            '[30] Chemicals in their brains allow them to sense the magnetic field and travel in the right direction. But scientists are still researching how this happens. They think some birds may actually be able to see the earth\'s magnetic field.'
        ],
        options: [
            { letter: 'A', text: 'The bands contained a name and address.' },
            { letter: 'B', text: 'Birds use the earth\'s magnetic field to navigate too.' },
            { letter: 'C', text: 'A map and a compass are often helpful for long trips.' },
            { letter: 'D', text: 'They fly thousands of miles from one home to another.' },
            { letter: 'E', text: 'They learn the route that the older geese have traveled before.' },
            { letter: 'F', text: 'They have answered many questions about how birds navigate.' }
        ],
        answers: { '26': 'D', '27': 'A', '28': 'F', '29': 'E', '30': 'B' },
        explanations: {
            '26': '空格前说"Every year hundreds of species of birds take long trips"（每年数百种鸟类进行长途旅行），空格后说"In the fall, they fly to warmer climates"（在秋天，它们飞往气候更温暖的地方）。选项D "They fly thousands of miles from one home to another"（它们从一个家飞到另一个家，飞行数千英里）具体说明了"long trips"的规模，与后文"fly to warmer climates"和"fly back"呼应。',
            '27': '空格前说"In the 1800s, scientists started putting bands around birds\' legs"（19世纪，科学家开始给鸟腿戴上环带），空格后说"When people found the banded birds, they contacted the person named on the band"（当人们发现戴环带的鸟时，他们联系环带上写名字的人）。选项A "The bands contained a name and address"（环带上有姓名和地址）说明环带上有什么信息，与后文"the person named on the band"直接呼应，解释人们如何联系。',
            '28': '空格前说"They also use new ways of tracking birds such as airplanes, computers, and satellites"（他们还使用飞机、计算机和卫星等追踪鸟类的**新方法**）。选项F "They have answered many questions about how birds navigate"（它们已经回答了许多关于鸟类如何导航的问题）中的"They"指代前文的**新方法**，"answered many questions"总结这些方法的作用，与文章开头的"wondered where the birds went"呼应。',
            '29': '空格前说"Young birds follow their parents"（幼鸟跟随父母），空格后说"They may follow a river and remember what it looks like"（它们可能沿着一条河飞行并记住它的样子）。选项E "They learn the route that the older geese have traveled before"（它们学习年长的鹅以前旅行过的路线）中的"They"指代"Young birds"，"learn the route"与"follow their parents"呼应，"older geese"与后文"follow a river"形成具体说明。',
            '30': '空格后说"Chemicals in their brains allow them to sense the magnetic field and travel in the right direction"（它们大脑中的化学物质使它们能感知磁场并朝着正确的方向飞行）。选项B "Birds use the earth\'s magnetic field to navigate too"（鸟类也使用地球磁场导航）中的"too"承接前文提到的多种导航方式，"magnetic field"与后文"sense the magnetic field"直接呼应。'
        }
    },
];