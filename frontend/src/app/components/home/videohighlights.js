import React from "react";
import VideoCard from "../videocard";

const VideoHighlights = () => {
  return (
    <section className=" pt-16 bg-transparent mb-24 font-instSansN max-w-[1240px] mx-auto">
      <div className="flex flex-col items-center gap-4 ">
        <h2 className="text-[54px] font-instSansB" style={{ color: "#009C84" }}>
          Video Classes featuring the finest tutors.
        </h2>
        
        <p className="mt-2 text-[20px] font-instSansB font-bold max-w-[980px] text-center">
          Experience the best in online education with our video classes led by
          expert tutors. Dive deep into concepts, get your doubts cleared, and
          learn at your own pace from the comfort of your home.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <VideoCard
            link="/Options.svg"
            url=""
            title="Quadratic Equations & Real Solutions"
            faculty="George Sir"
            time="34 mins"
          />
          <VideoCard
            link="/Options.svg"
            url=""
            title="Stucture of Atom - One Shot"
            faculty="Prathyush Sir"
            time="49 mins"
          />
          <VideoCard
            link="/Options.svg"
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
