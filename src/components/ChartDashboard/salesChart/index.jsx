import React from 'react';
import { Line, Chart} from 'react-chartjs-2';
import OPTIONS from './options';
import DATA from './chartData';

function SalesChart() {
  Chart.defaults.font.size = 6;
  return (
    <div className='chart'>
      <Line options={OPTIONS} data={DATA} />
    </div>
  );
}

export default SalesChart;
