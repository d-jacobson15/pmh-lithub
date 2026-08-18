const literacyIssues = [
  { title:'Subject-Specific Texts', slug:'subject-specific-texts', type:'disciplinary', x:360, y:300 },
  { title:'Text Scaffolds', slug:'text-scaffolds', type:'disciplinary', x:350, y:385 },
  { title:'Self Feedback', slug:'self-feedback', type:'disciplinary', x:380, y:470 },
  { title:'Teacher Feedback', slug:'teacher-feedback', type:'disciplinary', x:425, y:545 },
  { title:'Academic Register', slug:'academic-register', type:'disciplinary', x:770, y:285 },
  { title:'Sentence Applications', slug:'sentence-applications', type:'disciplinary', x:825, y:350 },
  { title:'Subject-Specific Vocabulary', slug:'subject-specific-vocabulary', type:'disciplinary', x:840, y:425 },
  { title:'Directive Verbs', slug:'directive-verbs', type:'disciplinary', x:820, y:505 },
  { title:'Exam Literacy', slug:'exam-literacy', type:'disciplinary', x:760, y:565 },
  { title:'Writing Speed', slug:'writing-speed', type:'foundational', x:275, y:765 },
  { title:'Syntax', slug:'syntax', type:'foundational', x:390, y:815 },
  { title:'Encoding', slug:'encoding', type:'foundational', x:485, y:845 },
  { title:'Grammar', slug:'grammar', type:'foundational', x:555, y:800 },
  { title:'Spelling', slug:'spelling', type:'foundational', x:620, y:860 },
  { title:'Sentence Structures', slug:'sentence-structures', type:'foundational', x:710, y:812 },
  { title:'Word Classes', slug:'word-classes', type:'foundational', x:835, y:770 },
  { title:'Comprehension', slug:'comprehension', type:'foundational', x:925, y:815 },
  { title:'Writing Legibility', slug:'writing-legibility', type:'foundational', x:1010, y:760 }
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
  'subject-specific-vocabulary': {
    title:'Subject-Specific Vocabulary', type:'Disciplinary Literacy',
    intro:'Students need precise disciplinary vocabulary to comprehend texts, build knowledge and communicate sophisticated understanding.',
    problem:'When key vocabulary is unfamiliar, partially understood or used imprecisely, students can struggle to access new content and to express the relationships between ideas in subject-appropriate language.',
    indicators:['Students substitute vague everyday words for technical terms.','Key terms are copied without clear understanding.','Students struggle to infer meaning when specialist vocabulary appears in complex texts.'],
    research:'Vocabulary growth is strongest when words are taught explicitly, encountered repeatedly and used meaningfully within disciplinary contexts.',
    strategies:[
      {title:'Explicit Vocabulary Instruction',slug:'explicit-vocabulary-instruction',summary:'Teach selected terms directly, revisit them and require students to use them in context.'},
      {title:'Frayer Model',slug:'frayer-model',summary:'Develop depth of word knowledge through definitions, characteristics, examples and non-examples.'},
      {title:'Morphology',slug:'morphology',summary:'Teach meaningful word parts so students can analyse and generate unfamiliar academic vocabulary.'}
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
