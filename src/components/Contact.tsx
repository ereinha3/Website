import React from 'react';

const Contact = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center text-center -mt-[10vh] mb-[5vh]" id="contact">
            <div className="text-center text-[2.5rem] mb-[1vh] md:mb-[1vh] mx-auto">Contact</div>
            <div className="w-full flex flex-col items-center py-[4vh] md:py-[8vh]">
                <div className="text-[2rem]">Want to know more? Let's get in touch.</div>
                <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-around items-center text-[2rem] my-[4vh] md:my-[8vh] gap-8 md:gap-0">
                    <a 
                        href="https://www.linkedin.com/in/ethan-reinhart-3bb28b285/" 
                        className="hover:underline hover:underline-offset-[1em] hover:text-[#555]"
                    >
                        Linkedin
                    </a>
                    <a 
                        href="mailto:ereinha3@uoregon.edu" 
                        className="hover:underline hover:underline-offset-[1em] hover:text-[#555]"
                    >
                        Email
                    </a>
                    <a 
                        href="https://github.com/ereinha3" 
                        className="hover:underline hover:underline-offset-[1em] hover:text-[#555]"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;