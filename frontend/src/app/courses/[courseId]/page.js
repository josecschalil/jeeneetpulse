"use client";
import { useParams } from "next/navigation";
import { courses } from "../data";
import Link from 'next/link';


const CoursePage = () => {
  const { courseId } = useParams(); // Get dynamic parameter
  console.log(courseId)


  const course = courses.find((q) => q.id === Number(courseId));  //beacuse courseId is a string.

  if (!course) {
    return <div>course not found.</div>;
  }


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Course Details</h1>
      
      
          <div className="mt-10 bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold">{course.title}</h3>
            <p className="mt-4 text-gray-600">{course.description}</p>
            <p className="mt-2 text-gray-800 font-semibold">
              Price: ₹{course.offerPrice}{" "}
              <span className="line-through text-gray-500">₹{course.price}</span>{" "}
              ({course.discount} off)
            </p>
            <div className="mt-4">
              <h4 className="text-xl font-semibold">Detailed Description:</h4>
              <ul className="mt-2 text-gray-600 space-y-2">
                <li>Watch Hours: {course.detailedDescription.watchHours} hours</li>
                <li>Classes: {course.detailedDescription.classes}</li>
                <li>Test Series: {course.detailedDescription.testSeries}</li>
                <li>Videos: {course.detailedDescription.videos}</li>
                <li>Portions Covered: {course.detailedDescription.portionsCovered}</li>
              </ul>
            </div>
            <Link href={`/checkout/${course.id}`}>
  <button className="bg-teal-300 rounded-lg p-4">Buy Now</button>
</Link>

          </div>
    
    </div>
  );
};

export default CoursePage;
