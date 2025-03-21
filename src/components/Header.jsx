"use client";
import { useState, useRef, useEffect } from "react";
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
          {/* <li>
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
              href="/coupon"
              className={`hover:text-gray-300 font-semibold text-sm ${
                pathname === "/contact" ? "text-yellow-500" : "text-accent"
              }`}
            >
              Get Coupon Code
            </a>
          </li> */}
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
