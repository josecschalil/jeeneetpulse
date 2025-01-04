"use client";
import React from "react";
import Link from "next/link";
import { courses } from "../student-portal/data";
const CourseList = () => {

  return (
    <div className="min-h-screen bg-gray-50 md:py-8 font-jakarta md:px-6">
      <div className="max-w-5xl mx-auto bg-white md:shadow-md md:rounded-2xl p-6">
        <div className="flex justify-between items-center mb-6 ">
          <h2 className="text-2xl font-bold text-gray-700 font-instSansB">
            My Courses
          </h2>
          <div className="flex items-center space-x-2">
            <label className="text-sm text-gray-600" htmlFor="sort">
              Sort By:
            </label>
            <select
              id="sort"
              className="border border-gray-300 rounded-md px-2 py-1 text-sm"
            >
              <option value="oldest">Oldest First</option>
              <option value="newest">Newest First</option>
              <option value="progress">Progress</option>
            </select>
          </div>
        </div>

        {courses.map((course, index) => (
    
    <Link key={index} href={`/student-portal/${course.id}`}>
            <div  className="flex  items-center justify-between p-4 border hover:border-gray-500 hover:shadow  transition-all duration-100  rounded-2xl  mb-4">
              {/* Course Details */}
              <div className="flex   items-center space-x-4">
                {/* Icon */}
                <div className="h-10 w-10 bg-blue-100 flex items-center mr-3 justify-center rounded-full">
                  <span
                    role="img"
                    aria-label="course-icon "
                    className="text-2xl"
                  >
                    🎓
                  </span>
                </div>
                {/* Details */}
                <div>
                  <h3 className="text-lg font font-bold font-instSansB text-gray-800">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 hidden sm:block">
                    {course.chapters} Chapters • {course.contents} Contents
                  </p>
                </div>
              </div>

              {/* Progress and Button */}
              <div className="flex items-center space-x-4">
                {/* Progress Bar */}
                <div className="hidden md:block w-32 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-teal-500 h-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <span className="hidden md:block text-sm text-gray-500">
                  {course.progress}% complete
                </span>
                
                <button className="max2:hidden px-4 py-2 bg-teal-800  hover:bg-teal-900 text-white rounded-2xl text-sm">
                  Contents
                </button>
         
              </div>
            </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
