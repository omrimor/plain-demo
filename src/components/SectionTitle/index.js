import React from 'react';
import help from './help-12.svg';
import './SectionTitle.css';

export const SectionTitle = ({ title }) => {
  return (
    <div className="section-title">
      <span>{title}</span>
      <img src={help} alt="press for help" />
    </div>
  );
};

export default SectionTitle;
