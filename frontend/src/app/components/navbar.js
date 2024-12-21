import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="max-w-[1240px] mx-auto flex items-center font-jakarta   justify-between bg-transparent py-6" >
      {/* Logo on the left */}
      <div className=" basis-auto hidden max1:flex">
        <img src="menu.png" className="h-[25px]"></img>
      </div>

      <div className="flex basis-auto">
        <img src="logo.svg" className="h-[15px]"></img>
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
          <div className="hover:text-gray-400">About</div>{" "}
        </Link>
        <Link href="/contact" passHref>
          <div className="hover:text-gray-400">Contact</div>
        </Link>
      </div>

      {/* Sign in and user profile icons on the right */}
      <div className="flex items-center space-x-4">
        <Link href="/signin" passHref>
          <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-700">
            Sign In
          </button>
        </Link>
        <Link href="/profile" passHref>
          <div className="hover:text-gray-400 text-black">Profile</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
