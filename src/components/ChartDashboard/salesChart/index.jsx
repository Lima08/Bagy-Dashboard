import React from 'react';
import { Line } from 'react-chartjs-2';
import options from './options';
import data from './chartData';
import { filterUniqueMonth } from '../../../helpers';
import mock from '../../../helpers/mock';
import { useStoresContext } from '../../../context/StoresContext';

function SalesChart() {
  const { month, year, totalConsolidatedOrders, totalSalesYear } =
    useStoresContext();

  return (
    <div className='chart'>
      {/*  Arrumar essa bagunça */}
      <Line
        options={options(month, year)}
        data={data(
          filterUniqueMonth(mock),
          {
            [month]: totalConsolidatedOrders,
          },
          totalSalesYear
        )}
      />
    </div>
  );
}

export default SalesChart;
