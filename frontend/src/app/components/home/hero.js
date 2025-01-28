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
      className=" px-6 font-inter mx-auto hero-section relative "
      style={{
        backgroundColor:
        
           "#EBFFF9"
      }}
    
    >

    
      <div className="hero-overlay w-full h-[80vh] sm:h-[90vh] flex flex-col items-center justify-center text-center">

        <div className="flex items-center  mb-6 justify-between w-fit px-3 pr-2 py-2 border border-gray-600 rounded-full shadow-md hover:border-gray-900">
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

        <p className="px-4 text-lg sm:text-xl  font-inter font-semibold max-w-3xl mb-10 leading-relaxed">
          {heroData.Description}
        </p>

        <div className="flex gap-6 px-6 ">
          <a
            href="/courses"
            className="border font-inter font-bold  border-black  px-6 sm:px-8 py-2 rounded text-sm sm:text-lg  transition"
          >
            Courses
          </a>
          <a
            href="/signin"
            className="bg-teal-700 font-bold font-inter  hover:shadow-lg text-white px-6 sm:px-8 py-2 rounded text-sm sm:text-lg  transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;