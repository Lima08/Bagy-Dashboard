import React from 'react';

function StoreFilter() {
  return (
    <div className='dropdown'>
      <label for='store'>
        <select
          className='btn btn-secondary dropdown-toggle'
          name='store'
          id='store'
        >
          <option value='volvo'>Volvo</option>
          <option value='teste'>teste</option>
          <option value='Pri'>Pri loja</option>
        </select>
      </label>
    </div>
  );
}

export default StoreFilter;
