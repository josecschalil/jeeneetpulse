import React from "react";

const Features_1 = () => {
  return (
    <section className="py-12 bg-white flex">
      <div className=" mt-8 lg:mt-0">
        <img
          src="/shap1e.svg"
          alt="Student Studying"
          className="w-full max-w-[530px] max-h-[530px]"
        />
      </div>
      <div className="container mx-auto px-6 text-center w-[50%] text-black ">
        <h2 className="text-2xl font-bold text-gray-800 ">
          Be Ready with proper solutions
        </h2>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat
          enim at auctor consequat.
        </p>
        <div className="flex flex-col gap-6 rounded ">
          <div className="p-4 bg-gray-100 rounded-3xl shadow-md flex">
            <img
              src="/point.svg"
              alt="Student Studying"
              className="w-full max-w-[50px] max-h-[50px] mr-6"
            />
            <div className="text-left">
              {" "}
              <h3 className="font-bold text-lg">Expert Faculty</h3>
              <p className="mt-2 text-gray-600">
                Learn from experienced educators with proven track records.
              </p>
            </div>
          </div>
          <div className="p-4 bg-gray-100 rounded-3xl shadow-md flex">
            <img
              src="/point.svg"
              alt="Student Studying"
              className="w-full max-w-[50px] max-h-[50px] mr-6"
            />
            <div className="text-left">
              {" "}
              <h3 className="font-bold text-lg">Expert Faculty</h3>
              <p className="mt-2 text-gray-600">
                Learn from experienced educators with proven track records.
              </p>
            </div>
          </div>
          <div className="p-4 bg-gray-100 rounded-3xl shadow-md flex">
            <img
              src="/point.svg"
              alt="Student Studying"
              className="w-full max-w-[50px] max-h-[50px] mr-6"
            />
            <div className="text-left">
              {" "}
              <h3 className="font-bold text-lg">Expert Faculty</h3>
              <p className="mt-2 text-gray-600">
                Learn from experienced educators with proven track records.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};
export default Features_1;
