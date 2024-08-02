import React from "react";
import emailIcon from "./email.png";
import phoneIcon from "./phone.png";
import "./ContactUs.css";

const ContactUs = () => {
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p className="contact-description">
                We're just a message away! Contact us for any inquiries or
                collaborations.
            </p>
            <div className="contact-info">
                <div className="contact-item">
                    <img src={emailIcon} alt="Email Icon" className="contact-icon" />
                    <span className="contact-text">esg@telecard.com.pk </span>
                </div>
                <div className="contact-item">
                    <img src={phoneIcon} alt="Phone Icon" className="contact-icon" />
                    <span className="contact-text">(+92) 21-111-222-123 </span>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
