import React from "react";
import Image from "next/image";
import Link from "next/link";

const VideoCard2 = ({ title, faculty, time, link, url }) => {
  return (
    <div className="text-black flex justify-center items-center font-jakarta ">
      <Link href={url} passHref>
        <div className="relative">
          <img
            src={link}
            alt="Video Thumbnail"
            className="rounded-xl shadow-md object-fit"
          />
           <div className="absolute bottom-3 right-3 flex items-center text-white bg-gray-200 bg-opacity-35 font-semibold  text-[10px] rounded  w-fit px-2 py-1 ">
            <p className="">{time}</p>
          </div>
        </div>

        <div className="flex justify-between pl-1 mt-4 gap-1  ">
          <p className="text-sm font-semibold font-instSansB  text-gray-800 ">{title}</p>
         
        </div>
      </Link>
    </div>
  );
};
export default VideoCard2;
