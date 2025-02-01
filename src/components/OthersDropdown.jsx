const OthersDropdown = ({ othersRef, setIsOthersOpen, isOthersOpen }) => {
  return (
    <li className="relative z-10" ref={othersRef}>
      <button
        onClick={() => setIsOthersOpen(!isOthersOpen)}
        className="flex items-center gap-1 hover:text-gray-300"
      >
        Others <span>↓</span>
      </button>
      {isOthersOpen && (
        <ul className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-lg py-2">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Option A
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Option B
            </a>
          </li>
        </ul>
      )}
    </li>
  );
};

export default OthersDropdown;
