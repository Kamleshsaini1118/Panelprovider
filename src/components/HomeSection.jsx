// import { useEffect, useState } from "react";
// import { IoIosArrowDroprightCircle } from "react-icons/io";

// const HomeSection = () => {
//   const words = [
//     "MASTER ID",
//     "AGENT ID",
//     "MASTER PANEL",
//     "SUPER MASTER",
//     "DL - MDL - SMDL",
//     "All Panels Available",
//     "24×7 Support",
//   ];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
//     }, 3000); // Fast animation

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       className="relative w-full h-[900px] flex flex-col items-center justify-center px-6 text-white "
//       style={{
//         backgroundImage: "url('/bghome.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Background Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//       <div className="absolute inset-0 bg-gradient-to-r from-[#0B0E19] to-transparent opacity-60"></div>

//       <div className="relative text-center max-w-2xl">
//         {/* Main Heading */}
//         <h2 className="text-[69px] font-bold mb-12">India's Biggest Panel Provider</h2>

//         {/* Animated Gradient Text */}
//         <div className="relative h-16 overflow-hidden w-full flex justify-center">
//           <span
//             key={currentIndex}
//             className="absolute text-[69px] -mt-7 font-bold bg-gradient-to-r from-green-300 via-orange-300 to-pink-300 bg-clip-text text-transparent animate-slide-in-out"
//           >
//             {words[currentIndex]}
//           </span>
//         </div>

//         {/* Description */}
//         <p className="mt-12 text-lg">
//           <em>
//             <strong>The Name Of Trusted Brand</strong>
//           </em>
//           <br />
//           Click on the Create button on the site of the panel you want and send it.
//         </p>
//       </div>

//       {/* Our Services Section */}
//       <div className="relative mt-10 max-w-4xl text-center">
//         <h2 className="text-3xl font-bold mb-6 text-[#FFB90C]">Our Services</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[
//             { text: "Sharing Sites List", link: "#" },
//             { text: "Rental Sites List", link: "#" },
//             { text: "Self Deposit & Withdrawal", link: "#" },
//           ].map((service, index) => (
//             <a
//               key={index}
//               href={service.link}
//               target="_blank"
//               rel="noopener noreferrer"
//                className="flex items-center justify-center px-5 py-3 bg-[#FFB90C] hover:bg-white rounded-full text-black text-[18px] font-normal transition duration-200 transform hover:scale-105 gap-x-2"
//             >
//               {service.text}
//               <IoIosArrowDroprightCircle  />
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* Tailwind Animation */}
//       <style jsx>{`
//         @keyframes slideInOut {
//           0% {
//             transform: translateX(100%);
//             opacity: 0;
//             letter-spacing: 2px;
//           }
//           20% {
//             transform: translateX(0);
//             opacity: 1;
//             letter-spacing: 0px;
//           }
//           80% {
//             transform: translateX(0);
//             opacity: 1;
//             letter-spacing: 0px;
//           }
//           100% {
//             transform: translateX(100%);
//             opacity: 0;
//             letter-spacing: 2px;
//           }
//         }

//         .animate-slide-in-out {
//           animation: slideInOut 3s ease-in-out forwards;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HomeSection;

import { useEffect, useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const HomeSection = () => {
  const words = [
    "MASTER ID",
    "AGENT ID",
    "MASTER PANEL",
    "SUPER MASTER",
    "DL - MDL - SMDL",
    "All Panels Available",
    "24×7 Support",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Fast animation

    return () => clearInterval(interval);
  }, []);

  // return (
  //   <section
  //     className="relative w-full min-h-[900px] flex flex-col items-center justify-center px-6 text-white text-center overflow-hidden"
  //     style={{
  //       backgroundImage: "url('/bghome.jpg')",
  //       backgroundSize: "cover",
  //       backgroundPosition: "center",
  //     }}
  //   >
  //     {/* Background Overlay */}
  //     <div className="absolute inset-0 bg-black bg-opacity-60"></div>
  //     <div className="absolute inset-0 bg-gradient-to-r from-[#0B0E19] to-transparent opacity-60"></div>

  //     <div className="relative max-w-4xl px-4">
  //       {/* Main Heading */}
  //       <h2 className="text-[50px] xs:text-[20px] sm:text-[50px] md:text-[69px] font-bold mb-8">
  //         India's Biggest Panel Provider
  //       </h2>

  //       {/* Animated Gradient Text */}
  //       {/* <div className="relative h-16 overflow-hidden flex justify-center">
  //         <span
  //           key={currentIndex}
  //           className="absolute text-[50px] sm:text-[60px] md:text-[69px] -mt-7 font-bold bg-gradient-to-r from-green-300 via-orange-300 to-pink-300 bg-clip-text text-transparent animate-slide-in-out"
  //         >
  //           {words[currentIndex]}
  //         </span>
  //       </div> */}
  //       <div className="relative h-24 sm:h-28 flex items-center justify-center overflow-hidden w-full">
  //         <span
  //           key={currentIndex}
  //           className="absolute text-[40px] sm:text-[55px] md:text-[69px] font-bold bg-gradient-to-r from-green-300 via-orange-300 to-pink-300 bg-clip-text text-transparent animate-slide-in-out"
  //         >
  //           {words[currentIndex]}
  //         </span>
  //       </div>

  //       {/* Description */}
  //       <p className="mt-10 text-base sm:text-lg">
  //         <em>
  //           <strong>The Name Of Trusted Brand</strong>
  //         </em>
  //         <br />
  //         Click on the Create button on the site of the panel you want and send
  //         it.
  //       </p>
  //     </div>

  //     {/* Our Services Section */}
  //     <div className="relative mt-10 w-full max-w-4xl px-4">
  //       <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#FFB90C]">
  //         Our Services
  //       </h2>
  //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  //         {[
  //           { text: "Sharing Sites List", link: "#" },
  //           { text: "Rental Sites List", link: "#" },
  //           { text: "Self Deposit & Withdrawal", link: "#" },
  //         ].map((service, index) => (
  //           <a
  //             key={index}
  //             href={service.link}
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="flex items-center justify-center px-5 py-2 bg-[#FFB90C] hover:bg-white rounded-full text-black text-[16px] sm:text-[18px] font-normal transition duration-200 transform hover:scale-105 gap-x-2"
  //           >
  //             {service.text}
  //             <IoIosArrowDroprightCircle size={22} />
  //           </a>
  //         ))}
  //       </div>
  //     </div>

  //     {/* Tailwind Animation */}
  //     <style jsx>{`
  //       @keyframes slideInOut {
  //         0% {
  //           transform: translateX(100%);
  //           opacity: 0;
  //           letter-spacing: 2px;
  //         }
  //         20% {
  //           transform: translateX(0);
  //           opacity: 1;
  //           letter-spacing: 0px;
  //         }
  //         80% {
  //           transform: translateX(0);
  //           opacity: 1;
  //           letter-spacing: 0px;
  //         }
  //         100% {
  //           transform: translateX(100%);
  //           opacity: 0;
  //           letter-spacing: 2px;
  //         }
  //       }

  //       .animate-slide-in-out {
  //         animation: slideInOut 3s ease-in-out forwards;
  //       }
  //     `}</style>
  //   </section>
  // );

  return (
    <section
      className="relative w-full min-h-[700px] sm:min-h-[900px] flex flex-col items-center justify-center px-1 text-white text-center overflow-hidden"
      style={{
        backgroundImage: "url('/bghome.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0E19] to-transparent opacity-60"></div>
  
      <div className="relative max-w-4xl px-4 ">
        {/* Main Heading */}
        <h2 className="text-[40px] xs:text-[20px] sm:text-[40px] md:text-[69px] font-bold mb-6 leading-snug sm:leading-tight">
          India's Biggest <br className="sm:hidden" /> Panel Provider
        </h2>
  
        {/* Animated Gradient Text */}
        <div className="relative h-10 sm:h-28 flex items-center justify-center overflow-hidden w-full">
          <span
            key={currentIndex}
            className="absolute text-[30px] sm:text-[45px] md:text-[69px] font-bold bg-gradient-to-r from-green-300 via-orange-300 to-pink-300 bg-clip-text text-transparent animate-slide-in-out"
          >
            {words[currentIndex]}
          </span>
        </div>
  
        {/* Description */}
        <p className="mt-8 sm:mt-10 text-base sm:text-lg w-full sm:w-full ">
          <em>
            <strong>The Name Of Trusted Brand</strong>
          </em>
          <br />
          Click on the Create button on the site of the panel you want and send it.
        </p>
      </div>
  
      {/* Our Services Section */}
      <div className="relative mt-4 sm:mt-10 w-[85%] sm:w-full max-w-4xl px-1">
        <h2 className="text-3xl sm:text-3xl font-bold mb-6 sm:mb-6 text-[#FFB90C]">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 ">
          {[
            { text: "Sharing Sites List", link: "/sharing-sites-list" },
            { text: "Rental Sites List", link: "/rental-sites-list" },
            { text: "Self Deposit & Withdrawal", link: "/self-deposit-and-withdrawal" },
          ].map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="flex items-center justify-center px-5 py-2 sm:px-8 sm:py-1 bg-[#FFB90C] hover:bg-white rounded-full text-black text-[18px] sm:text-[18px] font-normal transition duration-200 transform hover:scale-105 gap-x-2"
            >
              {service.text}
              <IoIosArrowDroprightCircle size={22} />
            </Link>
          ))}
        </div>
      </div>
  
      {/* Tailwind Animation */}
      <style jsx>{`
        @keyframes slideInOut {
          0% {
            transform: translateX(100%);
            opacity: 0;
            letter-spacing: 2px;
          }
          20% {
            transform: translateX(0);
            opacity: 1;
            letter-spacing: 0px;
          }
          80% {
            transform: translateX(0);
            opacity: 1;
            letter-spacing: 0px;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
            letter-spacing: 2px;
          }
        }
  
        .animate-slide-in-out {
          animation: slideInOut 3s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
  
};


export default HomeSection;
