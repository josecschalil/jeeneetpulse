"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import { useParams } from "next/navigation";
import Link from "next/link";

const TestsPage = () => {
  const userId = localStorage.getItem("user_id");  // Assuming "user_id" is stored in localStorage
  const testId = "3"; // This can be dynamic depending on your route

  const [isactive, setIsactive] = useState(false);


  useEffect(() => {
    const fetchAllTestData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/exam-data/filter/?user=${userId}&exam_id=${testId}`
        );
        if (response.data && response.data.length > 0) {
          const examData = response.data[0];
          console.log(examData.is_active)
          setIsactive(examData.is_active); 
        }
        else{
          console.log("no data");
        }
      } catch (error) {
        console.error("Error fetching exam data:", error);
      }
    };

    if (userId && testId) {
      fetchAllTestData();
    }
  }, [userId, testId]); // Fetch when either userId or testId changes

  // Function to handle posting the payload when starting a test
  const handleStartTest = async () => {
    if (!userId || !testId) {
      console.error("Missing user_id or testId");
      return;
    }

    const payload = {
      exam_id: testId,
      current_question_index: 1,
      answers: {},
      visited: [],
      marked_for_review: [],
      time_remaining: 1800,
      is_timer_running: false,
      is_active: true,
      attempt_number: 1,
      user: userId,
      is_submitted:false
    };

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/exam-data/", payload);
      console.log("Test started successfully:", response.data);
    } catch (error) {
      console.error("Error starting the test:", error);
    }
  };

  // Function to handle resuming the test
  const handleResumeTest = () => {
    console.log("Resuming test...");
    // Implement logic to resume the test here, like navigating to the test page
  };

  return (
    <>
      <Head>
        <title>Mock Tests | Schedule & Analysis</title>
        <meta
          name="description"
          content="Prepare for exams with our mock tests. Check schedules, start tests, and analyze your performance."
        />
      </Head>
      <main className="min-h-screen bg-gray-100 py-10">
        <section className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800">Mock Tests</h1>
          <div className="mt-6">
            <article className="bg-white shadow p-4 rounded-lg my-4">
              <h2 className="text-xl font-semibold">Mock Test {testId}</h2>
              <p className="text-gray-600">Scheduled on: December 22, 2024</p>
              <div className="mt-4 flex space-x-4">
                {/* Conditional rendering based on isactive and isInitialized */}
                {!isactive ? (
                  <Link href={`/tests/${testId}`}>
                    <button
                      onClick={handleStartTest}
                      aria-label={`Start Mock Test ${testId}`}
                      className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                      Start Test
                    </button>
                  </Link>
                ) : isactive ? (
                  <Link href={`/tests/${testId}`}>
                  <button
                    onClick={handleResumeTest}
                    aria-label={`Resume Mock Test ${testId}`}
                    className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700"
                  >
                    Resume Test
                  </button>
                  </Link>
                ) : null}
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
};

export default TestsPage;
