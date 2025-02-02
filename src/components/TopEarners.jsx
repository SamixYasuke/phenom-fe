import BreadCrumb from "./BreadCrumb";
import Leaderboard from "./LeaderBoard";

const TopEarners = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/top-earners", label: "Top Earners" },
  ];
  return (
    <div>
      <BreadCrumb
        title="Phenom Top Earners"
        description="Achievement that counts."
        breadcrumbItems={breadcrumbItems}
      />
      <div className="bg-gray-950 relative isolate overflow-hidden z-50  flex flex-col justify-between pxjh-6 py-16 shadow-2xl sm:px-16 md:py-10 lg:px-18">
        <div
          className="mx-auto max-w-md text-center px-6 lg:mx-0 lg:flex-auto lg:pb-10 lg:text-left"
          style={{ transform: "translateZ(0px)", opacity: 1 }}
        >
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-primary-text sm:text-5xl text-white">
            Expenses should not be your worries
          </h2>
          <p className="mt-6 text-pretty text-lg/8 text-secondary-text text-white">
            From turning your passion into real cash to maximizing your earning
            potential, we provide the essential.
          </p>
        </div>
        <Leaderboard />
      </div>
    </div>
  );
};

export default TopEarners;
