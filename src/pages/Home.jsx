import React, { useEffect } from "react";
import HomeSection from "../components/HomeSection";
import ContactSection from "../components/ContactSection";
import StatsSection from "../components/Stats";
import FutureGamePanel from "../components/FuturePlan";

const Home = () => {

  useEffect(() => {
    document.title = "JPR Panel-India's Biggest Panel Provider";
  }, []);
  
  return (
    <div>
      <HomeSection />
      <ContactSection />
      <StatsSection />
      <FutureGamePanel />
    </div>
  );
};

export default Home;
