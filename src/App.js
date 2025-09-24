import React from 'react';
import './App.css';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="hero-banner">
        <img src="/file.svg" alt="Digitorn logotyp" className="banner-logo large" />
      </div>
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
