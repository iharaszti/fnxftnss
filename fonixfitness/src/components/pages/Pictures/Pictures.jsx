import React from 'react'
import ScrollUp from '../../Subcomponents/ScrollUp/ScrollUp'
import SectionTitle from '../../Subcomponents/SectionTitle/SectionTitle'
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./Pictures.css"

const Pictures = (props) => {
    const images = props.gallery.map(x => x?.picture.fields.file.url);

    const zoomOutProperties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: (i) => <div className="indicator"><img style={{ width: "50px", height: "25px" }} src={images[i]} alt={i + 1} /></div> /*true*/,
        scale: 0.4,
        arrows: true
    };

    return (
        <>
            <div id={props.id} className="pictures-wrapper">
                <SectionTitle title="Stúdió" />
                <div className="slide-container" style={{ justifyContent: "center", alignItems: "center", justifyItems: "center" }}>
                    <Zoom {...zoomOutProperties} >
                        {
                            images.map((url, index) => (
                                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                                    <img key={index} style={{ width: "auto", maxHeight: "75vh" }} src={url} />
                                </div>
                            ))
                        }
                    </Zoom>
                </div>
            </div >
            <ScrollUp />
        </>
    )
}

export default Pictures
