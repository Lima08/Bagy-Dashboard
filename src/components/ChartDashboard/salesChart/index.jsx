import React from 'react';
import { Line } from 'react-chartjs-2';
import OPTIONS from './options';
import DATA from './chartData';

function SalesChart() {
  return (
    <div className='chart'>
      <Line options={OPTIONS} data={DATA} />
    </div>
  );
}

export default SalesChart;
