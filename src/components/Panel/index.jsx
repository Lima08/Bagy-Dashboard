import React from 'react';
import AllStores from './AllStores';

function Panel() {
  return (
    <div className='panel'>
      <AllStores />

      <div className='panel-card'>
        <p>Faturamento total</p>
        <h1>100.000,00</h1>
      </div>

      <div className='panel-card'>
        <p>Loja destaque</p>
        <h1>Estilo Pri</h1>
      </div>

      <div className='panel-card'>
        <p>Meta Mensal</p>
        <h1>110.000,00</h1>
      </div>
    </div>
  );
}

export default Panel;
