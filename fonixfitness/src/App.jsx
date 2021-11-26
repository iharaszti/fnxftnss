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
      <div className="pages">
        <div className="gradient-bg">
          <Header />
        </div>
        <Services />
        <Prices />
      </div>
    </div>
  )
}

export default App
