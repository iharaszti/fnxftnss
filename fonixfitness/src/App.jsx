import './App.css';
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/layout/Navbar/Navbar';
import Header from './components/pages/Header/Header';
import Services from "./components/pages/Services/Services"
import Prices from './components/pages/Prices/Prices';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="gradient-bg">
        <Header />
      </div>
      <div className="pages">
        <Services id="services" />
        <Prices id="prices" />
      </div>
    </div>
  )
}

export default App
