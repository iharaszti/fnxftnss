import React, { useState, useEffect } from 'react'
import logo from "../../../assets/logo_low_res transparent.png"
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
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
                            <a className="nav-link" href="#contact">Kapcsolat</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
