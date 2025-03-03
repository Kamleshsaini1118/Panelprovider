// import { useEffect, useState } from "react";
// import { FaChevronLeft, FaChevronRight, FaCheck } from "react-icons/fa";

// const images = [
//   "https://www.patelpanel.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-11-at-6.14.51-PM-scaled.jpeg",
//   "https://www.patelpanel.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-11-at-6.14.50-PM-scaled.jpeg",
// ];

// const AboutUs = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     document.title = "About Us - JPR Panel";
//   }, []);

//   // Auto-slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   return (
//     <div className="bg-[#0a1128] h-auto">
//       <section className="container mx-auto p-6">
//         <div className="flex flex-col items-center justify-center mt-16 md:mt-28 gap-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-white">About Us</h2>
//           <span className="flex text-base md:text-lg gap-x-2 font-medium text-white">
//             HOME <FaChevronRight size={18} className="mt-1" /> ABOUT US
//           </span>
//         </div>

//         <div className="flex flex-col md:flex-row justify-center items-start gap-20 my-20">
//           {/* Left Side - Image Slider */}
//           <div className="relative w-[300px] md:w-[400px] h-[300px] md:h-[400px] flex justify-center items-center ml-[13px]">
//             <button
//               onClick={prevSlide}
//               className="absolute -left-9 md:-left-14 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 z-10 flex"
//             >
//               <FaChevronLeft size={18} />
//             </button>

//             {/* Image Slider */}
//             <img
//               className="rounded-lg shadow-lg w-full h-full object-cover transition-all duration-500"
//               src={images[currentIndex]}
//               alt="Patel Panel"
//             />

//             {/* Right Arrow - Outside Image */}
//             <button
//               onClick={nextSlide}
//               className="absolute -right-9 md:-right-14 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 z-10 flex"
//             >
//               <FaChevronRight size={18} />
//             </button>
//           </div>

//           {/* Right Side - About Content */}
//           <div className="w-full md:w-1/2 flex flex-col justify-center">
//             <h2 className="text-2xl md:text-5xl font-bold text-[#FFB90C] text-left">
//               Patel Panel Provider
//             </h2>
//             <p className="text-lg text-white mt-8 text-left">
//               India’s Biggest Panel Provider
//             </p>
//             <p className="text-white mt-4 text-left">
//               <em>
//                 <strong>The Name Of Trusted Brand</strong>
//               </em>
//               <br />
//               जिस साइड का पैनल चाहिए उसका लिंक कॉपी करके सेंड कर दें रेट बता
//               दिया जाएगा आपको, क्योंकि सबका रेट अलग-अलग है।
//             </p>
//             <p className="text-white mt-2 text-left">
//               We are India’s Biggest Panel Provider like; Sports Club, Rental,
//               Sharing, Super Admin, Admin, SMDL, MDL, DL, etc. at low rates.
//             </p>
//             <ul className="mt-4 space-y-2 text-left text-white">
//               <li className="flex items-center gap-x-2">
//                 <span className="bg-[#FFB90C] rounded-full p-1">
//                   <FaCheck size={14} className="text-black" />
//                 </span>
//                 Master Panel Provider & Rental Site Available 100% Trusted
//               </li>
//               <li className="flex items-center gap-x-2">
//                 <span className="bg-[#FFB90C] rounded-full p-1">
//                   <FaCheck size={14} className="text-black" />
//                 </span>
//                 SUPER ADMIN, ADMIN- SMDL-MDL-DL
//               </li>
//               <li className="flex items-center gap-x-2">
//                 <span className="bg-[#FFB90C] rounded-full p-1">
//                   <FaCheck size={14} className="text-black" />
//                 </span>
//                 24x7 Services Available
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;


import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCheck } from "react-icons/fa";

// Dummy Images
const images = [
  "https://www.patelpanel.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-11-at-6.14.51-PM-scaled.jpeg",
  "https://www.patelpanel.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-11-at-6.14.50-PM-scaled.jpeg",
];

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true); // ✅ Loading state

  useEffect(() => {
    document.title = "About Us - JPR Panel";
    
    // ✅ Favicon Update
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = "/55.png"; // Apna actual favicon path use karo
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // ✅ 2 sec baad actual page show karega
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="bg-[#0a1128] h-auto">
      <section className="container mx-auto p-6">
        {loading ? (
          // ✅ Skeleton Loader
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="h-6 w-64 bg-gray-700 rounded-md animate-pulse mb-4"></div>
            <div className="h-48 w-80 md:w-96 bg-gray-700 rounded-md animate-pulse mb-4"></div>
            <div className="h-6 w-64 bg-gray-700 rounded-md animate-pulse"></div>
          </div>
        ) : (
          // ✅ Actual Content with Smooth Fade-in Animation
          <div
            className="opacity-0 animate-fade-in"
            style={{ animation: "fadeIn 1s forwards" }}
          >
            <div className="flex flex-col items-center justify-center mt-16 md:mt-28 gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                About Us
              </h2>
              <span className="flex text-base md:text-lg gap-x-2 font-medium text-white">
                HOME <FaChevronRight size={18} className="mt-1" /> ABOUT US
              </span>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-start gap-20 my-20">
              {/* Left Side - Image Slider */}
              <div className="relative w-[300px] md:w-[400px] h-[300px] md:h-[400px] flex justify-center items-center ml-[13px]">
                <button
                  onClick={prevSlide}
                  className="absolute -left-9 md:-left-14 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 z-10 flex"
                >
                  <FaChevronLeft size={18} />
                </button>

                <img
                  className="rounded-lg shadow-lg w-full h-full object-cover transition-all duration-500"
                  src={images[currentIndex]}
                  alt="Patel Panel"
                />

                <button
                  onClick={nextSlide}
                  className="absolute -right-9 md:-right-14 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 z-10 flex"
                >
                  <FaChevronRight size={18} />
                </button>
              </div>

              {/* Right Side - About Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl md:text-5xl font-bold text-[#FFB90C] text-left">
                  Patel Panel Provider
                </h2>
                <p className="text-lg text-white mt-8 text-left">
                  India’s Biggest Panel Provider
                </p>
                <p className="text-white mt-4 text-left">
                  <em>
                    <strong>The Name Of Trusted Brand</strong>
                  </em>
                  <br />
                  जिस साइड का पैनल चाहिए उसका लिंक कॉपी करके सेंड कर दें रेट बता
                  दिया जाएगा आपको, क्योंकि सबका रेट अलग-अलग है।
                </p>
                <p className="text-white mt-2 text-left">
                  We are India’s Biggest Panel Provider like; Sports Club,
                  Rental, Sharing, Super Admin, Admin, SMDL, MDL, DL, etc. at
                  low rates.
                </p>
                <ul className="mt-4 space-y-2 text-left text-white">
                  <li className="flex items-center gap-x-2">
                    <span className="bg-[#FFB90C] rounded-full p-1">
                      <FaCheck size={14} className="text-black" />
                    </span>
                    Master Panel Provider & Rental Site Available 100% Trusted
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="bg-[#FFB90C] rounded-full p-1">
                      <FaCheck size={14} className="text-black" />
                    </span>
                    SUPER ADMIN, ADMIN- SMDL-MDL-DL
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="bg-[#FFB90C] rounded-full p-1">
                      <FaCheck size={14} className="text-black" />
                    </span>
                    24x7 Services Available
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ✅ Smooth Fade-in Animation CSS */}
      <style>
      {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 1s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default AboutUs;
