import React, { Fragment, useEffect, useState } from "react";
import DoughnutChart from "../chart/DoughnutChart";
import LineChart from "../chart/LineChart";
import ip14 from "../../image/iphone14pro_tim.png";
import MQD83 from "../../image/MQD83.jpg";
import { request } from "../utils/request";
const Dashboard = () => {
  const [totalOrder, setTotalOrder] = useState(null);
  const [totalUser, setTotalUser] = useState(null);
  const config = {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 9,
  };
  const formatted = new Intl.NumberFormat("it-IT", config);
  const fetchingData = async () => {
    try {
      const responseOrder = await request.get("/order/");
      setTotalOrder(responseOrder.data);
      const responseCustomer = await request.get("/user/");
      setTotalUser(responseCustomer.data.length);
    } catch (err) {
      setTotalOrder(null);
      setTotalUser(null);
    }
  };
  const calculate = () => {
    let sum = 0;
    totalOrder.forEach((item) => {
      sum += item.paymentIntent.amount;
    });
    return sum;
  };
  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <Fragment>
      <div className="title-content">
        <h1>Welcome, Đại Huy !</h1>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="khaki"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg>
        </span>
      </div>
      <div className="insight-content">
        <div className="sales">
          <div className="sales-content">
            <div className="top-sales">
              <div className="left-components">
                <h3>Total Sales</h3>
                {totalOrder && <h1>{formatted.format(calculate())}</h1>}
              </div>
              <div className="right-components">
                <span className="material-symbols-outlined">payments</span>
              </div>
            </div>
            <div className="bottom-sales">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="lightseagreen"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
              </span>
              <h3>10</h3>
              <h3>+10.0% this week</h3>
            </div>
          </div>
        </div>
        <div className="sales">
          <div className="sales-content">
            <div className="top-sales">
              <div className="left-components">
                <h3>Today Customers</h3>
                <h1>{totalUser}</h1>
              </div>
              <div className="right-components">
                <span className="material-symbols-outlined">groups</span>
              </div>
            </div>
            <div className="bottom-sales">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="lightseagreen"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
              </span>
              <h3>10</h3>
              <h3>+10.0% this week</h3>
            </div>
          </div>
        </div>
        <div className="sales">
          <div className="sales-content">
            <div className="top-sales">
              <div className="left-components">
                <h3>Today Orders</h3>
                <h1>{totalOrder?.length}</h1>
              </div>
              <div className="right-components">
                <span className="material-symbols-outlined">
                  shopping_cart_checkout
                </span>
              </div>
            </div>
            <div className="bottom-sales">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="lightseagreen"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
              </span>
              <h3>10</h3>
              <h3>+10.0% this week</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="sales-chart">
        <div className="sales-chart-content">
          <h3>Sales Overview</h3>
          <div className="line-chart">
            <LineChart></LineChart>
          </div>
        </div>
      </div>
      <div className="graph-box">
        <div className="box">
          <div className="top-content">
            <h3>Recent Orders</h3>
          </div>
          <div className="bottom-content">
            <table className="table-fill">
              <thead>
                <tr>
                  <th>
                    <div className="header-table">
                      <span>Order ID</span>
                      <span className="material-symbols-outlined icon">
                        keyboard_arrow_down
                      </span>
                    </div>
                  </th>
                  <th>
                    <div className="header-table">
                      <span>Product Name</span>
                      <span className="material-symbols-outlined icon">
                        keyboard_arrow_down
                      </span>
                    </div>
                  </th>
                  <th>
                    <div className="header-table">
                      <span>Date</span>
                      <span className="material-symbols-outlined icon">
                        keyboard_arrow_down
                      </span>
                    </div>
                  </th>
                  <th>
                    <div className="header-table">
                      <span>Price</span>
                      <span className="material-symbols-outlined icon">
                        keyboard_arrow_down
                      </span>
                    </div>
                  </th>
                  <th>
                    <div className="header-table">
                      <span>Status</span>
                      <span className="material-symbols-outlined icon">
                        keyboard_arrow_down
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {totalOrder?.length > 0 &&
                  totalOrder.reverse().map((item) => {
                    return (
                      <tr>
                        <td>#{item._id}</td>
                        <td className="product">
                          <span>{item.orderBy.name}</span>
                        </td>
                        <td>{item.createdAt.slice(0, 10)}</td>
                        <td>{formatted.format(item.paymentIntent.amount)}</td>
                        <td>
                          {(item.orderStatus === "Processing" ||
                            item.orderStatus === "Dispatched" ||
                            item.orderStatus === "Cash on Delivery") && (
                            <>
                              <div className="pending">Pending</div>
                            </>
                          )}
                          {(item.orderStatus === "Cancelled" ||
                            item.orderStatus === "Not Processed") && (
                            <>
                              <div className="warning">Cancelled</div>
                            </>
                          )}
                          {item.orderStatus === "Delivered" && (
                            <>
                              <div className="success">Completed</div>
                            </>
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="box">
          <div className="top-content">
            <h3>Visit Customers</h3>
          </div>
          <div className="bottom-content">
            <div className="chart">
              <DoughnutChart></DoughnutChart>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
