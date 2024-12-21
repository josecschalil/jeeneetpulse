"use client";
import React, { useState } from "react";
import ProductCard from "../components/productCard";
import { courses } from "./data";

const CoursesPage = () => {
  const [selected, setSelected] = useState("JEE");

  const categories = [
    { id: "JEE", name: "JEE" },
    { id: "IITJEE", name: "IIT JEE" },
    { id: "NEET", name: "NEET" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 font-poppins">
      {/* Main Container */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-6">
        {/* Page Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Courses</h2>

        {/* Categories */}
        {/* <div className="flex items-center gap-8 mb-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`cursor-pointer pb-1 ${
                selected === category.id
                  ? "text-black border-b-2 border-teal-600"
                  : "text-gray-600"
              }`}
              onClick={() => setSelected(category.id)}
            >
              <h1 className="text-lg font-medium">{category.name}</h1>
            </div>
          ))}
        </div> */}

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-300 mb-8"></div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {courses.map((course) => (
            <ProductCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
