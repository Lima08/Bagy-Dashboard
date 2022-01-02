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
    </main>
  );
}

export default Dashboard;
