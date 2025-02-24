import React from "react";
import { FaChevronRight } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="bg-[#0a1128] h-auto">
      <section className="container mx-auto px-4 py-14">
        {/* Section First */}
        <div className="flex flex-col items-center justify-center mt-11 md:mt-24 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Contact Us</h2>
          <span className="flex text-base md:text-lg gap-x-2 font-medium text-white">
            HOME <FaChevronRight size={18} className="mt-1" /> CONTACT US
          </span>
        </div>

        {/* Section Second */}
        <div className="flex flex-col items-start justify-center text-center my-16 px-4 md:pl-72">
          <h2 className="text-white text-2xl md:text-4xl font-bold">Get in touch with us</h2>

          <div className="flex flex-col md:flex-row items-center bg-gradient-to-br from-[#0b172595] to-[#1d2434bb] shadow-lg rounded-2xl w-full max-w-3xl border-[1px] border-purple-400 hover:border-yellow-400 px-14 md:px-8 py-9 mt-8">
            <div className="mb-6 md:mb-0 md:mr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 82 66"
                fill="none"
              >
                <path
                  d="M59.6871 14.9219H5C2.23858 14.9219 0 17.1605 0 19.9219V66.0003L14.9218 58.5394H59.6871V14.9219Z"
                  fill="url(#paint0_linear_1_8175)"
                ></path>
                <path
                  d="M25.6602 0H81.4951V53.3741L64.8516 43.9224H20.6602V5C20.6602 2.23858 22.8987 0 25.6602 0Z"
                  fill="#2662FA"
                ></path>
                <rect
                  opacity="0.7"
                  x="5.73828"
                  y="0.574219"
                  width="8.50744"
                  height="8.03481"
                  fill="#FF7236"
                ></rect>
                <defs>
                  <linearGradient
                    id="paint0_linear_1_8175"
                    x1="1.04452"
                    y1="14.9219"
                    x2="46.9318"
                    y2="74.3007"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#80FCF0"></stop>
                    <stop offset="1" stopColor="#AC5DFA"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Contact Info</h3>
              <p className="text-white text-base md:text-lg font-semibold">
                +91-8290595394 <br />
                +91-8290595394
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
