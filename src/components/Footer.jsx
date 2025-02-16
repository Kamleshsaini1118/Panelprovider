import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <section
      className="bg-white py-20 bg-no-repeat bg-cover bg-center "
      style={{
        backgroundImage: "url('/f.jpg')",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-4">
            <a href="#">
              <img
                src="/logo.png"
                alt="Patel Panel Logo"
                className="w-[277px] h-auto "
              />
            </a>
          </div>

          {/* Description */}
          <p className="text-white text-lg mb-4">
            We are India’s Biggest Panel Provider like; Sports Club, Rental, Sharing, <br />
            Super Admin, Admin, SMDL, MDL, Dl etc… at low rate
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-600 text-white hover:opacity-80"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/patel_panel_provider?igsh=MWoxbDBqYjNqNWg0OA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-600 text-white hover:opacity-80"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

     
    </section>

     {/* 🔹 80% Width Dark Gray Line */}
     <div className="w-[80%] h-[3px] bg-gray-800 mx-auto -mt-2"></div>

     {/* 🔹 Copyright Section with Gradient Background */}
     <div className="w-full text-center py-6 text-white text-lg font-medium bg-gradient-to-br from-[#020205] via-[#111a2e] to-[#000000]">
       Copyright © <span className="text-[#FFB90C]">2025</span> Vishal Panel Provider.
     </div>
     </>
  );
};

export default Footer;
