import React from "react";
import "../App.css";
import Subnavbar from "./Subnavbar";

const Dashboard = ({ isOpen }) => {
  // On mobile: single card per row, on sm: 2, on md+: 4
  const cardWidth = isOpen
    ? "w-full sm:w-[48%] md:w-[22%]"
    : "w-full sm:w-[48%] md:w-[23%]";

  return (
    <div>
      {/* Add margin below Subnavbar */}
      <div className="mb-4">
        <Subnavbar />
      </div>
      <div className="w-full px-2 sm:px-4 space-y-6">
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-300">
          {/* Card 1 */}
          <div
            className={`h-[130px] bg-green-400 text-white p-3 rounded shadow transition-all duration-300`}
          >
            <div className="text-3xl font-semibold">0</div>
            <div className="mt-2">
              <h5 className="text-md font-semibold">Total Shipments</h5>
              <p className="text-sm">(Total forward shipments)</p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={`h-[130px] bg-blue-400 text-white p-3 rounded shadow transition-all duration-300`}
          >
            <div className="text-3xl font-semibold">0 (0%)</div>
            <div className="mt-2">
              <h5 className="text-md font-semibold">Delivered Shipments</h5>
              <p className="text-sm">(Total forward delivered orders)</p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className={`h-[130px] bg-violet-400 text-white p-3 rounded shadow transition-all duration-300`}
          >
            <div className="text-3xl font-semibold">₹0</div>
            <div className="mt-2">
              <h5 className="text-md font-semibold">Total Revenue</h5>
              <p className="text-sm">(Value of delivered orders)</p>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className={`h-[130px] bg-slate-500 text-white p-3 rounded shadow transition-all duration-300`}
          >
            <div className="text-3xl font-semibold">0 (0%)</div>
            <div className="mt-2">
              <h5 className="text-md font-semibold">Total RTO</h5>
              <p className="text-sm">(Orders returned to origin)</p>
            </div>
          </div>
        </div>

        {/* News Scroller */}
        <div className="bg-gray-100 rounded shadow px-2 sm:px-4 mt-4 overflow-hidden text-center">
          <span className="font-medium text-red-700 text-xs sm:text-base">
            Please use our updated tracking domain, 'https://odrtrk.live' instead of 'https://oder.live' for all
            tracking updates.
          </span>
          <marquee className="text-blue-700 font-semibold mt-2 text-xs sm:text-base">
            IMPORTANT NOTICE! Bluedart has revised its current price structure as an annual pricing revision. The new
            prices will come into effect from 1st January 2025 onwards. For more details, contact your sales SPOC/KAM
            or call us at 07669133030.
          </marquee>
        </div>

        {/* Courier Status and Courier Load */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Courier Load */}
            <div className="flex-1 h-[230px] sm:h-[430px] p-4 rounded shadow text-center bg-white">
              <p className="font-semibold text-gray-500">Courier Wise Load</p>
              <p className="text-gray-700">No data to display</p>
            </div>

            {/* Courier Wise Status */}
            <div className="flex-1 rounded shadow h-[230px] overflow-x-auto bg-white">
              {/* Header with full-width background */}
              <div className="h-12 sm:h-16 bg-[#12263f] p-2 text-white font-semibold rounded-t text-sm sm:text-base">Courier Wise Status</div>

              {/* Horizontal line below header */}
              <hr className="border-gray-200 my-2 sm:my-4 ml-2 mr-2" />

              {/* Grid content */}
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 text-xs font-bold text-blue-900 whitespace-nowrap">
                <span className="pl-2">COURIER</span>
                <span>TOTAL</span>
                <span>UNSHIPPED</span>
                <span className="hidden sm:block">PENDING PICKUP</span>
                <span className="hidden sm:block">IN TRANSIT</span>
                <span className="hidden sm:block">DELIVERED</span>
                <span className="hidden sm:block">RTO</span>
              </div>

              <hr className="border-gray-200 my-2 ml-2 mr-2" />
              <div className="text-xs font-bold text-black text-center">No data to display</div>
            </div>
          </div>
        </div>

        {/* Top Destinations */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          {/* Top Destination Card */}
          <div className="flex-1 bg-white rounded shadow p-4 min-h-[230px] sm:min-h-[430px] text-center">
            <p className="text-lg font-semibold mb-2">Top Destination</p>
            <p className="text-gray-500">No data to display</p>
          </div>

          {/* Payment Wise Load Card */}
          <div className="flex-1 bg-white rounded shadow p-4 min-h-[230px] sm:min-h-[430px] text-center">
            <p className="text-lg font-semibold mb-2">Payment Wise Load</p>
            <div className="text-gray-700 font-medium text-sm">
              <span className="mr-1">COD</span> / <span>Prepaid</span>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="w-full bg-white p-4 rounded shadow space-y-4 overflow-auto">
          {/* Header */}
          <div className="p-2 rounded-t">
            <p className="text-black text-lg">Product Wise Status</p>
          </div>
          <hr className="border-gray-200 ml-2 mr-2" />

          {/* Column Titles */}
          <div className="grid grid-cols-2 sm:grid-cols-8 gap-2 text-xs font-semibold text-blue-900 whitespace-nowrap">
            <span>PRODUCT NAME</span>
            <span>PRODUCT SKU</span>
            <span className="hidden sm:block">TOTAL SHIPMENT</span>
            <span className="hidden sm:block">NOT SHIPPED</span>
            <span className="hidden sm:block">PENDING PICKUP</span>
            <span className="hidden sm:block">IN TRANSIT</span>
            <span className="hidden sm:block">DELIVERED</span>
            <span className="hidden sm:block">RTO</span>
          </div>
          <hr className="border-gray-200 ml-2 mr-2" />

          {/* Empty state */}
          <div className="text-center text-gray-500 py-1">No record found</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
