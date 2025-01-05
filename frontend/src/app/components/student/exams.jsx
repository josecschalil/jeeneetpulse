import React, { useState } from "react";
import Modal from "./Modal"; // Ensure this is correctly imported
import TestCreator from "./TestCreator"; // Import the TestCreator component
import { exams } from "../../student-portal/data"; // Ensure this is correctly imported

const Exams = ({ id }) => {
  const courseId = Number(id);

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state for exam details
  const [isTestCreatorOpen, setIsTestCreatorOpen] = useState(false); // Modal state for TestCreator

  const handleStartClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Handle opening the TestCreator modal
  const createtesttoggler = () => {
    setIsTestCreatorOpen(!isTestCreatorOpen); // Open the TestCreator modal
  };

  const filteredExams =
    exams?.filter((exam) => exam.courseId === courseId) || [];

  return (
    <div className="relative pt-4">
      {/* Button for creating custom test */}
      <div className="flex hover:border-gray-500 hover:shadow transition-all duration-100 items-center justify-between p-4 border rounded-2xl mb-8 ">
        {/* Test Details */}
        <div className="flex items-center space-x-4">
          {/* Icon */}
          <div className="h-10 w-10 bg-none flex items-center justify-center rounded-full">
            <span role="img" aria-label="exam-icon" className="text-2xl">
              🛠️
            </span>
          </div>
          {/* Details */}
          <div>
            <h3 className="text-lg font-bold font-instSansB text-gray-800">
              Custom Tests
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Create and customize your own test sessions!
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={createtesttoggler}
            className="px-4 py-2 border border-teal-900 transition-all duration-100 rounded-full hover:bg-teal-800 hover:text-white text-sm"
          >
            Create
          </button>
        </div>
      </div>

      {/* TestCreator Modal */}
      {isTestCreatorOpen && (
        <div className="modal-overlay relative">
          <div className="modal-content my-4 mb-8 bg-white rounded-lg  w-full">
            <TestCreator />
          </div>
        </div>
      )}

      {filteredExams.length > 0 ? (
        filteredExams.map((exam, index) => (
          <div
            key={exam.id || index} // Use exam.id if available, otherwise fallback to index
            className="flex hover:border-gray-500 hover:shadow transition-all duration-100 items-center justify-between p-4 border rounded-2xl mb-4"
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
                <p className="text-sm text-gray-500 mt-1">{exam.time}</p>
              </div>
            </div>

            {/* Progress and Button */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handleStartClick}
                className="px-4 py-2 border border-teal-900 transition-all duration-100 rounded-full hover:bg-teal-800 hover:text-white text-sm"
              >
                Start
              </button>

              {/* Modal Component for Exam */}
              <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                exam={exam}
              />
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
