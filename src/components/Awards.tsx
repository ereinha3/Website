import { useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Achievements = () => {
  const ref = useScrollAnimation();

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add('animate-in');

      const childElements = ref.current.querySelectorAll('.animate-ready');
      childElements.forEach(element => {
        element.classList.add('animate-in');
      });
    }
  }, []);

  const achievements = [
    {
      title: '1st Place - BeaverHacks 2025',
      description: 'Built a AI dermatologist capable of classifying skin diseases and benign/malignant lesions.',
      link: 'https://dermoai.com'
    },
    {
      title: '3rd Place - QuackHacks 2024',
      description: 'Build an AI sports statistics predictor to predict NBA team points and WL%',
      link: 'https://beatthebooks.co'
    },
    {
      title: '3rd Place - HackUO 2024',
      description: 'Built an AI powered personal assistant capable of summarizing documents, saving notes for websites, and generating citations.',
      link: 'https://github.com/itaymev/personal-assistant-extension/'
    },
    {
      title: 'Dean’s List - University of Oregon',
      description: 'Awarded for outstanding academic performance in consecutive terms.',
      link: '/resume.pdf'
    },
    {
      title: 'Undergraduate Research Scholar (2x)',
      description: 'Selected to participate in NSF-sponsored research under Joe Dufek and Nicolas Addington.',
      link: '/resume.pdf'
    }
  ];

  return (
    <div ref={ref} id="achievements" className="animate-ready flex flex-col items-center justify-center w-screen mx-auto py-24 min-h-screen mt-[20vh] bg-gradient-to-r from-gray-0 to-gray-50">
      {/* Title Section */}
      <div className="animate-ready delay-250 flex flex-col items-center justify-center w-full mb-20 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center">Achievements</h2>
        <div className="h-[0.3rem] w-24 bg-black mb-8 animate-ready delay-300"></div>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl text-center animate-ready delay-350">
          A snapshot of some moments I'm especially proud of.
        </p>
      </div>

      {/* Achievements List */}
      <ul className="animate-ready delay-400 space-y-10 w-full max-w-5xl px-6">
        {achievements.map((item, index) => (
          <li key={index} className="group">
            <a 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-l-4 border-black pl-6 pr-4 py-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg hover:bg-gray-50"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-black group-hover:text-gray-700 transition-colors duration-200 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 text-md md:text-lg">
                {item.description}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
