import { FaGraduationCap, FaLock, FaLaptop } from "react-icons/fa";
import Gradient from "./Gradient";

const WhatIsPhenomAbout = () => {
  const featuresData = [
    {
      title: "Skill Acquisition",
      description:
        "Phenom isn’t just about earning; it’s also about learning. Our platform offers users access to expert-led courses in various areas of the digital world, helping you develop new skills and unlock your smartphone’s full potential.",
      icon: <FaGraduationCap />,
    },
    {
      title: "Quick Loans",
      description:
        "With Phenom Loan, users can request a loan without needing any collateral and at a very fair interest rate. This feature is available to all Phenom users and is designed to help small business owners grow by providing quick financial support.",
      icon: <FaLock />,
    },
    {
      title: "Social media monetization",
      description:
        "Phenom allows users to monetize their social media accounts effortlessly. By connecting your Instagram or TikTok account to Phenom, you can create videos showcasing Phenom and its features. Simply use our official hashtags and tag us in your posts.",
      icon: <FaLaptop />,
    },
    {
      title: "Phenom Quiz",
      description:
        "The Phenom Quiz is a daily opportunity to earn by answering questions correctly. Each correct answer rewards you handsomely, which is added to your affiliate balance, New questions are posted every day, giving you consistent chances to boost your earnings just by testing your knowledge.",
      icon: <FaLaptop />,
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-24 lg:pt-32">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <Gradient />
      </div>
      <div className="text-start lg:text-center max-w-4xl mx-auto">
        <p className="text-base/7 font-semibold text-[rgb(84,16,135)]">
          Earn & Learn on Phenom
        </p>
        <h2 className="mt-2 text-pretty text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
          WHAT IS PHENOM ABOUT
        </h2>
        <p className="mt-6 text-lg/8 text-gray-600 max-w-[640px] mx-auto">
          We are a diverse, inclusive, and globally integrated system designed
          to connect you with limitless access to extensive financial
          opportunities and aesthetics. Our mission is to create and foster a
          wide range of ambitions and aspirations for users worldwide. Here we
          offer you opportunities to learn 21st-century advanced digital skills
          and Earn with your mobile device by leveraging our networking and
          affiliate marketing program.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 text-left mx-auto max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        {featuresData.map((feature, index) => (
          <div key={index} className="flex items-start gap-4 mt-10">
            <div className="bg-[rgb(84,16,135)] p-3 rounded-md text-white text-2xl">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-base/7 text-gray-600 max-w-[500px] lg:max-w-80">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIsPhenomAbout;
