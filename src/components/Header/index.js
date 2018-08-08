import React from 'react';
import logo from './plainid-logo-white.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} className="header__image" alt="plain id"/>
      <span>PlainID - Demo App</span>
    </div>
  );
};

export default Header;
