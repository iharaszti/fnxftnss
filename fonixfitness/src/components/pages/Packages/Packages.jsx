import React from 'react'
import ScrollUp from '../../Subcomponents/ScrollUp/ScrollUp'
import SectionTitle from '../../Subcomponents/SectionTitle/SectionTitle'
import "./Packages.css"

const Packages = (props) => {
    return (
        <div id={props.id} className="prices-wrapper">
            <SectionTitle title="Csomagok" />
            <div className="columns">
                <ul className="price">
                    <li className="header">Személyi edzés</li>
                    <li className="grey">3000 HUF / alkalom</li>
                    <li># info 1</li>
                    <li className="grey"><a href="#" class="button">Érdekel!</a></li>
                </ul>
            </div>
            <div className="columns">
                <ul className="price">
                    <li className="header">Páros edzés</li>
                    <li className="grey">5000 HUF / alkalom</li>
                    <li># info 1</li>
                    <li className="grey"><a href="#" class="button">Érdekel!</a></li>
                </ul>
            </div>
            <div className="columns">
                <ul className="price">
                    <li className="header">Csoportos edzés</li>
                    <li className="grey">10000 HUF / alkalom</li>
                    <li># info 1</li>
                    <li className="grey"><a href="#" class="button">Érdekel!</a></li>
                </ul>
            </div>
            <ScrollUp />
        </div >
    )
}

export default Packages
