import React from "react";
import Image from "next/image";
import Link from "next/link";

const VideoCard = ({ title, faculty, time, link, url }) => {
  return (
    <div className="text-black">
      <Link href={url} passHref>
        <div className="bg-white shadow-md rounded-xl p-4">
          <img
            src={link}
            alt="Video Thumbnail"
            className="rounded mb-4 h-[140px] w-[330px]"
          />
        </div>
    
    <div className="flex flex-col items-center mt-3 gap-2">
      <p className="text-center hover:text-teal-300">{title}</p>
      <p className="text-center bg-slate-300 w-[200px] rounded-full">
        {faculty}, {time}
      </p>
      </div>
      </Link>
    </div>
  );
};
export default VideoCard;
