"use client";
import React, { useState } from "react";
import { courses } from "./data";
import Link from "next/link";

const CoursesPage = () => {

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800">Courses</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-xl font-semibold">{course.title}</h3>
              <p className="mt-2 text-gray-600">{course.description}</p>
              <p className="mt-2 text-gray-800 font-semibold">
                Price: ₹{course.offerPrice}{" "}
                <span className="line-through text-gray-500">₹{course.price}</span>{" "}
                ({course.discount} off)
              </p>
              <Link href={`/courses/${course.id}`} key={course.id}>
              <button
           
                className="mt-4 bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700"
              >
                View Details
              </button>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CoursesPage;
