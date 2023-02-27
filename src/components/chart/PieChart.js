import React from "react";
import { Doughnut } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="chart-container w-full h-full">
      <Doughnut data={chartData} />
    </div>
  );
}
export default PieChart;
