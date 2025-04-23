import { useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
    const ref = useScrollAnimation();
    
    useEffect(() => {
        if (ref.current) {
            ref.current.classList.add('animate-in');
            
            const childElements = ref.current.querySelectorAll('.animate-ready');
            childElements.forEach(element => {
                element.classList.add('animate-in');
            });
        }
    }, []);
    
    return (
        <section id="contact" className="relative bg-gradient-to-b from-white to-gray-50 mt-[20vh] pb-[20vh]">
            <div ref={ref} className="animate-ready mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title Section */}
                <div className="animate-ready delay-100 flex items-center justify-center w-full mb-[10vh]">
                    <div className="animate-ready delay-200 h-full w-[10vw] flex flex-col items-center justify-center">
                        <div className="animate-ready delay-200 h-[0.3rem] w-full bg-black"/>
                    </div>
                    <h2 className="animate-ready delay-100 text-4xl md:text-5xl font-bold text-black mb-4 px-8">
                        Contact
                    </h2>
                    <div className="animate-ready delay-200 h-full w-[10vw] flex flex-col items-center justify-center">
                        <div className="animate-ready delay-200 h-[0.3rem] w-full bg-black"/>
                    </div>
                </div>

                {/* Content */}
                <div className="animate-ready delay-300 max-w-4xl mx-auto text-center">
                    <p className="text-xl md:text-2xl text-gray-700 mb-12">
                        Want to know more? Let's get in touch.
                    </p>
                    
                    <div className="animate-ready delay-400 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        <a 
                            href="https://www.linkedin.com/in/ethan-reinhart-3bb28b285/"
                            className="animate-ready delay-500 group p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">LinkedIn</h3>
                            <p className="text-gray-600">Connect with me professionally</p>
                        </a>
                        
                        <a 
                            href="mailto:ethanreinhart@gmail.com"
                            className="animate-ready delay-500 group p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">Email</h3>
                            <p className="text-gray-600">Send me a message directly</p>
                        </a>
                        
                        <a 
                            href="https://github.com/ereinha3"
                            className="animate-ready delay-500 group p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">GitHub</h3>
                            <p className="text-gray-600">Check out my code</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;