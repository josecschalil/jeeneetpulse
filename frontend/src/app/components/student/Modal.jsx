// Modal.js
import Link from "next/link";
import React from "react";

const Modal = ({ isOpen, onClose, exam }) => {
  if (!isOpen) return null;

  return (
    <div className="inset-0 ml-0 flex items-center justify-center bg-black bg-opacity-5 absolute left-0 ">
      <div className="bg-white p-6 rounded-lg max-w-sm w-full border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">Start the Exam</h3>
        <p className="mb-4">Are you sure you want to start the exam?</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-sm rounded-lg"
          >
            Cancel
          </button>
          <Link href={`/tests/${exam.id}`}>

          <button
            
            className="px-4 py-2 bg-teal-600 text-white text-sm rounded-lg"
          >
            Start Exam
          </button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default Modal;
