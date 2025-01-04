"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "../components/productCard";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  // Fetch courses from the Django API when the component mounts
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("http://localhost:8000/courses/");
      if (response.ok) {
        const data = await response.json();
        setCourses(data);  // Update the state with fetched courses
      } else {
        console.error("Failed to fetch courses");
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="max-w-7xl mx-auto bg-white py-8 font-poppins rounded-xl p-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Courses</h2>
      <div className="w-full h-[1px] bg-gray-300 mb-8"></div>

      <div className="grid max2:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {courses.map((course) => (
          <ProductCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
