"use client";
import { useParams } from "next/navigation";
import { courses } from "../../courses/data";
import Link from "next/link";

const CheckoutPage = () => {
  const { productId } = useParams(); // Get dynamic productId
  const course = courses.find((q) => q.id === Number(productId)); // Convert productId to a number

  if (!course) {
    return (
      <div className="text-center mt-20 text-2xl font-bold ">
        Course Not Found for Checkout
      </div>
    );
  }

  const handlePayment = () => {
    alert(`Payment through PhonePe for ${course.title} will be processed.`);
    // Add payment gateway logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Course Details */}
        <div className="md:col-span-2 bg-white shadow-md rounded-lg p-8">
          {/* Header */}
          <div className="border-b pb-4 mb-4 flex justify-between items-center">
            <h1 className="text-4xl font-bold text-gray-800">{course.title}</h1>
            <Link href={`/courses/${course.id}`}>
              <button className="bg-teal-500 text-white px-4 py-2 text-sm font-semibold rounded-md shadow hover:bg-teal-600 transition">
                View Details &gt;
              </button>
            </Link>
          </div>

          {/* Course Info */}
          <p className="text-lg text-justify text-gray-600 leading-relaxed">
            {course.info}
          </p>

          {/* Features Summary */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="text-center border-t-4 border-teal-700 py-3 bg-gray-50 rounded-lg shadow-md">
              <span className="text-2xl font-bold text-gray-800">
                {course.detailedDescription.watchHours}+
              </span>
              <p className="text-gray-500 text-sm">Watch Hours</p>
            </div>
            <div className="text-center border-t-4 border-teal-700 py-3 bg-gray-50 rounded-lg shadow-md">
              <span className="text-2xl font-bold text-gray-800">
                {course.detailedDescription.classes}+
              </span>
              <p className="text-gray-500 text-sm">Classes</p>
            </div>
          </div>
        </div>

        {/* Right Column - Pricing, Profile, and Payment */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-6">
          {/* Pricing Section */}
          <div className="border-b pb-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Price Details</h2>
            <div className="text-2xl font-semibold text-gray-800">
              ₹{course.offerPrice}{" "}
              <span className="text-gray-500 line-through text-lg">
                ₹{course.price}
              </span>
              <span className="ml-2 text-teal-500 text-lg">
                ({course.discount} off)
              </span>
            </div>
          </div>

          {/* User Profile Section */}
          <div className="border-b pb-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">User Profile</h2>
            <div className="text-gray-600 text-lg">
              <p>Name: <span className="font-semibold">Jose C S</span></p>
              <p>Email: <span className="font-semibold">johndoe@example.com</span></p>
            </div>
          </div>

          {/* Payment Options */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Payment Options</h2>
            <div className="flex items-center gap-3">
              <input
                type="radio"
                id="phonepe"
                name="paymentGateway"
                defaultChecked
                className="w-5 h-5 text-teal-600 focus:ring-2"
              />
              <label htmlFor="phonepe" className="text-lg text-gray-700">
                Pay via PhonePe
              </label>
            </div>
          </div>

          {/* Proceed to Payment Button */}
          <button
            onClick={handlePayment}
            className="bg-teal-600 text-white text-lg font-semibold py-3 rounded-lg shadow-md hover:bg-teal-700 transition"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
