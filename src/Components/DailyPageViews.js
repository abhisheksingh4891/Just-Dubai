// src/DailyPageViews.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const DailyPageViews = () => {
  const data = {
    dailyPageViews: [100, 200, 150, 400, 300, 600, 700],
  };

  const lineData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Daily Page Views',
        data: data.dailyPageViews,
        fill: false,
        backgroundColor: 'rgba(50, 168, 9, 1)',
        borderColor: 'rgba(50, 168, 9 ,1)',
      },
    ],
  };

  return (
    <div className="container" style={{ fontFamily: 'Raleway' }}>
      <div className="chart-container" style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
        <div className="text-start ms-3 mt-3">
          <h6 className='fs-6'>Views Per Day</h6>
        </div>
        <hr />
        <div className="px-4 pb-2" >
        <Line data={lineData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
};

export default DailyPageViews;


