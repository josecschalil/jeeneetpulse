import React from "react";

const SuccessStories = () => {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-green-100 py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-black">Our Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {new Array(3).fill(null).map((_, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
              <blockquote className="text-black text-sm">
                “When our designs need an expert opinion or approval, I know I can rely on your
                agency. Thank you for all your help—I will be recommending you to everyone.”
              </blockquote>
              <div className="mt-4 flex items-center gap-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://via.placeholder.com/48"
                  alt="Client"
                />
                <div>
                  <h4 className="font-bold">James Hall</h4>
                  <p className="text-gray-600 text-sm">Designation</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
