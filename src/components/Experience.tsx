import { useState, useEffect } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const languages = [
    { name: 'JavaScript', size: 'large', level: 1, position: { x: 65, y: 10 }, mobilePosition: { x: 70, y: 10 } },
    { name: 'C', size: 'large', level: 1, position: { x: 10, y: 35 }, mobilePosition: { x: 15, y: 25 } },
    { name: 'Python', size: 'large', level: 1, position: { x: 40, y: 65 }, mobilePosition: { x: 45, y: 60 } },
    { name: 'Bash', size: 'medium', level: 2, position: { x: 25, y: 95 }, mobilePosition: { x: 25, y: 85 } },
    { name: 'C++', size: 'medium', level: 2, position: { x: 75, y: 45 }, mobilePosition: { x: 80, y: 40 } },
    { name: 'HTML', size: 'medium', level: 2, position: { x: 30, y: 5 }, mobilePosition: { x: 30, y: 15 } },
    { name: 'CSS', size: 'medium', level: 2, position: { x: 80, y: 75 }, mobilePosition: { x: 85, y: 70 } },
    { name: 'CUDA', size: 'medium', level: 2, position: { x: 55, y: 40 }, mobilePosition: { x: 60, y: 45 } },
    { name: 'Swift', size: 'small', level: 3, position: { x: 35, y: 40 }, mobilePosition: { x: 40, y: 35 } },
    { name: 'SQL', size: 'small', level: 3, position: { x: 5, y: 80 }, mobilePosition: { x: 15, y: 75 } },
    { name: 'C#', size: 'small', level: 3, position: { x: 65, y: 100 }, mobilePosition: { x: 70, y: 90 } },
    { name: 'Haskell', size: 'small', level: 3, position: { x: 10, y: 10 }, mobilePosition: { x: 10, y: 5 } }
];

const technologies = [
    { name: 'Git', size: 'large', level: 1, position: { x: 40, y: 40 }, mobilePosition: { x: 45, y: 30 } },
    { name: 'Pandas', size: 'large', level: 1, position: { x: 15, y: 70 }, mobilePosition: { x: 15, y: 65 } },
    { name: 'Linux', size: 'large', level: 1, position: { x: 60, y: 5 }, mobilePosition: { x: 65, y: 10 } },
    { name: 'Docker', size: 'medium', level: 2, position: { x: 70, y: 30 }, mobilePosition: { x: 75, y: 35 } },
    { name: 'React', size: 'medium', level: 2, position: { x: 20, y: 15 }, mobilePosition: { x: 25, y: 20 } },
    { name: 'SLURM', size: 'medium', level: 2, position: { x: 10, y: 45 }, mobilePosition: { x: 15, y: 45 } },
    { name: 'OpenMP', size: 'medium', level: 2, position: { x: 85, y: 55 }, mobilePosition: { x: 85, y: 60 } },
    { name: 'PyTorch', size: 'large', level: 1, position: { x: 55, y: 75 }, mobilePosition: { x: 55, y: 80 } },
    { name: 'MPI', size: 'small', level: 3, position: { x: 75, y: 80 }, mobilePosition: { x: 80, y: 90 } }
];

const SkillCloud = ({ items, title }: { items: Array<{ name: string, size: string, level: number, position: { x: number, y: number }, mobilePosition: { x: number, y: number } }>, title: string }) => {
    const [isMobile, setIsMobile] = useState(false);
    const ref = useScrollAnimation();

    useEffect(() => {
        // Set initial value
        setIsMobile(window.innerWidth < 768);

        // Add resize listener
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
        <div ref={ref} className="animate-ready w-full lg:w-[40vw] my-[1vh] md:my-[2vh]">
            <div className="animate-ready delay-100 text-center text-[2.5rem] mb-[2vh] md:mb-[3vh] mx-auto font-semibold flex flex-col items-center justify-center">
                <p className='mb-2 animate-ready delay-100'>{title}</p>
                <div className="animate-ready delay-200 h-full w-[6vw] flex flex-col items-center justify-center">
                    <div className="animate-ready delay-200 h-[0.3rem] w-full bg-black"/>
                </div>
            </div>
            <div className="relative h-[30vh] md:h-[40vh]">
                {items.map((item, index) => {
                    const position = isMobile ? item.mobilePosition : item.position;
                    return (
                        <div
                            key={item.name}
                            style={{
                                left: `${position.x}%`,
                                top: `${position.y}%`,
                            }}
                            className={`
                                absolute transform -translate-x-1/2 -translate-y-1/2
                                hover:scale-110 transition-all duration-300
                                flex justify-center items-center text-center
                                ${item.size === 'large' ? 'text-[1.75rem] md:text-[2.5rem] text-shadow-lg' : 
                                  item.size === 'medium' ? 'text-[1.5rem] md:text-[2rem] text-shadow-md' : 
                                  'text-[1.25rem] md:text-[1.5rem] text-shadow-sm'}
                                ${item.level === 1 ? 'font-bold' : item.level === 2 ? 'font-semibold' : 'font-normal'}
                                animate-float-${index % 3 + 1}
                            `}
                        >
                            {item.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const Experience = () => {
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
        <section id="experience" className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white py-24 pt-[20vh]">
            <div ref={ref} className="animate-ready mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title Section */}
                <div className="animate-ready delay-100 flex flex-col items-center justify-center w-full mb-[10vh]">
                    <div className="animate-ready delay-200 h-full w-[70vw] ml-[30vw] flex flex-col items-center justify-center mb-8">
                        <div className="animate-ready delay-200 h-[0.3rem] w-full bg-black"/>
                    </div>
                    <div className="animate-ready delay-200 h-full w-full mx-auto flex items-center justify-center mb-8">  
                        <div className="animate-ready delay-200 h-full w-full flex flex-col items-center justify-center">
                            <div className="animate-ready delay-200 h-[0.3rem] w-[5vw] ml-auto bg-black"/>
                        </div>
                        <h2 className="animate-ready delay-100 text-4xl md:text-5xl font-bold text-black px-4">
                            Experience
                        </h2>
                        <div className="animate-ready delay-200 h-full w-full flex flex-col items-center justify-center">
                            <div className="animate-ready delay-200 h-[0.3rem] w-[5vw] mr-auto bg-black"/>
                        </div>
                    </div>
                    
                    <div className="animate-ready delay-200 h-full w-[70vw] mr-[30vw] flex flex-col items-center justify-center">
                        <div className="animate-ready delay-200 h-[0.3rem] w-full bg-black"/>
                    </div>
                </div>

                {/* Introduction Card */}
                <div className="animate-ready delay-300 p-8 mb-8 w-[70vw] text-center mx-auto">
                    <p className="text-2xl text-gray-700 leading-relaxed">
                        I've worked with a variety of technologies throughout under-graduate curriculumn, clubs, and personal projects. 
                        The technologies and languages below are emphasized in order of experience. 
                        Outside of these, I also have experience with{' '}
                        <a className="text-blue-600 hover:text-blue-800 transition-colors font-semibold" href="https://leetcode.com/u/ereinha3/">dynamic programming</a>,{' '}
                        <a className="text-blue-600 hover:text-blue-800 transition-colors font-semibold" href="https://github.com/ereinha3/Operating-Systems/tree/main/Project1">OS management</a>,{' '}
                        <a className="text-blue-600 hover:text-blue-800 transition-colors font-semibold" href="https://github.com/ereinha3/Operating-Systems/tree/main/Project3">parallelism</a>,{' '}
                        <a className="text-blue-600 hover:text-blue-800 transition-colors font-semibold" href="https://github.com/ereinha3/Introduction-to-Cryptography">cryptography</a>,{' '}
                        many Python libraries including PyTorch,{' '}
                        <a className="text-blue-600 hover:text-blue-800 transition-colors font-semibold" href="https://github.com/ereinha3/Watch-Profits-Soar-to-the-Ether">TensorFlow</a>,{' '}
                        and a versatile background in Applied Mathematics.
                    </p>
                </div>

                {/* Skill Clouds */}
                <div className="animate-ready delay-400 flex flex-col justify-center items-center lg:flex-row w-full gap-0 lg:gap-4">
                    <SkillCloud items={languages} title="Languages" />
                    <SkillCloud items={technologies} title="Technologies" />
                </div>
            </div>
        </section>
    );
};

export default Experience;
