import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home"; // Home.jsx ko import karein
import AboutUs from "./pages/Aboutus";
// import ContactUs from "./pages/ContactUs"; // Contact Us page ka bhi route chahiye
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="main bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          {/* <Route path="/contact" element={<ContactUs />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;







// const [loading, setLoading] = useState(true);

// useEffect(() => {
//   const timer = setTimeout(() => setLoading(false), 2500); // 2.5s ke baad loading complete
//   return () => clearTimeout(timer);
// }, []);

 // Ensure parent container ka background black ho jab tak content fade-in na ho
    // <div className="main bg-black">
    //   <AnimatePresence>
    //     {loading && (
    //       <motion.div
    //         className="fixed inset-0 flex items-center justify-center bg-black z-50"
    //         initial={{ opacity: 1 }}
    //         exit={{ opacity: 0 }}
    //         transition={{ duration: 0.5 }}
    //       >
    //         {/* Background Sliding Sections */}
    //         <motion.div
    //           className="absolute top-0 left-0 w-1/3 h-full bg-[#0a1128]"
    //           initial={{ x: "-100%" }}
    //           animate={{ x: 0 }}
    //           transition={{ duration: 1 }}
    //         />
    //         <motion.div
    //           className="absolute top-0 left-1/3 w-1/3 h-full bg-[#0e1839]"
    //           initial={{ x: "-100%" }}
    //           animate={{ x: 0 }}
    //           transition={{ duration: 1, delay: 0.2 }}
    //         />
    //         <motion.div
    //           className="absolute top-0 left-2/3 w-1/3 h-full bg-[#0a1128]"
    //           initial={{ x: "-100%" }}
    //           animate={{ x: 0 }}
    //           transition={{ duration: 1, delay: 0.4 }}
    //         />

    //         {/* Loading Circle */}
    //         <motion.div
    //           className="w-16 h-16 border-4 border-t-transparent border-white rounded-full"
    //           initial={{ rotate: 0 }}
    //           animate={{ rotate: 360 }}
    //           transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    //         />
    //       </motion.div>
    //     )}
    //   </AnimatePresence>

    //   {/* Content is always rendered but hidden until loading complete */}
    //   <motion.div
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: loading ? 0 : 1 }}
    //     transition={{ duration: 1 }}
    //   >
    //     <Navbar />
    //     <HomeSection />
    //     <ContactSection />
    //     <StatsSection />
    //     <FutureGamePanel />
    //     <Footer />
    //   </motion.div>
    // </div>