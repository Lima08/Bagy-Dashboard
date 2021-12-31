import React, { useEffect } from 'react';
import { useStoresContext } from '../../context/StoresContext';
// import { useStoresContext } from '../../context/StoresContext';

function MonthFilter() {
  const MONTHS = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ];
  const { setMonth } = useStoresContext()

  function monthOptionsMakers(month, index) {
    return (
      <option key={index} value={month}>
        {month}
      </option>
    );
  }

  function changeMonthData(month) {
    setMonth(month);
  }

  // useEffect(() => {
  //   console.log('O resultado de store é ==>', store);
  // }, [store]);

  return (
    <label htmlFor='month' className='dropdown'>
      Mês
      <select
        onChange={({ target }) => changeMonthData(target.value)}
        className='btn btn-light dropdown-toggle'
        name='month'
        id='month'
      >
        {MONTHS.map((month, index) => monthOptionsMakers(month, index))}
      </select>
    </label>
  );
}

export default MonthFilter;
