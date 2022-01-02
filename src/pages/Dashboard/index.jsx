import React from 'react';
import ChartDashboard from '../../components/ChartDashboard';
import Header from '../../components/Header';
import Panel from '../../components/Panel';

function Dashboard() {
  return (
    <main className='dashboard'>
      <Header />
      <Panel />
      <ChartDashboard />

      <div className='section'>
        <h1>section</h1>
      </div>
    </main>
  );
}

export default Dashboard;
