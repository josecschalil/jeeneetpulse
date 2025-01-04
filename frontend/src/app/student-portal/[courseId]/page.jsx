"use client";
import React, { useState } from "react";
import {courses} from "../data"
import { useParams } from "next/navigation";
import Exams from "@/app/components/student/exams";
import StudyMaterials from "@/app/components/student/studym";
import PracticeQuestions from "@/app/components/student/questionsets";
import Classes from "@/app/components/student/classes";

const CoursePage = () => {
  const {courseId} =useParams();
 const id= parseInt(courseId);
  console.log(courseId)
  const [activeTab, setActiveTab] = useState("exams");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const course=courses.find(course => course.id === id);
  console.log(course)

  return (
    <div className="min-h-screen md:bg-gray-50 md:py-8 font-jakarta md:px-6">
      <div className="max-w-5xl mx-auto bg-white md:shadow-md md:rounded-2xl p-6">
        {/* Header: Course Title and Navbar */}
        <div className="flex flex-col gap-4  mb-6">
          {/* Course Title */}
          <h2 className="text-2xl font-bold text-gray-700 font-instSansB">
        {course.title}
          </h2>

          {/* Tabs */}
          <div className=" w-fit sm:w-full flex justify-between g-0 sm:gap-4 sm:justify-normal text-sm">
            {["exams", "questions", "classes", "materials"].map((tab) => (
              <button
                key={tab}
                className={`px-3 sm:px-4 py-1 sm:rounded-3xl bg-none sm:bg-gray-100 shadow-none sm:shadow ${
                  activeTab === tab
                    ? "bg-teal-900 sm:bg-teal-900 text-white rounded-full  border-black"
                    : "text-black border-black hover:sm-gray-100"
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
          {activeTab === "exams" && <Exams id={courseId} />}
          {activeTab === "questions" && <PracticeQuestions id={courseId}  />}
          {activeTab === "classes" && <Classes id={courseId}  />}
          {activeTab === "materials" && <StudyMaterials id={courseId}  />}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
