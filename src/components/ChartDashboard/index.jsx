import React from 'react';
import StoreFilter from './StoreFilter'
// import query from '../../graphql';
// import { useQuery } from '@apollo/client';

function ChartDashboard() {
  // const { loading, error, data } = useQuery(query.queryTest3);

  return (
    <section className='chart-dashboard'>
      <div className='chart'>
        <h1> Chart</h1>
      </div>

      <aside className='filters'>
       <StoreFilter />
      </aside>
    </section>
  );
}

export default ChartDashboard;
