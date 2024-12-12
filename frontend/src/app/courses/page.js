"use client";
import React, { useState } from "react";
import { courses } from "./data";

const CoursesPage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

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
              <button
                onClick={() => setSelectedCourse(course)}
                className="mt-4 bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700"
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {selectedCourse && (
          <div className="mt-10 bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold">{selectedCourse.title}</h3>
            <p className="mt-4 text-gray-600">{selectedCourse.description}</p>
            <p className="mt-2 text-gray-800 font-semibold">
              Price: ₹{selectedCourse.offerPrice}{" "}
              <span className="line-through text-gray-500">₹{selectedCourse.price}</span>{" "}
              ({selectedCourse.discount} off)
            </p>
            <div className="mt-4">
              <h4 className="text-xl font-semibold">Detailed Description:</h4>
              <ul className="mt-2 text-gray-600 space-y-2">
                <li>Watch Hours: {selectedCourse.detailedDescription.watchHours} hours</li>
                <li>Classes: {selectedCourse.detailedDescription.classes}</li>
                <li>Test Series: {selectedCourse.detailedDescription.testSeries}</li>
                <li>Videos: {selectedCourse.detailedDescription.videos}</li>
                <li>Portions Covered: {selectedCourse.detailedDescription.portionsCovered}</li>
              </ul>
            </div>
            <button
              onClick={() => setSelectedCourse(null)}
              className="mt-6 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
