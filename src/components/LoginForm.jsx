"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaSpinner, FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
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
      router.push("/admin");
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
          <label className="block text-sm mb-1">
            This page is for phenom admin only
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter admin username"
            type="text"
            className="w-full p-2 rounded bg-white text-black border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <div className="relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter Password"
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              className="w-full p-2 rounded bg-white text-black border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <button
              type="button"
              className="absolute text-purple-500 right-3 top-1/2 transform -translate-y-1/2"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}{" "}
          {/* Show error message here */}
          <button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800 mt-4 p-2 rounded font-semibold"
            disabled={loading}
          >
            {loading ? (
              <FaSpinner className="animate-spin mx-auto" />
            ) : (
              "Sign in"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
