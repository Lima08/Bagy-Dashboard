// eslint-disable-next-line no-unused-vars
import React from 'react';
import ChartDashboard from '../components/ChartDashboard';
import Panel from '../components/Panel';
import FooterBoard from '../components/FooterBoard';
import StoresContextProvider from '../context/StoresContext';
import '../style/dashboard.css'

function Dashboard() {
  return (
    <StoresContextProvider>
      <section className='dashboard'>
        <Panel />
        <ChartDashboard />
        <FooterBoard />
      </section>
    </StoresContextProvider>
  );
}

export default Dashboard;
