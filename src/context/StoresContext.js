import React, { useContext, useEffect, useState } from 'react';
// import { getStoresInfos } from '../graphql/index';
import getConsolidatedOrders from '../helpers/mock';
import filterAndDefineTotalOrder from '../helpers/index';

const MyContext = React.createContext();

export default function StoresContextProvider({ children }) {
  const [selectedStore, setSelectedStore] = useState(0);
  const [storeData, setStoreData] = useState([]);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState('2020');
  const [totalConsolidatedOrders, setTotalConsolidatedOrders] = useState(0);

  useEffect(() => {
    const storeInfos = async () => {
      // const store = await getStoresInfos(selectedStore);
      // setStoreData(store.data.getConsolidatedOrders);
      setStoreData(getConsolidatedOrders);
    };
    storeInfos();
  }, [selectedStore]);

  useEffect(() => {
    const totalOrder = filterAndDefineTotalOrder(storeData, month, year);
    setTotalConsolidatedOrders(totalOrder);
    console.log(totalOrder);
  }, [storeData, month, year]);

  const contextValue = {
    storeData,
    setSelectedStore,
    month,
    setMonth,
    year,
    setYear,
    totalConsolidatedOrders,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}

export function useStoresContext() {
  return useContext(MyContext);
}
