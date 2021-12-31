import React from 'react';
import MonthFilter from './MonthFilter';
import SalesChart from './salesChart';
import StoreFilter from './StoreFilter';
import YearFilter from './YearFilter';

function ChartDashboard() {
  return (
    <section className='chart-dashboard'>
        <SalesChart />

      <aside className='container-filter'>
        <StoreFilter />
        <MonthFilter />
        <YearFilter />
      </aside>
    </section>
  );
}

export default ChartDashboard;
