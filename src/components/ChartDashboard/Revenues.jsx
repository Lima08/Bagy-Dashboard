// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useStoresContext } from '../../context/StoresContext';

function TotalInvoice() {
  const { totalConsolidatedOrders } = useStoresContext();

  if (!totalConsolidatedOrders) return <p>Loading...</p>;

  return (
    <div className='filter'>
      <p>Total faturamento</p>
      <h1>{totalConsolidatedOrders}</h1>
    </div>
  );
}

export default TotalInvoice;
