"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import Sidebar from "@/app/components/sidebar";
import { chapters } from "../../data";

const SubjectPage = () => {
  const { subjectId } = useParams(); // Dynamic subject ID from URL
  const [examType, setExamType] = useState(subjectId || "jee"); // Default examType fallback

  // Filter chapters for the current subject
  const filteredChapters = chapters.filter((chapter) => chapter.subjectId === subjectId);

  if (!filteredChapters.length) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-bold text-gray-800">
        No chapters found for this subject.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-200 font-jakarta font-semibold">
     
      <div className="w-[100vw] h-[25vh] hidden md:flex items-center justify-between text-green-900">
    
        <div className="flex-1 h-[1px] bg-green-900 rounded-full"></div>

        <div className="flex items-center justify-center">
          <div className="text-center px-4">
          <p className="text-4xl max-w-[750px] font-instSansB">
            Master your exams with curated question banks and previous year questions.
          </p>
          </div>
        </div>

        <div className="flex-1 h-[1px] bg-green-900"></div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col-reverse md:flex-row flex-1 mx-4 gap-4 py-4">
        {/* Sidebar Section */}
        <Sidebar />
        {/* Main Content */}
        <main className="flex-1 p-8 bg-white flex flex-col rounded-3xl shadow-md border-black">
          {/* Chapters Section */}
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-gray-800 mb-4 font-instSansB">
              Chapters
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredChapters.map((chapter, index) => (
                <Link
                  href={`/questions/chapter/${chapter.id}`}
                  key={chapter.id}
                >
                  <div className="group hover:bg-gray-100 relative border-b-2 border-b-teal-900 bg-white p-6 rounded-lg shadow-md border-gray-300 border transition-all duration-100">
                    {/* Chapter Icon */}
                   
                    {/* Chapter Details */}
                    <h3 className="text-md font-bold text-gray-800 ">
                      {chapter.name}
                    </h3>
                    <p className="text-xs mt-1 font-bold text-gray-500 ">
                      23 questions
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SubjectPage;
