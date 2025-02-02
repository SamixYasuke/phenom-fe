import GradientCircle from "./GradientCircle";

const NotYourWorry = () => {
  return (
    <section className="bg-[rgb(3,17,18)] relative overflow-hidden">
      {/* <GradientCircle /> */}

      <div className="relative mx-auto flex flex-col lg:flex-row items-center justify-between p-6">
        {/* Left: Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/not-your-worry.png"
            alt="Woman shopping online"
            className="w-[23rem] sm:w-[40rem] max-w-none"
          />
        </div>

        {/* Right: Text Section */}
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto xl:py-32 lg:text-left">
          <h2 className="text-white text-balance text-3xl font-semibold tracking-tight text-primary-text sm:text-5xl">
            Expenses should <br className="hidden md:block" /> not be your
            worries
          </h2>
          <p className="text-white max-w-[400px] mt-6 text-pretty text-lg/8 text-secondary-text">
            From turning your passion into real cash to maximizing your earning
            potential, we provide the essential.
          </p>

          <a
            href="#"
            className="mx-auto lg:mx-0 block w-fit mt-6 px-6 py-3 bg-[rgb(84,16,135)] text-white font-semibold rounded-lg hover:bg-purple-700"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotYourWorry;
