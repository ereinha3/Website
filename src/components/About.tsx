import React from 'react';
import headshot from '../img/headshot.jpg';

const About = () => {
  return (
    <div className="w-[85%] md:w-[70%] my-[20vh] md:my-[40vh] mx-auto flex flex-col items-center justify-center" id="about">
      <div className="text-center text-[2.5rem] mb-[5vh] md:my-[10vh] mx-auto">About Me</div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-[8vh] md:gap-0">
        <div className="text-[1.25rem] md:text-[1.5rem] tracking-[.1rem] w-full md:w-[55%] md:mr-[10%] text-center">
          <p className="mb-4">
            I am a Computer Science Master's student at the University of Oregon. 
            I have completed my Bachelor's in Computer Science, with a concentration in AI, and my Bachelor's in Applied Mathematics, both also at the University of Oregon.
            I am an alumni of the Alpha Tau Omega Fraternity at University of Oregon.
          </p>
          <p className="mb-4">
            I am currently researching Recommender Systems, RAG architecture, and LLM evaluation under Professor Yu Wang.
            I am passionate about leveraging my software knowledge for entrepreneurship and am currently working on two start-ups.
            I am passionate about physical fitness and lift weights frequently. 
          </p>
          <p>
            I love meeting new people and making new connections. 
            Make sure to connect with me on <a href="https://www.linkedin.com/in/ethan-reinhart-3bb28b285/" className="hover:text-[#AAA]">LinkedIn</a>. <span className="font-bold">Big things coming soon.</span>
          </p>
        </div>
        <div className="hidden md:block w-[24vw] h-[32vw] rounded-[5%] shadow-custom overflow-hidden">
          <img 
            className="w-full h-full object-cover"
            src={headshot} 
            alt="Head Shot" 
          />
        </div>
      </div>
    </div>
  );
}

export default About;