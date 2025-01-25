"use client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { questions } from "../../data";

const QuestionPage = () => {
  const { questionId } = useParams();
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(null);
  const [numericalAnswer, setNumericalAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const questionIndex = questions.findIndex((q) => q.id === questionId);
  const question = questions[questionIndex];

  if (!question) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
        <div className="p-6 bg-white shadow-lg">
          <h1 className="text-2xl font-bold text-red-500">
            Question not found.
          </h1>
        </div>
      </div>
    );
  }

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const navigateTo = (index) => {
    if (index >= 0 && index < questions.length) {
      setSubmitted(false);
      setSelectedOption(null);
      setNumericalAnswer("");
      router.push(`/questions/question/${questions[index].id}`);
    }
  };

  return (
    <div className="min-h-screen md:bg-gray-50 md:py-8 font-jakarta md:px-6">
      <main className="max-w-5xl mx-auto bg-white md:shadow-md md:rounded-2xl p-6">
     
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => router.push("/questions/chapter/chap1")} // Replace "/chapters" with the actual route to your chapter section
              className="px-2 py-1 rounded-lg border border-gray-400 text-black hover:bg-gray-400 flex items-center"
            >
              &lt;
            </button>
            <h1 className="text-2xl font-bold text-teal-900 uppercase">
              {question.id}.
            </h1>
          </div>
          <button
            onClick={handleBookmark}
            className={`py-2 px-4 rounded-lg ${
              bookmarked
                ? "bg-black text-white"
                : "border border-gray-400 text-black hover:bg-gray-400"
            } flex items-center`}
          >
            <FaBookmark className="mr-2" />
            {bookmarked ? "Bookmarked" : "Bookmark"}
          </button>
        </div>

        <div className="md:px-6 py-6">
          <p className="text-lg mb-6 text-justify font-medium text-gray-700">
            {question.text}
          </p>
          <form>
            {!question.isnum ? (
              <div className="grid grid-cols-2 gap-4">
                {["a", "b", "c", "d"].map((option) => (
                  <div key={option}>
                    <button
                      type="button"
                      disabled={submitted}
                      onClick={() => setSelectedOption(option)}
                      className={`w-full py-3 px-4 rounded-lg border border-gray-400 text-teal-900 hover:text-white font-semibold text-center ${
                        selectedOption === option
                          ? "bg-teal-900 text-white"
                          : " hover:bg-teal-800"
                      }`}
                    >
                      {question.options[option]}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mb-6">
                <label className="block mb-2 font-medium text-gray-700">
                  Enter your numerical answer:
                </label>
                <input
                  disabled={submitted}
                  type="number"
                  value={numericalAnswer}
                  onChange={(e) => setNumericalAnswer(e.target.value)}
                  className="form-input border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Type your answer"
                />
              </div>
            )}
          </form>
          {submitted && (
            <div className="mt-6 p-6 border border-black rounded-lg shadow">
              {!question.isnum ? (
                selectedOption === question.correctAnswer ? (
                  <p className="text-green-600 font-bold text-lg">Correct!</p>
                ) : (
                  <p className="text-red-600 font-bold text-lg">Incorrect.</p>
                )
              ) : Number(numericalAnswer) === question.correctAnswer ? (
                <p className="text-green-600 font-bold text-lg">Correct!</p>
              ) : (
                <p className="text-red-600 font-bold text-lg">Incorrect.</p>
              )}
              <p className="mt-4">
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
        <div className="flex items-center md:p-6 gap-5 justify-between ">
          <button
            onClick={() => navigateTo(questionIndex - 1)}
            disabled={questionIndex === 0}
            className="py-2 flex-1 px-4 border border-bg-gray-700 rounded-lg shadow hover:bg-gray-200 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            onClick={handleSubmit}
            className={`py-2 flex-1 px-4 rounded-lg shadow text-white ${
              submitted
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-teal-900 hover:bg-teal-800"
            }`}
          >
            Submit
          </button>
          <button
            onClick={() => navigateTo(questionIndex + 1)}
            disabled={questionIndex === questions.length - 1}
            className="py-2 flex-1 px-4 border border-bg-gray-700 rounded-lg shadow hover:bg-gray-200 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default QuestionPage;
