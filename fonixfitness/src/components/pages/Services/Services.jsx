import React, { useEffect } from 'react'
import { api } from '../../../api/cms'
import SectionTitle from '../../Subcomponents/SectionTitle/SectionTitle'
import "./Services.css"

const Services = (props) => {
    useEffect(() => {
        (async () => {
            try {
                const res = await api.getEntries();
                console.log(res);
            } catch (e) {
                console.error(e);
            }
        })();
    }, [])
    return (
        <div id={props.id} className="services-wrapper">
            <SectionTitle title="Szolgáltatások" />
        </div>
    )
}

export default Services
