import React from 'react';
import MonthFilter from './MonthFilter';
import StoreFilter from './StoreFilter';
import YearFilter from './YearFilter';

function ChartDashboard() {
  return (
    <section className='chart-dashboard'>
      <div className='chart'>
        <h1> Chart</h1>
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
