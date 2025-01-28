"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
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
  const navbarRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    gsap.from(navbarRef.current, {
      y: -60,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
    });

    gsap.from(linksRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.1,
    });
  }, []);

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
    <>
      <nav
        ref={navbarRef}
        className="font-jakarta border-b sticky top-0 border-b-gray-400 shadow-sm backdrop-blur-2xl z-50 bg-opacity-5 transition-all duration-300 font-medium items-center pt-4 mx-auto py-5 bg-white w-screen"
      >
        <div className="flex flex-row max-w-7xl px-3 pr-5 md:px-6 items-center justify-between gap-14 mx-auto">
          <div
            className="basis-auto flex lg:hidden mr-4"
            onClick={() => {
              setMenuOpen(!menuOpen);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src="/menu.png" className="h-[25px]" alt="Menu" />
          </div>

          <div className="flex">
            <img src="/logo.svg" className="h-[12px] mr-1 mt-2" alt="Logo" />
          </div>

          <div className="hidden  text-sm uppercase font-instSansB text-black lg:flex gap-4 items-center mt-2 ">
            {[
              "Home",
              "Student Portal",
              "Courses",
              "Featured",
              "About",
              "Contact",
            ].map((text, index) => (
              <Link
                key={index}
                href={`/${text
                  .toLowerCase()
                  .replace(/\s/g, "-")
                  .replace(/home/g, "/")}`}
                passHref
              >
                <div
                  ref={(el) => (linksRef.current[index] = el)}
                  className="hover:text-teal-800 px-3 p-1 rounded-full"
                >
                  {text}
                </div>
              </Link>
            ))}
            <div className="flex items-center space-x-4 font-semibold ">
              {!isAuthenticated ? (
                <Link href="/signin" passHref>
                  <button className="border border-black font-instSansB py-2 px-4 uppercase rounded-md hover:rounded-2xl transition-all duration-300 ">
                    Sign In
                  </button>
                </Link>
              ) : (
                <div>
                  <div
                    className="flex relative items-center gap-5 py-2 font-instSansB text-[16px] cursor-pointer 
             transition-transform duration-150 ease-in-out active:scale-95"
                    onClick={() => {
                      setDropdownOpen(!dropdownOpen);
                      setIsRotated(!isRotated);
                    }}
                  >
                    {userDetails?.name}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="">
        <div
          className={`transition-all bg-teal-900  duration-300 ease-in-out  ${
            menuOpen
              ? "max-h-[600px] opacity-100 "
              : "-mt-[10vh] max-h-0 py-0 opacity-0"
          }`}
        >
          <div className="text-white pt-2 font-inter ">
            <ul className="flex flex-col text-lg font-instSansB pl-6   uppercase font-bold">
              <li className="border-b mb-4 hover:translate-x-4 transition-all py-1 mt-4">
                <a href="/">Home</a>
              </li>
              <li className="border-b mb-4 hover:translate-x-4 transition-all py-1">
                <a href="/student-portal">Student Portal</a>
              </li>
              <li className="border-b mb-4 hover:translate-x-4 transition-all py-1">
                <a href="/courses">Courses</a>
              </li>
              <li className="border-b mb-4 hover:translate-x-4 transition-all py-1">
                <a href="/featured">Featured</a>
              </li>
              <li className="border-b mb-4 hover:translate-x-4 transition-all py-1">
                <a href="/about">About</a>
              </li>
              <li className="border-b mb-4 hover:translate-x-4 transition-all py-1">
                <a href="/contact">Contact</a>
              </li>
              <li className="border-b mb-4 hover:translate-x-4 transition-all py-1">
                <a href="/signin">Sign In</a>
              </li>
              <li className="border-b mb-4 hover:translate-x-4 transition-all py-1">
                <a href="/signup">Register</a>
              </li>
              <li className=" pb-2 mb-4">
                <a href="/profile">Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
