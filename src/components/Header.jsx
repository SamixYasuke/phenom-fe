"use client";
import { useState, useRef, useEffect } from "react";
import CouponCodeDropdown from "./CouponCodeDropdown";
import OthersDropdown from "./OthersDropdown";
import MobileMenu from "./MobileMenu"; // Ensure you have the correct path

const Header = () => {
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [isOthersOpen, setIsOthersOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const couponRef = useRef(null);
  const othersRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (couponRef.current && !couponRef.current.contains(event.target)) {
        setIsCouponOpen(false);
      }
      if (othersRef.current && !othersRef.current.contains(event.target)) {
        setIsOthersOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-transparent md:bg-[rgb(34,6,54)] text-white p-6 lg:px-8 absolute inset-x-0 z-50 sm:bg-primary top-0 flex justify-between items-center">
      {/* Logo */}
      <div>
        <a href="/">
          <img
            src="/images/logo.png"
            alt="phenom logo"
            className="h-10 w-auto"
          />
        </a>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Navigation (Hidden on LG and below) */}
      <nav className="lg:flex hidden">
        <ul className={`flex gap-12 items-center`}>
          <li>
            <a href="#" className="hover:text-gray-300 font-semibold">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300  font-semibold">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300  font-semibold">
              Phenom Claim
            </a>
          </li>

          {/* Coupon Code Dropdown */}
          <CouponCodeDropdown
            couponRef={couponRef}
            isCouponOpen={isCouponOpen}
            setIsCouponOpen={setIsCouponOpen}
          />

          <li>
            <a href="#" className="hover:text-gray-300  font-semibold">
              Top Earners
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300  font-semibold">
              Contact Us
            </a>
          </li>

          {/* Others Dropdown */}
          <OthersDropdown
            othersRef={othersRef}
            setIsOthersOpen={setIsOthersOpen}
            isOthersOpen={isOthersOpen}
          />
        </ul>
      </nav>

      {/* Mobile Menu with Animation */}
      <MobileMenu isMobileMenuOpen={isMobileMenuOpen} toggleMenu={toggleMenu} />

      {/* Login Button (Hidden on LG and below) */}
      <div className="lg:block hidden">
        <a href="#" className="px-4 py-2 text-white font-semibold">
          Log In →
        </a>
      </div>
    </header>
  );
};

export default Header;
