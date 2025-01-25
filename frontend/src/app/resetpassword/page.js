"use client";
import { useState } from "react";
import axios from "axios";

export default function ResetRequest() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); 
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [isLoading, setIsLoading] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true); 

    axios
      .post("http://127.0.0.1:8000/auth/users/reset_password/", {
        email: email,
      })
      .then((res) => {
        setIsSubmitted(true);
        setMessage(`An email has been sent to ${email} with instructions to reset your password.`);
      })
      .catch((error) => {
        if (error.response) {
          setMessage(error.response.data.detail || "Something went wrong. Please try again.");
        } else if (error.request) {
          setMessage("No response from the server. Please check your internet connection.");
        } else {
          setMessage("An error occurred. Please try again.");
        }
      })
      .finally(() => {
        setIsLoading(false);
        if (!isSubmitted) {
          setTimeout(() => {
            setMessage(""); 
          }, 3000);
        }
      });
  };

  return (
    <div className="h-[90vh] flex items-center justify-center font-jakarta bg-gray-50">
      <div className="w-full sm:max-w-md bg-white sm:shadow-lg sm:rounded-xl p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Reset Your Password</h2>
        <p className="text-sm text-gray-600 text-center mt-2">
          Enter your email address to receive a password reset link.
        </p>

        {!isSubmitted ? (
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                required
              />
            </div>

            {message && !isSubmitted && <p className="text-sm text-red-600">{message}</p>}

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>
        ) : (
          <p className="text-center text-gray-600 mt-4">{message}</p>
        )}

        {/* Show error message if exists */}
        {message && !isSubmitted && <p className="mt-4 text-center text-red-500">{message}</p>}

      


        <p className="text-sm text-center text-gray-600 mt-6">
          <a href="/signin" className="text-teal-600 font-medium hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
