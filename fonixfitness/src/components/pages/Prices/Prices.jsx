import React from 'react'
import SectionTitle from '../../Subcomponents/SectionTitle/SectionTitle'
import "./Prices.css"

const Prices = () => {
    return (
        <div className="prices-wrapper">
            <SectionTitle title="Árak" />
            <div className="columns">
                <ul className="price">
                    <li className="header">Személyi edzés</li>
                    <li className="grey">3000 HUF / alkalom</li>
                    <li># info 1</li>
                    <li># info 2</li>
                    <li># info 3</li>
                    <li># info 4</li>
                    <li className="grey"><a href="#" class="button">Érdekel!</a></li>
                </ul>
            </div>
            <div className="columns">
                <ul className="price">
                    <li className="header">Páros edzés</li>
                    <li className="grey">5000 HUF / alkalom</li>
                    <li># info 1</li>
                    <li># info 2</li>
                    <li># info 3</li>
                    <li># info 4</li>
                    <li className="grey"><a href="#" class="button">Érdekel!</a></li>
                </ul>
            </div>
            <div className="columns">
                <ul className="price">
                    <li className="header">Csoportos edzés</li>
                    <li className="grey">10000 HUF / alkalom</li>
                    <li># info 1</li>
                    <li># info 2</li>
                    <li># info 3</li>
                    <li># info 4</li>
                    <li className="grey"><a href="#" class="button">Érdekel!</a></li>
                </ul>
            </div>
        </div >
    )
}

export default Prices
