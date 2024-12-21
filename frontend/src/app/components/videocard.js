import React from "react";
import Image from "next/image";
import Link from "next/link";

const VideoCard = ({ title, faculty, time, link, url }) => {
  return (
    <div className="text-black flex justify-center items-center font-montserrat font-semibold">
      <Link href={url} passHref>
      
          <div className="">
          <img
            src={link}
            alt="Video Thumbnail"
            className="rounded-3xl shadow-md object-fit"
          />
          </div>
       

        <div className="flex flex-col items-center mt-3 gap-1  ">
          <p className="text-center text-[18px] hover:text-teal-300">{title}</p>
          <div className="flex  px-8 rounded-full text-[14px] bg-gray-300 bg-opacity-5">
            <p className=" ">
              {faculty}
            </p>
            <div className="mx-2 my-auto w-2 h-2 rounded-full bg-black"></div>
            <p className="">
              {time}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default VideoCard;
