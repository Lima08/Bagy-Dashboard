import React from 'react';
import { useStoresContext } from '../../context/StoresContext';

function MonthFilter() {
  const MONTHS = {
    janeiro: 1,
    fevereiro: 2,
    março: 3,
    abril: 4,
    maio: 5,
    junho: 6,
    julho: 7,
    agosto: 8,
    setembro: 9,
    outubro: 10,
    novembro: 11,
    dezembro: 12,
  };

  const { setMonth } = useStoresContext();

  function monthOptionsMakers(month, index) {
    return (
      <option key={index} value={month}>
        {month}
      </option>
    );
  }

  function changeMonthData(monthSelected) {
    setMonth(MONTHS[monthSelected]);
  }

  return (
    <label htmlFor='month' className='dropdown filter'>
      Mês
      <select
        onChange={({ target }) => changeMonthData(target.value)}
        className='btn btn-light dropdown-toggle'
        name='month'
        id='month'
      >
        {Object.keys(MONTHS).map((month, index) => monthOptionsMakers(month, index))}
      </select>
    </label>
  );
}

export default MonthFilter;
