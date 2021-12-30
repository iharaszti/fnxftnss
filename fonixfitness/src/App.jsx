import './App.css';
import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/layout/Navbar/Navbar';
import Header from './components/pages/Header/Header';
import Services from "./components/pages/Services/Services"
import Packages from './components/pages/Packages/Packages';
import Contact from './components/pages/Contact/Contact';
import Pictures from './components/pages/Pictures/Pictures';
import Discounts from './components/pages/Discounts/Discounts';
import { api } from './api/cms';

const App = () => {
  const [pictures, setPictures] = useState([]);
  const [services, setServices] = useState([]);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.getEntries();
        console.log(res);
        setPackages(res.items.filter(el => el.sys.contentType.sys.id === "csomagok").map(el => el.fields))
        setPictures(res.items.filter(el => el.sys.contentType.sys.id === "pictures").map(el => el.fields));
        setServices(res.items.filter(el => el.sys.contentType.sys.id === "training").map(el => el.fields));
      } catch (e) {
        console.error(e);
      }
    })();
  }, [])

  return (
    <div className="app">
      <Navbar />
      <div className="gradient-bg">
        <Header />
      </div>
      <div className="pages">
        <Pictures id="pictures" gallery={pictures} />
        <Services id="services" services={services} />
        <Packages id="packages" packages={packages} />
        {/* <Discounts id="discounts" /> */}
        <Contact id="contact" />
      </div>
      <footer>&copy; Főnix Fitness Stúdió 2022</footer>
    </div>
  )
}

export default App
