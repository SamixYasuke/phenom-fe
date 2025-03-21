import BreadCrumb from "./BreadCrumb";

const CouponCodeChecker = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "#", label: "Code checker" },
  ];
  return (
    <div className="pb-10 sm:py-22 md:px-10">
      <BreadCrumb
        title="Coupon code Checker"
        description="Validate your coupon code."
        breadcrumbItems={breadcrumbItems}
      />
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-5 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 pt-16 shadow-2xl sm:rounded-3xl px-0 md:w-full md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto grid place-items-center max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto py-32 lg:text-left">
                <h2 className="text-4xl font-semibold tracking-tight text-white">
                  Code Checker
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  Paste your code in here to check for its status
                </p>
                <form>
                  <div className="mt-6 flex max-w-md gap-x-4">
                    <label htmlFor="couponCode" className="sr-only">
                      Coupon Code
                    </label>
                    <input
                      id="couponCode"
                      name="code"
                      type="text"
                      autoComplete="off"
                      required
                      className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
                      placeholder="Enter code"
                    />
                    <button
                      type="submit"
                      className="flex-none rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 bg-[rgb(84,16,135)]"
                    >
                      Check Code
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
              aria-hidden={true}
            >
              <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponCodeChecker;
