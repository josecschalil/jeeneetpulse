"use client";
import Link from "next/link";
import React, { useState } from "react";

const VideosPage = () => {
  const [examType, setExamType] = useState("jee");
  const [selectedSubject, setSelectedSubject] = useState("");

  const subjects = {
    iit: ["Physics", "Chemistry", "Mathematics"],
    jee: ["Physics", "Chemistry", "Mathematics"],
    neet: ["Physics", "Chemistry", "Biology"],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 font-jakarta">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-6">
        {/* Page Header */}
        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center uppercase">
          Videos
        </h2>

        {/* Exam Type Selection */}
        <div className="mb-8">
          <label
            htmlFor="examType"
            className="block text-sm font-medium text-gray-700 mb-2"
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
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="jee">JEE</option>
            <option value="iit">IIT JEE</option>
            <option value="neet">NEET</option>
          </select>
        </div>

        {/* Subject List */}
        {examType && (
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              {examType.toUpperCase()} Subjects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {subjects[examType]?.map((subject, index) => (
                <Link
                  key={index}
                  href={`/videos/subject/${subject.toLowerCase()}_${examType.toLowerCase()}`}
                >
                  <div className="flex items-center justify-between pl-4 pr-4 py-3 border rounded-xl hover:border-gray-400 hover:bg-gray-100 transition-all duration-200">
                    <div className="flex items-center space-x-4">
                      {/* Icon */}
                      <div className="h-10 w-10 bg-teal-100 flex items-center justify-center rounded-full">
                        <span
                          role="img"
                          aria-label="subject-icon"
                          className="text-2xl"
                        >
                          📘
                        </span>
                      </div>
                      {/* Details */}
                      <h3 className="text-md font-instSansB text-gray-800">
                        {subject}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideosPage;
