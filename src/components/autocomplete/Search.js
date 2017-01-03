import React from 'react';

const Search = (props) => {
  return (
    <input type="search" className="search-input"
      placeholder={props.randomOffice}
      value={props.query}
      onChange={props.search}
      onFocus={props.changeFocus}
      onBlur={props.changeFocus}
    />
  );
}

export default Search;
