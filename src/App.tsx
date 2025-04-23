import { useEffect, useRef } from 'react';

import './App.css'; 
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Icons from './components/Icons';
import ChatBot from './components/ChatBot/ChatBot';
import CurrentlyWorkingOn from './components/CurrentlyWorkingOn';

const App = () => {
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add scroll padding to account for fixed navbar
    document.documentElement.style.scrollPadding = '120px 0 0 0';
    
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    let lastScrollTop = 0;

    // Listen for scroll events
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      // If user scrolled down and navbar is not already hidden, hide it
      if (currentScroll > lastScrollTop && !navbar.classList.contains('navbar-hidden')) {
        navbar.classList.add('navbar-hidden');
      } 
      // If user scrolled up and navbar is hidden, show it
      else if (currentScroll < lastScrollTop && navbar.classList.contains('navbar-hidden')) {
        navbar.classList.remove('navbar-hidden');
      } 
      lastScrollTop = currentScroll;
    });
  }, []);

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
      <Navbar ref={navbarRef} />
      <Intro/>
      <CurrentlyWorkingOn/>
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

