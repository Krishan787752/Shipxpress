import React, { useState } from "react";
import SecSubnavbar from "../Components/SecSubnavbar";

export default function Billing() {
  const [tab, setTab] = useState("B2C");
  const [plan, setPlan] = useState("Forward");

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Top Navbar */}
      <SecSubnavbar />
   <div className="mt-[-82px] ">
      {/* Page Header */}
<header className="bg-white text-gray-900 px-6 py-4 shadow-md">
  <h1 className="text-xl font-bold">Billing - Price Calculator</h1>
</header>


      {/* Main Content */}
      <main className="p-6">
        {/* Navbar (Tabs) */}
        <div className="flex gap-3 border-b pb-2 mb-4 text-sm font-medium">
          {[
            "Price Calculator",
            "COD Remittance",
            "Wallet Transactions",
            "Shipping Charges",
            "Invoice",
            "Credit Notes",
            "TDS",
          ].map((item) => (
            <button
              key={item}
              className={`px-3 py-1 rounded ${
                item === "Price Calculator"
                  ? "bg-gray-800 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left - Shipping Calculator */}
          <div>
            <h2 className="bg-gray-800 text-white px-3 py-1 font-x-small rounded-t">
              Shipping Rates Calculator
            </h2>

            {/* Tabs */}
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => setTab("B2C")}
                className={`px-3 py-1 border rounded ${
                  tab === "B2C" ? "bg-blue-600 text-white" : "bg-white"
                }`}
              >
                B2C Calculator
              </button>
              <button
                onClick={() => setTab("B2B")}
                className={`px-3 py-1 border rounded ${
                  tab === "B2B" ? "bg-blue-800 text-white" : "bg-white"
                }`}
              >
                B2B Calculator
              </button>
            </div>

            {/* Form */}
            <div className="mt-4 space-y-3">
              <div className="flex gap-2">
                <input
                  className="w-1/2 border p-2 rounded"
                  placeholder="Pick-up Pincode"
                />
                <input
                  className="w-1/2 border p-2 rounded"
                  placeholder="Delivery Pincode"
                />
              </div>
              <div className="flex gap-2">
                <input
                  className="w-1/2 border p-2 rounded"
                  placeholder="Weight"
                  defaultValue="0.5"
                />
                <select className="w-1/2 border p-2 rounded">
                  <option>Kg</option>
                  <option>Gram</option>
                </select>
              </div>
              <div className="flex gap-2">
                <input
                  className="w-1/3 border p-2 rounded"
                  placeholder="L (cm)"
                  defaultValue="10"
                />
                <input
                  className="w-1/3 border p-2 rounded"
                  placeholder="H (cm)"
                  defaultValue="10"
                />
                <input
                  className="w-1/3 border p-2 rounded"
                  placeholder="B (cm)"
                  defaultValue="10"
                />
              </div>
              <input
                className="w-full border p-2 rounded"
                placeholder="Value in INR e.g 1000"
              />
              <select className="w-full border p-2 rounded">
                <option>COD - No</option>
                <option>COD - Yes</option>
              </select>
              <select className="w-full border p-2 rounded">
                <option>Is Document? - No</option>
                <option>Is Document? - Yes</option>
              </select>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Calculate
              </button>
            </div>

            {/* ✅ Terms & Conditions (below left side) */}
            <hr className="my-6" />
            <div className="mt-6 text-sm">
              <h3 className="font-semibold">Terms & Conditions:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Above Shared Commercials are Exclusive GST.</li>
                <li>
                  Above pricing subject to change based on courier company
                  updation or change in any commercials.
                </li>
                <li>
                  Freight Weight is Picked - Volumetric or Dead weight whichever
                  is higher will be charged.
                </li>
                <li>
                  Return charges as same as Forward for courier's where special
                  RTO pricing is not shared.
                </li>
                <li>
                  Fixed COD charge or COD % of the order value whichever is
                  higher.
                </li>
                <li>
                  Other charges like address correction charges if applicable
                  shall be charged extra.
                </li>
                <li>
                  Prohibited item not to be shipped, if any penalty will be
                  charge to seller.
                </li>
                <li>
                  No Claim would be entertained for Glassware, Fragile products,
                  Concealed damages and improper packaging.
                </li>
                <li>
                  Any weight dispute due to incorrect weight declaration cannot
                  be claimed.
                </li>
                <li>
                  Chargeable weight would be volumetric or actual weight,
                  whichever is higher in difference.
                </li>
              </ul>
            </div>
          </div>

          {/* Right - Pricing Plans */}
          <div>
            <h2 className="bg-gray-800 text-white px-3 py-1 font-n-smallrounded-t">
              Pricing Plans
            </h2>

            {/* Toggle */}
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => setPlan("Forward")}
                className={`px-3 py-1 border rounded ${
                  plan === "Forward" ? "bg-blue-600 text-white" : "bg-white"
                }`}
              >
                Forward
              </button>
              <button
                onClick={() => setPlan("RTO")}
                className={`px-3 py-1 border rounded ${
                  plan === "RTO" ? "bg-blue-600 text-white" : "bg-white"
                }`}
              >
                RTO
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto mt-4 border rounded">
              <table className="w-full text-sm text-center border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-2 py-1">Courier</th>
                    <th className="border px-2 py-1">Within City</th>
                    <th className="border px-2 py-1">Within State</th>
                    <th className="border px-2 py-1">Metro to Metro</th>
                    <th className="border px-2 py-1">Rest of India</th>
                    <th className="border px-2 py-1">North East, J&K</th>
                    <th className="border px-2 py-1">COD Charges</th>
                    <th className="border px-2 py-1">COD %</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                   <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                   <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                   <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                   <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                   <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                   <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                   <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                   <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                   <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                   <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                   <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                   <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                   <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                   <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                   <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                   <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                   <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                   <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                   <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                   <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                   <tr>
                    <td className="border px-2 py-1">Amazon Shipping</td>
                    <td className="border">37.29</td>
                    <td className="border">44.92</td>
                    <td className="border">47.46</td>
                    <td className="border">52.54</td>
                    <td className="border">66.1</td>
                    <td className="border">23.73</td>
                    <td className="border">1.55%</td>
                  </tr>
                  {/* more rows here */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
}
