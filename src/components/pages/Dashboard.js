import React, { Fragment, useEffect, useState } from "react";
import DoughnutChart from "../chart/DoughnutChart";
import LineChart from "../chart/LineChart";
import ip14 from "../../image/iphone14pro_tim.png";
import MQD83 from "../../image/MQD83.jpg";
import { request } from "../utils/request";
import avatar from "../../image/avatarDefault.png";
import { Link } from "react-router-dom";
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
  console.log(totalOrder);
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
          <h3 className="font-medium text-xl">Recent Orders</h3>

          <table className="table-recent-orders">
            <thead>
              <tr>
                <td className="header-title">
                  <span>Order ID</span>
                  <span className="material-symbols-outlined icon">
                    expand_more
                  </span>
                </td>
                <td className="header-title">
                  <span>Order By</span>
                  <span className="material-symbols-outlined icon">
                    expand_more
                  </span>
                </td>
                <td className="header-title">
                  <span>Date</span>
                  <span className="material-symbols-outlined icon">
                    expand_more
                  </span>
                </td>
                <td className="header-title">
                  <span>Total Price</span>
                  <span className="material-symbols-outlined icon">
                    expand_more
                  </span>
                </td>
                <td className="header-title">
                  <span>Status</span>
                  <span className="material-symbols-outlined icon">
                    expand_more
                  </span>
                </td>
              </tr>
            </thead>
            <tbody className="table-body">
              {totalOrder?.length > 0 &&
                totalOrder.map((item) => {
                  return (
                    <tr>
                      <td>
                        <Link
                          state={{ order: item }}
                          to={{
                            pathname: `/order/${item._id}`,
                          }}
                        >
                          {item._id.slice(0, 8) + "..."}
                        </Link>
                      </td>
                      <td className="profile">
                        <img src={item.orderBy.avatar || avatar} alt="" />
                        <span>{item.orderBy.name}</span>
                      </td>
                      <td>
                        <span>{item.createdAt.slice(0, 10)}</span>
                      </td>
                      <td>
                        <span>
                          {formatted.format(item.paymentIntent.amount)}
                        </span>
                      </td>
                      <td>
                        {(item.paymentIntent.status === "Processing" ||
                          item.paymentIntent.status === "Dispatched" ||
                          item.paymentIntent.status === "Cash on Delivery") && (
                          <>
                            <span className="pending">Pending</span>
                          </>
                        )}
                        {(item.paymentIntent.status === "Cancelled" ||
                          item.paymentIntent.status === "Not Processed") && (
                          <>
                            <span className="warning">Cancelled</span>
                          </>
                        )}
                        {item.paymentIntent.status === "Delivered" && (
                          <>
                            <span className="success ">Complete</span>
                          </>
                        )}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="box">
          <div className="top-content">
            <h3 className="text-xl font-medium">Visit Customers</h3>
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
