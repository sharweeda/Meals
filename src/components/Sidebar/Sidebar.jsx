import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(true); // مفتوحة في الشاشات الكبيرة
      } else {
        setIsOpen(false); // مقفولة في الموبايل
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`
          ${isLargeScreen ? "fixed" : "absolute"} top-0 left-0 h-full bg-[#F9FAFB] 
          transition-all duration-300 z-50 shadow-lg overflow-hidden
          ${isOpen ? "w-[250px]" : "w-0 transform -translate-x-full"}`}
      >
        <img src={logo} className="w-full" alt="logo" />
        <div className="mt-4">
          <ul className="mx-2">
            <li className="text-center mb-3">
              <NavLink
                to={"/"}
                className="font-bold block border-[1px] border-gray-300 py-2 rounded-2xl me-2 transition-transform transform hover:scale-105"
              >
                <i className="fa-solid fa-utensils mx-2 text-xl"></i>Meals
              </NavLink>
            </li>
            <li className="text-center mb-3">
              <Link
                to={"/"}
                className="font-bold block border-[1px] border-gray-300 py-2 rounded-2xl me-2 transition-transform transform hover:scale-105"
              >
                <i className="fa-solid fa-utensils mx-2 text-xl"></i>Ingredients
              </Link>
            </li>
            <li className="text-center mb-3">
              <Link
                to={"/"}
                className="font-bold block border-[1px] border-gray-300 py-2 rounded-2xl me-2 transition-transform transform hover:scale-105"
              >
                <i className="fa-solid fa-utensils mx-2 text-xl"></i>Area
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* زر الهامبرغر */}
      {!isLargeScreen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-full md:hidden"
        >
          {isOpen ? "❌" : "☰"}
        </button>
      )}
    </div>
  );
}