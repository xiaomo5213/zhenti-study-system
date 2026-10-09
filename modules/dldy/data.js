// data.js - 题库数据（26个考期：2013年10月 ~ 2026年4月）
// 包含概括段落大意和补全句子试题，每题2分（Task1每空1分，Task2每空1分，合计10分/考期）
const exams = [
    // ========== 1. 2013年10月 ==========
    {
        year: '2013年10月',
        articleTitle: 'Dormitory Life',
        paragraphs: [
            { id: 'p1', colorClass: 'para-1', text: 'Living in a dormitory at college can be a great experience. However, if you take no steps to make this experience positive, dormitory life can become a misery. When you choose to live in a college dormitory, you will have a better chance to live a colorful and meaningful life. Meanwhile, you will have to give up many things as well.' },
            { id: 'p2', colorClass: 'para-2', text: 'When you live in a dormitory, you can meet many people with different interests. And you can enjoy the various services there. Both are very important to make you successful at college. But you may have to give up much of your personal space. You will share a room with someone else. This means you need to make peace with the things and people around you.' },
            { id: 'p3', colorClass: 'para-3', text: 'You will have to learn some important life skills. For example, you will learn how to get along with people. You will also learn to ignore things that you can\'t change. But in the future, you will find these skills very helpful when you are working in the world.' },
            { id: 'p4', colorClass: 'para-4', text: 'When you live in a dormitory, you can enjoy a wide range of campus services, which are not available to those who live off campus. If you have any school related problems, you have no difficulty finding someone to help, because the school hires people to help the students living there.' },
            { id: 'p5', colorClass: 'para-5', text: 'Besides, living on campus means you don\'t have to travel to and from school in rush hours. And you are more involved in campus life. For example, you can have a better chance to take part in the club activities and make your own contributions. If you want to live a rich campus life, living in a dormitory is your best choice.' }
        ],
        tasks: [
            {
                type: 'matchHeading',
                title: 'Task 1: 为第1~5段选择正确的小标题',
                questions: [
                    { id: '16', label: 'Paragraph ①:', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-1' },
                    { id: '17', label: 'Paragraph ②:', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-2' },
                    { id: '18', label: 'Paragraph ③:', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-3' },
                    { id: '19', label: 'Paragraph ④:', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-4' },
                    { id: '20', label: 'Paragraph ⑤:', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-5' }
                ],
                optionTexts: {
                    'A': 'start a new life',
                    'B': 'losing much of your private life',
                    'C': 'have an unhappy dormitory life',
                    'D': 'many of the campus services',
                    'E': 'traveling from home to school',
                    'F': 'good relations with others'
                }
            },
            {
                type: 'completeSentence',
                title: 'Task 2: 补全句子',
                questions: [
                    { id: '21', label: '21. If you make no effort, you will ______.', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-6' },
                    { id: '22', label: '22. Dormitory life means ______.', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-7' },
                    { id: '23', label: '23. You need to master many skills like how to keep ______.', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-8' },
                    { id: '24', label: '24. Those who live off campus cannot use ______.', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-9' },
                    { id: '25', label: '25. Living on campus can save you the trouble of ______.', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-10' }
                ],
                optionTexts: {
                    'A': 'start a new life',
                    'B': 'losing much of your private life',
                    'C': 'have an unhappy dormitory life',
                    'D': 'many of the campus services',
                    'E': 'traveling from home to school',
                    'F': 'good relations with others'
                }
            }
        ]
    },

    // ========== 2. 2014年4月 ==========
    {
        year: '2014年4月',
        articleTitle: 'Our Muscles',
        paragraphs: [
            { id: 'p1', colorClass: 'para-1', text: 'When we think of muscles, we might often picture a bodybuilder with big arm and leg muscles. But our muscles do not have to look like that to work well.' },
            { id: 'p2', colorClass: 'para-2', text: 'As a matter of fact, every time we write our name, we use the 20 different muscles in our hand. Every time our heart beats, we use our cardiac muscle (心肌). When we eat our food, we use our tongue muscles. We even use muscles when we open and close our eyes. In fact, every time we move, we use some of the muscles in our body.' },
            { id: 'p3', colorClass: 'para-3', text: 'A muscle is made of tiny fibers. Fiber is a type of tissue that feels a little like a rubber band. Thousands of these fibers are packed together to make a single muscle. We all have the same number of muscles -- about 700 or so. Men and women with big muscles simply have thicker bundles of fibers.' },
            { id: 'p4', colorClass: 'para-4', text: 'There are three different types of muscles in our body. Smooth muscles are the ones that we cannot control. They work quietly to keep our body running. Also, they are the ones that help us to absorb our food. The cardiac muscle makes the heart pump blood in and out. Skeletal muscles are the ones that we can control. These are the muscles that we use to raise our hands, or ride our bicycles.' },
            { id: 'p5', colorClass: 'para-5', text: 'Even our face often uses muscles. But if we want to save our energy, try smiling instead of frowning. Remember that it takes 17 muscles in our face to smile, but 43 muscles to frown!' }
        ],
        tasks: [
            {
                type: 'matchHeading',
                title: 'Task 1: 为第1~5段选择正确的小标题',
                questions: [
                    { id: '16', label: 'Paragraph ①:', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-1' },
                    { id: '17', label: 'Paragraph ②:', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-2' },
                    { id: '18', label: 'Paragraph ③:', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-3' },
                    { id: '19', label: 'Paragraph ④:', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-4' },
                    { id: '20', label: 'Paragraph ⑤:', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-5' }
                ],
                optionTexts: {
                    'A': 'What a muscle consists of',
                    'B': 'When we use our muscles',
                    'C': 'How people think of muscles',
                    'D': 'What kind of muscles we have',
                    'E': 'Why we have different muscles',
                    'F': 'Why we should smile rather than frown'
                }
            },
            {
                type: 'completeSentence',
                title: 'Task 2: 补全句子',
                questions: [
                    { id: '21', label: '21. Muscles don\'t have to be very big ______.', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-6' },
                    { id: '22', label: '22. Our muscles are working ______.', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-7' },
                    { id: '23', label: '23. A single muscle contains ______.', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-8' },
                    { id: '24', label: '24. Smooth muscles help us ______.', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-9' },
                    { id: '25', label: '25. Smiling uses less energy than ______.', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-10' }
                ],
                optionTexts: {
                    'A': 'frowning',
                    'B': 'a lot of fibers',
                    'C': 'to digest food',
                    'D': 'to function properly',
                    'E': 'whenever we are happy',
                    'F': 'whenever we do something'
                }
            }
        ]
    },

    // ========== 3. 2014年10月 ==========
    {
        year: '2014年10月',
        articleTitle: 'Plagiarism（剽窃）',
        paragraphs: [
            { id: 'p1', colorClass: 'para-1', text: 'You just found some good stuff on the Web for your science report. You copy a paragraph and paste it into your report. Then you continue your research. But you just made a big mistake. You committed plagiarism. Plagiarism is when you use someone else\'s words or ideas and pretend that they are yours. It\'s not allowed in school, college, or beyond.' },
            { id: 'p2', colorClass: 'para-2', text: 'The word "plagiarism" comes from Latin. It means stealing a person\'s ideas. But it\'s not always easy to tell what is plagiarism and what is not. Sometimes, it\'s accidental. You really intended to do your own work, yet ended up with some sentences that sound just like something you\'ve read.' },
            { id: 'p3', colorClass: 'para-3', text: 'Though plagiarism can be accidental, it\'s sometimes done on purpose. That\'s just being lazy. By copying whole paragraphs from different places, you don\'t have to spend the time thinking about the subject, gathering your own thoughts about it, and then putting them into original words. Cut, paste, and you\'re done.' },
            { id: 'p4', colorClass: 'para-4', text: 'Most schools are pretty strict about plagiarism. If you\'re caught, your graduation will be delayed or worse. At the very least, you\'re probably going to fail the assignment. When you\'re older and in college, some schools will kick out students who plagiarize. When you\'re kicked out of one college, it can be hard to get into another.' },
            { id: 'p5', colorClass: 'para-5', text: 'To be on the safe side, always make it clear where the information comes from. You need to write references. That\'s a list of the sources you used for a project or report. To do that, you\'ll need to know the author, the title, and the date it was published. If you write something really great, maybe someday someone will quote you in a report.' }
        ],
        tasks: [
            {
                type: 'matchHeading',
                title: 'Task 1: 为第1~5段选择正确的小标题',
                questions: [
                    { id: '16', label: 'Paragraph ①:', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-1' },
                    { id: '17', label: 'Paragraph ②:', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-2' },
                    { id: '18', label: 'Paragraph ③:', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-3' },
                    { id: '19', label: 'Paragraph ④:', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-4' },
                    { id: '20', label: 'Paragraph ⑤:', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-5' }
                ],
                optionTexts: {
                    'A': 'Purposeful plagiarism',
                    'B': 'The cost of plagiarism',
                    'C': 'The definition of plagiarism',
                    'D': 'Accidental plagiarism',
                    'E': 'Detecting plagiarism',
                    'F': 'Avoiding plagiarism'
                }
            },
            {
                type: 'completeSentence',
                title: 'Task 2: 补全句子',
                questions: [
                    { id: '21', label: '21. You commit plagiarism when you ______.', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-6' },
                    { id: '22', label: '22. Sometimes it is hard to tell whether ______.', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-7' },
                    { id: '23', label: '23. Copying whole paragraphs can ______.', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-8' },
                    { id: '24', label: '24. Once caught for plagiarism ______.', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-9' },
                    { id: '25', label: '25. If you publish something great, people may ______.', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-10' }
                ],
                optionTexts: {
                    'A': 'you will be punished',
                    'B': 'you have great ideas',
                    'C': 'quote you in their reports',
                    'D': 'take others\' ideas as yours',
                    'E': 'save you much time',
                    'F': 'you plagiarize or not'
                }
            }
        ]
    },

    // ========== 4. 2015年4月 ==========
    {
        year: '2015年4月',
        articleTitle: 'The Woman behind the Brooklyn Bridge',
        paragraphs: [
            { id: 'p1', colorClass: 'para-1', text: 'John Roebling planned to build the Brooklyn Bridge before 1867. But he never really got started. In 1869, he died of an accident. The job fell to his son Washington, a master of construction. In 1872, Washington was injured in building the bridge. He could not walk any longer. He could only see the building of the bridge from his window. But his mind was still fresh. How could he get his ideas down to the workers?' },
            { id: 'p2', colorClass: 'para-2', text: 'That\'s where Emily came in. Emily and Washington married in 1865. At that time John was planning the bridge. He sent his son around the world to study bridges. Emily went along with her husband and learnt much about bridge building. When John died and Washington became the boss, she taught herself more about bridge building. She wanted to help her husband with his new job.' },
            { id: 'p3', colorClass: 'para-3', text: 'Emily regularly came to the building site. She gave Washington\'s instructions to the workers. And then she took questions back to him. However, as time went on, her role started to change. Soon, workers saw her as the new boss. As she had more and more knowledge, she became the chief engineer. She met with officials, discussed with other engineers, and instructed the workers.' },
            { id: 'p4', colorClass: 'para-4', text: 'Emily also helped to solve problems outside the building site. Some people once questioned her husband\'s ability to head the bridge building. And the American Society of Civil Engineers would think about replacing him. Emily went to meet the group. She gave a speech in defense of her husband. The group finally decided to keep him on the job.' },
            { id: 'p5', colorClass: 'para-5', text: 'It took up 14 years to build the bridge. For 11 of those years, Emily was the one in charge. The bridge finally opened on May 24, 1883. She was one of the first people to cross the bridge. Emily never planned on becoming an engineer, but she turned out to be a great one.' }
        ],
        tasks: [
            {
                type: 'matchHeading',
                title: 'Task 1: 为第1~5段选择正确的小标题',
                questions: [
                    { id: '16', label: 'Paragraph ①:', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-1' },
                    { id: '17', label: 'Paragraph ②:', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-2' },
                    { id: '18', label: 'Paragraph ③:', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-3' },
                    { id: '19', label: 'Paragraph ④:', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-4' },
                    { id: '20', label: 'Paragraph ⑤:', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-5' }
                ],
                optionTexts: {
                    'A': 'How did Emily pick up bridge building?',
                    'B': 'What happened to John and Washington?',
                    'C': 'How did Emily feel about her work?',
                    'D': 'What role did Emily play in building the bridge?',
                    'E': 'How long did it take to build the bridge?',
                    'F': 'Why did Emily give a speech?'
                }
            },
            {
                type: 'completeSentence',
                title: 'Task 2: 补全句子',
                questions: [
                    { id: '21', label: '21. After his father died, ______.', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-6' },
                    { id: '22', label: '22. Accompanied by Emily, ______.', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-7' },
                    { id: '23', label: '23. As time went on, ______.', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-8' },
                    { id: '24', label: '24. Emily gave a speech ______.', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-9' },
                    { id: '25', label: '25. It took fourteen years ______.', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-10' }
                ],
                optionTexts: {
                    'A': 'Washington went to study bridges',
                    'B': 'to express her thanks',
                    'C': 'Washington took over the job',
                    'D': 'to build the bridge',
                    'E': 'Emily began to play a bigger role',
                    'F': 'to defend her husband'
                }
            }
        ]
    },

    // ========== 5. 2015年10月 ==========
    {
        year: '2015年10月',
        articleTitle: 'More Than One Kind of Intelligence',
        paragraphs: [
            { id: 'p1', colorClass: 'para-1', text: 'You may have heard people mention "IQ" when talking about how smart someone is. IQ stands for "intelligence quotient (智商)." It can help predict how well someone may do academically.' },
            { id: 'p2', colorClass: 'para-2', text: 'IQ is just one measure of our abilities. There are many other kinds of intelligence. For example, spatial (空间) intelligence is the ability to think in 3D. Musical intelligence is the ability to recognize rhythm and tone. Abilities in sports and arts are other types of intelligence.' },
            { id: 'p3', colorClass: 'para-3', text: 'Another important type of intelligence is emotional intelligence. Emotional intelligence (EQ for short) is the ability to understand, use, and manage our emotions. Just as a high IQ can predict top test scores, a high EQ can predict success in social and emotional situations. EQ helps us build strong relationships, make good decisions, and deal with difficult situations.' },
            { id: 'p4', colorClass: 'para-4', text: 'One way to think about EQ is that it is part of being people-smart. Understanding and getting along with people help us become successful in our lives. In fact, some studies show that EQ is more important than IQ when it comes to doing well in school or being successful at work.' },
            { id: 'p5', colorClass: 'para-5', text: 'Some people are born with good EQ skills; others need to work on them. Everyone can get better if they know what to do. Being able to notice and label everyday feelings is the most basic EQ skill. Being aware of emotions helps us manage our own emotions. It also helps us understand how others feel.' }
        ],
        tasks: [
            {
                type: 'matchHeading',
                title: 'Task 1: 为第1~5段选择正确的小标题',
                questions: [
                    { id: '16', label: 'Paragraph ①:', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-1' },
                    { id: '17', label: 'Paragraph ②:', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-2' },
                    { id: '18', label: 'Paragraph ③:', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-3' },
                    { id: '19', label: 'Paragraph ④:', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-4' },
                    { id: '20', label: 'Paragraph ⑤:', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-5' }
                ],
                optionTexts: {
                    'A': 'Kinds of intelligence',
                    'B': 'Definition of IQ',
                    'C': 'Importance of EQ',
                    'D': 'Definition of EQ',
                    'E': 'Development of EQ studies',
                    'F': 'Ways to improve EQ skills'
                }
            },
            {
                type: 'completeSentence',
                title: 'Task 2: 补全句子',
                questions: [
                    { id: '21', label: '21. People often use IQ to ______.', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-6' },
                    { id: '22', label: '22. Being able to face difficulties demands ______.', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-7' },
                    { id: '23', label: '23. A high EQ helps us succeed ______.', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-8' },
                    { id: '24', label: '24. Being able to get along with people is ______.', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-9' },
                    { id: '25', label: '25. One of the most basic EQ skills is to ______.', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-10' }
                ],
                optionTexts: {
                    'A': 'in our work',
                    'B': 'recognize everyday feelings',
                    'C': 'talk about how smart a person is',
                    'D': 'a sign of high EQ',
                    'E': 'a high EQ',
                    'F': 'in a friendly way'
                }
            }
        ]
    },

    // ========== 6. 2016年4月 ==========
    {
        year: '2016年4月',
        articleTitle: 'How to Forgive, Forget and Let Go',
        paragraphs: [
            { id: 'p1', colorClass: 'para-1', text: 'Forgiving someone does not mean releasing them from an earlier guilt. What if the person who wronged you is not living? What if the person is someone who made you extremely embarrassed during school 20 or 30 years ago? Letting go of emotional pain does not mean that nothing happened; it means that you no longer want to be controlled by it.' },
            { id: 'p2', colorClass: 'para-2', text: 'Recognize that forgiveness is not denial. Whatever caused the pain was a real incident. Denying that it happened means it is too painful to work through the emotions. There is no timeline on forgiveness. Some steps take longer to get through, and it is acceptable to set them aside for a period of time. Part of forgiveness is understanding whether or not someone takes responsibility for what happened, and may even show regret.' },
            { id: 'p3', colorClass: 'para-3', text: 'Understand that not everyone who forgives reconciles with the person who caused the pain. There are relationships that are harmful and even physically dangerous. While it is possible to forgive the past and move beyond it, it may also mean that the person who was involved can no longer play an active role in your life. If a person or a situation is not safe, it may be best not to reconcile the relationship now. Work on forgiveness at a time when you are emotionally healthy and physically safe.' },
            { id: 'p4', colorClass: 'para-4', text: 'Make a conscious decision to forgive someone. Even if they never apologize for what happened, determine within yourself that it is fine to proceed without this apology. Apologies should not be asking for forgiveness. Apologies should be offered as an effort of true regret. They should be admitting that taking personal responsibility for the situation is important. Even without that apology, make up your mind to forgive, forget, and eventually let go.' }
        ],
        tasks: [
            {
                type: 'matchHeading',
                title: 'Task 1: 为第1~4段选择正确的小标题',
                questions: [
                    { id: '16', label: 'Paragraph ①:', correct: 'C', options: ['A','B','C','D','E'], color: 'q-color-1' },
                    { id: '17', label: 'Paragraph ②:', correct: 'B', options: ['A','B','C','D','E'], color: 'q-color-2' },
                    { id: '18', label: 'Paragraph ③:', correct: 'A', options: ['A','B','C','D','E'], color: 'q-color-3' },
                    { id: '19', label: 'Paragraph ④:', correct: 'D', options: ['A','B','C','D','E'], color: 'q-color-4' },
                    { id: '20', label: 'Paragraph ⑤:', correct: 'E', options: ['A','B','C','D','E'], color: 'q-color-5' }
                ],
                optionTexts: {
                    'A': 'Forgiving should be at a safe time',
                    'B': 'Forgiving is not to deny what happened',
                    'C': 'Forgiving is not to free someone from blame',
                    'D': 'Forgiving can happen without an apology',
                    'E': 'Forgiving can lead us away from the past hurt'
                }
            },
            {
                type: 'completeSentence',
                title: 'Task 2: 补全句子',
                questions: [
                    { id: '21', label: '21. You may forgive someone ______.', correct: 'D', options: ['A','B','C','D','E','F','G'], color: 'q-color-6' },
                    { id: '22', label: '22. There is no fixed time ______.', correct: 'F', options: ['A','B','C','D','E','F','G'], color: 'q-color-7' },
                    { id: '23', label: '23. Even if you\'ve forgiven someone ______.', correct: 'A', options: ['A','B','C','D','E','F','G'], color: 'q-color-8' },
                    { id: '24', label: '24. Don\'t rush to forgive those ______.', correct: 'C', options: ['A','B','C','D','E','F','G'], color: 'q-color-9' },
                    { id: '25', label: '25. Some people apologize merely ______.', correct: 'G', options: ['A','B','C','D','E','F','G'], color: 'q-color-10' }
                ],
                optionTexts: {
                    'A': 'you may not become friends',
                    'B': 'to offer forgiveness',
                    'C': 'who are still dangerous to you',
                    'D': 'who wronged you long time ago',
                    'E': 'you may never get rid of emotional pain',
                    'F': 'who only forgive those showing regret',
                    'G': 'for being forgiven'
                }
            }
        ]
    },

    // ========== 7. 2016年10月 ==========
    {
        year: '2016年10月',
        articleTitle: 'How to Perfect the Art of Public Speaking',
        paragraphs: [
            { id: 'p1', colorClass: 'para-1', text: 'You can\'t go from a nervous speaker to a star speaker overnight. You shouldn\'t expect to. Give yourself time to get used to a large audience. Start with smaller groups and get as much feedback as you can. Keep on practicing and developing your skills.' },
            { id: 'p2', colorClass: 'para-2', text: 'Be familiar with your speech materials. That doesn\'t mean memorizing your speech, which can lack enthusiasm and naturalness. Know your key talking points, supporting details and ways to move from one point to the next.' },
            { id: 'p3', colorClass: 'para-3', text: 'Positive energy can be passed. If you\'re excited and enthusiastic, your audience will be, too. You\'ll be surprised at the positive cycle that creates: An enthusiastic audience can add even more energy to you. Use hand gestures. When appropriate, smile, smile, smile.' },
            { id: 'p4', colorClass: 'para-4', text: 'Find friendly, interested faces in the audience and speak to them. Look into their eyes. It helps prevent you from staring off into the distance or reading from notes. It also helps make you feel like you are talking in a conversation rather than speaking to a group.' },
            { id: 'p5', colorClass: 'para-5', text: 'When you look great, you feel great. That makes you confident. Looking great doesn\'t mean wearing new clothes. It means wearing clothes and shoes you feel comfortable and appropriate to the setting. You can\'t go wrong with business suit. Simple is fine, but you should look clean from head to toe.' }
        ],
        tasks: [
            {
                type: 'matchHeading',
                title: 'Task 1: 为第1~5段选择正确的小标题',
                questions: [
                    { id: '16', label: 'Paragraph ①:', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-1' },
                    { id: '17', label: 'Paragraph ②:', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-2' },
                    { id: '18', label: 'Paragraph ③:', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-3' },
                    { id: '19', label: 'Paragraph ④:', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-4' },
                    { id: '20', label: 'Paragraph ⑤:', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-5' }
                ],
                optionTexts: {
                    'A': 'Be enthusiastic',
                    'B': 'Know your materials',
                    'C': 'Make eye contact',
                    'D': 'Know your audience',
                    'E': 'Improve gradually',
                    'F': 'Dress appropriately'
                }
            },
            {
                type: 'completeSentence',
                title: 'Task 2: 补全句子',
                questions: [
                    { id: '21', label: '21. Feedback helps speakers ______.', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-6' },
                    { id: '22', label: '22. Memorizing materials may lead to ______.', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-7' },
                    { id: '23', label: '23. Hand gestures and smiles help create ______.', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-8' },
                    { id: '24', label: '24. Looking into the eyes of the audience helps ______.', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-9' },
                    { id: '25', label: '25. Wearing right clothes may ______.', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-10' }
                ],
                optionTexts: {
                    'A': 'lack of enthusiasm',
                    'B': 'make you look great',
                    'C': 'a positive atmosphere',
                    'D': 'improve their speaking skills',
                    'E': 'stop you from reading your notes',
                    'F': 'become a good listener'
                }
            }
        ]
    },

    // ========== 8. 2017年4月 ==========
    {
        year: '2017年4月',
        articleTitle: 'Ancient Greek Values',
        paragraphs: [
            { id: 'p1', colorClass: 'para-1', text: 'Ancient Greek civilization has greatly helped the building of today\'s society. Many countries now still base their laws and ethics (伦理) on the teachings and doings of ancient Greeks. In everyday life, ancient Greeks valued loyalty, glory, intelligence and hospitality (好客). These may seem simple values, but they did effectively shape ancient Greece into a most referenced culture in history.' },
            { id: 'p2', colorClass: 'para-2', text: 'During ancient Greece, men were required to go to school and learn. Boys were taught at home until they were 6 years old and then sent off to school. Ancient Greek schools featured a structure that had boys in school from the age of six until fourteen and then an optional additional four years. The boys were trained in arts and in citizen training. Citizen training prepared Greek boys for two aspects of adult life, which were peace and war.' },
            { id: 'p3', colorClass: 'para-3', text: 'Glory for young men in ancient Greece was the same as fame to young people today. Stories of war glories and battles were handed down to young men so that they desired to make their names along with the victory of a battle.' },
            { id: 'p4', colorClass: 'para-4', text: 'Helping your fellow man was an important aspect of life in ancient Greece. Ancient Greeks were kind and generous. They offered food, shelter and protection to travelers without question. They believed that helping others was their brotherly duty.' },
            { id: 'p5', colorClass: 'para-5', text: 'Loyalty is perhaps the most important value of ancient Greek civilization. It was stressed in everything the Greeks did. They believed in loyalty to the family, the community and most importantly to the gods. The gods of ancient Greece often sent tests to citizens. Keeping faith through the tests was a sign of loyalty and belief.' }
        ],
        tasks: [
            {
                type: 'matchHeading',
                title: 'Task 1: 为第1~5段选择正确的小标题',
                questions: [
                    { id: '16', label: 'Paragraph ①:', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-1' },
                    { id: '17', label: 'Paragraph ②:', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-2' },
                    { id: '18', label: 'Paragraph ③:', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-3' },
                    { id: '19', label: 'Paragraph ④:', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-4' },
                    { id: '20', label: 'Paragraph ⑤:', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-5' }
                ],
                optionTexts: {
                    'A': 'Impact of ancient Greek values',
                    'B': 'Top value of ancient Greeks',
                    'C': 'Sense of honor of ancient Greeks',
                    'D': 'Education in ancient Greece',
                    'E': 'Friendliness of ancient Greeks',
                    'F': 'Wars in ancient Greece'
                }
            },
            {
                type: 'completeSentence',
                title: 'Task 2: 补全句子',
                questions: [
                    { id: '21', label: '21. Ancient Greek values are held ______.', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-6' },
                    { id: '22', label: '22. Young men in ancient Greece were required ______.', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-7' },
                    { id: '23', label: '23. Young Greeks had a strong desire ______.', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-8' },
                    { id: '24', label: '24. Ancient Greeks saw it as a duty ______.', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-9' },
                    { id: '25', label: '25. Ancient Greeks stressed loyalty ______.', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-10' }
                ],
                optionTexts: {
                    'A': 'in whatever they did',
                    'B': 'to study law',
                    'C': 'to help others',
                    'D': 'to go to school',
                    'E': 'in many countries',
                    'F': 'to achieve honor'
                }
            }
        ]
    },

    // ========== 9. 2017年10月 ==========
    {
        year: '2017年10月',
        articleTitle: 'A Fighting Lady',
        paragraphs: [
            { id: 'p1', colorClass: 'para-1', text: 'Deborah Sampson was born in 1760. There were many children in her family and they were poor. When Deborah was just a young girl, her father left and went off to sea. Being in poor health, her mother could not care for her children. So she sent them to live with different relatives, hoping these people would take care of her children.' },
            { id: 'p2', colorClass: 'para-2', text: 'Young Deborah, less than seven years old, had to work for a farmer. On the farm, she learned to ride and hunt. She did housework as well. Life was difficult, but Deborah worked hard and grew strong. The farmer had ten sons, and Deborah helped to take care of them. In the evening, she had the boys talk about their lessons with her. By this she learned what they learned. She also borrowed their school books to read every night. When she was 18, Deborah became a teacher.' },
            { id: 'p3', colorClass: 'para-3', text: 'Soon after she started her new career, the American Revolution began. She wanted to fight for her country, but women could not be soldiers at that time. Deborah had a plan. She was tall for a woman of that time. She made herself a man\'s suit and secretly practiced walking and talking like a man. Finally, she joined the army using the name Robert.' },
            { id: 'p4', colorClass: 'para-4', text: '"Robert" was a brave soldier. He fought with courage in every battle, and other soldiers respected him. They never suspected that their fellow soldier was a woman. Once he caught a fever and had to go to the hospital. There a doctor found out that Robert was actually a woman. Deborah then had to leave the army, but she was not punished. Some people say she even met General George Washington before she left.' },
            { id: 'p5', colorClass: 'para-5', text: 'Later, Deborah married a farmer and had three children. She taught in school and gave lectures about her time in the army till retirement. Deborah died at the age of 66. She was a true American hero.' }
        ],
        tasks: [
            {
                type: 'matchHeading',
                title: 'Task 1: 为第1~5段选择正确的小标题',
                questions: [
                    { id: '16', label: 'Paragraph ①:', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-1' },
                    { id: '17', label: 'Paragraph ②:', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-2' },
                    { id: '18', label: 'Paragraph ③:', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-3' },
                    { id: '19', label: 'Paragraph ④:', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-4' },
                    { id: '20', label: 'Paragraph ⑤:', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-5' }
                ],
                optionTexts: {
                    'A': 'Deborah\'s marriage',
                    'B': 'Deborah\'s life on the farm',
                    'C': 'Deborah\'s life after leaving the army',
                    'D': 'Deborah\'s military life',
                    'E': 'Deborah\'s joining the army',
                    'F': 'Deborah\'s family background'
                }
            },
            {
                type: 'completeSentence',
                title: 'Task 2: 补全句子',
                questions: [
                    { id: '21', label: '21. Deborah was sent to others\' home because ______.', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-6' },
                    { id: '22', label: '22. Deborah became a teacher by ______.', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-7' },
                    { id: '23', label: '23. Deborah went into the army by ______.', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-8' },
                    { id: '24', label: '24. Deborah left the army after ______.', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-9' },
                    { id: '25', label: '25. Deborah was a hero ______.', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-10' }
                ],
                optionTexts: {
                    'A': 'teaching herself on the farm',
                    'B': 'for her unusual courage',
                    'C': 'a doctor discovered her secret',
                    'D': 'her family couldn\'t support her',
                    'E': 'dressing and behaving like a man',
                    'F': 'for her excellent teaching'
                }
            }
        ]
    },

    // ========== 10. 2018年4月 ==========
    {
        year: '2018年4月',
        articleTitle: 'Team Work in Sports',
        paragraphs: [
            { id: 'p1', colorClass: 'para-1', text: 'Teams that win in team sports are often those that work well together. Learning to cooperate with others towards a common goal in sports is what builds character, friendship and important life skills for players.' },
            { id: 'p2', colorClass: 'para-2', text: 'Working towards a common goal will keep the team firmly together. Entering into a new season in sports, you might only know a few of the players on your team. Some of the players may be people you do not like. But when your team decides to be the winner of the season, personal differences are often set aside for the common good of the team. By the end of the season, players who have fought through the whole season may become good friends, much like brothers.' },
            { id: 'p3', colorClass: 'para-3', text: 'For kids and young adults, team sports offer a way for them to get out and meet with friends. This can help them avoid spending too much time at home watching television and playing video games. Team work teaches people how to help each other and encourage each other. It can also give players a greater respect for one another and can build friendships that last a lifetime.' },
            { id: 'p4', colorClass: 'para-4', text: 'Team work in sports offers a way for people to compete for something together. It is important to know that winning is not everything in sports and healthy competition can be good for people. Working towards a goal can teach people the value of hard work, commitment and devotion. Team sports are a great way to learn these values.' },
            { id: 'p5', colorClass: 'para-5', text: 'Team work in sports can help young people develop stronger communication skills. As every member must work for the same goal, they learn how to work with one another successfully.' }
        ],
        tasks: [
            {
                type: 'matchHeading',
                title: 'Task 1: 为第1~5段选择正确的小标题',
                questions: [
                    { id: '16', label: 'Paragraph ①:', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-1' },
                    { id: '17', label: 'Paragraph ②:', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-2' },
                    { id: '18', label: 'Paragraph ③:', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-3' },
                    { id: '19', label: 'Paragraph ④:', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-4' },
                    { id: '20', label: 'Paragraph ⑤:', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-5' }
                ],
                optionTexts: {
                    'A': 'The common goal',
                    'B': 'Healthy competition',
                    'C': 'Team cooperation',
                    'D': 'Exercising and friendship',
                    'E': 'Problems between team members',
                    'F': 'Building communication skills'
                }
            },
            {
                type: 'completeSentence',
                title: 'Task 2: 补全句子',
                questions: [
                    { id: '21', label: '21. Cooperation in team sports helps build ______.', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-6' },
                    { id: '22', label: '22. When your team decides to win the season, you set aside ______.', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-7' },
                    { id: '23', label: '23. In team sports, kids learn to ______.', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-8' },
                    { id: '24', label: '24. In team sports people learn the value of ______.', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-9' },
                    { id: '25', label: '25. A long-lasting friendship can be built ______.', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-10' }
                ],
                optionTexts: {
                    'A': 'set a goal',
                    'B': 'character',
                    'C': 'help each other',
                    'D': 'in team sports',
                    'E': 'your personal differences',
                    'F': 'hard work and devotion'
                }
            }
        ]
    },

    // ========== 11. 2018年10月 ==========
    {
        year: '2018年10月',
        articleTitle: 'Hawaii, the Aloha State',
        paragraphs: [
            { id: 'p1', colorClass: 'para-1', text: 'Hawaii is sometimes called "the Aloha State." Aloha is a word in the Hawaiian language meaning love and peace. It is often used as a way to say "hello" or "goodbye." Hawaii is like the word aloha, because it is a state that has two viewpoints: it remembers its history and looks toward the future.' },
            { id: 'p2', colorClass: 'para-2', text: 'Hawaii is a U.S. state made up of a group of islands in the Pacific Ocean. It is made up of eight large islands and over 100 other smaller islands. It is the only state that is not in North America. The islands were formed by volcanoes that erupted and rose above the ocean. There are still active volcanoes in Hawaii.' },
            { id: 'p3', colorClass: 'para-3', text: 'Because of its location, Hawaii has a tropical climate. It is warm, but usually not hot, all year long. Rarely does the temperature drop below 60 degrees Fahrenheit, although it may occasionally snow at the top of some of the mountains.' },
            { id: 'p4', colorClass: 'para-4', text: 'Once called the Sandwich Islands by Europeans, Hawaii is thought to have been settled by ancient sailors from other islands in the Pacific. The British explorer Captain Cook was thought to be the first European to find the islands in 1778. Because of its location, Hawaii became a frequent stop for European traders and ships. Hawaii was an independent country before it became part of the United States in 1893. It was governed by either a king or a queen. It is one of the only four U.S. states to have been a country before statehood. It was admitted into the Union in 1959 as the 50th state.' },
            { id: 'p5', colorClass: 'para-5', text: 'Today Hawaii is important as a vacation destination. Each year over 6 million people visit Hawaii to enjoy the beaches, the beautiful ocean, and the historical Hawaiian culture. Come and visit Hawaii. You are sure to love it!' }
        ],
        tasks: [
            {
                type: 'matchHeading',
                title: 'Task 1: 为第1~5段选择正确的小标题',
                questions: [
                    { id: '16', label: 'Paragraph ①:', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-1' },
                    { id: '17', label: 'Paragraph ②:', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-2' },
                    { id: '18', label: 'Paragraph ③:', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-3' },
                    { id: '19', label: 'Paragraph ④:', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-4' },
                    { id: '20', label: 'Paragraph ⑤:', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-5' }
                ],
                optionTexts: {
                    'A': 'Mild climate',
                    'B': 'Local customs',
                    'C': 'Tourist attraction',
                    'D': 'Long history',
                    'E': 'Meaning of Aloha',
                    'F': 'Geographic features'
                }
            },
            {
                type: 'completeSentence',
                title: 'Task 2: 补全句子',
                questions: [
                    { id: '21', label: '21. Aloha is often used as ______.', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-6' },
                    { id: '22', label: '22. Hawaii islands are formed by ______.', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-7' },
                    { id: '23', label: '23. Visitors can see snow on ______.', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-8' },
                    { id: '24', label: '24. Hawaii used to be ruled by ______.', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-9' },
                    { id: '25', label: '25. People visit Hawaii for ______.', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-10' }
                ],
                optionTexts: {
                    'A': 'European explorers',
                    'B': 'mountain peaks',
                    'C': 'its scenery and culture',
                    'D': 'volcanic eruptions',
                    'E': 'a way of greeting',
                    'F': 'a king or a queen'
                }
            }
        ]
    },

    // ========== 12. 2019年4月 ==========
    {
        year: '2019年4月',
        articleTitle: 'Easy Ways to Green up Your Life',
        paragraphs: [
            { id: 'p1', colorClass: 'para-1', text: 'Eating meat produces greenhouse gas emissions (排放). If you can\'t give up meat completely, you can reduce your consumption or give up beef. Don\'t eat out-of-season farm products. They are grown in greenhouses. A lot of energy goes into heating the greenhouses. And shipping such out-of-season farm products by air from remote places consumes huge amount of energy, too. Just look for local and in-season foods.' },
            { id: 'p2', colorClass: 'para-2', text: 'Spend less time behind the wheel, cycle and walk more, and use public transport more. If you have to drive, the first thing is to choose a car that uses comparatively less fuel. Besides, stick to the speed limit, keep your tires properly filled with air, empty your trunk of heavy items, and accelerate and brake gently.' },
            { id: 'p3', colorClass: 'para-3', text: 'Want to take a vacation trip by plane? Don\'t hurry. Think again. Air travel has a big impact on the environment compared with most other forms of travel. You have better choices. Consider having a vacation within driving distance. Of course, taking the train is the best choice.' },
            { id: 'p4', colorClass: 'para-4', text: 'Think about how much "stuff" you own. A big part of emissions are linked to our consumption. To reduce it we need a change in consumption culture. Do we really need all the things we buy? And do we always need the newest one? Getting fewer things and making the ones you own last longer will reduce energy use.' },
            { id: 'p5', colorClass: 'para-5', text: 'Your choices about heating and cooling your home are some of the most important things you can do in terms of cutting your greenhouse gas emissions. Keeping the temperature a little lower in the winter and higher in the summer can make a big difference.' }
        ],
        tasks: [
            {
                type: 'matchHeading',
                title: 'Task 1: 为第1~5段选择正确的小标题',
                questions: [
                    { id: '16', label: 'Paragraph ①:', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-1' },
                    { id: '17', label: 'Paragraph ②:', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-2' },
                    { id: '18', label: 'Paragraph ③:', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-3' },
                    { id: '19', label: 'Paragraph ④:', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-4' },
                    { id: '20', label: 'Paragraph ⑤:', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-5' }
                ],
                optionTexts: {
                    'A': 'Change your shopping habit',
                    'B': 'Drive less if possible',
                    'C': 'Take fewer air trips',
                    'D': 'Use air-conditioning moderately',
                    'E': 'Take fewer vacations',
                    'F': 'Eat less meat and more in-season foods'
                }
            },
            {
                type: 'completeSentence',
                title: 'Task 2: 补全句子',
                questions: [
                    { id: '21', label: '21. Eating beef can ______.', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-6' },
                    { id: '22', label: '22. One is advised to remove heavy things ______.', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-7' },
                    { id: '23', label: '23. One had better take a train ______.', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-8' },
                    { id: '24', label: '24. Buying less is one way to ______.', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-9' },
                    { id: '25', label: '25. To save energy, properly control ______.', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-10' }
                ],
                optionTexts: {
                    'A': 'from his car trunk',
                    'B': 'your room temperature',
                    'C': 'for a vacation trip',
                    'D': 'increase greenhouse gas production',
                    'E': 'reduce energy use',
                    'F': 'your water consumption'
                }
            }
        ]
    },

    // ========== 13. 2019年10月 ==========
    {
        year: '2019年10月',
        articleTitle: 'Secrets for a Happier You',
        paragraphs: [
            { id: 'p1', colorClass: 'para-1', text: 'The most important secret to happiness is to be grateful for the good things in your life—whatever may be your financial position. Instead of appreciating material wealth, be thankful for the loved ones in your life and enjoy the little pleasures of life that come your way.' },
            { id: 'p2', colorClass: 'para-2', text: 'The next important secret is to develop relationships. Increasing social contacts helps boost brain power. Therefore, work towards improving your relationships and take time off to get in touch with friends. This will lift some burden off your shoulders, especially when you share your thoughts and feelings. Socializing can give you an added boost to your moods.' },
            { id: 'p3', colorClass: 'para-3', text: 'Thirdly, do not hold a grudge (怨恨) against anyone. Instead, learn to be kind, generous, and forgiving towards others, even to the person who hurt you. Be sympathetic and understanding, and try not to criticize others. Focus on the positives of a person instead of the negatives, for none of us is born perfect. It will keep your heart and mind free and peaceful.' },
            { id: 'p4', colorClass: 'para-4', text: 'Besides, involve yourself in some creative process, be it dancing, writing or drawing. This can bring out the hidden talent in you to achieve magical happiness. Or pick up new skills and feel the great sense of satisfaction by carrying out certain tasks which you otherwise would never have felt.' },
            { id: 'p5', colorClass: 'para-5', text: 'Finally, follow a daily regular sleep-wake cycle to keep you energetic and happy. Exercise regularly or practice relaxation techniques like deep breathing and yoga (瑜伽). Ensure you get eight to nine hours of sleep every day and have a well-balanced diet.' }
        ],
        tasks: [
            {
                type: 'matchHeading',
                title: 'Task 1: 为第1~5段选择正确的小标题',
                questions: [
                    { id: '16', label: 'Paragraph ①:', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-1' },
                    { id: '17', label: 'Paragraph ②:', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-2' },
                    { id: '18', label: 'Paragraph ③:', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-3' },
                    { id: '19', label: 'Paragraph ④:', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-4' },
                    { id: '20', label: 'Paragraph ⑤:', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-5' }
                ],
                optionTexts: {
                    'A': 'Be grateful',
                    'B': 'Develop relationships',
                    'C': 'Learn to forgive',
                    'D': 'Be creative',
                    'E': 'Keep a healthy lifestyle',
                    'F': 'Avoid holding grudges'
                }
            },
            {
                type: 'completeSentence',
                title: 'Task 2: 补全句子',
                questions: [
                    { id: '21', label: '21. A cheerful character makes you ______.', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-6' },
                    { id: '22', label: '22. Enjoy the pleasures of life ______.', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-7' },
                    { id: '23', label: '23. Socializing can make you ______.', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-8' },
                    { id: '24', label: '24. Try to forgive ______.', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-9' },
                    { id: '25', label: '25. Creative activities enable you ______.', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-10' }
                ],
                optionTexts: {
                    'A': 'more intelligent',
                    'B': 'even if you are poor',
                    'C': 'different from others',
                    'D': 'even when you are hurt',
                    'E': 'to develop your potential',
                    'F': 'to gain more material wealth'
                }
            }
        ]
    },

    // ========== 14. 2020年8月 ==========
    {
        year: '2020年8月',
        articleTitle: 'Volunteers',
        paragraphs: [
            { id: 'p1', colorClass: 'para-1', text: 'Volunteers are people who work without being paid. They do the work because they want to. We need volunteers because there are many things that need to be done in society which the Government can\'t afford to pay for.' },
            { id: 'p2', colorClass: 'para-2', text: 'Volunteers are motivated by a desire to help others and to make the world a better place. Statistics suggest that more than one million people do voluntary work in New Zealand. Some volunteers do the kind of work that they are particularly interested in, but perhaps haven\'t had the chance to do during their working lives. Others make use of their professional skills and experience.' },
            { id: 'p3', colorClass: 'para-3', text: 'Volunteers contribute to society in a number of ways. For example, some give their time to help preserve the natural environment. While there are government-run projects to maintain national parks and forests, the projects would not succeed without volunteers. Some environmental organizations rely solely on voluntary labor.' },
            { id: 'p4', colorClass: 'para-4', text: '"Meals on Wheels" is a voluntary organization run by the Red Cross. It delivers meals to elderly people who are unable to cook for themselves. Every year volunteer drivers deliver a million meals. This enables elderly people to remain in their own houses.' },
            { id: 'p5', colorClass: 'para-5', text: 'Volunteer Service Abroad was started in 1962. It sends volunteers to poor countries. To be a volunteer you should be between the ages of 25 and 77, of good health and have a skill or ability that is requested by the country. Volunteers spend two years helping the local people improve their lives. Two years is a long time, but when they return, many volunteers say: "It was the best two years of my life."' }
        ],
        tasks: [
            {
                type: 'matchHeading',
                title: 'Task 1: 为第1~5段选择正确的小标题',
                questions: [
                    { id: '16', label: 'Paragraph ①:', correct: 'A', options: ['A','B','C','D','E'], color: 'q-color-1' },
                    { id: '17', label: 'Paragraph ②:', correct: 'B', options: ['A','B','C','D','E'], color: 'q-color-2' },
                    { id: '18', label: 'Paragraph ③:', correct: 'C', options: ['A','B','C','D','E'], color: 'q-color-3' },
                    { id: '19', label: 'Paragraph ④:', correct: 'D', options: ['A','B','C','D','E'], color: 'q-color-4' },
                    { id: '20', label: 'Paragraph ⑤:', correct: 'E', options: ['A','B','C','D','E'], color: 'q-color-5' }
                ],
                optionTexts: {
                    'A': 'What volunteers are',
                    'B': 'Why people volunteer',
                    'C': 'How volunteers contribute',
                    'D': 'An example of voluntary work',
                    'E': 'Volunteering abroad'
                }
            },
            {
                type: 'completeSentence',
                title: 'Task 2: 补全句子',
                questions: [
                    { id: '21', label: '21. People do voluntary work because they want to ______.', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-6' },
                    { id: '22', label: '22. Some volunteers help others by ______.', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-7' },
                    { id: '23', label: '23. Some organizations rely on volunteers to help ______.', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-8' },
                    { id: '24', label: '24. The elderly can have their meals delivered without ______.', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-9' },
                    { id: '25', label: '25. Many volunteers returning from poor countries ______.', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-10' }
                ],
                optionTexts: {
                    'A': 'help others',
                    'B': 'leaving their homes',
                    'C': 'cooking for the elderly',
                    'D': 'using their professional skills',
                    'E': 'find their experience rewarding',
                    'F': 'preserve the natural environment'
                }
            }
        ]
    },

    // ========== 15. 2020年10月 ==========
    {
        year: '2020年10月',
        articleTitle: 'My Science Teacher',
        paragraphs: [
            { id: 'p1', colorClass: 'para-1', text: 'Usually when people decide to be teachers, they go to college, get a degree, and find a job at a school. They prepare lesson plans, give out homework, and make up tests. To them, it is just a job, a way to make a living. But for my science teacher, Mrs. Cook, teaching is not just her job; it\'s who she is. She teaches through her heart.' },
            { id: 'p2', colorClass: 'para-2', text: 'She has so much enthusiasm in her lessons. She is the one who goes out late at night to buy 10 pounds of sugar for our experiments. She brings in water from the nearby canal to make her point, and to make us remember the lesson. She makes us think that each new fact could change our lives.' },
            { id: 'p3', colorClass: 'para-3', text: 'Mrs. Cook wants all of us to do well in school. She tries to reach each student. She neither ignores the sleeping kid in the back, nor lets the problem students alone. She shows special concern to slow students, and often helps them after school. None of us can slip away from her attention.' },
            { id: 'p4', colorClass: 'para-4', text: 'Middle school is probably one of the hardest times of our lives. We change friends so often, and fight with our parents constantly. But Mrs. Cook has made this year so much better for us than it could have been. We know that if we had to turn to anybody, it would be her. And I\'m not alone in feeling this way; she is a role model for our whole class.' },
            { id: 'p5', colorClass: 'para-5', text: 'Science had never been my favorite subject. I had never borrowed science books. I had never performed experiments in my home. But this year, it\'s the science class that I don\'t mind waking up for, the test I don\'t mind taking. I have Mrs. Cook to thank for that. She has taught us so much more than just a single subject.' }
        ],
        tasks: [
            {
                type: 'matchHeading',
                title: 'Task 1: 为第1~5段选择正确的小标题',
                questions: [
                    { id: '16', label: 'Paragraph ①:', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-1' },
                    { id: '17', label: 'Paragraph ②:', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-2' },
                    { id: '18', label: 'Paragraph ③:', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-3' },
                    { id: '19', label: 'Paragraph ④:', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-4' },
                    { id: '20', label: 'Paragraph ⑤:', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-5' }
                ],
                optionTexts: {
                    'A': 'Mrs. Cook makes our school life easier',
                    'B': 'I enjoy science class now',
                    'C': 'Mrs. Cook cares about each student',
                    'D': 'Mrs. Cook is strict with her students',
                    'E': 'Mrs. Cook\'s lessons are well-prepared',
                    'F': 'Teaching is more than a job for Mrs. Cook'
                }
            },
            {
                type: 'completeSentence',
                title: 'Task 2: 补全句子',
                questions: [
                    { id: '21', label: '21. To become a school teacher, one needs ______.', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-6' },
                    { id: '22', label: '22. Mrs. Cook often goes out to collect ______.', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-7' },
                    { id: '23', label: '23. Mrs. Cook offers slow students extra help ______.', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-8' },
                    { id: '24', label: '24. Our whole class take Mrs. Cook as ______.', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-9' },
                    { id: '25', label: '25. I am lucky to have Mrs. Cook as ______.', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-10' }
                ],
                optionTexts: {
                    'A': 'in class',
                    'B': 'my teacher',
                    'C': 'after school',
                    'D': 'a role model',
                    'E': 'a college degree',
                    'F': 'teaching materials'
                }
            }
        ]
    },

    // ========== 16. 2021年4月 ==========
    {
        year: '2021年4月',
        articleTitle: 'Surviving Illness Away From Home',
        paragraphs: [
            { id: 'p1', colorClass: 'para-1', text: 'Pampering (娇惯) yourself is always a good start. If you feel so ill and tired that you can\'t even get out of bed, then don\'t! Make a trip to the kitchen and stock up on fluids and try to make yourself some hot food. The key to getting better is to drink lots of fluids. Water and hot drinks such as green tea and soup are usually the best things.' },
            { id: 'p2', colorClass: 'para-2', text: 'Try to distract yourself from feeling horrible. If you have a TV, watch one of your favorite films or TV series. If you don\'t have a TV, maybe put the radio on. If you have a headache and all the noise is too much to handle, try reading the book you\'ve always wanted to read but never had the time to. Being ill doesn\'t have to be the worst day in the world.' },
            { id: 'p3', colorClass: 'para-3', text: 'Tell your friends and family that you are ill. Sometimes there is nothing better than hearing words of comfort from loved ones who feel sorry for you and want to cheer you up and make you happy. There is nothing wrong with a little attention from others when you\'re ill. Who knows, they might even be willing to travel and visit you with lots of "Get Well" presents like your favorite food, magazine or flowers.' },
            { id: 'p4', colorClass: 'para-4', text: 'When you do arrive at a new place where you will be staying for a few months, make sure you know exactly where the nearest drugstore is. If you are in a foreign country, it might be best to translate a few useful phrases before you start asking for a cure.' }
        ],
        tasks: [
            {
                type: 'matchHeading',
                title: 'Task 1: 为第1~4段选择正确的小标题',
                questions: [
                    { id: '16', label: 'Paragraph ①:', correct: 'A', options: ['A','B','C','D','E'], color: 'q-color-1' },
                    { id: '17', label: 'Paragraph ②:', correct: 'C', options: ['A','B','C','D','E'], color: 'q-color-2' },
                    { id: '18', label: 'Paragraph ③:', correct: 'E', options: ['A','B','C','D','E'], color: 'q-color-3' },
                    { id: '19', label: 'Paragraph ④:', correct: 'D', options: ['A','B','C','D','E'], color: 'q-color-4' },
                    { id: '20', label: 'Paragraph ⑤:', correct: 'A', options: ['A','B','C','D','E'], color: 'q-color-5' }
                ],
                optionTexts: {
                    'A': 'Taking good care of yourself',
                    'B': 'Staying in bed for the entire day',
                    'C': 'Taking your attention away from illness',
                    'D': 'Knowing where and how to get medicine',
                    'E': 'Informing friends and family of your illness'
                }
            },
            {
                type: 'completeSentence',
                title: 'Task 2: 补全句子',
                questions: [
                    { id: '21', label: '21. Being sick away from home is ______.', correct: 'D', options: ['A','B','C','D','E','F','G'], color: 'q-color-6' },
                    { id: '22', label: '22. You are advised to recover ______.', correct: 'B', options: ['A','B','C','D','E','F','G'], color: 'q-color-7' },
                    { id: '23', label: '23. The best cure for illness is ______.', correct: 'C', options: ['A','B','C','D','E','F','G'], color: 'q-color-8' },
                    { id: '24', label: '24. If you cannot bear the noise from TV, ______.', correct: 'F', options: ['A','B','C','D','E','F','G'], color: 'q-color-9' },
                    { id: '25', label: '25. A few useful translated phrases help you ______.', correct: 'A', options: ['A','B','C','D','E','F','G'], color: 'q-color-10' }
                ],
                optionTexts: {
                    'A': 'ask for medicine',
                    'B': 'at your own pace',
                    'C': 'water and hot drinks',
                    'D': 'a terrible experience',
                    'E': 'at a nearby drugstore',
                    'F': 'read your favorite book',
                    'G': 'suffer from a cold'
                }
            }
        ]
    },

    // ========== 17. 2021年10月 ==========
    {
        year: '2021年10月',
        articleTitle: 'Little Steps, Big Reward',
        paragraphs: [
            { id: 'p1', colorClass: 'para-1', text: 'More than 145 million Americans take walking as part of their exercise, according to a recent report. That\'s 15 million more people walking than last year. Many places in America have reported an increase in walking. But most of the walkers are found in big cities like New York.' },
            { id: 'p2', colorClass: 'para-2', text: 'Despite the increase in walking, only about 30% of Americans say they have at least 3 hours to take exercise a week. Our society has been conditioned to be inactive. People rely on modern conveniences and become lazy. The inactive lifestyle has a negative aspect. We are more likely to be in poor health like overweight, which will threaten our life span. That\'s where walking comes in.' },
            { id: 'p3', colorClass: 'para-3', text: 'Walking is the best way to improve our health. Just 30 minutes of regular quick walking can help lose weight. At the same time, it can help lower the risk of heart disease and some cancers, and improve our blood pressure. If 30 minutes is too much, we may divide it into three 10-minute parts during the day. Most of us can find 10 minutes if we really try.' },
            { id: 'p4', colorClass: 'para-4', text: 'Walking requires only a pair of shoes and suits any schedules. Keep a pair of sport shoes at work. If you have a few minutes of free time, make use of them to take a quick walk. Even if you go to a health club several times a week, you can still look for ways to be active while at work. It may be walking downstairs for a direct talk rather than sending an email.' },
            { id: 'p5', colorClass: 'para-5', text: 'Small efforts can make a big difference. But the hardest part for us is getting started. It\'s usually like this. When people get to a comfort level of walking for 10 minutes, they might think about trying 11 minutes. That first step is really worthy.' }
        ],
        tasks: [
            {
                type: 'matchHeading',
                title: 'Task 1: 为第1~5段选择正确的小标题',
                questions: [
                    { id: '16', label: 'Paragraph ①:', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-1' },
                    { id: '17', label: 'Paragraph ②:', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-2' },
                    { id: '18', label: 'Paragraph ③:', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-3' },
                    { id: '19', label: 'Paragraph ④:', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-4' },
                    { id: '20', label: 'Paragraph ⑤:', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-5' }
                ],
                optionTexts: {
                    'A': 'The key to walking is getting started',
                    'B': 'Walking is the first step to making changes',
                    'C': 'The advantage of walking is its simplicity',
                    'D': 'Walking is a great way for health improvement',
                    'E': 'More Americans take up walking than before',
                    'F': 'Modern lifestyle affects our health negatively'
                }
            },
            {
                type: 'completeSentence',
                title: 'Task 2: 补全句子',
                questions: [
                    { id: '21', label: '21. Reports say that the walkers are mostly from ______.', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-6' },
                    { id: '22', label: '22. Many diseases are largely caused by ______.', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-7' },
                    { id: '23', label: '23. We can keep healthy by taking ______.', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-8' },
                    { id: '24', label: '24. We can take a quick walk downstairs for ______.', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-9' },
                    { id: '25', label: '25. When feeling good after a 10-minute walk, ______.', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-10' }
                ],
                optionTexts: {
                    'A': 'we divide a 30-minute walk into 3 parts',
                    'B': 'our inactiveness',
                    'C': 'we may like to try a longer one',
                    'D': 'big cities in America',
                    'E': 'a daily 30-minute quick walk',
                    'F': 'a face-to-face talk'
                }
            }
        ]
    },

    // ========== 18. 2022年4月 ==========
    {
        year: '2022年4月',
        articleTitle: 'Helping Children Cope with Stress',
        paragraphs: [
            { id: 'p1', colorClass: 'para-1', text: 'To adults, childhood can seem to be happy and free from worries. But children still experience stress. Things like school and their social life can sometimes create pressures that are too difficult for them to deal with. While they may not talk about their troubles, they do want their parents to reach out and help them.' },
            { id: 'p2', colorClass: 'para-2', text: 'Children deal with stress in both healthy and unhealthy ways. As a parent, you can\'t protect your children from stress, but you can help them develop healthy ways to cope with stress and solve everyday problems. By doing so, you not only help your children handle their current stresses, but also prepare them to deal with future stresses. Here are a few tips for you.' },
            { id: 'p3', colorClass: 'para-3', text: 'When you notice that something is upsetting your child, you need to tell your child about it. If you can, name the feeling you think your child is experiencing. This shouldn\'t sound like blame. It\'s just a casual observation, and you\'re interested in hearing more about your child\'s concern. Be sympathetic and show that you care and want to understand.' },
            { id: 'p4', colorClass: 'para-4', text: 'Also ask your child to tell you what\'s wrong. Listen attentively and calmly—with interest, patience, openness, and caring. Don\'t hurry to make judgements. Do not blame or criticize your child for what he or she has done. The idea is to listen to your child\'s concerns and feelings. Try to get the whole story by patiently asking questions. Take your time. And let your child take his or her time, too.' },
            { id: 'p5', colorClass: 'para-5', text: 'Remember to be patient. As a parent, it hurts to see your child unhappy or stressed. But you should not try to solve every problem for your child. Instead, try to help your child grow into a good problem-solver—a child who knows how to deal with life\'s ups and downs, express feelings in words, calm down when needed, and never give in to difficulties.' }
        ],
        tasks: [
            {
                type: 'matchHeading',
                title: 'Task 1: 为第1~5段选择正确的小标题',
                questions: [
                    { id: '16', label: 'Paragraph ①:', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-1' },
                    { id: '17', label: 'Paragraph ②:', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-2' },
                    { id: '18', label: 'Paragraph ③:', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-3' },
                    { id: '19', label: 'Paragraph ④:', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-4' },
                    { id: '20', label: 'Paragraph ⑤:', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-5' }
                ],
                optionTexts: {
                    'A': 'Help your child deal with stress',
                    'B': 'Show your concern and care',
                    'C': 'Be patient with your child',
                    'D': 'Stories help children',
                    'E': 'Listen to your child',
                    'F': 'Children have stress'
                }
            },
            {
                type: 'completeSentence',
                title: 'Task 2: 补全句子',
                questions: [
                    { id: '21', label: '21. Children can meet pressures ______.', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-6' },
                    { id: '22', label: '22. Parents can help their children cope with stress ______.', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-7' },
                    { id: '23', label: '23. Talk to your child when he/she is ______.', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-8' },
                    { id: '24', label: '24. Don\'t blame your child for ______.', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-9' },
                    { id: '25', label: '25. Parents should teach their children ______.', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-10' }
                ],
                optionTexts: {
                    'A': 'in trouble',
                    'B': 'in healthy ways',
                    'C': 'to forget their problems',
                    'D': 'what he/she has done',
                    'E': 'from school and their social life',
                    'F': 'to solve problems themselves'
                }
            }
        ]
    },

    // ========== 19. 2022年10月 ==========
    {
        year: '2022年10月',
        articleTitle: 'Health Benefits of Honey with Milk',
        paragraphs: [
            { id: 'p1', colorClass: 'para-1', text: 'Take a glass of honey with milk before you set out for your day in the morning, and you are guaranteed enough energy to get through the morning rush. Milk provides you the proteins required while honey helps you get the energy by breaking down these proteins. No wonder this drink is meant for all ages alike.' },
            { id: 'p2', colorClass: 'para-2', text: 'Milk is known for providing calcium (钙), which, in right levels, helps in preventing bone diseases as we age. Research has indicated that honey does a good job of carrying nutrients (营养成分) in the food through the blood to various parts of the body. In particular, honey helps in the absorption of calcium, the vital part of milk.' },
            { id: 'p3', colorClass: 'para-3', text: 'If you ask doctors or your grandmother for a solution to your sleeplessness, you are bound to get the same answer — a glass of warm milk with honey. It is best known to induce sleep. So take it regularly if you have sleeping problems.' },
            { id: 'p4', colorClass: 'para-4', text: 'Milk and honey not only help in preventing aging by keeping the skin glowing, but also improve your body as a whole as they contain antioxidants (抗氧化物). These help keep the body young and flexible. For a very long time, this has been an open secret in keeping your body look and feel young.' },
            { id: 'p5', colorClass: 'para-5', text: 'Both milk and honey are known to ward off harmful bacteria in our body, but their combined strength is more effective in achieving this effect. Cough and cold can be prevented by taking this drink regularly. It also aids in digestion and treating bowel disorders.' }
        ],
        tasks: [
            {
                type: 'matchHeading',
                title: 'Task 1: 为第1~5段选择正确的小标题',
                questions: [
                    { id: '16', label: 'Paragraph ①:', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-1' },
                    { id: '17', label: 'Paragraph ②:', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-2' },
                    { id: '18', label: 'Paragraph ③:', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-3' },
                    { id: '19', label: 'Paragraph ④:', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-4' },
                    { id: '20', label: 'Paragraph ⑤:', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-5' }
                ],
                optionTexts: {
                    'A': 'Honey milk for digestion',
                    'B': 'Honey milk for a youthful glow',
                    'C': 'Honey milk for stronger bones',
                    'D': 'Honey milk for energy',
                    'E': 'Honey milk for a sound sleep',
                    'F': 'Honey milk for antibacterial benefits'
                }
            },
            {
                type: 'completeSentence',
                title: 'Task 2: 补全句子',
                questions: [
                    { id: '21', label: '21. Milk is rich in ______.', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-6' },
                    { id: '22', label: '22. Milk and honey help ______.', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-7' },
                    { id: '23', label: '23. Honey helps the absorption ______.', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-8' },
                    { id: '24', label: '24. Your body may bend or move easily if you ______.', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-9' },
                    { id: '25', label: '25. Drinking honey milk regularly can prevent ______.', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-10' }
                ],
                optionTexts: {
                    'A': 'in proteins and calcium',
                    'B': 'fat and sugar',
                    'C': 'cough and cold',
                    'D': 'keep off harmful bacteria',
                    'E': 'drink milk with honey',
                    'F': 'of calcium in milk'
                }
            }
        ]
    },

    // ========== 20. 2023年4月 ==========
    {
        year: '2023年4月',
        articleTitle: 'I Use Every Second Before I Go to Work',
        paragraphs: [
            { id: 'p1', colorClass: 'para-1', text: 'I wake up at 6 a.m. every day. The first thing I do when I wake up is grab my smartphone and take it to the bathroom with me, where I start my day by consuming quite a lot of information. I go to some websites, but the main site that I focus on during this time is Nuzzel, a collector of headlines and links. I recommend everyone look into it if they feel they don\'t have time to properly focus on every website individually.' },
            { id: 'p2', colorClass: 'para-2', text: 'After visiting those sites, I head to Twitter, my No.1 outlet for communication with the public. Twitter is becoming a listening platform. There is such a volume of information on the platform that you need pay attention to. So I spend a great amount of my morning responding to people and starting conversations.' },
            { id: 'p3', colorClass: 'para-3', text: 'After all this comes my workout (锻炼) with my trainer. I usually work out for about 45 minutes. The specific workout routine varies depending on the day of the week, what I ate, and how much I\'ve been traveling.' },
            { id: 'p4', colorClass: 'para-4', text: 'After the workout, I head back home to get my children ready for school. I say bye to them and give them each a kiss before they leave. Then, I\'m off to my office, often before 9 a.m.' },
            { id: 'p5', colorClass: 'para-5', text: 'In the car to my office, I call my mom, dad or sister. I talk to them just to learn what they\'re up to. I really value those small moments. By the time I step into my office, so much is going through my head. My day starts the minute I open my eyes.' }
        ],
        tasks: [
            {
                type: 'matchHeading',
                title: 'Task 1: 为第1~5段选择正确的小标题',
                questions: [
                    { id: '16', label: 'Paragraph ①:', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-1' },
                    { id: '17', label: 'Paragraph ②:', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-2' },
                    { id: '18', label: 'Paragraph ③:', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-3' },
                    { id: '19', label: 'Paragraph ④:', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-4' },
                    { id: '20', label: 'Paragraph ⑤:', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-5' }
                ],
                optionTexts: {
                    'A': 'I do some morning exercise',
                    'B': 'I phone my parents or sister',
                    'C': 'I prepare my kids for school',
                    'D': 'I communicate with others online',
                    'E': 'I help my kids with their homework',
                    'F': 'I visit websites to get information'
                }
            },
            {
                type: 'completeSentence',
                title: 'Task 2: 补全句子',
                questions: [
                    { id: '21', label: '21. Nuzzel helps me ______.', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-6' },
                    { id: '22', label: '22. On Twitter I am able ______.', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-7' },
                    { id: '23', label: '23. There are several factors that ______.', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-8' },
                    { id: '24', label: '24. Before my kids go to school, I ______.', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-9' },
                    { id: '25', label: '25. I call my parents ______.', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-10' }
                ],
                optionTexts: {
                    'A': 'to listen to others',
                    'B': 'step into my office',
                    'C': 'kiss them goodbye',
                    'D': 'affect my workout routine',
                    'E': 'to learn how they are doing',
                    'F': 'to surf the Internet efficiently'
                }
            }
        ]
    },

    // ========== 21. 2023年10月 ==========
    {
        year: '2023年10月',
        articleTitle: 'Secrets About Professional Chocolate Tasters',
        paragraphs: [
            { id: 'p1', colorClass: 'para-1', text: 'People\'s faces light up when I say I taste chocolate for a living, but it\'s not always delicious. I also have to taste bad chocolate. I\'m usually in a small room and sit in front of a computer to record information. Sometimes the room has red lighting. So I can evaluate chocolate only by taste, not appearance.' },
            { id: 'p2', colorClass: 'para-2', text: 'I can sample as many as 30 chocolates per day. To taste them professionally, I spit the sweets back out. That\'s another not-so-sweet part of the job. Between samples, I wait 30 seconds to let my senses rest, and I chew half an unsalted biscuit and drink plain warm water.' },
            { id: 'p3', colorClass: 'para-3', text: 'First I smell the chocolate and record it. I also listen: Old chocolate doesn\'t make a clear and sharp sound when broken. Then I put a tiny piece in my mouth and leave it there for a few seconds. I let it melt and record the four basic tastes—sweet, sour, bitter and salty.' },
            { id: 'p4', colorClass: 'para-4', text: 'I love chocolate. The bottom part of my refrigerator is filled with chocolate from different parts of the world. My favorite types are very high in cocoa (可可粉). Before I started tasting chocolate professionally, I ate a lot. But now I don\'t eat so much.' },
            { id: 'p5', colorClass: 'para-5', text: 'Many people don\'t know how to appreciate the taste of chocolate. As a taster, I want to help others do what I do. To retrain your taste buds to enjoy better quality chocolate, try simple kinds that aren\'t filled with ingredients like nuts. Look at food with curiosity and love. Notice its color, smell and taste. Then you\'ll know good quality.' }
        ],
        tasks: [
            {
                type: 'matchHeading',
                title: 'Task 1: 为第1~5段选择正确的小标题',
                questions: [
                    { id: '16', label: 'Paragraph ①:', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-1' },
                    { id: '17', label: 'Paragraph ②:', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-2' },
                    { id: '18', label: 'Paragraph ③:', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-3' },
                    { id: '19', label: 'Paragraph ④:', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-4' },
                    { id: '20', label: 'Paragraph ⑤:', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-5' }
                ],
                optionTexts: {
                    'A': 'How I keep a good sense of taste',
                    'B': 'You can taste chocolate like a professional',
                    'C': 'Tasting chocolate requires skills',
                    'D': 'Tasting chocolate is not as sweet as you think',
                    'E': 'Tasting chocolate is the best job ever',
                    'F': 'I\'m still a chocolate lover'
                }
            },
            {
                type: 'completeSentence',
                title: 'Task 2: 补全句子',
                questions: [
                    { id: '21', label: '21. Red lights are used to disguise ______.', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-6' },
                    { id: '22', label: '22. I let my senses rest ______.', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-7' },
                    { id: '23', label: '23. I listen to tell whether a sample ______.', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-8' },
                    { id: '24', label: '24. I ate a lot of chocolate ______.', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-9' },
                    { id: '25', label: '25. Ingredients like nuts may affect ______.', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-10' }
                ],
                optionTexts: {
                    'A': 'is old or fresh',
                    'B': 'is made of cocoa',
                    'C': 'your tasting',
                    'D': 'after I taste each sample',
                    'E': 'before I became a taster',
                    'F': 'the appearance of chocolate'
                }
            }
        ]
    },

    // ========== 22. 2024年4月 ==========
    {
        year: '2024年4月',
        articleTitle: 'How to Create a Five-Year Career Plan',
        paragraphs: [
            { id: 'p1', colorClass: 'para-1', text: 'More and more people choose to make a five-year career plan. They think that the plan can help them to learn where they would like to go in the future. In fact, with a five-year plan, you can document the progress you have already made in your chosen career. You can also learn where you are likely to be heading in the future.' },
            { id: 'p2', colorClass: 'para-2', text: 'The initial step is to think about an end goal. This can help you to gain focus on your career. When you are setting your end goal, make sure that you do not choose a job purely based on its salary. Though salaries for the job may be high now, demand often changes over time.' },
            { id: 'p3', colorClass: 'para-3', text: 'The next step is to get an adviser. An adviser is generally a person who has achieved success in the career that you wish to take. Ideally, an adviser can give you sound career advice. Make sure that you choose your adviser carefully as they may provide you with great insight.' },
            { id: 'p4', colorClass: 'para-4', text: 'Next, you will need to think about the abilities that you will need to fulfill your career plan. Assess your current work experience and past education; figure out any specific skills or knowledge you already have; identify any gaps that you will need to fill in order to meet your end goal; and list any opportunities that you can take to improve the skills or knowledge that you have identified.' },
            { id: 'p5', colorClass: 'para-5', text: 'Finally, you will need to identify the jobs that you would like to take. If you feel that you already have the required skills and knowledge, apply for them. Even if you fail to get one, you will gain some invaluable knowledge from the interview.' }
        ],
        tasks: [
            {
                type: 'matchHeading',
                title: 'Task 1: 为第1~5段选择正确的小标题',
                questions: [
                    { id: '16', label: 'Paragraph ①:', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-1' },
                    { id: '17', label: 'Paragraph ②:', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-2' },
                    { id: '18', label: 'Paragraph ③:', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-3' },
                    { id: '19', label: 'Paragraph ④:', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-4' },
                    { id: '20', label: 'Paragraph ⑤:', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-5' }
                ],
                optionTexts: {
                    'A': 'The first step to make a career plan',
                    'B': 'The reason for changing a career plan',
                    'C': 'The right time to apply for desired jobs',
                    'D': 'The necessity to get some career advice',
                    'E': 'The importance of having a career plan',
                    'F': 'The abilities to fulfill a career plan'
                }
            },
            {
                type: 'completeSentence',
                title: 'Task 2: 补全句子',
                questions: [
                    { id: '21', label: '21. A career plan can give you ______.', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-6' },
                    { id: '22', label: '22. When you choose a job, you should not focus on ______.', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-7' },
                    { id: '23', label: '23. To gain career guidance, you should try ______.', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-8' },
                    { id: '24', label: '24. To fulfill a career plan, you should ______.', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-9' },
                    { id: '25', label: '25. A job interview can ______.', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-10' }
                ],
                optionTexts: {
                    'A': 'the salary alone',
                    'B': 'to write it well',
                    'C': 'get well prepared',
                    'D': 'to find an adviser',
                    'E': 'offer some useful knowledge',
                    'F': 'a clear future direction'
                }
            }
        ]
    },

    // ========== 23. 2024年10月 ==========
    {
        year: '2024年10月',
        articleTitle: 'Exercise and Dieting',
        paragraphs: [
            { id: 'p1', colorClass: 'para-1', text: 'Becoming more active is the best way of burning off those additional calories (卡路里). You don\'t need to go to the gym to do this. Just increase the amount of walking you do each day or just go for a bike ride. You put on weight if you eat more than you need; this is because you accumulate any energy not used into fat.' },
            { id: 'p2', colorClass: 'para-2', text: 'Every day you should drink about 8 glasses of water. You will need more if the weather is hot or while you are doing physical activity. Try to cut down on those drinks high in sugar.' },
            { id: 'p3', colorClass: 'para-3', text: 'You don\'t need to give up drinking alcohol, but too much drinking can cause harm. Drinking less can help lose pounds. The guideline for women is 3 units per day, and for men, 4 units per day. A good goal for better health is to stretch your drinking over a week and not save it for the weekends. Overdrinking for a long time can also harm the liver.' },
            { id: 'p4', colorClass: 'para-4', text: 'Never skip breakfast, as it provides you with energy to keep you going through the day. Many people miss breakfast thinking it helps them lose extra pounds. But it doesn\'t at all, and even worse, they can lose out on minerals and vitamins. It is clear that eating breakfast can help control your weight.' },
            { id: 'p5', colorClass: 'para-5', text: 'To sum up, if you are thinking about going on a diet, make sure you consider the above guidelines.' }
        ],
        tasks: [
            {
                type: 'matchHeading',
                title: 'Task 1: 为第1~4段选择正确的小标题',
                questions: [
                    { id: '16', label: 'Paragraph ①:', correct: 'D', options: ['A','B','C','D','E'], color: 'q-color-1' },
                    { id: '17', label: 'Paragraph ②:', correct: 'C', options: ['A','B','C','D','E'], color: 'q-color-2' },
                    { id: '18', label: 'Paragraph ③:', correct: 'E', options: ['A','B','C','D','E'], color: 'q-color-3' },
                    { id: '19', label: 'Paragraph ④:', correct: 'B', options: ['A','B','C','D','E'], color: 'q-color-4' },
                    { id: '20', label: 'Paragraph ⑤:', correct: 'A', options: ['A','B','C','D','E'], color: 'q-color-5' }
                ],
                optionTexts: {
                    'A': 'Seeing a doctor',
                    'B': 'Having breakfast',
                    'C': 'Drinking enough water',
                    'D': 'Doing physical exercise',
                    'E': 'Drinking alcohol moderately'
                }
            },
            {
                type: 'completeSentence',
                title: 'Task 2: 补全句子',
                questions: [
                    { id: '21', label: '21. Before losing weight, you\'d better ______.', correct: 'D', options: ['A','B','C','D','E','F','G'], color: 'q-color-6' },
                    { id: '22', label: '22. The unused energy will be accumulated ______.', correct: 'A', options: ['A','B','C','D','E','F','G'], color: 'q-color-7' },
                    { id: '23', label: '23. You should reduce drinks rich ______.', correct: 'B', options: ['A','B','C','D','E','F','G'], color: 'q-color-8' },
                    { id: '24', label: '24. Women are advised to drink ______.', correct: 'E', options: ['A','B','C','D','E','F','G'], color: 'q-color-9' },
                    { id: '25', label: '25. Longtime overdrinking may ______.', correct: 'C', options: ['A','B','C','D','E','F','G'], color: 'q-color-10' }
                ],
                optionTexts: {
                    'A': 'into fat',
                    'B': 'in sugar',
                    'C': 'harm the liver',
                    'D': 'seek advice from a doctor',
                    'E': '3 units of alcohol every day',
                    'F': 'a lack of minerals and vitamins',
                    'G': '4 glasses of water each day'
                }
            }
        ]
    },

    // ========== 24. 2025年4月 ==========
    {
        year: '2025年4月',
        articleTitle: 'The Pony (小马) Express',
        paragraphs: [
            { id: 'p1', colorClass: 'para-1', text: 'In 1848, gold was found in California. Thousands of people rushed there. But the train line to California wasn\'t finished until 1869. It took a long time to ride a horse from California to Missouri. What would you do if you wanted to send a message? Well, you could use the Pony Express.' },
            { id: 'p2', colorClass: 'para-2', text: 'In 1860 and 1861, the Pony Express was the fastest way to get news to and from the West. The road was around 2,000 miles long. It took most people weeks or months to ride that far. The Pony Express could make it in just 10 days. Those speeds were unheard of then. How did they do it? Well, they had a good system.' },
            { id: 'p3', colorClass: 'para-3', text: 'The Pony Express had 184 stations along the road. The stations were about 10 miles apart. This is about how far a horse could run before tired. The rider would switch to a new horse at each station. Every 75-100 miles, the rider would get to a home station, where riders would rest. Before resting, he would give his mail bag to a new rider. The mail never stopped moving, while the horses and riders rested.' },
            { id: 'p4', colorClass: 'para-4', text: 'It was tough to ride for the Pony Express. Each rider had to weigh less than 125 pounds. Speed was the key. Most riders were teenage boys. They rode up to 100 miles a day. The ride could be dangerous. Attacks by local people were common. But in its running time, the Pony Express lost only one mail bag.' },
            { id: 'p5', colorClass: 'para-5', text: 'The Pony Express filled an important role for a time, but it did not last. The Civil War started in 1861. Things got worse when the first telegraph line to California was finished later that year. People could send messages by telegraph instantly. Soon the Pony Express closed. But the story of the brave riders lives on.' }
        ],
        tasks: [
            {
                type: 'matchHeading',
                title: 'Task 1: 为第1~5段选择正确的小标题',
                questions: [
                    { id: '16', label: 'Paragraph ①:', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-1' },
                    { id: '17', label: 'Paragraph ②:', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-2' },
                    { id: '18', label: 'Paragraph ③:', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-3' },
                    { id: '19', label: 'Paragraph ④:', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-4' },
                    { id: '20', label: 'Paragraph ⑤:', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-5' }
                ],
                optionTexts: {
                    'A': 'The end of riders\' business',
                    'B': 'The fastest message service',
                    'C': 'The comfortable home station',
                    'D': 'The effective system to send mail',
                    'E': 'Safe delivery despite the tough ride',
                    'F': 'Need of message exchange in the gold rush'
                }
            },
            {
                type: 'completeSentence',
                title: 'Task 2: 补全句子',
                questions: [
                    { id: '21', label: '21. People rushed to California ______.', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-6' },
                    { id: '22', label: '22. To ride 2,000 miles took the Pony Express ______.', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-7' },
                    { id: '23', label: '23. There were adequate stations to ______.', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-8' },
                    { id: '24', label: '24. Most riders had to ______.', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-9' },
                    { id: '25', label: '25. The telegraph appeared ______.', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-10' }
                ],
                optionTexts: {
                    'A': 'only ten days',
                    'B': 'for a better life',
                    'C': 'a couple of months',
                    'D': 'be young and brave',
                    'E': 'switch horses and riders',
                    'F': 'after the outbreak of the Civil War'
                }
            }
        ]
    },

    // ========== 25. 2025年10月 ==========
    {
        year: '2025年10月',
        articleTitle: 'Benefits of Spending Time with Animals',
        paragraphs: [
            { id: 'p1', colorClass: 'para-1', text: 'A pet treatment can solve all sorts of problems, says animal expert Arden Moore. Spending time around animals, like bird-watching, being accompanied by a therapy dog, or playing with a pet spider, can be good to your well-being. "There\'s something about the animal kingdom that enables us to enjoy life a little better," she says.' },
            { id: 'p2', colorClass: 'para-2', text: 'According to Moore, petting your cat or dog makes the animal happy, and it relaxes you as well. It is especially so when you are under some stress. "Give your dog or cat a head-to-tail rub by running hand over hand through the body," she says. Your touch relaxes the animal. It also releases feel-good hormones in you, and reduces your heart rate.' },
            { id: 'p3', colorClass: 'para-3', text: 'Talking with animals may lower your blood pressure and improve your overall health. Moore suggests engaging animals in "happy talk," or speaking in a cheerful tone. She says, "Happy talk or laughter around animals releases hormones in humans. Then, your blood pressure will be lowered. And animals will feel better too."' },
            { id: 'p4', colorClass: 'para-4', text: 'Eating beside an animal may improve your eating habits. "In nursing homes, if there\'s a fish tank where people are eating, seeing those fish actually motivates some residents to eat," says Moore. The result of recent research supports the view. It shows that the people who ate near their pets improved some of their eating patterns.' },
            { id: 'p5', colorClass: 'para-5', text: 'A good relationship with your animal friends may lead to better relations with humans. According to a study at the University of Michigan School of Nursing, observing animals in nature can teach valuable characteristics like patience, and help restore mental energy. Taking care of an animal can also teach responsibility and stimulate feelings of trust, openness, and companionship.' }
        ],
        tasks: [
            {
                type: 'matchHeading',
                title: 'Task 1: 为第1~5段选择正确的小标题',
                questions: [
                    { id: '16', label: 'Paragraph ①:', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-1' },
                    { id: '17', label: 'Paragraph ②:', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-2' },
                    { id: '18', label: 'Paragraph ③:', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-3' },
                    { id: '19', label: 'Paragraph ④:', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-4' },
                    { id: '20', label: 'Paragraph ⑤:', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-5' }
                ],
                optionTexts: {
                    'A': 'Animals help reduce your stress',
                    'B': 'Animals improve human relationships',
                    'C': 'Animals make your life more enjoyable',
                    'D': 'Animals can change your way of life',
                    'E': 'Animals help improve your eating habits',
                    'F': 'Animals help lower your blood pressure'
                }
            },
            {
                type: 'completeSentence',
                title: 'Task 2: 补全句子',
                questions: [
                    { id: '21', label: '21. Playing with your pet is good ______.', correct: 'C', options: ['A','B','C','D','E'], color: 'q-color-6' },
                    { id: '22', label: '22. When you\'re petting your pet, ______.', correct: 'E', options: ['A','B','C','D','E'], color: 'q-color-7' },
                    { id: '23', label: '23. Your pet will feel happy ______.', correct: 'D', options: ['A','B','C','D','E'], color: 'q-color-8' },
                    { id: '24', label: '24. Eating near your pet, ______.', correct: 'E', options: ['A','B','C','D','E'], color: 'q-color-9' },
                    { id: '25', label: '25. You may develop your patience by watching animals ______.', correct: 'A', options: ['A','B','C','D','E'], color: 'q-color-10' }
                ],
                optionTexts: {
                    'A': 'in nature',
                    'B': 'if you keep a pet',
                    'C': 'to your well-being',
                    'D': 'when you talk with it',
                    'E': 'you\'ll have a better appetite'
                }
            }
        ]
    },

    // ========== 26. 2026年4月 ==========
    {
        year: '2026年4月',
        articleTitle: 'Bottled Water',
        paragraphs: [
            { id: 'p1', colorClass: 'para-1', text: 'Over the last 15 years, more and more people in the US have been drinking bottled water. There is no sign of slowing down. In fact, sales of bottled water are going up faster than any other kind of drink. It is true even in cities where it is safe to drink tap water. This has been a disaster for the environment and for our health.' },
            { id: 'p2', colorClass: 'para-2', text: 'Most bottled water comes from underground water. Much of this underground water could have flowed into rivers and lakes. Using this water can make droughts (干旱) more serious. Many companies use water from mountain glaciers (冰川), but this is not much better. When the glacier melts, the water usually flows to areas like rivers or wetlands. When companies take glacier water, they take it from areas that need it.' },
            { id: 'p3', colorClass: 'para-3', text: 'It takes about 1.6 liters of water to make one liter of bottled water. This wastes a lot of water. Also transporting the bottled water to stores burns fuel and creates pollution. The problems do not stop when the water reaches people who buy it. Water bottles are made from plastic which does not break down. Although it can be recycled, people usually do not put it in the recycle can.' },
            { id: 'p4', colorClass: 'para-4', text: 'Some may say that bottled water is safer and healthier than tap water. But that is not true. Sometimes chemicals or bacteria get into bottled water, and companies have to destroy them. Actually, tap water is often healthier than bottled water. Bottled water may lack fluoride (氟化物) which helps protect our teeth. Fluoride is found in tiny amounts in tap water.' },
            { id: 'p5', colorClass: 'para-5', text: 'Obviously, more people need to know that tap water is safer and healthier. Unfortunately, tap water cannot advertise itself. When a product that is cheaper and better does not win, that is bad news. When the product is water, we all lose.' }
        ],
        tasks: [
            {
                type: 'matchHeading',
                title: 'Task 1: 为第1~5段选择正确的小标题',
                questions: [
                    { id: '16', label: 'Paragraph ①:', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-1' },
                    { id: '17', label: 'Paragraph ②:', correct: 'A', options: ['A','B','C','D','E','F'], color: 'q-color-2' },
                    { id: '18', label: 'Paragraph ③:', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-3' },
                    { id: '19', label: 'Paragraph ④:', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-4' },
                    { id: '20', label: 'Paragraph ⑤:', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-5' }
                ],
                optionTexts: {
                    'A': 'Making droughts worse',
                    'B': 'Harmful elements in bottled water',
                    'C': 'Need for a better image of tap water',
                    'D': 'Growing attention to tap water',
                    'E': 'Causing waste and pollution',
                    'F': 'Increasing sales of bottled water'
                }
            },
            {
                type: 'completeSentence',
                title: 'Task 2: 补全句子',
                questions: [
                    { id: '21', label: '21. City people prefer bottled water ______.', correct: 'F', options: ['A','B','C','D','E','F'], color: 'q-color-6' },
                    { id: '22', label: '22. Taking water from glaciers helps little ______.', correct: 'E', options: ['A','B','C','D','E','F'], color: 'q-color-7' },
                    { id: '23', label: '23. Transportation of bottled water ______.', correct: 'C', options: ['A','B','C','D','E','F'], color: 'q-color-8' },
                    { id: '24', label: '24. Compared with bottled water, tap water ______.', correct: 'D', options: ['A','B','C','D','E','F'], color: 'q-color-9' },
                    { id: '25', label: '25. People need to change their attitude ______.', correct: 'B', options: ['A','B','C','D','E','F'], color: 'q-color-10' }
                ],
                optionTexts: {
                    'A': 'in tiny amounts',
                    'B': 'towards tap water',
                    'C': 'does harm to the environment',
                    'D': 'brings more health benefits',
                    'E': 'with the problem of drought',
                    'F': 'despite the safety of tap water'
                }
            }
        ]
    }
];

// ========== 答案详解 ==========
const explanations = {
    '2013年10月': {
        '16': '第①段开头说“Living in a dormitory at college can be a great experience”，但紧接着说如果不采取措施，宿舍生活可能变得痛苦，最后提到选择住宿舍有更好机会过丰富多彩的生活。该段主要讲住宿舍是大学生活的新开始，对应选项A（start a new life）。',
        '17': '第②段提到“you may have to give up much of your personal space. You will share a room with someone else.”说明住宿舍意味着失去很多私人生活，对应选项B（losing much of your private life）。',
        '18': '第③段说“You will have to learn some important life skills. For example, you will learn how to get along with people.”即学习如何与人相处，对应选项F（good relations with others）。',
        '19': '第④段说“you can enjoy a wide range of campus services”，即享受很多校园服务，对应选项D（many of the campus services）。',
        '20': '第⑤段说“living on campus means you don\'t have to travel to and from school in rush hours”，即省去往返学校的麻烦，对应选项E（traveling from home to school）。',
        '21': '第①段说“if you take no steps to make this experience positive, dormitory life can become a misery”，即如果不努力，宿舍生活可能变得痛苦，对应选项C（have an unhappy dormitory life）。',
        '22': '第②段说“you may have to give up much of your personal space”，说明宿舍生活意味着失去很多私人生活，对应选项B（losing much of your private life）。',
        '23': '第③段说“You will have to learn some important life skills. For example, you will learn how to get along with people.”即需要掌握与人相处的技能，对应选项F（good relations with others）。',
        '24': '第④段说“you can enjoy a wide range of campus services, which are not available to those who live off campus”，即住在校外的人不能使用这些校园服务，对应选项D（many of the campus services）。',
        '25': '第⑤段说“living on campus means you don\'t have to travel to and from school in rush hours”，即省去往返学校的麻烦，对应选项E（traveling from home to school）。'
    },
    '2014年4月': {
        '16': '第①段说“When we think of muscles, we might often picture a bodybuilder with big arm and leg muscles.”即人们通常对肌肉的看法，对应选项C（How people think of muscles）。',
        '17': '第②段列举了写字、心跳、吃饭、睁眼闭眼等动作，说明我们什么时候使用肌肉，对应选项B（When we use our muscles）。',
        '18': '第③段说“A muscle is made of tiny fibers.”即肌肉由纤维组成，对应选项A（What a muscle consists of）。',
        '19': '第④段说“There are three different types of muscles in our body.”即我们有哪些种类的肌肉，对应选项D（What kind of muscles we have）。',
        '20': '第⑤段说“try smiling instead of frowning. Remember that it takes 17 muscles in our face to smile, but 43 muscles to frown!”即为什么应该微笑而不是皱眉，对应选项F（Why we should smile rather than frown）。',
        '21': '第①段说“our muscles do not have to look like that to work well”，即肌肉不必很大就能正常工作，对应选项D（to function properly）。',
        '22': '第②段说“every time we move, we use some of the muscles in our body”，即每当我们做某事时，肌肉都在工作，对应选项F（whenever we do something）。',
        '23': '第③段说“Thousands of these fibers are packed together to make a single muscle.”即一块肌肉包含许多纤维，对应选项B（a lot of fibers）。',
        '24': '第④段说“Smooth muscles... help us to absorb our food”，即平滑肌帮助我们消化食物，对应选项C（to digest food）。',
        '25': '第⑤段说微笑需要17块肌肉，皱眉需要43块，即微笑比皱眉消耗更少能量，对应选项A（frowning）。'
    },
    '2014年10月': {
        '16': '第①段通过举例说明什么是剽窃，并给出定义“Plagiarism is when you use someone else\'s words or ideas and pretend that they are yours.”对应选项C（The definition of plagiarism）。',
        '17': '第②段说“it\'s not always easy to tell what is plagiarism and what is not. Sometimes, it\'s accidental.”即有时是无意的剽窃，对应选项D（Accidental plagiarism）。',
        '18': '第③段说“it\'s sometimes done on purpose. That\'s just being lazy.”即故意剽窃，对应选项A（Purposeful plagiarism）。',
        '19': '第④段说“If you\'re caught, your graduation will be delayed or worse.”即剽窃的代价，对应选项B（The cost of plagiarism）。',
        '20': '第⑤段说“To be on the safe side, always make it clear where the information comes from.”即如何避免剽窃，对应选项F（Avoiding plagiarism）。',
        '21': '第①段定义剽窃为“use someone else\'s words or ideas and pretend that they are yours”，即把别人的想法当成自己的，对应选项D（take others\' ideas as yours）。',
        '22': '第②段说“it\'s not always easy to tell what is plagiarism and what is not”，即有时很难判断是否剽窃，对应选项F（you plagiarize or not）。',
        '23': '第③段说“By copying whole paragraphs from different places, you don\'t have to spend the time thinking... Cut, paste, and you\'re done.”即复制整段可以节省很多时间，对应选项E（save you much time）。',
        '24': '第④段说“If you\'re caught, your graduation will be delayed or worse.”即一旦因剽窃被抓，你会受到惩罚，对应选项A（you will be punished）。',
        '25': '第⑤段说“maybe someday someone will quote you in a report”，即人们可能会在报告中引用你，对应选项C（quote you in their reports）。'
    },
    '2015年4月': {
        '16': '第①段讲述John Roebling去世，儿子Washington接手工程并在1872年受伤，对应选项B（What happened to John and Washington?）。',
        '17': '第②段讲述Emily如何学习桥梁建造，对应选项A（How did Emily pick up bridge building?）。',
        '18': '第③段描述Emily在现场指导工人、成为总工程师，对应选项D（What role did Emily play in building the bridge?）。',
        '19': '第④段讲述Emily为丈夫辩护而发表演讲，对应选项F（Why did Emily give a speech?）。',
        '20': '第⑤段说建造桥梁耗时14年，对应选项E（How long did it take to build the bridge?）。',
        '21': '第①段说“The job fell to his son Washington”，即父亲去世后Washington接替了工作，对应选项C（Washington took over the job）。',
        '22': '第②段说“He sent his son around the world to study bridges. Emily went along with her husband”，即在Emily的陪伴下，Washington去世界各地学习桥梁，对应选项A（Washington went to study bridges）。',
        '23': '第③段说“as time went on, her role started to change... she became the chief engineer”，即随着时间的推移，Emily开始发挥更大的作用，对应选项E（Emily began to play a bigger role）。',
        '24': '第④段说“She gave a speech in defense of her husband”，即Emily发表演讲是为了捍卫她的丈夫，对应选项F（to defend her husband）。',
        '25': '第⑤段说“It took up 14 years to build the bridge”，即建造这座桥花了十四年，对应选项D（to build the bridge）。'
    },
    '2015年10月': {
        '16': '第①段解释IQ stands for "intelligence quotient"并说明其作用，对应选项B（Definition of IQ）。',
        '17': '第②段列举了spatial intelligence、musical intelligence等，说明智力的种类，对应选项A（Kinds of intelligence）。',
        '18': '第③段解释EQ的定义“the ability to understand, use, and manage our emotions”，对应选项D（Definition of EQ）。',
        '19': '第④段说“EQ is more important than IQ when it comes to doing well in school or being successful at work”，即EQ的重要性，对应选项C（Importance of EQ）。',
        '20': '第⑤段说“Everyone can get better if they know what to do... Being able to notice and label everyday feelings is the most basic EQ skill”，即提高EQ技能的方法，对应选项F（Ways to improve EQ skills）。',
        '21': '第①段说“people mention ‘IQ’ when talking about how smart someone is”，即人们常用IQ来谈论一个人有多聪明，对应选项C（talk about how smart a person is）。',
        '22': '第③段说EQ helps us “deal with difficult situations”，即面对困难需要高EQ，对应选项E（a high EQ）。',
        '23': '第④段说EQ helps us “become successful in our lives... being successful at work”，即高EQ帮助我们在工作中成功，对应选项A（in our work）。',
        '24': '第④段说“Understanding and getting along with people help us become successful”，即能与人相处是高EQ的标志，对应选项D（a sign of high EQ）。',
        '25': '第⑤段说“Being able to notice and label everyday feelings is the most basic EQ skill”，即最基本的EQ技能是识别日常情绪，对应选项B（recognize everyday feelings）。'
    },
    '2016年4月': {
        '16': '第①段说“Forgiving someone does not mean releasing them from an earlier guilt.”即宽恕不是免除他人的罪责，对应选项C（Forgiving is not to free someone from blame）。',
        '17': '第②段说“Recognize that forgiveness is not denial.”即宽恕不是否认发生过的事，对应选项B（Forgiving is not to deny what happened）。',
        '18': '第③段说“Work on forgiveness at a time when you are emotionally healthy and physically safe.”即宽恕应在安全的时候进行，对应选项A（Forgiving should be at a safe time）。',
        '19': '第④段说“Even if they never apologize for what happened... make up your mind to forgive”，即宽恕可以在没有道歉的情况下发生，对应选项D（Forgiving can happen without an apology）。',
        '20': '第④段说“make up your mind to forgive, forget, and eventually let go”，即宽恕可以让我们远离过去的伤害，对应选项E（Forgiving can lead us away from the past hurt）。',
        '21': '第①段说“What if the person who wronged you is not living? What if the person is someone who made you extremely embarrassed during school 20 or 30 years ago?”即你可能宽恕很久以前伤害过你的人，对应选项D（who wronged you long time ago）。',
        '22': '第②段说“There is no timeline on forgiveness.”即宽恕没有固定的时间表，对应选项F（who only forgive those showing regret）。',
        '23': '第③段说“not everyone who forgives reconciles with the person who caused the pain... it may also mean that the person... can no longer play an active role in your life.”即即使你宽恕了某人，也可能不会成为朋友，对应选项A（you may not become friends）。',
        '24': '第③段说“If a person or a situation is not safe, it may be best not to reconcile the relationship now.”即不要急于宽恕那些对你有危险的人，对应选项C（who are still dangerous to you）。',
        '25': '第④段说“Apologies should not be asking for forgiveness. Apologies should be offered as an effort of true regret.”即有些人道歉只是为了被宽恕，对应选项G（for being forgiven）。'
    },
    '2016年10月': {
        '16': '第①段说“You can\'t go from a nervous speaker to a star speaker overnight... Give yourself time... Start with smaller groups... Keep on practicing”，即要逐步提高，对应选项E（Improve gradually）。',
        '17': '第②段说“Be familiar with your speech materials... Know your key talking points”，即要熟悉材料，对应选项B（Know your materials）。',
        '18': '第③段说“If you\'re excited and enthusiastic, your audience will be, too.”即要热情，对应选项A（Be enthusiastic）。',
        '19': '第④段说“Find friendly, interested faces in the audience and speak to them. Look into their eyes.”即要进行眼神交流，对应选项C（Make eye contact）。',
        '20': '第⑤段说“Looking great doesn\'t mean wearing new clothes. It means wearing clothes and shoes you feel comfortable and appropriate to the setting.”即要穿着得体，对应选项F（Dress appropriately）。',
        '21': '第①段说“get as much feedback as you can. Keep on practicing and developing your skills”，即反馈帮助演讲者提高技能，对应选项D（improve their speaking skills）。',
        '22': '第②段说“memorizing your speech, which can lack enthusiasm and naturalness”，即背诵材料可能导致缺乏热情，对应选项A（lack of enthusiasm）。',
        '23': '第③段说“Positive energy can be passed... Use hand gestures... smile”，即手势和微笑有助于创造积极氛围，对应选项C（a positive atmosphere）。',
        '24': '第④段说“It helps prevent you from staring off into the distance or reading from notes.”即看着观众的眼睛有助于防止读笔记，对应选项E（stop you from reading your notes）。',
        '25': '第⑤段说“When you look great, you feel great. That makes you confident.”即穿着得体可以让你看起来很棒，对应选项B（make you look great）。'
    },
    '2017年4月': {
        '16': '第①段说“Many countries now still base their laws and ethics on the teachings and doings of ancient Greeks... These may seem simple values, but they do effectively shape ancient Greece”，即古希腊价值观的影响，对应选项A（Impact of ancient Greek values）。',
        '17': '第②段说“men were required to go to school and learn... Boys were taught at home until they were 6 years old and then sent off to school”，即古希腊的教育，对应选项D（Education in ancient Greece）。',
        '18': '第③段说“Glory for young men in ancient Greece was the same as fame to young people today.”即古希腊人的荣誉感，对应选项C（Sense of honor of ancient Greeks）。',
        '19': '第④段说“Helping your fellow man was an important aspect of life... Ancient Greeks were kind and generous.”即古希腊人的友善，对应选项E（Friendliness of ancient Greeks）。',
        '20': '第⑤段说“Loyalty is perhaps the most important value of ancient Greek civilization.”即古希腊人最重要的价值观，对应选项B（Top value of ancient Greeks）。',
        '21': '第①段说“Many countries now still base their laws and ethics on the teachings and doings of ancient Greeks”，即古希腊价值观在许多国家被奉行，对应选项E（in many countries）。',
        '22': '第②段说“men were required to go to school and learn”，即古希腊年轻男子被要求上学，对应选项D（to go to school）。',
        '23': '第③段说“Stories of war glories and battles were handed down to young men so that they desired to make their names”，即年轻希腊人渴望获得荣誉，对应选项F（to achieve honor）。',
        '24': '第④段说“They believed that helping others was their brotherly duty.”即古希腊人把帮助他人视为义务，对应选项C（to help others）。',
        '25': '第⑤段说“It was stressed in everything the Greeks did.”即古希腊人在所做的一切中都强调忠诚，对应选项A（in whatever they did）。'
    },
    '2017年10月': {
        '16': '第①段说“Deborah Sampson was born in 1760. There were many children in her family and they were poor... her father left... her mother could not care for her children”，即Deborah的家庭背景，对应选项F（Deborah\'s family background）。',
        '17': '第②段说“Young Deborah... had to work for a farmer. On the farm, she learned to ride and hunt... she learned what they learned... When she was 18, Deborah became a teacher.”即Deborah在农场的生活，对应选项B（Deborah\'s life on the farm）。',
        '18': '第③段说“She made herself a man\'s suit and secretly practiced walking and talking like a man. Finally, she joined the army using the name Robert.”即Deborah参军，对应选项E（Deborah\'s joining the army）。',
        '19': '第④段说“Robert was a brave soldier. He fought with courage in every battle... Once he caught a fever and had to go to the hospital. There a doctor found out that Robert was actually a woman.”即Deborah的军旅生活，对应选项D（Deborah\'s military life）。',
        '20': '第⑤段说“Later, Deborah married a farmer and had three children. She taught in school and gave lectures about her time in the army till retirement.”即Deborah离开军队后的生活，对应选项C（Deborah\'s life after leaving the army）。',
        '21': '第①段说“Being in poor health, her mother could not care for her children. So she sent them to live with different relatives”，即Deborah被送到别人家是因为家庭无法抚养她，对应选项D（her family couldn\'t support her）。',
        '22': '第②段说“In the evening, she had the boys talk about their lessons with her. By this she learned what they learned. She also borrowed their school books to read every night.”即Deborah通过在农场自学成为教师，对应选项A（teaching herself on the farm）。',
        '23': '第③段说“She made herself a man\'s suit and secretly practiced walking and talking like a man. Finally, she joined the army”，即Deborah通过打扮和行为像男人一样参军，对应选项E（dressing and behaving like a man）。',
        '24': '第④段说“There a doctor found out that Robert was actually a woman. Deborah then had to leave the army”，即Deborah在医生发现她的秘密后离开军队，对应选项C（a doctor discovered her secret）。',
        '25': '第⑤段说“She was a true American hero.”结合全文她女扮男装参军的勇气，对应选项B（for her unusual courage）。'
    },
    '2018年4月': {
        '16': '第①段说“Learning to cooperate with others towards a common goal in sports is what builds character”，即团队合作，对应选项C（Team cooperation）。',
        '17': '第②段说“Working towards a common goal will keep the team firmly together... personal differences are often set aside for the common good”，即共同目标，对应选项A（The common goal）。',
        '18': '第③段说“team sports offer a way for them to get out and meet with friends... build friendships that last a lifetime”，即锻炼和友谊，对应选项D（Exercising and friendship）。',
        '19': '第④段说“winning is not everything in sports and healthy competition can be good for people”，即健康竞争，对应选项B（Healthy competition）。',
        '20': '第⑤段说“Team work in sports can help young people develop stronger communication skills.”即培养沟通技能，对应选项F（Building communication skills）。',
        '21': '第①段说“builds character, friendship and important life skills”，即合作有助于塑造品格，对应选项B（character）。',
        '22': '第②段说“personal differences are often set aside for the common good of the team”，即当团队决定赢得赛季时，要搁置个人差异，对应选项E（your personal differences）。',
        '23': '第③段说“Team work teaches people how to help each other and encourage each other.”即孩子们学会互相帮助，对应选项C（help each other）。',
        '24': '第④段说“Working towards a goal can teach people the value of hard work, commitment and devotion.”即人们学到努力和奉献的价值，对应选项F（hard work and devotion）。',
        '25': '第③段说“can build friendships that last a lifetime”，即在团队运动中建立持久友谊，对应选项D（in team sports）。'
    },
    '2018年10月': {
        '16': '第①段说“Aloha is a word in the Hawaiian language meaning love and peace. It is often used as a way to say ‘hello’ or ‘goodbye.’”即Aloha的含义，对应选项E（Meaning of Aloha）。',
        '17': '第②段说“Hawaii is a U.S. state made up of a group of islands... eight large islands and over 100 other smaller islands... formed by volcanoes”，即地理特征，对应选项F（Geographic features）。',
        '18': '第③段说“Hawaii has a tropical climate. It is warm, but usually not hot, all year long.”即温和的气候，对应选项A（Mild climate）。',
        '19': '第④段说“Once called the Sandwich Islands by Europeans... Captain Cook... in 1778... independent country before 1893... admitted into the Union in 1959”，即悠久的历史，对应选项D（Long history）。',
        '20': '第⑤段说“Today Hawaii is important as a vacation destination. Each year over 6 million people visit Hawaii”，即旅游胜地，对应选项C（Tourist attraction）。',
        '21': '第①段说“It is often used as a way to say ‘hello’ or ‘goodbye.’”即Aloha常被用作问候方式，对应选项E（a way of greeting）。',
        '22': '第②段说“The islands were formed by volcanoes that erupted”，即夏威夷群岛由火山喷发形成，对应选项D（volcanic eruptions）。',
        '23': '第③段说“it may occasionally snow at the top of some of the mountains”，即游客可以在山峰上看到雪，对应选项B（mountain peaks）。',
        '24': '第④段说“It was governed by either a king or a queen.”即夏威夷曾被国王或女王统治，对应选项F（a king or a queen）。',
        '25': '第⑤段说“visit Hawaii to enjoy the beaches, the beautiful ocean, and the historical Hawaiian culture”，即人们去夏威夷是为了它的风景和文化，对应选项C（its scenery and culture）。'
    },
    '2019年4月': {
        '16': '第①段说“Eating meat produces greenhouse gas emissions... Don\'t eat out-of-season farm products... Just look for local and in-season foods.”即少吃肉、多吃应季食物，对应选项F（Eat less meat and more in-season foods）。',
        '17': '第②段说“Spend less time behind the wheel, cycle and walk more... If you have to drive... choose a car that uses comparatively less fuel”，即尽量少开车，对应选项B（Drive less if possible）。',
        '18': '第③段说“Air travel has a big impact on the environment... Consider having a vacation within driving distance. Of course, taking the train is the best choice.”即少坐飞机，对应选项C（Take fewer air trips）。',
        '19': '第④段说“Think about how much ‘stuff’ you own... Getting fewer things and making the ones you own last longer”，即改变购物习惯，对应选项A（Change your shopping habit）。',
        '20': '第⑤段说“Keeping the temperature a little lower in the winter and higher in the summer can make a big difference.”即适度使用空调，对应选项D（Use air-conditioning moderately）。',
        '21': '第①段说“Eating meat produces greenhouse gas emissions”，即吃牛肉会增加温室气体排放，对应选项D（increase greenhouse gas production）。',
        '22': '第②段说“empty your trunk of heavy items”，即建议清除车后备箱的重物，对应选项A（from his car trunk）。',
        '23': '第③段说“taking the train is the best choice”，即最好乘火车度假，对应选项C（for a vacation trip）。',
        '24': '第④段说“Getting fewer things and making the ones you own last longer will reduce energy use.”即少买东西是减少能源使用的一种方式，对应选项E（reduce energy use）。',
        '25': '第⑤段说“Keeping the temperature a little lower... higher... can make a big difference.”即适当控制室温，对应选项B（your room temperature）。'
    },
    '2019年10月': {
        '16': '第①段说“The most important secret to happiness is to be grateful for the good things in your life”，即要感恩，对应选项A（Be grateful）。',
        '17': '第②段说“The next important secret is to develop relationships.”即发展人际关系，对应选项B（Develop relationships）。',
        '18': '第③段说“do not hold a grudge against anyone. Instead, learn to be kind, generous, and forgiving towards others”，即学会宽恕，对应选项C（Learn to forgive）。',
        '19': '第④段说“involve yourself in some creative process, be it dancing, writing or drawing”，即要富有创造力，对应选项D（Be creative）。',
        '20': '第⑤段说“follow a daily regular sleep-wake cycle... Exercise regularly... Ensure you get eight to nine hours of sleep”，即保持健康的生活方式，对应选项E（Keep a healthy lifestyle）。',
        '21': '第①段说“A cheerful character... They spread warmth and sunshine wherever they go.”即开朗的性格让你与众不同，对应选项C（different from others）。',
        '22': '第①段说“be thankful for the loved ones... enjoy the little pleasures of life”，即即使贫穷也能享受生活的乐趣，对应选项B（even if you are poor）。',
        '23': '第②段说“Increasing social contacts helps boost brain power”，即社交可以让你更聪明，对应选项A（more intelligent）。',
        '24': '第③段说“forgiving towards others, even to the person who hurt you”，即即使受伤也要试着原谅，对应选项D（even when you are hurt）。',
        '25': '第④段说“This can bring out the hidden talent in you to achieve magical happiness.”即创造性活动能让你发挥潜力，对应选项E（to develop your potential）。'
    },
    '2020年8月': {
        '16': '第①段说“Volunteers are people who work without being paid... We need volunteers because there are many things that need to be done”，即什么是志愿者，对应选项A（What volunteers are）。',
        '17': '第②段说“Volunteers are motivated by a desire to help others and to make the world a better place... Some volunteers do the kind of work that they are particularly interested in”，即人们为什么做志愿者，对应选项B（Why people volunteer）。',
        '18': '第③段说“Volunteers contribute to society in a number of ways... help preserve the natural environment”，即志愿者如何贡献，对应选项C（How volunteers contribute）。',
        '19': '第④段说“Meals on Wheels is a voluntary organization run by the Red Cross... delivers meals to elderly people”，即志愿工作的一个例子，对应选项D（An example of voluntary work）。',
        '20': '第⑤段说“Volunteer Service Abroad was started in 1962. It sends volunteers to poor countries.”即海外志愿服务，对应选项E（Volunteering abroad）。',
        '21': '第①段说“They do the work because they want to.”即人们做志愿者是因为他们想帮助他人，对应选项A（help others）。',
        '22': '第②段说“Others make use of their professional skills and experience.”即一些志愿者通过利用专业技能帮助他人，对应选项D（using their professional skills）。',
        '23': '第③段说“Some environmental organizations rely solely on voluntary labor.”即一些组织依靠志愿者来保护自然环境，对应选项F（preserve the natural environment）。',
        '24': '第④段说“This enables elderly people to remain in their own houses.”即老年人可以不用离开家就能收到饭菜，对应选项B（leaving their homes）。',
        '25': '第⑤段说“many volunteers say: ‘It was the best two years of my life.’”即从贫困国家返回的志愿者觉得这段经历很有价值，对应选项E（find their experience rewarding）。'
    },
    '2020年10月': {
        '16': '第①段说“But for my science teacher, Mrs. Cook, teaching is not just her job; it\'s who she is. She teaches through her heart.”即教学对Cook老师来说不仅仅是一份工作，对应选项F（Teaching is more than a job for Mrs. Cook）。',
        '17': '第②段说“She has so much enthusiasm in her lessons. She is the one who goes out late at night to buy 10 pounds of sugar for our experiments.”即Cook老师的课准备得很充分，对应选项E（Mrs. Cook\'s lessons are well-prepared）。',
        '18': '第③段说“Mrs. Cook wants all of us to do well in school. She tries to reach each student... She shows special concern to slow students”，即Cook老师关心每一个学生，对应选项C（Mrs. Cook cares about each student）。',
        '19': '第④段说“Mrs. Cook has made this year so much better for us... she is a role model for our whole class.”即Cook老师让学校生活更轻松，对应选项A（Mrs. Cook makes our school life easier）。',
        '20': '第⑤段说“this year, it\'s the science class that I don\'t mind waking up for”，即我现在喜欢科学课了，对应选项B（I enjoy science class now）。',
        '21': '第①段说“Usually when people decide to be teachers, they go to college, get a degree”，即成为学校教师需要大学学位，对应选项E（a college degree）。',
        '22': '第②段说“She is the one who goes out late at night to buy 10 pounds of sugar for our experiments.”即Cook老师经常出去收集教学材料，对应选项F（teaching materials）。',
        '23': '第③段说“She shows special concern to slow students, and often helps them after school.”即Cook老师在放学后给学习慢的学生额外帮助，对应选项C（after school）。',
        '24': '第④段说“she is a role model for our whole class”，即我们全班把Cook老师当作榜样，对应选项D（a role model）。',
        '25': '第⑤段说“I have Mrs. Cook to thank for that”，即我很幸运有Cook老师作为我的老师，对应选项B（my teacher）。'
    },
    '2021年4月': {
        '16': '第①段说“Pampering yourself is always a good start... drink lots of fluids... make yourself some hot food”，即照顾好自己，对应选项A（Taking good care of yourself）。',
        '17': '第②段说“Try to distract yourself from feeling horrible... watch one of your favorite films... put the radio on... reading the book”，即转移对疾病的注意力，对应选项C（Taking your attention away from illness）。',
        '18': '第③段说“Tell your friends and family that you are ill... hearing words of comfort from loved ones”，即告知亲友自己生病了，对应选项E（Informing friends and family of your illness）。',
        '19': '第④段说“make sure you know exactly where the nearest drugstore is... translate a few useful phrases before you start asking for a cure”，即知道在哪里以及如何获得药物，对应选项D（Knowing where and how to get medicine）。',
        '20': '第①段说“Pampering yourself is always a good start.”即照顾好自己，对应选项A（Taking good care of yourself）。',
        '21': '第①段说“Being ill is a horrible thing at the best of times, but what is even worse is when you are ill away from home.”即在外生病是一次可怕的经历，对应选项D（a terrible experience）。',
        '22': '第①段说“it\'s important to get better at your own pace”，即建议按自己的节奏康复，对应选项B（at your own pace）。',
        '23': '第①段说“The key to getting better is to drink lots of fluids. Water and hot drinks such as green tea and soup are usually the best things.”即最好的治疗方法是水和热饮，对应选项C（water and hot drinks）。',
        '24': '第②段说“If you have a headache and all the noise is too much to handle, try reading the book you\'ve always wanted to read”，即如果无法忍受电视的噪音，读你最喜欢的书，对应选项F（read your favorite book）。',
        '25': '第④段说“translate a few useful phrases before you start asking for a cure”，即几个有用的翻译短语帮助你询问药物，对应选项A（ask for medicine）。'
    },
    '2021年10月': {
        '16': '第①段说“More than 145 million Americans take walking as part of their exercise... That\'s 15 million more people walking than last year.”即越来越多的美国人开始散步，对应选项E（More Americans take up walking than before）。',
        '17': '第②段说“Our society has been conditioned to be inactive... We are more likely to be in poor health like overweight”，即现代生活方式对健康有负面影响，对应选项F（Modern lifestyle affects our health negatively）。',
        '18': '第③段说“Walking is the best way to improve our health. Just 30 minutes of regular quick walking can help lose weight... lower the risk of heart disease”，即散步是改善健康的好方法，对应选项D（Walking is a great way for health improvement）。',
        '19': '第④段说“Walking requires only a pair of shoes and suits any schedules... make use of them to take a quick walk”，即散步的优点是简单，对应选项C（The advantage of walking is its simplicity）。',
        '20': '第⑤段说“Small efforts can make a big difference. But the hardest part for us is getting started.”即散步的关键是开始行动，对应选项A（The key to walking is getting started）。',
        '21': '第①段说“most of the walkers are found in big cities like New York”，即散步者大多来自美国的大城市，对应选项D（big cities in America）。',
        '22': '第②段说“The inactive lifestyle has a negative aspect. We are more likely to be in poor health like overweight”，即许多疾病主要是由我们的不活跃引起的，对应选项B（our inactiveness）。',
        '23': '第③段说“Just 30 minutes of regular quick walking can help lose weight... lower the risk of heart disease”，即我们可以通过每天30分钟的快走来保持健康，对应选项E（a daily 30-minute quick walk）。',
        '24': '第④段说“It may be walking downstairs for a direct talk rather than sending an email.”即我们可以下楼快速散步进行面对面交谈，对应选项F（a face-to-face talk）。',
        '25': '第⑤段说“When people get to a comfort level of walking for 10 minutes, they might think about trying 11 minutes.”即10分钟散步后感觉良好时，我们可能想尝试更长时间的散步，对应选项C（we may like to try a longer one）。'
    },
    '2022年4月': {
        '16': '第①段说“children still experience stress. Things like school and their social life can sometimes create pressures”，即孩子有压力，对应选项F（Children have stress）。',
        '17': '第②段说“you can help them develop healthy ways to cope with stress and solve everyday problems”，即帮助孩子应对压力，对应选项A（Help your child deal with stress）。',
        '18': '第③段说“When you notice that something is upsetting your child, you need to tell your child about it... Be sympathetic and show that you care”，即表达关心和关注，对应选项B（Show your concern and care）。',
        '19': '第④段说“ask your child to tell you what\'s wrong. Listen attentively and calmly”，即倾听孩子，对应选项E（Listen to your child）。',
        '20': '第⑤段说“Remember to be patient... you should not try to solve every problem for your child”，即对孩子要有耐心，对应选项C（Be patient with your child）。',
        '21': '第①段说“Things like school and their social life can sometimes create pressures”，即孩子可能在学校和社交生活中遇到压力，对应选项E（from school and their social life）。',
        '22': '第②段说“you can help them develop healthy ways to cope with stress”，即父母可以帮助孩子以健康的方式应对压力，对应选项B（in healthy ways）。',
        '23': '第③段说“When you notice that something is upsetting your child”，即当孩子遇到麻烦时与他/她交谈，对应选项A（in trouble）。',
        '24': '第④段说“Do not blame or criticize your child for what he or she has done.”即不要因孩子所做的事而责备他/她，对应选项D（what he/she has done）。',
        '25': '第⑤段说“try to help your child grow into a good problem-solver”，即父母应该教孩子自己解决问题，对应选项F（to solve problems themselves）。'
    },
    '2022年10月': {
        '16': '第①段说“Take a glass of honey with milk before you set out for your day in the morning, and you are guaranteed enough energy”，即蜂蜜牛奶提供能量，对应选项D（Honey milk for energy）。',
        '17': '第②段说“Milk is known for providing calcium... helps in preventing bone diseases”，即蜂蜜牛奶有助于骨骼更强壮，对应选项C（Honey milk for stronger bones）。',
        '18': '第③段说“a glass of warm milk with honey. It is best known to induce sleep.”即蜂蜜牛奶有助于睡眠，对应选项E（Honey milk for a sound sleep）。',
        '19': '第④段说“help in preventing aging by keeping the skin glowing... keep the body young and flexible”，即蜂蜜牛奶有助于保持年轻光彩，对应选项B（Honey milk for a youthful glow）。',
        '20': '第⑤段说“Both milk and honey are known to ward off harmful bacteria... Cough and cold can be prevented”，即蜂蜜牛奶有抗菌功效，对应选项F（Honey milk for antibacterial benefits）。',
        '21': '第①段说“Milk provides you the proteins required”，第②段说“Milk is known for providing calcium”，即牛奶富含蛋白质和钙，对应选项A（in proteins and calcium）。',
        '22': '第⑤段说“Both milk and honey are known to ward off harmful bacteria”，即牛奶和蜂蜜有助于抵御有害细菌，对应选项D（keep off harmful bacteria）。',
        '23': '第②段说“honey helps in the absorption of calcium”，即蜂蜜有助于牛奶中钙的吸收，对应选项F（of calcium in milk）。',
        '24': '第④段说“These help keep the body young and flexible.”即如果喝蜂蜜牛奶，身体可以轻松弯曲或移动，对应选项E（drink milk with honey）。',
        '25': '第⑤段说“Cough and cold can be prevented by taking this drink regularly.”即定期喝蜂蜜牛奶可以预防咳嗽和感冒，对应选项C（cough and cold）。'
    },
    '2023年4月': {
        '16': '第①段说“I go to some websites, but the main site that I focus on during this time is Nuzzel”，即我访问网站获取信息，对应选项F（I visit websites to get information）。',
        '17': '第②段说“I head to Twitter, my No.1 outlet for communication with the public... responding to people and starting conversations”，即我在网上与他人交流，对应选项D（I communicate with others online）。',
        '18': '第③段说“After all this comes my workout with my trainer. I usually work out for about 45 minutes.”即我做晨练，对应选项A（I do some morning exercise）。',
        '19': '第④段说“I head back home to get my children ready for school. I say bye to them and give them each a kiss”，即我送孩子上学，对应选项C（I prepare my kids for school）。',
        '20': '第⑤段说“I call my mom, dad or sister.”即我给父母或姐妹打电话，对应选项B（I phone my parents or sister）。',
        '21': '第①段说“Nuzzel, a collector of headlines and links. I recommend everyone look into it if they feel they don\'t have time to properly focus on every website individually.”即Nuzzel帮助我高效上网，对应选项F（to surf the Internet efficiently）。',
        '22': '第②段说“Twitter is becoming a listening platform... I spend a great amount of my morning responding to people”，即在Twitter上我能倾听他人，对应选项A（to listen to others）。',
        '23': '第③段说“The specific workout routine varies depending on the day of the week, what I ate, and how much I\'ve been traveling.”即有几个因素影响我的锻炼计划，对应选项D（affect my workout routine）。',
        '24': '第④段说“I say bye to them and give them each a kiss before they leave.”即孩子们上学前，我和他们吻别，对应选项C（kiss them goodbye）。',
        '25': '第⑤段说“I talk to them just to learn what they\'re up to.”即我打电话给父母是为了了解他们在做什么，对应选项E（to learn how they are doing）。'
    },
    '2023年10月': {
        '16': '第①段说“People\'s faces light up when I say I taste chocolate for a living, but it\'s not always delicious. I also have to taste bad chocolate.”即品尝巧克力并不像你想象的那么甜蜜，对应选项D（Tasting chocolate is not as sweet as you think）。',
        '17': '第②段说“Between samples, I wait 30 seconds to let my senses rest, and I chew half an unsalted biscuit and drink plain warm water.”即我如何保持良好的味觉，对应选项A（How I keep a good sense of taste）。',
        '18': '第③段说“First I smell the chocolate and record it. I also listen... Then I put a tiny piece in my mouth”，即品尝巧克力需要技巧，对应选项C（Tasting chocolate requires skills）。',
        '19': '第④段说“I love chocolate... Before I started tasting chocolate professionally, I ate a lot. But now I don\'t eat so much.”即我仍然是一个巧克力爱好者，对应选项F（I\'m still a chocolate lover）。',
        '20': '第⑤段说“To retrain your taste buds to enjoy better quality chocolate... Notice its color, smell and taste. Then you\'ll know good quality.”即你可以像专业人士一样品尝巧克力，对应选项B（You can taste chocolate like a professional）。',
        '21': '第①段说“Sometimes the room has red lighting. So I can evaluate chocolate only by taste, not appearance.”即红光被用来掩盖巧克力的外观，对应选项F（the appearance of chocolate）。',
        '22': '第②段说“Between samples, I wait 30 seconds to let my senses rest”，即每品尝一个样本后让感官休息，对应选项D（after I taste each sample）。',
        '23': '第③段说“I also listen: Old chocolate doesn\'t make a clear and sharp sound when broken.”即我通过听来判断样本是旧还是新鲜，对应选项A（is old or fresh）。',
        '24': '第④段说“Before I started tasting chocolate professionally, I ate a lot.”即在我成为品尝师之前吃了很多巧克力，对应选项E（before I became a taster）。',
        '25': '第⑤段说“try simple kinds that aren\'t filled with ingredients like nuts”，即像坚果这样的配料可能会影响你的品尝，对应选项C（your tasting）。'
    },
    '2024年4月': {
        '16': '第①段说“More and more people choose to make a five-year career plan... the plan can help them to learn where they would like to go in the future.”即拥有职业规划的重要性，对应选项E（The importance of having a career plan）。',
        '17': '第②段说“The initial step is to think about an end goal.”即制定职业规划的第一步，对应选项A（The first step to make a career plan）。',
        '18': '第③段说“The next step is to get an adviser... an adviser can give you sound career advice.”即获得职业建议的必要性，对应选项D（The necessity to get some career advice）。',
        '19': '第④段说“you will need to think about the abilities that you will need to fulfill your career plan”，即实现职业规划所需的能力，对应选项F（The abilities to fulfill a career plan）。',
        '20': '第⑤段说“Finally, you will need to identify the jobs that you would like to take... apply for them.”即申请理想工作的正确时机，对应选项C（The right time to apply for desired jobs）。',
        '21': '第①段说“the plan can help them to learn where they would like to go in the future”，即职业规划可以给你一个清晰的未来方向，对应选项F（a clear future direction）。',
        '22': '第②段说“make sure that you do not choose a job purely based on its salary”，即选择工作时不应只关注薪水，对应选项A（the salary alone）。',
        '23': '第③段说“The next step is to get an adviser.”即为了获得职业指导，你应该找一个顾问，对应选项D（to find an adviser）。',
        '24': '第④段说“Assess your current work experience and past education; figure out any specific skills... identify any gaps”，即为了实现职业规划，你应该做好充分准备，对应选项C（get well prepared）。',
        '25': '第⑤段说“Even if you fail to get one, you will gain some invaluable knowledge from the interview.”即求职面试可以提供一些有用的知识，对应选项E（offer some useful knowledge）。'
    },
    '2024年10月': {
        '16': '第①段说“Becoming more active is the best way of burning off those additional calories... increase the amount of walking... go for a bike ride”，即进行体育锻炼，对应选项D（Doing physical exercise）。',
        '17': '第②段说“Every day you should drink about 8 glasses of water.”即喝足够的水，对应选项C（Drinking enough water）。',
        '18': '第③段说“You don\'t need to give up drinking alcohol, but too much drinking can cause harm. Drinking less can help lose pounds.”即适度饮酒，对应选项E（Drinking alcohol moderately）。',
        '19': '第④段说“Never skip breakfast, as it provides you with energy to keep you going through the day.”即吃早餐，对应选项B（Having breakfast）。',
        '20': '第⑤段说“To sum up, if you are thinking about going on a diet, make sure you consider the above guidelines.”但此处对应第①段的“If you\'re worried about how heavy you are, ask the doctor for advice”，即看医生，对应选项A（Seeing a doctor）。',
        '21': '开头段说“If you\'re worried about how heavy you are, ask the doctor for advice.”即在减肥前，你最好咨询医生，对应选项D（seek advice from a doctor）。',
        '22': '第①段说“you accumulate any energy not used into fat”，即未使用的能量会积累成脂肪，对应选项A（into fat）。',
        '23': '第②段说“Try to cut down on those drinks high in sugar.”即你应该减少富含糖的饮料，对应选项B（in sugar）。',
        '24': '第③段说“The guideline for women is 3 units per day”，即建议女性每天喝3个单位的酒，对应选项E（3 units of alcohol every day）。',
        '25': '第③段说“Overdrinking for a long time can also harm the liver.”即长期过量饮酒可能损害肝脏，对应选项C（harm the liver）。'
    },
    '2025年4月': {
        '16': '第①段说“In 1848, gold was found in California... What would you do if you wanted to send a message? Well, you could use the Pony Express.”即淘金热中信息交流的需求，对应选项F（Need of message exchange in the gold rush）。',
        '17': '第②段说“the Pony Express was the fastest way to get news to and from the West... could make it in just 10 days”，即最快的消息服务，对应选项B（The fastest message service）。',
        '18': '第③段说“The Pony Express had 184 stations... The rider would switch to a new horse at each station... The mail never stopped moving”，即有效的邮件传递系统，对应选项D（The effective system to send mail）。',
        '19': '第④段说“It was tough to ride for the Pony Express... The ride could be dangerous... But in its running time, the Pony Express lost only one mail bag.”即尽管旅途艰难但安全送达，对应选项E（Safe delivery despite the tough ride）。',
        '20': '第⑤段说“The Pony Express filled an important role for a time, but it did not last... Soon the Pony Express closed.”即骑手业务的终结，对应选项A（The end of riders\' business）。',
        '21': '第①段说“Thousands of people rushed there.”即人们涌向加利福尼亚是为了更好的生活（淘金），对应选项B（for a better life）。',
        '22': '第②段说“The Pony Express could make it in just 10 days.”即骑2000英里只需10天，对应选项A（only ten days）。',
        '23': '第③段说“The rider would switch to a new horse at each station... he would give his mail bag to a new rider”，即有足够的驿站来换马和换人，对应选项E（switch horses and riders）。',
        '24': '第④段说“Each rider had to weigh less than 125 pounds... Most riders were teenage boys.”即大多数骑手必须年轻勇敢，对应选项D（be young and brave）。',
        '25': '第⑤段说“The Civil War started in 1861... the first telegraph line to California was finished later that year.”即电报在内战爆发后出现，对应选项F（after the outbreak of the Civil War）。'
    },
    '2025年10月': {
        '16': '第①段说“Spending time around animals... can be good to your well-being... enables us to enjoy life a little better”，即动物让你的生活更愉快，对应选项C（Animals make your life more enjoyable）。',
        '17': '第②段说“petting your cat or dog makes the animal happy, and it relaxes you as well. It is especially so when you are under some stress.”即动物帮助减轻压力，对应选项A（Animals help reduce your stress）。',
        '18': '第③段说“Talking with animals may lower your blood pressure and improve your overall health.”即动物帮助降低血压，对应选项F（Animals help lower your blood pressure）。',
        '19': '第④段说“Eating beside an animal may improve your eating habits.”即动物帮助改善饮食习惯，对应选项E（Animals help improve your eating habits）。',
        '20': '第⑤段说“A good relationship with your animal friends may lead to better relations with humans.”即动物改善人际关系，对应选项B（Animals improve human relationships）。',
        '21': '第①段说“Spending time around animals... can be good to your well-being”，即和宠物玩耍对你的健康有益，对应选项C（to your well-being）。',
        '22': '第②段说“Your touch relaxes the animal. It also releases feel-good hormones in you”，即当你抚摸宠物时，它会感到快乐，对应选项E（you\'ll have a better appetite）。',
        '23': '第③段说“Happy talk or laughter around animals releases hormones in humans... And animals will feel better too.”即当你和宠物说话时它会感到快乐，对应选项D（when you talk with it）。',
        '24': '第④段说“the people who ate near their pets improved some of their eating patterns”，即在宠物附近吃饭，你会有更好的食欲，对应选项E（you\'ll have a better appetite）。',
        '25': '第⑤段说“observing animals in nature can teach valuable characteristics like patience”，即通过观察自然界中的动物可以培养耐心，对应选项A（in nature）。'
    },
    '2026年4月': {
        '16': '第①段说“sales of bottled water are going up faster than any other kind of drink... This has been a disaster for the environment and for our health.”即瓶装水销量增长，对应选项F（Increasing sales of bottled water）。',
        '17': '第②段说“Using this water can make droughts more serious... they take it from areas that need it.”即使干旱更严重，对应选项A（Making droughts worse）。',
        '18': '第③段说“It takes about 1.6 liters of water to make one liter of bottled water. This wastes a lot of water... transporting the bottled water... burns fuel and creates pollution.”即造成浪费和污染，对应选项E（Causing waste and pollution）。',
        '19': '第④段说“Sometimes chemicals or bacteria get into bottled water... Bottled water may lack fluoride”，即瓶装水中的有害元素，对应选项B（Harmful elements in bottled water）。',
        '20': '第⑤段说“more people need to know that tap water is safer and healthier. Unfortunately, tap water cannot advertise itself.”即需要改善自来水的形象，对应选项C（Need for a better image of tap water）。',
        '21': '第①段说“It is true even in cities where it is safe to drink tap water.”即城市居民喜欢瓶装水，尽管自来水是安全的，对应选项F（despite the safety of tap water）。',
        '22': '第②段说“Using this water can make droughts more serious... this is not much better.”即从冰川取水对解决干旱问题帮助不大，对应选项E（with the problem of drought）。',
        '23': '第③段说“transporting the bottled water to stores burns fuel and creates pollution”，即瓶装水的运输对环境有害，对应选项C（does harm to the environment）。',
        '24': '第④段说“Actually, tap water is often healthier than bottled water. Bottled water may lack fluoride which helps protect our teeth.”即与瓶装水相比，自来水带来更多健康益处，对应选项D（brings more health benefits）。',
        '25': '第⑤段说“more people need to know that tap water is safer and healthier”，即人们需要改变对自来水的态度，对应选项B（towards tap water）。'
    }
};