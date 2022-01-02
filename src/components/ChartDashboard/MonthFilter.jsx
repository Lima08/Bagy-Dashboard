import React from 'react';
import { useStoresContext } from '../../context/StoresContext';

function MonthFilter() {
  const MONTHS = {
    janeiro: '01',
    fevereiro: '02',
    março: '03',
    abril: '04',
    maio: '05',
    junho: '06',
    julho: '07',
    agosto: '08',
    setembro: '09',
    outubro: '10',
    novembro: '11',
    dezembro: '12',
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
