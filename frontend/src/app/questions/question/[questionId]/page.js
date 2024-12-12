"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { questions } from "../../data";

const QuestionPage = () => {
  const { questionId } = useParams(); // Get dynamic parameter
  const [selectedOption, setSelectedOption] = useState(null); // For multiple-choice questions
  const [numericalAnswer, setNumericalAnswer] = useState(""); // For numerical questions
  const [submitted, setSubmitted] = useState(false);

  const question = questions.find((q) => q.id === questionId);

  if (!question) {
    return <div>Question not found.</div>;
  }

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Question Details</h1>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow">
        <p className="text-lg mb-4">{question.text}</p>
        <form>
          {!(question.isnum) ? (
            // Multiple-choice question
            ["a", "b", "c", "d"].map((option) => (
              <div key={option} className="mb-2">
                <label className="flex items-center space-x-2">
                  <input
                    disabled={submitted}
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="form-radio text-blue-500"
                  />
                  <span>{question.options[option]}</span>
                </label>
              </div>
            ))
          ) : (
            // Numerical question
            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Enter your numerical answer:
              </label>
              <input
                disabled={submitted}
                type="number"
                value={numericalAnswer}
                onChange={(e) => setNumericalAnswer(e.target.value)}
                className="form-input border rounded px-2 py-1 text-blue-500"
                placeholder="Type your answer"
              />
            </div>
          )}

          <button
            type="button"
            onClick={handleSubmit}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        {submitted && (
          <div className="mt-6 p-4 bg-green-100 rounded-lg shadow">

            {!question.isnum ? (
              selectedOption === question.correctAnswer ? (
                <p className="text-green-600 font-bold">Correct!</p>
              ) : (
                <p className="text-red-600 font-bold">Incorrect.</p>
              )
            ) : (
              (numericalAnswer) === question.correctAnswer ? (
                <p className="text-green-600 font-bold">Correct!</p>
              ) : (
                <p className="text-red-600 font-bold">Incorrect.</p>
              )
            )}
            <p className="mt-2">
              <span className="font-semibold">Correct Answer:</span>{" "}
              {question.correctAnswer}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Solution:</span>{" "}
              {question.solution}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionPage;
