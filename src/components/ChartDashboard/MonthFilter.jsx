// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useStoresContext } from '../../context/StoresContext';
import { MONTHS } from '../../utils/dateMock';

function MonthFilter() {
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
