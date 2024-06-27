import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const TotalPosts = () => {
  const data = {
    totalPosts: 90,
  };

  const doughnutData = {
    labels: ["Total Posts"],
    datasets: [
      {
        label: "Total Posts",
        data: [data.totalPosts],
        backgroundColor: ["rgba(211, 84, 0,1)"],
        hoverBackgroundColor: ["rgba(191, 35, 19,0.9)"],
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
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-header text-dark">
          <h5 className="card-title" style={{ fontFamily: "Raleway" }}>
            Total Posts
          </h5>
        </div>
        <div className="card-body">
          <div className="px-4 pb-2">
            <Doughnut
              data={doughnutData}
              options={options}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalPosts;
