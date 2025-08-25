import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SecSubnavbar from "../Components/SecSubnavbar";

const Addons = () => {
  const addons = [
    { icon: "bi bi-truck", title: "Order Allocation Engine", desc: "Set courier priorities for your shipments" },
    { icon: "bi bi-cart3", title: "Abandoned Checkouts", desc: "Manage abandoned Shopify checkouts" },
    { icon: "bi bi-eye", title: "Aftership (Tracking)", desc: "Re-engage with customers through personalized tracking pages" },
    { icon: "bi bi-telephone", title: "IVR", desc: "Automated call settings" },
    { icon: "bi bi-check2-circle", title: "COD Order Confirmation", desc: "Confirm COD orders via automated IVR calls" },
    { icon: "bi bi-calendar-event", title: "Shipment EDD", desc: "Show/Hide EDD of shipments" },
    { icon: "bi bi-chat-dots", title: "WhatsApp & SMS Notification", desc: "Improve brand presence through personalized WhatsApp & SMS communication" },
    { icon: "bi bi-people", title: "Sub Users", desc: "Allow access to team members" },
    { icon: "bi bi-gear", title: "Courier Management", desc: "Courier Management" },
  ];

  return (
    <div className="h-[623px]">
        <SecSubnavbar/>
   
    <div className="container-fluid mt-[-88px]">
      <div className="card shadow rounded-3">
        {/* Header */}
        <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0 d-flex align-items-center">
            <i className="bi bi-grid-3x3-gap-fill me-2"></i> ADDONS
          </h5>
        </div>

        <div className="card-body d-flex">
          {/* Left Info Panel */}
          <div className="col-md-3 border-end pe-3">
            <h5 className="fw-bold">Addons</h5>
            <p className="text-muted small">
              Augment your customer experience, boost your brand visibility, and
              reshape your logistics capabilities by leveraging our advanced tools
              for your eCommerce shipments.
            </p>
            <button className="btn btn-dark mb-3">Explore Addons Now</button>
            <div className="text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="addons"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </div>
          </div>

          {/* Right Addons Grid */}
          <div className="col-md-9 ps-3">
            <div className="row g-3">
              {addons.map((addon, index) => (
                <div key={index} className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <div className="card-body">
                      <i className={`${addon.icon} fs-2 text-primary mb-2`}></i>
                      <h6 className="fw-bold">{addon.title}</h6>
                      <p className="text-muted small">{addon.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Addons;
