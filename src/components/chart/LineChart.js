import React, { useEffect, useState } from "react";
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
import { request } from "../utils/request";
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

const LineChart = () => {
  const [dataOrder, setDataOrder] = useState([]);
  const [monthOrder, setMonthOrder] = useState([]);
  const fetchingData = async () => {
    await request
      .get("/order")
      .then((res) => {
        new Promise((resolve, reject) => {
          resolve(processData(res.data));
        })
          .then((dataOrder) => {
            setDataOrder(dataOrder);
            new Promise((resolve, reject) => {
              resolve(processLabel(dataOrder));
            }).then((data) => {
              setMonthOrder(data);
            });
          })

          .catch((err) => {
            console.log("Error in myTotalSale");
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const processData = (orders) => {
    const currentYear = new Date().getFullYear().toString();
    const result = new Array(13).fill(0);

    orders.forEach((item) => {
      if (item.createdAt.slice(0, 4) === currentYear) {
        const month = item.createdAt.slice(6, 7);
        result[parseInt(month)] += item.paymentIntent.amount;
      }
    });
    return result;
  };
  const processLabel = (month) => {
    const label = [
      "",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let lastLabel = label.filter((element, index) => {
      if (month[index] !== 0) {
        return element;
      }
    });
    lastLabel.unshift("");
    return lastLabel;
  };

  const data = {
    labels: monthOrder,
    datasets: [
      {
        data: dataOrder,
        borderColor: "rgb(171,169,211)",
        fill: "false",
        tension: 0.4,
        backgroundColor: "rgb(238,238,255)",
      },
    ],
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return <Line options={options} data={data}></Line>;
};

export default LineChart;
