// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="w-full fixed top-0 left-0 shadow-md z-50 bg-[#0a1128]">
//       <div className="container mx-auto flex items-center justify-between px-6 -my-36">
//         {/* Logo */}
//         <a href="#" className="pt-14 pl-20">
//           <img src="/logoV.png" alt="Logo" className="h-80 w-80 " />
//         </a>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex space-x-10 text-white text-lg">
//           <a href="/" className="hover:text-[#FFB90C]">Home</a>
//           <a href="/about-us" className="hover:text-[#FFB90C]">About Us</a>

//           {/* Dropdown */}
//           <div className="relative group">
//             <button className="hover:text-[#FFB90C]">Our Services</button>
//             <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-gray-800 shadow-md py-2 w-48">
//               <li><a href="/sharing-sites-list" className="block px-4 py-2 hover:bg-gray-200">Sharing Sites List</a></li>
//               <li><a href="/rental-sites-list" className="block px-4 py-2 hover:bg-gray-200">Rental Sites List</a></li>
//               <li><a href="/self-deposit-and-withdrawal" className="block px-4 py-2 hover:bg-gray-200">Self Deposit & Withdrawal</a></li>
//             </ul>
//           </div>

//           <a href="/contact-us" className="hover:text-[#FFB90C]">Contact Us</a>
//         </nav>

//         {/* Right Side Button */}
//         <button className="relative p-[1px] rounded-full bg-gradient-to-r from-green-300 via-orange-300 to-pink-300 mr-[60px] hidden md:block">
//           <a
//             className="flex items-center bg-[#080e26] text-white text-base px-8 py-2 rounded-full shadow-lg font-medium hover:bg-white hover:text-black transition w-full h-full"
//             href="https://www.youtube.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <span className="flex-grow text-center">Connect On Whatsapp</span>
//           </a>
//         </button>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden text-white z-50" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
//         </button>
//       </div>

//       {/* Mobile Menu - Right Side Slide-in */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
//           menuOpen ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-300 ease-in-out md:hidden`}
//       >
//         <button
//           className="absolute top-5 right-5 text-gray-800"
//           onClick={() => setMenuOpen(false)}
//         >
//           <FaTimes size={30} />
//         </button>

//         <nav className="flex flex-col items-start p-6 space-y-4 text-gray-800 mt-16">
//           <a href="/" className="hover:text-[#FFB90C]" onClick={() => setMenuOpen(false)}>Home</a>
//           <a href="/about-us" className="hover:text-[#FFB90C]" onClick={() => setMenuOpen(false)}>About Us</a>
//           <a href="/sharing-sites-list" className="hover:text-[#FFB90C]" onClick={() => setMenuOpen(false)}>Sharing Sites List</a>
//           <a href="/rental-sites-list" className="hover:text-[#FFB90C]" onClick={() => setMenuOpen(false)}>Rental Sites List</a>
//           <a href="/self-deposit-and-withdrawal" className="hover:text-[#FFB90C]" onClick={() => setMenuOpen(false)}>Self Deposit & Withdrawal</a>
//           <a href="/contact-us" className="hover:text-[#FFB90C]" onClick={() => setMenuOpen(false)}>Contact Us</a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 shadow-md z-50 bg-[#0a1128]">
      <div className="container mx-auto flex items-center justify-between px-6 py-2 md:px-20 fixed top-0 left-0 right-0 bg-[#0a1128] z-50">
        {/* Logo */}
        <Link to="/" className=" md:pl-5">
          {/* <img src="/l.png" alt="Logo" className="w-[170px] md:w-[280px] -my-10 md:-my-[70px] " /> */}
          <div className="flex flex-col items-center">
          <h1 className="text-white text-4xl md:text-5xl font-semibold font-['Schibsted Grotesk'] ">J <span className="text-[#FFB90C]">P</span> R</h1>
          <p className="text-black text-[9px] md:text-xs font-extrabold bg-[#FFB90C]">- PANEL PROVIDER -</p>
          </div>
          
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-white text-lg">
          <Link to="/" className="hover:text-[#FFB90C]">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#FFB90C]">
            About Us
          </Link>

          <div className="relative group">
            <button className="hover:text-[#FFB90C] flex gap-2">
              Our Services
              <span className="mt-1">
                <FaChevronDown size={20} />
              </span>
            </button>
            <ul className="absolute left-0 mt-2 w-48 bg-[#0a1128] text-white shadow-md py-2 opacity-0 scale-95 transform transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100">
              <li>
                <a
                  href="/sharing-sites-list"
                  className="block px-4 py-2 hover:text-[#FFB90C]"
                >
                  Sharing Sites List
                </a>
              </li>
              <li>
                <a
                  href="/rental-sites-list"
                  className="block px-4 py-2 hover:text-[#FFB90C]"
                >
                  Rental Sites List
                </a>
              </li>
              <li>
                <a
                  href="/self-deposit-and-withdrawal"
                  className="block px-4 py-2 hover:text-[#FFB90C]"
                >
                  Self Deposit & Withdrawal
                </a>
              </li>
            </ul>
          </div>

          <a href="/contact-us" className="hover:text-[#FFB90C]">
            Contact Us
          </a>
        </nav>

        {/* Right Side Button (Hidden on Mobile) */}
        <button className="hidden md:block relative p-[1px] rounded-full bg-gradient-to-r from-green-300 via-orange-300 to-pink-300">
          <a
            className="flex items-center bg-[#080e26] text-white text-base px-6 py-2 rounded-full shadow-lg font-medium hover:bg-white hover:text-black transition w-full h-full"
            href="https://wa.link/qnz6f1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex-grow text-center">Connect On Whatsapp</span>
          </a>
        </button>

        {/* Mobile Menu Button (Right Aligned) */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu - Right Side Slide-in */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0a1128] shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* <button className="absolute top-5 right-5 text-white" onClick={() => setMenuOpen(false)}>
          <FaTimes size={22} />
        </button> */}

        <nav className="flex flex-col items-start p-6 space-y-4 text-white mt-16">
          <Link
            to="/"
            className="hover:text-[#FFB90C]"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-[#FFB90C]"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>

          {/* Mobile Dropdown */}
          <div className="w-full">
            <button
              className="w-full text-left hover:text-[#FFB90C] flex justify-between"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Our Services <span>{dropdownOpen ? "▲" : "▼"}</span>
            </button>
            <ul
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                dropdownOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <li>
                <a
                  href="/sharing-sites-list"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Sharing Sites List
                </a>
              </li>
              <li>
                <a
                  href="/rental-sites-list"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Rental Sites List
                </a>
              </li>
              <li>
                <a
                  href="/self-deposit-and-withdrawal"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Self Deposit & Withdrawal
                </a>
              </li>
            </ul>
          </div>

          <a
            href="/contact-us"
            className="hover:text-[#FFB90C]"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
