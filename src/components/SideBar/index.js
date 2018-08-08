import React from 'react';
import './Sidebar.css';
// import cx from 'classnames';
// import active from './active.svg';
// import arrow from './arrow-right.svg';

import FilterInput from 'components/FilterInput';
import MenuItem from 'components/MenuItem';

export const SideBar = ({ data, onClickItemHandler, selectedResourceId, filterValue, onKeyPressHandler }) => {
  return (
    <div className="sidebar">
      <FilterInput
        filterValue={filterValue}
        onKeyPressHandler={onKeyPressHandler}
      />
      <ul className="sidebar__nav">
        {
          data.map((item, inx) =>
            <MenuItem
              item={item}
              inx={inx}
              onClickItemHandler={onClickItemHandler}
              selectedResourceId={selectedResourceId}
            />
          )
        }
      </ul>
    </div>
  );
};

export default SideBar;

