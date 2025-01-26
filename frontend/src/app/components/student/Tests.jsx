import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

const FeaturedTests = () => {
  const [featuredTests, setfeaturedTests] = useState(null);

  useEffect(() => {
    const fetchfeaturedTests = async () => {
      const response = await fetch(
        `http://127.0.0.1:8000/api/exams/?is_featured=true`
      );

      if (response.ok) {
        const data = await response.json();
        setfeaturedTests(data);
      } else {
        console.error("Failed to fetch featuredTests");
      }
    };

    fetchfeaturedTests();
  }, []);

  return (
    <div className="my-4">
      <h3 className="text-xl font-semibold text-gray-800 font-instSansB mb">
        Exams
      </h3>
      {featuredTests?.length === 0 ? (
        <p className="text-gray-600 mt-4">No Exams available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {featuredTests?.map((test, index) => (
              <Link  key={index}
              className="border border-gray-300 rounded-lg shadow-sm transition-all hover:shadow-md overflow-hidden " href={`/tests/proctored/exams/${test.exam_id}`}>
             
           
              <div className="p-4">
                <h4 className=" font-instSansB text-gray-900 truncate">
                  {test.exam_title}
                </h4>

                <p className="text-sm text-gray-700  font-istok mt-1">{test.time/60} hours | Level {test.diffculty}</p>
              </div>
              <div className="w-full bg-black flex text-white  font-istok  justify-end px-4 py-2 ">
               
                  Take Test!
            
            </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedTests;
