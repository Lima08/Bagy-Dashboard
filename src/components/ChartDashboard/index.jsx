import React from 'react';
import MonthFilter from './MonthFilter';
import SalesChart from './SalesChart';
import StoreFilter from './StoreFilter';
import YearFilter from './YearFilter';

function ChartDashboard() {
  return (
    <section className='chart-dashboard'>
      <div className='chart'>
        <SalesChart />
      </div>

      <aside className='filters'>
        <StoreFilter />
        <MonthFilter />
        <YearFilter />
      </aside>
    </section>
  );
}

export default ChartDashboard;
