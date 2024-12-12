import React from "react";
import VideoCard from "./videocard";

const VideoHighlights = () => {
  return (
    <section className=" pt-7 bg-transparent pb-7">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-4xl font-bold text-gray-800">
          Video Classes featuring the finest tutors
        </h2>
        
        <p className="mt-2 text-lg text-gray-600 max-w-[980px] text-center">
          Experience the best in online education with our video classes led by
          expert tutors. Dive deep into concepts, get your doubts cleared, and
          learn at your own pace from the comfort of your home.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <VideoCard
            link="user.png"
            url=""
            title="Quadratic Equations & Real Solutions"
            faculty="Dr. Smith"
            time="34 mins"
          />
          <VideoCard
            link="user.png"
            url=""
            title="Quadratic Equations & Real Solutions"
            faculty="Dr. Smith"
            time="34 mins"
          />
          <VideoCard
            link="user.png"
            url=""
            title="Quadratic Equations & Real Solutions"
            faculty="Dr. Smith"
            time="34 mins"
          />
        </div>
      </div>
    </section>
  );
};
export default VideoHighlights;
