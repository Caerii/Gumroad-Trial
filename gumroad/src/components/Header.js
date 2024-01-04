// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={`${process.env.PUBLIC_URL}/gumroad_logo.png`} alt="Gumroad Logo" />
      {/* rest of your header content */}
    </header>
  );
};

export default Header;
