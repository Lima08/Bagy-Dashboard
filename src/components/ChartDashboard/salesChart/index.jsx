// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Line } from 'react-chartjs-2';
import options from './options';
import data from './chartData';
import { filterUniqueMonth } from '../../../utils';
import mock from '../../../utils/mock';
import { useStoresContext } from '../../../context/StoresContext';

function SalesChart() {
  const { month, year, totalConsolidatedOrders, totalSalesYear } =
    useStoresContext();

  return (
    <div className='chart'>
      <Line
        options={options(month, year)}
        data={data(
          filterUniqueMonth(mock),
          { [month]: totalConsolidatedOrders },
          totalSalesYear
        )}
      />
    </div>
  );
}

export default SalesChart;
