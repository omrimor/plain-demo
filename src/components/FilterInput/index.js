import React from 'react';

import search from './search.svg';
import './FIlterInput.css';

export const FilterInput = ({ filterValue, onKeyPressHandler }) => {
  return (
    <div className="sidebar__nav__filter">
      <img className="sidebar__nav__filter__icon" src={search} alt="search icon"/>
      <input
        className="sidebar__nav__filter__input"
        value={filterValue}
        onChange={(e) => onKeyPressHandler(e.target.value)}
        type="text"
        placeholder="search resources"
      />
    </div>
  );
};

export default FilterInput;
