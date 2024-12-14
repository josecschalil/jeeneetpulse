"use client";
import { useParams } from "next/navigation";
import { courses } from "../../courses/data";
import Link from "next/link";
const CheckoutPage = () => {
  const { productId } = useParams(); // Get dynamic productId
  const course = courses.find((q) => q.id === Number(productId)); // Convert productId to a number

  if (!course) {
    return <div>Course not found for checkout.</div>;
  }

  const handlePayment = () => {
    alert(`Payment gateway integration for ${course.title} will go here.`);
    // Add payment gateway logic here
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <div className="mt-6 bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-bold">{course.title}</h3>
        <p className="mt-4 text-gray-600">{course.description}</p>
        <p className="mt-2 text-gray-800 font-semibold">
          Price: ₹{course.offerPrice}{" "}
          <span className="line-through text-gray-500">₹{course.price}</span>{" "}
          ({course.discount} off)
        </p>
        <Link href={`/courses/${course.id}`}>
  <button  className="bg-teal-500 text-white rounded-lg mt-4 px-4 py-2 mr-4" >View Details</button>
</Link>

        <button
          onClick={handlePayment}
          className="bg-teal-500 text-white rounded-lg mt-4 px-4 py-2"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
