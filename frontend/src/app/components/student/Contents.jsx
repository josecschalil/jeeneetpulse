import React, { useState, useEffect } from "react";
import Link from "next/link";
const Contents = ( courseId) => {
  const [subjects, setSubjects] = useState(null);

  useEffect(() => {
    if (!courseId) {
      console.error("courseId is undefined!");
      return;
    }

    const fetchSubjects = async () => {
      const response = await fetch(`http://localhost:8000/api/subjects/?course_id=${courseId?.id}`);
      
      if (response.ok) {
        const data = await response.json();
        setSubjects(data); 
      } else {
        console.error("Failed to fetch subjects");
      }
    };

    fetchSubjects(); 
  }, [courseId]); 



  return (
    <div>
      <div className="space-y-4">
        {subjects?.map((subject, index) => (
          <div key={index} className="flex items-center justify-between p-4 border hover:border-gray-500 hover:shadow rounded-2xl mb-4">
            {/* Course Details */}
            <div className="flex items-center space-x-4">
              {/* Icon */}
              <div className="h-10 w-10 flex items-center mr-3 justify-center rounded-full">
                <span role="img" aria-label="course-icon" className="text-2xl">
                  {subject.icon}
                </span>
              </div>
              {/* Details */}
              <div>
                <h3 className="text-lg font-instSansB font-bold text-gray-800">
                  {subject.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {subject.chapters} Chapters
                </p>
              </div>
            </div>

            {/* Progress and Button */}
            <div className="flex items-center space-x-4">
              <Link href={`http://localhost:3000/learn/chapters/${subject.id}`}>
                <button className="px-4 py-2 border border-teal-900 shadow rounded-full hover:bg-teal-800 hover:text-white text-sm">
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

export default Contents;
