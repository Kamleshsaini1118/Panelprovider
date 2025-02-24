import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const DepositPage = () => {
  return (
    <div className="bg-[#0a1128] h-auto">
      <section className="container mx-auto p-4">
        {/* Section First */}
        <div className="flex flex-col items-center justify-center mt-20 md:mt-24 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Services
          </h2>
          <span className="flex text-base md:text-lg gap-x-2 font-medium text-white">
            HOME <FaChevronRight size={18} className="mt-1" /> SELF DEPOSIT &
            WITHDRAWAL
          </span>
        </div>

        {/* Section Second */}
        <div className="flex flex-col items-center justify-center text-center my-14">
          <h2 className="text-white text-3xl md:text-6xl font-bold">
            Self Deposit & Withdrawal
          </h2>

          <div
            className="flex flex-row items-center bg-transparent hover:bg-gradient-to-br from-[#0b172595] to-[#1d2434bb] 
  shadow-lg rounded-2xl w-full max-w-full md:max-w-3xl border-[1px] border-zinc-400 
  px-4 md:px-8 py-5 md:py-7 mt-10 md:mt-14 gap-4 md:gap-4"
          >
            <div className="mb-1 md:mb-0 md:mr-6">
              <img
                src="/1.jpg"
                alt="cricodds9"
                className="w-[50px] h-[50px] md:w-20 md:h-20 rounded-full"
              />
            </div>

            <div className="text-left space-y-1">
              <h3 className="text-sm md:text-xl font-bold text-white">
                Cricodds9.com
              </h3>
              <p className="text-gray-300 text-xs md:text-sm font-light hover:text-[#d2b15e]">
                <Link>Cricodds9.com</Link>
                <br />
                <span className="text-[11px] md:text-xs text-[#FFB90C]">
                  Starting INR 0.22
                </span>
              </p>
            </div>

            <div className="self-end md:self-center ml-8 md:ml-auto mb-3 ">
              <button>
                <Link
                  className="flex items-center bg-[#FFB90C] text-black text-sm md:text-lg px-6 py-2 md:px-24 md:py-3 
          rounded-full shadow-lg font-thin hover:bg-[#d4ba77] hover:text-black"
                  to="https://wa.link/qnz6f1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Create
                </Link>
              </button>
            </div>
          </div>


          <div
            className="flex flex-row items-center bg-transparent hover:bg-gradient-to-br from-[#0b172595] to-[#1d2434bb] 
  shadow-lg rounded-2xl w-full max-w-full md:max-w-3xl border-[1px] border-zinc-400 
  px-4 md:px-8 py-5 md:py-7 mt-10 md:mt-14 gap-4 md:gap-4"
          >
            <div className="mb-1 md:mb-0 md:mr-6">
              <img
                src="/2.jpg"
                alt="Fair9bet.com"
                className="w-[50px] h-[50px] md:w-20 md:h-20 rounded-full"
              />
            </div>

            <div className="text-left space-y-1">
              <h3 className="text-sm md:text-xl font-bold text-white">
               Fair9bet.com
              </h3>
              <p className="text-gray-300 text-xs md:text-sm font-light hover:text-[#d2b15e]">
                <Link>Fair9bet.com</Link>
                <br />
                <span className="text-[11px] md:text-xs text-[#FFB90C]">
                  Starting INR 0.22
                </span>
              </p>
            </div>

            <div className="self-end md:self-center ml-11 md:ml-auto mb-3">
              <button>
                <Link
                  className="flex items-center bg-[#FFB90C] text-black text-sm md:text-lg px-6 py-2 md:px-24 md:py-3 
          rounded-full shadow-lg font-thin hover:bg-[#d4ba77] hover:text-black"
                  to="https://wa.link/qnz6f1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Create
                </Link>
              </button>
            </div>
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default DepositPage;
