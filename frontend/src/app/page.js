"use client";
import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/home/hero";
import Sections from "./components/sections";
import Features_1 from "./components/home/features_1";
import Features_2 from "./components/home/features_2";
import VideoHighlights from "./components/home/videohighlights";
import PrepareSection from "./components/home/preparesection";
import StartLearning from "./components/home/startlearning";
import FeaturedCourses from "./components/home/featuredcourses";
import SuccessStories from "./components/home/successstories";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center font-poppins w-[100vw] overflow-x-hidden ">
      <div className="w-screen" style={{ backgroundColor: "#EBFFF9" }}>
        <div></div>
        <Hero />
        <Sections />
        <VideoHighlights />
        <PrepareSection />
        {/* <Features_2 />
         */}
        {/* <FeaturedCourses /> */}
        <Features_1 />
        <SuccessStories />
        <StartLearning />
        <Footer/>
      </div>
    </div>
  );
}
