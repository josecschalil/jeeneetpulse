"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";

const TestsPage = () => {
  const userId = localStorage.getItem("user_id");
  const [exams, setExams] = useState([]);
  const [examMetadata, setExamMetadata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/exams/");
        console.log(response.data);
        setExams(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch exams.");
        setLoading(false);
      }
    };

    fetchExams();
  }, []);

  useEffect(() => {
    const fetchAllExamMetaData = async () => {
      if (!userId) return;

      try {
        const metadataPromises = exams.map((exam) =>
          axios.get(`http://127.0.0.1:8000/api/exam-data/filter/?user=${userId}&exam_id=${exam.exam_id}`)
        );

        const metadataResponses = await Promise.all(metadataPromises);

        const metadata = metadataResponses.map((response, index) => {
          const examData = response.data[0];
          return {
            examId: exams[index].exam_id,
            is_active: examData ? examData.is_active : false,
          };
        });

        setExamMetadata(metadata);
        console.log("Fetched Exam Metadata: ", metadata);

      } catch (error) {
        console.error("Error fetching exam metadata:", error);
      }
    };

    if (exams.length > 0) {
      fetchAllExamMetaData();
    }
  }, [exams, userId]);

  const handleStartTest = async (examId) => {
    if (!userId || !examId) {
      console.error("Missing user_id or examId");
      return;
    }

    const payload = {
      exam_id: examId,
      current_question_index: 1,
      answers: {},
      visited: [],
      marked_for_review: [],
      time_remaining: 1800,
      is_timer_running: false,
      is_active: true,
      attempt_number: 1,
      user: userId,
      is_submitted: false,
    };

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/exam-data/", payload);
      console.log("Test started successfully:", response.data);
    } catch (error) {
      console.error("Error starting the test:", error);
    }
  };

  const handleResumeTest = (examId) => {
    console.log(`Resuming test ${examId}...`);
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
            {loading ? (
              <p>Loading exams...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              exams.map((exam) => {
                const metadata = examMetadata.find((meta) => meta.examId === exam.exam_id);
                return (
                  <div key={exam.exam_id} className="bg-white shadow p-4 rounded-lg my-4">
                    <h2 className="text-xl font-semibold">{exam.exam_title} {exam.exam_id} </h2>
                    <div className="mt-4 flex space-x-4">
                      {!metadata?.is_active ? (
                        <Link href={`/tests/${exam.exam_id}`}>
                          <button
                            onClick={() => handleStartTest(exam.exam_id)}
                            aria-label={`Start Mock Test ${exam.exam_id}`}
                            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                          >
                            Start Test
                          </button>
                        </Link>
                      ) : (
                        <Link href={`/tests/${exam.exam_id}`}>
                          <button
                            onClick={() => handleResumeTest(exam.exam_id)}
                            aria-label={`Resume Mock Test ${exam.exam_id}`}
                            className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700"
                          >
                            Resume Test
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default TestsPage;
