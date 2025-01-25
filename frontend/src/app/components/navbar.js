"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useAuthentication from "@/hooks/useAuthentication";

const Navbar = () => {
  const pathname = usePathname();
  const { isAuthenticated, userDetails } = useAuthentication();
  console.log(isAuthenticated,userDetails)
  const [menuOpen, setMenuOpen] = useState(false);

  const user_id = localStorage.getItem("user_id");

  const isTestPage = pathname.startsWith("/tests/custom/exams/");

  if (isTestPage) return null; 

  return (
    <nav
      className="font-jakarta justify-between py-6"
      style={{
        backgroundColor: (pathname === "/" || pathname.startsWith("/verify-email") )? "#EBFFF9" : "#FFFFFF",
      }}
    >
      <div className="flex flex-row max-w-7xl px-3 pr-5 md:px-6 items-center justify-between mx-auto">
        <div
          className="basis-auto flex lg:hidden mr-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
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
          {/* <Link href="/questions" passHref>
            <div className="hover:text-gray-400">Questions</div>
          </Link> */}
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
              <Link href={`/profile/${user_id}`}>
                <div className="bg-black text-white py-2 px-4 text-sm rounded-full hover:bg-gray-700 ">
                  Profile
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 right-0 h-full w-2/3 sm:w-[40vw] bg-white shadow-lg z-50 flex flex-col space-y-6 p-8 transition-transform duration-300 transform">
          <div className="flex justify-end">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-xl font-bold"
            >
              &times;
            </button>
          </div>
          <Link href="/" passHref onClick={() => setMenuOpen(false)}>
            <div className="hover:text-gray-400">Home</div>
          </Link>
          <Link
            href="/student-portal"
            passHref
            onClick={() => setMenuOpen(false)}
          >
            <div className="hover:text-gray-400">Student Portal</div>
          </Link>
          <Link href="/courses" passHref onClick={() => setMenuOpen(false)}>
            <div className="hover:text-gray-400">Courses</div>
          </Link>
          {/* <Link href="/questions" passHref onClick={() => setMenuOpen(false)}>
            <div className="hover:text-gray-400">Questions</div>
          </Link> */}
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
