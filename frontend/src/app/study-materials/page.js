import React from "react";
import StudyMaterialCard from "../components/studymaterialcard";

const StudyMaterialsPage = () => {
  // Mock data for study materials
  const studyMaterials = [
    {
      name: "Physics Basics",
      description: "Introduction to basic physics concepts.",
      contents: ["Laws of Motion", "Kinematics", "Work and Energy"],
    },
    {
      name: "Chemistry Fundamentals",
      description: "Core concepts in chemistry.",
      contents: ["Atomic Structure", "Periodic Table", "Chemical Bonding"],
    },
    {
      name: "Mathematics Essentials",
      description: "Key topics in mathematics.",
      contents: ["Algebra", "Trigonometry", "Calculus"],
    },
    {
      name: "Biology Primer",
      description: "Overview of biology concepts.",
      contents: ["Cell Structure", "Genetics", "Human Anatomy"],
    },
    {
      name: "Advanced Physics",
      description: "Dive into advanced topics in physics.",
      contents: ["Electrodynamics", "Thermodynamics", "Quantum Mechanics"],
    },
    {
      name: "Organic Chemistry",
      description: "Comprehensive guide to organic chemistry.",
      contents: ["Hydrocarbons", "Reaction Mechanisms", "Polymers"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-100 to-teal-500 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Study Materials
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studyMaterials.map((material, index) => (
            <StudyMaterialCard
              key={index}
              name={material.name}
              description={material.description}
              contents={material.contents}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyMaterialsPage;
