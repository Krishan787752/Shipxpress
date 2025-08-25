import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SecSubnavbar from "../../Components/SecSubnavbar";

const Documents = () => {
  // ❌ Empty orders array → "No record found" will show
  const orders = [];

  return (
    <div className="h-[623px]">
      <SecSubnavbar/>
    <div className="p-3 mt-[-88px] bg-white shadow-sm rounded">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold mb-0">Document Orders</h5>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary btn-sm">
            <i className="bi bi-box-arrow-up"></i> Export
          </button>
          <button className="btn btn-outline-secondary btn-sm">
            <i className="bi bi-box-arrow-in-down"></i> Import
          </button>
          <div className="btn-group">
            <button className="btn btn-primary btn-sm dropdown-toggle" data-bs-toggle="dropdown">
              <i className="bi bi-cart"></i> Create Order
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item">Custom Order</button></li>
              <li><button className="dropdown-item">Bulk Import</button></li>
            </ul>
          </div>
          <button className="btn btn-outline-secondary btn-sm">
            <i className="bi bi-funnel"></i> Filters
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="d-flex gap-2 mb-3 flex-wrap">
        <button className="btn btn-dark btn-sm">All Orders</button>
        <button className="btn btn-outline-dark btn-sm">Not Shipped (0)</button>
        <button className="btn btn-outline-dark btn-sm">Booked (0)</button>
        <button className="btn btn-outline-dark btn-sm">Cancelled (0)</button>
        <button className="btn btn-link ms-auto text-decoration-none text-primary fw-semibold">
          + Add Segment
        </button>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th scope="col">
                <input type="checkbox" />
              </th>
              <th>CHANNEL</th>
              <th>ORDER</th>
              <th>DATE</th>
              <th>PRODUCT</th>
              <th>PAYMENT</th>
              <th>METHOD</th>
              <th>CUSTOMER</th>
              <th>PHONE</th>
              <th>WEIGHT</th>
              <th>IVR STATUS</th>
              <th>WHATSAPP STATUS</th>
              <th>TAGS</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="14" className="text-center text-muted">
                  No record found
                </td>
              </tr>
            ) : (
              orders.map((order, i) => (
                <tr key={i}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{order.channel}</td>
                  <td className="text-primary fw-semibold">{order.order}</td>
                  <td>{order.date}</td>
                  <td>{order.product}</td>
                  <td>{order.payment}</td>
                  <td>{order.method}</td>
                  <td>{order.customer}</td>
                  <td>{order.phone}</td>
                  <td>{order.weight}</td>
                  <td>{order.ivrStatus}</td>
                  <td>{order.whatsappStatus}</td>
                  <td>{order.tags}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary shadow-sm">
                      {order.status}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="d-flex justify-content-between align-items-center mt-2 small text-muted">
        <span>
          Showing 1 to 50 of {orders.length} entries
        </span>
        <select className="form-select form-select-sm w-auto">
          <option>50</option>
          <option>100</option>
          <option>200</option>
        </select>
      </div>
    </div>
    </div>
  );
};

export default Documents;
