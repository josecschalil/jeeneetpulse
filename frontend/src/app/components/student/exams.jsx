import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import TestCreator from "./TestCreator";
import axios from "axios"; // Import axios
import Link from "next/link";
const Exams = ({ id }) => {
  const courseId = Number(id);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTestCreatorOpen, setIsTestCreatorOpen] = useState(false);
  const [exams, setExams] = useState([]); // State to hold exams data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for handling errors

  const handleStartClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const createtesttoggler = () => {
    setIsTestCreatorOpen(!isTestCreatorOpen);
  };

  // Fetch exams from API
  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/exams/"); // Change this URL as per your actual endpoint
        setExams(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch exams.");
        setLoading(false);
      }
    };

    fetchExams();
  }, []);



  return (
    <div className="relative">
      <div
        className={`flex  transition-all duration-100  items-center justify-between p-4 border border-gray-300  mb-4 ${
          isTestCreatorOpen
            ? "border-b-0 border-gray-500 rounded-t-2xl"
            : "rounded-2xl hover:shadow hover:border-gray-500 "
        }`}
      >
        <div className="flex items-center space-x-4">
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

      {isTestCreatorOpen && (
        <div className="modal-overlay relative">
          <div className="modal-content my-4 mb-8 bg-white border border-gray-500 border-t-0 p-4 rounded-b-2xl -mt-4 w-full">
            <TestCreator />
          </div>
        </div>
      )}

      {loading && <p>Loading exams...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Render filtered exams */}
      {exams.length > 0 ? (
        exams.map((exam, index) => (
          <div
            key={exam.id || index}
            className="flex hover:border-gray-500 hover:shadow transition-all duration-100 items-center justify-between p-4 border rounded-2xl mb-4"
          >
            <div className="flex items-center space-x-4">
       
              <div className="h-10 w-10 bg-blue-100 flex items-center mr-3 justify-center rounded-full">
                <span role="img" aria-label="exam-icon" className="text-2xl">
                  🏆
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold font-instSansB text-gray-800">
                  {exam.exam_title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{exam.time}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
            <Link href={`/tests/${exam.exam_id}`}>

              <button
                
                className="px-4 py-2 border border-teal-900 transition-all duration-100 rounded-full hover:bg-teal-800 hover:text-white text-sm"
              >
                Start
              </button>
              </Link>
              {/* <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                exam={exam}
              /> */}
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
