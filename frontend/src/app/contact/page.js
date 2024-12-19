import React from "react";

const ContactUsPage = () => {
  return (
    <div className="min-h-screen py-16 font-jakarta">
      
      <div className="max-w-6xl bg-white mx-auto flex ">
        {/* Left Column: Contact Form */}
        <div className="px-8 font-instSansB w-[60%]">
          <h2 className="text-2xl  font-bold text-gray-800 mb-2">
            Get in Touch With Us.
          </h2>
          <p className="text-gray-600 font-instSansN mb-6">
            Our friendly team would love to hear from you.
          </p>
          <h2 className="text-2xl  font-bold text-gray-800 mb-6">
            
          </h2>
          <form className="space-y-3">
            <div className="flex gap-3">
              <div className="w-1/2">
                <label className="block text-gray-700 mb-2 font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="w-1/2">
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
                rows="3"
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

        {/* Right Column: Image */}
        <div className="relative w-[40%]">
          <img
            src="/Options.svg"
            alt="Contact Us"
            className="object-cover h-full w-full rounded-2xl"
          />
        </div>
      </div>

      {/* Contact Details Row */}
      <div className="max-w-6xl mx-auto text-center px-4 my-[10vh] mt-[20vh]">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          Contact Our Team
        </h3>
        <p className="text-gray-600 text-sm md:text-base">
          Whether you have questions, feedback, or just want to say hello, we're here to assist you. Connect with us today!
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border-r">
          <h3 className="text-lg font-instSansB text-black mb-2">Email</h3>
          <p className="text-gray-600">jeeneeet@example.com</p>
        </div>
        <div className="p-6 border-r">
          <h3 className="text-lg font-instSansB text-black mb-2">Contact</h3>
          <p className="text-gray-600 mb-1">+1 (123) 456-7890</p>
          <p className="text-gray-600">94465235509</p>
        </div>
        <div className="p-6 ">
          <h3 className="text-lg font-instSansB text-black mb-2">Location</h3>
          <p className="text-gray-600">
            123 Academic Lane, Knowledge City, Eduland 45678
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
