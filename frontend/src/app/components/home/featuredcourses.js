import React from "react";
import Link from "next/link";
const FeaturedCourses = () => {

  const cardDatas = [
    {
      label: "Bestseller",
      title: "Mock Test Mastery",
      rating: "4.9/5 Ratings",
      icons: "✨ 📚",
    },
    {
      label: "Top Rated",
      title: "Concept Clarity Course",
      rating: "4.8/5 Ratings",
      icons: "🧠 📖",
    },
    {
      label: "New Launch",
      title: "Advanced Practice Pack",
      rating: "5.0/5 Ratings",
      icons: "🚀 🎯",
    },
  ];
  



  return (
    <section className="bg-none py-10 text-black flex flex-col max-w-[1240px] mx-auto">
      <div className="">
        <h2 className="text-3xl font-bold">Featured Courses and Study Materials</h2>
        <p className=" mt-3">
          Find the best test prep materials for your success.
        </p>
        <div className="mt-8 flex gap-4">
        <Link href="/courses"><button className="px-12 py-2  text-white bg-teal-500 rounded-lg hover:bg-teal-600">View All Courses</button></Link>
          <Link href="/study-materials"><button  className="px-12   py-2 bg-none border-[1.44px] border-black rounded-lg ">Study Materials</button></Link>
         </div>
        </div>
        <img className="absolute -z-10 -left-[100px] top-[270vh]"src="/ve.png"></img>
        <div>
        {/* <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"> */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardDatas.map((data) => (
            <div
              key={data.title}
              className="bg-gray-100 p-4 rounded-lg shadow-md text-left"
            >
              <span className="bg-gray-300 text-xs px-2 py-1 rounded-md inline-block">
                {data.label}
              </span>
              <h3 className="font-bold text-lg mt-2">{data.title}</h3>
              <p className="text-gray-700 mt-1">{data.rating}</p>
              <p>{data.icons}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
