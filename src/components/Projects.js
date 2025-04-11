import React, {useState} from 'react';

const projects = {
    softwareDevelopment: [
      'Guppy - Integrated payment portal for student organizations',
      'Portfolio Website - Showcasing my work and skills',
    ],
    machineLearning: [
      'Balloon Path Prediction using GraphCast',
      'Neural Network for Atmospheric Condition Prediction',
    ],
    parallelism: [
      'Ray-based parallel processing for simulation tasks',
      'Distributed deep learning for large-scale datasets',
    ],
  };
  
  const ProjectCategory = ({ title, projects }) => (
    <div className="my-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <ul className="list-disc pl-6">
        {projects.map((project, index) => (
          <li key={index} className="mb-1">
            {project}
          </li>
        ))}
      </ul>
    </div>
  );

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    return (
        <div className="projects" id="projects">
            <div className="projects-title">Projects</div>
            <div className="flex flex-col items-center justify-center">
                <div className="projects-text">
                    <p className="tabbed-paragraph">
                        I love working with Generative AI and Graph Machine Learning. 
                        I love improving the effeciency of code I write through parallelism. 
                        I am especially passionate about the intersection of two two: making my models faster through parallelism and hardware optimization.
                        Aside from these, I have extensive curricular and some extra-curricular projects showing my versatile background below. 
                        Listed below are all projects I have determined display a unique skill. I have many more projects on my GitHub that are similar to those presented.
                        Click any project for more information.
                    </p>
                </div>
                <div className="flex space-x-8 mb-6 mt-12">
                    <button
                    className={`text-xl tracking-wider font-semibold hover:text-slate-700 hover:underline underline-offset-[0.75em] ${
                        selectedCategory === null ? 'underline underline-offset-[0.75em] text-slate-700' : ''
                    }`}
                    onClick={() =>
                        setSelectedCategory(null)
                    }
                    >
                        All
                    </button>
                    <button
                    className={`text-xl tracking-wider font-semibold hover:text-slate-700 hover:underline underline-offset-[0.75em] ${
                        selectedCategory === 'softwareDevelopment' ? 'underline underline-offset-[0.75em] text-slate-700' : ''
                    }`}
                    onClick={() =>
                        setSelectedCategory(selectedCategory === 'softwareDevelopment' ? null : 'softwareDevelopment')
                    }
                    >
                    Software Development
                    </button>
                    <button
                    className={`text-xl tracking-wider font-semibold hover:text-slate-700 hover:underline underline-offset-[0.75em] ${
                        selectedCategory === 'machineLearning' ? 'underline underline-offset-[0.75em] text-slate-700' : ''
                    }`}
                    onClick={() =>
                        setSelectedCategory(selectedCategory === 'machineLearning' ? null : 'machineLearning')
                    }
                    >
                    Machine Learning
                    </button>
                    <button
                    className={`text-xl tracking-wider font-semibold hover:text-slate-700 hover:underline underline-offset-[0.75em] ${
                        selectedCategory === 'parallelism' ? 'underline underline-offset-[0.75em] text-slate-700' : ''
                    }`}
                    onClick={() =>
                        setSelectedCategory(selectedCategory === 'parallelism' ? null : 'parallelism')
                    }
                    >
                    Parallelism
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-12">
                    
                    <div className={`${selectedCategory === 'parallelism' || selectedCategory === null ? 'flex' : 'hidden'} w-[100%]`}>
                        <a className="project" href="https://bitbucket.org/daxs-repo/uoregon-cs431531-f24-group/src/main/">
                            <div className="project-title">
                                <p>
                                    Parallelized N-Body Barnes-Hut Simulation
                                </p>
                            </div>

                            <div className="project-description">
                                N-Body simulations are an embarassingly parallel application. However, runtime still scales quadratically with regard to particle counts. The Barnes-Hut approximation attempts to conserves accuracy while greatly increasing performance. 
                            </div>
                            <div className="project-skills">
                                <div className="project-skill">
                                    Cuda
                                </div>
                                <div className="project-skill">
                                    OpenMP
                                </div>
                                <div className="project-skill">
                                    Parallelism
                                </div>
                                <div className="project-skill">
                                    C++
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className={`${selectedCategory === 'machineLearning' || selectedCategory === null ? 'flex' : 'hidden'} w-[100%]`}>
                        <a className="project" href="https://github.com/ereinha3/CS471-Intro-To-AI/tree/main/reinforcement">
                            <div className="project-title">
                                <p>
                                    Reinforcement Learning on PacMan
                                </p>
                            </div>

                            <div className="project-description">
                                PacMan consists of a finite world with a simple set of rules allowing for machine learning with little computation. I define policies for PacMan as well as use Q-learning to help PacMan eat all the dots and escape the ghosts.
                            </div>
                            <div className="project-skills">
                                <div className="project-skill">
                                    Q-Learning
                                </div>
                                <div className="project-skill">
                                    Value-Iteration
                                </div>
                                <div className="project-skill">
                                    Python
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className={`${selectedCategory === 'machineLearning' || selectedCategory === null ? 'flex' : 'hidden'} w-[100%]`}>
                        <a className="project" href="https://github.com/ereinha3/CS471-Intro-To-AI/tree/main/reinforcement">
                            <div className="project-title">
                                <p>
                                    Performance Comparison of Node Classification over Multiple GNNs
                                </p>
                            </div>

                            <div className="project-description">
                                GNNs (Graph Neural Networks) posses the capabilities to consider graph architecture when making predictions. This is largely due to the label propagation algorithm that seeds classifactions and updates these classifications based on neighboring nodes.
                            </div>
                            <div className="project-skills">
                                <div className="project-skill">
                                    Q-Learning
                                </div>
                                <div className="project-skill">
                                    Value-Iteration
                                </div>
                                <div className="project-skill">
                                    Python
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className={`${selectedCategory === 'parallelism' || selectedCategory === null ? 'flex' : 'hidden'} w-[100%]`}>
                        <a className="project" href="https://github.com/ereinha3/CS431-Intro-to-Parallel-Computing/tree/main/homework03">
                            <div className="project-title">
                                <p>
                                    Parallelized SPMV with OpenMP
                                </p>
                            </div>

                            <div className="project-description">
                                SPMV (Sparse Matrix Vector Multiplication) provides a faster solution to a multiply large sparse (mostly zeros) matrix with a dense (mostly nonzeros) vector.
                            </div>
                            <div className="project-skills">
                                <div className="project-skill">
                                    SPMV
                                </div>
                                <div className="project-skill">
                                    OpenMP
                                </div>
                                <div className="project-skill">
                                    C++
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className={`${selectedCategory === 'machineLearning' || selectedCategory === null ? 'flex' : 'hidden'} w-[100%]`}>
                        <a className="project" href="https://github.com/ereinha3/Watch-Profits-Soar-to-the-Ether">
                            <div className="project-title">
                                <p>
                                    Watch Profits Soar to the Ether
                                </p>
                            </div>

                            <div className="project-description">
                                The volatility of cryptocurrency prices make them difficult to predict compared to stable fiat currencies. 
                                We analyze the market trends of Ether, one of the most widely used cryptocurrencies, and attempt to train various RNNs to predict future Ether prices. 
                            </div>
                            <div className="project-skills">
                                <div className="project-skill">
                                    Python
                                </div>
                                <div className="project-skill">
                                    TensorFlow
                                </div>
                                <div className="project-skill">
                                    Data Processing
                                </div>
                                <div className="project-skill">
                                    Model Optimization
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className={`${selectedCategory === 'machineLearning' || selectedCategory === null ? 'flex' : 'hidden'}`}>
                        <a className="project" href="https://github.com/ereinha3/Neural-Style-Transfer-Network?tab=readme-ov-file">
                            <div className="project-title">
                                <p>
                                    Neural Style Transfer
                                </p>
                            </div>
                            <div className="project-description">
                                This project sought to create abstract art by using a CycleGAN network trained on two datasets: people and lymph-node sections. 
                                The project was inspired by combining my passion for art and Machine Learning. 
                            </div>
                            <div className="project-skills">
                                <div className="project-skill">
                                    Python
                                </div>
                                <div className="project-skill">
                                    Generative AI
                                </div>
                                <div className="project-skill">
                                    TensorFlow
                                </div>
                                <div className="project-skill">
                                    Model Optimization
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className={`${selectedCategory === 'softwareDevelopment' || selectedCategory === null ? 'flex' : 'hidden'}`}>
                        <a className="project" href="https://github.com/ereinha3/Whats-Up-Dawg">
                            <div className="project-title">
                                <p>
                                    What's Up Dawg?
                                </p>
                            </div>
                            <div className="project-description">
                                6.3 million dogs are surrendered to shelters every year. 
                                What's the solution to this? Better educated owners.
                                We've created a simulation game about the life of a dog and its human, detailing the costs and work required in being a responsible dog owner.
                            </div>
                            <div className="project-skills">
                                <div className="project-skill">
                                    Python
                                </div>
                                <div className="project-skill">
                                    Tkinter
                                </div>
                                <div className="project-skill">
                                    Data Processing
                                </div>
                                <div className="project-skill">
                                    Model View Controller
                                </div>
                                <div className="project-skill">
                                    Database Management
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className={`${selectedCategory === 'softwareDevelopment' || selectedCategory === null ? 'flex' : 'hidden'}`}>
                        <a href="https://github.com/ereinha3/ereinha3.github.io" className="project">
                            <div className="project-title">
                                <p>
                                    Personal Portfolio
                                </p>
                            </div>
                            <div className="project-description">
                                This was designed in React using JSX and CSS. What do you think? You're looking at it right now!
                            </div>
                            <div className="project-skills">
                                <div className="project-skill">
                                    React
                                </div>
                                <div className="project-skill">
                                    JSX
                                </div>
                                <div className="project-skill">
                                    CSS
                                </div>
                                <div className="project-skill">
                                    JavaScript
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className={`${selectedCategory === 'parallelism' || selectedCategory === null ? 'flex' : 'hidden'}`}>
                        <a href="https://github.com/ereinha3/Operating-Systems/tree/main/Project3" className="project">
                            <div className="project-title">
                                <p>
                                    Duck Bank
                                </p>
                            </div>
                            <div className="project-description">
                                This project was designed to simulate parallelized bank transaction processing. 
                                This was implemented in C using Posix Threads.
                            </div>
                            <div className="project-skills">
                                <div className="project-skill">
                                    C
                                </div>
                                <div className="project-skill">
                                    Multi-Threading
                                </div>
                                <div className="project-skill">
                                    File IO
                                </div>
                                <div className="project-skill">
                                    Resource Management
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className={`${selectedCategory === 'softwareDevelopment' || selectedCategory === null ? 'flex' : 'hidden'}`}>
                        <a href="https://github.com/ereinha3/Easy-A" className="project">
                            <div className="project-title">
                                <p>
                                    EasyA
                                </p>
                            </div>
                            <div className="project-description">
                                This application's purpose is to create a GUI environment to help students determine which class is the easiest to meet their requirements. 
                                This dynamically queries UO's way-back machine.
                            </div>
                            <div className="project-skills">
                                <div className="project-skill">
                                    Python
                                </div>
                                <div className="project-skill">
                                    BeautifulSoup
                                </div>
                                <div className="project-skill">
                                    Tkinter
                                </div>
                                <div className="project-skill">
                                    Database Management
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className={`${selectedCategory === 'softwareDevelopment' || selectedCategory === null ? 'flex' : 'hidden'}`}>
                        <a href="https://github.com/ereinha3/Characteristic-Analysis-of-Randomly-Generate-Polynomials" className="project">
                            <div className="project-title">
                                <p>
                                    Characteristic Analysis of Randomly Generated Polynomials
                                </p>
                            </div>
                            <div className="project-description">
                                A grant-funded research project with the goal of finding explicit likelihoods of real polynomial roots in arbitrary dimensions. 
                                We also looked into likelihood of shapes for conic sections and quadric surfaces.
                            </div>
                            <div className="project-skills">
                                <div className="project-skill">
                                    Python
                                </div>
                                <div className="project-skill">
                                    Applied Mathematics
                                </div>
                                <div className="project-skill">
                                    Collaborative Research
                                </div>
                                <div className="project-skill">
                                    Jupyter
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className={`${selectedCategory === 'softwareDevelopment' || selectedCategory === null ? 'flex' : 'hidden'}`}>
                        <a className="project" href="https://play.unity.com/mg/other/webgl-b6o">
                            <div className="project-title">
                                <p>
                                    ChromaCollapse
                                </p>
                            </div>

                            <div className="project-description">
                                This was a project started in CS410: Game Programming, with plans to continue development this summer.
                                More updates will be provided as development occurs. 
                                Click to go play!
                            </div>
                            <div className="project-skills">
                                <div className="project-skill">
                                    Unity
                                </div>
                                <div className="project-skill">
                                    C#
                                </div>
                                <div className="project-skill">
                                    GitHub
                                </div>
                            </div>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Projects;