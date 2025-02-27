// import React, { useEffect } from "react";
// import HomeSection from "../components/HomeSection";
// import ContactSection from "../components/ContactSection";
// import StatsSection from "../components/Stats";
// import FutureGamePanel from "../components/FuturePlan";

// const Home = () => {

//   useEffect(() => {
//     document.title = "JPR Panel-India's Biggest Panel Provider";
//   }, []);
  
//   return (
//     <div>
//       <HomeSection />
//       <ContactSection />
//       <StatsSection />
//       <FutureGamePanel />
//     </div>
//   );
// };

// export default Home;


import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HomeSection from "../components/HomeSection";
import ContactSection from "../components/ContactSection";
import StatsSection from "../components/Stats";
import FutureGamePanel from "../components/FuturePlan";

// Animation Variants
const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

// Reusable Animated Section Component
const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={childVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Reverse animation on scroll
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  useEffect(() => {
    document.title = "JPR Panel - India's Biggest Panel Provider";
  }, []);

  return (
    <div className="space-y-10">
      <AnimatedSection><HomeSection /></AnimatedSection>
      <AnimatedSection><ContactSection /></AnimatedSection>
      <AnimatedSection><StatsSection /></AnimatedSection>
      <AnimatedSection><FutureGamePanel /></AnimatedSection>
    </div>
  );
};

export default Home;
