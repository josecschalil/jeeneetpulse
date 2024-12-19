import React from "react";
import Link from "next/link";
const Classes = () => {
  const classes = [
    { title: "Calculus Basics", duration: "1h 20m" },
    { title: "Thermodynamics Intro", duration: "1h 10m" },
    { title: "Organic Chemistry Overview", duration: "50m" },
  ];

  const subjects = [
    { title: "Mathematics", videos: "43" ,icon:"➗" },
    { title: "Physics", videos: "36" ,icon:"🧲" },
    { title: "Chemistry", videos: "23", icon:"🧬" },
  ];

  return (
    <div>
      <div className="space-y-4">
        {subjects.map((subject, index ,) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border   mb-4"
          >
            {/* Course Details */}
            <div className="flex items-center space-x-4">
              {/* Icon */}
              <div className="h-10 w-10  flex items-center mr-3 justify-center rounded-full">
                <span role="img" aria-label="course-icon" className="text-2xl">
                  {subject.icon}
                </span>
              </div>
              {/* Details */}
              <div>
                <h3 className="text-lg font font-bold text-gray-800">
                  {subject.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {subject.videos} videos
                </p>
              </div>
            </div>

            {/* Progress and Button */}
            <div className="flex items-center space-x-4">
              <Link key={index} href={`/student-portal/`}>
              <button className="px-4  py-2 border  border-teal-900  bg-gray-100 shadow rounded-full hover:bg-teal-800 hover:text-white  text-sm">
              Contents
            </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
