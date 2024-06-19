import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const Subscribers = () => {
  const data = {
    newsletterSubscribers: 678,
    totalPosts: 90,
  };

  const doughnutData = {
    labels: ['Newsletter Subscribers', 'Total Posts'],
    datasets: [
      {
        data: [data.newsletterSubscribers, data.totalPosts],
        backgroundColor: ['rgba(255,99,132,1)', 'rgba(54,162,235,1)'],
      },
    ],
  };

  return (
    <div className="container" style={{ fontFamily: 'Raleway' }}>
      <div className="chart-container" style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
        <div className="text-start ms-3 mt-3">
          <h6 className='fs-6'>Subscribers</h6>
        </div>
        <hr />
        <div className="px-4 pb-2" style={{ height: '200px' }}>
          <Doughnut data={doughnutData} options={{ responsive: true, maintainAspectRatio: false }} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Subscribers;
