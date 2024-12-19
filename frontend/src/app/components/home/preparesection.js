import React from "react";
import Link from "next/link";
const PrepareSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#009A80] to-[#FFF5EF] p-10 w-[100vw]">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl font-bold leading-tight text-black">
            prepare for your tests and entrance with us.
          </h1>
          <p className="text-gray-700 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend sed aenean eu odio
            non, sit eu. Ut tristique massa leo interdum venenatis amet feugiat netus.
          </p>
        </div>
        {/* Right Content */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: "Courses", icon: "📄", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", link:"/courses" },
            { title: "Practice Questions", icon: "❓", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", link:"/questions" },
            { title: "Test Series", icon: "📄", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", link:"/tests" },
            { title: "Playlists", icon: "🎵", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", link:"/videos" },
          ].map((item, idx) => (
           <Link key={idx} href={item.link}> <div
              
              className="bg-white shadow-md py-4 px-2 rounded-lg flex items-center gap-4 text-black "
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrepareSection;
