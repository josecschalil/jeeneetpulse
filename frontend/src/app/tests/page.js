import React from "react";

const TestsPage = () => {
  const tests = [
    { id: 1, title: "Mock Test 1", date: "2024-12-15" },
    { id: 2, title: "Mock Test 2", date: "2024-12-22" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800">Tests</h2>
        <div className="mt-6">
          {tests.map((test) => (
            <div key={test.id} className="bg-white shadow-md p-4 rounded-lg my-4">
              <h3 className="text-xl font-semibold">{test.title}</h3>
              <p className="text-gray-600">Scheduled on: {test.date}</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                Start Test
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestsPage;
