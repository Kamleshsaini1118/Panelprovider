import "./App.css";
import HomeSection from "./components/HomeSection";
import ContactSection from "./components/ContactSection";
import StatsSection from "./components/Stats";
import FutureGamePanel from "./components/FuturePlan";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="main">
      <Navbar />
      <HomeSection />
      <ContactSection />
      <StatsSection />
      <FutureGamePanel />
      <Footer />
    </div>
  );
}

export default App;
