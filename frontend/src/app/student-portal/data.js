export const courses = [
  {
    id: 1,
    title: "2025 | Repeaters - JEE Advanced | Offline",
    chapters: 246,
    contents: 1161,
    progress: 15,
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
  { id: "physics_iit", name: "Physics ", videos:34 , examType: "iit", courseId: 1 ,icon:"🧲" },
  { id: "chemistry_iit", name: "Chemistry ",videos:314 , examType: "iit", courseId: 1  ,icon:"🧬" },
  { id: "mathematics_iit", name: "Mathematics ",videos:24 , examType: "iit", courseId: 1 , icon:"➗"},

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

  { id: "chap1", subjectId: "physics_jee", videos:23, name: "Kinematics", icon: "🏃‍♂️" }, // Motion-related
  { id: "chap2", subjectId: "physics_jee", videos:23, name: "Dynamics", icon: "⚙️" }, // Mechanics-related
  { id: "chap3", subjectId: "physics_jee", videos:23, name: "Thermodynamics", icon: "🔥" }, // Heat-related
  { id: "chap31", subjectId: "physics_jee", videos:23, name: "Work, Energy and Power", icon: "🔋" }, // Energy-related
  { id: "chap32", subjectId: "physics_jee", videos:23, name: "Rotational Motion", icon: "🔄" }, // Rotational motion
  { id: "chap33", subjectId: "physics_jee", videos:23, name: "Gravitation", icon: "🌍" }, // Gravity
  { id: "chap34", subjectId: "physics_jee", videos:23, name: "Optics", icon: "🔭" }, // Light-related
  { id: "chap35", subjectId: "physics_jee", videos:23, name: "Electromagnetic Induction", icon: "⚡" }, // Electricity-related
  { id: "chap36", subjectId: "physics_jee", videos:23, name: "Wave Motion", icon: "🌊" }, // Wave-related



  // Chemistry JEE Chapters
{ id: "chap4", subjectId: "chemistry_jee", videos: 23, name: "Organic Chemistry", icon: "🔥" },
{ id: "chap5", subjectId: "chemistry_jee", videos: 23, name: "Inorganic Chemistry", icon: "🔬" },
{ id: "chap6", subjectId: "chemistry_jee", videos: 23, name: "Physical Chemistry", icon: "📊" },

// Mathematics JEE Chapters
{ id: "chap7", subjectId: "mathematics_jee", name: "Algebra", icon: "🔢" },
{ id: "chap8", subjectId: "mathematics_jee", name: "Calculus", icon: "📈" },
{ id: "chap9", subjectId: "mathematics_jee", name: "Geometry", icon: "📐" },

// Biology NEET Chapters
{ id: "chap10", subjectId: "biology_neet", name: "Cell Structure", icon: "🧬" },
{ id: "chap11", subjectId: "biology_neet", name: "Genetics", icon: "🌱" },
{ id: "chap12", subjectId: "biology_neet", name: "Human Physiology", icon: "🫀" },

// Physics NEET Chapters
{ id: "chap13", subjectId: "physics_neet", name: "Optics", icon: "🔭" },
{ id: "chap14", subjectId: "physics_neet", name: "Electromagnetism", icon: "⚡" },
{ id: "chap15", subjectId: "physics_neet", name: "Nuclear Physics", icon: "☢️" },

// Chemistry NEET Chapters
{ id: "chap16", subjectId: "chemistry_neet", name: "Biochemistry", icon: "🧪" },
{ id: "chap17", subjectId: "chemistry_neet", name: "Environmental Chemistry", icon: "🌍" },
{ id: "chap18", subjectId: "chemistry_neet", name: "Analytical Chemistry", icon: "🧫" },

// Physics IIT Chapters
{ id: "chap19", subjectId: "physics_iit", name: "Rigid Body and Motion", icon: "⚙️" },
{ id: "chap20", subjectId: "physics_iit", name: "Fluid Mechanics", icon: "💧" },
{ id: "chap21", subjectId: "physics_iit", name: "Thermodynamics", icon: "🌡️" },
{ id: "chap22", subjectId: "physics_iit", name: "Mechanics", icon: "🏗️" },
{ id: "chap23", subjectId: "physics_iit", name: "Waves", icon: "🌊" },
{ id: "chap24", subjectId: "physics_iit", name: "Electromagnetic Waves", icon: "📡" },

// Chemistry IIT Chapters
{ id: "chap25", subjectId: "chemistry_iit", name: "Organic Chemistry", icon: "🔥" },
{ id: "chap26", subjectId: "chemistry_iit", name: "Inorganic Chemistry", icon: "🔬" },
{ id: "chap27", subjectId: "chemistry_iit", name: "Physical Chemistry", icon: "📊" },

// Mathematics IIT Chapters
{ id: "chap28", subjectId: "mathematics_iit", name: "Calculus", icon: "📈" },
{ id: "chap29", subjectId: "mathematics_iit", name: "Trigonometry", icon: "📏" },
{ id: "chap30", subjectId: "mathematics_iit", name: "Differential Equations", icon: "🔄" },

];


export const videos = [
  // Physics Chapters (All for mains videos)
  { 
    id: "video1", 
    chapterId: "chap1", 
    name: "Introduction to Waves - Class 1",  
    faculty: "Dr. Rajesh Kumar", 
    duration: "15:32", 
    thumbnail: "/Options.svg" 
  },
  { 
    id: "video2", 
    chapterId: "chap1", 
    name: "Waves in Water - Class 2", 
    faculty: "Prof. Sneha Sharma", 
    duration: "12:45", 
    thumbnail: "/Options.svg" 
  },
  { 
    id: "video3", 
    chapterId: "chap1", 
    name: "Wave Interference - Class 3", 
    faculty: "Dr. Anil Mehta", 
    duration: "18:20", 
    thumbnail: "/Options.svg" 
  },
  { 
    id: "video4", 
    chapterId: "chap1", 
    name: "Wave Propagation - Class 4", 
    faculty: "Dr. Priya Verma", 
    duration: "14:50", 
    thumbnail: "/Options.svg" 
  },

  // Chemistry Chapters
  { 
    id: "video5", 
    chapterId: "chap4", 
    name: "Atomic Structure", 
    faculty: "Dr. Manish Gupta", 
    duration: "20:10", 
    thumbnail: "/Options.svg" 
  },
  { 
    id: "video6", 
    chapterId: "chap4", 
    name: "Periodic Table", 
    faculty: "Prof. Ritu Singh", 
    duration: "22:05", 
    thumbnail: "/Options.svg" 
  },
  { 
    id: "video7", 
    chapterId: "chap4", 
    name: "Chemical Bonding", 
    faculty: "Dr. Arjun Mishra", 
    duration: "19:45", 
    thumbnail: "/Options.svg" 
  },
  
  // Mathematics Chapters
  { 
    id: "video8", 
    chapterId: "chap15", 
    name: "Algebra", 
    faculty: "Dr. Neha Agrawal", 
    duration: "25:30", 
    thumbnail: "/Options.svg" 
  },
  { 
    id: "video9", 
    chapterId: "chap15", 
    name: "Trigonometry",
    faculty: "Prof. Vikram Singh", 
    duration: "23:15", 
    thumbnail: "/Options.svg" 
  },
  { 
    id: "video10", 
    chapterId: "chap15", 
    name: "Calculus", 
    faculty: "Dr. Kavita Jain", 
    duration: "27:40", 
    thumbnail: "/Options.svg" 
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
