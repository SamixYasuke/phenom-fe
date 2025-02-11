"use client";

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const AccordionComponent = () => {
  const [isOpen, setIsOpen] = useState([false, false, false, false]);

  const toggleAccordion = (index) => {
    setIsOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="bg-white py-24 sm:py-32 relative overflow-hidden isolate">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div id="accordion-flush">
          {[
            "Push to deploy",
            "SSL certificates",
            "Simple queues",
            "Advanced security",
          ].map((title, index) => (
            <div className="relative" key={index}>
              <h2 id={`accordion-flush-heading-${index}`}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  aria-expanded={isOpen[index]}
                  aria-controls={`accordion-flush-body-${index}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{title}</span>
                  <FiChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                      isOpen[index] ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </h2>
              {isOpen[index] && (
                <div
                  id={`accordion-flush-body-${index}`}
                  aria-labelledby={`accordion-flush-heading-${index}`}
                  className="py-5 border-b border-gray-200 dark:border-gray-700"
                >
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {index === 0
                      ? "Easily deploy your project with minimal effort."
                      : index === 1
                      ? "Secure your site with SSL certificates."
                      : index === 2
                      ? "Manage task queues efficiently."
                      : "Enhance security with advanced protection features."}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;
