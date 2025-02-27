// import React, { useEffect, useState } from 'react';
// import { FaChevronRight } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { useInView } from 'react-intersection-observer';

// const ShareSite = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     document.title = "Rental Sites List - JPR Panel";

//     // Simulating data fetching
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//   }, []);

//   // Scroll animation hook
//   const { ref, inView } = useInView({
//     triggerOnce: false,
//     threshold: 0.2, // 20% visible hone par trigger hoga
//   });

//   return (
//     <div className="bg-[#0a1128] h-auto">
//       <section className="container mx-auto p-4">
//         {/* Section First */}
//         <div className="flex flex-col items-center justify-center mt-20 md:my-24 gap-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-white">
//             Services
//           </h2>
//           <span className="flex text-base md:text-lg gap-x-2 font-medium text-white">
//             HOME <FaChevronRight size={18} className="mt-1" /> SHARING SITES LIST
//           </span>
//         </div>

//         {/* Section Second */}
//         <div ref={ref} className={`transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
//           <div className="flex flex-col items-center justify-center text-center mt-14 md:mt-20">
//             <h2 className="text-white text-2xl md:text-6xl font-bold md:mb-10">
//              Sharing Sites List
//             </h2>

//             {/* Mapping through sample data */}
//             {loading ? (
//               // Skeleton Loader
//               Array(3)
//                 .fill(0)
//                 .map((_, index) => (
//                   <div
//                     key={index}
//                     className="animate-pulse flex flex-row items-center bg-gray-800 
//                     shadow-lg rounded-2xl w-full max-w-full md:max-w-3xl border border-gray-600 
//                     px-4 md:px-8 py-5 md:py-7 mt-8 md:mt-14 gap-4"
//                   >
//                     <div className="bg-gray-700 w-[50px] h-[50px] md:w-20 md:h-20 rounded-full"></div>
//                     <div className="flex flex-col space-y-2 w-full">
//                       <div className="bg-gray-700 h-4 w-2/3 rounded"></div>
//                       <div className="bg-gray-700 h-3 w-1/2 rounded"></div>
//                     </div>
//                     <div className="bg-gray-700 h-10 w-24 md:w-36 rounded-full ml-auto"></div>
//                   </div>
//                 ))
//             ) : (
//               // Actual Data
//               <>
//                 {[
//                   { name: 'Mydiamondexch.com', img: '/1.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 15k , unlimited coins' },
//                   { name: 'Trubet365.in', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 18k , unlimited coins' },
//                   { name: 'Betsbhai9.co', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 12k , unlimited coins' },
//                   { name: 'Skysport6.com', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 14k , unlimited coins'},
//                   { name: 'D247.vip', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 12k , unlimited coins' },
//                   { name: 'Worldindia.bet', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 12k , unlimited coins' },
//                   { name: 'Allexch.com', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 20k , unlimited coins' },
//                   { name: 'Mydiamondexch.com', img: '/1.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 15k , unlimited coins' },
//                   { name: 'Trubet365.in', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 18k , unlimited coins' },
//                   { name: 'Betsbhai9.co', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 12k , unlimited coins' },
//                   { name: 'Skysport6.com', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 14k , unlimited coins'},
//                   { name: 'D247.vip', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 12k , unlimited coins' },
//                   { name: 'Worldindia.bet', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 12k , unlimited coins' },
//                   { name: 'Allexch.com', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 20k , unlimited coins' },
//                   { name: 'Mydiamondexch.com', img: '/1.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 15k , unlimited coins' },
//                   { name: 'Trubet365.in', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 18k , unlimited coins' },
//                   { name: 'Betsbhai9.co', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 12k , unlimited coins' },
//                   { name: 'Skysport6.com', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 14k , unlimited coins'},
//                   { name: 'D247.vip', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 12k , unlimited coins' },
//                   { name: 'Worldindia.bet', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 12k , unlimited coins' },
//                   { name: 'Allexch.com', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 20k , unlimited coins' },
//                   { name: 'Mydiamondexch.com', img: '/1.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 15k , unlimited coins' },
//                   { name: 'Trubet365.in', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 18k , unlimited coins' },
//                   { name: 'Betsbhai9.co', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 12k , unlimited coins' },
//                   { name: 'Skysport6.com', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 14k , unlimited coins'},
//                   { name: 'D247.vip', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 12k , unlimited coins' },
//                   { name: 'Worldindia.bet', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 12k , unlimited coins' },
//                   { name: 'Allexch.com', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 20k , unlimited coins' },
//                   { name: 'Mydiamondexch.com', img: '/1.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 15k , unlimited coins' },
//                   { name: 'Trubet365.in', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 18k , unlimited coins' },
//                   { name: 'Betsbhai9.co', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 12k , unlimited coins' },
//                   { name: 'Skysport6.com', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 14k , unlimited coins'},
//                   { name: 'D247.vip', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 12k , unlimited coins' },
//                   { name: 'Worldindia.bet', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 12k , unlimited coins' },
//                   { name: 'Allexch.com', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 20k , unlimited coins' },
//                   { name: 'Mydiamondexch.com', img: '/1.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 15k , unlimited coins' },
//                   { name: 'Trubet365.in', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 18k , unlimited coins' },
//                   { name: 'Betsbhai9.co', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 12k , unlimited coins' },
//                   { name: 'Skysport6.com', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 14k , unlimited coins'},
//                   { name: 'D247.vip', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 12k , unlimited coins' },
//                   { name: 'Worldindia.bet', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 12k , unlimited coins' },
//                   { name: 'Allexch.com', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 20k , unlimited coins' },
//                   { name: 'Mydiamondexch.com', img: '/1.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 15k , unlimited coins' },
//                   { name: 'Trubet365.in', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 18k , unlimited coins' },
//                   { name: 'Betsbhai9.co', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 12k , unlimited coins' },
//                   { name: 'Skysport6.com', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 14k , unlimited coins'},
//                   { name: 'D247.vip', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 12k , unlimited coins' },
//                   { name: 'Worldindia.bet', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 12k , unlimited coins' },
//                   { name: 'Allexch.com', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 20k , unlimited coins' },
//                   { name: 'Mydiamondexch.com', img: '/1.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 15k , unlimited coins' },
//                   { name: 'Trubet365.in', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 18k , unlimited coins' },
//                   { name: 'Betsbhai9.co', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 12k , unlimited coins' },
//                   { name: 'Skysport6.com', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 14k , unlimited coins'},
//                   { name: 'D247.vip', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 12k , unlimited coins' },
//                   { name: 'Worldindia.bet', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 12k , unlimited coins' },
//                   { name: 'Allexch.com', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 20k , unlimited coins' },
//                   { name: 'Mydiamondexch.com', img: '/1.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 15k , unlimited coins' },
//                   { name: 'Trubet365.in', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 18k , unlimited coins' },
//                   { name: 'Betsbhai9.co', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 12k , unlimited coins' },
//                   { name: 'Skysport6.com', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 14k , unlimited coins'},
//                   { name: 'D247.vip', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 12k , unlimited coins' },
//                   { name: 'Worldindia.bet', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 12k , unlimited coins' },
//                   { name: 'Allexch.com', img: '/2.jpg', link: 'https://wa.link/qnz6f1', rate: 'Monthly rent 20k , unlimited coins' },
//                 ].map((site, index) => (
//                   <div
//                     key={index}
//                     className="flex flex-row items-center bg-transparent hover:bg-gradient-to-br from-[#0b172595] to-[#1d2434bb] 
//                     shadow-lg rounded-2xl w-full max-w-full md:max-w-3xl border border-zinc-400 
//                     px-4 md:px-8 py-5 md:py-7 mt-3 gap-4 md:gap-2 transition-transform duration-500 hover:scale-105"
//                   >
//                     <div className="mb-1 md:mb-0 md:mr-6">
//                       <img
//                         src={site.img}
//                         alt={site.name}
//                         className="w-[50px] h-[50px] md:w-20 md:h-20 rounded-full"
//                       />
//                     </div>

//                     <div className="text-left space-y-1">
//                       <h3 className="text-sm md:text-xl font-bold text-white">{site.name}</h3>
//                       <p className="text-gray-300 text-xs md:text-sm font-light hover:text-[#d2b15e]">
//                         <Link>{site.name}</Link>
//                         <br />
//                         <span className="text-[11px] md:text-xs text-[#FFB90C]">{site.rate}</span>
//                       </p>
//                     </div>

//                     <div className="self-end md:self-center ml-auto mb-5 md:mb-0">
//                       <button>
//                         <Link
//                           className="flex items-center bg-[#FFB90C] text-black text-sm md:text-lg px-6 py-2 md:px-24 md:py-3 
//                           rounded-full shadow-lg font-thin hover:bg-[#d4ba77] hover:text-black "
//                           to={site.link}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           Create
//                         </Link>
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </>
//             )}
//           </div>
//         </div>

//         <div className="text-[#FFB90C] font-semibold text-4xl md:text-5xl mt-24 text-center">
//         ADMIN-MASTER-SUPER MASTER
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ShareSite;

import React, { useEffect, useState, memo } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

// Sample Site Data
const siteList = [
  { name: "Mydiamondexch.com", img: "/1.jpg", link: "https://wa.link/qnz6f1", rate: "Monthly rent 15k, unlimited coins" },
  { name: "Trubet365.in", img: "/2.jpg", link: "https://wa.link/qnz6f1", rate: "Monthly rent 18k, unlimited coins" },
  { name: "Betsbhai9.co", img: "/2.jpg", link: "https://wa.link/qnz6f1", rate: "Monthly rent 12k, unlimited coins" },
  { name: "Skysport6.com", img: "/2.jpg", link: "https://wa.link/qnz6f1", rate: "Monthly rent 14k, unlimited coins" },
  { name: "D247.vip", img: "/2.jpg", link: "https://wa.link/qnz6f1", rate: "Monthly rent 12k, unlimited coins" },
  { name: "Worldindia.bet", img: "/2.jpg", link: "https://wa.link/qnz6f1", rate: "Monthly rent 12k, unlimited coins" },
  { name: "Allexch.com", img: "/2.jpg", link: "https://wa.link/qnz6f1", rate: "Monthly rent 20k, unlimited coins" },
];

// Reusable Site Card Component
const SiteCard = memo(({ site }) => (
  <div className="flex items-center bg-transparent hover:bg-gradient-to-br from-[#0b172595] to-[#1d2434bb] 
      shadow-lg rounded-2xl w-full md:max-w-3xl border border-zinc-400 
      px-4 md:px-8 py-5 md:py-7 mt-3 gap-4 md:gap-2 transition-transform duration-500 hover:scale-105">
    <img src={site.img} alt={site.name} className="w-[50px] h-[50px] md:w-20 md:h-20 rounded-full" />
    <div className="text-left space-y-1">
      <h3 className="text-sm md:text-xl font-bold text-white">{site.name}</h3>
      <p className="text-gray-300 text-xs md:text-sm font-light hover:text-[#d2b15e]">
        <Link to={site.link} target="_blank" rel="noopener noreferrer">{site.name}</Link>
        <br />
        <span className="text-[11px] md:text-xs text-[#FFB90C]">{site.rate}</span>
      </p>
    </div>
    <Link to={site.link} target="_blank" rel="noopener noreferrer" className="ml-auto bg-[#FFB90C] text-black text-sm md:text-lg px-6 py-2 md:px-24 md:py-3 rounded-full hover:bg-[#d4ba77] hover:text-black transition">Create</Link>
  </div>
));

const ShareSite = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Sharing Sites List - JPR Panel";
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div className="bg-[#0a1128] h-auto">
      <section className="container mx-auto p-4">
        {/* Section First */}
        <div className="flex flex-col items-center justify-center mt-20 md:my-24 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Services</h2>
          <span className="flex text-base md:text-lg gap-x-2 font-medium text-white">
            HOME <FaChevronRight size={18} className="mt-1" /> SHARING SITES LIST
          </span>
        </div>

        {/* Section Second */}
        <div ref={ref} className={`transition-opacity duration-700 ${inView ? "opacity-100" : "opacity-0"}`}>
          <div className="flex flex-col items-center justify-center text-center mt-14 md:mt-20">
            <h2 className="text-white text-2xl md:text-6xl font-bold md:mb-10">Sharing Sites List</h2>

            {/* Skeleton Loader */}
            {loading
              ? Array(3).fill(0).map((_, index) => (
                  <div
                    key={index}
                    className="animate-pulse flex items-center bg-gray-800 shadow-lg rounded-2xl w-full md:max-w-3xl border border-gray-600 px-8 py-7 mt-8 gap-4"
                  >
                    <div className="bg-gray-700 w-[50px] h-[50px] md:w-20 md:h-20 rounded-full"></div>
                    <div className="flex flex-col space-y-2 w-full">
                      <div className="bg-gray-700 h-4 w-2/3 rounded"></div>
                      <div className="bg-gray-700 h-3 w-1/2 rounded"></div>
                    </div>
                    <div className="bg-gray-700 h-10 w-24 md:w-36 rounded-full ml-auto"></div>
                  </div>
                ))
              : siteList.map((site, index) => <SiteCard key={index} site={site} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShareSite;
