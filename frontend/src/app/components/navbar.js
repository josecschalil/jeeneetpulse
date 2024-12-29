"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const Navbar = () => {
  const [username, setUsername] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to refresh the access token
  const refreshToken = async () => {
    try {
      const refresh = localStorage.getItem("refresh_token");
      if (!refresh) throw new Error("Refresh token not found");

      const response = await axios.post("http://127.0.0.1:8000/auth/token/refresh/", {
        refresh,
      });

      const { access } = response.data;
      localStorage.setItem("access_token", access); // Update the access token
      return access;
    } catch (error) {
      console.error("Failed to refresh token:", error);
      logout(); // Logout if refresh fails
    }
  };

  // Function to fetch the username
  const fetchUsername = async () => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) throw new Error("Access token not found");

      const response = await axios.get("http://127.0.0.1:8000/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsername(response.data.username);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Token might be expired, attempt to refresh it
        const newToken = await refreshToken();
        if (newToken) {
          // Retry fetching the username with the new token
          fetchUsername();
        }
      } else {
        console.error("Failed to fetch user data:", error);
      }
    }
  };

  // Logout function to clear tokens and redirect to sign-in
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setIsAuthenticated(false);
    setUsername(null);
    window.location.href = "/signin"; // Redirect to sign-in page
  };

  // Check if there's a token in localStorage and fetch username
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setIsAuthenticated(true);
      fetchUsername();
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <nav className="max-w-[1240px] mx-auto flex items-center font-jakarta justify-between bg-transparent py-6">
      {/* Logo on the left */}
      <div className="basis-auto hidden max1:flex">
        <img src="menu.png" className="h-[25px]" alt="Menu" />
      </div>

      <div className="flex basis-auto">
        <img src="logo.svg" className="h-[15px]" alt="Logo" />
      </div>

      {/* Centered links */}
      <div className="flex space-x-6 text-black max1:hidden">
        <Link href="/" passHref>
          <div className="hover:text-gray-400">Home</div>
        </Link>
        <Link href="/student-portal" passHref>
          <div className="hover:text-gray-400">Student Portal</div>
        </Link>
        <Link href="/courses" passHref>
          <div className="hover:text-gray-400">Courses</div>
        </Link>
        <Link href="/questions" passHref>
          <div className="hover:text-gray-400">Questions</div>
        </Link>
        <Link href="/featured" passHref>
          <div className="hover:text-gray-400">Featured</div>
        </Link>
        <Link href="/about" passHref>
          <div className="hover:text-gray-400">About</div>
        </Link>
        <Link href="/contact" passHref>
          <div className="hover:text-gray-400">Contact</div>
        </Link>
      </div>

      {/* Sign in and user profile icons on the right */}
      <div className="flex items-center space-x-4">
        {!isAuthenticated ? (
          <Link href="/signin" passHref>
            <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-700">
              Sign In
            </button>
          </Link>
        ) : (
          <div className="flex items-center space-x-4">
            <Link href="/profile" passHref>
              <div className="hover:text-gray-400 text-black">
                {username ? `Welcome ${username}` : "Profile"}
              </div>
            </Link>
            <button
              onClick={logout}
              className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
