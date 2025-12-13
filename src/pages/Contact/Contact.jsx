import React from "react";
import MyContainer from "../../components/Shared/MyContainer/MyContainer";
import { FiAtSign } from "react-icons/fi";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { FaLocationCrosshairs } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="py-16">
      <MyContainer>
        <div className="px-6">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="inline-block mb-3 rounded-full bg-primary/10 text-primary px-4 py-1 text-sm font-medium">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text dark:text-gray-300 py-2">
              Get in touch with Microloan
            </h2>
            <p className="mt-3 dark:text-gray-300 max-w-2xl mx-auto text-sm">
              Have questions about loans, eligibility, or applications? Our
              support team is here to help you with clear and reliable guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-5 hover:scale-105 duration-200">
              <div className="bg-white dark:bg-[#2b3138] rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-text dark:text-gray-300 mb-4">
                  Contact Information
                </h3>

                <ul className="space-y-4 text-sm text-text/80 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                      <FiAtSign />
                    </span>
                    <div>
                      <div className="font-medium">Email</div>
                      <div>support@microloan.example</div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                      <BsFillTelephoneForwardFill />
                    </span>
                    <div>
                      <div className="font-medium">Phone</div>
                      <div>+880 1234 567 890</div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                      <FaLocationCrosshairs />
                    </span>
                    <div>
                      <div className="font-medium">Office</div>
                      <div>Dhaka, Bangladesh</div>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 text-xs text-text/60 dark:text-gray-300">
                  Office hours: Sunday – Thursday, 9:00 AM – 6:00 PM
                </div>
              </div>
            </div>

            {/* Contact Form (Static/ Not Functional) */}
            <div className="md:col-span-7">
              <div className="bg-white dark:bg-[#2b3138] rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-text dark:text-gray-300 mb-4">
                  Send us a message
                </h3>

                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="input input-bordered w-full"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="input input-bordered w-full"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="input input-bordered w-full sm:col-span-2"
                  />
                  <textarea
                    rows="4"
                    placeholder="Write your message..."
                    className="textarea textarea-bordered w-full sm:col-span-2"
                  />

                  <button
                    type="button"
                    className="cta_btn sm:col-span-2 inline-flex items-center justify-center cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default Contact;
