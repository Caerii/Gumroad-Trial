import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import FloatingAssistant from './components/FloatingAssistant';
import './App.css';


const App = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <HeroSection /> */}
      <Dashboard />
      <FloatingAssistant />
      <Footer />
    </div>
  );
};

export default App;
