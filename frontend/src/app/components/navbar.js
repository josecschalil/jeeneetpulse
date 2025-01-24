"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [username, setUsername] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const refreshToken = async () => {
    try {
      const refresh = localStorage.getItem("refresh_token");
      if (!refresh) throw new Error("Refresh token not found");

      const response = await axios.post("http://127.0.0.1:8000/auth/token/refresh/", {
        refresh,
      });

      const { access } = response.data;
      localStorage.setItem("access_token", access);
      return access;
    } catch (error) {
      console.error("Failed to refresh token:", error);
      logout();
    }
  };

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
        const newToken = await refreshToken();
        if (newToken) {
          fetchUsername();
        }
      } else {
        console.error("Failed to fetch user data:", error);
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user_id");
    setIsAuthenticated(false);
    setUsername(null);
    window.location.href = "/signin";
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setIsAuthenticated(true);
      fetchUsername();
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  // Check if the current page is a /tests/{testid} page
  const isTestPage = pathname.startsWith("/tests/custom/exams/");

  if (isTestPage) return null; // Do not render Navbar on /tests/{testid} pages

  return (
    <nav
      className="font-jakarta justify-between py-6"
      style={{
        backgroundColor: pathname === "/" ? "#EBFFF9" : "#FFFFFF",
      }}
    >
      <div className="flex flex-row max-w-7xl px-3 pr-5 md:px-6 items-center justify-between mx-auto">
        <div className="basis-auto flex lg:hidden mr-4" onClick={() => setMenuOpen(!menuOpen)}>
          <img src="menu.png" className="h-[25px] " alt="Menu" />
        </div>

        <div className="flex">
          <img src="logo.svg" className="h-[15px] mr-1" alt="Logo" />
        </div>

        <div className="hidden space-x-6 text-black lg:flex">
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

        <div className="flex items-center space-x-4 font-semibold">
          {!isAuthenticated ? (
            <Link href="/signin" passHref>
              <button className="bg-black text-white py-2 px-4 text-sm rounded-full hover:bg-gray-700 ">
                Sign In
              </button>
            </Link>
          ) : (
            <div className="flex items-center space-x-4">
              <Link href="/profile" passHref>
                <div className="hover:text-gray-400 text-gray-900 font-jakarta">
                  {username ? `${username}` : "Profile"}
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
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 right-0 h-full w-2/3 sm:w-[40vw] bg-white shadow-lg z-50 flex flex-col space-y-6 p-8 transition-transform duration-300 transform">
          <div className="flex justify-end">
            <button onClick={() => setMenuOpen(false)} className="text-xl font-bold">
              &times;
            </button>
          </div>
          <Link href="/" passHref onClick={() => setMenuOpen(false)}>
            <div className="hover:text-gray-400">Home</div>
          </Link>
          <Link href="/student-portal" passHref onClick={() => setMenuOpen(false)}>
            <div className="hover:text-gray-400">Student Portal</div>
          </Link>
          <Link href="/courses" passHref onClick={() => setMenuOpen(false)}>
            <div className="hover:text-gray-400">Courses</div>
          </Link>
          <Link href="/questions" passHref onClick={() => setMenuOpen(false)}>
            <div className="hover:text-gray-400">Questions</div>
          </Link>
          <Link href="/featured" passHref onClick={() => setMenuOpen(false)}>
            <div className="hover:text-gray-400">Featured</div>
          </Link>
          <Link href="/about" passHref onClick={() => setMenuOpen(false)}>
            <div className="hover:text-gray-400">About</div>
          </Link>
          <Link href="/contact" passHref onClick={() => setMenuOpen(false)}>
            <div className="hover:text-gray-400">Contact</div>
          </Link>
          <Link href="/signin" passHref onClick={() => setMenuOpen(false)}>
            <div className="hover:text-gray-400">Sign In</div>
          </Link>
          <Link href="/signup" passHref onClick={() => setMenuOpen(false)}>
            <div className="hover:text-gray-400">Register</div>
          </Link>
          <Link href="/profile" passHref onClick={() => setMenuOpen(false)}>
            <div className="hover:text-gray-400">Profile</div>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
