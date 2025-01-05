import React, { useState } from "react";

const TimeSelector = ({ time, setTime }) => {
  const times = [
    { value: 10, icon: "⏱️", catchphrase: "Quick Burst!" },
    { value: 20, icon: "⏳", catchphrase: "A Steady Pace!" },
    { value: 30, icon: "⏰", catchphrase: "Midway Challenge!" },
    { value: 60, icon: "🕰️", catchphrase: "The Full Marathon!" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
      {times.map((t) => (
        <button
          key={t.value}
          className={`pl-3 border px-6 py-4 text-md font-jakarta rounded-lg font-bold transition-all ${
            time === t.value
              ? "border-gray-900"
              : "text-gray-700 hover:border-gray-900"
          }`}
          onClick={() => setTime(t.value)}
        >
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{t.icon}</span>
            <div className="text-left">
              <p>{t.catchphrase}</p>
              <small className="text-sm text-gray-500 font-normal font-jakarta">{t.value} minutes </small>
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
      {questionCounts.map((num) => (
        <button
          key={num.value}
          className={`border pl-3 px-6 py-4 text-md font-jakarta rounded-lg font-bold transition-all ${
            numQuestions === num.value
              ? "border-gray-900"
              : "text-gray-700 hover:border-gray-900"
          }`}
          onClick={() => setNumQuestions(num.value)}
        >
          <div className="flex items-center space-x-2">
            <span className="text-2xl mr-2">{num.icon}</span>
            <div className="text-left">
              <p>{num.catchphrase}</p>
              <small className="text-sm font-jakarta font-medium text-gray-500">{num.value} Questions</small>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};



const SubjectSelector = ({ setSubjects, subjects, selectedChapters, setSelectedChapters }) => {
  const subjectOptions = [
    {
      id: "physics",
      name: "Physics",
      icon: "🧲",
      chapters: [
        { name: "Chapter 1", icon: "⚡" },
        { name: "Chapter 2", icon: "🌌" },
        { name: "Chapter 3", icon: "🧪" },
      ],
    },
    {
      id: "chemistry",
      name: "Chemistry",
      icon: "⚗️",
      chapters: [
        { name: "Chapter A", icon: "🧫" },
        { name: "Chapter B", icon: "🧬" },
        { name: "Chapter C", icon: "🔬" },
      ],
    },
    {
      id: "mathematics",
      name: "Mathematics",
      icon: "📐",
      chapters: [
        { name: "Chapter I", icon: "📏" },
        { name: "Chapter II", icon: "📊" },
        { name: "Chapter III", icon: "📚" },
      ],
    },
  ];

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

  return (
    <div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6">
        {subjectOptions.map((subject) => (
          <div
            key={subject.id}
            className={`p-4 border transition-all duration-100 hover:border-gray-500 rounded-2xl ${
              subjects.includes(subject.name) ? "border-teal-800" : "border-gray-300"
            }`}
            onClick={() => toggleSubject(subject.name)}
          >
            <div className="flex items-center space-x-4 cursor-pointer">
              <div className="h-10 w-10 flex items-center justify-center rounded-full">
                <span role="img" aria-label="course-icon" className="text-2xl">
                  {subject.icon}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-instSansB font-bold text-gray-800">
                  {subject.name}
                </h3>
                <p className="text-sm text-gray-500 font-instSansN ">
                  {subject.chapters.length} chapters
                </p>
              </div>
        
              {/* {subjects.includes(subject.name) && (
                <span
                  className="ml-2 text-teal-800 text-xl transition-opacity duration-200 opacity-100"
                  role="img"
                  aria-label="selected"
                >
                  ✅
                </span>
              )} */}
            </div>
          </div>
        ))}
      </div>

      {/* Chapters */}
      {subjects.map((selectedSubject) => {
        const currentSubject = subjectOptions.find(
          (subject) => subject.name === selectedSubject
        );


        return (
          <div
            key={currentSubject.id} className="mb-8"
       
          >
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              {currentSubject.name} Chapters
            </h3>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {currentSubject.chapters.map((chapter) => (
                <div
                  key={chapter.name}
                  className={`p-4 border transition-all duration-100 hover:border-gray-500 hover:shadow rounded-2xl ${
                    selectedChapters.includes(chapter.name) ? "border-teal-800" : "border-gray-300"
                  }`}
                  onClick={() => toggleChapter(chapter.name)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{chapter.icon}</span>
                      <h4 className="text-md font-bold text-gray-800">{chapter.name}</h4>
                    </div>
                    {/* Tick Icon */}
                    {selectedChapters.includes(chapter.name) && (
                      <span
                        className="ml-2 text-teal-800 text-xl transition-opacity duration-200 opacity-100"
                        role="img"
                        aria-label="selected"
                      >
                        ✅
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};




const ModalTimeQuestions = ({ onNext, setNumQuestions, setTime, numQuestions, time }) => {
  const isNextEnabled = time && numQuestions;

  return (
    <div className="px-2 modal bg-white rounded-lg w-full text-gray-800 mx-auto font-instSansB">
      <h2 className="text-lg text-left mb-4">Set Duration</h2>
      <TimeSelector time={time} setTime={setTime} />
      <h2 className="text-lg text-left mb-4">Set Number of Questions</h2>
      <QuestionSelector numQuestions={numQuestions} setNumQuestions={setNumQuestions} />
      <div className="text-left mt-4">
        <button
          disabled={!isNextEnabled}
          onClick={onNext}
          className={`border px-6 py-2 text-md font-jakarta rounded-lg font-bold  transition-all ${
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

const TestCreator = () => {
  const [showModal, setShowModal] = useState(1);
  const [numQuestions, setNumQuestions] = useState(null);
  const [time, setTime] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [selectedChapters, setSelectedChapters] = useState([]);
  const [formData, setFormData] = useState(null);

  const handleNext = () => setShowModal((prev) => prev + 1);
  const handleBack = () => setShowModal((prev) => prev - 1);

  const handleSubmit = () => {
    const data = { time, numQuestions, subjects, selectedChapters };
    setFormData(data);
    setShowModal(0); // Hide all modals
  };

  return (
    <div>
      {showModal === 1 && (
        <ModalTimeQuestions
          onNext={handleNext}
          setNumQuestions={setNumQuestions}
          setTime={setTime}
          numQuestions={numQuestions}
          time={time}
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
          </ul>
        </div>
      )}
    </div>
  );
};

export default TestCreator;
