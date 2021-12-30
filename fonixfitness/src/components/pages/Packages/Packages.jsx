import React from 'react'
import ScrollUp from '../../Subcomponents/ScrollUp/ScrollUp'
import SectionTitle from '../../Subcomponents/SectionTitle/SectionTitle'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import "./Packages.css"

const Packages = (props) => {
    return (
        <>
            <div id={props.id} className="packages-wrapper">
                <SectionTitle title="Csomagok" />
                {props.packages.map((pkg, index) => (
                    <div key={index} className="columns">
                        <ul className="price">
                            <li className="header">{pkg.name}</li>
                            <li className="grey">{new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF', maximumFractionDigits: 0 }).format(pkg.price)}</li>
                            <li><section>{documentToReactComponents(pkg.description)}</section></li>
                            <li>Felhasználható: {pkg.expiration}</li>
                        </ul>
                    </div>
                ))}
            </div >
            <ScrollUp />
        </>
    )
}

export default Packages
