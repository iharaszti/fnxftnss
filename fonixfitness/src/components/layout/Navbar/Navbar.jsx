import React, { useState, useEffect } from 'react'
import logo from "../../../assets/logo_low_res transparent.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import "./Navbar.css"
import debounce from './debounce'

const Navbar = () => {
    const handleNavigation = (e) => {
        //console.log(e.currentTarget);
        //window.location.href = "#services";
    }

    /*
        var prevScrollpos = window.pageYOffset;
        window.onscroll = () => {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-15vh";
            }
            prevScrollpos = currentScrollPos;
        }
    */
    return (
        <nav /*id="navbar"*/ className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <div className="container">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#C99200", borderColor: "#C99200" }} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#pictures">Stúdió</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Szolgáltatások</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#packages">Csomagok</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#discounts">Kedvezmények</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Kapcsolat</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
