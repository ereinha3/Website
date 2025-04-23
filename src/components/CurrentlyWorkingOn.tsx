import { useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CurrentlyWorkingOn = () => {
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
    
    // Project data
    const projects = [
        {
            title: "Master's in Computer Science",
            subtitle: "University of Oregon",
            image: "/psc.jpg",
            link: "/transcript.pdf"
        },
        {
            title: "Graduate Research",
            subtitle: "Research under Professor Yu Wang",
            image: "/rag.png",
            link: "/resume.pdf"
        },
        {
            title: "Dermo",
            subtitle: "Your Personal Dermatology Assistant",
            image: "/dermo.png",
            link: "http://www.dermoai.com/"
        },
        {
            title: "Beat the Books",
            subtitle: "The Books are beating you, Beat them!",
            image: "/btb.png",
            link: "http://www.beatthebooks.co/"
        }
    ];
    
    return (
        <div ref={ref} id="currently-working-on" className="animate-ready flex flex-col items-center justify-center w-screen mx-auto py-16 min-h-screen mt-[20vh]">
            {/* Title Section */}
            <div className="animate-ready delay-250 flex flex-col items-center justify-center w-full mb-16">
                <h2 className="animate-ready delay-250 text-4xl md:text-5xl font-bold text-black mb-4">
                    Current Work
                </h2>
                <div className="animate-ready delay-300 h-[0.3rem] w-[10%] bg-black mb-8"></div>
                <p className="animate-ready delay-350 text-lg text-gray-600 max-w-2xl text-center">
                    I am currently working on these projects and always looking for new challenges!
                </p>
            </div>
            
            {/* Projects Grid */}
            <div className="animate-ready delay-400 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4">
                {projects.map((project, index) => (
                    <a 
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                    >
                        <div className="aspect-video w-full overflow-hidden">
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                            <p className="text-sm text-gray-200">{project.subtitle}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default CurrentlyWorkingOn;
