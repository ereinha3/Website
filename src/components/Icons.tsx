import React, { useState } from 'react';

const svgIcons = {
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.84 10.94.57.1.78-.25.78-.56v-2.13c-3.19.7-3.87-1.37-3.87-1.37-.52-1.3-1.26-1.64-1.26-1.64-1.03-.7.08-.68.08-.68 1.14.08 1.74 1.17 1.74 1.17 1.02 1.74 2.67 1.24 3.33.95.1-.74.4-1.25.73-1.54-2.55-.3-5.24-1.27-5.24-5.65 0-1.25.44-2.28 1.17-3.08-.12-.3-.51-1.5.11-3.13 0 0 .97-.31 3.18 1.17.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.21-1.48 3.18-1.17 3.18-1.17.62 1.63.23 2.83.11 3.13.73.8 1.17 1.83 1.17 3.08 0 4.39-2.7 5.34-5.27 5.63.41.36.77 1.08.77 2.17v3.22c0 .31.21.66.79.55C20.72 21.4 24 17.09 24 12c0-6.35-5.15-11.5-12-11.5z"/>
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.75v2.34h.07c.66-1.24 2.27-2.54 4.68-2.54C20.91 7.8 22 10.34 22 14.12V24h-5v-8.5c0-2.03-.04-4.65-2.83-4.65-2.84 0-3.27 2.22-3.27 4.5V24h-5V8z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M12 12.713l11.985-7.713H0.015L12 12.713zM12 14.587L0 6.14V18h24V6.14L12 14.587z" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.004 1.004 0 011.11-.21c1.2.5 2.52.77 3.88.77a1 1 0 011 1v3.5a1 1 0 01-1 1C9.39 22 2 14.61 2 5.5A1 1 0 013 4.5h3.5a1 1 0 011 1c0 1.36.26 2.68.77 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" />
    </svg>
  ),
  menu: (
    <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  close: (
    <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
      <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
};

const Icons = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const socialLinks = [
    { href: 'https://github.com/ereinha3', label: 'GitHub Profile', icon: svgIcons.github },
    { href: 'https://www.linkedin.com/in/ethan-reinhart-3bb28b285/', label: 'LinkedIn Profile', icon: svgIcons.linkedin },
    { href: 'mailto:ereinha3@uoregon.edu', label: 'Email Me', icon: svgIcons.email },
    { href: 'tel:+13108036441', label: 'Call Me', icon: svgIcons.phone }
  ];

  return (
    <>
      <div className={`fixed flex flex-col items-center ${isExpanded ? 'bottom-[15vh] gap-4' : 'bottom-[5vh] gap-0'} left-4 sm:left-6 md:left-8 transition-all duration-300 ease-in-out z-30`}>
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-white rounded-full shadow-md hover:scale-110 hover:shadow-lg transition-all duration-200 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
            aria-label={link.label}
            style={{ transitionDelay: isExpanded ? `${index * 50}ms` : '0ms' }}
          >
            {link.icon}
          </a>
        ))}
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="fixed bottom-[5vh] left-4 sm:left-6 md:left-8 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-black hover:bg-gray-800 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 z-40"
        aria-label={isExpanded ? 'Close social links' : 'Open social links'}
        aria-expanded={isExpanded}
      >
        {isExpanded ? svgIcons.close : svgIcons.menu}
      </button>
    </>
  );
};

export default Icons;
