// Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <a href="/" className="logo-link">
                <img src={`${process.env.PUBLIC_URL}/invert.png`} alt="Gumroad Logo" className="sidebar-logo"/>
        </a>
      <a href="#home" className="sidebar-item">Home</a>
      <a href="#products" className="sidebar-item">Products</a>
      <a href="#checkout" className="sidebar-item">Checkout</a>
      <a href="#emails" className="sidebar-item">Emails</a>
      {/* workflows, sales, analytics, blank, payouts, discover, library, blank, start selling, help, settings, user profile */}
      <a href="#workflows" className="sidebar-item">Workflows</a>
        <a href="#sales" className="sidebar-item">Sales</a>
        <a href="#analytics" className="sidebar-item">Analytics</a>
        <a href="#home" className="sidebar-item">Blank</a>
        <a href="#payouts" className="sidebar-item">Payouts</a>
        <a href="#discover" className="sidebar-item">Discover</a>
        <a href="#library" className="sidebar-item">Library</a>
        <a href="#home" className="sidebar-item">Blank</a>
        <a href="#start-selling" className="sidebar-item">Start Selling</a>
        <a href="#help" className="sidebar-item">Help</a>
        <a href="#settings" className="sidebar-item">Settings</a>
        <a href="#user-profile" className="sidebar-item">User Profile</a>
      {/* Repeat for other items as per your mockup */}
    </aside>
  );
};

export default Sidebar;
