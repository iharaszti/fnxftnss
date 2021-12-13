import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

const ScrollUp = () => {
    return (
        <div style={{ width: "100%", height: "auto", display: "flex", justifyContent: "flex-end", alignSelf: "flex-end" }}>
            <a className="nav-link" href="#">
                <FontAwesomeIcon icon={faChevronUp} style={{ color: "grey" }} />
            </a>
        </div>
    )
}

export default ScrollUp
