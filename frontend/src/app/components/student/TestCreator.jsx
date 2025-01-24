import React, { useEffect,useState } from "react";
import axios from "axios";

const TimeSelector = ({ time, setTime }) => {
  const times = [
    { value: 10, icon: "⏱️", catchphrase: "Quick Burst!" },
    { value: 20, icon: "⏳", catchphrase: "A Steady Pace!" },
    { value: 30, icon: "⏰", catchphrase: "Midway Challenge!" },
    { value: 60, icon: "🕰️", catchphrase: "The Full Marathon!" },
  ];

  return (
    <div className="flex gap-4 mb-4 ">
      {times.map((t) => (
        <button
          key={t.value}
          className={` px-4 p-3 text-black bg-gray-100 shadow h-fit text-[16px] border border-gray-100 hover:border-gray-600 rounded-lg tracking-wider disabled:text-gray-300 active:border-[2px] transition-all duration-300 ${
            time === t.value
              ? "border-gray-900"
              : "text-gray-700 hover:border-gray-900"
          }`}
          onClick={() => setTime(t.value)}
        >
          <div className="flex items-center space-x-3">
          <small className="text">{t.icon}</small>
            <div className="text-left">
            
              <small className="text-sm ">{t.value} minutes </small>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};
const QuestionSelector = ({ numQuestions, setNumQuestions }) => {
  const questionCounts = [
    { value: 5, icon: "📜", catchphrase: "Quick Fire!" },
    { value: 10, icon: "📝", catchphrase: "A Solid Set!" },
    { value: 15, icon: "🖊️", catchphrase: "Push Your Limits!" },
    { value: 20, icon: "🔖", catchphrase: "The Ultimate Test!" },
  ];

  return (
    <div className="flex gap-4 mb-4 ">
      {questionCounts.map((num) => (
        <button
          key={num.value}
          className={`px-4 py-3 text-black bg-gray-100 shadow h-fit text-[16px] border border-gray-100 hover:border-gray-600 rounded-lg tracking-wider disabled:text-gray-300 active:border-[2px] transition-all duration-300 ${
            numQuestions === num.value
              ? "border-gray-900"
              : "text-gray-700 hover:border-gray-900"
          }`}
          onClick={() => setNumQuestions(num.value)}
        >
          <div className="flex items-center space-x-2">
          <small className="text">{num.icon}</small>
            <div className="text-left">
              <small className="text-sm ">{num.value} Questions</small>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

const DifficultySelector = ({ difficulty, setDifficulty }) => {
  const difficulties = [
    { value: 1, icon: "🔰", catchphrase: "Easy Peasy!" },
    { value: 2, icon: "🟢", catchphrase: "Getting There!" },
    { value: 3, icon: "🟡", catchphrase: "Challenging!" },
    { value: 4, icon: "🟠", catchphrase: "Tough Cookie!" },
    { value: 5, icon: "🔴", catchphrase: "Master Level!" },
  ];

  return (
    <div className="flex gap-4 mb-4 ">
      {difficulties.map((d) => (
        <button
          key={d.value}
          className={`px-4 py-3 text-black bg-gray-100 shadow h-fit text-[16px] border border-gray-100 hover:border-gray-600 rounded-lg tracking-wider disabled:text-gray-300 active:border-[2px] transition-all duration-300 ${
            difficulty === d.value
              ? "border-gray-900"
              : "text-gray-700 hover:border-gray-900"
          }`}
          onClick={() => setDifficulty(d.value)}
        >
          <div className="flex items-center space-x-3">
          <small className="text">{d.icon}</small>
            <div className="text-left">
              <small className="text-sm font-">
               Level {d.value}
              </small>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};




const SubjectSelector = ({ setSubjects, subjects, selectedChapters, setSelectedChapters, courseid }) => {
  const [subjectOptions, setSubjectOptions] = useState([]);
  const [expandedSubjects, setExpandedSubjects] = useState([]);

  const toggleChapter = (chapter) => {
    setSelectedChapters((prev) =>
      prev.includes(chapter)
        ? prev.filter((item) => item !== chapter)
        : [...prev, chapter]
    );
  };

  const toggleSubject = (subjectName) => {
    setExpandedSubjects((prev) =>
      prev.includes(subjectName)
        ? prev.filter((item) => item !== subjectName)
        : [...prev, subjectName]
    );
    setSubjects((prev) =>
      prev.includes(subjectName)
        ? prev.filter((item) => item !== subjectName)
        : [...prev, subjectName]
    );
  };

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/subjects/?course_id=${courseid}`
        );
        const subjectsData = response.data;

        const updatedSubjectOptions = await Promise.all(
          subjectsData.map(async (subject) => {
            const chaptersResponse = await axios.get(
              `http://127.0.0.1:8000/api/chapters/?subject=${subject.id}`
            );
            return {
              ...subject,
              chapters: chaptersResponse.data,
            };
          })
        );
        setSubjectOptions(updatedSubjectOptions); 
      } catch (error) {
        console.error("Error fetching subjects or chapters:", error);
      }
    };

    fetchSubjects();
  }, [courseid]);

  if (!subjectOptions.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-5 gap-6 mb-6">
        {subjectOptions.map((subject) => (
          <div
            key={subject.id}
            className={`p-4 border  transition-all duration-100 hover:border-gray-500 rounded-2xl  ${
              subjects.includes(subject.name) ? "border-teal-800" : "border-gray-300"
            }`}
            onClick={() => toggleSubject(subject.name)}
          >
            <div className="flex items-center space-x-4 cursor-pointer">

                <h3 className="text-sm font-instSansB font-bold text-gray-800">
                  {subject.name}
                </h3>
               
            </div>
          </div>
        ))}
      </div>
      {subjects.map((selectedSubject) => {
        const currentSubject = subjectOptions.find(
          (subject) => subject.name === selectedSubject
        );

        return (
          <div key={currentSubject.id} className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              {currentSubject.name} Chapters
            </h3>
            <div className="grid grid-cols-5 gap-4">
              {currentSubject.chapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className={`p-4 border flex items-center  transition-all duration-100 hover:border-gray-500 hover:shadow rounded-2xl ${
                    selectedChapters.includes(chapter.id) ? "border-teal-800" : "border-gray-300"
                  }`}
                  onClick={() => toggleChapter(chapter.id)}
                >

                      <h4 className="text-sm font-bold text-gray-800 line-clamp-2" >{chapter.name}</h4>

                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};




const ModalTimeQuestions = ({ onNext, setNumQuestions, setTime, setDifficulty, numQuestions, time, difficulty }) => {
  const isNextEnabled = time && numQuestions && difficulty;

  return (
    <div className="px-2 modal w-fit rounded-lg  text-gray-800 mx-auto font-instSansB">
      <h2 className="text-lg text-left mb-4">Set Duration</h2>
      <TimeSelector time={time} setTime={setTime} />
      
      <h2 className="text-lg text-left mb-4">Set Number of Questions</h2>
      <QuestionSelector numQuestions={numQuestions} setNumQuestions={setNumQuestions} />
      
      <h2 className="text-lg text-left mb-4">Set Difficulty</h2>
      <DifficultySelector difficulty={difficulty} setDifficulty={setDifficulty} />
      
      <div className="text-left mt-6">
        <button
          disabled={!isNextEnabled}
          onClick={onNext}
          className={`px-4 py-1 text-black bg-gray-100 shadow h-fit text-[16px] border border-gray-100 hover:border-gray-600 rounded-full tracking-wider disabled:text-gray-300 active:border-[2px] transition-all duration-300${
            isNextEnabled
              ? "hover:border-gray-500"
              : "text-gray-500 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};


const ModalSubjects = ({
  onNext,
  onBack,
  setSubjects,
  subjects,
  selectedChapters,
  setSelectedChapters,
  courseid,
}) => {
  const isNextEnabled = subjects.length > 0 && selectedChapters.length > 0;

  return (
    <div className="px-2 modal bg-white rounded-lg w-full mx-auto font-instSansB">
      <h2 className="text-lg font-semibold text-left mb-4">Select Subjects and Chapters</h2>
      <SubjectSelector
        setSubjects={setSubjects}
        subjects={subjects}
        selectedChapters={selectedChapters}
        setSelectedChapters={setSelectedChapters}
        courseid={courseid}
      />
      <div className="flex justify-between mt-4">
        <button
          onClick={onBack}
          className="border px-6 py-2 text-md font-jakarta rounded-lg font-bold transition-all text-gray-700 hover:border-gray-900"
        >
          Back
        </button>

        
        <button
          onClick={onNext}
          disabled={!isNextEnabled}
          className={`border px-6 py-2 text-md font-jakarta rounded-lg font-bold transition-all ${
            isNextEnabled
              ? "hover:border-gray-500"
              : "text-gray-500 cursor-not-allowed"
          }`}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

const TestCreator = ({id}) => {
  const [showModal, setShowModal] = useState(1);
  const [numQuestions, setNumQuestions] = useState(null);
  const [time, setTime] = useState(null);
  const [difficulty, setDifficulty] = useState(null);  // New state for difficulty
  const [subjects, setSubjects] = useState([]);
  const [selectedChapters, setSelectedChapters] = useState([]);
  const [formData, setFormData] = useState(null);

  const handleNext = () => setShowModal((prev) => prev + 1);
  const handleBack = () => setShowModal((prev) => prev - 1);

  const handleSubmit = () => {
    const data = { time, numQuestions, subjects, selectedChapters, difficulty };  // Add difficulty to form data
    setFormData(data);
    setShowModal(0); // Hide all modals
  };

  return (
    <div className="py-4">
      {showModal === 1 && (
        <ModalTimeQuestions
          onNext={handleNext}
          setNumQuestions={setNumQuestions}
          setTime={setTime}
          setDifficulty={setDifficulty}  // Pass down setDifficulty
          numQuestions={numQuestions}
          time={time}
          difficulty={difficulty}
        />
      )}
      {showModal === 2 && (
        <ModalSubjects
          onNext={handleSubmit}
          onBack={handleBack}
          setSubjects={setSubjects}
          subjects={subjects}
          selectedChapters={selectedChapters}
          setSelectedChapters={setSelectedChapters}
          courseid={id}
        />
      )}
      {formData && (
        <div className="mt-6 ">
          <h2 className="text-2xl font-semibold mb-4">Test Summary</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Time:</strong> {formData.time} minutes
            </li>
            <li>
              <strong>Number of Questions:</strong> {formData.numQuestions}
            </li>
            <li>
              <strong>Subjects:</strong> {formData.subjects.join(", ")}
            </li>
            <li>
              <strong>Chapters:</strong> {formData.selectedChapters.join(", ")}
            </li>
            <li>
              <strong>Difficulty:</strong> {formData.difficulty} {/* Display selected difficulty */}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};


export default TestCreator;
