import React, { useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const RentalSite = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Self Deposit & Withdrawal - JPR Panel";

    // Simulating data fetching
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // Scroll animation hook
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2, // 20% visible hone par trigger hoga
  });

  return (
    <div className="bg-[#0a1128] h-auto">
      <section className="container mx-auto p-4">
        {/* Section First */}
        <div className="flex flex-col items-center justify-center mt-20 md:mt-24 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Services
          </h2>
          <span className="flex text-base md:text-lg gap-x-2 font-medium text-white">
            HOME <FaChevronRight size={18} className="mt-1" /> SELF DEPOSIT & WITHDRAWAL
          </span>
        </div>

        {/* Section Second */}
        <div ref={ref} className={`transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center justify-center text-center my-14 md:my-20">
            <h2 className="text-white text-2xl md:text-6xl font-bold md:mb-10">
            Self Deposit & Withdrawal
            </h2>

            {/* Mapping through sample data */}
            {loading ? (
              // Skeleton Loader
              Array(3)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="animate-pulse flex flex-row items-center bg-gray-800 
                    shadow-lg rounded-2xl w-full max-w-full md:max-w-3xl border border-gray-600 
                    px-4 md:px-8 py-5 md:py-7 mt-8 md:mt-14 gap-4"
                  >
                    <div className="bg-gray-700 w-[50px] h-[50px] md:w-20 md:h-20 rounded-full"></div>
                    <div className="flex flex-col space-y-2 w-full">
                      <div className="bg-gray-700 h-4 w-2/3 rounded"></div>
                      <div className="bg-gray-700 h-3 w-1/2 rounded"></div>
                    </div>
                    <div className="bg-gray-700 h-10 w-24 md:w-36 rounded-full ml-auto"></div>
                  </div>
                ))
            ) : (
              // Actual Data
              <>
                {[
                  { name: 'Cricodds9.com', img: '/1.jpg', link: 'https://wa.link/qnz6f1' },
                  { name: 'Fair9bet.com', img: '/2.jpg', link: 'https://wa.link/qnz6f1' },
                ].map((site, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center bg-transparent hover:bg-gradient-to-br from-[#0b172595] to-[#1d2434bb] 
                    shadow-lg rounded-2xl w-full max-w-full md:max-w-3xl border border-zinc-400 
                    px-4 md:px-8 py-5 md:py-7 mt-3 gap-4 md:gap-2 transition-transform duration-500 hover:scale-105"
                  >
                    <div className="mb-1 md:mb-0 md:mr-6">
                      <img
                        src={site.img}
                        alt={site.name}
                        className="w-[50px] h-[50px] md:w-20 md:h-20 rounded-full"
                      />
                    </div>

                    <div className="text-left space-y-1">
                      <h3 className="text-sm md:text-xl font-bold text-white">{site.name}</h3>
                      <p className="text-gray-300 text-xs md:text-sm font-light hover:text-[#d2b15e]">
                        <Link>{site.name}</Link>
                        <br />
                        <span className="text-[11px] md:text-xs text-[#FFB90C]">Starting INR 0.22</span>
                      </p>
                    </div>

                    <div className="self-end md:self-center ml-auto">
                      <button>
                        <Link
                          className="flex items-center bg-[#FFB90C] text-black text-sm md:text-lg px-6 py-2 md:px-24 md:py-3 
                          rounded-full shadow-lg font-thin hover:bg-[#d4ba77] hover:text-black"
                          to={site.link}
                        >
                          Create
                        </Link>
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RentalSite;
