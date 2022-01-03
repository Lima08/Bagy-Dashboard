import React from 'react';
import Analysis from './analysis';
import MonthFilter from './MonthFilter';
import SalesChart from './salesChart';
import StoreFilter from './StoreFilter';
import Revenues from './Revenues';
import YearFilter from './YearFilter';

function ChartDashboard() {
  return (
    <section className='chart-dashboard'>
        <SalesChart />

      <aside className='filter-container'>
        <StoreFilter />
        <MonthFilter />
        <YearFilter />
        <Revenues />
        <Analysis />
      </aside>
    </section>
  );
}

export default ChartDashboard;
