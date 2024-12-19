import Link from "next/link";

const ProductCard = ({ course }) => {
  return (
    <Link href={`/courses/${course.id}`} key={course.id}>
      <div className="w-[300px] rounded-lg  transition-all duration-200 transform hover:scale-[1.03] hover:shadow-lg bg-white font-poppins">
        {/* Image Section */}
        <div className="relative p-2">
          <img
            className="rounded-lg  w-full object-cover"
            src={course.img}
            alt={course.title}
          />
          <div className="absolute top-4 right-4 bg-teal-500 text-white text-xs px-2 py-1 rounded-md">
            {course.discount} OFF
          </div>
        </div>

        {/* Content Section */}
        <div className="px-4 py-3 rounded-lg border-b-4   border-teal-600">
          {/* Type */}
          <p className="text-teal-600 text-xs uppercase tracking-wide mb-2 font-instSansB">
            {course.type}
          </p>

          {/* Title */}
          <h3 className="text-lg font-instSansB text-gray-800 truncate">
            {course.title}
          </h3>

          {/* Course Details */}
          <div className="my-2 text-gray-800 text-sm">
            {course.detailedDescription.videos} Videos ·{" "}
            {course.detailedDescription.classes} Classes ·{" "}
            {course.detailedDescription.testSeries} Tests
          </div>

          

          {/* Price Section */}
          <div className="flex justify-between items-center mt-4">
            <div className="text-gray-800">
              <p className="text-2xl font-instSansB">
                ₹{course.offerPrice}{" "}
                <span className="line-through text-gray-500 text-base font-poppins">
                  ₹{course.price}
                </span>
              </p>
            </div>
          </div>

          {/* Button */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
