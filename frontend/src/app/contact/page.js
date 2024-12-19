import React from "react";

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 ">
        {/* Left Column: Contact Form */}
        <div className="bg-white p-8 rounded-lg font-instSansB">
          <h2 className="text-2xl text-right font-bold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <form className="space-y-3">
           <div className="flex gap-3">
           <div>
              <label className="block text-gray-700 mb-2 font-medium">
                First Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Last Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
           </div>
          
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Phone
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Your Message
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Column: Contact Information */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 font-instSansB text-right">
            Contact Information
          </h2>
          <div className="space-y-6">
            <div className="py-6 border-b border-gray-300 hover:shadow px-4 rounded-xl rounded-b-none">
              <h3 className="text-lg font-instSansB text-black mb-2">Email</h3>
              <p className="text-gray-600">jeeneeet@example.com</p>
            </div>
            <div className="py-6 border-b border-gray-300 hover:shadow px-4 rounded-xl rounded-b-none">
              <h3 className="text-lg font-instSansB text-black mb-2">Contact</h3>
              <p className="text-gray-600 mb-1">+1 (123) 456-7890</p>
              <p className="text-gray-600">94465235509</p>
            </div>
            <div className="py-6 border-b border-gray-300 hover:shadow px-4 rounded-xl rounded-b-none">
              <h3 className="text-lg font-instSansB text-black mb-2">Location</h3>
              <p className="text-gray-600">
                123 Academic Lane, Knowledge City, Eduland 45678
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
