"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { tests } from "../data";

const TestPage = () => {
  const { testId } = useParams();

  //use params work as of now.
  //tests are memory.

  const testQuestions = tests[testId] || [];
  const totalQuestions = testQuestions.length;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [visited, setVisited] = useState(new Set());
  const [markedForReview, setMarkedForReview] = useState(new Set());
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Independent Functions
  const handleAnswer = (option) => {
    setAnswers({ ...answers, [currentQuestionIndex]: option });
    setVisited(new Set([...visited, currentQuestionIndex]));
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
  };

  const markForReviewAndNext = () => {
    markForReview();
    nextQuestion();
  };

  const saveAndMarkForReview = () => {
    if (!answers[currentQuestionIndex]) {
      alert("Please select an option to save the answer.");
    } else {
      markForReview();
      nextQuestion();
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const saveandNext = () => {
    if (!answers[currentQuestionIndex]) {
      alert("Please select an option to save the answer.");
    } else {
      nextQuestion();
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    const confirmSubmit = window.confirm(
      "Are you sure you want to submit the test?"
    );
    if (confirmSubmit) {
      setIsSubmitted(true);
    }
  };

  const calculateScore = () => {
    return testQuestions.filter(
      (question, index) => answers[index] === question.correct
    ).length;
  };

  // Rendering
  return (
    <div className="h-auto md:h-screen font-montserrat bg-gray-700">
      <header className="bg-green-100   text-white items-center flex justify-center  text-lg h-[10vh]">
        Test {testId}
      </header>

      <div className="flex  md:h-[90vh]   flex-col-reverse md:flex-row">
        <div className="md:w-2/3 p-6 bg-white">
          {isSubmitted ? (
            <div className="text-center">
              <h2 className="text-2xl font-instSansB">
                Your Score: {calculateScore()} / {totalQuestions}
              </h2>
            </div>
          ) : (
            <>
              <h2 className="text-xl pl-2 mb-4">
                Question {currentQuestionIndex + 1}
              </h2>
              {/* <p className="text-lg mb-4">
                {testQuestions[currentQuestionIndex]?.question}
              </p> */}
              {testQuestions[currentQuestionIndex]?.image && (
                <img
                  src={testQuestions[currentQuestionIndex].image}
                  alt="Question Visual"
                  className="w-full md:w-3/4   mb-4"
                />
              )}

              {/* Options */}
              <div className="grid grid-cols-2 gap-3">
                {testQuestions[currentQuestionIndex]?.options.map(
                  (option, index) => (
                    <label
                      key={index}
                      className={`block p-2 rounded-s-lg rounded-tr-lg cursor-pointer border ${
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
                      {`Option ${String.fromCharCode(65 + index)}`}
                    </label>
                  )
                )}
              </div>


              <div className="mt-6 font-instSans ">
                <button
                  onClick={markForReviewAndNext}
                  className="px-4 py-2 bg-yellow-500 text-white  mr-4 hover:opacity-80 active:border-[2px] transition-all duration-300"
                >
                  Mark for Review and Next
                </button>

                <button
                  onClick={saveAndMarkForReview}
                  className="px-4 py-2 bg-blue-500 text-white  mr-4 hover:opacity-80 active:border-[2px] transition-all duration-300"
                >
                  Save and Mark for Review
                </button>

                <button
                  onClick={clearAnswer}
                  className="px-4 py-2 border-[1px] border-black  mr-4 hover:opacity-80 active:border-[2px] transition-all duration-300"
                >
                  Clear
                </button>

                <button
                  onClick={saveandNext}
                  className="px-4 py-2 bg-green-500 text-white  mr-4 hover:opacity-80 active:border-[2px] transition-all duration-300"
                >
                  Save and Next
                </button>
              </div>
              <div className="border-b-[1px] border-t-[1px] shadow-orange-300 s border-black p-3 flex items-center mt-6 flex-auto gap-3 font-instSansB ">
                <button
                  onClick={prevQuestion}
                  disabled={currentQuestionIndex === 0}
                  className="px-4 py-2 border-black border-[1px] uppercase tracking-wider disabled:bg-gray-300 hover:opacity-80 active:border-[2px] transition-all duration-300"
                >
                  &lt;&lt; Previous
                </button>
                <button
                  onClick={nextQuestion}
                  disabled={currentQuestionIndex === totalQuestions - 1}
                  className="px-4 py-2  uppercase  border-black border-[1px] tracking-wider  disabled:bg-gray-300 hover:opacity-80 active:border-[2px] transition-all duration-300"
                >
                  Next &gt;&gt;
                </button>

                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-black ml-auto text-white tracking-[2px] font-normal uppercase hover:opacity-80 active:border-[2px] transition-all duration-300 "
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </div>

        {/* Sidebar */}
        <div className="md:w-1/3 p-4 bg-gray-100 border-l">
          {/* Help Section */}
          <div className="p-4 mt-4 bg-white border-t rounded-md">
            <h3 className="text-lg font-semibold mb-2">Legend</h3>
            <div className="flex flex-wrap gap-4">
              {/* Not Visited */}
              <div className="flex items-center">
                <div className="w-6 h-6 bg-gray-300 rounded mr-2"></div>
                <span>Not Visited</span>
              </div>
              {/* Visited */}
              <div className="flex items-center">
                <div className="w-6 h-6 bg-red-300 rounded mr-2"></div>
                <span>Visited</span>
              </div>
              {/* Answered */}
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-600 rounded mr-2"></div>
                <span>Answered</span>
              </div>
              {/* Marked for Review */}
              <div className="flex items-center">
                <div className="w-6 h-6 bg-violet-300 rounded mr-2"></div>
                <span>Marked for Review</span>
              </div>
              {/* Answered & Marked for Review */}
              <div className="flex items-center">
                <div className="w-6 h-6 bg-purple-700 rounded mr-2"></div>
                <span>Answered & Marked for Review</span>
              </div>
            </div>
          </div>

          <div className="p-4 mt-4 bg-white border-t rounded-md">
            {/* Question Navigator */}
            <div className=" flex flex-wrap gap-3">
              {testQuestions.map((_, index) => {
                // Define background colors for buttons
                let bgColor = "bg-gray-300"; // Default: Not Visited
                if (visited.has(index)) bgColor = "bg-orange-300"; // Visited
                if (answers[index]) bgColor = "bg-green-600"; // Answered
                if (markedForReview.has(index)) bgColor = "bg-violet-300"; // Marked for Review
                if (markedForReview.has(index) && answers[index])
                  bgColor = "bg-purple-700"; // Answered & Marked for Review

                return (
                  <button
                    key={index}
                    onClick={() => goToQuestion(index)}
                    className={`w-10 h-10 flex items-center shadow-[0px_2px_0px_rgba(0,0,0,0.3)] justify-center ${bgColor} rounded-md text-white font-semibold hover:rounded-xl transition-all duration-600`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
