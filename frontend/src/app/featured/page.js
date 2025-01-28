"use client";
import React, { useState } from "react";
import StudyMaterials from "@/app/components/student/studym";
import FeaturedTests from "../components/student/Tests";
import PracticeQuestions from "@/app/components/student/questionsets";
import Classes from "@/app/components/student/Contents";
import featuredTests from "../components/student/Tests";

const FeaturedPage = () => {
  return (
    <div className="min-h-screen md:py-8 font-jakarta md:px-6">
      <div className="max-w-6xl mx-auto px-12 bg-white s p-6">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-gray-700 mb-3 font-instSansB">
            Featured Contents
          </h2>
          
        </div>
        <hr className="bg-black"></hr>
        <div>
          {/* <Exams id={courseId} /> */}
          {/* <PracticeQuestions id={courseId} /> */}
          <FeaturedTests/>
          <StudyMaterials/>
          <Classes />
        </div>
      </div>
    </div>
  );
};

export default FeaturedPage;
