import React from 'react';
import { useStoresContext } from '../../context/StoresContext';

function YearFilter() {
  const YEARS = [
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
  ];

  const { year, setYear } = useStoresContext();

  function yearOptionsMakers(yearOption, index) {
    return (
      <option key={index} value={yearOption}>
        {yearOption}
      </option>
    );
  }

  function changeYearData(yearSelected) {
    console.log('o ano', yearSelected);
    setYear(yearSelected);
  }

  return (
    <label htmlFor='year' className='dropdown filter'>
      Ano
      <select
        onChange={({ target }) => changeYearData(target.value)}
        className='btn btn-light dropdown-toggle'
        name='year'
        id='year'
        value={year}
      >
        {YEARS.map((yearOption, index) => yearOptionsMakers(yearOption, index))}
      </select>
    </label>
  );
}

export default YearFilter;
