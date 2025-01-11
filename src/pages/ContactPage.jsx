import React, { useState } from "react";
import { faqs } from "../data";

const ContactPage = () => {
  const [budget, setBudget] = useState([1000, 5000]);

  const handleBudgetChange = (e, index) => {
    const updatedBudget = [...budget];
    updatedBudget[index] = Number(e.target.value);
    setBudget(updatedBudget);
  };

  return (
    <div>
      <div className="">
        <div className="bg-services-pattern h-64 relative flex justify-center items-center text-white">
          <div className="absolute w-full h-full bg-black/70"></div>
          <div className="text-center py-12 space-y-5 z-10">
            <h1 className="text-4xl font-semibold tracking-widest">
              Contact Us
            </h1>
            <p className="px-72">
              Get in touch with us today and let us help you with any questions
              or inquiries you may have.
            </p>
          </div>
        </div>
      </div>

      {/* contact */}
      <div className="min-h-screen bg-black flex items-center justify-center">
        <form className="w-full max-w-lg bg-grey15 p-8 rounded-lg space-y-6 text-white">
          {/* Full Name */}
          <div className="grid grid-cols-2 gap-4 bg-grey20 rounded-md p-2">
            <div>
              <label className="block mb-2 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-700 p-2 text-sm focus:outline-none focus:border-green-500"
                placeholder="Type here"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-gray-700 p-2 text-sm focus:outline-none focus:border-green-500"
                placeholder="Type here"
              />
            </div>
          </div>

          {/* Why are you contacting us? */}
          <div className="bg-grey20 rounded-md p-2">
            <label className="block mb-4 text-sm font-medium">
              Why are you contacting us?
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 rounded-md text-green-500 focus:ring-2 focus:ring-green-500"
                />
                <span className="ml-2 text-sm">Web Design</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-green-500 rounded focus:ring-2 focus:ring-green-500"
                />
                <span className="ml-2 text-sm">Collaboration</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-green-500 rounded focus:ring-2 focus:ring-green-500"
                />
                <span className="ml-2 text-sm">Mobile App Design</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-green-500 rounded focus:ring-2 focus:ring-green-500"
                />
                <span className="ml-2 text-sm">Others</span>
              </label>
            </div>
          </div>

          {/* Budget Slider */}
          <div className="bg-grey20 rounded-md py-10 px-3">
            <label className="block mb-2 text-md font-medium">
              Your Budget
            </label>
            <p className="text-xs mb-4">Slide to indicate your budget range</p>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="1000"
                max="5000"
                value={budget[0]}
                onChange={(e) => handleBudgetChange(e, 0)}
                className="slider-thumb appearance-none h-2 bg-gray-700 rounded-full w-full accent-green-500"
              />
              <span className="text-sm">${budget[0]}</span>
            </div>
          </div>

          {/* Your Message */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Your Message
            </label>
            <textarea
              className="w-full bg-transparent border-b border-gray-700 p-2 text-sm focus:outline-none focus:border-green-500"
              placeholder="Type here"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-green-500 text-black py-2 px-4 rounded-lg font-medium hover:bg-green-600 focus:ring-4 focus:ring-green-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* FAQ */}

      <div>
        <div className="text-center py-20 space-y-5 z-10 mt-10">
          <h1 className="text-4xl font-semibold tracking-widest">
            Frequently Asked Questions
          </h1>
          <p className="px-[12%]">
            Still you have any questions? Contact our Team via
            hello@squareup.com
          </p>
        </div>

        <div>
          <div className="space-y-10 mt-20">
            <div className="grid lg:grid-cols-2">
              {faqs.map((faq) => {
                const { id, Header, description, num } = faq;

                return (
                  <div key={id}>
                    <div className="collapse collapse-plus bg-white99 border border-gray-800 p-2">
                      <input
                        type="radio"
                        name="my-accordion-2"
                        defaultChecked
                      />

                      <div className="collapse-title lg:text-xl font-medium text-green80 flex gap-10">
                        <p className=""> {num} </p>
                        <p>{Header}</p>
                      </div>
                      <div className="collapse-content">
                        <p className="px-14 lg:text-base text-sm">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
