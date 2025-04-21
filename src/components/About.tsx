import React, { useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Carousel from './Carousel';

const About = () => {
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

  // Carousel images from the public/carousel directory
  const carouselImages = [
    '/carousel/coding.JPG',
    '/carousel/another_good_one_from_beaverhacks.jpg',
    '/carousel/beaverhacks_team_2.jpg',
    '/carousel/best_beaverhacks.jpg',
    '/carousel/beaverhacks_team.jpg',
    '/carousel/me_coding.JPG',
    '/carousel/quackhacks_presentation.JPG',
    '/carousel/beaverhacks_pres_2.jpg',
    '/carousel/even_more_beaverhacks_team.jpg',
    '/carousel/beaverhacks_pres_1.jpg',
    '/carousel/quackhacks_dub.JPG',
    '/carousel/beaverhacks_with_peter.JPG',
    '/carousel/more_beaverhacks_team.jpg'
  ];

  return (
    <div ref={ref} className="animate-ready w-[85%] md:w-[70%] my-[20vh] md:my-[40vh] mx-auto flex flex-col items-center justify-center" id="about">
      <div className="animate-ready delay-100 text-center text-[2.5rem] mb-[5vh] md:my-[10vh] mx-auto">About Me</div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-[8vh] md:gap-0">
        <div className="animate-ready delay-200 text-[1.25rem] md:text-[1.5rem] tracking-[.1rem] w-full md:w-[55%] md:mr-[10%] text-center">
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
        <div className="animate-ready delay-300 w-[400px] h-[400px]">
          <Carousel images={carouselImages} interval={3000} />
        </div>
      </div>
    </div>
  );
}

export default About;