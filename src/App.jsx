// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Home from "./pages/Home"; // Home.jsx ko import karein
// import AboutUs from "./pages/Aboutus";
// // import ContactUs from "./pages/ContactUs"; // Contact Us page ka bhi route chahiye
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
// import ContactPage from "./pages/ContactPage";
// import DepositPage from "./pages/DepositPage";
// import RentalSite from "./pages/RentalSite";

// function App() {
//   return (
//     <Router>
//       <div className="main bg-black">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/contact-us" element={<ContactPage />} />
//           <Route path="/self-deposit-and-withdrawal" element={<DepositPage />} />
//           <Route path="/rental-sites-list" element={<RentalSite />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;



import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ContactPage from "./pages/ContactPage";
import DepositPage from "./pages/DepositPage";
import RentalSite from "./pages/RentalSite";
import ShareSite from "./pages/ShareSite";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [loading, setLoading] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSkeleton(true); // 2 sec baad skeleton show karega
    }, 2000);

    setTimeout(() => {
      setLoading(false); // 4 sec baad app load hoga
    }, 4000);
  }, []);

  return (
    <Router>
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center bg-black -mt-10 md:mt-0">
          {!showSkeleton ? (
            // **Step 1: Logo Animation**
            <motion.img
              src="/l.png"
              alt="App Logo"
              className="h-28 w-28 md:h-32 md:w-32"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
            />
          ) : (
            // **Step 2: Skeleton Loader**
            <motion.div
              className="w-full max-w-2xl p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="h-6 w-32 bg-gray-700 rounded-md mb-4 animate-pulse"></div>
              <div className="h-48 bg-gray-700 rounded-md mb-4 animate-pulse"></div>
              <div className="h-6 w-64 bg-gray-700 rounded-md mb-2 animate-pulse"></div>
              <div className="h-6 w-48 bg-gray-700 rounded-md animate-pulse"></div>
            </motion.div>
          )}
        </div>
      ) : (
        // **Step 3: Smoothly Show Actual Content**
        <motion.div
          key={loading} // Ensures animation triggers on loading change
          className="main bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }} // Smooth fade-in
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/sharing-sites-list" element={<ShareSite />} />
            <Route path="/rental-sites-list" element={<RentalSite />} />
            <Route path="/self-deposit-and-withdrawal" element={<DepositPage />} />
          </Routes>
          <Footer />

          <ScrollToTop />
        </motion.div>
      )}
    </Router>
  );
}

export default App;
