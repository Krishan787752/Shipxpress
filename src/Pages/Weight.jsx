import React from "react";
import SecSubnavbar from "../Components/SecSubnavbar";

const Weight = () => {
  return (
    <div className="h-[623px]">
      <SecSubnavbar/>
    <div className="bg-white rounded-lg shadow-md p-4 mt-[-88px] ">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <i className="bi bi-basket2"></i> Weight Reconciliation
        </h2>
        <div className="flex gap-2">
          <button className="border px-3 py-1 rounded-md text-sm">Export</button>
          <button className="border px-3 py-1 rounded-md text-sm">Close</button>
          <button className="border px-3 py-1 rounded-md bg-blue-900 text-white text-sm">
            Weight SOP
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
        <input
          type="text"
          className="border rounded-md px-2 py-1 text-sm"
          placeholder="07/23/2025 - 08/22/2025"
        />
        <input
          type="text"
          className="border rounded-md px-2 py-1 text-sm"
          placeholder="AWB No(s) Separated by comma"
        />
        <input
          type="text"
          className="border rounded-md px-2 py-1 text-sm"
          placeholder="Product name to search"
        />
        <select className="border rounded-md px-2 py-1 text-sm">
          <option>All</option>
        </select>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 mb-4">
        <button className="bg-green-500 text-white px-3 py-1 rounded-md text-sm">
          Apply
        </button>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
          Clear
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-4">
        <button className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm">
          All (0)
        </button>
        <button className="bg-white border px-4 py-1 rounded-md text-sm shadow">
          Action Required (0)
        </button>
        <button className="bg-white border px-4 py-1 rounded-md text-sm shadow">
          Accepted (0)
        </button>
        <button className="bg-white border px-4 py-1 rounded-md text-sm shadow">
          Open Disputes (0)
        </button>
        <button className="bg-white border px-4 py-1 rounded-md text-sm shadow">
          Closed Disputes (0)
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-gray-50 border-b">
            <tr className="text-left text-xs text-gray-600">
              <th className="px-2 py-2">
                <input type="checkbox" />
              </th>
              <th className="px-2 py-2">WEIGHT APPLIED DATE</th>
              <th className="px-2 py-2">AWB NUMBER</th>
              <th className="px-2 py-2">ORDER ID</th>
              <th className="px-2 py-2">ENTERED WEIGHT</th>
              <th className="px-2 py-2">APPLIED WEIGHT</th>
              <th className="px-2 py-2">WEIGHT CHARGES</th>
              <th className="px-2 py-2">PRODUCT</th>
              <th className="px-2 py-2">STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="9" className="text-center py-6 text-gray-500">
                No records found
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between border-t mt-4 pt-2">
        <select className="border rounded-md px-2 py-1 text-sm">
          <option>50</option>
        </select>
        <p className="text-sm text-gray-500">
          Showing 1 to 50 of 0 entries
        </p>
      </div>
    </div>
    </div>
  );
};

export default Weight;
