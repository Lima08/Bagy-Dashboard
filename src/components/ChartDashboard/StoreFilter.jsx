import React, { useEffect } from 'react';
import STORES from '../../assets/stores';
import { useStoresContext } from '../../context/StoresContext';

function StoreFilter() {
  const storesOptions = Object.entries(STORES);
  const { store, setSelectedStore } = useStoresContext();

  function storeOptionsMakers(store, index) {
    return (
      <option key={index} value={index}>
        {`Loja do testinho ${index + 1}`}
      </option>
    );
  }

  function changeStoreData(storeIndex) {
    setSelectedStore(storeIndex);
  }

  useEffect(() => {
    console.log('O resultado de store é ==>', store)
  }, [store])

  return (
    <label htmlFor='store' className='dropdown'>
      Lojas
      <select
        onChange={({ target }) => changeStoreData(target.value)}
        className='btn btn-light dropdown-toggle'
        name='store'
        id='store'
      >
        {storesOptions.map((store, index) => storeOptionsMakers(store, index))}
      </select>
    </label>
  );
}

export default StoreFilter;
