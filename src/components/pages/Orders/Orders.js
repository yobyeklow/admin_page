import React from "react";
import { NavLink } from "react-router-dom";
const data = [
  {
    id: "#12345",
    date: "19-2-2022",
    productName: "Iphone14 pro",
    productPrice: 125,
    status: "Delivered",
  },
];
const Orders = () => {
  return (
    <div className="orders-page">
      <h1 className="title-page">Orders</h1>
      <div className="info-box">
        <div className="info-box-item">
          <div className="info-box-content new-orders">
            <h3 className="top-content">New Orders</h3>
            <div className="bottom-content">
              <h1>245</h1>
              <div className="text-details">
                <span>Impression</span>
                <span>-</span>
                <span>20%</span>
              </div>
              <span class="material-symbols-outlined icon-up">trending_up</span>
            </div>
          </div>
        </div>
        <div className="info-box-item">
          <div className="info-box-content pending-orders">
            <h3 className="top-content">Pending Orders</h3>
            <div className="bottom-content">
              <h1>145</h1>
              <div className="text-details">
                <span>Impression</span>
                <span>-</span>
                <span>20%</span>
              </div>
              <span class="material-symbols-outlined icon-up">trending_up</span>
            </div>
          </div>
        </div>
        <div className="info-box-item">
          <div className="info-box-content delivered-orders">
            <h3 className="top-content">Delivered Orders</h3>
            <div className="bottom-content">
              <h1>200</h1>
              <div className="text-details">
                <span>Impression</span>
                <span>-</span>
                <span>20%</span>
              </div>
              <span class="material-symbols-outlined icon-up">trending_up</span>
            </div>
          </div>
        </div>
      </div>
      <div className="data-order">
        <div className="content">
          <table className="table-form">
            <thead>
              <tr>
                <th>
                  <div className="header-table">
                    <span class="material-symbols-outlined text-purple">
                      123
                    </span>
                    <h3>Order ID</h3>
                  </div>
                </th>
                <th>
                  <div className="header-table">
                    <span class="material-symbols-outlined font-medium text-organce text-xl">
                      calendar_month
                    </span>
                    <h3>Order Date</h3>
                  </div>
                </th>
                <th>
                  <div className="header-table">
                    <span class="material-symbols-outlined text-xl text-lightGray">
                      inventory_2
                    </span>
                    <h3>Product Name</h3>
                  </div>
                </th>
                <th>
                  <div className="header-table">
                    <span class="material-symbols-outlined text-darkGreen text-xl">
                      paid
                    </span>
                    <h3>Product Price</h3>
                  </div>
                </th>
                <th>
                  <div className="header-table">
                    <span class="material-symbols-outlined text-rosyBrown text-xl">
                      trolley
                    </span>
                    <h3>Status</h3>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="table-content">
              <tr>
                <td>
                  <span>#12345</span>
                </td>
                <td>
                  <span>14-12-2020</span>
                </td>
                <td>
                  <span>Iphone 14 Pro</span>
                </td>
                <td>
                  <span>10.000.000VND</span>
                </td>
                <td>
                  <div className="checkpoint">
                    <span className="material-symbols-outlined icon-success">
                      done_all
                    </span>
                    <span>Delivered</span>
                  </div>
                </td>
                <td>
                  <div className="detail-order">
                    <NavLink to="/orders/1">
                      <span>Details</span>
                    </NavLink>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="">
                    <span>#12346</span>
                  </div>
                </td>
                <td>
                  <span>14-12-2020</span>
                </td>
                <td>
                  <span>Iphone 14 Pro</span>
                </td>
                <td>
                  <span>10.000.000VND</span>
                </td>
                <td>
                  <div className="checkpoint">
                    <span class="material-symbols-outlined icon-cancel">
                      close
                    </span>
                    <span>Cancel</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
