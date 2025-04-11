import React from 'react';

const Intro = () => {
    return (
        <div className="flex flex-col items-center justify-center w-screen mx-auto my-[25vh] mb-[20vh] relative">
            <div className="flex w-[60vw] justify-center text-[2vh] text-center">Welcome! My name is</div>
            <div className="mt-[3vh] flex w-[60vw] justify-center text-center text-[8vh]">Ethan Reinhart.</div>
            <div className="mt-[2vh] flex w-[80vw] justify-center text-[5vh] text-center">I am passionate about improving accuracy and efficiency in AI.</div>
            <div className="mt-[2vh] w-[80vw] justify-center text-center text-[2vh] py-[1vh]">I am currently working on...
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