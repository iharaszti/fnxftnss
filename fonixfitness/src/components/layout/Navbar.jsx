import React from 'react'
import logo from "../../resource/logo_low_res transparent.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#C99200", borderColor: "#C99200" }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Stúdió</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Szolgáltatások</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Rólam</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Kapcsolat</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
