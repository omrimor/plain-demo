import React from 'react';
import cx from 'classnames';
import active from './active.svg';
import arrow from './arrow-right.svg';
import './MenuItem.css';

export const MenuItem = ({ item, inx, selectedResourceId, onClickItemHandler }) => {
  return (
    <li
      className={cx('sidebar__nav-item', { 'selected-item': item.id === selectedResourceId})}
      key={inx}
      onClick={ () => onClickItemHandler(item)}
    >
      <img
        src={active}
        alt={`active item is ${item.name}`} />
      <span>
        {item.name}
      </span>
      {selectedResourceId === item.id &&
      <img
        src={arrow}
        alt="arrow"
      />}
    </li>
  );
};

export default MenuItem;
