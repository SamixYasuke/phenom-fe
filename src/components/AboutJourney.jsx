import React from "react";
import {
  FaCloudUploadAlt,
  FaLock,
  FaSyncAlt,
  FaFingerprint,
} from "react-icons/fa";
import BreadCrumb from "./BreadCrumb";

const AboutJourney = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
  ];
  return (
    <div className="bg-white">
      <BreadCrumb
        title="About Our Journey"
        description="Discover the story behind our success and values."
        breadcrumbItems={breadcrumbItems}
      />

      <div className="bg-white py-24 sm:py-32 relative overflow-hidden isolate">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-secondary text-[rgb(84,16,135)]">
              Earn & Learn on Phenom
            </h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
              WHAT IS PHENOM ABOUT
            </p>

            <p className="mt-6 text-lg/8 text-gray-600">
              We are a diverse, inclusive, and globally integrated system
              designed to connect you with limitless access to extensive
              financial opportunities and aesthetics. Our mission is to create
              and foster a wide range of ambitions and aspirations for users
              worldwide. Here we offer you opportunities to learn 21st century
              advanced digital skills and Earn with your mobile device by
              Leveraging on our networking and affiliate marketing program.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <div className="text-base/7 font-semibold">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary bg-purple-900 text-white">
                    <FaCloudUploadAlt />
                  </div>
                  Skill Acquisition
                </div>
                <dd className="mt-2 text-base/7 text-gray-600">
                  Phenom isn’t just about earning; it’s also about learning. Our
                  platform offers users access to expert-led courses in various
                  areas of the digital world, helping you develop new skills and
                  unlock your smartphone’s full potential.
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary bg-purple-900 text-white">
                      <FaLock />
                    </div>
                  </div>
                  Quick Loans
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  With Phenom Loan, users can request a loan without needing any
                  collateral and at a very fair interest rate. This feature is
                  available to all Phenom users and is designed to help small
                  business owners grow by providing quick financial support.
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary bg-purple-900 text-white">
                      <FaSyncAlt />
                    </div>
                  </div>
                  Free Data
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  We offer free internet data to all our users. This makes it
                  easier for everyone, including students, entrepreneurs, and
                  employees to access the platform’s learning resources,
                  career-building features, and networking opportunities without
                  extra costs.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary bg-purple-900 text-white">
                      <FaFingerprint />
                    </div>
                  </div>
                  Earn Big
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  Users have the opportunity to earn huge income through
                  Phenom’s affiliate program. You can promote our brand,
                  encourage sign-ups, and grow your own business by leveraging
                  our well-established network.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className="py-14 sm:py-32 relative overflow-hidden isolate">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width="200"
                height="200"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none"></path>
              </pattern>
            </defs>
            <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth="0"
              ></path>
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            ></rect>
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div>
            <h2 className="text-center text-4xl md:text-5xl font-bold ">
              About Phenom
            </h2>
            <hr />
            <p className="text-[#333] mb-7">WHAT IS PHENOM?</p>
            <p className="text-pretty leading-6 text-lg text-[#333]">
              PHENOM is a diverse, inclusive, and globally integrated system
              designed to connect you with limitless access to extensive
              financial opportunities and aesthetics. Its mission is to create
              and foster a wide range of ambitions and aspirations for users
              worldwide. Here we offer you the opportunity to mine
              cryptocurrencies directly from your mobile phone and access
              cutting-edge digital courses. Our platform enables you to monetize
              your social media accounts for passive income, while our advanced
              earning models provide daily rewards, enhancing your financial
              potential. Join us as your home and pathway to financial freedom,
              where we empower you to embrace a life of abundance and
              opportunity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutJourney;
