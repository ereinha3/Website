import { forwardRef, useEffect, useState } from 'react';

const Marquee = forwardRef<HTMLDivElement>((_, ref) => {
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
    <header className={`marquee ${hidden ? 'marquee-hidden' : ''}`} id="marquee" ref={ref}>
      <div className="marquee-text" id="marquee-text">
        Thank you for checking out my portfolio!
      </div>
    </header>
  );
});

Marquee.displayName = 'Marquee';

export default Marquee;
