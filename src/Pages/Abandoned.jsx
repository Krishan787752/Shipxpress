import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SecSubnavbar from "../Components/SecSubnavbar";

const Abandoned = ({isOpen}) => {
  return (
    <div className="h-[623px]">
        <SecSubnavbar/>
   
     <div className="container-fluid mt-[-88px]">
      <div
        className={`card shadow rounded-3 ${
          isOpen ? "w-100" : "w-100"
        } mx-auto`}
        style={{ transition: "width 0.3s ease" }}
      >
        {/* Header */}
        <div className="card-header bg-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0 d-flex align-items-center">
            <i className="bi bi-cart3 text-dark me-2"></i>
            Abandoned checkouts
          </h5>
          <div>
            <button className="btn btn-outline-secondary btn-sm me-2">
              <i className="bi bi-download me-1"></i> Export
            </button>
            <button className="btn btn-outline-secondary btn-sm">
              <i className="bi bi-funnel me-1"></i> Filters
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="card-body p-0">
          <table className="table mb-0">
            <thead className="table-light">
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>CHANNEL</th>
                <th>CHECKOUT</th>
                <th>DATE</th>
                <th>PRODUCT</th>
                <th>AMOUNT</th>
                <th>CONTACT NAME</th>
                <th>PHONE</th>
                <th>TAGS</th>
                <th>RECOVERED</th>
                <th>CREATE ORDER</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="11" className="text-center text-muted py-4">
                  Showing 1 to 50 of 0 entries
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="card-footer bg-white">
          <div className="d-flex align-items-center">
            <select className="form-select w-auto me-2">
              <option>50</option>
              <option>100</option>
              <option>200</option>
            </select>
            <span className="text-muted">Showing 1 to 50 of 0 entries</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Abandoned;
