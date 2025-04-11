import React from 'react';
import headshot from '../img/headshot.jpg';

const About = () => {
  return (
    <div className="w-[70%] my-[40vh] mx-auto flex flex-col items-center justify-center" id="about">
      <div className="text-center text-[2.5rem] my-[10vh] mx-auto">About Me</div>
      <div className="my-[4vh] mx-auto w-full flex items-center justify-center flex-row">
        <div className="text-[1.5rem] tracking-[.1rem] w-[55%] mr-[10%]">
          <p className="indent-8">
            I'm currently an incoming Computer Science Master's student enrolled in the University of Oregon Accelerate Master's program. 
            I will be starting this program in the upcoming Winter 2025 term. I am also a fourth-year Applied Mathematics student at the University of Oregon. 
            I am also a proud member of the Alpha Tau Omega Fraternity at University of Oregon.
          </p>
          <p className="indent-8">
            I am looking forward to start research under Professor Yu Wang in the domain of Graph Machine Learning. 
            Outside of tech, I love expressing my creativity in art and playing guitar. I am passionate about physical fitness and lift weights frequently. 
            I also enjoy buildering and hiking.
          </p>
          <p className="indent-8">
            I love meeting new people and making new connections. 
            If you like what you see or want to learn more, please reach out!
          </p>
        </div>
        <div className="w-[24vw] h-[32vw] rounded-[5%] shadow-custom overflow-hidden">
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