import React from 'react';

const Contact = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center text-center -mt-[10vh] mb-[5vh]" id="contact">
            <div className="text-center text-[2.5rem] my-[10vh] mx-auto">Contact</div>
            <div className="w-full flex flex-col items-center py-[8vh]">
                <div className="text-[2rem]">Want to know more? Let's get in touch.</div>
                <div className="w-1/2 flex justify-around items-center text-[2rem] my-[8vh] mx-auto">
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