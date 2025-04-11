import React from 'react';

const Intro = () => {
    return (
        <div className="intro-container" id="intro">
            <div className="my-name-is">Welcome! My name is</div>
            <div className="ethan">Ethan Reinhart.</div>
            <div className="what-i-love">I am passionate about improving efficiency in AI.</div>
            <div className="mt-[2vh] w-[80vw] justify-center text-center text-[2vh] py-[1vh]">I am currently working on...
                <ol className="my-[1em] text-[2.5vh]">
                    <li className='my-[0.5em]'>University of Oregon Accelerated Computer Science <span className='font-bold'><a className='hover:text-slate-600' href='https://scds.uoregon.edu/cs/graduate-programs/accelerated'>Master's</a></span> Program</li>
                    <li className='my-[0.5em]'>Machine Learning <span className='font-bold'><a className='hover:text-slate-600' href='https://github.com/ereinha3'>Research</a></span> under Professor Yu Wang</li>
                    <li className='my-[0.5em]'><span className='font-bold'><a className='hover:text-slate-600' href='http://www.growguppy.com/'>Guppy</a></span>, my start-up to provide an integrated payment portal for student organizations</li>
                </ol>
                ...but I am always looking for a new challenge!
            </div>
        </div>
      );
}

export default Intro;