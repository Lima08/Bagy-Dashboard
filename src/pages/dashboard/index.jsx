import React from 'react';
import ChartDashboard from '../../components/ChartDashboard';

function Dashboard() {
  return (
    <main className='dashboard'>
      <div className='header'>
        <h1>Header</h1>
      </div>
      <div className='panel'>
        <h1>Panel</h1>
      </div>

      <ChartDashboard />
      <div className='section'>
        <h1>section</h1>
      </div>
    </main>
  );
}

export default Dashboard;
