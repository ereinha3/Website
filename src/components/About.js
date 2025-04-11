import React from 'react';
import climbingImg from '../img/climbing.jpeg';
import headshot from '../img/ProHeadshot.JPG';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">About Me</div>
      <div className="about-content">
        <div className="about-text">
          <p className="tabbed-paragraph">
            I'm currently an incoming Computer Science Master's student enrolled in the University of Oregon Accelerate Master's program. 
            I will be starting this program in the upcoming Winter 2025 term. I am also a fourth-year Applied Mathematics student at the University of Oregon. 
            I am also a proud member of the Alpha Tau Omega Fraternity at University of Oregon.
          </p>
          <p className="tabbed-paragraph">
            I am looking forward to start research under Professor Yu Wang in the domain of Graph Machine Learning. 
            Outside of tech, I love expressing my creativity in art and playing guitar. I am passionate about physical fitness and lift weights frequently. 
            I also enjoy buildering and hiking.
          </p>
          <p className="tabbed-paragraph">
            I love meeting new people and making new connections. 
            If you like what you see or want to learn more, please reach out!
          </p>
        </div>
        <div className="about-image">
          <img className="front-image" src={headshot} alt="Headshot" />
          <img className="back-image" src={climbingImg} alt="Climbing" />
        </div>
      </div>
    </div>
  );
}

export default About;
