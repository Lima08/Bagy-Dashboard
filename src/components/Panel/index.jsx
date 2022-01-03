import React from 'react';
import AllStores from './AllStores';
import BestStore from './BestStore';
import MonthlyGoal from './MonthlyGoal';
import Revenues from './Revenues';

function Panel() {
  return (
    <div className='panel'>
      <AllStores />
      <Revenues />
      <BestStore />
      <MonthlyGoal />
    </div>
  );
}

export default Panel;
