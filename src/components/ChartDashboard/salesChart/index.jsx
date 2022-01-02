import React from 'react';
import { Line } from 'react-chartjs-2';
import OPTIONS from './options';
import data from './chartData';
import { filterUniqueMonth } from '../../../helpers';
import mock from '../../../helpers/mock';
import { useStoresContext } from '../../../context/StoresContext';

function SalesChart() {
  const { month, totalConsolidatedOrders } = useStoresContext();

  return (
    <div className='chart'>
      <Line
        options={OPTIONS}
        data={data(filterUniqueMonth(mock), {
          [month]: totalConsolidatedOrders,
        })}
      />
    </div>
  );
}

export default SalesChart;
