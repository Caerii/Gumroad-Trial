import React from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar';
import FloatingAssistant from './FloatingAssistant';
import WelcomeBanner from './WelcomeBanner';

import Header from './Header';
import Footer from './Footer';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <Sidebar />
      <WelcomeBanner />
      <main className="dashboard-main">
        
        {/* Include components for Welcome Banner, Notification, etc. */}
      </main>
      <FloatingAssistant />
      <Footer />
    </div>
  );
};

export default Dashboard;
