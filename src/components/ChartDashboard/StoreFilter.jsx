import React from 'react';
import STORES from '../../assets/stores';
import { useStoresContext } from '../../context/StoresContext';

function StoreFilter() {
  const storesOptions = Object.entries(STORES);
  const { setSelectedStore } = useStoresContext();

  function storeOptionsMakers(store, index) {
    return (
      <option key={index} value={index} className="filter">
        {`Loja testinho ${index + 1}`}
      </option>
    );
  }

  function changeStoreData(storeIndex) {
    setSelectedStore(storeIndex);
  }

  return (
    <div className="filter">
      <p>Lojas</p>
      <label htmlFor='store' className=''>
        <select
          onChange={({ target }) => changeStoreData(target.value)}
          className=' filter-options'
          name='store'
          id='store'
        >
          {storesOptions.map((store, index) => storeOptionsMakers(store, index))}
        </select>
      </label>
    </div>
  );
}

export default StoreFilter;
