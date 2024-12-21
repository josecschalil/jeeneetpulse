import React from "react";
import Link from "next/link";
import { exams } from "../../student-portal/data"; // Ensure this is correctly imported

const Exams = ({ id }) => {
  const courseId = Number(id);

  const filteredExams =
    exams?.filter((exam) => exam.courseId === courseId) || [];

  return (
    <div>
      {filteredExams.length > 0 ? (
        filteredExams.map((exam, index) => (
          <div
            key={exam.id || index} // Use exam.id if available, otherwise fallback to index
            className="flex  hover:border-gray-500 hover:shadow   transition-all duration-100 items-center justify-between p-4 border rounded-2xl mb-4"
          >
            {/* Course Details */}
            <div className="flex items-center space-x-4">
              {/* Icon */}
              <div className="h-10 w-10 bg-blue-100 flex items-center mr-3 justify-center rounded-full">
                <span role="img" aria-label="exam-icon" className="text-2xl">
                  🏆
                </span>
              </div>
              {/* Details */}
              <div>
                <h3 className="text-lg font-bold font-instSansB text-gray-800">
                  {exam.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                {exam.time}
                </p>
              </div>
            </div>

            {/* Progress and Button */}
            <div className="flex items-center space-x-4">
              <Link href={`/student-portal/${exam.id}`}>
                <button className="px-4 py-2 border border-teal-900 transition-all duration-100  rounded-full hover:bg-teal-800 hover:text-white text-sm">
                  Start
                </button>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No exams available for this course.</p>
      )}
    </div>
  );
};

export default Exams;
