import { useState } from 'react';
import { 
    FaGithub, 
    FaLinkedin, 
    FaPhone,
    FaMedium
} from 'react-icons/fa';
import { 
    SiLeetcode 
} from 'react-icons/si';
import { 
    MdEmail 
} from 'react-icons/md';
import { 
    RiMenuFill, 
    RiCloseFill 
} from 'react-icons/ri';

const Icons = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const iconContainerClasses = `
        fixed flex flex-col items-center
        ${isExpanded ? 'bottom-[15vh]' : 'bottom-[5vh]'}
        left-4 sm:left-6 md:left-8
        transition-all duration-300 ease-in-out
        ${isExpanded ? 'gap-3 sm:gap-4' : 'gap-0'}
        z-30
    `;

    const iconClasses = `
        w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
        flex items-center justify-center
        bg-white rounded-full shadow-md
        hover:scale-110 hover:shadow-lg
        transition-all duration-200
        ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
    `;

    const iconStyle = {
        size: '55%',
        className: "text-black hover:text-gray-700 transition-colors duration-200"
    };

    const toggleStyle = {
        size: '55%',
        className: "text-white transition-colors duration-200"
    };

    const toggleButtonClasses = `
        fixed 
        bottom-[5vh] 
        left-4 sm:left-6 md:left-8
        w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
        flex items-center justify-center
        bg-black hover:bg-gray-800
        text-white
        rounded-full 
        shadow-lg hover:shadow-xl
        hover:scale-110 
        transition-all duration-200
        z-40
    `;

    const socialLinks = [
        {
            href: "https://github.com/ereinha3",
            label: "GitHub Profile",
            icon: <FaGithub size={iconStyle.size} className={iconStyle.className} />
        },
        {
            href: "https://www.linkedin.com/in/ethan-reinhart-3bb28b285/",
            label: "LinkedIn Profile",
            icon: <FaLinkedin size={iconStyle.size} className={iconStyle.className} />
        },
        {
            href: "https://leetcode.com/u/ereinha/",
            label: "LeetCode Profile",
            icon: <SiLeetcode size={iconStyle.size} className={iconStyle.className} />
        },
        {
            href: "https://medium.com/@ethanreinhart",
            label: "Medium Blog",
            icon: <FaMedium size={iconStyle.size} className={iconStyle.className} />
        },
        {
            href: "mailto:ereinha3@uoregon.edu",
            label: "Email Me",
            icon: <MdEmail size={iconStyle.size} className={iconStyle.className} />
        },
        {
            href: "tel:+13108036441",
            label: "Call Me",
            icon: <FaPhone size={iconStyle.size} className={iconStyle.className} />
        }
    ];

    return (
        <>
            {/* Icons container */}
            <div className={iconContainerClasses}>
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        className={iconClasses}
                        aria-label={link.label}
                        style={{ 
                            transitionDelay: isExpanded ? `${index * 50}ms` : '0ms',
                            transform: isExpanded 
                                ? `translateY(0) scale(1)` 
                                : `translateY(${(socialLinks.length - index) * 10}px) scale(0.5)`
                        }}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>

            {/* Toggle button */}
            <button 
                className={toggleButtonClasses}
                onClick={() => setIsExpanded(!isExpanded)}
                aria-label={isExpanded ? "Close social links" : "Open social links"}
                aria-expanded={isExpanded}
            >
                {isExpanded ? (
                    <RiCloseFill size={iconStyle.size} className={toggleStyle.className} />
                ) : (
                    <RiMenuFill size={iconStyle.size} className={toggleStyle.className} />
                )}
            </button>
        </>
    );
};

export default Icons;