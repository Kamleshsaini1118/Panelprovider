import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll Event Listener
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-4 bg-[#FFB90C] text-black rounded-xl shadow-lg 
        transition-transform duration-300 hover:scale-105 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
