import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      align: "end",
    },
    title: {
      display: true,
      position: "end",
    },
  },
};

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const data = {
  labels,
  datasets: [
    {
      label: "Active Visitors",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgb(91,77,166)",
      borderRadius: 20,
      borderWidth: 5,
      borderColor: "white",
    },
    {
      label: "Bounce Visitors",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgb(210,111,66)",
      borderRadius: 20,
      borderWidth: 5,
      borderColor: "white",
    },
  ],
};
const VerticalBarChart = () => {
  return <Bar className="w-full h-full" options={options} data={data} />;
};

export default VerticalBarChart;
