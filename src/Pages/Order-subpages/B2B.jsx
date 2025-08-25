import React from 'react'
import SecSubnavbar from '../../Components/SecSubnavbar';


const B2B = () => {
  return (
    <div className="h-[623px]">
      <SecSubnavbar/>
    <div className="p-4 mt-[-88px] bg-white rounded-lg shadow">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">B2B Orders</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">
            B2B Business inquiry 📞{" "}
            <a href="tel:9311276606" className="text-blue-600 font-medium">
              9311276606
            </a>
          </span>
          <button className="px-3 py-1 border rounded text-sm hover:bg-gray-100">
            Export
          </button>
          <button className="px-3 py-1 border rounded text-sm hover:bg-gray-100">
            Import
          </button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
            + Create B2B Order
          </button>
          <button className="px-3 py-1 border rounded text-sm hover:bg-gray-100">
            Filters
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 mb-4">
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded">
          All Orders
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-600 border rounded hover:bg-gray-100">
          Not Shipped (0)
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-600 border rounded hover:bg-gray-100">
          Booked (0)
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-600 border rounded hover:bg-gray-100">
          Cancelled (0)
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-3 py-2 border">
                <input type="checkbox" />
              </th>
              <th className="px-3 py-2 border">Channel</th>
              <th className="px-3 py-2 border">Order</th>
              <th className="px-3 py-2 border">Date</th>
              <th className="px-3 py-2 border">Product</th>
              <th className="px-3 py-2 border">Payment</th>
              <th className="px-3 py-2 border">Method</th>
              <th className="px-3 py-2 border">Customer</th>
              <th className="px-3 py-2 border">Phone</th>
              <th className="px-3 py-2 border">Weight</th>
              <th className="px-3 py-2 border">IVR Status</th>
              <th className="px-3 py-2 border">Tags</th>
              <th className="px-3 py-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan="13"
                className="px-3 py-4 text-center text-gray-500"
              >
                No Records found
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <div>
          Showing <b>1</b> to <b>50</b> of <b>0</b> entries
        </div>
        <select className="border rounded px-2 py-1 text-sm">
          <option>50</option>
          <option>100</option>
          <option>200</option>
        </select>
      </div>
    </div>
    </div>
  );
};



export default B2B
