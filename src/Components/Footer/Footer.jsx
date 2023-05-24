import React from 'react';
import logo from '../../assets/logo.png';
import certification1 from '../../assets/cer-logo-1.2ee6b71.webp'
import certification2 from '../../assets/cer-logo-2.d2aec28.webp'
import certification3 from '../../assets/cer-logo-3.b49ef8f.webp'
import certification4 from '../../assets/cer-logo-4.7114c56.webp'
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsPinterest } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='bg-slate-200'>
            <div className='w-11/12 lg:w-10/12 mx-auto pt-7'>
                <div className='grid grid-cols-1 lg:grid-cols-5'>
                    <div>
                        <img src={logo} width="30%" className='border-2 border-black mb-2' alt="" />
                        <p>Better Kids</p>
                        <p>Better World</p>
                    </div>
                    <div>
                        <ol className='flex flex-col'>
                            <h5 className='font-bold text-2xl'>Menu</h5>
                            <Link to="/coming-soon">Produts</Link>
                            <Link to="/coming-soon">Child Development</Link>
                            <Link to="/coming-soon">Blogs</Link>
                            <Link to="/coming-soon">About Us</Link>
                            <Link to="/coming-soon">Contact Us</Link>
                        </ol>
                    </div>
                    <div>
                        <ol className='flex flex-col'>
                            <h5 className='font-bold text-2xl'>Product Categories</h5>
                            <Link to="/coming-soon">Active Play</Link>
                            <Link to="/coming-soon">Baby</Link>
                            <Link to="/coming-soon">Better Aging</Link>
                            <Link to="/coming-soon">Blocks & Construction</Link>
                            <Link to="/coming-soon">Games & Puzzles</Link>
                            <Link to="/coming-soon">Learning & Education</Link>
                        </ol>
                    </div>
                    <div>
                        <ol className='flex flex-col'>
                            <h5 className='font-bold text-2xl'>Corporate</h5>
                            <Link to="/coming-soon">About WoodToys</Link>
                            <Link to="/coming-soon">Our Mission</Link>
                            <Link to="/coming-soon">Our History</Link>
                            <Link to="/coming-soon">Our Awards</Link>
                        </ol>
                    </div>
                    <div>
                        <ol className='flex flex-col'>
                            <h5 className='font-bold text-2xl'>Menu</h5>
                            <Link to="/coming-soon">Produts</Link>
                            <Link to="/coming-soon">Child Development</Link>
                            <Link to="/coming-soon">Blogs</Link>
                            <Link to="/coming-soon">About Us</Link>
                            <Link to="/coming-soon">Contact Us</Link>
                        </ol>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-4 mt-10'>
                    <div className='flex flex-col gap-2 mb-10'>
                        <h5 className='font-bold'>Follow Us</h5>
                        <p>We hear your concerns</p>
                        <div className='flex gap-4 text-3xl'>
                            <BsFacebook />
                            <BsInstagram />
                            <BsPinterest />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 mb-10'>
                        <h5 className='font-bold'>Subscribe to our newsletter</h5>
                        <p>Get Daily Updates, news and promotions.</p>
                        <form>
                            <input
                                className='border p-2'
                                type="text" placeholder='Enter your e-mail address' />
                            <input
                                className='btn bg-slate-300 p-2'
                                type="button" value="Subscribe" /></form>
                    </div>
                    <div className='flex flex-col gap-2 mb-10'>
                        <h5 className='font-bold'>Certification</h5>
                        <p>issued by trusted certificate authorities.</p>
                        <div className='flex gap-2'>
                            <img className='w-16' src={certification1} alt="" />
                            <img className='w-16' src={certification2} alt="" />
                            <img className='w-16' src={certification3} alt="" />
                            <img className='w-16' src={certification4} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 mb-10'>
                        <h5 className='font-bold'>Certification</h5>
                        <p>issued by trusted certificate authorities.</p>
                        <div className='flex gap-5'>
                            <button className='btn bg-slate-400 py-3 px-5 rounded-lg'>View Online</button>
                            <button className='btn bg-slate-400 py-3 px-5 rounded-lg'>Download PDF</button>
                        </div>
                    </div>
                </div>

                <hr className='border border-slate-500' />
                <div className='py-2 flex flex-col lg:flex-row justify-between'>
                    <p className='text-sm font-mono'>Copyright © 2023 woodenToy.com All Rights Reserved.</p>
                    <p className='text-sm font-mono'>This site made by Imran</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;