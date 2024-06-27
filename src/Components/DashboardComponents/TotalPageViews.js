import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const TotalPageViews = () => {
  const data = {
    totalPageViews: 12345,
  };

  const barData = {
    labels: ["Page Views"],
    datasets: [
      {
        label: "Total Page Views",
        data: [data.totalPageViews],
        backgroundColor: "rgba(75,192,192,2)",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          font: {
            family: "Raleway", // set font family here
            weight: "bold",
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: "Raleway", // set font family for x-axis labels
            weight: "bold",
          },
        },
      },
      y: {
        ticks: {
          font: {
            family: "Raleway", // set font family for y-axis labels
            weight: "bold",
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
            Total Page Views
          </h5>
        </div>
        <div className="card-body">
          <div className="px-4 pb-2">
            <Bar data={barData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalPageViews;
