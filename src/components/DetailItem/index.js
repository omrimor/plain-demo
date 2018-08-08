import React from 'react';
import './DetailItem.css';

export const DetailItem = ({ label, value }) => {
  return ([
    <span
      key={label}
      className="detail-item__label">
      {label}
    </span>,
    <div
      key={value}
      className="detail-item__field">
      {value}
    </div>
  ]);
};

export default DetailItem;
