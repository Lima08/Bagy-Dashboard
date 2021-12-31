import React from 'react';
import { useStoresContext } from '../../context/StoresContext';
// import { useStoresContext } from '../../context/StoresContext';

function YearFilter() {
  const YEARS = [
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
  ];

  const { setYear, year } = useStoresContext();

  function yearOptionsMakers(year, index) {
    return (
      <option key={index} value={year}>
        {year}
      </option>
    );
  }

  function changeYearData(yearSelected) {
    console.log(year)
    setYear(yearSelected);
  }

  return (
    <label htmlFor='year' className='dropdown'>
      Ano
      <select
        onChange={({ target }) => changeYearData(target.value)}
        className='btn btn-light dropdown-toggle'
        name='year'
        id='year'
      >
        {YEARS.map((year, index) => yearOptionsMakers(year, index))}
      </select>
    </label>
  );
}

export default YearFilter;
