import React from "react";
import Navbar from "../navbar";
import Link from "next/link";

const Hero = () => {
  const heroData = {
    Offer: "Ace Your Exams with Confidence.",
    MainText: "Ace Your Exams with Confidence.",
    SubHeading: "Practice, Analyze, and Improve.",
    Description:
      "Track your progress with real-time analytics, practice custom tests, and stay ahead with exam-focused preparation. Join the revolution in online education today!",
  };

  return (
    <div
      className="mt-[5vh] sm:mt-0 max-w-7xl font-inter mx-auto hero-section relative "
    
    >

    
      <div className="hero-overlay   w-full h-fit md:h-[80vh] flex flex-col items-center justify-center text-center">

        <div className="flex items-center mt-1 mb-6 justify-between w-fit px-3 pr-2 py-2 border border-gray-600 rounded-full shadow-md hover:border-gray-900">
          <Link href="/signup" className="flex justify-between items-center gap-2">
            <p className="text-sm font-interi font-medium ">
            {heroData.SubHeading}
            </p>

            <div className="flex items-center justify-center w-6 h-6 bg-teal-900 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        </div>

        <h1 className="px-4 text-5xl font-instSansB sm:text-6xl font-bold  mb-6">
          {heroData.MainText}
        </h1>

        <p className="px-4 text-xl  font-inter font-semibold max-w-3xl mb-10 leading-relaxed">
          {heroData.Description}
        </p>

        <div className="flex gap-6 px-6 ">
          <a
            href="/schedule"
            className="bg-teal-800 font-bold   px-6 sm:px-8 py-4 text-sm sm:text-lg  transition"
          >
            Courses
          </a>
          <a
            href="/register"
            className="bg-orange-200 font-bold text-black px-6 sm:px-8 py-4  text-sm sm:text-lg  transition"
          >
            Get Started.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;