"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import showPopup from "../components/Toast";
import useAuthCheck from "@/hooks/useAuthCheck";  // Import your custom authentication hook

const SignInPage = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuthCheck();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      showPopup("You are already signed in.");
      router.push(`/`);
    }
  }, [isAuthenticated, router]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in both fields.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/token/", {
        email: formData.email,
        password: formData.password,
      });

      const { access, refresh } = response.data;
      const decodedToken = jwtDecode(access);
      const userId = decodedToken.user_id;

      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);
      localStorage.setItem("user_id", userId);

      showPopup("User Logged In Successfully.");
      router.push(`/student-portal`);
    } catch (err) {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[90vh] flex items-center justify-center bg-gray-50">
      <div className="w-full sm:max-w-md bg-white sm:shadow-lg sm:rounded-xl p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign In</h2>
        <p className="text-sm text-gray-600 text-center mt-2">
          Welcome back! Please enter your details.
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              required
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-teal-600 border-gray-300 rounded" />
              <span className="ml-2 text-sm text-gray-700">Remember me</span>
            </label>
            <a href="/resetpassword" className="text-sm text-teal-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition duration-300"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-sm text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="flex flex-col space-y-3">
          <button className="flex items-center justify-center px-4 py-2 border rounded-lg shadow-sm bg-white hover:bg-gray-100">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google Logo"
              className="h-5 w-5 mr-2"
            />
            Sign in with Google
          </button>
        </div>

        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-teal-600 font-medium hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
