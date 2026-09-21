const literacyIssues = [
  { title:'Subject-Specific Texts', slug:'subject-specific-texts', type:'disciplinary', x:390, y:255 },
  { title:'Text Scaffolds', slug:'text-scaffolds', type:'disciplinary', x:345, y:365 },
  { title:'Self Feedback', slug:'self-feedback', type:'disciplinary', x:430, y:435 },
  { title:'Teacher Feedback', slug:'teacher-feedback', type:'disciplinary', x:505, y:485 },
  { title:'Academic Register', slug:'academic-register', type:'disciplinary', x:685, y:235 },
  { title:'Sentence Applications', slug:'sentence-applications', type:'disciplinary', x:755, y:315 },
  { title:'Tier 2 & 3 Vocabulary', slug:'tier-2-3-vocabulary', type:'disciplinary', x:815, y:385 },
  { title:'Directive Verbs', slug:'directive-verbs', type:'disciplinary', x:770, y:445 },
  { title:'Exam Literacy', slug:'exam-literacy', type:'disciplinary', x:695, y:495 },

  { title:'Handwriting', slug:'handwriting', type:'foundational', x:180, y:740 },
  { title:'Reading Fluency', slug:'reading-fluency', type:'foundational', x:325, y:770 },
  { title:'Encoding', slug:'encoding', type:'foundational', x:525, y:805 },
  { title:'Grammar', slug:'grammar', type:'foundational', x:590, y:735 },
  { title:'Punctuation', slug:'punctuation', type:'foundational', x:1010, y:740 },
  { title:'Spelling', slug:'spelling', type:'foundational', x:245, y:835 },
  { title:'Sentence Structures', slug:'sentence-structures', type:'foundational', x:405, y:835 },
  { title:'Tier 1 Vocabulary', slug:'tier-1-vocabulary', type:'foundational', x:700, y:785 },
  { title:'Word Classes', slug:'word-classes', type:'foundational', x:845, y:835 },
  { title:'Comprehension', slug:'comprehension', type:'foundational', x:1030, y:835 }
];

const issueContent = {
  'directive-verbs': {
    title: 'Directive Verbs',
    type: 'Disciplinary Literacy',
    intro: 'Students can possess the relevant knowledge yet still underperform because they misinterpret the thinking demanded by the question.',
    problem: 'Directive verbs such as analyse, evaluate, explain and compare signal different forms of disciplinary thinking. When students do not recognise these demands, they may produce a response that is accurate in content but misaligned to the task.',
    indicators: [
      'The student answers the topic rather than the actual question.',
      'Responses describe information when analysis or judgement is required.',
      'Students rely on memorised structures without adapting them to the wording of the task.'
    ],
    research: 'Effective literacy instruction makes hidden disciplinary demands visible. Explicit modelling, worked examples and guided practice help students recognise how the wording of a task shapes the thinking and writing expected of them.',
    strategies: [
      { title:'Question Deconstruction', slug:'question-deconstruction', summary:'Teach students to identify the directive verb, content focus, limits and required form of response before they begin.' },
      { title:'Worked Examples', slug:'worked-examples', summary:'Model how an expert interprets a question and turns that interpretation into a response.' },
      { title:'Sentence Applications', slug:'sentence-applications', summary:'Practise disciplinary thinking through controlled sentence-level tasks before moving to extended responses.' }
    ]
  },
  'tier-2-3-vocabulary': {
    title:'Tier 2 & 3 Vocabulary', type:'Disciplinary Literacy',
    intro:'Students need both high-utility academic vocabulary and precise disciplinary vocabulary to comprehend complex texts, build knowledge and communicate sophisticated understanding.',
    problem:'When Tier 2 academic words or Tier 3 subject-specific terms are unfamiliar, partially understood or used imprecisely, students can struggle to access new content and express relationships between ideas in subject-appropriate language.',
    indicators:['Students substitute vague everyday words for more precise academic or technical terms.','Key terms are copied without clear understanding.','Students struggle to infer meaning when specialised vocabulary appears in complex texts.'],
    research:'Vocabulary growth is strongest when important words are taught explicitly, encountered repeatedly and used meaningfully within disciplinary contexts.',
    strategies:[
      {title:'Vocabulary Criteria',slug:'vocabulary-criteria',summary:'Require students to apply a small set of carefully selected Tier 2 and Tier 3 words in an academic response.'}
    ]
  },
  'comprehension': {
    title:'Comprehension', type:'Foundational Literacy',
    intro:'Students may be able to read the words on a page while still struggling to construct meaning from the text.',
    problem:'Comprehension requires students to connect ideas, activate relevant knowledge, monitor understanding and identify what information matters. These demands increase as texts become denser and more specialised.',
    indicators:['Students can read aloud fluently but cannot explain the main idea.','Students struggle to connect information across paragraphs or representations.','Students continue reading despite obvious gaps in understanding.'],
    research:'Comprehension improves when teachers explicitly model meaning-making processes and combine strategy instruction with strong knowledge-building.',
    strategies:[
      {title:'Think Alouds',slug:'think-alouds',summary:'Make expert comprehension processes visible by verbalising how meaning is built while reading.'},
      {title:'Reciprocal Reading',slug:'reciprocal-reading',summary:'Structure collaborative use of predicting, clarifying, questioning and summarising.'},
      {title:'Knowledge Building',slug:'knowledge-building',summary:'Deliberately develop background knowledge that supports comprehension of increasingly complex texts.'}
    ]
  }
};

const strategyContent = {
  'vocabulary-criteria': {
    title:'Vocabulary Criteria',
    overview:'We often ask students to apply class content by answering questions or constructing written responses. Vocabulary Criteria ensure students use appropriate subject-specific terminology while also developing the more sophisticated academic language needed to communicate their ideas clearly. The strategy is simple: when setting a question or written response, provide students with a short list of Tier 2 and Tier 3 words that they are expected to use accurately in their response.',
    why:'When students repeatedly encounter and use key vocabulary across lessons, and are held accountable for applying it, vocabulary growth improves. Townsend, Brock and Morrison (2018) reported effect sizes of 0.38 for general academic vocabulary and 0.45 for discipline-specific science vocabulary. Students’ average use of general academic words increased from 5.64 to 7.00, while discipline-specific words increased from 0.52 to 1.22.',
    steps:[
      'Identify an academic task where students’ responses would be strengthened by using more precise vocabulary.',
      'Consider what a full-mark response would sound like. Select 2–3 Tier 2 words that you would expect to see used accurately.',
      'Repeat the process for Tier 3 vocabulary, selecting 2–3 key subject-specific terms.',
      'Copy the Vocabulary Criteria template and add your selected words. When setting the task in Canvas, clearly state: “In your response, you must include the vocabulary specified in this criteria.”'
    ],
    video:'Teaching video coming soon.',
    advice:[
      {title:'Consistency',text:'Reuse the same high-value words across lessons and tasks so students retrieve and apply them repeatedly.'},
      {title:'Do not overload',text:'Two to three Tier 2 words and two to three Tier 3 words per response is usually enough. Adjust this according to the mark value and complexity of the task.'},
      {title:'Consider time',text:'If students are expected to use the words accurately, they need time to learn them. Explicitly teach their meanings before requiring them in a response.'},
      {title:'Restrict AI where appropriate',text:'Students can easily ask generative AI to insert a word list into a response. Consider books-only application tasks, in-class writing or other checks that require students to demonstrate genuine understanding.'}
    ],
    across:[
      'English Essay Draft',
      'Business Studies Exit Ticket',
      'Modern History Lightning Writing',
      'Mathematics Practice HSC Question'
    ],
    impact:[
      'Compare students’ use of the specified vocabulary before and after repeated use of Vocabulary Criteria.',
      'Check whether students are using the words accurately rather than simply inserting them into sentences.',
      'Track whether previously taught words reappear independently in later responses.',
      'Sample student work across a class or faculty and look for growth in the precision and range of academic and subject-specific vocabulary.'
    ],
    resources:[
      'Faculty Tier 2 and 3 Word Banks',
      'ChatGPT prompt to identify Tier 2 and Tier 3 words from content',
      'Canvas Pop-Up'
    ],
    reading:[
      {title:'Townsend, Brock & Morrison (2018)',url:'https://www.tandfonline.com/doi/abs/10.1080/09500693.2017.1420267'}
    ],
    tip:'Keep the list small, teach the words explicitly first and reuse them often enough that students begin to retrieve them independently.'
  },
  'question-deconstruction': {
    title:'Question Deconstruction',
    overview:'Question Deconstruction is a short routine that teaches students to identify what a task is asking them to think about and do before they begin writing.',
    why:'It reduces ambiguity, makes assessment language visible and helps students connect their knowledge to the precise demands of the task.',
    steps:['Display a question and model how you identify the directive verb.','Identify the key content or concept that must be addressed.','Mark any limits, conditions or qualifiers in the wording.','State aloud what a successful response would therefore need to do.','Move to guided practice, then independent deconstruction.'],
    tip:'Do not let the routine become mechanical. Ask students to explain why each word in the question changes what a successful response needs to do.'
  },
  'worked-examples': {
    title:'Worked Examples',
    overview:'Worked examples show students both the finished product and the thinking that produced it.',
    why:'They reduce unnecessary cognitive load for novices and make otherwise invisible expert decisions available for students to study.',
    steps:['Select an example closely aligned to the intended learning.','Direct attention to the most important features rather than everything at once.','Explain the decisions that produced those features.','Compare strong and weak examples where useful.','Fade support as students become more independent.'],
    tip:'The value is in the explanation, not simply displaying an exemplar.'
  },
  'sentence-applications': {
    title:'Sentence Applications',
    overview:'Sentence applications give students short, controlled opportunities to practise the language structures that carry disciplinary thinking.',
    why:'Students can focus on one relationship at a time before coordinating multiple ideas in extended writing.',
    steps:['Choose a sentence structure connected to the disciplinary thinking required.','Model one or two examples.','Provide content students already know so attention can remain on the sentence.','Ask students to produce several variations.','Transfer the structure into authentic paragraph or extended-response writing.'],
    tip:'Keep sentence work connected to meaningful subject content rather than teaching grammar in isolation.'
  }
};
