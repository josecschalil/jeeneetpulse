import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-row container font-instSansN space-x-20 py-20 lg:flex lg:items-center lg:justify-between">
        <div className="text-center flex  flex-col justify-start lg:text-left">
          <div className="text-[68px] font-bold text-gray-800 max-w-[580px] leading-[80px]">
            one stop{" "}
            <span className="text-teal-500 font-istok font-normal ">
              Solution
            </span>{" "}
            for your entrance journey.
          </div>
          <p className="mt-4 text-[20px] font-bold max-w-[450px]">
            Navigate all your exams with ease and confidence, all in one spot.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start space-x-4">
            <a
              href="/courses"
              className="px-12 py-2 font-semibold text-white bg-teal-500 rounded-lg hover:bg-teal-600"
            >
              Courses
            </a>
            <a
              href="/signup"
              className="px-12 font-semibold  py-2 bg-none border-[1.44px] border-black rounded-lg hover:bg-teal-50"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <img
            src="/image.svg"
            alt="Student Studying"
            className="w-full max-w-[530px] max-h-[530px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
