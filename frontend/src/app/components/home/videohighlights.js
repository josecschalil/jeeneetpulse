import React from "react";
import VideoCard from "../videocard";

const VideoHighlights = () => {
  return (
    <section className=" pt-16 bg-transparent mb-24 font-instSansN max-w-6xl mx-auto px-6">
      <div className="flex flex-col items-center gap-4 ">
        <h2 className="text-4xl lg:text-[54px] text-center font-instSansB" style={{ color: "#009C84" }}>
          Video Classes featuring the finest tutors.
        </h2>
        
        <p className="mt-4 lg:text-xl font-instSansB font-bold max-w-[980px] text-center">
          Experience the best in online education with our video classes led by
          expert tutors. Dive deep into concepts, get your doubts cleared, and
          learn at your own pace from the comfort of your home.
        </p>
        <div className="mt-8 grid grid-cols-1  :px-16  sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          <VideoCard
            link="/1 (3).avif"
            url=""
            title="Quadratic Equations & Real Solutions"
            faculty="George Sir"
            time="34 mins"
          />
          <VideoCard
            link="/1 (2).avif"
            url=""
            title="Stucture of Atom - One Shot"
            faculty="Prathyush Sir"
            time="49 mins"
          />
          <VideoCard
          link="/1 (4).avif"
            url=""
            title="Dual Nature of Particles"
            faculty="Srinvasan Sir"
            time="34 mins"
          />
        </div>
      </div>
    </section>
  );
};
export default VideoHighlights;
