import React from 'react'
import SectionTitle from '../../Subcomponents/SectionTitle/SectionTitle'
import "./Contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneSquareAlt, faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"
import ScrollUp from '../../Subcomponents/ScrollUp/ScrollUp'

const Contact = (props) => {
    return (
        <div id={props.id} className="contact-wrapper">
            <SectionTitle title="Kapcsolat" />
            <div className="contact-in">
                <div className="contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2717.076731895103!2d17.905374115612243!3d47.077958879153186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47699a12023c5cd7%3A0x1fa017ab2d126471!2zTWFnbsOzbGlhIFN6w6lwc8OpZ2jDoXo!5e0!3m2!1shu!2shu!4v1639235323502!5m2!1shu!2shu" /*width="600" height="450"*/ allowfullscreen="true" loading="lazy"></iframe>
                </div>
                <div className="contact-form">
                    <h2>Hagyj üzenetet!</h2>
                    <form>
                        <input className="contact-form-text" name="name" type="text" placeholder="Név" />
                        <input className="contact-form-text" name="email" type="text" placeholder="Email cím" />
                        <textarea className="contact-form-textarea" name="message" type="text" placeholder="Üzenet" />
                        <input className="contact-form-sendbtn" name="submit" type="submit" />
                    </form>
                    <div className="contact-form-icongroup">
                        <button className="contact-form-icon" type="button">
                            <FontAwesomeIcon icon={faPhoneSquareAlt} style={{ color: "orange", borderColor: "orange" }} />
                            &nbsp;(20) 296 3210
                        </button>
                        <button className="contact-form-icon" type="button">
                            <FontAwesomeIcon icon={faEnvelopeSquare} style={{ color: "orange", borderColor: "orange" }} />
                            &nbsp;asd@asd.com
                        </button>
                        <button className="contact-form-icon" type="button">
                            <a href="https://www.instagram.com/fonix_veszprem/" target="_blank" className="contact-form-icon">
                                <i className="fa fa-instagram ft14" />
                                &nbsp;fonix_veszprem
                            </a>
                        </button>
                        <button className="contact-form-icon" type="button">
                            <a href="https://www.facebook.com/F%C5%91nix-Fitness-St%C3%BAdi%C3%B3-104772821764093/" target="_blank" className="contact-form-icon">
                                <i className="fa fa-facebook ft14" />
                                &nbsp;Főnix Fitness Stúdió
                            </a>
                        </button>
                    </div>
                </div>
            </div >
            <ScrollUp />
        </div >
    )
}

export default Contact
