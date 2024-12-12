import React from "react";

const Features_1 = () => {
  return (
    <section className="py-12 bg-white flex text-black">
      <div className="container mx-auto px-6 w-[50%] text-left flex-1 ">
        <div className="border-2 border-black px-2 text-[14px] py-1 rounded-lg w-[120px]">
          Our Features
        </div>
        <h2 className="text-2xl font-bold text-gray-800 ">
          Be Ready with proper solutions
        </h2>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat
          enim at auctor consequat. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nulla feugiat enim at auctor consequat.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nulla feugiat enim at
          auctor consequat.
        </p>
      
      </div>
      <div className="flex-1">
        <img
          src="/box.svg"
          alt="Student Studying"
          className="w-full max-w-[530px] max-h-[530px]"
        />
      </div>
    </section>
  );
};
export default Features_1;
