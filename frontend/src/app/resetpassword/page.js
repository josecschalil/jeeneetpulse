"use client";
import { useState } from 'react';

export default function ResetRequest() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // New state to track submission

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/reset-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        // Success
        setIsSubmitted(true);
        setMessage(`An email has been sent to ${email} with further instructions.`);
      } else {
        // Error
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
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
            >
              Send Reset Link
            </button>
          </form>
        ) : (
          <p className="text-center text-gray-600 mt-4">{message}</p>
        )}
        {!isSubmitted && message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </div>
    </div>
  );
}
