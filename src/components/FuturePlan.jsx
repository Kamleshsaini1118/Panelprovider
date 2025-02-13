// import React from "react";

// const FutureGamePanel = () => {
//   return (
//     <section className="w-full py-16 bg-gradient-to-br from-[#020205] via-[#111a2e] to-[#000000] text-white">
//       <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap- px-6 mt-10">
        
//         {/* Left Side Content */}
//         <div>
//           <h3 className="text-5xl md:text-[48px] font-bold mb-4 ml-72 leading-normal relative z-20">
//             Be Part Of The <br /> Future Of
//             {/* ULTA C-SHAPE LINE (Thicker & Touching Text) */}
//             <div className="absolute bottom-[58px] left-[25%] transform -translate-x-1/2 w-[250px] md:w-[250px] h-[30px] ">
//               <svg
//                 className="absolute left-0 w-full h-full"
//                 viewBox="0 0 230 30"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 {/* ULTA C-SHAPE PATH */}
//                 <path
//                   d="M240,8 C170,-3 60,-3 5,10"
//                   stroke="url(#gradient)"
//                   strokeWidth="7"  // THICKER LINE
//                   strokeLinecap="round" // SMOOTH ENDS
//                   fill="none"
//                 />
//                 <defs>
//                   <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                     <stop offset="0%" stopColor="#ffb6c1" />  {/* Light Pink */}
//                     <stop offset="50%" stopColor="#87cefa" />  {/* Light Sky Blue */}
//                     <stop offset="100%" stopColor="#90ee90" /> {/* Light Green */}
//                   </linearGradient>
//                 </defs>
//               </svg>
//             </div>
//             <br /> Game Panels
//           </h3>
//           <ul className="space-y-2 ml-72 text-xl leading-relaxed">
//             {[
//               "MASTER ID",
//               "AGENT ID",
//               "MASTER PANEL",
//               "SUPER MASTER PANEL",
//               "DL – MDL – SMDL",
//               "ADMIN PANEL",
//               "CRICKET BETTING MASTER ID",
//             ].map((item, index) => (
//               <li key={index} className="underline font-semibold">{item}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Right Side Image */}
//         <div className="flex justify-center">
//           <img
//             src="/girl.jpg"
//             alt="Game Panel"
//             className="w-full md:w-[1200px] lg:w-[1200px] h-auto shadow-lg"
//           />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default FutureGamePanel;
import React from "react";

const FutureGamePanel = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-[#020205] via-[#111a2e] to-[#000000] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 lg:px-16">
        
        {/* Left Side Content */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:ml-[150px]">
          <h3 className="text-4xl md:text-5xl font-bold leading-tight relative z-20">
            Be Part Of The <br /> Future Of
            <div className="absolute bottom-[26px] left-1/2 md:left-[25%] transform -translate-x-1/2 w-[200px] md:w-[250px] h-[30px]">
              <svg
                className="w-full h-full"
                viewBox="0 0 230 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M240,8 C170,-3 60,-3 5,10"
                  stroke="url(#gradient)"
                  strokeWidth="7"
                  strokeLinecap="round"
                  fill="none"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ffb6c1" />
                    <stop offset="50%" stopColor="#87cefa" />
                    <stop offset="100%" stopColor="#90ee90" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <br /> Game Panels
          </h3>
          <ul className="mt-6 space-y-2 text-lg md:text-xl font-semibold">
            {["MASTER ID", "AGENT ID", "MASTER PANEL", "SUPER MASTER PANEL", "DL – MDL – SMDL", "ADMIN PANEL", "CRICKET BETTING MASTER ID"].map((item, index) => (
              <li key={index} className="underline">{item}</li>
            ))}
          </ul>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/girl.jpg"
            alt="Game Panel"
            className="max-w-full md:max-w-lg lg:max-w-xl h-auto shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FutureGamePanel;
