import React from 'react';
import { useStoresContext } from '../../context/StoresContext';

function TotalInvoice() {
  const { totalConsolidatedOrders } = useStoresContext();

  // if (!totalConsolidatedOrders) (<p>Loading...</p>)
  return (
    <div>
      <p>Total faturamento</p>
      <h1>{totalConsolidatedOrders}</h1>
    </div>
  );
}

export default TotalInvoice;
