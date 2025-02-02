import React from "react";
import BreadCrumb from "./BreadCrumb";

const PhenomClaim = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/phenom-claim", label: "Phenom Claim" },
  ];
  return (
    <div className="bg-white">
      <BreadCrumb
        title="Phenom Claim"
        description="Read through today's discovery."
        breadcrumbItems={breadcrumbItems}
      />

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
