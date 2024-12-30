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
      <div className=" max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4  px-6 py-8 gap-3 lg:gap-6 text-center  ">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex-1 relative   text-xl lg:text-2xl bg-white px-1  lg:px-4 bg-opacity-65 shadow-md rounded-lg py-8 text-gray-900"
          >
            <div className="mb">
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
