"use client";
import Link from "next/link";
import React, { useState } from "react";

const QuestionsPage = () => {
  const [examType, setExamType] = useState("jee");
  const [selectedSubject, setSelectedSubject] = useState("");

  const subjects = {
    iit: ["Physics", "Chemistry", "Mathematics"],
    jee: ["Physics", "Chemistry", "Mathematics"],
    neet: ["Physics", "Chemistry", "Biology"],
  };

  const questionsData = {
    Physics: ["What is Newton's second law?", "Explain the Doppler Effect."],
    Chemistry: ["What is the molecular weight of water?", "Define valency."],
    Mathematics: ["Solve x² - 5x + 6 = 0.", "Find the derivative of x³."],
    Biology: ["What is photosynthesis?", "Define the structure of DNA."],
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-100 to-teal-400 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center uppercase">
          Questions
        </h2>

        <div className="mt-6">
          <label
            htmlFor="examType"
            className="block text-sm font-medium text-gray-700"
          >
            Select Exam Type
          </label>
          <select
            id="examType"
            value={examType}
            onChange={(e) => {
              setExamType(e.target.value);
              setSelectedSubject("");
            }}
            className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="jee">JEE</option>
            <option value="iit">IIT JEE</option>
            <option value="neet">NEET</option>
          </select>
        </div>

        <div className="mt-6">
          {examType ? (
            <>
              <h3 className="text-lg font-semibold text-gray-700">
                {examType.toUpperCase()}
              </h3>
              <ul className="mt-4 flex gap-4 ">
                {subjects[examType]?.map((subject) => (
                  <Link href={`/questions/subject/${subject.toLowerCase()}_${examType.toLowerCase()}`} key={subject}>
                    <li className="p-4 bg-gray-100 rounded-lg shadow-sm text-gray-800 hover:bg-teal-300 transition-all duration-200">
                      {subject}
                    </li>
                  </Link>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-gray-600 mt-4">
              Please select a subject to view questions.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionsPage;
