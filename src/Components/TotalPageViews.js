import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const TotalPageViews = () => {
  const data = {
    totalPageViews: 12345,
  };

  const barData = {
    labels: ['Page Views'],
    datasets: [
      {
        label: 'Total Page Views',
        data: [data.totalPageViews],
        backgroundColor: 'rgba(75,192,192,2)',
      },
    ],
  };

  return (
    <div className="container" style={{ fontFamily: 'Raleway' }}>
      <div className="chart-container" style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
        <div className="text-start ms-3 mt-3">
          <h6 className='fs-6'>Total Page Views</h6>
        </div>
        <hr />
        <div className="px-4 pb-2">
          <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
};

export default TotalPageViews;
