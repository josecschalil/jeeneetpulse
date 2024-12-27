"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import Sidebar from "@/app/components/sidebar";
import { chapters, subjects } from "../../data";

const SubjectPage = () => {
  const { subjectId } = useParams(); // Dynamic subject ID from URL
  const [examType, setExamType] = useState(subjectId || "jee"); // Default examType fallback

  // Filter chapters for the current subject
  const filteredChapters = chapters.filter(
    (chapter) => chapter.subjectId === subjectId
  );
  const subject = subjects.find((subject) => subject.id === subjectId);
  if (!filteredChapters.length) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-bold text-gray-800">
        No chapters found for this subject.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 font-jakarta">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-6">
        
          <div className="w-[95%] mx-auto flex flex-col md:flex-row justify-between border-b items-center mb-6 ">
            <h2 className="text-4xl uppercase  px-3 rounded-xl  font-bold text-gray-700 font-instSansB ">
              {subject?.name}
            </h2>

            <Sidebar />
            </div>
        

        {/* Header: Course Title and Navbar */}
        <div className="flex justify-center gap-4  mb-6">
          <div className="w-[95%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-6 ">
            {filteredChapters.map((chapter) => (
              <Link key={chapter.id} href={`/questions/chapter/${chapter.id}`}>
                <div className="w-full  hover:border-gray-400 items-center justify-between pl-2 pr-4 py-3 border rounded-xl">
                  {/* Course Details */}
                  <div className="flex items-center space-x-4">
                    {/* Icon */}
                    <div className="h-10 w-10  flex items-center  justify-center rounded-full">
                      <span
                        role="img"
                        aria-label="course-icon"
                        className="text-2xl"
                      >
                        {chapter.icon}
                      </span>
                    </div>
                    {/* Details */}
                    <div>
                      <h3 className="text-md font-instSansB text-gray-800 ">
                        {chapter.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {chapter.videos} questions
                      </p>
                    </div>
                  </div>

                  {/* Progress and Button */}
                  <div className="flex items-center space-x-4"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectPage;
