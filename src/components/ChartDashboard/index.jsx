import React from 'react';
// import { useStoresContext } from '../../context/StoresContext';
import StoreFilter from './StoreFilter'
// import query from '../../graphql';
// import { useQuery } from '@apollo/client';

function ChartDashboard() {
  // const { store, setSelectdStore } = useStoresContext


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
