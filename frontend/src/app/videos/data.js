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
    { id: "chap17", subjectId: "chemistry_neet", name: "Environmental Chemistry" },
    { id: "chap18", subjectId: "chemistry_neet", name: "Analytical Chemistry" },
  ];
  
  export const videos = [
    // Kinematics videos
    { id: "q1", chapterId: "chap1", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "What is velocity?" },
    { id: "q2", chapterId: "chap1", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Define acceleration." },
    { id: "q3", chapterId: "chap1", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "What is displacement?" },
  
    // Dynamics videos
    { id: "q4", chapterId: "chap2", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "What is force?" },
    { id: "q5", chapterId: "chap2", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Define Newton's Second Law." },
    { id: "q6", chapterId: "chap2", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Explain friction." },
  
    // Thermodynamics videos
    { id: "q7", chapterId: "chap3", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "What is entropy?" },
    { id: "q8", chapterId: "chap3", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Explain the first law of thermodynamics." },
    { id: "q9", chapterId: "chap3", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Define specific heat." },
  
    // Organic Chemistry videos
    { id: "q10", chapterId: "chap4", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "What is a hydrocarbon?" },
    { id: "q11", chapterId: "chap4", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Explain isomerism." },
    { id: "q12", chapterId: "chap4", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "What is a functional group?" },
  
    // Inorganic Chemistry videos
    { id: "q13", chapterId: "chap5", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Define coordination compounds." },
    { id: "q14", chapterId: "chap5", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "What is the periodic table?" },
    { id: "q15", chapterId: "chap5", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Explain atomic radius." },
  
    // Physical Chemistry videos
    { id: "q16", chapterId: "chap6", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "What is molarity?" },
    { id: "q17", chapterId: "chap6", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Define colligative properties." },
    { id: "q18", chapterId: "chap6", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Explain the ideal gas law." },
  
    // Algebra videos
    { id: "q19", chapterId: "chap7", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "What is a quadratic equation?" },
    { id: "q20", chapterId: "chap7", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Explain polynomial roots." },
    { id: "q21", chapterId: "chap7", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Define arithmetic progression." },
  
    // Calculus videos
    { id: "q22", chapterId: "chap8", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "What is a derivative?" },
    { id: "q23", chapterId: "chap8", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Define integral calculus." },
    { id: "q24", chapterId: "chap8", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Explain limits." },
  
    // Geometry videos
    { id: "q25", chapterId: "chap9", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "What is a triangle?" },
    { id: "q26", chapterId: "chap9", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Define a circle." },
    { id: "q27", chapterId: "chap9", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Explain the Pythagorean theorem." },
  
    // Cell Structure videos
    { id: "q28", chapterId: "chap10", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "What is a cell?" },
    { id: "q29", chapterId: "chap10", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Explain cell membrane." },
    { id: "q30", chapterId: "chap10", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Define mitochondria." },
  
    // Genetics videos
    { id: "q31", chapterId: "chap11", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "What is DNA?" },
    { id: "q32", chapterId: "chap11", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Explain genes." },
    { id: "q33", chapterId: "chap11", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "What is heredity?" },
  
    // Human Physiology videos
    { id: "q34", chapterId: "chap12", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "What is the circulatory system?" },
    { id: "q35", chapterId: "chap12", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Define digestion." },
    { id: "q36", chapterId: "chap12", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Explain respiration." },
  
    // Optics videos
    { id: "q37", chapterId: "chap13", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "What is reflection?" },
    { id: "q38", chapterId: "chap13", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Define refraction." },
    { id: "q39", chapterId: "chap13", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Explain diffraction." },
  
    // Electromagnetism videos
    { id: "q40", chapterId: "chap14", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "What is a magnetic field?" },
    { id: "q41", chapterId: "chap14", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Define electromagnetic waves." },
    { id: "q42", chapterId: "chap14", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "What is an electric circuit?" },
  
    // Nuclear Physics videos
    { id: "q43", chapterId: "chap15", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "What is nuclear fission?" },
    { id: "q44", chapterId: "chap15", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Define nuclear fusion." },
    { id: "q45", chapterId: "chap15", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Explain radioactive decay." },
  
    // Biochemistry videos
    { id: "q46", chapterId: "chap16", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "What is a protein?" },
    { id: "q47", chapterId: "chap16", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Define enzymes." },
    { id: "q48", chapterId: "chap16", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Explain DNA replication." },
  
    // Environmental Chemistry videos
    { id: "q49", chapterId: "chap17", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "What is pollution?" },
    { id: "q50", chapterId: "chap17", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Define greenhouse gases." },
    { id: "q51", chapterId: "chap17", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "What is ozone depletion?" },
  
    // Analytical Chemistry videos
    { id: "q52", chapterId: "chap18", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "What is chromatography?" },
    { id: "q53", chapterId: "chap18", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "Define spectrometry." },
    { id: "q54", chapterId: "chap18", time:"30mins", faculty:"abcedf", thumbnail:"/image.svg", title: "What is a titration?" },
  ];
  