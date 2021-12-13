import React from 'react'
import ScrollUp from '../../Subcomponents/ScrollUp/ScrollUp'
import SectionTitle from '../../Subcomponents/SectionTitle/SectionTitle'

const Discounts = (props) => {
    return (
        <div id={props.id} className="discounts-wrapper">
            <SectionTitle title="Csomagok" />
            <ScrollUp />
        </div>
    )
}

export default Discounts
