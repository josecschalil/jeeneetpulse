import React from "react";

const Features_1 = () => {
  const features = [
    {
      id: 1,
      title: "Expert Faculty",
      description:
        "Learn from experienced educators with proven track records.",
      image: "/point.svg",
    },
    {
      id: 2,
      title: "Flexible Study Options",
      description:
        "Watch classes anytime, anywhere with our structured video lessons.",
      image: "/point.svg",
    },
    {
      id: 3,
      title: "Comprehensive Material",
      description:
        "Access in-depth notes, curated practice problems, and detailed solutions.",
      image: "/point.svg",
    },
  ];

  return (
    <section className="py-[10vh] bg-none flex max-w-[1140px] mx-auto">
              <img className="absolute -right-[100px] -z-10"src="/Vector.png"></img>
      <div className=" my-auto ">
        <img
          src="/shap1e.svg"
          alt="Student Studying"
          className="w-full max-w-[530px] max-h-[530px]"
        />
      </div>
      <div className="container mx-auto px-6  w-[50%] text-black ">
        <h2 className="text-[3.2em] font-instSansB max-w-[420px] text-gray-800 leading-[1.2em] ">
          <span style={{ color: "#009D86" }}>Be Ready with</span> proper
          solutions
        </h2>
        <p className="mt-6 text-[1em] max-w-[550px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat
          enim at auctor consequat. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. 
        </p>

        <div className="flex flex-col max-h-[700px] gap-6 rounded mt-3 ">
          {features.map((feature) => (
            <div key={feature.id} className="hover:px-4  p-3 -ml-1 hover:ml-4 hover:bg-[#6D6D6D] rounded-[30px] hover:shadow-[0px_4px_3px_rgba(0,0,0,0.4)]  flex transition-all duration-400 w-fit cursor-pointer group">
              <img
                src="/point.svg"
                alt="Student Studying"
                className="w-full max-w-[50px] max-h-[50px] mr-3 my-auto"
              />
              <div className="text-left pr-2">
                <h3 className="font-bold text-lg text-[#006B5B] group-hover:text-white">
                  {feature.title}
                </h3>
                <p className=" text-black text-md max-w-[350px]  group-hover:text-white">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features_1;
