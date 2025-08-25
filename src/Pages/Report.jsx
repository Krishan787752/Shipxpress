import React from "react";
import SecSubnavbar from "../Components/SecSubnavbar";

const Report = () => {
  return (
    <div className="h-[903px]">
      <SecSubnavbar/>
    <div className="bg-white rounded-lg shadow-md p-4 mt-[-88px] ">
      {/* Header */}
      <h2 className="text-lg font-semibold mb-4">Reports - Custom Report</h2>

      {/* Tabs */}
      <div className="flex gap-2 border-b mb-4">
        <button className="px-4 py-2 text-sm bg-gray-100 border-b-2 border-blue-600 font-medium">
          Custom Reports
        </button>
        <button className="px-4 py-2 text-sm hover:bg-gray-100">Shipment Summary</button>
        <button className="px-4 py-2 text-sm hover:bg-gray-100">Top NDR Reasons</button>
        <button className="px-4 py-2 text-sm hover:bg-gray-100">Daily Summary</button>
        <button className="px-4 py-2 text-sm hover:bg-gray-100">State Wise Summary</button>
        <button className="px-4 py-2 text-sm hover:bg-gray-100">Product Wise Summary</button>
        <button className="px-4 py-2 text-sm hover:bg-gray-100">More</button>
      </div>

      {/* Date Range */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Date Range:</label>
        <input
          type="text"
          className="border rounded-md px-2 py-1 text-sm w-64"
          defaultValue="07/23/2025 - 08/22/2025"
        />
      </div>

      {/* Orders Section */}
      <div className="border-t pt-3 mb-3">
        <div className="flex items-center gap-2 mb-2">
          <input type="checkbox" />
          <span className="font-semibold">Orders</span>
          <label className="ml-4 text-sm flex items-center gap-1">
            <input type="checkbox" /> Select All
          </label>
        </div>
        <div className="grid grid-cols-4 gap-2 text-sm">
          {[
            "#Number", "Order Date", "Amount", "Payment Type", "Address 2",
            "City", "State", "Pincode", "Weight", "Length",
            "Height", "Breadth", "Order Status", "Shipping Charges", "Discount Applied",
            "Product Details", "Order Tags", "Total Order Qty", "Order COD Charges", "First Name",
            "Last Name", "Phone", "Address 1"
          ].map((label, i) => (
            <label key={i} className="flex items-center gap-1">
              <input type="checkbox" /> {label}
            </label>
          ))}
        </div>
      </div>

      {/* Shipment Section */}
      <div className="border-t pt-3 mb-3">
        <div className="flex items-center gap-2 mb-2">
          <input type="checkbox" />
          <span className="font-semibold">Shipment</span>
          <label className="ml-4 text-sm flex items-center gap-1">
            <input type="checkbox" /> Select All
          </label>
        </div>
        <div className="grid grid-cols-4 gap-2 text-sm">
          {[
            "Shipment Date", "AWB Number", "Shipment Status", "Remittance ID", "Pickup Time",
            "Delivered Time", "RTO Delivered Time", "Charged Weight", "Zone", "Last Status Updated",
            "Courier Name", "Freight Charges", "COD Charges"
          ].map((label, i) => (
            <label key={i} className="flex items-center gap-1">
              <input type="checkbox" /> {label}
            </label>
          ))}
        </div>
      </div>

      {/* Warehouse Section */}
      <div className="border-t pt-3 mb-3">
        <div className="flex items-center gap-2 mb-2">
          <input type="checkbox" />
          <span className="font-semibold">Warehouse</span>
          <label className="ml-4 text-sm flex items-center gap-1">
            <input type="checkbox" /> Select All
          </label>
        </div>
        <div className="grid grid-cols-4 gap-2 text-sm">
          {[
            "Warehouse Name", "Contact Name", "Contact Number", "Address 1", "Address 2",
            "City", "State", "Pincode"
          ].map((label, i) => (
            <label key={i} className="flex items-center gap-1">
              <input type="checkbox" /> {label}
            </label>
          ))}
        </div>
      </div>

      {/* Generate Button */}
      <div className="flex justify-center mt-4">
        <button className="bg-green-500 text-white px-6 py-2 rounded-md text-sm">
          Generate
        </button>
      </div>
    </div>
    </div>
  );
};

export default Report;
