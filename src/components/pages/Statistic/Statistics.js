import React, { useEffect, useState } from "react";
import VerticalBarChart from "../../chart/VerticalBarChart.js";

import { faker } from "@faker-js/faker";
import { request } from "../../utils/request";

import LineChartStatistics from "../../chart/LineChartStatistics.js";

const Statistics = () => {
  const [TotalCustomer, setTotalCustomers] = useState();
  const [TotalExpenses, setTotalExpenses] = useState();
  const [TotalSale, setTotalSale] = useState();
  const [TotalProduct, setTotalProduct] = useState();
  const monthPre = new Date().getMonth();
  const monthNow = new Date().getMonth() + 1;
  const FetchingOrdersData = async () => {
    await request
      .get("/order/")
      .then((res) => {
        const sale = processTotalSale(res.data);
        setTotalSale(sale);
      })

      .catch((err) => {
        console.log(err);
      });
    await request
      .get("/user/")
      .then((res) => {
        const customer = processTotalCustomer(res.data, monthNow);
        setTotalCustomers(customer);
      })
      .catch((err) => {
        console.log(err);
      });
    await request
      .get("/products")
      .then((res) => {
        setTotalProduct(res.data);
        // processTotalExpenses(res.data);
        const expenses = processTotalExpenses(res.data);
        setTotalExpenses(expenses);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(TotalExpenses);
  const processTotalSale = (orders) => {
    let result = Array(13).fill(0);
    orders.forEach((order) => {
      let month = order.createdAt.slice(6, 7);
      if (order.orderStatus === "Delivered") {
        result[month] += order.paymentIntent.amount;
      }
    });
    return result;
  };
  const processTotalExpenses = (products) => {
    let results = Array(13).fill(0);
    products.forEach((item) => {
      let month = item.createdAt.slice(6, 7);
      results[month] += item.quantity * item.price;
    });
    return results;
  };
  const processTotalCustomer = (customers) => {
    let result = Array(13).fill(0);
    customers.forEach((customer) => {
      let month = parseInt(customer.createdAt.slice(6, 7));
      result[month] += 1;
    });

    return result;
  };

  const comparePercent = (total, monthPre, monthNow) => {
    if (total[monthNow] === 0) {
      return 0;
    }

    let percent = (total[monthNow] - total[monthPre]) / total[monthPre];
    return percent * 100;
  };
  const formatter = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "VND",
  });
  useEffect(() => {
    FetchingOrdersData();
  }, []);

  return (
    <div className="statistics-page">
      <div className="title-page flex items-center gap-4">
        Statistics
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#d3712b"
          viewBox="0 0 24 24"
          strokeWidth="none"
          stroke="#d3712b"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      </div>
      <div className="statistics-content">
        <div className="graph-box">
          <div className="boxItem">
            <div className="sale-icon">
              <div className="rounded-full border-orange-200 border-2 ml-5 mr-5 p-1 flex justify-center items-center">
                <div className="bg-linen inline-block p-6 border rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="chocolate"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  {TotalSale && (
                    <h3 className="text-xl font-semibold mb-2 w-[217px]">
                      {formatter.format(TotalSale[monthNow])}
                    </h3>
                  )}
                  <h3 className="text-base text-gray-400 mb-3">Total Sales</h3>
                </div>
                <div className="icon mr-5 bg-blue-100 w-10 h-10 flex items-center justify-center rounded-full">
                  <span className="material-symbols-outlined text-slate-500 text-lg">
                    question_mark
                  </span>
                </div>
              </div>
              <div className="flex justify-between">
                <h3 className="text-orange-500 font-semibold">This month</h3>
                {TotalSale && (
                  <div className="text-orange-500 font-semibold mr-5">
                    {Math.round(comparePercent(TotalSale, monthPre, monthNow)) >
                      0 ||
                    comparePercent(TotalSale, monthPre, monthNow) === 0 ? (
                      <h3>
                        +{" "}
                        {Math.round(
                          comparePercent(TotalSale, monthPre, monthNow)
                        )}{" "}
                        %
                      </h3>
                    ) : (
                      <h3>
                        -{" "}
                        {Math.abs(
                          Math.round(
                            comparePercent(TotalSale, monthPre, monthNow)
                          )
                        )}{" "}
                        %
                      </h3>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="boxItem">
            <div className="sale-icon">
              <div className="rounded-full border-gray-300 border-2 ml-5 mr-5 p-1 flex justify-center items-center">
                <div className="bg-ghostWhite inline-block p-6 border rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="slateblue"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  {TotalExpenses && (
                    <>
                      <h3 className="text-xl font-semibold mb-2 w-[217px]">
                        {formatter.format(TotalExpenses[monthNow])}
                      </h3>
                      <h3 className="text-base text-gray-400 mb-3">
                        Total Expenses
                      </h3>
                    </>
                  )}
                </div>
                <div className="icon mr-5 bg-blue-100 w-10 h-10 flex items-center justify-center rounded-full">
                  <span className="material-symbols-outlined text-slate-500 text-lg">
                    question_mark
                  </span>
                </div>
              </div>
              <div className="flex justify-between">
                <h3 className="text-purple font-semibold">This month</h3>{" "}
                {TotalExpenses && (
                  <div className="text-purple font-semibold mr-5">
                    {Math.round(
                      comparePercent(TotalExpenses, monthPre, monthNow)
                    ) > 0 ? (
                      <h3>
                        +{" "}
                        {Math.round(
                          comparePercent(TotalExpenses, monthPre, monthNow)
                        )}{" "}
                        %
                      </h3>
                    ) : (
                      <h3>
                        -{" "}
                        {Math.abs(
                          Math.round(
                            comparePercent(TotalExpenses, monthPre, monthNow)
                          )
                        )}{" "}
                        %
                      </h3>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="boxItem">
            <div className="sale-icon">
              <div className="rounded-full border-gray-200 border-2 ml-5 mr-5 p-1 flex justify-center items-center">
                <div className="bg-green-300 inline-block p-6 border rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="seagreen"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="black"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  {TotalCustomer && (
                    <h3 className="text-xl font-semibold mb-2 w-[217px]">
                      {TotalCustomer[monthNow]}
                    </h3>
                  )}
                  <h3 className="text-base text-gray-400 mb-3">
                    Total Customers
                  </h3>
                </div>
                <div className="icon mr-5 bg-blue-100 w-10 h-10 flex items-center justify-center rounded-full">
                  <span className="material-symbols-outlined text-slate-500 text-lg">
                    question_mark
                  </span>
                </div>
              </div>
              <div className="flex justify-between">
                <h3 className="text-green-500 font-semibold">This month</h3>
                {TotalCustomer && (
                  <div className="text-green-500 font-semibold mr-5">
                    {Math.round(
                      comparePercent(TotalCustomer, monthPre, monthNow)
                    ) >= 0 ? (
                      <h3>
                        +{" "}
                        {Math.round(
                          comparePercent(TotalCustomer, monthPre, monthNow)
                        )}{" "}
                        %
                      </h3>
                    ) : (
                      <h3>
                        -{" "}
                        {Math.abs(
                          Math.round(
                            comparePercent(TotalCustomer, monthPre, monthNow)
                          )
                        )}{" "}
                        %
                      </h3>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="chart-analyst">
          <div className="revenue-chart">
            <div className="chart-title">
              <div className="left">
                <h3 className="text-xl font-medium">Revenue</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7 text-green-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                  />
                </svg>
                {/* <span className="text-green-400">(+13%)</span> */}
              </div>
              <div className="right">
                <h3 className="text-gray-500">This Year</h3>
              </div>
            </div>
            <div className="chart-content">
              {TotalExpenses?.length > 0 && TotalSale?.length > 0 && (
                <LineChartStatistics
                  sale={TotalSale}
                  expenses={TotalExpenses}
                ></LineChartStatistics>
              )}
            </div>
          </div>
          <div className="visitors-chart">
            <div className="chart-title">
              <div className="left">
                <h3 className="text-xl font-medium">Visitors</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-7 h-7 text-purple"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                {/* <span className="text-purple font-semibold">(+1.6%)</span> */}
              </div>
            </div>
            <div className="chart-content">
              <VerticalBarChart></VerticalBarChart>
            </div>
          </div>
        </div>
        <div className="best-selling w-full mt-10 bg-white px-8">
          <div className="best-selling-container">
            <div className="top flex items-center justify-between py-5">
              <h3 className="title font-medium text-xl">
                Best Selling Products
              </h3>
              <div className="products">
                <select name="bestSale" id="bestSale" className="w-full">
                  <option value="Last week">Last Week</option>
                  <option value="Last month">Last Month</option>
                </select>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Sold</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {TotalProduct?.length > 0 &&
                  TotalProduct.map((item) => {
                    return (
                      <tr key={item._id}>
                        <td>
                          <img src={item.images} alt="" />
                          <span>{item.name}</span>
                        </td>
                        <td>{item.price}</td>
                        <td>{item.sold} pcs</td>
                        {item.quantity > 0 ? (
                          <td className="inStock">In Stock</td>
                        ) : (
                          <td className="outStock">Out of Stock</td>
                        )}
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
