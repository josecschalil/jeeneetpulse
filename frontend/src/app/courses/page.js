"use client";
import React, { useState } from "react";
import { FaBook, FaGraduationCap, FaMicroscope } from "react-icons/fa";

import { courses } from "./data";
import ProductCard from "../components/productCard";

const CoursesPage = () => {
  const [selected, setSelected] = useState("JEE");

  const categories = [
    { id: "JEE", name: "JEE",},
    { id: "IITJEE", name: "IIT JEE", },
    { id: "NEET", name: "NEET", },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      {/* Main Container */}
      <div className="max-w-[1240px] mx-auto px-4">
        {/* Page Title */}
        <div className="max-w-[1240px] mx-auto px-4">
          {/* Title */}
          <h2 className="text-5xl font-bold text-gray-800 uppercase mb-4">
            Courses
          </h2>

          {/* Categories */}
          <div className="flex items-center h-[24px] justify-start gap-6 font-istok font-bold ">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`flex items-center  gap-2 cursor-pointer   ${
                  selected === category.id ? "text-black" : "text-gray-600"
                }`}
                onClick={() => setSelected(category.id)}
              >
        
                <h1
                  className={`${ 
                    selected === category.id
                      ? "border-b-2  border-black "
                      : ""
                  } `}
                >
                  {category.name}
                </h1>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] mb-8  bg-gray-300"></div>
        </div>

        {/* Courses Grid */}
        <div className="flex flex-wrap gap-16 justify-center">
          {courses.map((course) => (
            <ProductCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
