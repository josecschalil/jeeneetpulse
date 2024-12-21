import React, { useState } from "react";

const LastWatched = () => {
  // Sample data for tests and classes
  const courses = [
    "JEE Advanced 2025",
    "UCEED 2025",
    "JEE Mains 2025",
    "NEET 2025",
  ];

  const lastWatchedTests = [
    {
      title: "Mock Test 1",
      course: "JEE Advanced 2025",
      date: "2024-12-15",
    },
    {
      title: "Physics Practice Test",
      course: "UCEED 2025",
      date: "2024-12-14",
    },
    {
      title: "Math Diagnostic Test",
      course: "JEE Mains 2025",
      date: "2024-12-13",
    },
  ];

  const lastWatchedClasses = [
    {
      title: "Calculus Basics",
      course: "JEE Advanced 2025",
      date: "2024-12-15",
    },
    {
      title: "Thermodynamics Intro",
      course: "NEET 2025",
      date: "2024-12-14",
    },
    {
      title: "Design Fundamentals",
      course: "UCEED 2025",
      date: "2024-12-13",
    },
  ];

  const [selectedCourse, setSelectedCourse] = useState("All");

  const handleFilterChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const filteredTests = lastWatchedTests.filter(
    (test) =>
      selectedCourse === "All" || test.course === selectedCourse
  );

  const filteredClasses = lastWatchedClasses.filter(
    (cls) =>
      selectedCourse === "All" || cls.course === selectedCourse
  );

  return (

      <div className="mb-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
         
          <div className="flex items-center space-x-4">
            <label htmlFor="courseFilter" className="text-sm text-gray-600">
              Filter By Course:
            </label>
            <select
              id="courseFilter"
              className="border border-gray-300 rounded-md px-2 py-1 text-sm"
              value={selectedCourse}
              onChange={handleFilterChange}
            >
              <option value="All">All</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Last Watched Tests */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4 font-instSansB">
            Last Attempted Tests
          </h3>
          <div className="flex gap-4">
            {filteredTests.map((test, index) => (
              <div
                key={index}
                className="fl justify-between items-center p-4 border rounded-lg"
              >
                <div>
                  <h4 className="text-md font-semibold text-gray-800">
                    {test.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-2">
                    {test.course}
                  </p>
                </div>
                
              </div>
            ))}
            {filteredTests.length === 0 && (
              <p className="text-xs text-gray-500">No tests found.</p>
            )}
          </div>
        </div>

        {/* Last Watched Classes */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Last Watched Classes
          </h3>
          <div className="flex gap-4">
            {filteredClasses.map((cls, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 border rounded-lg"
              >
                <div>
                  <h4 className="text-md font-semibold text-gray-800">
                    {cls.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-2">
                  {cls.course}
                  </p>
                </div>
       
              </div>
            ))}
            {filteredClasses.length === 0 && (
              <p className="text-sm text-gray-500">No classes found.</p>
            )}
          </div>
        </div>
      </div>

  );
};

export default LastWatched;
