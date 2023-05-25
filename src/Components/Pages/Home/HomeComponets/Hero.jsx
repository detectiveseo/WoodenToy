import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero py-20 lg:py-44 flex overflow-hidden">
            <div
            data-aos="fade-right"
            className='lg:w-10/12 w-full mx-auto flex flex-col gap-3 items-center lg:items-start font-bold text-white text-center lg:text-left'>
                <h1 className='text-4xl lg:text-7xl'>Better Kids,<br/> Better World</h1>
                <p>Through Sustainable Play</p>
                <button className='bg-slate-300 py-3 px-5 btn text-black'>Shop Now</button>
            </div>
        </div>
    );
};

export default Hero;