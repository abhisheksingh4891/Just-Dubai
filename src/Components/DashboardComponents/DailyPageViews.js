import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const DailyPageViews = () => {
  const data = {
    dailyPageViews: [100, 200, 150, 400, 300, 600, 700],
  };

  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Daily Page Views",
        data: data.dailyPageViews,
        fill: false,
        backgroundColor: "rgba(50, 168, 9, 1)",
        borderColor: "rgba(50, 168, 9 ,1)",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          font: {
            family: "Raleway", // set font family here
            weight: "bold"
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: "Raleway", // set font family for x-axis labels
            weight: "bold"
          },
        },
      },
      y: {
        ticks: {
          font: {
            family: "Raleway", // set font family for y-axis labels
            weight: "bold"
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-header text-dark">
          <h5 className="card-title" style={{ fontFamily: "Raleway" }}>
            Views per Day
          </h5>
        </div>
        <div className="card-body">
          <div className="px-4 pb-2">
            <Line data={lineData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyPageViews;
