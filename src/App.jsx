import React, { useState } from "react";
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

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Sidebar width (adjust these to your actual Sidebar size)
  const sidebarWidth = isOpen ? "ml-64" : "ml-20";

  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} />

        {/* Main Content Area */}
        <div className={`flex-1 transition-all duration-300 ${sidebarWidth}`}>
          {/* Navbar */}
          <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />

         

          {/* Subnavbar */}
       
     

          {/* Page Content (with padding-top so content is not hidden under fixed navbars) */}
          <div className="pt-[30px] px-6 bg-slate-200">
            <Routes>
              <Route path="*" element={<Dashboard isOpen={isOpen} />} />
        {/* Routing for the order-sub-pages */}
              <Route path="/Order-subpages/B2B" element={<B2B />} />
              <Route path="/order-subpages/B2C" element={<B2C />}/>
              <Route path="/order-subpages/Documents" element={<Documents />}/>
       {/* Routing for Shipment-sub-pages               */}
              <Route path="/Pages/Shipment-sub-pages/ShipmentsB2C" element={<ShipmentsB2C/>} />
              <Route path="/Pages/Shipment-sub-pages/ShipmentsB2B" element={<ShipmentsB2B/>}/>
              <Route path="/Pages/Shipment-sub-pages/ShipmentsDocs" element={<ShipmentsDocs/>}/>
        {/* Routing for Support-sub-pages */}
             



       {/* Routing for the exception page */}
               <Route path="/Pages/Exception" element={<Exception/>}/>
      {/* Routing for weight-page */}
              <Route path="/Pages/Weight" element={<Weight/>} />
      {/* Routing for Report Page */}
              <Route path="/Pages/Report" element={<Report/>} />
          {/* Routing Page for Settings */}
              <Route path="/Pages/Settings" element={<Settings/>}/>
        {/* Routing Page for Addons */}

              <Route path="/Pages/Addons" element={<Addons/>}/>
           {/* Routing Page for Settings */}

              <Route path="/Pages/Abandoned" element={<Abandoned/>}/>
          {/* Routing Page for Settings */}

              <Route path="/Pages/Billing" element={<Billing/>}/>
          {/* Routing Page for Settings */}

              <Route path="/Pages/Service" element={<Service/>}/>

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
