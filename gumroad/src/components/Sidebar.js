// Sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faBoxOpen, faCashRegister, faEnvelope, faCog,
  faChartLine, faDollarSign, faSearch, faBook, faPlusSquare,
  faQuestionCircle, faUser
} from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo-container">
        <img src={`${process.env.PUBLIC_URL}/invert.png`} alt="Gumroad Logo" className="sidebar-logo"/>
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-separator"></div>

        <a href="#home" className="sidebar-item"><FontAwesomeIcon icon={faHome} /> Home</a>
        <div className="sidebar-separator"></div>
        <a href="#products" className="sidebar-item"><FontAwesomeIcon icon={faBoxOpen} /> Products</a>
        <div className="sidebar-separator"></div>
        <a href="#checkout" className="sidebar-item"><FontAwesomeIcon icon={faCashRegister} /> Checkout</a>
        <div className="sidebar-separator"></div>
        <a href="#emails" className="sidebar-item"><FontAwesomeIcon icon={faEnvelope} /> Emails</a>
        <div className="sidebar-separator"></div>
        <a href="#workflows" className="sidebar-item"><FontAwesomeIcon icon={faCog} /> Workflows</a>
        <div className="sidebar-separator"></div>
        <a href="#sales" className="sidebar-item"><FontAwesomeIcon icon={faChartLine} /> Sales</a>
        <div className="sidebar-separator"></div>
        <a href="#analytics" className="sidebar-item"><FontAwesomeIcon icon={faDollarSign} /> Analytics</a>
        {/* Another blank div as a separator */}
        <div className="sidebar-separator"></div>
        <div className="sidebar-item-blank"></div>
        <div className="sidebar-separator"></div>
        <a href="#payouts" className="sidebar-item"><FontAwesomeIcon icon={faSearch} /> Payouts</a>
        <div className="sidebar-separator"></div>
        <a href="#discover" className="sidebar-item"><FontAwesomeIcon icon={faBook} /> Discover</a>
        <div className="sidebar-separator"></div>
        <a href="#library" className="sidebar-item"><FontAwesomeIcon icon={faPlusSquare} /> Library</a>
        <div className="sidebar-separator"></div>
        <div className="sidebar-item-blank_2"></div>
        <div className="sidebar-separator"></div>
        <a href="#start-selling" className="sidebar-item"><FontAwesomeIcon icon={faQuestionCircle} /> Start Selling</a>
        <div className="sidebar-separator"></div>
        <a href="#help" className="sidebar-item"><FontAwesomeIcon icon={faUser} /> Help</a>
        <div className="sidebar-separator"></div>
        <a href="#settings" className="sidebar-item"><FontAwesomeIcon icon={faCog} /> Settings</a>
        <div className="sidebar-separator"></div>
        <a href="#user-profile" className="sidebar-item"><FontAwesomeIcon icon={faUser} /> Al J</a>

        {/* Add other menu items as needed */}
      </div>
    </aside>
  );
};

export default Sidebar;
