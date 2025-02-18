import React from "react";
import HomeSection from "../components/HomeSection";
import ContactSection from "../components/ContactSection";
import StatsSection from "../components/Stats";
import FutureGamePanel from "../components/FuturePlan";

const Home = () => {
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
