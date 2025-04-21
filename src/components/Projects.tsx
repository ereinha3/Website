import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

type Category = 'softwareDevelopment' | 'machineLearning' | 'parallelism' | 'showcase' | null;

interface Project {
    title: string;
    description: string;
    skills: string[];
    link: string;
    category: Category;
}

const projectData: Project[] = [
    {
        title: "Dermo - Open-Source AI Dermatologist",
        description: "Award-winning BeaverHacks project that leverages Vision Transformers for skin condition diagnosis. Features instant analysis of benign/malignant moles, skin disease classification, and personalized care recommendations via LLM integration.",
        skills: ["Vision Transformers", "Transfer Learning", "LLM Integration", "Python", "React", "Dataset Curation"],
        link: "https://dermoai.com/",
        category: "machineLearning"
    },
    {
        title: "HOUSER - Harmonic Optimized Recommender",
        description: "Novel recommender system using Graph Convolutional Networks to optimize post-purchase satisfaction. Predicts both purchase likelihood and expected ratings using Amazon user data, combining predictions through harmonic mean.",
        skills: ["GCN", "PyTorch", "Data Processing", "Research", "Model Optimization"],
        link: "https://github.com/ereinha3/HOUSER",
        category: "machineLearning"
    },
    {
        title: "Beat The Books",
        description: "Sports betting prediction platform utilizing an ensemble of models to forecast NBA game outcomes. Predicts team totals, game totals, and win-loss probabilities using transformer-based models, MLPs, and gradient boosted regressors.",
        skills: ["Transformers", "Machine Learning", "Model Ensemble", "Python", "Web Development"],
        link: "https://beatthebooks.co",
        category: "machineLearning"
    },
    {
        title: "Parallelized N-Body Barnes-Hut Simulation",
        description: "N-Body simulations are an embarrassingly parallel application. However, runtime still scales quadratically with regard to particle counts. The Barnes-Hut approximation attempts to conserve accuracy while greatly increasing performance.",
        skills: ["Cuda", "OpenMP", "Parallelism", "C++"],
        link: "https://bitbucket.org/daxs-repo/uoregon-cs431531-f24-group/src/main/",
        category: "parallelism"
    },
    {
        title: "Performance Comparison of Node Classification over Multiple GNNs",
        description: "GNNs (Graph Neural Networks) posses the capabilities to consider graph architecture when making predictions. This is largely due to the label propagation algorithm that seeds classifications and updates these classifications based on neighboring nodes.",
        skills: ["Q-Learning", "Value-Iteration", "Python"],
        link: "https://github.com/ereinha3/CS471-Intro-To-AI/tree/main/reinforcement",
        category: "machineLearning"
    },
    {
        title: "Parallelized SPMV with OpenMP",
        description: "SPMV (Sparse Matrix Vector Multiplication) provides a faster solution to a multiply large sparse (mostly zeros) matrix with a dense (mostly nonzeros) vector.",
        skills: ["SPMV", "OpenMP", "C++"],
        link: "https://github.com/ereinha3/CS431-Intro-to-Parallel-Computing/tree/main/homework03",
        category: "parallelism"
    },
    {
        title: "Watch Profits Soar to the Ether",
        description: "The volatility of cryptocurrency prices make them difficult to predict compared to stable fiat currencies. We analyze the market trends of Ether, one of the most widely used cryptocurrencies, and attempt to train various RNNs to predict future Ether prices.",
        skills: ["Python", "TensorFlow", "Data Processing", "Model Optimization"],
        link: "https://github.com/ereinha3/Watch-Profits-Soar-to-the-Ether",
        category: "machineLearning"
    },
    {
        title: "Neural Style Transfer",
        description: "This project sought to create abstract art by using a CycleGAN network trained on two datasets: people and lymph-node sections. The project was inspired by combining my passion for art and Machine Learning.",
        skills: ["Python", "Generative AI", "TensorFlow", "Model Optimization"],
        link: "https://github.com/ereinha3/Neural-Style-Transfer-Network",
        category: "machineLearning"
    },
    {
        title: "What's Up Dawg?",
        description: "6.3 million dogs are surrendered to shelters every year. What's the solution to this? Better educated owners. We've created a simulation game about the life of a dog and its human, detailing the costs and work required in being a responsible dog owner.",
        skills: ["Python", "Tkinter", "Data Processing", "Model View Controller", "Database Management"],
        link: "https://github.com/ereinha3/Whats-Up-Dawg",
        category: "softwareDevelopment"
    },
    {
        title: "Portfolio",
        description: "This was designed in React using TSX and Tailwind CSS. What do you think? You're looking at it right now!",
        skills: ["React", "JSX", "CSS", "JavaScript"],
        link: "https://github.com/ereinha3/ereinha3.github.io",
        category: "softwareDevelopment"
    },
    {
        title: "Duck Bank",
        description: "This project was designed to simulate parallelized bank transaction processing. This was implemented in C using Posix Threads.",
        skills: ["C", "Multi-Threading", "File IO", "Resource Management"],
        link: "https://github.com/ereinha3/Operating-Systems/tree/main/Project3",
        category: "parallelism"
    },
    {
        title: "Reinforcement Learning on PacMan",
        description: "PacMan consists of a finite world with a simple set of rules allowing for machine learning with little computation. I define policies for PacMan as well as use Q-learning to help PacMan eat all the dots and escape the ghosts.",
        skills: ["Q-Learning", "Value-Iteration", "Python"],
        link: "https://github.com/ereinha3/CS471-Intro-To-AI/tree/main/reinforcement",
        category: "machineLearning"
    },
    {
        title: "EasyA",
        description: "This application's purpose is to create a GUI environment to help students determine which class is the easiest to meet their requirements. This dynamically queries UO's way-back machine.",
        skills: ["Python", "BeautifulSoup", "Tkinter", "Database Management"],
        link: "https://github.com/ereinha3/Easy-A",
        category: "softwareDevelopment"
    },
    {
        title: "Characteristic Analysis of Randomly Generated Polynomials",
        description: "A grant-funded research project with the goal of finding explicit likelihoods of real polynomial roots in arbitrary dimensions. We also looked into likelihood of shapes for conic sections and quadric surfaces.",
        skills: ["Python", "Applied Mathematics", "Collaborative Research", "Jupyter"],
        link: "https://github.com/ereinha3/Characteristic-Analysis-of-Randomly-Generate-Polynomials",
        category: "softwareDevelopment"
    },
    {
        title: "ChromaCollapse",
        description: "This was a project started in CS410: Game Programming, with plans to continue development this summer. More updates will be provided as development occurs. Click to go play!",
        skills: ["Unity", "C#", "GitHub"],
        link: "https://play.unity.com/mg/other/webgl-b6o",
        category: "softwareDevelopment"
    },
];

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category>('showcase');
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
        <div ref={ref} className="animate-ready w-[85%] md:w-[70%] my-[20vh] md:my-[40vh] mx-auto flex flex-col items-center justify-center" id="projects">
            <div className="animate-ready delay-100 text-center text-[2.5rem] mb-[5vh] md:my-[10vh] mx-auto">Projects</div>
            
            {/* Introduction Text */}
            <div className="animate-ready delay-200 w-full text-center mb-12">
                <p className="text-[1.25rem] md:text-[1.5rem] tracking-[.1rem]">
                    I love working with Generative AI and Graph Machine Learning, 
                    improving code efficiency through parallelism, and exploring their intersection. 
                    Below are selected projects that showcase my diverse skill set.
                </p>
            </div>

            {/* Category Filters */}
            <div className="animate-ready delay-300 flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
                {['Showcase', 'Software Development', 'Machine Learning', 'Parallelism'].map((category) => {
                    const categoryValue = category === 'Showcase' ? 'showcase' : 
                        category === 'Software Development' ? 'softwareDevelopment' :
                        category === 'Machine Learning' ? 'machineLearning' : 'parallelism';
                    
                    return (
                        <button
                            key={category}
                            className={`px-6 py-2 rounded-full transition-all duration-300 text-[1.25rem] md:text-[1.5rem] tracking-[.1rem]
                                ${selectedCategory === categoryValue ? 
                                    'bg-black text-white shadow-lg' : 
                                    'bg-gray-100 hover:bg-gray-200'}`}
                            onClick={() => setSelectedCategory(categoryValue === selectedCategory ? null : categoryValue)}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>

            {/* Projects Grid */}
            <div className="animate-ready delay-400 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {projectData.map((project, index) => (
                    <div key={index} 
                         className={`${
                             selectedCategory === 'showcase' ? 
                                 (index < 3 ? 'block' : 'hidden') : // Only show first 3 projects for showcase
                                 selectedCategory === project.category || selectedCategory === null ? 
                                     'block' : 'hidden'
                         }`}>
                        <a href={project.link}
                           className="block group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full">
                            <div className="p-6 flex flex-col h-full">
                                <h3 className="text-[1.25rem] md:text-[1.5rem] tracking-[.1rem] font-semibold mb-3 group-hover:text-[#AAA] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-[1rem] md:text-[1.25rem] tracking-[.1rem] mb-4 flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.skills.map((skill) => (
                                        <span key={skill} 
                                              className="px-3 py-1 bg-gray-100 text-[0.9rem] md:text-[1rem] tracking-[.1rem] rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;