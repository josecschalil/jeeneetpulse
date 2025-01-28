"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useAuthentication from "@/hooks/useAuthentication";

const Navbar = () => {
  const pathname = usePathname();
  const [user_id, setUserId] = useState(null);
  const { isAuthenticated, userDetails } = useAuthentication();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
        setIsRotated(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserId = localStorage.getItem("user_id");
      setUserId(storedUserId);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user_id");
  };

  const isTestPage = pathname.startsWith("/tests/custom/exams/");

  if (isTestPage) return null;

  return (
    <nav className="font-jakarta border-b  border-b-gray-400 shadow-sm sticky top-0 backdrop-blur-2xl z-20 bg-opacity-5 transition-all duration-300 font-medium items-center pt-4 mx-auto   py-5 bg-white w-full">
      <div className="flex flex-row max-w-7xl px-3 pr-5 md:px-6 items-center justify-between gap-14 mx-auto">
        <div
          className="basis-auto flex lg:hidden mr-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src="/menu.png" className="h-[25px] " alt="Menu" />
        </div>

        <div className="flex ">
          <img src="/logo.svg" className="h-[12px] mr-1 mt-2" alt="Logo" />
        </div>

        <div className="hidden space-x-2 text-sm uppercase font-instSansB text-black lg:flex gap-4 items-center mt-2 ">
          <Link href="/" passHref>
            <div className=" hover:text-teal-800 px-3 p-1 rounded-full">Home</div>
          </Link>
          <Link href="/student-portal" passHref>
            <div className=" hover:text-teal-800 px-3 p-1 rounded-full">Student Portal</div>
          </Link>
          <Link href="/courses" passHref>
            <div className="hover:text-teal-800 px-3 p-1 rounded-full ">Courses</div>
          </Link>
          {/* <Link href="/questions" passHref>
            <div className="hover:text-gray-400">Questions</div>
          </Link> */}
          <Link href="/featured" passHref>
            <div className=" hover:text-teal-800 px-3 p-1 rounded-full">Featured</div>
          </Link>
          <Link href="/about" passHref>
            <div className=" hover:text-teal-800 px-3 p-1 rounded-full">About</div>
          </Link>
          <Link href="/contact" passHref>
            <div className="hover:text-teal-800 px-3 p-1 rounded-full ">Contact</div>
          </Link>
          <div className="flex  items-center space-x-4 font-semibold ">
          {!isAuthenticated ? (
            <Link href="/signin" passHref>
              <button className="border border-black font-instSansB py-2 px-4 uppercase rounded-md hover:rounded-2xl  transition-all duration-300 ">
                Sign In
              </button>
            </Link>
          ) : (
            <div className="">
              <div
                className="flex  relative items-center gap-5 font-instSansB text-[16px] cursor-pointer 
             transition-transform duration-150 ease-in-out active:scale-95"
                onClick={() => {
                  setDropdownOpen(!dropdownOpen), setIsRotated(!isRotated);
                }}
              >
                {userDetails?.name}
              </div>
              {dropdownOpen && (
                <div
                  className="absolute right-18 top-18 mt-2 w-40 bg-white border border-gray-200 rounded-3xl shadow-lg"
                  ref={dropdownRef}
                >
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <Link
                        href={`/profile/${user_id}`}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                    </li>
                    <hr></hr>
                    <li>
                      <Link href={`/`}>
                        <button
                          onClick={() => {
                            handleLogout();
                          }}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
        </div>


      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 right-0 h-full w-2/3 sm:w-[40vw] bg-white shadow-lg z-50 flex flex-col space-y-6 p-8 transition-transform duration-300 transform">
          <div className="flex justify-end">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-xl font-bold"
            >
              &times;
            </button>
          </div>
          <Link href="/" passHref onClick={() => setMenuOpen(false)}>
            <div className="hover:text-gray-400">Home</div>
          </Link>
          <Link
            href="/student-portal"
            passHref
            onClick={() => setMenuOpen(false)}
          >
            <div className="hover:text-gray-400">Student Portal</div>
          </Link>
          <Link href="/courses" passHref onClick={() => setMenuOpen(false)}>
            <div className="hover:text-gray-400">Courses</div>
          </Link>
          {/* <Link href="/questions" passHref onClick={() => setMenuOpen(false)}>
            <div className="hover:text-gray-400">Questions</div>
          </Link> */}
          <Link href="/featured" passHref onClick={() => setMenuOpen(false)}>
            <div className="hover:text-gray-400">Featured</div>
          </Link>
          <Link href="/about" passHref onClick={() => setMenuOpen(false)}>
            <div className="hover:text-gray-400">About</div>
          </Link>
          <Link href="/contact" passHref onClick={() => setMenuOpen(false)}>
            <div className="hover:text-gray-400">Contact</div>
          </Link>
          <Link href="/signin" passHref onClick={() => setMenuOpen(false)}>
            <div className="hover:text-gray-400">Sign In</div>
          </Link>
          <Link href="/signup" passHref onClick={() => setMenuOpen(false)}>
            <div className="hover:text-gray-400">Register</div>
          </Link>
          <Link href="/profile" passHref onClick={() => setMenuOpen(false)}>
            <div className="hover:text-gray-400">Profile</div>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
