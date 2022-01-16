// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useStoresContext } from '../../context/StoresContext';
import { YEARS } from '../../utils/dateMock';

function YearFilter() {
  const { year, setYear } = useStoresContext();

  function yearOptionsMakers(yearOption, index) {
    return (
      <option key={index} value={yearOption}>
        {yearOption}
      </option>
    );
  }

  function changeYearData(yearSelected) {
    setYear(yearSelected);
  }

  return (
    <div className='filter'>
      <p>Ano</p>

      <label htmlFor='year' className=''>
        <select
          onChange={({ target }) => changeYearData(target.value)}
          className='filter-options'
          name='year'
          id='year'
          value={year}
        >
          {YEARS.map((yearOption, index) =>
            yearOptionsMakers(yearOption, index)
          )}
        </select>
      </label>
    </div>
  );
}

export default YearFilter;
