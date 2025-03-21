const HeroSection = () => {
  return (
    <section className="pt-32 sm:pt-56 pb-52 relative bg-[url('/images/phenom-hero-section-bg.jpg')] bg-cover bg-no-repeat bg-center w-full h-fit">
      <div className=" absolute inset-0 bg-gradient-to-b from-[#22063670] to-[#220636]"></div>

      {/* Button Section */}
      <div className="relative justify-center hidden sm:flex">
        <a
          href="#"
          className="w-[438.69px] h-[32px] flex items-center justify-around gap-1 border-gray-100 py-3 px-1 relative rounded-full text-sm text-gray-100 transition duration-300 ease-in-out ring-1 ring-gray-500 hover:ring-black/30"
        >
          <span className="font-semibold text-sm">
            Announcing our next round of funding.
          </span>
          <span className="font-bold text-accent text-yellow-400 text-lg">
            Read more →
          </span>
        </a>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col justify-center items-center pt-8 px-4">
        <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl font-sans">
          Phenom
        </h1>
        <h3 className="text-center text-balance px-8 md:px-0 text-3xl font-semibold tracking-tight text-gray-300 sm:text-5xl">
          Unleash the opulence in you
        </h3>
      </div>

      {/* Description */}
      <div className="relative ">
        <p className="mt-8 text-pretty text-gray-400 sm:text-xl/8 text-center px-6 md:px-0 max-w-5xl text-xl font-medium md:max-w-2xl mx-auto">
          We’re dedicated to your success, offering innovative and creative
          features tailored to you. Your path to greatness begins with us,
          unlock your digital potential today. Together, let’s turn your vision
          into reality.
        </p>
      </div>

      {/* Get Started Button */}
      <div className="relative flex justify-center mt-8">
        <a
          href="/register"
          className="text-sm font-bold text-purple-900  hover:text-white transition bg-yellow-400 hover:bg-purple-950 px-4 py-3 rounded-md"
        >
          Get started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
