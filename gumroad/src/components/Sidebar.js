import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Add sidebar items here */}
      <div className="sidebar-item">Home</div>
      <div className="sidebar-item">Products</div>
      <div className="sidebar-item">Checkout</div>
      {/* ... other items */}
    </aside>
  );
};

export default Sidebar;
