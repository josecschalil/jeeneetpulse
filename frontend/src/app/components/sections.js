import React from "react";

const Sections = () => {
  return(
<section className="bg-gradient-to-r from-teal-500 to-green-100 text-white w-[100vw]">
        <div className="container max-w-[1240px] mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div className="bg-slate-200 rounded-lg py-8 text-black">
            <h2 className="text-3xl font-bold">200+</h2>
            <p className="mt-2">Video Classes</p>
          </div>
          <div className="bg-slate-200 rounded-lg py-8 text-black">
            <h2 className="text-3xl font-bold">20+</h2>
            <p className="mt-2">Test Series</p>
          </div>
          <div className="bg-slate-200 rounded-lg py-8 text-black">
            <h2 className="text-3xl font-bold">10+</h2>
            <p className="mt-2">Something?</p>
          </div>
          <div className="bg-slate-200 rounded-lg py-8 text-black">
            <h2 className="text-3xl font-bold">1K+</h2>
            <p className="mt-2">Problems</p>
          </div>
        </div>
      </section>
)
};

export default Sections
