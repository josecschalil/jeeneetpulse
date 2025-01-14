import React from "react";

const ContactUsPage = () => {
  return (
    <div className="md:min-h-screen md:bg-gray-50 md:py-8 font-jakarta md:px-6">
      <div className="max-w-5xl mx-auto bg-white md:shadow-md md:rounded-2xl p-6">
        <div className=" bg-white mx-auto flex flex-col md:flex-row ">

          <div className="px-6 font-instSansB md:w-[50%]">
            <h2 className="text-2xl  font-bold text-gray-800 mb-2">
              Get in Touch With Us.
            </h2>
            <p className="text-gray-600 font-instSansN mb-6">
              Our friendly team would love to hear from you.
            </p>
            <h2 className="text-2xl  font-bold text-gray-800 mb-6"></h2>
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


          <div className="hidden md:block relative md:w-[50%] pr-6">
            <img
              src="/1 (2).avif"
              alt="Contact Us"
              className="object-cover object-right h-full w-full rounded-2xl"
            />
          </div>
        </div>


      </div>
    </div>
  );
};

export default ContactUsPage;
