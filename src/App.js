import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import MainBody from './components/MainBody';
import ThemeContext from './context/ThemeContext';

function App() {
  const themeHook = useState("light")
  return (
    <>
    <ThemeContext.Provider value={themeHook} >
      <Header />
      <MainBody />
      <About />
      <Footer />
    </ThemeContext.Provider> 
    </>
    );
}

export default App;
