"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { videos } from "../../data";
import VideoCard from "@/app/components/videocard";

const ChapterPage = () => {
  const { chapterId } = useParams(); // Use useParams to get the dynamic parameter

  const filteredvideos = videos.filter(
    (video) => video.chapterId === chapterId
  );

  if (!filteredvideos.length) {
    return <div>No videos found for this chapter.</div>;
  }

  return (
    <div className="p-6 ">
      <h1 className="text-2xl font-bold">videos</h1>
      <ul className="mt-4  flex gap-6 justify-evenly">
        
        {filteredvideos.map((video) => (
       
             <VideoCard key={video.id}
            link={video.thumbnail}
            url={`/videos/video/${video.id}`}
            title={video.title}
            faculty={video.faculty}
            time={video.time}
          />
          
        ))}
      </ul>
    </div>
  );
};

export default ChapterPage;
