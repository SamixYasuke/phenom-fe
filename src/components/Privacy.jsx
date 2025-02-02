import BreadCrumb from "./BreadCrumb";

const Privacy = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/privacy", label: "Privacy" },
  ];
  return (
    <div>
      <BreadCrumb
        title="Privacy"
        description="Privacy Policies"
        breadcrumbItems={breadcrumbItems}
      />
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
          <div className="html-content">
            <p>
              <span className="s3">
                <span className="bumpedFont15">Privacy</span>
              </span>
              <span className="s6">
                <span className="bumpedFont15">
                  . By using the Services, you authorize us to obtain, process,
                  store, use and transmit your personal data in accordance with
                  our Privacy Policy, which forms an integral part of this
                  Agreement. In the event of a conflict between this Agreement
                  and the DPA, the DPA will control. You acknowledge that the
                  Services have not been designed to process or manage sensitive
                  information and you agree not to use the Services to collect,
                  manage or process sensitive information. We will not have, and
                  we specifically disclaim, any liability that may result from
                  your use of the Services to collect, process or manage
                  sensitive information.&nbsp;
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
