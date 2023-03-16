import React, { useEffect, useRef, useState } from "react";
import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
function createGradient(ctx, area) {
  const gradient = ctx.createLinearGradient(0, 0, 0, area.height);
  gradient.addColorStop(0, "bisque");
  gradient.addColorStop(0.5, "seashell");
  gradient.addColorStop(1, "white");

  return gradient;
}
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 10, max: 110 })),
    },
  ],
};
const LineChartStatistics = (props) => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState(() => {
    return {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [],
    };
  });
  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) {
      return;
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        backgroundColor: createGradient(chart.ctx, chart.chartArea),
        fill: "start",
        borderColor: "rgb(245,109,50)",
        tension: "0.4",
      })),
    };
    setChartData(chartData);
  }, []);

  return (
    <Line id="myChart" ref={chartRef} options={options} data={chartData}></Line>
  );
};

export default LineChartStatistics;
