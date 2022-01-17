// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useStoresContext } from '../../context/StoresContext';

function StoreFilter() {
  const { setSelectedStore } = useStoresContext();

  function changeStoreData(storeIndex) {
    setSelectedStore(storeIndex);
  }

  return (
    <div className='filter'>
      <p>Lojas</p>
      <label htmlFor='store' className=''>
        <select
          onChange={({ target }) => changeStoreData(target.value)}
          className=' filter-options'
          name='store'
          id='store'
        >
          <option className='filter'>Loja 1</option>
        </select>
      </label>
    </div>
  );
}

export default StoreFilter;
