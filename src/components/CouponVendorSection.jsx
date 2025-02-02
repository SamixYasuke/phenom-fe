import React from "react";

const CouponVendorSection = ({ title, description, breadcrumbItems }) => {
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
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
      <div className="mt-16 relative isolate overflow-hidden z-50 bg-gray-950 flex flex-col justify-between px-6 py-16 shadow-2xl sm:px-16 md:py-10 lg:px-18">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset="1" stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>

        <div
          className="mx-auto max-w-md text-center px-6 lg:mx-0 lg:flex-auto lg:pb-10 lg:text-left"
          style={{ transform: "translateZ(0px)", opacity: 1 }}
        >
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-primary-text sm:text-5xl text-white">
            Expenses should not be your worries
          </h2>
          <p className="mt-6 text-pretty text-lg/8 text-secondary-text text-gray-100/65">
            From turning your passion into real cash to maximizing your earning
            potential, we provide the essential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CouponVendorSection;
