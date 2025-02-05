import React from "react";

const FeatureSection = () => {
  return (
    <div className="bg-gray-100 relative overflow-hidden">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 z-30 mb-32">
        <div className="pt-32">
          <h2 className="text-center text-base/7 font-semibold text-secondary z-20 text-[rgb(56,22,82)]">
            Deploy faster
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Everything you need to deploy your app
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Mobile friendly
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Phenom is designed for seamless mobile use. Enjoy a smooth,
                  fast, and responsive experience on any device—anytime,
                  anywhere
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-purple-600 bg-gray-900 shadow-2xl">
                  <img
                    className="size-full object-cover object-top"
                    src="/images/dashboard-BbqSbsTu.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>

          {/* Second Item */}
          <div className="relative max-lg:row-start-1 bg-[rgb(56,22,82)] rounded-md">
            <div className="absolute inset-px rounded-lg bg-primary max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-50 max-lg:text-center">
                  Performance
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-100 max-lg:text-center">
                  Phenom is built for speed and efficiency. Experience
                  lightning-fast load times, smooth navigation, and optimized
                  performance on any device.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs"
                  src="/images/bento-03-performance.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>

          {/* Third Item */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Security
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  At Phenom, your security is our top priority. We implement
                  advanced encryption, secure authentication, and continuous
                  monitoring to protect your data. Start earning today
                </p>
              </div>
              <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                <img
                  className="h-[min(152px,40cqw)] object-cover object-center"
                  src="/images/bento-03-security.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>

          {/* Fourth Item */}
          <div className="relative lg:row-span-2 bg-[rgb(56,22,82)] rounded-md lg:rounded-tr-[2rem] lg:rounded-br-[2rem]">
            <div className="absolute inset-px rounded-lg bg-primary max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full gap-5 flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-primary-text max-lg:text-center text-white">
                  Powerful APIs
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-secondary-text max-lg:text-center text-gray-300">
                  Phenom offers robust and scalable APIs, enabling seamless
                  integration, fast data processing, and secure connections for
                  all your needs.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full max-lg:mx-auto max-lg:max-w-sm">
                <img
                  className="size-full object-cover object-top"
                  src="/images/phenom-features-DbbpzyQs.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
