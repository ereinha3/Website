import React from 'react';

const Contact = () => {
    return (
        <div className="contact-container" id="contact">
            <div className="contact-title">Contact</div>
            <div className="contact-container">
                <div className="contact-intro">Want to know more? Let's get in touch!</div>
                <div className="contact-content">
                    <a href="https://www.linkedin.com/in/ethan-reinhart-3bb28b285/" className="contact-link">Linkedin</a>
                    <a href="mailto:ereinha3@uoregon.edu" className="contact-link">Email</a>
                    <a href="https://github.com/ereinha3" className="contact-link">GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default Contact;