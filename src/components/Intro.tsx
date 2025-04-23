import { useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Intro = () => {
    const ref = useScrollAnimation();
    
    // Add a class to make the component visible immediately on page load
    useEffect(() => {
        if (ref.current) {
            ref.current.classList.add('animate-in');
            
            // Also add animate-in to all child elements with animate-ready class
            const childElements = ref.current.querySelectorAll('.animate-ready');
            childElements.forEach(element => {
                element.classList.add('animate-in');
            });
        }
    }, []);
    
    return (
        <div ref={ref} className="animate-ready flex flex-col items-left justify-center w-screen mx-auto mt-[15vh] md:mt-[15vh] mb-[5vh] h-auto md:h-[80vh] relative px-4 md:px-0">

            {/* Intro line */}
            <div className="animate-ready delay-100 text-[5vw] md:text-[2.2vw] tracking-wide text-gray-700 text-left mx-[5vw] md:mx-[10vw] w-[90vw] md:w-[65vw]">
                Hello, my name is
            </div>

            {/* Name */}
            <div className="animate-ready delay-200 text-[10vw] md:text-[6vw] font-extrabold text-black tracking-tight text-left mx-[5vw] md:mx-[10vw] w-[90vw] md:w-[65vw]">
                ETHAN REINHART
            </div>

            {/* Underline */}
            <div className="animate-ready delay-250 h-[0.5vw] md:h-[0.3vw] w-[70vw] md:w-[45vw] bg-black mb-[2vh] mx-[5vw] md:mx-[12vw]" />

            {/* Tagline */}
            <div className="animate-ready delay-300 text-[5vw] md:text-[3vw] font-semibold text-gray-800 text-left leading-tight mt-[2vh] w-[80vw] md:w-[50vw] mx-[5vw] md:mx-[10vw]">
                Computer Scientist passionate about improving accuracy and efficiency in AI
            </div>

            {/* Description */}
            
            <img 
                src={'/headshot.png'} 
                alt={'Headshot'} 
                className="animate-ready delay-400 absolute right-0 bottom-0 w-[45vw] h-full object-cover hidden md:block"
            />
            <div className="animate-ready delay-400 absolute right-0 bottom-0 h-[0.5vw] md:h-[0.3vw] hidden md:block -mb-1 bg-black w-[50vw] z-10" />
            <div className="animate-ready delay-400 absolute left-0 bottom-0 h-[0.5vw] md:h-[0.3vw] hidden md:block -mb-1 bg-black w-[10vw] z-10" />
            {/* <div className="animate-ready delay-400 absolute left-[10vw] bottom-0 h-[0.3vw] mb-[1.5vw] w-[40vw] z-10 text-center text-[2.5vw] font-semibold text-gray-800" >Currently working on...</div> */}
        </div>

    );
}

export default Intro;
