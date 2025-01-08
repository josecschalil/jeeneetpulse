"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { videos,chapters } from "../../../student-portal/data";
import VideoCard2 from "@/app/components/videocard2";

const ChapterPage = () => {
  const { chapterId } = useParams(); // Use useParams to get the dynamic parameter

  const filteredvideos = videos.filter(
    (video) => video.chapterId === chapterId
  );

  const chapterTitle = chapters.find(
    (chapter) => chapter.id === chapterId
  )?.name;



  if (!filteredvideos.length) {
    return <div>No videos found for this chapter.</div>;
  }

  return (
    <div className="min-h-screen md:bg-gray-50 md:py-8 font-jakarta md:px-6">
      <div className="max-w-5xl mx-auto bg-white md:shadow-md md:rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-gray-700 font-instSansB mb-10 mt-3 ml-4 ">
          {chapterTitle}
        </h2>

        <ul className="mt-4 mx-4 grid max2:grid-cols-1 grid-cols-2 gap-4 md:grid-cols-3 md:gap-x-20 md:gap-y-10">
          {filteredvideos.map((video) => (
            <VideoCard2
              key={video.id}
              link={video.thumbnail}
              url={`/videos/video/${video.id}`}
              title={video.name}
              faculty={video.faculty}
              time={video.duration}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChapterPage;
