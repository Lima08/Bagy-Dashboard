import React from 'react';
import ChartDashboard from '../../components/ChartDashboard';
import Panel from '../../components/Panel';

function Dashboard() {
  return (
    <main className='dashboard'>
      <div className='header'>
        <h1>Header</h1>
      </div>
      
      <Panel />
      <ChartDashboard />

      <div className='section'>
        <h1>section</h1>
      </div>
    </main>
  );
}

export default Dashboard;
