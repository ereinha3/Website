import { useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Carousel from './Carousel';
import { motion } from 'framer-motion';

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
    <section id="about" className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 py-24 mt-[10vh]">
      <div ref={ref} className="animate-ready mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="animate-ready delay-100 flex items-center justify-center w-full mb-[10vh]">
          <div className="animate-ready delay-200 h-full w-[10vw] flex flex-col items-center justify-center">
            <div className="animate-ready delay-200 h-[0.3rem] w-full bg-black"/>
          </div>
          <h2 className="animate-ready delay-100 text-4xl md:text-5xl font-bold text-black mb-4 px-8">
            About Me
          </h2>
          <div className="animate-ready delay-200 h-full w-[10vw] flex flex-col items-center justify-center">
            <div className="animate-ready delay-200 h-[0.3rem] w-full bg-black"/>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <div className="space-y-8 ml-0 lg:ml-[10vw]">
            <div className="animate-ready delay-300 bg-white p-4 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Education & Research</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Currently pursuing a Master's in Computer Science at the University of Oregon. Researching Recommender Systems, RAG architecture, and LLM evaluation.
                <br/>
                Completed Bachelor's degrees in Computer Science (AI concentration) and Applied Mathematics.
              </p>
            </div>

            <div className="animate-ready delay-400 bg-white p-4 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Entrepreneurship</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Founded <a href="https://www.hartrach.com/" className="text-blue-600 hover:text-blue-800 transition-colors font-semibold">HartRach LLC</a>, a company focused on developing innovative solutions for the real world. <span className='font-bold text-xl'> Big things coming soon.</span>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Current Projects: 
                <a href="https://dermoai.com" className="text-blue-600 hover:text-blue-800 transition-colors font-semibold"> Dermo </a> 
                 and 
                <a href="http://www.beatthebooks.co/" className="text-blue-600 hover:text-blue-800 transition-colors font-semibold"> Beat the Books</a>.
              </p>
            </div>

            <div className="animate-ready delay-500 bg-white p-4 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Personal</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                I am passionate about weightlifting and have been lifting for 4 years.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I am a member of the Alpha Tau Omega fraternity and Oregon Quant Group.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I love meeting new people and making connections.<br></br> Let's connect on{' '}
                <a 
                  href="https://www.linkedin.com/in/ethan-reinhart-3bb28b285/" 
                  className="text-blue-600 hover:text-blue-800 transition-colors font-semibold"
                >
                  LinkedIn.
                </a>
              </p>
            </div>
          </div>

          {/* Right Column - Carousel */}
          <div className="animate-ready delay-300 relative flex items-center justify-center">
            <div className="relative w-[80vw] h-[80vw] lg:w-[40vw] lg:h-[40vw] border-[0.5vw] border-black rounded-full overflow-hidden shadow-[2vw_2vw_2vw_0vw_rgba(0,0,0,0.5)]">
              <Carousel images={carouselImages} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
