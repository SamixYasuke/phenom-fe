import React from "react";

const BreadCrumb = ({ title, description, breadcrumbItems }) => {
  return (
    <div className="pt-32 pb-10 sm:py-22 ">
      <div className="flex flex-col gap-10 items-center justify-center lg:mx-0">
        <h2 className="text-pretty text-md font-normal tracking-tight text-secondary sm:text-2xl text-[rgb(84,16,135)]">
          {title}
        </h2>
        <p className="mt-2 text-4xl/snug sm:text-8xl text-center font-semibold font-poppins text-gray-700">
          {description}
        </p>
        <nav className="flex pt-10" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            {breadcrumbItems.map((item, index) => (
              <li key={index} className="inline-flex items-center">
                <a
                  href={item.href}
                  className="inline-flex items-center text-sm font-medium text-secondary hover:text-accent-2 text-[rgb(84,16,135)]"
                >
                  {index > 0 && (
                    <svg
                      className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  )}
                  {item.label === "Home" && (
                    <svg
                      className="w-3 h-3 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"></path>
                    </svg>
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default BreadCrumb;
