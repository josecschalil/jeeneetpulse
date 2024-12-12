import React from "react";
import Link from "next/link";
const StartLearning = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-teal-500 to-green-100 text-black text-center">
      <h2 className="text-3xl font-bold">Start Learning with Us</h2>
      <p className="text-gray-700 mt-2">
        Enroll to our courses before the slots fill out.
      </p>
      <div className="mt-6 flex justify-center gap-4">
      <Link href="/courses">
        <button className="border-2 border-black px-6 py-2 rounded-lg">View our Plans</button>
        </Link>
        <Link href="/questions">
        <button className="bg-black text-white px-6 py-2 rounded-lg">
          Start Learning
        </button>
        </Link>
      </div>
    </section>
  );
};

export default StartLearning;
