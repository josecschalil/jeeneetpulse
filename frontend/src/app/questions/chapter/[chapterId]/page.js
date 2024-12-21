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
    <div className="flex min-h-[100vh] bg-gray-200 font-semibold  flex-col-reverse font-jakarta md:flex-row flex-1 gap-4 p-4 ">
      {/* Sidebar Section */}
      <Sidebar />
      <main className="flex-1  p-8 rounded-3xl bg-white flex flex-col  shadow-md border-black font-serif">
        <div className="flex items-center gap-2">
          <button
            onClick={() => router.push("/questions/subject/physics_jee")} 
            className="px-2 py-1 rounded-lg border border-gray-400 text-black hover:bg-gray-400 flex items-center"
          >
            &lt;
          </button>
          <h1 className="text-2xl font-bold ml-2 text-teal-900">Questions</h1>
        </div>

        <ul className="mt-4 space-y-4 gap-3">
          {filteredQuestions.map((question, index) => (
            <Link href={`/questions/question/${question.id}`} key={question.id}>
              <li className="p-4  hover:shadow border-b-[1px] border-gray-300 cursor-pointer transition-all duration-300 ">
                {/* Question Number and Text */}
                <div className="flex justify-between gap-3 font-semibold items-center">
                  {index + 1}.
                  <span className="font-normal text-lg line-clamp-3 ">
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
