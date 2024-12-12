"use client";
import React, { useState } from "react";

const StudentPortal = () => {
  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle login submission
  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "student@example.com" && password === "password123") {
      setIsLoggedIn(true); // Set login state to true
    } else {
      alert("Invalid email or password. Try again!");
    }
  };

  // If logged in, display the student dashboard
  if (isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-100 to-blue-100">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Welcome to the Student Portal
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Here are your available options:
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dashboard Options */}
            <a
              href="/courses"
              className="block bg-teal-600 text-white text-center py-4 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300"
            >
              View Courses
            </a>
            <a
              href="/tests"
              className="block bg-blue-600 text-white text-center py-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Take Tests
            </a>
            <a
              href="/videos"
              className="block bg-purple-600 text-white text-center py-4 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
            >
              Watch Videos
            </a>
            <a
              href="/contact"
              className="block bg-yellow-600 text-white text-center py-4 rounded-lg shadow-lg hover:bg-yellow-700 transition duration-300"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Login form if the user is not logged in
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Student Login
        </h2>
        <p className="text-sm text-gray-600 text-center mt-2">
          Please login to access your portal.
        </p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentPortal;
