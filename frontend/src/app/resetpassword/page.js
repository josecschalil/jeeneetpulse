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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">Reset Your Password</h1>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
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
      </div>
    </div>
  );
}
