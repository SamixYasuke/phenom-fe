"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaSpinner } from "react-icons/fa";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Add state for error messages
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setLoading;
    true;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid credentials. Please try again.");
      setLoading(false);
    } else {
      setLoading(false);
      router.push("/admin"); // Redirect to admin page
    }
  };

  return (
    <div className="h-screen bg-[url('/images/phenom-s-3-BreRgSBx.jpg')] bg-no-repeat bg-cover flex items-center justify-center">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-96 text-white border border-white/20">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <a href="/" className="">
            <img
              className="mx-auto h-auto w-10"
              src="/images/logo.png"
              alt="Phenom"
            />
          </a>
          <h2 className="text-center text-2xl font-medium tracking-tight text-gray-100">
            Sign in to your account
          </h2>
        </div>
        <form className="space-y-6" onSubmit={handleLogin}>
          <label className="block text-sm mb-1">Username/Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete={true}
              type={showPassword ? "text" : "password"}
              className="w-full p-2 rounded bg-white text-black border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <button
              type="button"
              className="absolute text-purple-500 right-3 top-1/2 transform -translate-y-1/2"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <svg
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4.5C6.5 4.5 2.4 8.4 1 12c1.4 3.6 5.5 7.5 11 7.5s9.6-3.9 11-7.5c-1.4-3.6-5.5-7.5-11-7.5Zm0 12c-2.5 0-4.5-2-4.5-4.5S9.5 7.5 12 7.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5Zm0-7.5c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3Z"></path>
                </svg>
              ) : (
                <svg
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2 12s3.8-7 10-7 10 7 10 7-3.8 7-10 7S2 12 2 12Zm10 5.5c-2.5 0-4.5-2-4.5-4.5S9.5 7.5 12 7.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5Zm0-7.5c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3Z"></path>
                </svg>
              )}
            </button>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}{" "}
          {/* Show error message here */}
          <button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800 mt-4 p-2 rounded font-semibold"
          >
            Sign in
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Not a member?{" "}
          <a href="/register" className="text-yellow-400 hover:text-purple-500">
            {loading ? (
              <div className="animate-spin">
                <FaSpinner />
              </div>
            ) : (
              <p>Register Now!</p>
            )}
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
