"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";

const TestsPage = () => {
  const course_id=useParams();
  const userId = localStorage.getItem("user_id");
  const [exams, setExams] = useState([]);
  const [examMetadata, setExamMetadata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        console.log(course_id.courseId);
        const response = await axios.get(`http://127.0.0.1:8000/api/exams/?course_id=${course_id.courseId}`);
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
            is_submitted: examData ? examData.is_submitted : false,
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
      <main className="min-h-screen md:bg-gray-50 md:py-8 font-jakarta md:px-6">
        <section className="max-w-5xl mx-auto bg-white shadow-md rounded-xl  p-6">
          <h1 className="text-3xl font-bold text-gray-800 font-instSansB">Proctored Exams</h1>
          <div className="mt-6">
            {loading ? (
              <p>Loading exams...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              exams.map((exam) => {
               const metadata = examMetadata?.find((meta) => meta.examId === exam.exam_id) || {};
          return (
            <div
            key={exam.exam_id}
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
                <p className="text-sm text-gray-500 mt-1">{exam.exam_id}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {!metadata?.is_active && !metadata?.is_submitted ? (
                <Link href={`/tests/exam/${exam.exam_id}`}>
                  <button
                    onClick={() => handleStartTest(exam.exam_id)}
                    aria-label={`Start Mock Test ${exam.exam_id}`}
                    className="px-4 py-2 border border-teal-900 transition-all duration-100 rounded-full hover:bg-teal-800 hover:text-white text-sm"
                  >
                    Start Test
                  </button>
                </Link>
              ) : metadata?.is_submitted ? (
                <Link href={`/analysis/${exam.exam_id}`}>
                  <button
                    aria-label={`See Analysis of Mock Test ${exam.exam_id}`}
                    className="px-4 py-2 border border-teal-900 transition-all duration-100 rounded-full hover:bg-teal-800 hover:text-white text-sm"
                  >
                    See Analysis
                  </button>
                </Link>
              ) : (
                <Link href={`/tests/exam/${exam.exam_id}`}>
                  <button
                    onClick={() => handleResumeTest(exam.exam_id)}
                    aria-label={`Resume Mock Test ${exam.exam_id}`}
                    className="px-4 py-2 border border-teal-900 transition-all duration-100 rounded-full hover:bg-teal-800 hover:text-white text-sm"
                  >
                    Resume Test
                  </button>
                </Link>
              )}
              {/* <Modal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              exam={exam}
            /> */}
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
