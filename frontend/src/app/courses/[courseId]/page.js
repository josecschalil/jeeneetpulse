"use client";
import { useParams } from "next/navigation";
import { courses } from "../data";
import Link from "next/link";

const CoursePage = () => {
  const { courseId } = useParams(); // Get dynamic parameter
  const course = courses.find((q) => q.id === Number(courseId)); // Convert courseId to Number

  if (!course) {
    return (
      <div className="text-center mt-20 text-2xl font-instSansB text-gray-700">
        Course Not Found
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-50 py-[10vh] font-poppins">
      {/* Background Images */}
      <img className="absolute top-[80vh] rotate-180 -z-0" src="/ve.png" alt="Decoration" />
      <img className="-right-10 top-2 absolute -z-0 rotate-180" src="/Vector.png" alt="Decoration" />

      {/* Main Container */}
      <div className="relative max-w-4xl mx-auto bg-white shadow-md z-10 rounded-md p-8">
        {/* Course Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-4xl font-instSansB text-gray-800 mb-3">
              {course.title}
            </h1>
            <div className="text-2xl font-instSansB text-gray-800 mt-2">
              ₹{course.offerPrice}{" "}
              <span className="text-gray-500 line-through text-md">
                ₹{course.price}
              </span>
              <span className="ml-2 text-teal-500 text-md">
                ({course.discount} off)
              </span>
            </div>
          </div>
          <Link href={`/checkout/${course.id}`}>
            <button className="bg-teal-600 text-white px-4 py-2 text-nowrap text-md font-semibold rounded-md hover:bg-teal-700 transition">
              Buy Now &gt;
            </button>
          </Link>
        </div>

        {/* Course Info */}
        <p className="text-md text-gray-600 leading-relaxed mb-8">
          {course.info}
        </p>

        {/* Portions Covered */}
        <div>
          <h4 className="text-2xl font-instSansB text-gray-700 mb-2">
            Portions Covered:
          </h4>
          <p className="text-md text-gray-600">
            {course.detailedDescription.portionsCovered}
          </p>
        </div>

        {/* What's Included */}
        <div className="mt-8 border-t pt-6">
          <h3 className="text-2xl font-instSansB text-gray-700 mb-4">
            What's Included:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Watch Hours", value: course.detailedDescription.watchHours },
              { label: "Classes", value: course.detailedDescription.classes },
              { label: "Test Series", value: course.detailedDescription.testSeries },
              { label: "Videos", value: course.detailedDescription.videos },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center border-t-4 border-teal-700 rounded-md py-3 bg-gray-50 shadow-md"
              >
                <span className="text-2xl font-instSansB text-gray-800">
                  {item.value}+
                </span>
                <p className="text-sm text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Classes and Study Materials */}
          <div className="p-2 rounded-md">
            <h2 className="text-2xl font-instSansB text-gray-700 mb-4">
              Classes and Study Materials
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-md text-gray-600 leading-relaxed">
              {course.videoPortal.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Test Series */}
          <div className="p-2 rounded-md">
            <h2 className="text-2xl font-instSansB text-gray-700 mb-4">
              Test Series
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-md text-gray-600 leading-relaxed">
              {course.examPortal.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
