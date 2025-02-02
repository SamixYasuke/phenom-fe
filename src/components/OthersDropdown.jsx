const OthersDropdown = ({ othersRef, setIsOthersOpen, isOthersOpen }) => {
  return (
    <li className="relative z-10" ref={othersRef}>
      <button
        onClick={() => setIsOthersOpen(!isOthersOpen)}
        className="flex items-center gap-1 hover:text-gray-300 font-semibold text-sm"
      >
        Others{" "}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </button>
      {isOthersOpen && (
        <ul className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-lg py-2">
          <li>
            <a
              href="/privacy"
              className="block px-4 py-2 hover:bg-gray-200 text-sm"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/terms"
              className="block px-4 py-2 hover:bg-gray-200 text-sm"
            >
              Terms & Conditions
            </a>
          </li>
        </ul>
      )}
    </li>
  );
};

export default OthersDropdown;
