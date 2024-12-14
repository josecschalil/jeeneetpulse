import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Sections from "./components/sections";
import Features_1 from "./components/features_1";
import Features_2 from "./components/features_2";
import VideoHighlights from "./components/videohighlights";
import Footer from "./components/footer";
import PrepareSection from "./components/preparesection";
import StartLearning from "./components/startlearning";
import FeaturedCourses from "./components/featuredcourses";
import SuccessStories from "./components/successstories";

export default function Home() {
  return (
    <div className="flex flex-col items-center font-poppins w-[100vw]  bg-slate-50">
      <div className="w-screen" style={{ backgroundColor: "#EBFFF9" }}>
        <div className="max-w-[1200px] mx-auto">
          <Navbar />
          <Hero />
        </div>
      </div>
      <div>
        <Sections />
      </div>
      <div >
        
      <VideoHighlights />
      <PrepareSection />
        <FeaturedCourses />
        <Features_2 />
        
        <SuccessStories />
        <Features_1 />
        <StartLearning />
        <Footer />
      </div>
    </div>
  );
}
