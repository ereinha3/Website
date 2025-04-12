import React, { forwardRef } from 'react';

// Styles that can't be handled by Tailwind
const svgAnimations = `
  @keyframes draw1 {
    to { stroke-dashoffset: 0; }
  }
  @keyframes draw2 {
    to { stroke-dashoffset: 0; }
  }
  @keyframes draw3 {
    to { stroke-dashoffset: 0; }
  }

  #pen1 {
    stroke-dasharray: 192.5;
    stroke-dashoffset: 385;
    animation: draw1 5s linear infinite;
  }
  #pen2 {
    stroke-dasharray: 135.5;
    stroke-dashoffset: 271;
    animation: draw2 5s linear infinite;
  }
  #pen3 {
    stroke-dasharray: 30;
    stroke-dashoffset: 60;
    animation: draw3 5s linear infinite;
  }
`;

const Navbar = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <>
            <style>{svgAnimations}</style>
            <nav className="fixed flex flex-row justify-center items-center w-screen h-[8vh] top-[5vh] left-0 -m-[1%] transition-all duration-300 opacity-100 bg-white z-50" id="navbar" ref={ref}>
                <div className="absolute left-[5%] w-[8vh] h-[8vh]">
                    <svg id="svgContainer" className="h-full" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            id="pen1" 
                            className="stroke-black stroke-2 fill-none" 
                            d="M 2.0 2.0 L 62.0 2.0 L 62.0 17.0 L 17.0 17.0 L 17.0 32.0 L 42.0 32.0 L 42.0 47.0 L 17.0 47.0 L 17.0 62.0 L 77.0 62.0 L 77.0 107.0 L 57.6066017178 107.0 L 77.0 147.0"
                        />
                        <path 
                            id="pen2" 
                            className="stroke-black stroke-2 fill-none" 
                            d="M 2.0 2.0 L 2.0 77.0 L 32.0 77.0 L 32.0 147.0 L 47.0 147.0 L 47.0 117.606601718 L 62.0 147.0 L 77.0 147.0"
                        />
                        <path 
                            id="pen3" 
                            className="stroke-black stroke-2 fill-none" 
                            d="M 62.0 92.0 L 62.0 77.0 L 47.0 77.0 L 47.0 92.0 L 62.0 92.0"
                        />        
                    </svg>
                </div>
                <div className="absolute w-[60%] right-0 flex flex-nowrap justify-evenly">
                    <a href="#about" className="whitespace-nowrap text-[1.5vw] mx-[2%] tracking-[.1rem] hover:underline hover:underline-offset-[1em] hover:text-[#555]">
                        About Me
                    </a>
                    <a href="#experience" className="whitespace-nowrap text-[1.5vw] mx-[2%] tracking-[.1rem] hover:underline hover:underline-offset-[1em] hover:text-[#555]">
                        Experience
                    </a>
                    <a href="#projects" className="whitespace-nowrap text-[1.5vw] mx-[2%] tracking-[.1rem] hover:underline hover:underline-offset-[1em] hover:text-[#555]">
                        Projects
                    </a>
                    <a href="#contact" className="whitespace-nowrap text-[1.5vw] mx-[2%] tracking-[.1rem] hover:underline hover:underline-offset-[1em] hover:text-[#555]">
                        Contact
                    </a>
                    <a href="/Ethan Reinhart Resume.pdf" className="whitespace-nowrap text-[1.5vw] mx-[2%] tracking-[.1rem] hover:underline hover:underline-offset-[1em] hover:text-[#555]">
                        Resume
                    </a>
                </div>
            </nav>
        </>
    );
});

Navbar.displayName = 'Navbar';

export default Navbar;