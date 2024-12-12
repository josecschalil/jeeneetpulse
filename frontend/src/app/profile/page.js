"use client";
import React, { useState } from "react";

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
  },
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
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800">Profile - dummy page /</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* User Details Section */}
          <div className="bg-white shadow-lg rounded-lg p-4">
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
          <div className="bg-white shadow-lg rounded-lg p-4">
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

          {/* Statistics Section */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-2xl font-semibold">Statistics</h3>
            <div className="mt-4">
              <label className="block text-gray-700">Questions Solved</label>
              <input
                type="number"
                value={profileData.statistics.questionsSolved}
                onChange={(e) =>
                  handleStatsChange("questionsSolved", e.target.value)
                }
                className="mt-2 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Tests Attempted</label>
              <input
                type="number"
                value={profileData.statistics.testsAttempted}
                onChange={(e) =>
                  handleStatsChange("testsAttempted", e.target.value)
                }
                className="mt-2 p-2 w-full border rounded-md"
              />
            </div>
          </div>

          {/* Bookmarked Questions Section */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-2xl font-semibold">Bookmarked Questions</h3>
            {profileData.bookmarkedQuestions.length === 0 ? (
              <p className="text-gray-600 mt-4">No bookmarked questions.</p>
            ) : (
              <ul className="mt-4">
                {profileData.bookmarkedQuestions.map((question) => (
                  <li key={question.id} className="flex justify-between items-center mb-4">
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
