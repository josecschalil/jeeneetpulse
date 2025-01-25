import React from "react";
import Navbar from "../navbar";

const Hero = () => {
  return (
    <div>

      <div className=" mt-4 sm:mt-0 h-[100vh]  max-w-7xl mx-auto flex flex-row container font-instSansB justify-center space-x-20 px-6 pt-5 pb-10 lg:py-20 ">

        <div className="text-center flex  flex-col my-auto ">
          <div className="text-5xl md:text-[68px] font-bold text-gray-800  max-w-5xl leading-tight">
            one stop{" "}
            <span className="text-teal-500 font-istok font-normal ">
              Solution
            </span>{" "}
            for your entrance journey.
          </div>
          <p className="mt-6 px-3  mx-auto  text-[20px] font-semibold">
            Navigate all your exams with ease and confidence, all in one spot.
          </p>
          <div className="mt-8 flex justify-center  space-x-4">
            <a
              href="/courses"
              className="px-8 py-2 font-semibold text-white border border-teal-600 hover:border-gray-500 rounded-3xl bg-teal-600 transition-all duration-300 shadow-lg"
            >
              Courses
            </a>
            <a
              href="/signup"
              className="px-6 font-semibold  py-2 bg-none border-[1.44px] bg-gray-50 transition-all duration-300 shadow-md rounded-3xl hover:border-gray-400"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 hidden ">
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
