// MainContent.js
import React from 'react';
import './MainContent.css';
import WelcomeBanner from './WelcomeBanner';

const MainContent = () => {
  return (
    <div className="main-content">
      {/* Add your main dashboard content here */}
      <WelcomeBanner  />
      
      <h1>Welcome to Gumroooooaaaad.</h1>
      {/* Add other components like analytics insights, product lists, etc */}
    </div>
  );
};

export default MainContent;
