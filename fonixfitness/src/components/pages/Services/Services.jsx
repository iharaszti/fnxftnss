import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import React from 'react'
import SectionTitle from '../../Subcomponents/SectionTitle/SectionTitle'
import "./Services.css"

const Services = (props) => {
    const _ = require("lodash");
    const services = _.sortBy(props.services, "studentPrice");
    return (
        <div id={props.id} className="services-wrapper">
            <SectionTitle title="Szolgáltatások" />
            <div className='services-content'>
                <div className="columns">
                    <ul className='price'>
                        <li className="header">{props.mealPlan[0]?.name}</li>
                        <li><section>{documentToReactComponents(props.mealPlan[0]?.description)}</section></li>
                    </ul>
                </div>
                {services.map((service, index) => (
                    <div key={index} className="columns">
                        <ul className="price">
                            <li className="header">{service.name}</li>
                            <li className="grey">{new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF', maximumFractionDigits: 0 }).format(service.price)} / fő</li>
                            <li><section>{documentToReactComponents(service.description)}</section></li>
                            <li>Diák kedvezmény *: {service.studentPrice === 0 ? "Ingyenes!" : service.studentPrice === service.price ? " - " : (new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF', maximumFractionDigits: 0 }).format(service.studentPrice) + " / fő")} </li>
                        </ul>
                    </div>
                ))}
            </div>
            <div>
                * Érvényes: Minden nappali tagozatos középiskolás, főiskolás, és egyetemista diák számára.
            </div>
        </div >
    )
}

export default Services
