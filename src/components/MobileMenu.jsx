"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MobileMenu = ({ isMobileMenuOpen, toggleMenu }) => {
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [isOthersOpen, setIsOthersOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isMobileMenuOpen]);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="bg-[url('/images/mobile-menu-bg.jpg')] px-3 bg-no-repeat bg-cover bg-center fixed right-0 top-0 inset-y-0 bg-black bg-opacity-50 z-40 w-full sm:w-1/2 lg:hidden h-full"
    >
      <div className="w-full h-full">
        <div className="space-y-2 text-white">
          <div className="flex items-center justify-between text-white text-3xl p-4">
            <img
              src="/images/logo.png"
              alt="phenom logo"
              className="h-[27.98px]"
            />
            <button onClick={toggleMenu} className="text-white text-4xl">
              ×
            </button>
          </div>

          <a
            href="/"
            className="block rounded-lg px-3 py-2 text-base font-semibold hover:bg-gray-50 text-accent"
          >
            Home
          </a>
          <a
            href="/about"
            className="block rounded-lg px-3 py-2 text-base font-semibold hover:bg-gray-50"
          >
            About
          </a>
          <a
            href="/phenom-claim"
            className="block rounded-lg px-3 py-2 text-base font-semibold hover:bg-gray-50"
          >
            Phenom Claim
          </a>

          {/* Coupon Code dropdown */}
          <button
            className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold hover:bg-gray-600"
            onClick={() => setIsCouponOpen(!isCouponOpen)}
          >
            Coupon Code
            <svg
              className={`h-5 w-5 text-gray-400`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          {isCouponOpen && (
            <div className="pl-6 space-y-2">
              <a
                href="/coupon/checker"
                className="block text-sm text-gray-300 hover:text-white mb-6 mt-5 font-bold"
              >
                Coupon Checker
              </a>
              <a
                href="/coupon/vendors"
                className="block text-sm text-gray-300 hover:text-white font-bold"
              >
                Coupon 2
              </a>
            </div>
          )}

          <a
            href="/top-earners"
            className="block rounded-lg px-3 py-2 text-base font-semibold hover:bg-gray-50"
          >
            Top Earners
          </a>
          <a
            href="/contact"
            className="block rounded-lg px-3 py-2 text-base font-semibold hover:bg-gray-50"
          >
            Contact Us
          </a>

          {/* Others dropdown */}
          <button
            className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold hover:bg-gray-600"
            onClick={() => setIsOthersOpen(!isOthersOpen)}
          >
            Others
            <svg
              className={`h-5 w-5 text-gray-400`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          {isOthersOpen && (
            <div className="pl-6 space-y-2">
              <a
                href="/privacy"
                className="block mb-6 mt-5 text-sm text-gray-300 hover:text-white font-bold"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="block text-sm text-gray-300 hover:text-white font-bold"
              >
                Terms and Condition
              </a>
            </div>
          )}

          <div className="border-solid w-full h-[1.2px] bg-yellow-500"></div>
          <a
            href="/login"
            className="block rounded-lg px-3 py-2 text-base font-semibold hover:bg-gray-50 text-accent"
          >
            Login
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
