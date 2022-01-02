import React from 'react';
import Analysis from './analysis';
import MonthFilter from './MonthFilter';
import SalesChart from './salesChart';
import StoreFilter from './StoreFilter';
import TotalInvoice from './TotalInvoice';
import YearFilter from './YearFilter';

function ChartDashboard() {
  return (
    <section className='chart-dashboard'>
        <SalesChart />

      <aside className='filter-container'>
        <StoreFilter />
        <MonthFilter />
        <YearFilter />
        <TotalInvoice />
        <Analysis />
      </aside>
    </section>
  );
}

export default ChartDashboard;
