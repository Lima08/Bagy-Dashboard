import React, { useContext, useEffect, useState } from 'react';
// import { getStoresInfos } from '../graphql/index';
import mockGetConsolidatedOrders from '../helpers/mock';
// import STORES from '../assets/stores';
import {
  filterAndDefineTotalOrder,
  filterConsolidatedOrdersByYear,
  filterUniqueMonth,
} from '../helpers/index';

const MyContext = React.createContext();

export default function StoresContextProvider({ children }) {
  const [selectedStore, setSelectedStore] = useState(0);
  const [storeData, setStoreData] = useState([]);
  const [month, setMonth] = useState('01'); // Colocar posteriormente o mes atual como padãro
  const [year, setYear] = useState('2020'); // Colocar posteriormente o ano atual como padrão
  const [totalConsolidatedOrders, setTotalConsolidatedOrders] = useState(0);
  const [totalSalesYear, setTotalSalesYear] = useState({});

  useEffect(() => {
    const storeInfos = async () => {
      setStoreData(mockGetConsolidatedOrders);
      // getStoresInfos() --> Usar essa função apra conexão com o banco passando a store escolhida
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
