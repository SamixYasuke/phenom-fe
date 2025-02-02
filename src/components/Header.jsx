"use client";
import { useState, useRef, useEffect } from "react";
import CouponCodeDropdown from "./CouponCodeDropdown";
import OthersDropdown from "./OthersDropdown";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [isOthersOpen, setIsOthersOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const couponRef = useRef(null);
  const othersRef = useRef(null);

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
      <div>
        <a href="/">
          <img
            src="/images/logo.png"
            alt="phenom logo"
            className="h-10 w-auto"
          />
        </a>
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-black bg-gray-200">
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
      <nav className="lg:flex hidden">
        <ul className={`flex gap-12 items-center`}>
          <li>
            <a
              href="/"
              className={`hover:text-gray-300 font-semibold text-sm ${
                pathname === "/" ? "text-yellow-500" : "text-accent"
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={`hover:text-gray-300 font-semibold text-sm ${
                pathname === "/about" ? "text-yellow-500" : "text-accent"
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/phenom-claim"
              className={`hover:text-gray-300 font-semibold text-sm ${
                pathname === "/phenom-claim" ? "text-yellow-500" : "text-accent"
              }`}
            >
              Phenom Claim
            </a>
          </li>
          <CouponCodeDropdown
            couponRef={couponRef}
            isCouponOpen={isCouponOpen}
            setIsCouponOpen={setIsCouponOpen}
          />
          <li>
            <a
              href="/top-earners"
              className={`hover:text-gray-300 font-semibold text-sm ${
                pathname === "/top-earners" ? "text-yellow-500" : "text-accent"
              }`}
            >
              Top Earners
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className={`hover:text-gray-300 font-semibold text-sm ${
                pathname === "/contact" ? "text-yellow-500" : "text-accent"
              }`}
            >
              Contact Us
            </a>
          </li>
          <OthersDropdown
            othersRef={othersRef}
            setIsOthersOpen={setIsOthersOpen}
            isOthersOpen={isOthersOpen}
          />
        </ul>
      </nav>
      <MobileMenu isMobileMenuOpen={isMobileMenuOpen} toggleMenu={toggleMenu} />
      <div className="lg:block hidden">
        <a href="/login" className="px-4 py-2 text-white font-semibold text-sm">
          Log In →
        </a>
      </div>
    </header>
  );
};

export default Header;
