import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const Subscribers = () => {
  const data = {
    newsletterSubscribers: 678,
    totalPosts: 90,
  };

  const doughnutData = {
    labels: ["Newsletter Subscribers", "Total Posts"],
    datasets: [
      {
        data: [data.newsletterSubscribers, data.totalPosts],
        backgroundColor: ["rgba(255,99,132,1)", "rgba(54,162,235,1)"],
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
            Subscribers
          </h5>
        </div>
        <div className="card-body">
          <div className="px-4 pb-2" style={{ height: "200px" }}>
            <Doughnut
              data={doughnutData}
              options={options}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribers;
