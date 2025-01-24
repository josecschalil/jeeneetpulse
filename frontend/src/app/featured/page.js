"use client";
import React, { useState } from "react";
import Exams from "@/app/components/student/exams";
import StudyMaterials from "@/app/components/student/studym";
import PracticeQuestions from "@/app/components/student/questionsets";
import Classes from "@/app/components/student/Contents";
import { courses } from "../student-portal/data";

const VideosPage = () => {
  const [examType, setExamType] = useState("jee");
  const [selectedSubject, setSelectedSubject] = useState("");


  const examTypeToCourseId = {
    jee: 4,
    iit: 3, 
    neet: 2, 
  };

  const courseId = examTypeToCourseId[examType];

  return (
    <div className="min-h-screen md:bg-gray-50 md:py-8 font-jakarta md:px-6">
      <div className="max-w-5xl mx-auto bg-white md:shadow-md md:rounded-2xl p-6">

        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-gray-700 mb-3 font-instSansB">
            Featured Videos and Practice Sets
          </h2>

          <div className="mb-4 hidden">
            <select
              id="examType"
              value={examType}
              onChange={(e) => {
                setExamType(e.target.value);
                setSelectedSubject("");
              }}
              className="w-full px-4 py-2 border rounded-2xl font-instSansB focus:outline-none"
            >
              <option value="jee">JEE</option>
              <option value="iit">IIT JEE</option>
              <option value="neet">NEET</option>
            </select>
          </div>
        </div>

        {examType && (
          <div>
            <h3 className="text-lg font-instSansB text-gray-700 my-4">
              Exams
            </h3>

            {/* Pass courseId to components */}
            <Exams id={courseId} />
            <h3 className="text-lg font-instSansB text-gray-700 mt-8 my-4">
              Question Sets
            </h3>
            <PracticeQuestions id={courseId} />
            <h3 className="text-lg font-instSansB text-gray-700 mt-8 my-4">
              Study Materials
            </h3>
            <StudyMaterials id={courseId} />
            <h3 className="text-lg font-instSansB text-gray-700 mt-8 my-4">
              Classes
            </h3>
            <Classes id={courseId} />
          </div>
        )}
      </div>
    </div>
  );
};

export default VideosPage;
