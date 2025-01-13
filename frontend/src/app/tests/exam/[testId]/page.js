"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
const TestPage = () => {
  const router = useRouter();
  const { testId } = useParams();
  const userId = localStorage.getItem("user_id");

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [visited, setVisited] = useState(new Set());
  const [markedForReview, setMarkedForReview] = useState(new Set());
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(1000);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);
  const [tableId, setTableId] = useState(null);
  const [Questions, setQuestions] = useState(null);

  // useEffect(() => {
  //   const fetchQuestions = async () => {
  //     try {
  //       const chapterResponse = await axios.get(
  //         `http://127.0.0.1:8000/api/exams/${testId}`
  //       );
  //       if (chapterResponse.data) {
  //         console.log("Chapter ID:", chapterResponse.data.chapter);
  //         const chapterId = chapterResponse.data.chapter;

  //         const questionsResponse = await axios.get(
  //           `http://127.0.0.1:8000/api/questions/chapter/${chapterId}`
  //         );
  //         if (questionsResponse.data) {
  //           console.log("Fetched Questions:", questionsResponse.data);
  //           setQuestions(questionsResponse.data);
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchQuestions();
  //}, [testId]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/questions/exam-id/${testId}`
        );

        if (response.data) {
          console.log("Fetched Questions:", response.data);
          setQuestions(response.data);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, [testId]);

  useEffect(() => {
    const fetchInstanceId = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/exam-data/filter/?user=${userId}&exam_id=${testId}`
        );
        if (response.data) {
          console.log(`sss$`);
          const fetchedId = response.data[0].id;
          setTableId(fetchedId);
        }
      } catch (error) {
        console.error("Error fetching exam data:", error);
      }
    };

    fetchInstanceId();
  }, [testId, userId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!tableId) return;

        const response = await axios.get(
          `http://127.0.0.1:8000/api/exam-data/${tableId}`
        );
        const data = response.data;
        console.log(data);

        if (data) {
          setCurrentQuestionIndex(data.current_question_index || 0);
          setAnswers(data.answers || {});
          setVisited(new Set(data.visited || []));
          setMarkedForReview(new Set(data.marked_for_review || []));
          setTimeRemaining(data.time_remaining || 1800);
          setIsSubmitted(data.is_submitted || false);
          setIsTimerRunning(data.is_timer_running || false);
        }
        setIsInitialized(true);
      } catch (error) {
        console.error("Error fetching exam data:", error);
      }
    };

    if (tableId) {
      fetchData();
    }
  }, [tableId]);

  useEffect(() => {
    if (isInitialized) {
      saveData();
    }
  }, [
    currentQuestionIndex,
    answers,
    visited,
    markedForReview,
    timeRemaining,
    isTimerRunning,
    testId,
    isInitialized,
    isSubmitted,
  ]);

  useEffect(() => {
    if (isInitialized && !isSubmitted) {
      const timer = setInterval(() => {
        setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isInitialized, isSubmitted]);

  const AttemptLater = () => {
    saveData();
    router.push("/tests");
  };

  const totalQuestions = Questions?.length;

  const handleAnswer = (option) => {
    setAnswers({ ...answers, [currentQuestionIndex]: option });
    setVisited(new Set([...visited, currentQuestionIndex]));
  };

  const saveData = async () => {
    const dataToSave = {
      current_question_index: currentQuestionIndex,
      answers,
      visited: Array.from(visited),
      marked_for_review: Array.from(markedForReview),
      time_remaining: timeRemaining,
      is_timer_running: isTimerRunning,
      is_submitted: isSubmitted,
    };

    try {
      const response = await axios.patch(
        `http://127.0.0.1:8000/api/exam-data/${tableId}/`,
        dataToSave
      );
      console.log("Data saved successfully:", response.data);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleSubmit = () => {
    const confirmSubmit = window.confirm(
      "Are you sure you want to submit the test?"
    );
    if (confirmSubmit) {
      setIsSubmitted(true);
      router.push(`/analysis/${testId}`);
      saveData();
    }
  };

  const TimerComponent = ({ timeRemaining }) => {
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
        2,
        "0"
      )}`;
    };

    return (
      <div className=" border border-black p-4 py-2 rounded-xl">
        {formatTime(timeRemaining)}
      </div>
    );
  };

  const calculateScore = () => {
    return Questions.filter(
      (question, index) => answers[index] === question.correct
    ).length;
  };

  const clearAnswer = () => {
    const updatedAnswers = { ...answers };
    delete updatedAnswers[currentQuestionIndex];
    setAnswers(updatedAnswers);
  };

  const goToQuestion = (index) => {
    setCurrentQuestionIndex(index);
    setVisited(new Set([...visited, index]));
  };

  const markForReview = () => {
    setMarkedForReview(new Set([...markedForReview, currentQuestionIndex]));
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const saveandNext = () => {
    if (!answers[currentQuestionIndex]) {
      alert("Please select an option to save the answer.");
    } else {
      nextQuestion();
    }
  };

  // Rendering
  return (
    <div className="h-screen">
      <header className="items-center font-instSansB flex justify-between text-2xl h-[10%] px-4">
        <div className="flex justify-start items-center">
          <button
            className="border p-4 py-2 rounded-xl border-black text-sm"
            onClick={AttemptLater}
          >
            Attempt Later
          </button>
        </div>

        <div className="flex justify-center items-center font-extrabold">
          <span>JEE Advanced AITS {testId}</span>
        </div>

        <div className="flex justify-end items-center text-sm ">
          <TimerComponent timeRemaining={timeRemaining} />
          <button
            className="border p-4 py-2 rounded-xl ml-4 border-black"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </header>

      <div className="flex justify-between bg-white border-t flex-col md:flex-row h-[90%] ">
        <div className="md:w-[70vw] flex flex-col">
          <div className="p-6 bg-white rounded-xl font-jakarta">
            <p className="text-lg mb-4">
              {currentQuestionIndex + 1}.{" "}
              {Questions?.[currentQuestionIndex]?.question_text}
            </p>

            {Questions?.[currentQuestionIndex]?.question_image && (
              <img
                src={Questions[currentQuestionIndex].question_image}
                alt="Question"
                className="w-full max-w-sm mb-4"
              />
            )}

            <div className="grid grid-cols-2 gap-3 w-[80%] mt-8">
              {["A", "B", "C", "D"].map((optionKey, index) => {
                const optionText =
                  Questions?.[currentQuestionIndex][
                    `option_${optionKey.toLowerCase()}_text`
                  ];
                const optionImage =
                  Questions?.[currentQuestionIndex][
                    `option_${optionKey.toLowerCase()}_image`
                  ];

                return (
                  <label
                    key={index}
                    className={`block p-2 px-4 py-4 rounded-xl transition cursor-pointer border ${
                      answers[currentQuestionIndex] === optionKey
                        ? "bg-blue-100 border-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${currentQuestionIndex}`}
                      checked={answers[currentQuestionIndex] === optionKey}
                      onChange={() => handleAnswer(optionKey)}
                      className="hidden"
                    />
                    {optionImage && (
                      <img
                        src={optionImage}
                        alt={`Option ${optionKey}`}
                        className="w-full max-w-sm mb-2"
                      />
                    )}
                    <span>{optionText}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="border-t flex p-2 px-6 mt-auto flex-row max1:flex-col">
            <div className="my-5 flex font-instSansB mx-auto gap-5 items-center ">
              <button
                onClick={saveandNext}
                className="px-4 py-2 h-fit text-white hover:border-black border    rounded-2xl   active:border-[2px] transition-all duration-300 bg-emerald-500"
              >
                Save and Next
              </button>

              <button
                onClick={clearAnswer}
                className="px-4 py-2 h-fit  text-white bg-red-500 hover:border-black   border  rounded-2xl    active:border-[2px] transition-all duration-300"
              >
                Clear
              </button>
              <button
                onClick={markForReview}
                className="px-4 py-2 h-fit  text-white bg-violet-500 hover:border-black border     rounded-2xl   active:border-[2px] transition-all duration-300"
              >
                Mark for Review and Next
              </button>

              <button
                onClick={prevQuestion}
                disabled={currentQuestionIndex === 0}
                className="px-4 py-2 text-black bg-gray-100 shadow h-fit   border border-gray-100 hover:border-gray-600 rounded-2xl tracking-wider disabled:text-gray-300 active:border-[2px] transition-all duration-300"
              >
                Previous
              </button>
              <button
                onClick={nextQuestion}
                disabled={currentQuestionIndex === totalQuestions - 1}
                className="px-7 py-2 text-black bg-gray-100 shadow h-fit  border border-gray-100 hover:border-gray-600 rounded-2xl tracking-wider disabled:text-gray-300 active:border-[2px] transition-all duration-300"
              >
                Next
              </button>
            </div>{" "}
          </div>
        </div>

        <div className="p-4 px-6 border-l md:w-[30vw]">
          <div className="bg-white rounded-md mb-5">
            <h3 className="text border-b py-2 mb-2">Legend</h3>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center">
                <div className="w-5 h-5 bg-gray-300 rounded mr-2"></div>
                <span>Not Visited</span>
              </div>

              <div className="flex items-center">
                <div className="w-5 h-5 bg-red-300 rounded mr-2"></div>
                <span>Visited</span>
              </div>

              <div className="flex items-center">
                <div className="w-5 h-5 bg-emerald-500 rounded mr-2"></div>
                <span>Answered</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-violet-300 rounded mr-2"></div>
                <span>Marked for Review</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-purple-700 rounded mr-2"></div>
                <span>Answered & Marked for Review</span>
              </div>
            </div>
          </div>
          {/* 
          {["Physics", "Chemistry", "Mathematics"].map((subject) => (
            <div key={subject} className="bg-white rounded-md mb-5">
              <div className="border-b mb-4 py-2">{subject}</div>
              <div className="flex flex-wrap gap-3  ">
                {Questions
                  .filter((question) => question.subject === subject)
                  .map((question, overallIndex) => {
                    const index = Questions.indexOf(question);
                    // Define background colors for buttons
                    let bgColor = "bg-gray-300"; // Default: Not Visited
                    if (visited.has(index)) bgColor = "bg-orange-300"; // Visited
                    if (answers[index]) bgColor = "bg-emerald-500"; // Answered
                    if (markedForReview.has(index)) bgColor = "bg-violet-300"; // Marked for Review

                    if (markedForReview.has(index) && answers[index])
                      bgColor = "bg-violet-500"; // Marked for Review

                    return (
                      <button
                        key={index}
                        className={`w-10 h-10 rounded-xl text-white font-instSansB font-semibold ${bgColor}`}
                        onClick={() => goToQuestion(index)}
                      >
                        {index + 1}
                      </button>
                    );
                  })}
              </div>
            </div>
          ))} */}

          {/*myr thattip code need to make it read*/}
          <div className="bg-white rounded-md mb-5">
            <div className="border-b mb-4 py-2">Questions</div>
            <div className="flex flex-wrap gap-3  ">
              {Questions?.map((question, overallIndex) => {
                const index = Questions.indexOf(question);
                // Define background colors for buttons
                let bgColor = "bg-gray-300"; // Default: Not Visited
                if (visited.has(index)) bgColor = "bg-orange-300"; // Visited
                if (answers[index]) bgColor = "bg-emerald-500"; // Answered
                if (markedForReview.has(index)) bgColor = "bg-violet-300"; // Marked for Review

                if (markedForReview.has(index) && answers[index])
                  bgColor = "bg-violet-500"; // Marked for Review

                return (
                  <button
                    key={index}
                    className={`w-10 h-10 rounded-xl text-white font-instSansB font-semibold ${bgColor}`}
                    onClick={() => goToQuestion(index)}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
