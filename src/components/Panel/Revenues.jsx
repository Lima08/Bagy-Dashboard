import React from 'react';
import { useStoresContext } from '../../context/StoresContext';

function Revenues() {
  const { totalSalesYear } = useStoresContext();

  const totalRevenues = Object.values(totalSalesYear).reduce(
    (acc, cur) => acc + cur,
    0
  );

  return (
    <div className='panel-card'>
      <p>Faturamento total</p>
      <h1>{`R$ ${totalRevenues.toFixed(2)}`}</h1>
    </div>
  );
}

export default Revenues;
