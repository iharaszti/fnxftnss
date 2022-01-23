import './App.css';
import React, { useState, useEffect } from 'react'
import Navbar from './components/layout/Navbar/Navbar';
import Header from './components/pages/Header/Header';
import Services from "./components/pages/Services/Services"
import Packages from './components/pages/Packages/Packages';
import Contact from './components/pages/Contact/Contact';
import { api } from './api/cms';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import ScrollUp from './components/Subcomponents/ScrollUp/ScrollUp';

const App = () => {
  const [pictures, setPictures] = useState([]);
  const [services, setServices] = useState([]);
  const [packages, setPackages] = useState([]);
  const [mealPlan, setMealPlan] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.getEntries();

        setPackages(res.items.filter(el => el.sys.contentType.sys.id === "csomagok").map(el => el.fields))
        setPictures(res.items.filter(el => el.sys.contentType.sys.id === "pictures").map(el => el.fields));
        setServices(res.items.filter(el => el.sys.contentType.sys.id === "training").map(el => el.fields));
        setMealPlan(res.items.filter(el => el.sys.contentType.sys.id === "mealPlan").map(el => el.fields));
      } catch (e) {
        console.error(e);
      }
    })();

  }, []);

  const Pictures = React.lazy(() => import('./components/pages/Pictures/Pictures'));

  return (
    <div className="app">
      <Navbar />
      <Zoom>
        <div className="gradient-bg">
          <Header />
        </div>
      </Zoom>
      <div className="pages">
        <Fade>
          <React.Suspense fallback={<div>Loading... </div>}>
            <Pictures id="pictures" gallery={pictures} />
          </React.Suspense>
          <Services id="services" services={services} mealPlan={mealPlan} />
          <Packages id="packages" packages={packages} />
          {/* <Discounts id="discounts" /> */}
          <Contact id="contact" />
        </Fade>
        <ScrollUp />
      </div>
      <footer>&copy; Főnix Fitness Stúdió 2022</footer>
    </div>
  )
}

export default App
