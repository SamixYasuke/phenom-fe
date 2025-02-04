"use client";

import RegisterModal from "./RegisterModal";
import { useState } from "react";

const ContactUsSection = ({ socialLinks, couponLink }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-gray-900 text-white w-full py-20 lg:py-32 px-8 xl:px-16">
      <div className="flex flex-col lg:flex-row justify-between items-start md:items-center gap-0 lg:gap-14">
        <div className="md:max-w-lg xl:max-w-xl text-justify">
          <h2 className="text-3xl font-bold text-purple-400">Contact Us</h2>
          <p className="mt-4 text-gray-300">
            Our platform enables you to monetize your social media accounts for
            passive income, while our advanced earning models provide daily
            rewards, enhancing your financial potential. Join us as your home
            and pathway to financial freedom, where we empower you to embrace a
            life of abundance and opportunity.{" "}
            <span className="text-purple-800 font-bold">Contact Us Today</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-nowrap gap-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={couponLink}
            className="text-sm border border-purple-400 text-purple-400 px-2 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-400 hover:text-white transition-all"
          >
            Get Coupon <span className="text-lg">🎟️</span>
          </a>
          <button
            className="text-sm bg-purple-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-600 transition-all"
            onClick={() => setIsModalOpen(true)}
          >
            Register <span className="text-lg">→</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <RegisterModal
          setIsModalOpen={setIsModalOpen}
          socialLinks={socialLinks}
        />
      )}
    </section>
  );
};

export default ContactUsSection;
