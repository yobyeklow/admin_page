import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Computers", "Tablet", "Mobile"],
  datasets: [
    {
      label: "Percentage chart",
      data: [70, 10, 20],
      backgroundColor: ["rgb(64,73,255)", "rgb(255,191,64)", "rgb(51,221,255)"],
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "right",
      align: "center",
    },
  },
};
export const plugins = [
  {
    beforeDraw: function (chart) {
      var width = chart.width,
        height = chart.height,
        ctx = chart.ctx;
      ctx.restore();
      var fontSize = (height / 160).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "top";
      var text = "100%",
        textX = Math.round((width - ctx.measureText(text).width - 120) / 2),
        textY = height / 2 - 8;
      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  },
];
const DoughnutChart = () => {
  return <Doughnut options={options} data={data} plugins={plugins}></Doughnut>;
};

export default DoughnutChart;
