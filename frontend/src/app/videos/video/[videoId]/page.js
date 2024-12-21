"use client";
import { useParams } from "next/navigation";
import { videos } from "../../../student-portal/data";

const VideosPage = () => {
  const { videoId } = useParams(); // Use useParams to get the dynamic parameter

  const video = videos.find((q) => q.id === videoId);

  if (!video) {
    return <div>videos not found.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">videos Details</h1>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow">
        <p className="text-lg">{video.title}</p>
        <p className="text-sm">faculty:{video.faculty}</p>
        <p className="text-sm">duration:{video.time}</p>
      </div>
    </div>
  );
};

export default VideosPage;
