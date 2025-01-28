"use client";
import React, { useEffect, useRef } from "react";
import Navbar from "../navbar";
import Link from "next/link";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);

  const heroData = {
    Offer: "Ace Your Exams with Confidence.",
    MainText: "Ace Your Exams with Confidence.",
    SubHeading: "Practice, Analyze, and Improve.",
    Description:
      "Track your progress with real-time analytics, practice custom tests, and stay ahead with exam-focused preparation. Join the revolution in online education today!",
  };

  useEffect(() => {
    gsap.timeline()
      .from(heroRef.current, { opacity: 0, y: 50, duration: 1.2, ease: "power3.out" })
  }, []);

  return (
    <div
      className="px-6 font-inter mx-auto hero-section relative"
      style={{ backgroundColor: "#EBFFF9" }}
      ref={heroRef}
    >
      <div className="hero-overlay w-full h-[80vh] sm:h-[92vh] flex flex-col items-center justify-center text-center">
        <div className="flex items-center mt-[10vh] mb-6 justify-between w-fit px-3 pr-2 py-2 border border-gray-600 rounded-full shadow-md hover:border-gray-900">
          <Link href="/signup" className="flex justify-between items-center gap-2">
            <p className="text-sm font-interi font-medium ">{heroData.SubHeading}</p>
            <div className="flex items-center justify-center w-6 h-6 bg-teal-900 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>

        <h1 ref={titleRef} className="px-4 text-5xl font-instSansB sm:text-6xl font-bold mb-6">
          {heroData.MainText}
        </h1>

        <p
          ref={descriptionRef}
          className="px-4 text-lg sm:text-xl font-inter font-semibold max-w-3xl mb-10 leading-relaxed"
        >
          {heroData.Description}
        </p>

        <div ref={buttonsRef} className="flex gap-6 px-6">
          <a
            href="/courses"
            className="border font-inter font-bold border-black px-6 sm:px-8 py-2 rounded text-sm sm:text-lg hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out"
          >
            Courses
          </a>
          <a
            href="/signin"
            className="bg-teal-700 font-bold font-inter hover:shadow-lg text-white px-6 sm:px-8 py-2 rounded text-sm sm:text-lg transition duration-300 ease-in-out hover:bg-teal-800"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
