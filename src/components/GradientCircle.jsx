const GradientCircle = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      className="absolute inset-0 -z-10 h-full w-full 
                 [mask-image:radial-gradient(closest-side,white,transparent)]"
      aria-hidden="true"
    >
      <circle
        cx="512"
        cy="512"
        r="512"
        fill="url(#gradient-circle)"
        fillOpacity="0.7"
      ></circle>
      <defs>
        <radialGradient id="gradient-circle">
          <stop stopColor="#7775D6"></stop>
          <stop offset="1" stopColor="#E935C1"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
};

export default GradientCircle;
