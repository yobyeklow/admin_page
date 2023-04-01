import React, { useEffect, useState } from "react";
import LineChartStatistics from "../../chart/LineChartStatistics";
import VerticalBarChart from "../../chart/LineChartStatistics.js";
import iphone14 from "../../../image/iphone14pro_tim.png";
import MQD83 from "../../../image/MQD83.jpg";
import { request } from "../../utils/request";
const Statistics = () => {
  const [TotalCustomer, SetTotalCustomers] = useState();
  const [TotalSale, SetTotalSale] = useState();
  const [TotalProduct, setTotalProduct] = useState();
  const FetchingOrdersData = async () => {
    await request
      .get("/order/")
      .then((res) => {
        SetTotalSale(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    await request
      .get("/user/")
      .then((res) => {
        SetTotalCustomers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    await request
      .get("/products")
      .then((res) => {
        setTotalProduct(res.data);
        CalculateRevenue();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const CalculateRevenue = () => {
    let total = 0;
    for (let item of TotalProduct.values()) {
      let percent = (item.price * 25) / 100;
      total = total + (item.price - percent) * item.quantity;
    }
    console.log(total);
  };
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
            <div className="sale-details mr-12">
              <h3 className="text-xl font-semibold mb-2 w-[217px]">
                100.000.000.000 VND
              </h3>
              <h3 className="text-base text-gray-400">Total Sales</h3>
            </div>
            <div className="sale-analyst flex flex-col gap-14 ml-3">
              <div className="icon bg-blue-100 w-10 h-10 flex items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-slate-500 text-lg">
                  question_mark
                </span>
              </div>
              <h3 className="text-orange-500 font-semibold">+ 24%</h3>
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
            <div className="sale-details mr-12">
              <h3 className="text-xl font-semibold mb-2 w-[217px]">
                80.000.000 VND
              </h3>
              <h3 className="text-base text-gray-400">Total Expenses</h3>
            </div>
            <div className="sale-analyst flex flex-col gap-14 ml-3">
              <div className="icon bg-blue-100 w-10 h-10 flex items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-slate-500 text-lg">
                  question_mark
                </span>
              </div>
              <h3 className="text-purple font-semibold">- 20%</h3>
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
            <div className="sale-details mr-12">
              <h3 className="text-xl font-semibold mb-2 w-[217px]">
                {TotalCustomer?.length}
              </h3>
              <h3 className="text-base text-gray-400">Total Customers</h3>
            </div>
            <div className="sale-analyst flex flex-col gap-14 ml-3">
              <div className="icon bg-blue-100 w-10 h-10 flex items-center justify-center rounded-full">
                <span class="material-symbols-outlined text-slate-500 text-lg">
                  question_mark
                </span>
              </div>
              <h3 className="text-green-600 font-semibold">+ 10%</h3>
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
                <span className="text-green-400">(+13%)</span>
              </div>
              <div className="right">
                <h3 className="text-gray-500">This Year</h3>
              </div>
            </div>
            <div className="chart-content">
              <LineChartStatistics></LineChartStatistics>
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

                <span className="text-purple font-semibold">(+1.6%)</span>
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
                <tr>
                  <td>
                    <img src={iphone14} alt="" />
                    Iphone 14 Pro - Purple
                  </td>
                  <td>14.000.000 VND</td>
                  <td>100 pcs</td>
                  <td className="inStock">In Stock</td>
                </tr>
                <tr>
                  <td>
                    <img src={iphone14} alt="" />
                    Iphone 14 Pro - Purple
                  </td>
                  <td>14.000.000 VND</td>
                  <td>100 pcs</td>
                  <td className="outStock">Out of Stock</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
