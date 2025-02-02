"use client";
import { useState } from "react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-vh bg-[url('/images/phenom-s-3-BreRgSBx.jpg')] bg-no-repeat bg-cover flex items-center justify-center">
      <div className="h-screen flex items-center justify-center bg-cover bg-center">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-96 text-white border border-white/20">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <a href="/" className="">
              <img
                className="mx-auto h-auto w-10"
                src="/images/logo.png"
                alt="Phenom"
              />
            </a>
            <h2 className="text-center text-2xl/9 font-medium tracking-tight text-gray-100">
              Sign in to your account
            </h2>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <label className="block text-sm mb-1">Username/Email</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-white text-black border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <div className="flex justify-between items-center mt-4">
              <label className="text-sm">Password</label>
              <a
                href="#"
                className="text-yellow-400 text-sm hover:text-purple-500"
              >
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-2 rounded bg-white text-black border border-gray-600 focus:outline-none focus:border-purple-500"
              />
              <button
                type="button"
                className="absolute text-purple-500 right-3 top-1/2 transform -translate-y-1/2"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  // Open Eye Icon
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                  >
                    <path d="M12 4.5C6.5 4.5 2.4 8.4 1 12c1.4 3.6 5.5 7.5 11 7.5s9.6-3.9 11-7.5c-1.4-3.6-5.5-7.5-11-7.5Zm0 12c-2.5 0-4.5-2-4.5-4.5S9.5 7.5 12 7.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5Zm0-7.5c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3Z"></path>
                  </svg>
                ) : (
                  // Closed Eye Icon
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                  >
                    <path d="M2 12s3.8-7 10-7 10 7 10 7-3.8 7-10 7S2 12 2 12Zm10 5.5c-2.5 0-4.5-2-4.5-4.5S9.5 7.5 12 7.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5Zm0-7.5c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3Z"></path>
                  </svg>
                )}
              </button>
            </div>
          </form>
          <button className="w-full bg-purple-700 hover:bg-purple-800 mt-4 p-2 rounded font-semibold">
            Sign in
          </button>
          <p className="text-center text-sm mt-4">
            Not a member?{" "}
            <a
              href="/register"
              className="text-yellow-400 hover:text-purple-500"
            >
              Register Now!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
