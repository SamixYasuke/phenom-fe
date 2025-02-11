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
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div id="accordion-flush">
          {[...Array(4).keys()].map((index) => (
            <div className="relative" key={index}>
              <h2 id={`accordion-flush-heading-${index}`}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  aria-expanded={isOpen[index]}
                  aria-controls={`accordion-flush-body-${index}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span>
                    {index === 0
                      ? "Push to deploy"
                      : index === 1
                      ? "SSL certificates"
                      : index === 2
                      ? "Simple queues"
                      : "Advanced security"}
                  </span>
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
                      ? "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa."
                      : index === 1
                      ? "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet."
                      : index === 2
                      ? "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque."
                      : "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget."}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

export default AccordionComponent;
