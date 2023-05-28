import React, { Component } from 'react';
import Marquee from "react-fast-marquee";

import img1 from "../../../../img/01.webp";
import img2 from "../../../../img/02.jpg";
import img3 from "../../../../img/03.jpg";
import img4 from "../../../../img/aimal.jpg";
import img5 from "../../../../img/05.jpeg";
import img6 from "../../../../img/06.jpg";

const Gallary = () => {

    return (
        <Marquee className=' h-[500px] overflow-hidden mt-10 flex flex-col'>
            <div className=' grid grid-flow-row justify-center items-center object-center'>
                <div className='h-72 flex gap-5 rotate-[15deg] mb-10' >
                    <img className='rounded-lg' src={img1} alt="" />
                    <img className='rounded-lg' src={img2} alt="" />
                    <img className='rounded-lg' src={img3} alt="" />
                    <img className='rounded-lg' src={img4} alt="" />
                    <img className='rounded-lg' src={img5} alt="" />
                    <img className='rounded-lg' src={img6} alt="" />
                </div>
                <div className='h-72 flex gap-5 rotate-[15deg] ' >
                    <img className='rounded-lg' src={img2} alt="" />
                    <img className='rounded-lg' src={img6} alt="" />
                    <img className='rounded-lg' src={img5} alt="" />
                    <img className='rounded-lg' src={img3} alt="" />
                    <img className='rounded-lg' src={img1} alt="" />
                    <img className='rounded-lg' src={img4} alt="" />
                </div>
                <div className='h-72 flex mt-5 gap-5 rotate-[15deg]' >
                    <img className='rounded-lg' src={img2} alt="" />
                    <img className='rounded-lg' src={img5} alt="" />
                    <img className='rounded-lg' src={img3} alt="" />
                    <img className='rounded-lg' src={img1} alt="" />
                    <img className='rounded-lg' src={img4} alt="" />
                    <img className='rounded-lg' src={img6} alt="" />
                </div>
                <div className='h-72 flex mt-5 gap-5 rotate-[15deg]' >
                    <img className='rounded-lg' src={img6} alt="" />
                    <img className='rounded-lg' src={img5} alt="" />
                    <img className='rounded-lg' src={img2} alt="" />
                    <img className='rounded-lg' src={img3} alt="" />
                    <img className='rounded-lg' src={img1} alt="" />
                    <img className='rounded-lg' src={img4} alt="" />
                </div>
            </div>
        </Marquee>
    );
};

export default Gallary;