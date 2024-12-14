import React from "react";
import Link from "next/link";
const FeaturedCourses = () => {
  return (
    <section className="bg-white py-10 text-black flex  max-w-[1300px]">
      <div className="max-w-6xl">
        <h2 className="text-3xl font-bold">Featured Courses and Study Materials</h2>
        <p className=" mt-2">
          Find the best test prep materials for your success.
        </p>
        <div className="mt-6 flex gap-4">
        <Link href="/courses"><button className="border-2 border-black px-6 py-2 rounded-lg">View All Courses</button></Link>
          <Link href="/study-materials"><button className="bg-black text-white px-6 py-2 rounded-lg">Study Materials</button></Link>
          
          
        </div>
        {/* <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"> */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {new Array(3).fill(null).map((_, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-4 rounded-lg shadow-md text-left"
            >
              <span className="bg-gray-300 text-xs px-2 py-1 rounded-md inline-block">
                Bestseller
              </span>
              <h3 className="font-bold text-lg mt-2">Mock Test Mastery</h3>
              <p className="text-gray-700 mt-1">4.9/5 Ratings</p>
              <p>✨ 📚</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
