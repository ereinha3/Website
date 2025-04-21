import React, { useState, useEffect } from 'react'
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
        <div ref={ref} className="animate-ready w-full lg:w-[49%] my-[2vh] md:my-[5%] mx-[1%]">
            <div className="animate-ready delay-100 text-center text-[2rem] mb-[4vh] md:mb-[5vh] mx-auto">
                {title}
            </div>
            <div className="relative h-[25vh] md:h-[40vh]">
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
        <div ref={ref} className="animate-ready w-[85%] lg:w-[70%] my-[10vh] md:my-[40vh] mx-auto flex flex-col items-center justify-center" id="experience">
            <div className="animate-ready delay-100 text-center text-[2.5rem] mb-[3vh] md:mb-[5vh] mx-auto">Experience</div>
            <div className="animate-ready delay-200 w-full text-[1.25rem] md:text-[1.5rem] tracking-[0.1rem] text-center mb-[5vh] md:mb-[8vh]">
                <p className="indent-8">
                    I've worked with a variety of technologies throughout under-graduate curriculumn, clubs, and personal projects. 
                    The technologies and languages below are emphasized in order of experience. 
                    Outside of these, I also have experience with 
                    <a className="hover:text-[#AAA]" href="https://leetcode.com/u/ereinha3/"> dynamic programming</a>, 
                    <a className="hover:text-[#AAA]" href="https://github.com/ereinha3/Operating-Systems/tree/main/Project1"> OS management</a>, 
                    <a className="hover:text-[#AAA]" href="https://github.com/ereinha3/Operating-Systems/tree/main/Project3"> parallelism</a>, 
                    <a className="hover:text-[#AAA]" href="https://github.com/ereinha3/Introduction-to-Cryptography"> cryptography</a>, 
                    many Python libraries including PyTorch, 
                    <a className="hover:text-[#AAA]" href="https://github.com/ereinha3/Watch-Profits-Soar-to-the-Ether"> TensorFlow</a>, 
                    and a versatile background in Applied Mathematics.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row w-[100vw] md:w-full gap-[2vh] lg:gap-0">
                <SkillCloud items={languages} title="Languages" />
                <SkillCloud items={technologies} title="Technologies" />
            </div>
        </div>
    );
};

export default Experience;
