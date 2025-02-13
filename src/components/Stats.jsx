// import { FaCheckCircle } from "react-icons/fa";

// const StatsSection = () => {
//   const stats = [
//     "15K+ Sharing Site User",
//     "20K+ Rental Site User",
//     "10K+ Self Deposit & Withdrawal",
//     "99% Happy Customers",
//   ];

//   return (
//     <section
//       className="w-full py-11 bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: "url('/stars.png')" }} // Change image path
//     >
        
//       <div className="max-w-5xl mx-auto px-6 rounded-lg py-6">
//         <div className="flex flex-wrap justify-center items-center space-x-8 gap-y-3">
//           {stats.map((item, index) => (
//             <div key={index} className="flex items-center space-x-2 text-white text-xl">
//               <FaCheckCircle className="text-orange-400" />
//               <span>{item}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;


import { FaCheckCircle } from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    "15K+ Sharing Site User",
    "20K+ Rental Site User",
    "10K+ Self Deposit & Withdrawal",
    "99% Happy Customers",
  ];

  return (
    <section
      className="w-full py-11 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/stars.png')" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-white text-base sm:text-lg md:text-xl"
            >
              <FaCheckCircle className="text-orange-400 text-lg sm:text-xl" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
