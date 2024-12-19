import React from "react";

const Features_1 = () => {
  return (
    <section className="py-12 bg-white flex max-w-[1140px] mx-auto">
      <div className=" mx-auto  w-[50%] text-left flex-1 ">
        
          <div className=" text-black ">
          <div className="border-2 border-black px-2 text-[14px] py-1 rounded-lg w-[120px]">
          Our Features
          </div>
        <h2 className="text-[3.2em] font-instSansB max-w-[420px] text-gray-800 leading-[1.2em] ">
          <span style={{ color: "#009D86" }}>Be Ready with</span> proper
          solutions
        </h2>
        <p className="mt-6 text-[1em] max-w-[550px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat
          enim at auctor consequat. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat
          enim at auctor consequat. 
        </p>
        </div>
      
      
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
