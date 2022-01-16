import React, { useContext, useEffect, useState } from 'react';
// import { getStoresInfos } from '../graphql/index';
import mockGetConsolidatedOrders from '../utils/mock';
// import STORES from '../assets/stores';
import PropTypes from 'prop-types';
import {
  filterAndDefineTotalOrder,
  filterConsolidatedOrdersByYear,
  filterUniqueMonth,
} from '../utils/index';

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
      setStoreData(mockGetConsolidatedOrders);
      // const store = Object.entries(STORES)[1];
      // console.log(store)
      // const storeInfos = await getStoresInfos(store);
      // console.log(storeInfos)
      // setStoreData(storeInfos)
    };
    storeInfos()
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
StoresContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};