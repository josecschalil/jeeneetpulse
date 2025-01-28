import React from "react";
import styles from "./squigglyLine.module.css";

const Sections = () => {
  const data = [
    { count: "2000", label: "Video Classes" },
    { count: "80,000", label: "Questions" },
    { count: "2000", label: "Quizzes" },
    { count: "3000", label: "Study Materials" },
  ];

  return (
    <>
      <section
        className={`w-full h-[20vh] relative z-10 ${styles.topSquiggly}`}
      />

      <section className="bg-gradient-to-r bg-[#009A80] to-[#FFF5EF] z-20 relative py-10 -mt-8 text-white w-[100vw] font-instSansB">
        <div className=" max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4  px-6 py-8 pt-0 gap-3 lg:gap-6 text-center  ">
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
      <div
        className={`w-full h-[15vh] -mt-24 relative z-20  translate-y-3 ${styles.bottomSquiggly}`}
      />
    </>
  );
};

export default Sections;
