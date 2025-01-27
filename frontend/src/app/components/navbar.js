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


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
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
    <nav
      className="font-jakarta hover:translate-y-1 transition-all duration-300 font-medium z-20 relative mt-5 mx-auto rounded-lg  max-w-6xl justify-between py-5 bg-opacity-10"
  
     
    >
      <div className="flex flex-row max-w-7xl px-3 pr-5 md:px-6 items-center justify-between mx-auto">
        <div
          className="basis-auto flex lg:hidden mr-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src="/menu.png" className="h-[25px] " alt="Menu" />
        </div>

        <div className="flex ml-4">
          <img src="/logo.svg" className="h-[15px] mr-1" alt="Logo" />
        </div>

        <div className="hidden space-x-6 text-black lg:flex ">
          <Link href="/" passHref>
            <div className="hover:text-gray-400">Home</div>
          </Link>
          <Link href="/student-portal" passHref>
            <div className="hover:text-gray-400">Student Portal</div>
          </Link>
          <Link href="/courses" passHref>
            <div className="hover:text-gray-400">Courses</div>
          </Link>
          {/* <Link href="/questions" passHref>
            <div className="hover:text-gray-400">Questions</div>
          </Link> */}
          <Link href="/featured" passHref>
            <div className="hover:text-gray-400">Featured</div>
          </Link>
          <Link href="/about" passHref>
            <div className="hover:text-gray-400">About</div>
          </Link>
          <Link href="/contact" passHref>
            <div className="hover:text-gray-400">Contact</div>
          </Link>
        </div>

        <div className="flex mr-4 items-center space-x-4 font-semibold">
          {!isAuthenticated ? (
            <Link href="/signin" passHref>
              <button className="bg-black text-white py-2 px-4 text-sm rounded-full hover:bg-gray-700 ">
                Sign In
              </button>
            </Link>
          ) : (
            <div className="">
              <div
                className="flex font-semibold relative items-center gap-5  cursor-pointer 
             transition-transform duration-150 ease-in-out active:scale-95"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <img
                  className="h-10 w-10 rounded-full bg-black "
                  src="/boy.png"
                ></img>
                {userDetails?.name}           </div>
              {dropdownOpen && (
                <div className="absolute right-18 top-18 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg"     ref={dropdownRef}>
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <Link
                        href={`/profile/${user_id}`}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                    </li>
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
