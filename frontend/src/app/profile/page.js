"use client";
import React, { useState } from "react";

import { courses } from "../student-portal/data";
import Link from "next/link";

// Sample user profile data
const userProfileData = {
  userDetails: {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  },
  examPreference: "JEE",
  statistics: {
    questionsSolved: 120,
    testsAttempted: 30,
    classesWatched: 15,
    examsCompleted: 10,
    lastWrittenExams: [
      { id: 1, title: "Physics - Motion and Laws of Motion" },
      { id: 2, title: "Chemistry - Thermodynamics" },
      { id: 3, title: "Mathematics - Differential Calculus" },
    ],
  },
  coursesEnrolled: [
    {
      id: 1,
      title: "2025 | Repeaters - JEE Advanced | Offline",
      chapters: 246,
      contents: 1161,
      progress: 7,
    },
    {
      id: 2,
      title: " Neet Package 2025 | Free",
      chapters: 226,
      chapters: 13,
      contents: 1,
      progress: 23,
    },

    {
      id: 3,
      title: " JEE Advance Package 2025 | Free",
      chapters: 226,
      chapters: 13,
      contents: 1,
      progress: 23,
    },
  ],
  bookmarkedQuestions: [
    { id: 1, question: "What is Newton's Second Law?" },
    { id: 2, question: "What is the atomic number of carbon?" },
  ],
};

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(userProfileData);

  // Handle user detail changes
  const handleFieldChange = (field, value) => {
    setProfileData((prevData) => ({
      ...prevData,
      userDetails: {
        ...prevData.userDetails,
        [field]: value,
      },
    }));
  };

  // Handle statistics change
  const handleStatsChange = (field, value) => {
    setProfileData((prevData) => ({
      ...prevData,
      statistics: {
        ...prevData.statistics,
        [field]: value,
      },
    }));
  };

  // Handle exam preference change
  const handleExamPreferenceChange = (value) => {
    setProfileData((prevData) => ({
      ...prevData,
      examPreference: value,
    }));
  };

  // Handle bookmarked question removal
  const handleRemoveBookmark = (id) => {
    setProfileData((prevData) => ({
      ...prevData,
      bookmarkedQuestions: prevData.bookmarkedQuestions.filter(
        (q) => q.id !== id
      ),
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 md:py-8 font-jakarta md:px-6">
      <div className="max-w-5xl mx-auto bg-white md:shadow-md md:rounded-2xl p-6">
        <h2 className="text-3xl font-bold text-gray-800">Profile</h2>
        <div className="mt-6 flex flex-col gap-6">
          {/* User Details Section */}
          <div className="">
            <h3 className="text-2xl font-semibold">User Details</h3>
            <div className="mt-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                value={profileData.userDetails.name}
                onChange={(e) => handleFieldChange("name", e.target.value)}
                className="mt-2 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={profileData.userDetails.email}
                onChange={(e) => handleFieldChange("email", e.target.value)}
                className="mt-2 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Phone</label>
              <input
                type="text"
                value={profileData.userDetails.phone}
                onChange={(e) => handleFieldChange("phone", e.target.value)}
                className="mt-2 p-2 w-full border rounded-md"
              />
            </div>
          </div>

          {/* Exam Preference Section */}
          <div className="">
            <h3 className="text-2xl font-semibold">Exam Preference</h3>
            <select
              value={profileData.examPreference}
              onChange={(e) => handleExamPreferenceChange(e.target.value)}
              className="mt-4 p-2 w-full border rounded-md"
            >
              <option value="JEE">JEE</option>
              <option value="NEET">NEET</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* <div className="flex justify-between">
  <div className="mt-4 ">
    <label className="block text-gray-700">Questions Solved</label>
    <div className="mt-2 p-2 w-full border rounded-md ">
      {profileData.statistics.questionsSolved}
    </div>
  </div>
  <div className="mt-4">
    <label className="block text-gray-700">Tests Attempted</label>
    <div className="mt-2 p-2 w-full border rounded-md ">
      {profileData.statistics.testsAttempted}
    </div>
  </div>
  <div className="mt-4">
    <label className="block text-gray-700">Classes Watched</label>
    <div className="mt-2 p-2 w-full border rounded-md ">
      {profileData.statistics.classesWatched}
    </div>
  </div>
  <div className="mt-4">
    <label className="block text-gray-700">Exams Completed</label>
    <div className="mt-2 p-2 w-full border rounded-md ">
      {profileData.statistics.examsCompleted}
    </div>
  </div>

</div> */}

          <div className="mt-4">
          

            {/* Last Written Exams Section */}
            <div className="mt-4">
            <h3 className="text-xl font-instSansB mb-6 ml-1">Last Written Exams</h3>
              {profileData.statistics.lastWrittenExams &&
              profileData.statistics.lastWrittenExams.length > 0 ? (
                profileData.statistics.lastWrittenExams.map((exam, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border hover:border-gray-500 font-instSansN hover:shadow transition-all duration-100 rounded-2xl mb-4"
                  >
                    {/* Exam Details */}
                    <div className="flex items-center space-x-4">
                      {/* Icon */}
                      <div className="h-10 w-10 bg-blue-100 flex items-center mr-3 justify-center rounded-full">
                        <span
                          role="img"
                          aria-label="exam-icon"
                          className="text-2xl"
                        >
                          📝
                        </span>
                      </div>
                      {/* Details */}
                      <div>
                        <h3 className="text-lg font-instSansB font-bold text-gray-800">
                          {exam.title}
                        </h3>
                      </div>
                    </div>

                    {/* Review Button */}
                    <div className="flex items-center space-x-4">
                      <Link href={`/exam-review/${exam.id}`}>
                        <button className="px-4 py-2 bg-teal-800 hover:bg-teal-900 text-white rounded-2xl text-sm">
                          Review
                        </button>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 mt-4">No recent exams found.</p>
              )}
            </div>
          </div>

          <div className="">
            <h3 className="text-xl font-instSansB mb-6 ml-1">Courses Enrolled</h3>
            {profileData.coursesEnrolled.length === 0 ? (
              <p className="text-gray-600 mt-4">No courses enrolled.</p>
            ) : (
              profileData.coursesEnrolled.map((course, index) => (
                <div
                  key={course.id}
                  className="flex items-center justify-between p-4 border font-instSansN hover:border-gray-500 hover:shadow transition-all duration-100 rounded-2xl mb-4"
                >
                  {/* Course Details */}
                  <div className="flex items-center space-x-4">
                    {/* Icon */}
                    <div className="h-10 w-10 bg-blue-100 flex items-center mr-3 justify-center rounded-full">
                      <span
                        role="img"
                        aria-label="course-icon"
                        className="text-2xl"
                      >
                        🎓
                      </span>
                    </div>
                    {/* Details */}
                    <div>
                      <h3 className="text-lg font-instSansB font-bold text-gray-800">
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
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
                    <Link href={`/student-portal/${course.id}`}>
                      <button className="px-4 py-2 bg-teal-800 hover:bg-teal-900 text-white rounded-2xl text-sm">
                        Contents
                      </button>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="">
            <h3 className="text-2xl font-semibold">Bookmarked Questions</h3>
            {profileData.bookmarkedQuestions.length === 0 ? (
              <p className="text-gray-600 mt-4">No bookmarked questions.</p>
            ) : (
              <ul className="mt-4">
                {profileData.bookmarkedQuestions.map((question) => (
                  <li
                    key={question.id}
                    className="flex justify-between items-center mb-4"
                  >
                    <span>{question.question}</span>
                    <button
                      onClick={() => handleRemoveBookmark(question.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
