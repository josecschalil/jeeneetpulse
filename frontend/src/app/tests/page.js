"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const TestsPage = () => {
  const tests = [
    { id: 1, title: "Mock Test 1", date: "2024-12-15" },
    { id: 2, title: "Mock Test 2", date: "2024-12-22" },
    { id: 3, title: "Mock Test 3 - main guy", date: "2024-12-22" },
  ];

  const [completedTests, setCompletedTests] = useState({});

  useEffect(() => {
    // Check localStorage for test IDs
    const storedTests = {};
    tests.forEach((test) => {
      const savedData = localStorage.getItem(test.id);
      if (savedData) {
        storedTests[test.id] = true;
      }
    });
    setCompletedTests(storedTests);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800">Tests</h2>
        <div className="mt-6">
          {tests.map((test) => (
            <div key={test.id} className="bg-white shadow-md p-4 rounded-lg my-4">
              <h3 className="text-xl font-semibold">{test.title}</h3>
              <p className="text-gray-600">Scheduled on: {test.date}</p>
              <div className="mt-4 flex space-x-4">

  {!completedTests[test.id] &&(
    <>
     <Link href={`/tests/${test.id}`}>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                    Start Test
                  </button>
                </Link>
</>  )}
               
                {completedTests[test.id] && (
                  <>

                    <Link href={`/analysis/${test.id}`}>
                      <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
                        Analysis
                      </button>
                    </Link>


                    <Link href={`/tests/${test.id}`}>
                      <button className="bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700">
                        Retake Exam
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestsPage;
