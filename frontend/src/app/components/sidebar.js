"use client";
import Link from "next/link";
import { FaBookmark, FaList, FaBook } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="md:w-[23%] shadow-lg p-6 pt-2 bg-white rounded-xl">
      <div className="flex flex-col gap-3 mt-5">
        <div className="group relative bg-white p-4 rounded-lg shadow-sm border border-gray-300 transition-all duration-300">
          <Link
            href="/questions/bookmarked"
            className="hover:text-teal-900 flex items-center"
          >
            <FaBookmark className="mr-2 text-teal-900" />
            View Bookmarks
          </Link>
        </div>
        <div className="group relative bg-white p-4 rounded-lg shadow-sm border border-gray-300 transition-all duration-300">
          <Link
            href="/questions/user-lists"
            className="hover:text-teal-900 flex items-center"
          >
            <FaList className="mr-2 text-teal-900" />
            Recommended Problems
          </Link>
        </div>
        <div className="group relative bg-white p-4 rounded-lg shadow-sm border border-gray-300 transition-all duration-300">
          <Link
            href="/questions/similar"
            className="hover:text-teal-900 flex items-center"
          >
            <FaBook className="mr-2 text-teal-900" />
            Personal Lists
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
