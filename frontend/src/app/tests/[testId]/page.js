"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { tests } from "../data";
import { useRouter } from "next/navigation";
const TestPage = () => {
  const router = useRouter();
  const { testId } = useParams();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [visited, setVisited] = useState(new Set());
  const [markedForReview, setMarkedForReview] = useState(new Set());
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(1900); // Default 30 mins
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (testId) {
      const savedData = localStorage.getItem(testId);
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setCurrentQuestionIndex(parsedData.currentQuestionIndex || 0);
        setAnswers(parsedData.answers || {});
        setVisited(new Set(parsedData.visited || []));
        setMarkedForReview(new Set(parsedData.markedForReview || []));
        setTimeRemaining(parsedData.timeRemaining || 1800);
        setIsTimerRunning(parsedData.isTimerRunning); // Restore the exact state
      }
      setIsInitialized(true);
    }
  }, [testId]);

  // Save data to localStorage whenever one of these states changes
  useEffect(() => {
    if (isInitialized) {
      const dataToSave = {
        currentQuestionIndex,
        answers,
        visited: Array.from(visited), // Convert Set to Array for storage
        markedForReview: Array.from(markedForReview), // Convert Set to Array for storage
        timeRemaining,
        isTimerRunning,
      };
      localStorage.setItem(testId, JSON.stringify(dataToSave));
    }
  }, [currentQuestionIndex, answers, visited, markedForReview, timeRemaining, isTimerRunning, testId, isInitialized]);

  useEffect(() => {
    if (isInitialized) {
      const timer = setInterval(() => {
        setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);

      return () => clearInterval(timer); // Cleanup timer on unmount
    }
  }, [isInitialized]);

  const AttemptLater = () => {
    saveData(); // Save current progress to localStorage
    router.push("/tests"); // Navigate to the tests page
  };

  const testQuestions = tests[testId] || [];
  const totalQuestions = testQuestions.length;

  const handleAnswer = (option) => {
    setAnswers({ ...answers, [currentQuestionIndex]: option });
    setVisited(new Set([...visited, currentQuestionIndex]));
  };

  const saveData = () => {
    const dataToSave = {
      currentQuestionIndex,
      answers,
      visited: Array.from(visited), // Convert Set to Array for storage
      markedForReview: Array.from(markedForReview), // Convert Set to Array for storage
      timeRemaining,
      isTimerRunning,
    };
    localStorage.setItem(testId, JSON.stringify(dataToSave));
  };

  const handleSubmit = () => {
    const confirmSubmit = window.confirm(
      "Are you sure you want to submit the test?"
    );
    if (confirmSubmit) {
      setIsSubmitted(true);
    }
  };

  const TimerComponent = ({ timeRemaining }) => {
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
        2,
        "0"
      )}`;
    };

    return (
      <div className="mr-4 border border-black p-4 py-2 rounded-xl">
        {formatTime(timeRemaining)}
      </div>
    );
  };

  const calculateScore = () => {
    return testQuestions.filter(
      (question, index) => answers[index] === question.correct
    ).length;
  };

  const clearAnswer = () => {
    const updatedAnswers = { ...answers };
    delete updatedAnswers[currentQuestionIndex];
    setAnswers(updatedAnswers);
  };

  const goToQuestion = (index) => {
    setCurrentQuestionIndex(index);
    setVisited(new Set([...visited, index]));
  };

  const markForReview = () => {
    setMarkedForReview(new Set([...markedForReview, currentQuestionIndex]));
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const saveandNext = () => {
    if (!answers[currentQuestionIndex]) {
      alert("Please select an option to save the answer.");
    } else {
      nextQuestion();
    }
  };

  // Rendering
  return (
    <div className="h-screen">
      <header className="items-center font-jakarta flex justify-between text-2xl h-[10vh] px-4">
        <div className="flex justify-start items-center">
          <button
            className="border p-4 py-2 rounded-xl border-black text-sm"
            onClick={AttemptLater}
          >
            Attempt Later
          </button>
        </div>

        <div className="flex justify-center items-center font-extrabold">
          <span>JEE Advanced AITS {testId}</span>
        </div>

        <div className="flex justify-end items-center text-sm ">
          <TimerComponent timeRemaining={timeRemaining} />
          <button
            className="border p-4 py-2 rounded-xl border-black"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </header>

      <div className="flex justify-between bg-white border-t flex-col md:flex-row ">
        <div className="md:w-[70vw] flex flex-col">
          <div className="p-6 bg-white rounded-xl font-jakarta">
            {isSubmitted ? (
              <div className="text-center">
                <h2 className="text-2xl ">
                  Your Score: {calculateScore()} / {totalQuestions}
                </h2>
              </div>
            ) : (
              <>
                <h2 className="text-xl mb-4">
                  Question {currentQuestionIndex + 1}
                </h2>
                <p className="text-lg mb-4">
                  {testQuestions[currentQuestionIndex]?.question}
                </p>
                {/* Options */}
                <div className="grid grid-cols-2 gap-3 w-[80%] mt-8">
                  {testQuestions[currentQuestionIndex]?.options.map(
                    (option, index) => (
                      <label
                        key={index}
                        className={`block p-2 px-4 py-4 rounded-xl transition cursor-pointer border ${
                          answers[currentQuestionIndex] === option
                            ? "bg-blue-100 border-blue-500"
                            : "border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${currentQuestionIndex}`}
                          checked={answers[currentQuestionIndex] === option}
                          onChange={() => handleAnswer(option)}
                          className="hidden"
                        />
                        {option}
                      </label>
                    )
                  )}
                </div>
              </>
            )}
          </div>
          <div className="border-t flex p-2 px-6 mt-auto flex-row max1:flex-col">
            <div className="mt-6 flex font-jakarta ">
              <button
                onClick={saveandNext}
                className="px-4 py-4 h-fit bg-teal-100 border-teal-600  border text-black hover:border-black font-semibold opacity-90 hover:opacity-100  rounded-lg  mr-4 shadow-md active:border-[2px] transition-all duration-300"
              >
                Save and Next
              </button>
              <button
                onClick={clearAnswer}
                className="px-4 py-4 h-fit  text-black hover:border-black font-semibold border shadow-md rounded-lg mr-4 hover:opacity-100 opacity-90 active:border-[2px] transition-all duration-300"
              >
                Clear
              </button>
              <button
                onClick={markForReview}
                className="px-4 py-4 h-fit  text-black hover:border-black border opacity-90 shadow-md font-semibold rounded-lg mr-4 hover:opacity-100 active:border-[2px] transition-all duration-300"
              >
                Mark for Review and Next
              </button>
            </div>

            <div className="border-black py-6 flex gap-5">
              <button
                onClick={prevQuestion}
                disabled={currentQuestionIndex === 0}
                className="px-4 py-4 text-black bg-gray-100 shadow font-semibold border border-gray-100 hover:border-gray-800 rounded-lg tracking-wider disabled:text-gray-300 active:border-[2px] transition-all duration-300"
              >
                Previous
              </button>
              <button
                onClick={nextQuestion}
                disabled={currentQuestionIndex === totalQuestions - 1}
                className="px-7 py-4 text-black bg-gray-100 shadow font-semibold border border-gray-100 hover:border-gray-800 rounded-lg tracking-wider disabled:text-gray-300 active:border-[2px] transition-all duration-300"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="p-4 px-6 border-l md:w-[30vw]">
          <div className="bg-white rounded-md mb-5">
            <h3 className="text border-b py-2 mb-2">Legend</h3>
            <div className="flex flex-wrap gap-4 pt-2">
              {/* Not Visited */}
              <div className="flex items-center">
                <div className="w-5 h-5 bg-gray-300 rounded mr-2"></div>
                <span>Not Visited</span>
              </div>
              {/* Visited */}
              <div className="flex items-center">
                <div className="w-5 h-5 bg-red-300 rounded mr-2"></div>
                <span>Visited</span>
              </div>
              {/* Answered */}
              <div className="flex items-center">
                <div className="w-5 h-5 bg-emerald-500 rounded mr-2"></div>
                <span>Answered</span>
              </div>
              {/* Marked for Review */}
              <div className="flex items-center">
                <div className="w-5 h-5 bg-violet-300 rounded mr-2"></div>
                <span>Marked for Review</span>
              </div>
              {/* Answered & Marked for Review */}
              <div className="flex items-center">
                <div className="w-5 h-5 bg-purple-700 rounded mr-2"></div>
                <span>Answered & Marked for Review</span>
              </div>
            </div>
          </div>

          {/* Question Navigator */}
          {["Physics", "Chemistry", "Mathematics"].map((subject) => (
            <div key={subject} className="bg-white rounded-md mb-5">
              <div className="border-b mb-4 py-2">{subject}</div>
              <div className="flex flex-wrap gap-3">
                {testQuestions
                  .filter((question) => question.subject === subject)
                  .map((question, overallIndex) => {
                    const index = testQuestions.indexOf(question);
                    // Define background colors for buttons
                    let bgColor = "bg-gray-300"; // Default: Not Visited
                    if (visited.has(index)) bgColor = "bg-orange-300"; // Visited
                    if (answers[index]) bgColor = "bg-emerald-500"; // Answered
                    if (markedForReview.has(index)) bgColor = "bg-violet-300"; // Marked for Review
                    
                    if (markedForReview.has(index)&&answers[index]) bgColor = "bg-violet-500"; // Marked for Review

                    return (
                      <button
                        key={index}
                        className={`w-10 h-10 rounded-xl text-white ${bgColor}`}
                        onClick={() => goToQuestion(index)}
                      >
                        {index + 1}
                      </button>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestPage;
