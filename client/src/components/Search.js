import React from 'react';

const Search = props => {
  return (
    <div className='pull-right'>
      <input
        type='text'
        placeholder='Search...'
        onChange={props.handleSearch}
        className='form-control input-sm' />
    </div>
  );
};

export default Search;
