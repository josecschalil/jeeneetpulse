import React from "react";

const StudyMaterialCard = ({ name, description, contents }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border">
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <ul className="list-disc mt-4 pl-5 text-gray-700">
        {contents.map((content, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudyMaterialCard;
