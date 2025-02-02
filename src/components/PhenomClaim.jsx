import React from "react";

const PhenomClaim = () => {
  return (
    <div className="bg-white">
      <div className="pt-32 pb-10 sm:py-22 px-10">
        <div className="flex flex-col gap-10 items-center justify-center lg:mx-0">
          <h2 className="text-pretty text-md font-normal tracking-tight text-secondary sm:text-2xl text-[rgb(84,16,135)]">
            Phenom Claim
          </h2>
          <p className="mt-2 text-4xl/snug sm:text-8xl text-center font-semibold font-poppins text-gray-700">
            Read through today's discovery.
          </p>
          <nav className="flex pt-10" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-secondary hover:text-accent-2 text-[rgb(84,16,135)]"
                >
                  <svg
                    className="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
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
                  <a
                    href="/phenom-claim"
                    className="ms-1 text-sm font-medium text-secondary hover:text-accent-2 md:ms-2 text-[rgb(84,16,135)]"
                  >
                    Phenom Claim
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article className="flex max-w-xl flex-col items-start justify-between">
              <a href="/phenom-claim/phenom-claim-for-today-1st-february">
                <img
                  src="https://backend.phenomnet.com/images/treads/phenom-claim-for-today-1st-february-6ltBH.jpeg"
                  alt=""
                  className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
                  height="250"
                />
              </a>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="2025-02-01 17:26:18" className="text-gray-700">
                  Sat Feb 01 2025
                </time>
                <a
                  href="#"
                  className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  Advertisement
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href="/phenom-claim/phenom-claim-for-today-1st-february">
                    <span className="absolute inset-0"></span> PHENOM CLAIM FOR
                    TODAY 1ST FEBRUARY
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                  https://t.me/+l-617iK1Xp9hNGI0
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src="/images/phenom-claim-for-today-1st-february-6ltBH.jpeg"
                  alt=""
                  className="size-10 rounded-full bg-gray-50"
                />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0"></span> Phenom user
                    </a>
                  </p>
                  <p className="text-gray-600">Content Creator</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhenomClaim;
