import { useEffect, useState } from "react";
import {
  FaTimesCircle,
  FaWhatsapp,
  FaTelegramPlane,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";

const RegisterModal = ({ setIsModalOpen, socialLinks = [] }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (socialLinks.length > 0) {
      setLoading(false);
    }
  }, [socialLinks]);

  const iconMap = {
    WhatsApp: <FaWhatsapp size={30} className="text-green-500" />,
    Telegram: <FaTelegramPlane size={30} className="text-blue-500" />,
    Facebook: <FaFacebook size={30} className="text-blue-600" />,
    Twitter: <FaTwitter size={30} className="text-sky-500" />,
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50">
      <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg w-[90%] lg:w-[600px] relative">
        <button
          className="absolute top-3 right-3 text-white hover:text-gray-300"
          onClick={() => setIsModalOpen(false)}
        >
          <FaTimesCircle size={20} />
        </button>
        <h3 className="text-xl font-bold">Get Registered Now</h3>
        <p className="mt-2 text-gray-300">
          Message one of our verified agents on WhatsApp or Telegram to get a
          <span className="text-purple-400"> coupon code</span>.
        </p>
        <div className="mt-4 flex flex-col gap-4">
          {loading ? (
            <div className="flex justify-center items-center">
              <ImSpinner2 size={30} className="animate-spin text-white" />
            </div>
          ) : (
            socialLinks.length > 0 && (
              <div className="flex justify-evenly gap-6 text-center">
                {socialLinks
                  .filter((link) => link.url)
                  .map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center"
                    >
                      {iconMap[link.name] || (
                        <FaTimesCircle size={30} className="text-gray-500" />
                      )}
                      <span>{link.name}</span>
                    </a>
                  ))}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
