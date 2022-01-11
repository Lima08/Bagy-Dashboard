// eslint-disable-next-line no-unused-vars
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
    <div className='filter'>
      <p>Mês</p>

      <label htmlFor='month' className=''>
        <select
          onChange={({ target }) => changeMonthData(target.value)}
          className=' filter-options'
          name='month'
          id='month'
        >
          {Object.keys(MONTHS).map((month, index) =>
            monthOptionsMakers(month, index)
          )}
        </select>
      </label>
    </div>
  );
}

export default MonthFilter;
