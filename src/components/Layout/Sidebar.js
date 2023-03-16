import React from "react";
import logo from "../../image/logo.png";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top-sidebar ">
        <img className="logo-sidebar " src={logo} alt="" />
        <h3>
          Phone's <span className="mr-5">Garden</span>
        </h3>
      </div>
      <div className="middle-sidebar">
        <div className="content text-base font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "dashboard-content active" : "dashboard-content"
            }
          >
            <span className="text-2xl material-symbols-outlined">home</span>
            <h3 className="text-lg">Dashboard</h3>
          </NavLink>

          <NavLink
            to="/customers"
            className={({ isActive }) =>
              isActive ? "customers-content active" : "customers-content"
            }
          >
            <span className="text-2xl material-symbols-outlined">face</span>
            <h3 className="text-lg">Customers</h3>
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive ? "orders-content active" : "orders-content"
            }
          >
            <span className="text-2xl material-symbols-outlined">
              demography
            </span>
            <h3 className="text-lg">Orders</h3>
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "products-content active" : "products-content"
            }
          >
            <span className="text-2xl material-symbols-outlined">category</span>
            <h3 className="text-lg">Products</h3>
          </NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive }) =>
              isActive ? "analyst-content active" : "analyst-content"
            }
          >
            <span className="text-2xl material-symbols-outlined">
              monitoring
            </span>
            <h3 className="text-lg">Statistics</h3>
          </NavLink>
        </div>
      </div>
      <div className="bottom-sidebar"></div>
    </div>
  );
};

export default Sidebar;
