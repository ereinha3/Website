import React, { forwardRef } from 'react';

const Navbar = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <nav className="navbar" id="navbar" ref={ref}>
            <div className="image-container">
                <svg id="svgContainer" className="logo" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        id="pen1" 
                        className="path" 
                        d="M 2.0 2.0 L 62.0 2.0 L 62.0 17.0 L 17.0 17.0 L 17.0 32.0 L 42.0 32.0 L 42.0 47.0 L 17.0 47.0 L 17.0 62.0 L 77.0 62.0 L 77.0 107.0 L 57.6066017178 107.0 L 77.0 147.0"
                    />
                    <path 
                        id="pen2" 
                        className="path" 
                        d="M 2.0 2.0 L 2.0 77.0 L 32.0 77.0 L 32.0 147.0 L 47.0 147.0 L 47.0 117.606601718 L 62.0 147.0 L 77.0 147.0"
                    />
                    <path 
                        id="pen3" 
                        className="path" 
                        d="M 62.0 92.0 L 62.0 77.0 L 47.0 77.0 L 47.0 92.0 L 62.0 92.0"
                    />        
                </svg>
            </div>
            <div className="navbar-links-container">
                <a href="#about" className="navbar-link link_override">
                    About Me
                </a>
                <a href="#experience" className="navbar-link link_override">
                    Experience
                </a>
                <a href="#projects" className="navbar-link link_override">
                    Projects
                </a>
                <a href="#contact" className="navbar-link link_override">
                    Contact
                </a>
                <a href="/Ethan Reinhart Resume.pdf" className="navbar-link">
                    Resume
                </a>
            </div>
        </nav>
    );
});

Navbar.displayName = 'Navbar';

export default Navbar;