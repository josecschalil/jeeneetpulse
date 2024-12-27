"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { questions } from "../../data";
import Sidebar from "@/app/components/sidebar";
import React, { useState } from "react";

const ChapterPage = () => {
  const router = useRouter();
  const { chapterId } = useParams(); // Use useParams to get the dynamic parameter

  const filteredQuestions = questions.filter(
    (question) => question.chapterId === chapterId
  );

  if (!filteredQuestions.length) {
    return <div>No questions found for this chapter.</div>;
  }

  return (
    <div className="flex min-h-[100vh] p-8 bg-gray-50 font-semibold  flex-col-reverse font-jakarta md:flex-row flex-1 gap-4  ">
      {/* Sidebar Section */}

      <main className="flex-1   max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-6  flex flex-col  border-black ">
        <div className="w-[95%] mx-auto flex flex-col md:flex-row  border-b items-center mb-6 ">
          <button
            onClick={() => router.push("/questions/subject/physics_jee")}
            className="px-2 py-1 rounded-lg border border-gray-200 text-black hover:shadow flex items-center"
          >
            &lt;
          </button>
          <h2 className="text-4xl uppercase  px-3 rounded-xl  font-bold text-gray-700 font-instSansB ">
            Questions
          </h2>
<div className="ml-auto"> <Sidebar /></div>
         
        </div>

        <ul className="mt-4 flex flex-col space-y-3 px-6">
          {filteredQuestions.map((question, index) => (
            <Link  href={`/questions/question/${question.id}`} key={question.id}>
              <li className="p-6  hover:border-black border-b   border-gray-300 cursor-pointer transition-all duration-300 ">
                {/* Question Number and Text */}
                <div className="flex justify-between gap-3 font-semibold items-center">
                  {index + 1}.
                  <span className="font-normal text-md line-clamp-2 ">
                    {question.text}
                  </span>
                  {/* Difficulty Level */}
                  <span
                    className={`text-sm px-2 py-1 rounded ${
                      question.difficulty === "Easy"
                        ? "bg-green-200 text-green-800"
                        : question.difficulty === "Medium"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {question.difficulty}
                  </span>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default ChapterPage;
