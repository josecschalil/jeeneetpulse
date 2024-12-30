import React from "react";

const SuccessStories = () => {
  const stories = [
    {
      quote:
        "Joining JeeNeetPulse was the best decision I made for my NEET preparation. Their detailed video lectures and regular practice tests boosted my confidence and helped me achieve a top rank in my state!",
      name: "Priya Sharma",
      designation: "Topper, NEET 2023",
      img: "/img2.svg",
      image: "/boy.png",
    },
    {
      quote:
        "I struggled with Physics until I joined JeeNeetPulse. Their conceptual clarity and problem-solving techniques made a huge difference. I'm now pursuing my dream engineering course at IIT Bombay!",
      name: "Rahul Mehta",
      designation: "JEE Advanced Rank 67, 2023",
      img: "/img.svg",
      image: "/boy.png",
    },
    {
      quote:
        "JeeNeetPulse's personalized mentorship program kept me on track during my JEE preparation. Their detailed performance analysis helped me identify and improve my weak areas.",
      name: "Sneha Kapoor",
      designation: "JEE Main Percentile 99.8, 2023",
      image: "/boy.png",
      img: "/img2.svg",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-teal-500 to-green-100 py-16 font-jakarta">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-black font-instSansB">
          Our Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8 px-6 ">
          {stories.map((story, idx) => (
            <div key={idx}>
              <div
                className={`${
                  idx % 2 === 1 ? "bg-gray-800 text-white bg-opacity-75" : "bg-white"
                } p-6 py-6 pb-10 text-center relative rounded-3xl shadow-md`}
              >
                <img
                  className="h-5 w-5 mb-4 mx-auto"
                  src={story.img}
                  alt={story.name}
                />
                <blockquote className=" text-sm">
                  “{story.quote}”
                </blockquote>
              </div>
              <div className="mt-4 flex flex-col items-center text-center gap-1">
                <img
                  className="w-12 h-12 rounded-full border-2 hidden md:block border-gray-900 object-cover"
                  src={story.image}
                  alt={story.name}
                />
                <div>
                  <h4 className="font-bold text-sm">{story.name}</h4>
                  <p className="text-gray-600 text-sm">{story.designation}</p>
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
