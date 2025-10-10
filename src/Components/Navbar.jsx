import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = ({ toggleSidebar, isOpen, isMobile }) => {
  return (
    <div
      className="topbar fixed top-0 right-0 bg-white shadow px-2 py-3 z-50 transition-all duration-300 w-full"
      style={{
        left: isMobile ? 0 : (isOpen ? "260px" : "80px"),
      }}
    >
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <i
            className={`bi bi-list text-4xl ml-4 cursor-pointer transition-colors duration-200 ${
              isOpen ? "text-black-900" : "text-gray-700"
            }`}
            onClick={toggleSidebar}
          ></i>
        </div>

        {isMobile ? (
          <div className="flex items-center mr-4">
            <i className="bi bi-person-circle text-2xl cursor-pointer"></i>
          </div>
        ) : (
          <div className="flex items-center gap-4 transition-all duration-300">
            <div className="shipment-box flex border rounded-md overflow-hidden shadow-sm">
              <button className="px-3 py-2 bg-gray-100 flex items-center gap-1 text-sm hover:bg-gray-200">
                Shipment <i className="bi bi-caret-down-fill"></i>
              </button>
              <div className="relative w-56">
                <input
                  type="text"
                  placeholder="Search AWB Number(s)"
                  className="pl-2 pr-12 py-2 w-full text-sm text-black placeholder-gray-400 rounded-md outline-none"
                />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#12263f] w-8 h-9 flex items-center justify-center rounded-r-md">
                  <i className="bi bi-search text-white"></i>
                </div>
              </div>
            </div>

            <div className="flex border rounded-md overflow-hidden shadow-sm">
              <button className="flex items-center gap-1 bg-[#12263f] text-white px-3 py-2 hover:bg-[#12263f]">
                <i className="bi bi-lightning-charge-fill"></i> Recharge
              </button>
              <div className="px-3 py-2 bg-gray-50 text-sm flex items-center font-medium">
                Balance: <span className="ml-1 text-black-600">₹2964.3</span>
              </div>
            </div>

            <div className="flex items-center">
              <i className="bi bi-grid-3x3-gap-fill text-3xl cursor-pointer mr-5"></i>
              <i className="bi bi-person-circle text-2xl cursor-pointer mr-10"></i>
            </div>
          </div>
        )}
      </nav>

      {isMobile && (
        <div className="px-4 pt-3 pb-2">
          <div className="shipment-box flex border rounded-md overflow-hidden shadow-sm w-full">
            <button className="px-3 py-2 bg-gray-100 flex items-center gap-1 text-sm hover:bg-gray-200 whitespace-nowrap">
              Shipment <i className="bi bi-caret-down-fill"></i>
            </button>
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search AWB Number(s)"
                className="pl-2 pr-12 py-2 w-full text-sm text-black placeholder-gray-400 rounded-md outline-none"
              />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#12263f] w-9 h-9 flex items-center justify-center rounded-r-md">
                <i className="bi bi-search text-white"></i>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
