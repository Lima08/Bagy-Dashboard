// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Line } from 'react-chartjs-2';
import options from './options';
import data from './chartConfig';
// import { filterUniqueMonth } from '../../../utils/chartFiltersFunctions';
// import storesDataMock from '../../../utils/storesDataMock';
import { useStoresContext } from '../../../context/StoresContext';

function SalesChart() {
  const { month, year, valuePerDay } =
    useStoresContext();

  return (
    <div className='chart'>
      <Line
        options={options(month, year)}
        data={data(valuePerDay)}
      />
    </div>
  );
}

export default SalesChart;
