"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const VideosPage = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!videoId) {
      console.error("videoId is undefined!");
      return;
    }

    const fetchVideo = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/lecture-videos/${videoId}/`
        );

        if (response.ok) {
          const data = await response.json();
          setVideo(data);
        } else {
          console.error("Failed to fetch video");
        }
      } catch (error) {
        console.error("Error fetching video:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [videoId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!video) {
    return <div>Video not found!</div>;
  }

  const youtubeVideoId = video.video_path.split("v=")[1];
  return (
    <div className="min-h-screen md:bg-gray-50 md:py-8 font-jakarta md:px-6">
      <div className="max-w-5xl mx-auto bg-white md:shadow-md md:rounded-2xl p-6">
        <div className="mt-4 p-4 ">
          <h2 className="text-xl font-semibold mb-4">{video.video_title}</h2>
          <div className="video-container bg-black rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="480"
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              title={video.video_title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosPage;
