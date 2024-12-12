import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero= () => {
  return (
  <div>
<div className="container font-instSansN mx-auto  py-12 lg:flex lg:items-center lg:justify-between">
  <div className="text-center lg:text-left">
    <div className="text-[60px] font-bold text-gray-800 max-w-[540px] leading-[70px]">
      one stop <span className="text-teal-500">Solution</span> for your entrance journey.
    </div>
    <p className="mt-4 text-xl max-w-[430px] text-gray-600">
      Navigate all your exams with ease and confidence, all in one spot.
    </p>
    <div className="mt-6 flex justify-center lg:justify-start space-x-4">
      <a
        href="/courses"
        className="px-6 py-2 text-white bg-teal-500 rounded hover:bg-teal-600"
      >
        Courses
      </a>
      <a
        href="/signup"
        className="px-6 py-2 text-teal-500 border border-teal-500 rounded hover:bg-teal-50"
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
</div> );
};

export default Hero;