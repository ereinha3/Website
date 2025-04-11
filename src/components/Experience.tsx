import React from 'react'

const languages = [
    { name: 'Python', size: 'large', level: 1, position: { x: 65, y: 10 } },
    { name: 'C', size: 'large', level: 1, position: { x: 10, y: 35 } },
    { name: 'JavaScript', size: 'large', level: 1, position: { x: 40, y: 65 } },
    { name: 'Bash', size: 'medium', level: 2, position: { x: 25, y: 95 } },
    { name: 'C++', size: 'medium', level: 2, position: { x: 75, y: 45 } },
    { name: 'HTML', size: 'medium', level: 2, position: { x: 30, y: 5 } },
    { name: 'CSS', size: 'medium', level: 2, position: { x: 80, y: 75 } },
    { name: 'C#', size: 'medium', level: 2, position: { x: 55, y: 40 } },
    { name: 'Swift', size: 'small', level: 3, position: { x: 35, y: 40 } },
    { name: 'Scheme', size: 'small', level: 3, position: { x: 5, y: 80 } },
    { name: 'SML', size: 'small', level: 3, position: { x: 65, y: 100 } },
    { name: 'Haskell', size: 'small', level: 3, position: { x: 10, y: 10 } }
];

const technologies = [
    { name: 'GitHub', size: 'large', level: 1, position: { x: 40, y: 40 } },
    { name: 'Unity', size: 'large', level: 1, position: { x: 15, y: 70 } },
    { name: 'Linux', size: 'large', level: 1, position: { x: 60, y: 5 } },
    { name: 'Docker', size: 'medium', level: 2, position: { x: 70, y: 30 } },
    { name: 'React', size: 'medium', level: 2, position: { x: 20, y: 15 } },
    { name: 'CUDA', size: 'medium', level: 2, position: { x: 10, y: 45 } },
    { name: 'OpenMP', size: 'medium', level: 2, position: { x: 85, y: 55 } },
    { name: 'PyTorch', size: 'large', level: 1, position: { x: 55, y: 75 } },
    { name: 'MPI', size: 'small', level: 3, position: { x: 75, y: 80 } }
];

const SkillCloud = ({ items, title }: { items: Array<{ name: string, size: string, level: number, position: { x: number, y: number } }>, title: string }) => {
    return (
        <div className="w-full lg:w-[49%] my-[5%] mx-[1%]">
            <div className="text-[2rem] font-semibold decoration-wavy w-full text-center mb-[8%] mt-[3%]">
                {title}
            </div>
            <div className="relative h-[50vh] md:h-[35vh]">
                {items.map((item, index) => (
                    <div
                        key={item.name}
                        style={{
                            left: `${item.position.x}%`,
                            top: `${item.position.y}%`,
                        }}
                        className={`
                            absolute transform -translate-x-1/2 -translate-y-1/2
                            hover:scale-110 transition-all duration-300
                            flex justify-center items-center text-center
                            ${item.size === 'large' ? 'text-[2rem] md:text-[2.5rem] text-shadow-lg' : 
                              item.size === 'medium' ? 'text-[1.75rem] md:text-[2rem] text-shadow-md' : 
                              'text-[1.5rem] text-shadow-sm'}
                            ${item.level === 1 ? 'font-bold' : item.level === 2 ? 'font-semibold' : 'font-normal'}
                            animate-float-${index % 3 + 1}
                        `}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

const Experience = () => {
    return (
        <div className="w-[90%] lg:w-[70%] my-[40vh] mx-auto flex flex-col items-center justify-center" id="experience">
            <div className="text-center text-[2.5rem] my-[10vh] mx-auto">Experience</div>
            <div className="w-full text-[1.5rem] tracking-[0.1rem] text-center">
                <p className="indent-8">
                    I've worked with a variety of technologies throughout under-graduate curriculumn, clubs, and personal projects. 
                    The technologies and languages below are emphasized in order of experience. 
                    Outside of these, I also have experience with 
                    <a className="hover:text-[#AAA]" href="https://leetcode.com/u/ereinha/"> dynamic programming</a>, 
                    <a className="hover:text-[#AAA]" href="https://github.com/ereinha3/Operating-Systems/tree/main/Project1"> OS management</a>, 
                    <a className="hover:text-[#AAA]" href="https://github.com/ereinha3/Operating-Systems/tree/main/Project3"> parallelism</a>, 
                    <a className="hover:text-[#AAA]" href="https://github.com/ereinha3/Introduction-to-Cryptography"> cryptography</a>, 
                    many Python libraries including PyTorch, 
                    <a className="hover:text-[#AAA]" href="https://github.com/ereinha3/Watch-Profits-Soar-to-the-Ether"> TensorFlow</a>, 
                    and a versatile background in Applied Mathematics.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row w-full">
                <SkillCloud items={languages} title="Languages" />
                <SkillCloud items={technologies} title="Technologies" />
            </div>
        </div>
    );
};

export default Experience;