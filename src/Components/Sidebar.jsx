import React, { useState } from "react";
import Logo from "../assets/img1.jpg";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div
      className={`sidebar-background ${isOpen ? "open" : "collapsed"} `}
      style={{
        width: isOpen ? "260px" : "80px",
        transition: "width 0.3s ease",
        overflow: "hidden",
        height: "100vh",
        backgroundColor: "#0d1b2a",
        color: "white",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: 40,
      }}
    >
      {/* Logo */}
      <div
        className="roadmate-logo flex items-center justify-center border-b border-gray-700"
        style={{
          height: "67px",
          backgroundColor: "#1b263b",
        }}
      >
        <img
          src={Logo}
          alt="Logo"
          style={{
            height: "40px",
            width: isOpen ? "120px" : "40px",
            transition: "all 0.3s ease",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Menu */}
      <div className="container-fluid mt-1">
        <ul className="menu-items list-unstyled p-0 m-0 space-y-0.5">
          <li className="flex items-center gap-2 px-3 py-2 hover:bg-[#1e3a5f] rounded">
            <i className="bi bi-grid-fill text-2xl"></i>
            {isOpen && (
              <NavLink to="/Dashboard" className="nav-link text-white">
                Dashboard
              </NavLink>
            )}
          </li>

          {/* Orders Dropdown */}
          <li
            className="flex flex-col px-3 py-2 hover:bg-[#0a1e38] rounded cursor-pointer"
            onClick={() => toggleDropdown("orders")}
          >
            <div className="flex items-center gap-2">
              <i className="bi bi-box text-2xl"></i>
              {isOpen && (
                <span className="flex justify-between w-full">
                  Orders
                  <i
                    className={`bi bi-caret-${
                      openDropdown === "orders" ? "down" : "down"
                    }-fill`}
                  ></i>
                </span>
              )}
            </div>

            {isOpen && openDropdown === "orders" && (
              <ul className="pl-8 mt-1 space-y-3  font-medium text-sm">
                <li>
                  <NavLink to="/order-subpages/b2c" className="block text-white no-underline">
                    B2C
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/order-subpages/b2b" className="block text-white no-underline">
                    B2B
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/order-subpages/documents"
                    className="block text-white no-underline"
                  >
                    Document
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Shipments Dropdown */}
          <li
            className="flex  flex-col px-3 py-2 hover:bg-[#0a1e38] rounded cursor-pointer"
            onClick={() => toggleDropdown("shipments")}
          >
            <div className="flex items-center gap-2">
              <i className="bi bi-truck text-2xl"></i>
              {isOpen && (
                <span className="flex justify-between w-full">
                  Shipments
                  <i
                    className={`bi bi-caret-${
                      openDropdown === "shipments" ? "down" : "down"
                    }-fill`}
                  ></i>
                </span>
              )}
            </div>

            {isOpen && openDropdown === "shipments" && (
              <ul className=" pl-8 mt-1 space-y-3 font-medium text-sm">
                <li>
                  <NavLink to="/Pages/Shipment-sub-pages/ShipmentsB2C" className="block text-white no-underline">
                    B2C
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Pages/Shipment-sub-pages/ShipmentsB2B" className="block text-white no-underline">
                    B2B
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Pages/Shipment-sub-pages/ShipmentsDocs" className="block text-white no-underline">
                    Documents
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Other static menus */}
          <li className="flex items-center gap-2 px-3 py-2 hover:bg-[#1e3a5f] rounded">
            <i className="bi bi-shield-fill text-2xl"></i>
            {isOpen && (
              <NavLink to="/Pages/Exception" className="nav-link text-white">
                Exception (NDR)
              </NavLink>
            )}
          </li>
         <li className="flex items-center gap-2 px-3 py-2 hover:bg-[#1e3a5f] rounded">
            <i className="bi bi-minecart-loaded text-2xl"></i>
            {isOpen && 
            <NavLink to="/Pages/Weight" className="nav-link text-white">Weight Reco</NavLink>
           }
          </li>

          <li className="flex items-center gap-2 px-3 py-2 hover:bg-[#1e3a5f] rounded">
            <i className="bi bi-receipt text-2xl"></i>
            {isOpen && 
            <NavLink to="/Pages/Billing" className="nav-link text-white">Billing</NavLink>
            }
          </li>

          <li className="flex items-center gap-2 px-3 py-2 hover:bg-[#1e3a5f] rounded">
            <i className="bi bi-clipboard2-fill text-2xl"></i>
            {isOpen && 
            <NavLink to="/Pages/Report" className="nav-link text-white">Reports</NavLink>
            }
          </li>

          <li className="flex items-center gap-2 px-3 py-2 hover:bg-[#1e3a5f] rounded">
            <i className="bi bi-cart-fill text-2xl"></i>
            {isOpen && 
            <NavLink to="/Pages/Abandoned" className="text-white nav-link">Abandoned</NavLink> }
          </li>

          <li className="flex items-center gap-2 px-3 py-2 hover:bg-[#1e3a5f] rounded">
            <i className="bi bi-file-earmark-excel-fill text-2xl"></i>
            {isOpen && 
            <NavLink to="/Pages/Addons" className="nav-link text-white">Addons</NavLink>
            }
          </li>

          <li className="flex items-center gap-2 px-3 py-2 hover:bg-[#1e3a5f] rounded">
            <i className="bi bi-gear-fill text-2xl"></i>
            {isOpen && 
            <NavLink to="/Pages/Settings" className="nav-link text-white" >Settings</NavLink> }
          </li>


          {/* this is dummy */}
         <li
            className="flex flex-col px-3 py-2 hover:bg-[#0a1e38] rounded cursor-pointer"
            onClick={() => toggleDropdown(" Supports")}
          >
            <div className="flex items-center gap-2">
            <i className="bi bi-person-raised-hand text-2xl"></i>
              {isOpen && (
                <span className="flex justify-between w-full">
                  Supports
                  <i
                    className={`bi bi-caret-${
                      openDropdown === " Supports" ? "down" : "down"
                    }-fill`}
                  ></i>
                </span>
              )}
            </div>

            {isOpen && openDropdown === " Supports" && (
              <ul className="pl-8 mt-1 space-y-3   text-sm">
                <li>
                  <NavLink to="/order-subpages/b2c" className="block text-white no-underline">
                   Shipxpress sops
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/order-subpages/b2b" className="block text-white no-underline">
                   Escalations
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/order-subpages/b2c" className="block text-white no-underline">
                   Shipxpress sops
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/order-subpages/b2c" className="block text-white no-underline">
                   Shipxpress sops
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/order-subpages/b2c" className="block text-white no-underline">
                   Shipxpress sops
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* servicable pincode */}

          <li className="flex items-center gap-2 px-3 py-2 hover:bg-[#1e3a5f] rounded">
            <i className="bi bi-bing text-2xl"></i>
            {isOpen && 
            <NavLink to="/Pages/Service" className="nav-link text-white">Serviceable Pincodes</NavLink>
            }
          </li>
        </ul>
      </div>
    </div>
      
  );
};

export default Sidebar;
