import React from 'react';
import MonthFilter from './MonthFilter';
import SalesChart from './salesChart';
import StoreFilter from './StoreFilter';
import TotalInvoice from './TotalInvoice';
import YearFilter from './YearFilter';

function ChartDashboard() {
  return (
    <section className='chart-dashboard'>
        <SalesChart />

      <aside className='container-filter'>
        <StoreFilter />
        <MonthFilter />
        <YearFilter />
        <TotalInvoice />
      </aside>
    </section>
  );
}

export default ChartDashboard;
