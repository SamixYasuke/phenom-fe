"use client";

import React, { useState, useEffect } from "react";

const Register = () => {
  const [couponLink, setCouponLink] = useState("#");

  useEffect(() => {
    const fetchSocialMediaLinks = async () => {
      try {
        const res = await fetch("/api/coupons");
        const data = await res.json();
        console.log(data);
        setCouponLink(data);
      } catch (error) {
        console.error("Error fetching social media links:", error);
        setCouponLink("#");
      }
    };

    fetchSocialMediaLinks();
  }, []);
  return (
    <div className="sm:h-full py-10 bg-[url('/images/mobile-menu-bg.jpg')] bg-no-repeat bg-cover flex justify-center items-center">
      <div className="w-full max-w-md p-8 text-white">
        <div className="px-8 sm:w-1/3 sm:mx-auto">
          <div className="mb-2">
            <a href="/">
              <img
                className="mx-auto h-auto w-10"
                src="/images/logo.png"
                alt="Phenom"
              />
            </a>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-start">Create an account</h2>
        <p className="text-sm text-start text-yellow-400 mb-6">
          You will be registered under Phenom
        </p>

        <form>
          <input
            type="text"
            placeholder="Fullname"
            className="w-full p-3 mb-3 rounded-lg bg-[#d3b5ea] text-[#541087] border border-purple-300 placeholder:text-[#541087]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-3 rounded-lg bg-[#d3b5ea] text-[#541087] border border-purple-300 placeholder:text-[#541087]"
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 mb-3 rounded-lg bg-[#d3b5ea] text-[#541087] border border-purple-300 placeholder:text-[#541087]"
          />

          <select className="w-full p-3 mb-3 rounded-lg bg-[#d3b5ea] text-[#541087] border border-purple-300">
            <option>Select Country</option>
            <option>Cameroon</option>
            <option>Ghana</option>
            <option>Ivory Coast</option>
            <option>Nigeria</option>
            <option>Uganda</option>
          </select>

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-3 rounded-lg bg-[#d3b5ea] text-[#541087] border border-purple-300 placeholder:text-[#541087]"
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full p-3 mb-3 rounded-lg bg-[#d3b5ea] text-[#541087] border border-purple-300 placeholder:text-[#541087]"
          />
          <input
            type="text"
            placeholder="Coupon Code"
            className="w-full p-3 mb-3 rounded-lg bg-[#d3b5ea] text-[#541087] border border-purple-300 placeholder:text-[#541087]"
          />

          <p className="text-sm text-white mb-2">
            You do not have a code?{" "}
            <a
              href={couponLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 cursor-pointer font-extrabold"
            >
              Get Code
            </a>
          </p>

          {/* <div className="flex items-center mb-4">
            <input
              type="checkbox"
              className="w-4 h-4 text-yellow-400 border-2 border-yellow-400 rounded mr-2"
            />
            <span>
              I agree to the{" "}
              <a href="/terms" className="text-yellow-300 cursor-pointer">
                Terms & Conditions
              </a>
            </span>
          </div> */}
          <button className="w-full p-3 bg-yellow-400 hover:bg-yellow-400/70 text-[#541087] font-bold rounded-lg">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
