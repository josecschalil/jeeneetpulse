import React from "react";
import Link from "next/link";

const Exams = () => {
  const exams = [
    { title: "JEE Adv Mock Test 1 ", date: "2024-12-15" ,time:"65mins"},
    { title: "JEE Adv Physics Year 1", date: "2024-12-14",time:"125mins" },
    { title: "JEE AITS Math Test", date: "2024-12-13",time:"65mins" },
    { title: "JEE AITS Physics Year 2 ", date: "2024-12-16",time:"125mins" },
  ];

  return (
    <div>
   
      <div className="space-y-4">
        {exams.map((exam, index) => (
          <div key={index} className="flex items-center justify-between p-4 border   mb-4">
          {/* Course Details */}
          <div className="flex items-center space-x-4">
            {/* Icon */}
            <div className="h-10 w-10 bg-blue-100 flex items-center mr-3 justify-center rounded-full">
              <span
                role="img"
                aria-label="course-icon"
                className="text-2xl"
              >
                🏆
              </span>
            </div>
            {/* Details */}
            <div>
              <h3 className="text-lg font font-bold text-gray-800">
                {exam.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                {exam.date} •  {exam.time} 
              </p>
            </div>
          </div>

          {/* Progress and Button */}
          <div className="flex items-center space-x-4">
        
            
           
            <Link key={index} href={`/student-portal/`}>
            <button className="px-4  py-2 border  border-teal-900  bg-gray-100 shadow rounded-full hover:bg-teal-800 hover:text-white  text-sm">
              Start
            </button>
            </Link>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Exams;
