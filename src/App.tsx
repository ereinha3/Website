import React, { useEffect, useRef } from 'react';

import './App.css'; 
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Icons from './components/Icons';
import ChatBot from './components/ChatBot/ChatBot';


const App = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = document.getElementById('marquee');
    if (!marquee) return;
    
    const initialMarqueeOffsetTop = marquee.offsetTop;

    window.addEventListener('scroll', () => {
        if (window.scrollY > initialMarqueeOffsetTop) {
            marquee.classList.add("!text-white")
        }
    });

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.target = "_blank";
    });

    const overrides = document.getElementsByClassName('link_override');
    for (let i = 0; i < overrides.length; i++) {
      const element = overrides[i] as HTMLAnchorElement;
      element.target = "_self";
    }

    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    let lastScrollTop = 0;

    // Listen for scroll events
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      // If user scrolled down and navbar is not already hidden, hide it
      if (currentScroll > lastScrollTop && !navbar.classList.contains('navbar-hidden')) {
        navbar.classList.add('navbar-hidden');
        marquee.classList.add('marquee-hidden');
      } 
      // If user scrolled up and navbar is hidden, show it
      else if (currentScroll < lastScrollTop && navbar.classList.contains('navbar-hidden')) {
        navbar.classList.remove('navbar-hidden');
        marquee.classList.remove('marquee-hidden');
    } 
    lastScrollTop = currentScroll;
});
  } );

  useEffect(() => {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.target = '_blank';
    });

    const overrides = document.getElementsByClassName('link_override');
    for (let i = 0; i < overrides.length; i++) {
      const element = overrides[i] as HTMLAnchorElement;
      element.target = '_self';
    }
  }, []);

  
  return (
    <div className="App">
      <Marquee ref={marqueeRef} />
      <Navbar ref={navbarRef} />
      <Intro/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Icons/>
      <ChatBot />
    </div>
  );
};

export default App;

