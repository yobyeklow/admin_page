import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      data: [100, 120, 220, 300, 250, 400, 500, 300, 600],
      borderColor: "rgb(171,169,211)",
      fill: "false",
      tension: 0.4,
      backgroundColor: "rgb(238,238,255)",
      fill: true,
    },
  ],
};

const LineChart = () => {
  return <Line options={options} data={data}></Line>;
};

export default LineChart;
