import React, { useEffect } from 'react'
import { api } from '../../../api/cms'
import ScrollUp from '../../Subcomponents/ScrollUp/ScrollUp'
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
        <>
            <div id={props.id} className="services-wrapper">
                <SectionTitle title="Szolgáltatások" />
            </div>
            <ScrollUp />
        </>
    )
}

export default Services
