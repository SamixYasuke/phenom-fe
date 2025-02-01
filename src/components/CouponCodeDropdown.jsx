const CouponCodeDropdown = ({ couponRef, isCouponOpen, setIsCouponOpen }) => {
  return (
    <li className="relative z-10" ref={couponRef}>
      <button
        onClick={() => setIsCouponOpen(!isCouponOpen)}
        className="flex items-center gap-1 hover:text-gray-300"
      >
        Coupon Code <span>↓</span>
      </button>
      {isCouponOpen && (
        <ul className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-lg py-2">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Option 1
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Option 2
            </a>
          </li>
        </ul>
      )}
    </li>
  );
};

export default CouponCodeDropdown;
