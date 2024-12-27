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
            className="rounded-lg shadow-md object-fit"
          />
          </div>
       

        <div className="flex flex-col items-center mt-3 gap-1  ">
          <p className="text-center text-md ">{title}</p>
          <div className="flex  px-4 py-1 rounded-full text-sm font-normal  bg-gray-300 bg-opacity-25">
            <p className=" ">
              {faculty}
            </p>
            <div className="mx-2 my-auto w-1 h-1  rounded-full  bg-black"></div>
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
