import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const TotalPosts = () => {
  const data = {
    totalPosts: 90,
  };

  const doughnutData = {
    labels: ['Total Posts'],
    datasets: [
      {
        label: 'Total Posts',
        data: [data.totalPosts],
        backgroundColor: ['rgba(191, 35, 19,1)'],
        hoverBackgroundColor: ['rgba(191, 35, 19,0.9)'],
      },
    ],
  };

  return (
    <div className="container" style={{ fontFamily: 'Raleway' }}>
      <div className="chart-container" style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
        <div className="text-start ms-3 mt-3">
          <h6 className='fs-6'>Total Posts</h6>
        </div>
        <hr />
        <div className="px-4 pb-2">
          <Doughnut data={doughnutData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
};

export default TotalPosts;
