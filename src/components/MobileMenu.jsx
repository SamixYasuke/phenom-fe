"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const MobileMenu = ({ isMobileMenuOpen, toggleMenu }) => {
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [isOthersOpen, setIsOthersOpen] = useState(false);
  const pathname = usePathname();

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
            className={`block rounded-lg px-3 py-2 text-base font-semibold hover:bg-gray-50 text-accent ${
              pathname === "/" ? "text-yellow-500" : "text-accent"
            }`}
          >
            Home
          </a>
          <a
            href="/register"
            className={`block rounded-lg px-3 py-2 text-base font-semibold  ${
              pathname === "/register" ? "text-yellow-500" : "text-accent"
            }`}
          >
            Get Registered
          </a>
          <a
            href="/coupon"
            className={`block rounded-lg px-3 py-2 text-base font-semibold  ${
              pathname === "/register" ? "text-yellow-500" : "text-accent"
            }`}
          >
            Get Coupon Code
          </a>
          <div className="border-solid w-full h-[1.2px] bg-yellow-500"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
