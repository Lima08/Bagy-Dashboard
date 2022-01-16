// eslint-disable-next-line no-unused-vars
import React from 'react';
import ChartDashboard from '../components/ChartDashboard';
import Panel from '../components/Panel';
import FooterBoard from '../components/FooterBoard';
import '../style/dashboard.css';

function Dashboard() {
  return (
    <section className='dashboard'>
      <Panel />
      <ChartDashboard />
      <FooterBoard />
    </section>
  );
}

export default Dashboard;
