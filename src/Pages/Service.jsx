import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SecSubnavbar from "../Components/SecSubnavbar";

const Service = () => {
  const [pincode, setPincode] = useState("302011");

  const handleDownload = () => {
    // Dummy file download (replace with API call if needed)
    const element = document.createElement("a");
    const file = new Blob([`Pincode: ${pincode}`], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "pincodes.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="h-[623px]">
        <SecSubnavbar/>
   
    <div className="container mt-[-88px] p-4">
      <div className="card shadow rounded-3">
        {/* Header */}
        <div className="card-header bg-white border-0">
          <h5 className="mb-0 d-flex align-items-center">
            <i className="bi bi-geo-alt-fill text-danger me-2"></i>
            Download Pincodes List
          </h5>
        </div>
        <hr />

        {/* Body */}
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">
              Pickup Pincode (For Zone Mapping)
            </label>
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="form-control w-25"
            />
          </div>

          <button
            onClick={handleDownload}
            className="btn btn-info text-white d-flex align-items-center"
          >
            <i className="bi bi-download me-2"></i>
            Download
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Service;
