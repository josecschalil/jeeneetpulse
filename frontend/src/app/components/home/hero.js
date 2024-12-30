import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto flex flex-row container font-jakarta justify-center space-x-20 px-6 pt-5 pb-10 lg:py-20 lg:flex lg:items-center lg:justify-between">
        <div className="text-center flex  flex-col justify-start lg:text-left">
          <div className="text-5xl md:text-[68px] font-bold text-gray-800 md:max-w-[580px]">
            one stop{" "}
            <span className="text-teal-500 font-istok font-normal ">
              Solution
            </span>{" "}
            for your entrance journey.
          </div>
          <p className="mt-6 px-3 md:px-0  mx-auto lg:mx-0 text-[20px] font-semibold max-w-[500px]">
            Navigate all your exams with ease and confidence, all in one spot.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start space-x-4">
            <a
              href="/courses"
              className="px-8 py-2 font-semibold text-white bg-teal-500 rounded-3xl hover:bg-teal-600"
            >
              Courses
            </a>
            <a
              href="/signup"
              className="px-6 font-semibold  py-2 bg-none border-[1.44px] border-black rounded-3xl hover:bg-teal-50"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 hidden lg:block">
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
