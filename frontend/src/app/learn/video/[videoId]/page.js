"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const VideosPage = () => {
  const { videoId } = useParams(); // Get the videoId from the URL
  const [video, setVideo] = useState(null); // State to store video details
  const [loading, setLoading] = useState(true); // State for loading status

  useEffect(() => {
    if (!videoId) {
      console.error("videoId is undefined!");
      return;
    }

    const fetchVideo = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/lecture-videos/${videoId}/` // API endpoint for single video
        );

        if (response.ok) {
          const data = await response.json();
          setVideo(data); // Set the video details in state
        } else {
          console.error("Failed to fetch video");
        }
      } catch (error) {
        console.error("Error fetching video:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
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
            {/* Embed YouTube Video */}
            <iframe
              width="100%"
              height="480"
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}  // Embed YouTube video
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
