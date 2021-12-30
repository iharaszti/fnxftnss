import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import React, { useEffect } from 'react'
import { api } from '../../../api/cms'
import ScrollUp from '../../Subcomponents/ScrollUp/ScrollUp'
import SectionTitle from '../../Subcomponents/SectionTitle/SectionTitle'
import "./Services.css"

const Services = (props) => {
    console.log(props);
    return (
        <>
            <div id={props.id} className="services-wrapper">
                <SectionTitle title="Szolgáltatások" />
                <div className='services-content'>
                    {props.services.map((service, index) => (
                        <div key={index} className="columns">
                            <ul className="price">
                                <li className="header">{service.name}</li>
                                <li className="grey">{new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF', maximumFractionDigits: 0 }).format(service.price)} / fő</li>
                                <li><section>{documentToReactComponents(service.description)}</section></li>
                                <li>Diák kedvezmény * : {new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF', maximumFractionDigits: 0 }).format(service.studentPrice)} / fő</li>
                            </ul>
                        </div>
                    ))}
                </div>
                <div>
                    * Érvényes: Minden nappali tagozatos középiskolás, főiskolás, és egyetemista diák számára.
                </div>
            </div >
            <ScrollUp />
        </>
    )
}

export default Services
