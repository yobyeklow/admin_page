import React from "react";

const Statistics = () => {
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
                <span class="material-symbols-outlined text-slate-500 text-lg">
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
                <span class="material-symbols-outlined text-slate-500 text-lg">
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
                    class="w-8 h-8"
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
              <h3 className="text-xl font-semibold mb-2 w-[217px]">2.000</h3>
              <h3 className="text-base text-gray-400">Total Visitors</h3>
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
                <h3>Revenue</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                  />
                </svg>
              </div>
              <div className="right">
                <h3>This Year</h3>
              </div>
            </div>
          </div>
          <div className="visitors-chart"></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
