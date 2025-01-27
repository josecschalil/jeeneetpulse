import React from "react";
import Link from "next/link";
const StartLearning = () => {
  return (
    <section className="py-16 bg-white text-black text-center">
      <h2 className="text-3xl font-instSansB">Start Learning with Us</h2>

      <div className=" flex text-sm justify-center gap-4 font-jakarta">
        <div className="mt-6 flex justify-center lg:justify-start space-x-4">
          <a
            href="/courses"
            className="px-6 py-2  text-white bg-teal-500 rounded-xl hover:bg-teal-600"
          >
            View Our Plans
          </a>

          <a
            href="/signup"
            className="px-6   py-2 bg-none border-[1.44px] border-black rounded-xl "
          >
            Start Learning
          </a>
        </div>
      </div>
      <p className="text-gray-700 mt-6 px-4">
        Enroll to our courses before the slots fill out.
      </p>
    </section>
  );
};

export default StartLearning;
