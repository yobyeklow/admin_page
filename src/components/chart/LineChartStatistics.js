import React, { useEffect, useRef, useState } from "react";
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

function createGradient(ctx, area) {
  const gradient = ctx.createLinearGradient(0, 0, 0, area.height);
  gradient.addColorStop(0, "bisque");
  gradient.addColorStop(0.5, "seashell");
  gradient.addColorStop(1, "white");

  return gradient;
}

const LineChartStatistics = (props) => {
  const labelss = [
    "",
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
  const handleData = (sale, expenses) => {
    const arr = Array(13).fill(0);
    if (sale?.length > 0 && expenses?.length > 0) {
      arr.forEach((item, index) => {
        arr[index] = sale[index] - expenses[index];
      });
    }
    return arr;
  };
  const handleLabels = (sale) => {
    const labels = [
      "",
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
    var arr = [];
    if (sale?.length > 0) {
      arr = labels.filter((item, index) => {
        if (sale[index] !== 0) {
          return item;
        }
      });
    }
    arr.unshift("");
    return arr;
  };

  const data = {
    labels: handleLabels(props.sale),
    datasets: [
      {
        label: "Revenue",
        data: handleData(props.sale, props.expenses),
      },
    ],
  };

  const chartRef = useRef(null);
  const [chartData, setChartData] = useState(() => {
    return {
      labels: [],
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
    <div className="">
      <Line
        style={{ height: "360px" }}
        ref={chartRef}
        options={options}
        data={chartData}
      ></Line>
    </div>
  );
};

export default LineChartStatistics;
