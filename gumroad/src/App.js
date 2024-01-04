import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent'; // Assuming you have this component
import FloatingAssistant from './components/FloatingAssistant';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      <div className="content-area">
        
        <Sidebar />
        <MainContent />
      </div>
      
      <FloatingAssistant />
      <Footer />
    </div>
  );
};

export default App;
