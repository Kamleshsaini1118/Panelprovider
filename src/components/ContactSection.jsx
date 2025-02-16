// import React from "react";
// import { FaWhatsapp, FaInstagram, FaTelegramPlane  } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa6";

// const ContactSection = () => {
//   return (
//     <section
//       className="bg-gradient-to-br from-[#0b1725] via-[#1d2434] to-[#130738]
//  py-16"
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex justify-around ml-[290px] bg-gray-700 py-7 w-[900px]  rounded-2xl shadow-2xl">
//           <div className="w-full md:w-1/2">
//             <div className="flex items-center">
//               <div className="mr-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="54"
//                   height="54"
//                   viewBox="0 0 54 54"
//                   fill="none"
//                 >
//                   <path
//                     d="M50.2082 23.5432C50.0015 17.6529 47.6162 12.1449 43.4278 7.95657C39.0378 3.56569 33.2032 1.14835 27 1.14835C14.4712 1.14835 4.23393 11.1206 3.79265 23.5432C1.88071 24.3928 0.542526 26.3064 0.542526 28.5306V34.6579C0.542526 37.6667 2.99024 40.1153 5.9999 40.1153C7.94728 40.1153 9.53099 38.5315 9.53099 36.5842V26.6034C9.53099 24.775 8.12868 23.2841 6.34584 23.1069C7.00396 12.2842 16.0135 3.6796 27 3.6796C32.5282 3.6796 37.7266 5.83453 41.6391 9.747C45.2317 13.3397 47.3344 18.0225 47.6508 23.1078C45.8696 23.2867 44.4698 24.7767 44.4698 26.6034V36.5833C44.4698 38.4269 45.8941 39.9271 47.698 40.0832V42.6052C47.698 45.4452 45.387 47.7554 42.5469 47.7554H38.7323C38.545 47.2205 38.2514 46.726 37.8396 46.316C37.1182 45.5912 36.1564 45.1921 35.1321 45.1921H31.2002C30.6357 45.1921 30.094 45.3119 29.5979 45.5431C28.2445 46.1649 27.3704 47.5301 27.3704 49.021C27.3704 50.0453 27.7695 51.0072 28.4926 51.7269C29.2157 52.4517 30.1776 52.8508 31.2002 52.8508H35.1321C36.7622 52.8508 38.1991 51.797 38.7349 50.2867H42.5469C46.7834 50.2867 50.2293 46.8408 50.2293 42.6052V39.6326C52.1294 38.7779 53.4575 36.871 53.4575 34.6562V28.5289C53.4575 26.3064 52.1193 24.3928 50.2082 23.5432ZM6.9989 26.6034V36.5833C6.9989 37.1343 6.55087 37.5832 5.99906 37.5832C4.38581 37.5832 3.07293 36.2703 3.07293 34.657V28.5297C3.07293 26.9156 4.38581 25.6036 5.99906 25.6036C6.55087 25.6036 6.9989 26.0525 6.9989 26.6034ZM36.4019 49.2927C36.2762 49.8884 35.7412 50.3213 35.1312 50.3213H31.1993C30.8534 50.3213 30.5286 50.1863 30.2805 49.9382C30.0358 49.6944 29.9008 49.3687 29.9008 49.0227C29.9008 48.5173 30.197 48.0558 30.661 47.8423C30.8264 47.7647 31.0078 47.725 31.1993 47.725H35.1312C35.4771 47.725 35.802 47.8592 36.0492 48.1073C36.2939 48.3511 36.4289 48.6768 36.4289 49.0227C36.4297 49.1155 36.4196 49.2084 36.4019 49.2927ZM50.9262 34.657C50.9262 36.2703 49.6133 37.5832 48.0001 37.5832C47.4491 37.5832 47.0002 37.1351 47.0002 36.5833V26.6034C47.0002 26.0525 47.4483 25.6036 48.0001 25.6036C49.6133 25.6036 50.9262 26.9165 50.9262 28.5297V34.657Z"
//                     fill="url(#paint0_linear_0_11)"
//                   ></path>
//                   <path
//                     d="M35.1953 35.0933C38.1527 35.0933 40.5582 32.6869 40.5582 29.7304V18.803C40.5582 17.3737 39.9996 16.027 38.9855 15.0128C37.9713 13.9987 36.6255 13.4401 35.1953 13.4401H18.8046C15.8473 13.4401 13.4418 15.8456 13.4418 18.803V29.7304C13.4418 32.6877 15.8473 35.0933 18.8046 35.0933H18.9051V37.9249C18.9051 39.0049 19.5488 39.9634 20.5445 40.3675C20.8659 40.4966 21.2001 40.5608 21.5308 40.5608C22.2201 40.5608 22.8918 40.2874 23.3837 39.7786L28.0943 35.0933H35.1953ZM26.6811 32.9299L21.5831 38C21.5603 38.0236 21.5435 38.0413 21.4954 38.0202C21.4371 37.9966 21.4371 37.9586 21.4371 37.9249V33.8276C21.4371 33.129 20.871 32.562 20.1715 32.562H18.8055C17.2437 32.562 15.9739 31.2913 15.9739 29.7304V18.803C15.9739 17.2412 17.2437 15.9713 18.8055 15.9713H35.1962C35.9505 15.9713 36.6601 16.2667 37.1967 16.8024C37.7333 17.3391 38.0278 18.0495 38.0278 18.803V29.7304C38.0278 31.2922 36.7571 32.562 35.1962 32.562H27.5737C27.2388 32.562 26.9181 32.6945 26.6811 32.9299Z"
//                     fill="url(#paint1_linear_0_11)"
//                   ></path>
//                   <path
//                     d="M20.8516 22.6015C19.8222 22.6015 18.9844 23.4402 18.9844 24.4688C18.9844 25.4973 19.8231 26.336 20.8516 26.336C21.8818 26.336 22.7205 25.4973 22.7205 24.4688C22.7205 23.4402 21.8827 22.6015 20.8516 22.6015Z"
//                     fill="url(#paint2_linear_0_11)"
//                   ></path>
//                   <path
//                     d="M26.9991 22.6015C25.9698 22.6015 25.1319 23.4402 25.1319 24.4688C25.1319 25.4973 25.9706 26.336 26.9991 26.336C28.0302 26.336 28.8681 25.4973 28.8681 24.4688C28.8681 23.4402 28.0302 22.6015 26.9991 22.6015Z"
//                     fill="url(#paint3_linear_0_11)"
//                   ></path>
//                   <path
//                     d="M33.1467 22.6015C32.1173 22.6015 31.2795 23.4402 31.2795 24.4688C31.2795 25.4973 32.1182 26.336 33.1467 26.336C34.1769 26.336 35.0156 25.4973 35.0156 24.4688C35.0156 23.4402 34.1769 22.6015 33.1467 22.6015Z"
//                     fill="url(#paint4_linear_0_11)"
//                   ></path>
//                   <defs>
//                     <linearGradient
//                       id="paint0_linear_0_11"
//                       x1="1.46854"
//                       y1="1.14835"
//                       x2="49.0943"
//                       y2="55.1249"
//                       gradientUnits="userSpaceOnUse"
//                     >
//                       <stop stop-color="#80FCF0"></stop>
//                       <stop offset="0.333333" stop-color="#EFCE85"></stop>
//                       <stop offset="0.666667" stop-color="#EFCE85"></stop>
//                       <stop offset="1" stop-color="#AC5DFA"></stop>
//                     </linearGradient>
//                     <linearGradient
//                       id="paint1_linear_0_11"
//                       x1="13.9163"
//                       y1="13.4401"
//                       x2="38.9645"
//                       y2="41.1736"
//                       gradientUnits="userSpaceOnUse"
//                     >
//                       <stop stop-color="#80FCF0"></stop>
//                       <stop offset="0.333333" stop-color="#EFCE85"></stop>
//                       <stop offset="0.666667" stop-color="#EFCE85"></stop>
//                       <stop offset="1" stop-color="#AC5DFA"></stop>
//                     </linearGradient>
//                     <linearGradient
//                       id="paint2_linear_0_11"
//                       x1="19.0498"
//                       y1="22.6015"
//                       x2="22.4986"
//                       y2="26.4224"
//                       gradientUnits="userSpaceOnUse"
//                     >
//                       <stop stop-color="#80FCF0"></stop>
//                       <stop offset="0.333333" stop-color="#EFCE85"></stop>
//                       <stop offset="0.666667" stop-color="#EFCE85"></stop>
//                       <stop offset="1" stop-color="#AC5DFA"></stop>
//                     </linearGradient>
//                     <linearGradient
//                       id="paint3_linear_0_11"
//                       x1="25.1973"
//                       y1="22.6015"
//                       x2="28.6462"
//                       y2="26.4224"
//                       gradientUnits="userSpaceOnUse"
//                     >
//                       <stop stop-color="#80FCF0"></stop>
//                       <stop offset="0.333333" stop-color="#EFCE85"></stop>
//                       <stop offset="0.666667" stop-color="#EFCE85"></stop>
//                       <stop offset="1" stop-color="#AC5DFA"></stop>
//                     </linearGradient>
//                     <linearGradient
//                       id="paint4_linear_0_11"
//                       x1="31.3449"
//                       y1="22.6015"
//                       x2="34.7937"
//                       y2="26.4224"
//                       gradientUnits="userSpaceOnUse"
//                     >
//                       <stop stop-color="#80FCF0"></stop>
//                       <stop offset="0.333333" stop-color="#EFCE85"></stop>
//                       <stop offset="0.666667" stop-color="#EFCE85"></stop>
//                       <stop offset="1" stop-color="#AC5DFA"></stop>
//                     </linearGradient>
//                   </defs>
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-white">
//                   Have a question?
//                 </h3>
//                 <p className="text-white text-2xl font-bold">
//                   Connect with us on Whatsapp 24/7
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="w-[50px] md:w-[200px]">
//             <div className="flex flex-col gap-y-2">
//               <a
//                 className="flex items-center bg-[#4EC95C] font-medium text-black px-6 py-3 gap-x-2 rounded-full shadow-lg hover:bg-white hover:scale-105 transition"
//                 href="https://wa.link/0doqo8"
//               >
//                 <FaWhatsapp size={22} /> +91 1234567890
//               </a>
//               <a
//                 className="flex items-center bg-[#4EC95C] font-medium text-black px-6 py-3 gap-x-2 rounded-full shadow-lg hover:bg-white hover:scale-105 transition"
//                 href="https://api.whatsapp.com/send?phone=447520609000&amp;text=Hi"
//               >
//                 <FaWhatsapp size={22} /> +91 1234567890
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="mt-11 text-center">
//           <h2 className="text-3xl font-bold text-[#FFB90C]">Follow Us On</h2>
//         </div>

//         <div className="flex justify-center space-x-4 mt-8">
//           <button className="relative p-[1px] rounded-full bg-gradient-to-r from-green-300 via-orange-300 to-pink-300">
//             <a
//               className="flex items-center bg-[#080e26] text-white text-lg px-28 py-3 rounded-full shadow-lg font-medium hover:bg-white hover:text-black transition w-full h-full"
//               href="https://www.youtube.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaYoutube size={22} className="mr-2" />
//               <span className="flex-grow text-center">YouTube</span>
//             </a>
//           </button>

//           <button className="relative p-[1px] rounded-full bg-gradient-to-r from-green-300 via-orange-300 to-pink-300">
//             <a
//               className="flex items-center bg-[#080e26] text-white text-lg font-medium px-28 py-3 rounded-full shadow-lg hover:bg-white hover:text-black transition"
//               href="https://www.instagram.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaInstagram size={22} className="mr-2" />
//               <span className="flex-grow text-center">Instagram</span>
//             </a>
//           </button>

//           <button className="relative p-[1px] rounded-full bg-gradient-to-r from-green-300 via-orange-300 to-pink-300">
//             <a
//               className="flex items-center bg-[#080e26] text-white text-lg font-medium px-28 py-3 rounded-full shadow-lg hover:bg-white hover:text-black transition"
//               href="https://web.telegram.org/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaTelegramPlane size={22} className="mr-2" />
//               <span className="flex-grow text-center">Telegram</span>
//             </a>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

import React from "react";
import { FaWhatsapp, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#0b1725] via-[#1d2434] to-[#130738] py-16 px-4 ">
      <div className="container mx-auto flex flex-col items-center">
        <div className="bg-gray-700 py-7 px-6 w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              className="mr-4"
            >
              <path
                d="M50.2082 23.5432C50.0015 17.6529 47.6162 12.1449 43.4278 7.95657C39.0378 3.56569 33.2032 1.14835 27 1.14835C14.4712 1.14835 4.23393 11.1206 3.79265 23.5432C1.88071 24.3928 0.542526 26.3064 0.542526 28.5306V34.6579C0.542526 37.6667 2.99024 40.1153 5.9999 40.1153C7.94728 40.1153 9.53099 38.5315 9.53099 36.5842V26.6034C9.53099 24.775 8.12868 23.2841 6.34584 23.1069C7.00396 12.2842 16.0135 3.6796 27 3.6796C32.5282 3.6796 37.7266 5.83453 41.6391 9.747C45.2317 13.3397 47.3344 18.0225 47.6508 23.1078C45.8696 23.2867 44.4698 24.7767 44.4698 26.6034V36.5833C44.4698 38.4269 45.8941 39.9271 47.698 40.0832V42.6052C47.698 45.4452 45.387 47.7554 42.5469 47.7554H38.7323C38.545 47.2205 38.2514 46.726 37.8396 46.316C37.1182 45.5912 36.1564 45.1921 35.1321 45.1921H31.2002C30.6357 45.1921 30.094 45.3119 29.5979 45.5431C28.2445 46.1649 27.3704 47.5301 27.3704 49.021C27.3704 50.0453 27.7695 51.0072 28.4926 51.7269C29.2157 52.4517 30.1776 52.8508 31.2002 52.8508H35.1321C36.7622 52.8508 38.1991 51.797 38.7349 50.2867H42.5469C46.7834 50.2867 50.2293 46.8408 50.2293 42.6052V39.6326C52.1294 38.7779 53.4575 36.871 53.4575 34.6562V28.5289C53.4575 26.3064 52.1193 24.3928 50.2082 23.5432ZM6.9989 26.6034V36.5833C6.9989 37.1343 6.55087 37.5832 5.99906 37.5832C4.38581 37.5832 3.07293 36.2703 3.07293 34.657V28.5297C3.07293 26.9156 4.38581 25.6036 5.99906 25.6036C6.55087 25.6036 6.9989 26.0525 6.9989 26.6034ZM36.4019 49.2927C36.2762 49.8884 35.7412 50.3213 35.1312 50.3213H31.1993C30.8534 50.3213 30.5286 50.1863 30.2805 49.9382C30.0358 49.6944 29.9008 49.3687 29.9008 49.0227C29.9008 48.5173 30.197 48.0558 30.661 47.8423C30.8264 47.7647 31.0078 47.725 31.1993 47.725H35.1312C35.4771 47.725 35.802 47.8592 36.0492 48.1073C36.2939 48.3511 36.4289 48.6768 36.4289 49.0227C36.4297 49.1155 36.4196 49.2084 36.4019 49.2927ZM50.9262 34.657C50.9262 36.2703 49.6133 37.5832 48.0001 37.5832C47.4491 37.5832 47.0002 37.1351 47.0002 36.5833V26.6034C47.0002 26.0525 47.4483 25.6036 48.0001 25.6036C49.6133 25.6036 50.9262 26.9165 50.9262 28.5297V34.657Z"
                fill="url(#paint0_linear_0_11)"
              ></path>
              <path
                d="M35.1953 35.0933C38.1527 35.0933 40.5582 32.6869 40.5582 29.7304V18.803C40.5582 17.3737 39.9996 16.027 38.9855 15.0128C37.9713 13.9987 36.6255 13.4401 35.1953 13.4401H18.8046C15.8473 13.4401 13.4418 15.8456 13.4418 18.803V29.7304C13.4418 32.6877 15.8473 35.0933 18.8046 35.0933H18.9051V37.9249C18.9051 39.0049 19.5488 39.9634 20.5445 40.3675C20.8659 40.4966 21.2001 40.5608 21.5308 40.5608C22.2201 40.5608 22.8918 40.2874 23.3837 39.7786L28.0943 35.0933H35.1953ZM26.6811 32.9299L21.5831 38C21.5603 38.0236 21.5435 38.0413 21.4954 38.0202C21.4371 37.9966 21.4371 37.9586 21.4371 37.9249V33.8276C21.4371 33.129 20.871 32.562 20.1715 32.562H18.8055C17.2437 32.562 15.9739 31.2913 15.9739 29.7304V18.803C15.9739 17.2412 17.2437 15.9713 18.8055 15.9713H35.1962C35.9505 15.9713 36.6601 16.2667 37.1967 16.8024C37.7333 17.3391 38.0278 18.0495 38.0278 18.803V29.7304C38.0278 31.2922 36.7571 32.562 35.1962 32.562H27.5737C27.2388 32.562 26.9181 32.6945 26.6811 32.9299Z"
                fill="url(#paint1_linear_0_11)"
              ></path>
              <path
                d="M20.8516 22.6015C19.8222 22.6015 18.9844 23.4402 18.9844 24.4688C18.9844 25.4973 19.8231 26.336 20.8516 26.336C21.8818 26.336 22.7205 25.4973 22.7205 24.4688C22.7205 23.4402 21.8827 22.6015 20.8516 22.6015Z"
                fill="url(#paint2_linear_0_11)"
              ></path>
              <path
                d="M26.9991 22.6015C25.9698 22.6015 25.1319 23.4402 25.1319 24.4688C25.1319 25.4973 25.9706 26.336 26.9991 26.336C28.0302 26.336 28.8681 25.4973 28.8681 24.4688C28.8681 23.4402 28.0302 22.6015 26.9991 22.6015Z"
                fill="url(#paint3_linear_0_11)"
              ></path>
              <path
                d="M33.1467 22.6015C32.1173 22.6015 31.2795 23.4402 31.2795 24.4688C31.2795 25.4973 32.1182 26.336 33.1467 26.336C34.1769 26.336 35.0156 25.4973 35.0156 24.4688C35.0156 23.4402 34.1769 22.6015 33.1467 22.6015Z"
                fill="url(#paint4_linear_0_11)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_0_11"
                  x1="1.46854"
                  y1="1.14835"
                  x2="49.0943"
                  y2="55.1249"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#80FCF0"></stop>
                  <stop offset="0.333333" stop-color="#EFCE85"></stop>
                  <stop offset="0.666667" stop-color="#EFCE85"></stop>
                  <stop offset="1" stop-color="#AC5DFA"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0_11"
                  x1="13.9163"
                  y1="13.4401"
                  x2="38.9645"
                  y2="41.1736"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#80FCF0"></stop>
                  <stop offset="0.333333" stop-color="#EFCE85"></stop>
                  <stop offset="0.666667" stop-color="#EFCE85"></stop>
                  <stop offset="1" stop-color="#AC5DFA"></stop>
                </linearGradient>
                <linearGradient
                  id="paint2_linear_0_11"
                  x1="19.0498"
                  y1="22.6015"
                  x2="22.4986"
                  y2="26.4224"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#80FCF0"></stop>
                  <stop offset="0.333333" stop-color="#EFCE85"></stop>
                  <stop offset="0.666667" stop-color="#EFCE85"></stop>
                  <stop offset="1" stop-color="#AC5DFA"></stop>
                </linearGradient>
                <linearGradient
                  id="paint3_linear_0_11"
                  x1="25.1973"
                  y1="22.6015"
                  x2="28.6462"
                  y2="26.4224"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#80FCF0"></stop>
                  <stop offset="0.333333" stop-color="#EFCE85"></stop>
                  <stop offset="0.666667" stop-color="#EFCE85"></stop>
                  <stop offset="1" stop-color="#AC5DFA"></stop>
                </linearGradient>
                <linearGradient
                  id="paint4_linear_0_11"
                  x1="31.3449"
                  y1="22.6015"
                  x2="34.7937"
                  y2="26.4224"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#80FCF0"></stop>
                  <stop offset="0.333333" stop-color="#EFCE85"></stop>
                  <stop offset="0.666667" stop-color="#EFCE85"></stop>
                  <stop offset="1" stop-color="#AC5DFA"></stop>
                </linearGradient>
              </defs>
            </svg>
            <div className="text-center md:text-left py-4">
              <h3 className="text-lg font-normal md:text-xl md:font-semibold text-white">
                Have a question?
              </h3>
              <p className="text-xl md:text-2xl font-bold text-white">
                Connect with us on Whatsapp 24/7
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-5 md:mt-0">
            <a
              className="flex items-center bg-[#4EC95C] text-black px-6 py-2 rounded-full shadow-lg hover:bg-white hover:scale-105 transition text-lg"
              href="https://wa.link/0doqo8"
            >
              <FaWhatsapp size={22} className="mr-2" /> +91 12345678944
            </a>
            <a
              className="flex items-center bg-[#4EC95C] text-black px-6 py-2 rounded-full shadow-lg hover:bg-white hover:scale-105 transition text-lg"
              href="https://api.whatsapp.com/send?phone=447520609000&amp;text=Hi"
            >
              <FaWhatsapp size={22} className="mr-2" /> +91 1234567890
            </a>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-[#FFB90C] mt-11 text-center">
          Follow Us On
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {[
            {
              icon: <FaYoutube size={22} />,
              name: "YouTube",
              link: "https://www.youtube.com/",
            },
            {
              icon: <FaInstagram size={22} />,
              name: "Instagram",
              link: "https://www.instagram.com/",
            },
            {
              icon: <FaTelegramPlane size={22} />,
              name: "Telegram",
              link: "https://web.telegram.org/",
            },
          ].map((item, index) => (
            <button
              key={index}
              className="relative p-[1px] rounded-full bg-gradient-to-r from-green-300 via-orange-300 to-pink-300"
            >
              <a
                className="flex items-center bg-[#080e26] text-white text-sm md:text-lg px-32 py-3 rounded-full shadow-lg font-medium hover:bg-white hover:text-black transition w-full h-full gap-4"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
                <span className="flex-grow text-center">{item.name}</span>
              </a>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
