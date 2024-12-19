export const subjects = [
  { id: "physics_jee", name: "Physics", examType: "jee" },
  { id: "chemistry_jee", name: "Chemistry", examType: "jee" },
  { id: "mathematics_jee", name: "Mathematics", examType: "jee" },
  { id: "biology_neet", name: "Biology", examType: "neet" },
  { id: "physics_neet", name: "Physics", examType: "neet" },
  { id: "chemistry_neet", name: "Chemistry", examType: "neet" },
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
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: `The dimensions of a cone are measured using a scale with a least count of 2 mm
. The diameter of the base and the height are both measured to be 20.0 cm
. The maximum percentage error in the determination of the volume is _______ .`,
  },
  {
    id: "q2",
    chapterId: "chap1",
    isnum:true,
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
    isnum:false,
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
    isnum:false,
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
    isnum:false,
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
    isnum:false,
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
    isnum:false,
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
    isnum:false,
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
    isnum:false,
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
    isnum:false,
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
    isnum:false,
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
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "What is a functional group?",
  },

  // Inorganic Chemistry Questions
  {
    id: "q13",
    chapterId: "chap5",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Define coordination compounds.",
  },
  {
    id: "q14",
    chapterId: "chap5",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "What is the periodic table?",
  },
  {
    id: "q15",
    chapterId: "chap5",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Explain atomic radius.",
  },

  // Physical Chemistry Questions
  {
    id: "q16",
    chapterId: "chap6",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "What is molarity?",
  },
  {
    id: "q17",
    chapterId: "chap6",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Define colligative properties.",
  },
  {
    id: "q18",
    chapterId: "chap6",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Explain the ideal gas law.",
  },

  // Algebra Questions
  {
    id: "q19",
    chapterId: "chap7",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "What is a quadratic equation?",
  },
  {
    id: "q20",
    chapterId: "chap7",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Explain polynomial roots.",
  },
  {
    id: "q21",
    chapterId: "chap7",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Define arithmetic progression.",
  },

  // Calculus Questions
  {
    id: "q22",
    chapterId: "chap8",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "What is a derivative?",
  },
  {
    id: "q23",
    chapterId: "chap8",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Define integral calculus.",
  },
  {
    id: "q24",
    chapterId: "chap8",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Explain limits.",
  },

  // Geometry Questions
  {
    id: "q25",
    chapterId: "chap9",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "What is a triangle?",
  },
  {
    id: "q26",
    chapterId: "chap9",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Define a circle.",
  },
  {
    id: "q27",
    chapterId: "chap9",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Explain the Pythagorean theorem.",
  },

  // Cell Structure Questions
  {
    id: "q28",
    chapterId: "chap10",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "What is a cell?",
  },
  {
    id: "q29",
    chapterId: "chap10",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Explain cell membrane.",
  },
  {
    id: "q30",
    chapterId: "chap10",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Define mitochondria.",
  },

  // Genetics Questions
  {
    id: "q31",
    chapterId: "chap11",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "What is DNA?",
  },
  {
    id: "q32",
    chapterId: "chap11",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Explain genes.",
  },
  {
    id: "q33",
    chapterId: "chap11",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "What is heredity?",
  },

  // Human Physiology Questions
  {
    id: "q34",
    chapterId: "chap12",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "What is the circulatory system?",
  },
  {
    id: "q35",
    chapterId: "chap12",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Define digestion.",
  },
  {
    id: "q36",
    chapterId: "chap12",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Explain respiration.",
  },

  // Optics Questions
  {
    id: "q37",
    chapterId: "chap13",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "What is reflection?",
  },
  {
    id: "q38",
    chapterId: "chap13",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Define refraction.",
  },
  {
    id: "q39",
    chapterId: "chap13",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Explain diffraction.",
  },

  // Electromagnetism Questions
  {
    id: "q40",
    chapterId: "chap14",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "What is a magnetic field?",
  },
  {
    id: "q41",
    chapterId: "chap14",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Define electromagnetic waves.",
  },
  {
    id: "q42",
    chapterId: "chap14",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "What is an electric circuit?",
  },

  // Nuclear Physics Questions
  {
    id: "q43",
    chapterId: "chap15",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "What is nuclear fission?",
  },
  {
    id: "q44",
    chapterId: "chap15",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Define nuclear fusion.",
  },
  {
    id: "q45",
    chapterId: "chap15",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Explain radioactive decay.",
  },

  // Biochemistry Questions
  {
    id: "q46",
    chapterId: "chap16",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "What is a protein?",
  },
  {
    id: "q47",
    chapterId: "chap16",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Define enzymes.",
  },
  {
    id: "q48",
    chapterId: "chap16",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Explain DNA replication.",
  },

  // Environmental Chemistry Questions
  {
    id: "q49",
    chapterId: "chap17",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "What is pollution?",
  },
  {
    id: "q50",
    chapterId: "chap17",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Define greenhouse gases.",
  },
  {
    id: "q51",
    chapterId: "chap17",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "What is ozone depletion?",
  },

  // Analytical Chemistry Questions
  {
    id: "q52",
    chapterId: "chap18",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "What is chromatography?",
  },
  {
    id: "q53",
    chapterId: "chap18",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "Define spectrometry.",
  },
  {
    id: "q54",
    chapterId: "chap18",
    options: {
      a: "3m/s",
      b: "5m/s",
      c: "9km/hr",
      d: "0",
    },
    isnum:false,
    correctAnswer: "c",
    solution: "solution text.",
    text: "What is a titration?",
  },
];
