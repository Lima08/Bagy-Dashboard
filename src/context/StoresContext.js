import React, { useContext, useEffect, useState } from 'react';
import mockGetConsolidatedOrders from '../utils/storesDataMock';
import { DAYS } from '../utils/dateMock'
import { chartValuesMaker } from '../utils/chartOrdersFunctions';
import PropTypes from 'prop-types';
import {
  filterAndDefineTotalOrder,
  filterConsolidatedOrdersByYear,
  filterUniqueMonth,
} from '../utils/chartFiltersFunctions';

const MyContext = React.createContext();

export default function StoresContextProvider({ children }) {
  const [headerPage, setHeaderPage] = useState('Visão Geral');
  const [valuePerDay, setValuePerDay] = useState([]);
  const [month, setMonth] = useState('01');
  const [year, setYear] = useState('2021');
  const [totalConsolidatedOrders, setTotalConsolidatedOrders] = useState(0);
  const [totalSalesYear, setTotalSalesYear] = useState({});

  useEffect(() => {
    const totalOrder = filterAndDefineTotalOrder(mockGetConsolidatedOrders, month, year);
    setTotalConsolidatedOrders(totalOrder);
    const chartValues = chartValuesMaker(DAYS, mockGetConsolidatedOrders, year, month);
    setValuePerDay(chartValues)

  }, [ month, year]);

  useEffect(() => {
    const totalYearOrder = filterConsolidatedOrdersByYear(mockGetConsolidatedOrders, year);
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
  }, [ month, year]);

  const contextValue = {
    valuePerDay,
    month,
    setMonth,
    year,
    setYear,
    totalConsolidatedOrders,
    totalSalesYear,
    headerPage,
    setHeaderPage,
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
