import React, { useContext, useEffect, useState } from 'react';
// import { getStoresInfos } from '../graphql/index';
import getConsolidatedOrders from '../helpers/mock';
import {
  filterAndDefineTotalOrder,
  filterConsolidatedOrdersByYear,
  filterUniqueMonth,
} from '../helpers/index';

const MyContext = React.createContext();

export default function StoresContextProvider({ children }) {
  const [selectedStore, setSelectedStore] = useState(0);
  const [storeData, setStoreData] = useState([]);
  const [month, setMonth] = useState('01');
  const [year, setYear] = useState('2020');
  const [totalConsolidatedOrders, setTotalConsolidatedOrders] = useState(0);
  const [totalSalesYear, setTotalSalesYear] = useState({});

  useEffect(() => {
    const storeInfos = async () => {
      setStoreData(getConsolidatedOrders);
    };
    storeInfos();
  }, [selectedStore]);

  useEffect(() => {
    const totalOrder = filterAndDefineTotalOrder(storeData, month, year);
    setTotalConsolidatedOrders(totalOrder);
  }, [storeData, month, year]);

  useEffect(() => {
    const totalYearOrder = filterConsolidatedOrdersByYear(storeData, year);
    const allMonthOrder = filterUniqueMonth(totalYearOrder);

    const totalSales = allMonthOrder.reduce(
      (totalSales, salesMonth) =>
        (totalSales = Object.assign(totalSales, {
          [salesMonth]: filterAndDefineTotalOrder(
            totalYearOrder,
            salesMonth,
            year
          ),
        })),
      {}
    );

    console.log('iausdhfioashdfuoahsdf', totalSales);
    setTotalSalesYear(totalSales);
  }, [storeData, month, year]);

  const contextValue = {
    storeData,
    setSelectedStore,
    month,
    setMonth,
    year,
    setYear,
    totalConsolidatedOrders,
    totalSalesYear,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}

export function useStoresContext() {
  return useContext(MyContext);
}
