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
    <div className="h-auto bg-gray-100 ">
      <div className="flex  justify-between md:h-[88vh] bg-white border-t   flex-col md:flex-row ">
        <div className="md:w-[70vw] flex flex-col">
          <header className="  border-b uppercase items-center font-extrabold font-jakarta flex justify-center   text-2xl h-[10vh]">
            JEE Advanced AITS {testId}
          </header>
          <div className=" p-6 bg-white rounded-xl font-jakarta">
            {isSubmitted ? (
              <div className="text-center">
                <h2 className="text-2xl ">
                  Your Score: {calculateScore()} / {totalQuestions}
                </h2>
              </div>
            ) : (
              <>
                <h2 className="text-xl   mb-4">
                  Question {currentQuestionIndex + 1}
                </h2>
                <p className="text-lg mb-4">
                  {testQuestions[currentQuestionIndex]?.question}
                </p>
                {/* {testQuestions[currentQuestionIndex]?.image && (
                  <img
                    src={testQuestions[currentQuestionIndex].image}
                    alt="Question Visual"
                    className="w-full md:w-3/4   mb-4"
                  />
                )} */}

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
                        {/* {`Option ${String.fromCharCode(65 + index)}`} */}
                        {option}
                      </label>
                    )
                  )}
                </div>
              </>
            )}
          </div>
          <div className="border-t flex  border p-2 px-6 mt-auto flex-row max1:flex-col">
            <div className="mt-6  flex   font-jakarta ">
              <button
                onClick={markForReviewAndNext}
                className="px-4 py-4 h-fit  text-black hover:border-black bg- bg-teal-100 border-teal-600 border  opacity-90 shadow-md font-semibold  rounded-lg   mr-4 hover:opacity-100 active:border-[2px] transition-all duration-300"
              >
                Mark for Review and Next
              </button>

              {/* <button
                onClick={saveAndMarkForReview}
                className="px-4 flex-1 py-2 border border-black  rounded-lg mr-4 hover:opacity-80 active:border-[2px] transition-all duration-300"
              >
                Save and Mark for Review
              </button> */}

              <button
                onClick={clearAnswer}
                className="px-4 py-4 h-fit  text-black hover:border-black font-semibold  bg-teal-100 border border-teal-600  shadow-md  rounded-lg  mr-4 hover:opacity-100 opacity-90 active:border-[2px] transition-all duration-300"
              >
                Clear
              </button>

              <button
                onClick={saveandNext}
                className="px-4 py-4 h-fit bg-e bg-teal-100 border-teal-600  border text-black hover:border-black font-semibold  opacity-90 hover:opacity-100  rounded-lg  mr-4 shadow-md active:border-[2px] transition-all duration-300"
              >
                Save and Next
              </button>
            </div>

            <div className="   border-black py-6 flex  gap-5  ">
              <button
                onClick={prevQuestion}
                disabled={currentQuestionIndex === 0}
                className="px-4 py-4 text-black bg-gray-100 shadow font-semibold border border-gray-100 hover:border-gray-800  rounded-lg  tracking-wider disabled:text-gray-300  active:border-[2px] transition-all duration-300"
              >
                Previous
              </button>
              <button
                onClick={nextQuestion}
                disabled={currentQuestionIndex === totalQuestions - 1}
                className="px-7 py-4 text-black bg-gray-100 shadow font-semibold border border-gray-100 hover:border-gray-800  rounded-lg  tracking-wider disabled:text-gray-300  active:border-[2px] transition-all duration-300"
              >
                Next
              </button>

              <button
                onClick={handleSubmit}
                className="px-6 py-4 bg-black md:ml-auto text-white rounded-lg  tracking-[2px] font-semibold   hover:opacity-80 active:border-[2px] transition-all duration-300 "
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="p-4 px-6   border-l md:w-[30vw]  ">
          {/* Help Section */}
          <div className="  bg-white rounded-md mb-5">
            <h3 className="text-md border-b py-2 mb-2">LEGEND</h3>
            <div className="flex flex-wrap gap-4 pt-2">
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
                <div className="w-6 h-6 bg-emerald-500 rounded mr-2"></div>
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

          <div className=" bg-white rounded-md mb-5">
            <div className="border-b mb-4 py-2">PHYSICS</div>
            {/* Question Navigator */}
            <div className="flex flex-wrap gap-3">
              {testQuestions
                .filter((question) => question.subject === "Physics")
                .map((question, overallIndex) => {
                  const index = testQuestions.indexOf(question);
                  // Define background colors for buttons
                  let bgColor = "bg-gray-300"; // Default: Not Visited
                  if (visited.has(index)) bgColor = "bg-orange-300"; // Visited
                  if (answers[index]) bgColor = "bg-emerald-500"; // Answered
                  if (markedForReview.has(index)) bgColor = "bg-violet-300"; // Marked for Review
                  if (markedForReview.has(index) && answers[index])
                    bgColor = "bg-purple-700"; // Answered & Marked for Review

                  return (
                    <button
                      key={index}
                      onClick={() => goToQuestion(index)}
                      className={`w-10 h-10 flex items-center justify-center ${bgColor} rounded-md text-white font-semibold transition-all duration-600`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
            </div>
          </div>

          <div className=" bg-white rounded-md mb-5">
            <div className="border-b mb-4 py-2">CHEMISTRY</div>
            {/* Question Navigator */}
            <div className="flex flex-wrap gap-3">
              {testQuestions
                .filter((question) => question.subject === "Chemistry")
                .map((question, overallIndex) => {
                  const index = testQuestions.indexOf(question);
                  // Define background colors for buttons
                  let bgColor = "bg-gray-300"; // Default: Not Visited
                  if (visited.has(index)) bgColor = "bg-orange-300"; // Visited
                  if (answers[index]) bgColor = "bg-emerald-500"; // Answered
                  if (markedForReview.has(index)) bgColor = "bg-violet-300"; // Marked for Review
                  if (markedForReview.has(index) && answers[index])
                    bgColor = "bg-purple-700"; // Answered & Marked for Review

                  return (
                    <button
                      key={index}
                      onClick={() => goToQuestion(index)}
                      className={`w-10 h-10 flex items-center justify-center ${bgColor} rounded-md text-white font-semibold transition-all duration-600`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
            </div>
          </div>

          <div className=" bg-white rounded-md">
            <div className="border-b mb-4 py-2">MATHEMATICS</div>
            {/* Question Navigator */}
            <div className="flex flex-wrap gap-3">
              {testQuestions
                .filter((question) => question.subject === "Mathematics")
                .map((question, overallIndex) => {
                  const index = testQuestions.indexOf(question);
                  // Define background colors for buttons
                  let bgColor = "bg-gray-300"; // Default: Not Visited
                  if (visited.has(index)) bgColor = "bg-orange-300"; // Visited
                  if (answers[index]) bgColor = "bg-emerald-500"; // Answered
                  if (markedForReview.has(index)) bgColor = "bg-violet-300"; // Marked for Review
                  if (markedForReview.has(index) && answers[index])
                    bgColor = "bg-purple-700"; // Answered & Marked for Review

                  return (
                    <button
                      key={index}
                      onClick={() => goToQuestion(index)}
                      className={`w-10 h-10 flex items-center justify-center ${bgColor} rounded-md text-white font-semibold transition-all duration-600`}
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
