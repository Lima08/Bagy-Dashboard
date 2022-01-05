import React from 'react';
import STORES from '../../assets/stores'

function AllStores() {
const allStores = Object.entries(STORES);

  return (
    <div className='panel-card'>
      <p>Total de Lojas</p>
      <h1>{allStores.length}</h1>
    </div>
  );
}

export default AllStores;
