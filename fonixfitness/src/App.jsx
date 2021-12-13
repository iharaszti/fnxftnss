import './App.css';
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/layout/Navbar/Navbar';
import Header from './components/pages/Header/Header';
import Services from "./components/pages/Services/Services"
import Packages from './components/pages/Packages/Packages';
import Contact from './components/pages/Contact/Contact';
import Pictures from './components/pages/Pictures/Pictures';
import Discounts from './components/pages/Discounts/Discounts';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="gradient-bg">
        <Header />
      </div>
      <div className="pages">
        <Pictures id="pictures" />
        <Services id="services" />
        <Packages id="packages" />
        <Discounts id="discounts" />
        <Contact id="contact" />
      </div>
      <footer>&copy; Főnix Fitness Stúdió 2022</footer>
    </div>
  )
}

export default App
