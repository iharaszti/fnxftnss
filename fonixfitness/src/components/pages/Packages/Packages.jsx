import React from 'react'
import SectionTitle from '../../Subcomponents/SectionTitle/SectionTitle'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import "./Packages.css"

const Packages = (props) => {
    const _ = require("lodash");
    const packages = _.sortBy(props.packages, "price");

    return (
        <div id={props.id} className="packages-wrapper">
            <SectionTitle title="Csomagok" />
            <div className="packages-content">
                {packages.map((pkg, index) => (
                    <div key={index} className="columns">
                        <ul className="price">
                            <li className="header">{pkg.name}</li>
                            <li className="grey">{new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF', maximumFractionDigits: 0 }).format(pkg.price)}</li>
                            <li className="details"><section>{documentToReactComponents(pkg.description)}</section></li>
                            <li>Felhasználható: {pkg.expiration}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Packages
