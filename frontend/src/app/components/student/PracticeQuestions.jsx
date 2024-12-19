import React from "react";
import Link from "next/link";

const PracticeQuestions = () => {
  const questions = [
    { title: "Integration Practice Set", total: 50 },
    { title: "Thermodynamics Worksheet", total: 30 },
    { title: "Design Basics Quiz", total: 20 },
  ];

  return (
    <div>
     <div className="space-y-4">
{questions.map((question, index) => (
  <div key={index} className="flex items-center justify-between p-4 border rounded-md  mb-4">
          {/* <div key={index} className="flex bg-gray-100  items-center justify-between p-4 rounded-xl border   mb-4"> */}
          {/* Course Details */}
          <div className="flex items-center space-x-4">
            {/* Icon */}
            <div className="h-10 w-10 bg-blue-100 flex items-center mr-3 justify-center rounded-full">
              <span
                role="img"
                aria-label="course-icon"
                className="text-2xl"
              >
               ❓
              </span>
            </div>
            {/* Details */}
            <div>
              <h3 className="text-lg font font-bold text-gray-800">
              {question.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
              {question.total}  questions
              </p>
            </div>
          </div>

          {/* Progress and Button */}
          <div className="flex items-center space-x-4">
        
            
           
            <Link key={index} href={`/student-portal/`}>
            <button className="px-4  py-2 border  border-teal-900  bg-gray-100 shadow rounded-full hover:bg-teal-800 hover:text-white  text-sm">
              Solve
            </button>
            </Link>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default PracticeQuestions;


