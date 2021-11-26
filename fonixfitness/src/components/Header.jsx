import React from "react";
import Typed from "react-typed"

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h1>Főnix Fitness Stúdió</h1>
                    <Typed
                        className="typed-text"
                        strings={["Személyi edzés", "Páros edzés", "Csoportos edzés"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />
                </div>
            </div>
        </div>
    )
}

export default Header
    ;