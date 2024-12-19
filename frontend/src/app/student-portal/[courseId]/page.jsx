"use client";
import React, { useState } from "react";

import Exams from "@/app/components/student/exams";
import StudyMaterials from "@/app/components/student/studym";
import PracticeQuestions from "@/app/components/student/PracticeQuestions";
import Classes from "@/app/components/student/classes";

const CoursePage = () => {
  const [activeTab, setActiveTab] = useState("exams");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 font-jakarta">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-6">
        {/* Header: Course Title and Navbar */}
        <div className="flex flex-col gap-4  mb-6">
          {/* Course Title */}
          <h2 className="text-2xl font-bold text-gray-700 font-instSansB">
          2025 | Repeaters - JEE Advanced | Offline
          </h2>

          {/* Tabs */}
          <div className="flex space-x-4 text-sm">
            {["exams", "questions", "classes", "materials"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-1 rounded-3xl bg-gray-100 shadow ${
                  activeTab === tab
                    ? "bg-teal-900 text-white border-black"
                    : "text-black border-black hover:bg-gray-100"
                }`}
                onClick={() => handleTabChange(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1).replace("questions", "Practice Questions")}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div>
          {activeTab === "exams" && <Exams />}
          {activeTab === "questions" && <PracticeQuestions />}
          {activeTab === "classes" && <Classes />}
          {activeTab === "materials" && <StudyMaterials />}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
