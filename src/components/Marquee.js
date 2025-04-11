import React, { useEffect, useState } from 'react';

const Marquee = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop && !hidden) {
        setHidden(true);
      } else if (currentScroll < lastScrollTop && hidden) {
        setHidden(false);
      }

      setLastScrollTop(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop, hidden]);

  return (
    <header className={`marquee ${hidden ? 'marquee-hidden' : ''}`} id="marquee">
      <div className="marquee-text" id="marquee-text">
        Thank you for checking out my portfolio!
      </div>
    </header>
  );
};

export default Marquee;
