import React from 'react';
import './FloatingAssistant.css';

const FloatingAssistant = () => {
  // This can be expanded to include state and interaction logic as needed
  return (
    <div className="floating-assistant">
      <div className="assistant-dialogue">
        We're here to help you get paid for your work.
      </div>
      <div className="assistant-circle">
        {/* You can add an image or an icon here */}
      </div>
      <button className="assistant-button">Create your first product</button>
    </div>
  );
};

export default FloatingAssistant;
