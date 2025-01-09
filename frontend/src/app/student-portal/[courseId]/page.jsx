"use client";
import React, { useState,useEffect } from "react";
import {courses} from "../data"
import Breadcrumb from "@/app/components/BreadCrumb";
import axios from "axios";
import { useParams } from "next/navigation";
import Exams from "@/app/components/student/exams";
import StudyMaterials from "@/app/components/student/studym";
import PracticeQuestions from "@/app/components/student/questionsets";
import Contents from "@/app/components/student/Contents";
import Link from "next/link";

const CoursePage = () => {
  const { courseId } = useParams();
  
  const [course, setCourse] = useState(null);
  const [activeTab, setActiveTab] = useState("Exams");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/courses/${courseId}`)  // Replace with your API endpoint
      .then((response) => {
        console.log("Course fetched:", response.data);
        setCourse(response.data);  // Set the course data into the state
      })
      .catch((error) => {
        console.error("Error fetching course:", error);
      });
  }, [courseId]);  // Re-run this effect when courseId changes

  if (!course) {
    return <div>Loading...</div>;  // Show a loading message until course data is fetched
  }

  return (
    <div className="min-h-screen md:bg-gray-50 md:py-8 font-jakarta md:px-6">
      <div className="max-w-5xl mx-auto bg-white md:shadow-md md:rounded-2xl p-6">
      <Breadcrumb />
       
        {/* Header: Course Title and Navbar */}
        <div className="flex flex-col gap-4  mb-6">
          {/* Course Title */}
          <div className="flex items-center">
            <Link href={"/student-portal"}> <div className="border w-fit h-fit px-2 pb-1 pt-[2px] rounded-lg hover:border-gray-500 mr-3">&lt;</div></Link>
         
          <h2 className="text-2xl font-bold text-gray-700 font-instSansB">
        {course.title}
          </h2>
          </div>
          

          {/* Tabs */}
          <div className=" w-fit sm:w-full flex justify-between g-0 sm:gap-4 sm:justify-normal text-sm">
            {["Exams", "Contents", "Recents"].map((tab) => (
              <button
                key={tab}
                className={`px-3 sm:px-4 py-1 sm:rounded-3xl bg-none sm:bg-gray-100 shadow-none sm:shadow ${
                  activeTab === tab
                    ? "bg-teal-900 sm:bg-teal-900 text-white rounded-full  border-black"
                    : "text-black border-black hover:sm-gray-100"
                }`}
                onClick={() => handleTabChange(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1).replace("questions", "Practice Questions")}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div>
          {activeTab === "Exams" && <Exams id={courseId} />}
          {/* {activeTab === "questions" &&  <PracticeQuestions id={courseId}  />} */}
          {activeTab === "Contents" && <Contents id={courseId}  />}
          {activeTab === "Recents" && <StudyMaterials id={courseId}  />}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
