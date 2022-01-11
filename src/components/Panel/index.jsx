// eslint-disable-next-line no-unused-vars
import React from 'react';
import AllStores from './AllStores';
import BestStore from './BestStore';
import MonthlyGoal from './MonthlyGoal';
import Revenues from './Revenues';
import './panel.css' 

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
