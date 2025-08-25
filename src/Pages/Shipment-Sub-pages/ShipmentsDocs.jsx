import React from "react";
import SecSubnavbar from "../../Components/SecSubnavbar";

const ShipmentsDocs = () => {
  return (
    <div className="h-[623px]">
      <SecSubnavbar/>
    <div className="p-4 mt-[-88px]">
      <div className="bg-white shadow rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center border-b px-4 py-2">
          <h2 className="text-lg font-semibold">Document Shipments</h2>
          <div className="flex gap-2">
            <button className="border rounded px-3 py-1 text-sm">⚙️</button>
            <button className="border rounded px-3 py-1 text-sm">Export</button>
            <button className="border rounded px-3 py-1 text-sm">Manifest</button>
            <button className="border rounded px-3 py-1 text-sm">Filters</button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 px-4 py-3 border-b">
          <button className="bg-blue-500 text-white rounded px-3 py-1">All</button>
          <button className="border rounded px-3 py-1">Booked (0)</button>
          <button className="border rounded px-3 py-1">Pending Pickup (0)</button>
          <button className="border rounded px-3 py-1">In Transit (0)</button>
          <button className="border rounded px-3 py-1">Out For Delivery (0)</button>
          <button className="border rounded px-3 py-1">Delivered (0)</button>
          <button className="border rounded px-3 py-1">More ▾</button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-3 py-2 text-left">
                  <input type="checkbox" />
                </th>
                <th className="px-3 py-2 text-left">Channel</th>
                <th className="px-3 py-2 text-left">Order</th>
                <th className="px-3 py-2 text-left">Date</th>
                <th className="px-3 py-2 text-left">Product</th>
                <th className="px-3 py-2 text-left">Payment</th>
                <th className="px-3 py-2 text-left">Method</th>
                <th className="px-3 py-2 text-left">Customer</th>
                <th className="px-3 py-2 text-left">Carrier</th>
                <th className="px-3 py-2 text-left">AWB</th>
                <th className="px-3 py-2 text-left">EDD</th>
                <th className="px-3 py-2 text-left">Tags</th>
                <th className="px-3 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="13" className="px-3 py-6 text-center text-gray-500">
                  No Records Found.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-600">
          <div>
            <select className="border rounded px-2 py-1">
              <option>50</option>
              <option>100</option>
            </select>
          </div>
          <p>Showing 1 to 50 of 0 entries</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ShipmentsDocs;
