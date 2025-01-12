"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { tests } from "../data"; 
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const AnalysisPage = () => {
  const { testId } = useParams();
  const [testData, setTestData] = useState(null);
  const [expandedQuestions, setExpandedQuestions] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (testId) {
      const savedData = localStorage.getItem(testId);
      if (savedData) {
        setTestData(JSON.parse(savedData));
      }
    }
  }, [testId]);

  if (!testData) return <div>Loading...</div>;

  const testQuestions = tests[testId] || [];
  const { answers, markedForReview, visited, timeRemaining, isSubmitted } =
    testData;

  const totalQuestions = testQuestions.length;


const categorizedQuestions = testQuestions.map((question, index) => {
  const isCorrect = answers[index] === question.correct;
  const isAnswered = answers[index] !== undefined;
  const isMarkedForReview = markedForReview.includes(index);

  return {
    ...question,
    isCorrect,
    isAnswered,
    isMarkedForReview,
  };
});


const subjects = ["Physics", "Chemistry", "Mathematics"];
const subjectData = subjects.map((subject) => {
  const subjectQuestions = categorizedQuestions.filter(
    (question) => question.subject === subject
  );

  const correct = subjectQuestions.filter((q) => q.isCorrect).length;
  const answered = subjectQuestions.filter((q) => q.isAnswered).length;
  const review = subjectQuestions.filter((q) => q.isMarkedForReview).length;

  return {
    subject,
    total: subjectQuestions.length,
    correct,
    answered,
    review,
  };
});


  const totalCorrect = testQuestions.filter(
    (q, index) => answers[index] === q.correct
  ).length;

  const barData = {
    labels: subjects,
    datasets: [
      {
        label: "Correct Answers",
        data: subjectData.map((data) => data.correct),
        backgroundColor: "rgba(75, 192, 192, 0.8)",
      },
      {
        label: "Answered",
        data: subjectData.map((data) => data.answered),
        backgroundColor: "rgba(255, 159, 64, 0.8)",
      },
      {
        label: "Marked for Review",
        data: subjectData.map((data) => data.review),
        backgroundColor: "rgba(255, 99, 132, 0.8)",
      },
    ],
  };

  const toggleQuestionDetails = (index) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto font-jakarta">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Analysis of Test {testId}
        </h1>
        <button
          onClick={() => router.push("/tests")}
          className="border border-gray-600 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition"
        >
          Back to Tests
        </button>
      </header>

      {/* Summary */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">Summary</h2>
        <ul className="list-disc ml-6 text-lg">
          <li>Total Questions: {totalQuestions}</li>
          <li>Answered: {Object.keys(answers).length}</li>
          <li>Correct Answers: {totalCorrect}</li>
          <li>Marked for Review: {markedForReview.length}</li>
          <li>
            Time Remaining: {Math.floor(timeRemaining / 60)}m{" "}
            {timeRemaining % 60}s
          </li>
        </ul>
      </div>

      {/* Graph */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">
          Performance Graph
        </h2>
        <div className="w-full md:w-3/4">
          <Bar data={barData} options={{ responsive: true }} />
        </div>
      </div>

      {/* Subject-wise Analysis */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">
          Subject-wise Analysis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subjectData.map(({ subject, total, answered, correct, review }) => (
            <div
              key={subject}
              className="p-4 border border-gray-300 rounded-md bg-gray-50 shadow-md"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-2">{subject}</h3>
              <ul className="list-disc ml-4 text-gray-600">
                <li>Total Questions: {total}</li>
                <li>Answered: {answered}</li>
                <li>Correct: {correct}</li>
                <li>Marked for Review: {review}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Questions with Dropdown */}
      <div>
  <h2 className="text-2xl font-semibold mb-4 text-gray-700">
    Question-wise Analysis
  </h2>
  <div className="">
    {testQuestions.map((question, index) => {
      // Determine the status of each question
      const status =
        answers[index] === question.correct
          ? "correct" // Answer is correct
          : answers[index]
          ? "wrong" // Answer is wrong
          : "not-answered"; // Question is not answered

      // Map statuses to colors
      const borderColors = {
        correct: "border-green-600 bg-green-100", // Green for correct answers
        wrong: "border-red-600 bg-red-100", // Red for wrong answers
        "not-answered": "border-gray-600 bg-gray-50", // Gray for not answered
      };

      return (
        <div
          key={index}
          className={`border-b p-2 bg-opacity-90 hover:bg-opacity-100  ${
            borderColors[status]
          }`}
        >
          <div
            className="flex justify-between items-center cursor-pointer "
            onClick={() => toggleQuestionDetails(index)}
          >
            <span className="text-lg font-medium text-gray-800">
              {index+1}. {question.question}
            </span>
            <span className="text-xl text-gray-600">
              {expandedQuestions[index] ? "-" : "+"}
            </span>
          </div>
          {expandedQuestions[index] && (
            <div className="mt-4 text-gray-700">
              <p>
                <strong>Selected Answer:</strong>{" "}
                {answers[index] || "Not Answered"}
              </p>
              <p>
                <strong>Correct Answer:</strong> {question.correct}
              </p>
              <p>
                <strong>Status:</strong> {status.replace("-", " ")}
              </p>
            </div>
          )}
        </div>
      );
    })}
  </div>
</div>

    </div>
  );
};

export default AnalysisPage;
