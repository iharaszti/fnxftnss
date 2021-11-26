import './App.css';
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';

const App = () => {
  return (
    <>
      <div className="gradient-bg">
        <Navbar />
        <Header />
      </div>
      <div>
        <Services />
      </div>
    </>
  )
}

export default App
