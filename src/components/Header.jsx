"use client";
import { useState, useRef, useEffect } from "react";
import CouponCodeDropdown from "./CouponCodeDropdown";
import OthersDropdown from "./OthersDropdown";

const Header = () => {
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [isOthersOpen, setIsOthersOpen] = useState(false);

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

  return (
    <header className="bg-[rgb(34,6,54)] text-white p-6 lg:px-8 absolute inset-x-0 z-50 sm:bg-primary top-0 flex justify-between items-center">
      {/* Logo */}
      <div>
        <img src="/images/logo.png" alt="phenom logo" className="h-10 w-auto" />
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex gap-6 items-center">
          <li>
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
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
            <a href="#" className="hover:text-gray-300">
              Top Earners
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
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

      {/* Login Button */}
      <div>
        <a
          href="#"
          className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition"
        >
          Log In →
        </a>
      </div>
    </header>
  );
};

export default Header;
