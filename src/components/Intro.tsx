import { useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Intro = () => {
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
    
    return (
        <div ref={ref} className="animate-ready flex flex-col items-center justify-center w-screen mx-auto my-[25vh] mb-[20vh] relative">
            <div className="animate-ready delay-100 flex w-[60vw] justify-center text-[2vh] text-center">Welcome! My name is</div>
            <div className="animate-ready delay-200 mt-[3vh] flex w-[60vw] justify-center text-center text-[8vh]">Ethan Reinhart.</div>
            <div className="animate-ready delay-300 mt-[2vh] flex w-[80vw] justify-center text-[5vh] text-center">I am passionate about improving accuracy and efficiency in AI.</div>
            <div className="animate-ready delay-400 mt-[2vh] w-[80vw] justify-center text-center text-[2vh] py-[1vh]">I am currently working on...
                <ol className="my-[1em] text-[2.5vh]">
                    <li className='my-[0.5em]'> 
                        <span className='font-bold'><a className='hover:text-slate-600' href='/transcript.pdf'>Master's</a></span> in Computer Science at University of Oregon
                    </li>
                    <li className='my-[0.5em]'>Graduate <span className='font-bold'><a className='hover:text-slate-600' href='https://github.com/ereinha3/HOUSER'>Research</a></span> under Professor Yu Wang</li>
                    <li className='my-[0.5em]'><span className='font-bold'><a className='hover:text-slate-600' href='http://www.dermoai.com/'>Dermo</a></span>, a start-up to provide AI dermotology advice for free to all users</li>
                    <li className='my-[0.5em]'><span className='font-bold'><a className='hover:text-slate-600' href='http://www.beatthebooks.co/'>Beat the Books</a></span>, a start-up providing users with sports predictions</li>
                </ol>
                ...but I am always looking for a new challenge!
            </div>
        </div>
    );
}

export default Intro;