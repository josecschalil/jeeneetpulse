export const courses = [
  {
    id: 1,
    title: "2025 | Repeaters - JEE Advanced | Offline",
    chapters: 246,
    contents: 1161,
    progress: 7,
  },
  {
    id: 2,
    title: " Neet Package 2025 | Free",
    chapters: 226,
    chapters: 13,
    contents: 1,
    progress: 23,
  },

  {
    id: 3,
    title: " JEE Advance Package 2025 | Free",
    chapters: 226,
    chapters: 13,
    contents: 1,
    progress: 23,
  },

  {
    id: 4,
    title: " JEE Mains Package 2024 | Free",
    chapters: 1,
    contents: 1,
    progress: 0,
  },
];

export const exams = [
  { title: "JEE Adv Mock Test 1 ", date: "2024-12-15" ,time:"65mins",courseId:1},
  { title: "JEE Adv Physics Year 1", date: "2024-12-14",time:"125mins",courseId:1 },
  { title: "JEE AITS Math Test", date: "2024-12-13",time:"65mins",courseId:4 },
  { title: "JEE AITS Physics Year 2 ", date: "2024-12-16",time:"125mins",courseId:4 },
];


export const studymaterials =[

  { title: "JEE Adv Syllabus 2025",  type:"pdf", courseId:1 },
  { title: "JEE Adv Maths Formulas 2025", type:"pdf", courseId:1 },
  { title: "JEE Adv Physics Formulas 2025",  type:"pdf", courseId:1 },

  { title: "JEE Main Syllabus 2025",  type:"pdf", courseId:4 },
  { title: "JEE Main Maths Formulas 2025", type:"pdf", courseId:4 },
  { title: "JEE Main Physics Formulas 2025",  type:"pdf", courseId:4 },

]

export const practiceSet =[

  { title: "Integration Practice Set", questions:"19",  courseId:1 },
  { title: "JEE Adv Maths Practice Set - II", questions:"13",  courseId:1 },
  { title: "JEE Adv Physics - Dual Nature - III", questions:"29",  courseId:1 },

  { title: "Integration Practice Set", questions:"20", courseId:4 },
  { title: "JEE Adv Maths Practice Set - II", questions:"12", courseId:4 },
  { title: "JEE Mains Physics - Dual Nature - III",questions:"28",  courseId:4 },

]



export const subjects = [
  { id: "physics_iit", name: "Physics Adv.", videos:34 , examType: "iit", courseId: 1 ,icon:"🧲" },
  { id: "chemistry_iit", name: "Chemistry Adv.",videos:314 , examType: "iit", courseId: 1  ,icon:"🧬" },
  { id: "mathematics_iit", name: "Mathematics Adv.",videos:24 , examType: "iit", courseId: 1 , icon:"➗"},

  { id: "physics_iit", name: "Physics", videos:34 , examType: "iit", courseId: 3 ,icon:"🧲" },
  { id: "chemistry_iit", name: "Chemistry",videos:314 , examType: "iit", courseId: 3  ,icon:"🧬" },
  { id: "mathematics_iit", name: "Mathematics",videos:24 , examType: "iit", courseId: 3 , icon:"➗"},
  { id: "physics_jee", name: "Physics", videos:234 ,examType: "jee", courseId: 4 ,icon:"🧲"  },
  { id: "chemistry_jee", name: "Chemistry",videos:234 , examType: "jee", courseId: 4 , icon:"🧬" },
  { id: "mathematics_jee", name: "Mathematics",videos:434 , examType: "jee", courseId: 4 , icon:"➗"},
  { id: "biology_neet", name: "Biology",videos:434 , examType: "neet", courseId: 2,  icon:"🧬" },
  { id: "physics_neet", name: "Physics",videos:24 , examType: "neet", courseId: 2  ,icon:"🧲" },
  { id: "chemistry_neet", name: "Chemistry",videos:31 , examType: "neet", courseId: 2, icon:"🧬"  },
];

export const chapters = [
  // Physics JEE Chapters
  { id: "chap1", subjectId: "physics_jee", name: "Kinematics" },
  { id: "chap2", subjectId: "physics_jee", name: "Dynamics" },
  { id: "chap3", subjectId: "physics_jee", name: "Thermodynamics" },
  { id: "chap4", subjectId: "physics_jee", name: "Work, Energy and Power" },
  { id: "chap5", subjectId: "physics_jee", name: "Rotational Motion" },
  { id: "chap6", subjectId: "physics_jee", name: "Gravitation" },
  { id: "chap7", subjectId: "physics_jee", name: "Optics" },
  { id: "chap8", subjectId: "physics_jee", name: "Electromagnetic Induction" },
  { id: "chap9", subjectId: "physics_jee", name: "Wave Motion" },

  // Chemistry JEE Chapters
  { id: "chap4", subjectId: "chemistry_jee", name: "Organic Chemistry" },
  { id: "chap5", subjectId: "chemistry_jee", name: "Inorganic Chemistry" },
  { id: "chap6", subjectId: "chemistry_jee", name: "Physical Chemistry" },

  // Mathematics JEE Chapters
  { id: "chap7", subjectId: "mathematics_jee", name: "Algebra" },
  { id: "chap8", subjectId: "mathematics_jee", name: "Calculus" },
  { id: "chap9", subjectId: "mathematics_jee", name: "Geometry" },

  // Biology NEET Chapters
  { id: "chap10", subjectId: "biology_neet", name: "Cell Structure" },
  { id: "chap11", subjectId: "biology_neet", name: "Genetics" },
  { id: "chap12", subjectId: "biology_neet", name: "Human Physiology" },

  // Physics NEET Chapters
  { id: "chap13", subjectId: "physics_neet", name: "Optics" },
  { id: "chap14", subjectId: "physics_neet", name: "Electromagnetism" },
  { id: "chap15", subjectId: "physics_neet", name: "Nuclear Physics" },

  // Chemistry NEET Chapters
  { id: "chap16", subjectId: "chemistry_neet", name: "Biochemistry" },
  {
    id: "chap17",
    subjectId: "chemistry_neet",
    name: "Environmental Chemistry",
  },
  { id: "chap18", subjectId: "chemistry_neet", name: "Analytical Chemistry" },

  { id: "chap19", subjectId: "phyisics_iit", name: "Rigid Body and Motion" },
  { id: "chap20", subjectId: "physics_iit", name: "Fluid Mechanics" },
  { id: "chap21", subjectId: "physics_iit", name: "Thermodynamics" },

  //Physics IIT Chapters
  { id: "chap22", subjectId: "physics_iit", name: "Mechanics" },
  { id: "chap23", subjectId: "physics_iit", name: "Waves" },
  { id: "chap24", subjectId: "physics_iit", name: "Electromagnetic Waves" },
  //Chemistry Iit Chapters
  { id: "chap25", subjectId: "chemistry_iit", name: "Organic Chemistry" },
  { id: "chap26", subjectId: "chemistry_iit", name: "Inorganic Chemistry" },
  { id: "chap27", subjectId: "chemistry_iit", name: "Physical Chemistry" },
  //Mathematics Iit Chapters
  { id: "chap28", subjectId: "mathematics_iit", name: "Calculus" },
  { id: "chap29", subjectId: "mathematics_iit", name: "Trigonometry" },
  {
    id: "chap30",
    subjectId: "mathematics_iit",
    name: "Differential Equations",
  },
];

export const questions = [
  // Kinematics Questions
  {
    id: "q1",
    chapterId: "chap1",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum: false,
    correctAnswer: "c",
    solution: "solution text.",
    text: `The dimensions of a cone are measured using a scale with a least count of 2 mm
. The diameter of the base and the height are both measured to be 20.0 cm
. The maximum percentage error in the determination of the volume is _______ .`,
  },
  {
    id: "q2",
    chapterId: "chap1",
    isnum: true,
    correctAnswer: "14",
    solution: "solution text.",
    text: `In an experiment for determination of the focal length of a thin convex lens, the distance of the object from the lens is 10±0.1 cm
 and the distance of its real image from the lens is 20±0.2 cm
. The error in the determination of focal length of the lens is n%
. The value of n
 is _____.`,
  },
  {
    id: "q3",
    chapterId: "chap1",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum: false,
    correctAnswer: "c",
    solution: "solution text.",
    text: `Two capacitors with capacitance values C1=(2000±10) pF
  and C2=(3000±15) pF
 are connected in series. The voltage applied across this combination is V=(5.00±0.02) V
. The percentage error in the calculation of the energy stored in this combination of capacitors is __________.`,
  },

  // Dynamics Questions
  {
    id: "q4",
    chapterId: "chap2",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum: false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "What is force?",
  },
  {
    id: "q5",
    chapterId: "chap2",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum: false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Define Newton's Second Law.",
  },
  {
    id: "q6",
    chapterId: "chap2",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum: false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Explain friction.",
  },

  // Thermodynamics Questions
  {
    id: "q7",
    chapterId: "chap3",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum: false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "What is entropy?",
  },
  {
    id: "q8",
    chapterId: "chap3",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum: false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Explain the first law of thermodynamics.",
  },
  {
    id: "q9",
    chapterId: "chap3",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum: false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Define specific heat.",
  },

  // Organic Chemistry Questions
  {
    id: "q10",
    chapterId: "chap4",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum: false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "What is a hydrocarbon?",
  },
  {
    id: "q11",
    chapterId: "chap4",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum: false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Explain isomerism.",
  },
  {
    id: "q12",
    chapterId: "chap4",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum: false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "What is a functional group?",
  },

];
