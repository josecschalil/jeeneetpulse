import React from "react";

const Sections = () => {
  const data = [
    { count: 200, label: "Video Classes" },
    { count: 100, label: "Live Sessions" },
    { count: 50, label: "Quizzes" },
    { count: 300, label: "Assignments" },
  ];

  return (
    <section className="bg-gradient-to-r from-[#009A80] to-[#FFF5EF] text-white w-[100vw] font-instSansB">
      <div className=" max-w-[1240px] mx-auto  py-8  gap-6 text-center flex flex-row ">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex-1 relative text-[28px] bg-white px-4 bg-opacity-65 shadow-md rounded-lg py-4 text-black"
          >
            <div className="mb-4">
              <h2 className="">{item.count}+</h2>
              <p className="">{item.label}</p>
            </div>{" "}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sections;
