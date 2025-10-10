import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import Subnavbar from "./Components/Subnavbar";
import B2B from "./Pages/Order-subpages/B2B";
import B2C from "./Pages/Order-subpages/B2C";
import Documents from "./Pages/Order-subpages/Documents";
import ShipmentsB2C from "./Pages/Shipment-Sub-pages/ShipmentsB2C";
import ShipmentsB2B from "./Pages/Shipment-Sub-pages/ShipmentsB2B";
import ShipmentsDocs from "./Pages/Shipment-Sub-pages/ShipmentsDocs";
import Exception from "./Pages/Exception";
import Weight from "./Pages/Weight";
import Report from "./Pages/Report";
import Settings from "./Pages/Setting";
import Addons from "./Pages/Addons";
import Abandoned from "./Pages/Abandoned";
import Billing from "./Pages/Billing";
import Service from "./Pages/Service";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false); // mobile overlay state
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setShowSidebar(false); // ensure overlay closed on desktop
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setShowSidebar((prev) => !prev);
    } else {
      setIsOpen((prev) => !prev);
    }
  };

  // Sidebar width only on desktop
  const sidebarWidth = !isMobile ? (isOpen ? "ml-64" : "ml-20") : "";

  return (
    <Router>
      <div className="flex">
        {/* Sidebar: desktop persistent, mobile overlay via showSidebar */}
        <Sidebar
          isOpen={isOpen}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />

        {/* Main Content Area */}
        <div className={`flex-1 transition-all duration-300 ${sidebarWidth}`}>
          {/* Navbar */}
          <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} isMobile={isMobile} />

          {/* Page Content */}
          <div className="pt-[120px] md:pt-[30px] px-6 bg-slate-200">
            <Routes>
              <Route path="*" element={<Dashboard isOpen={isOpen} />} />
              <Route path="/Order-subpages/B2B" element={<B2B />} />
              <Route path="/order-subpages/B2C" element={<B2C />} />
              <Route path="/order-subpages/Documents" element={<Documents />} />
              <Route path="/Pages/Shipment-sub-pages/ShipmentsB2C" element={<ShipmentsB2C />} />
              <Route path="/Pages/Shipment-sub-pages/ShipmentsB2B" element={<ShipmentsB2B />} />
              <Route path="/Pages/Shipment-sub-pages/ShipmentsDocs" element={<ShipmentsDocs />} />
              <Route path="/Pages/Exception" element={<Exception />} />
              <Route path="/Pages/Weight" element={<Weight />} />
              <Route path="/Pages/Report" element={<Report />} />
              <Route path="/Pages/Settings" element={<Settings />} />
              <Route path="/Pages/Addons" element={<Addons />} />
              <Route path="/Pages/Abandoned" element={<Abandoned />} />
              <Route path="/Pages/Billing" element={<Billing />} />
              <Route path="/Pages/Service" element={<Service />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
