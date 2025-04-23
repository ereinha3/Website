import { forwardRef, useState, useEffect } from 'react';

const Navbar = forwardRef<HTMLDivElement>((_, ref) => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if page is scrolled
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
            
            // Determine active section based on scroll position
            const sections = ['currently-working-on', 'about', 'experience', 'projects', 'contact'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false); // Close mobile menu after clicking
        }
    };

    const navItems = [
        { id: 'currently-working-on', label: 'Current Work' },
        { id: 'about', label: 'About Me' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
        { 
            id: 'resume',
            label: 'Resume',
            href: '/resume.pdf',
            external: true
        }
    ];

    return (
        <nav 
            className={`fixed w-full px-6 md:px-12 transition-all duration-300 z-10 ${
                scrolled 
                    ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 top-0' 
                    : 'bg-transparent py-5 top-0'
            }`}
            id="navbar" 
            ref={ref}
        >
            <div className="flex flex-row justify-between items-center">
                {/* Logo */}
                <div className="w-[8vh] h-[8vh]">
                    <svg id="svgContainer" className="h-full" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            id="pen1" 
                            className="stroke-black stroke-2 fill-none animate-draw1" 
                            style={{ strokeDasharray: '192.5', strokeDashoffset: '385' }}
                            d="M 2.0 2.0 L 62.0 2.0 L 62.0 17.0 L 17.0 17.0 L 17.0 32.0 L 42.0 32.0 L 42.0 47.0 L 17.0 47.0 L 17.0 62.0 L 77.0 62.0 L 77.0 107.0 L 57.6066017178 107.0 L 77.0 147.0"
                        />
                        <path 
                            id="pen2" 
                            className="stroke-black stroke-2 fill-none animate-draw2" 
                            style={{ strokeDasharray: '135.5', strokeDashoffset: '271' }}
                            d="M 2.0 2.0 L 2.0 77.0 L 32.0 77.0 L 32.0 147.0 L 47.0 147.0 L 47.0 117.606601718 L 62.0 147.0 L 77.0 147.0"
                        />
                        <path 
                            id="pen3" 
                            className="stroke-black stroke-2 fill-none animate-draw3" 
                            style={{ strokeDasharray: '30', strokeDashoffset: '60' }}
                            d="M 62.0 92.0 L 62.0 77.0 L 47.0 77.0 L 47.0 92.0 L 62.0 92.0"
                        />        
                    </svg>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map(({ id, label, href, external }) => (
                        external ? (
                            <a 
                                key={id}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base font-medium tracking-wide text-gray-600 hover:text-black transition-colors duration-300"
                            >
                                {label}
                            </a>
                        ) : (
                            <a 
                                key={id}
                                href={`#${id}`} 
                                onClick={(e) => handleClick(e, id)}
                                className={`text-base font-medium tracking-wide transition-all duration-300 relative group ${
                                    activeSection === id 
                                        ? 'text-black' 
                                        : 'text-gray-600 hover:text-black'
                                }`}
                            >
                                {label}
                                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-black transform origin-left transition-transform duration-300 ${
                                    activeSection === id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                }`}></span>
                            </a>
                        )
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-gray-600 hover:text-black transition-colors duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute left-0 right-0 top-full bg-white/95 backdrop-blur-md shadow-lg py-4 px-6 transition-all duration-300`}>
                {navItems.map(({ id, label, href, external }) => (
                    <div key={id} className="py-2">
                        {external ? (
                            <a 
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-base font-medium tracking-wide text-gray-600 hover:text-black transition-colors duration-300"
                            >
                                {label}
                            </a>
                        ) : (
                            <a 
                                href={`#${id}`} 
                                onClick={(e) => handleClick(e, id)}
                                className={`block text-base font-medium tracking-wide transition-all duration-300 ${
                                    activeSection === id 
                                        ? 'text-black' 
                                        : 'text-gray-600 hover:text-black'
                                }`}
                            >
                                {label}
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
});

Navbar.displayName = 'Navbar';

export default Navbar;