import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import "./ScrollUp.css"

const ScrollUp = () => {
    return (
        <div style={{ width: "100%" }}>
            <div id="mybutton">
                <a class="scrollbutton" href="#">
                    <FontAwesomeIcon icon={faChevronUp} />
                </a>
            </div>
        </div>
    )
}

export default ScrollUp
