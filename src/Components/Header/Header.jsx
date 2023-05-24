import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import { BsSearch, BsHeart, BsBagCheck } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi'
import { AiOutlineMenu } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom';



const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const mobileMenuhandle = () => {
        setMobileMenu(!mobileMenu)
    }
    return (
        <div>
            {/* //top bar */}
            <div className='text-center bg-slate-200 text-sm font-mono py-1'>
                <p>Free Shipping On Orders $50+ Within The Contiguous USA
                </p>
            </div>

            {/* mainheader  */}
            <div className='w-10/12 mx-auto flex items-center justify-between py-2'>
                <div className='lg:w-2/12'>
                    <img src={logo} width="70px" alt="" />
                </div>
                <div className='w-full lg:w-8/12'>
                    <form className='flex items-center border'>
                        <input
                            className='w-full p-3'
                            type="text" placeholder='Search our store' />
                        <input
                            className=' bg-slate-300 py-3 px-5 uppercase'
                            type="submit"
                            value="Search" />
                    </form>
                </div>
                <div className='w-0/12 hidden lg:flex text-3xl gap-3'>
                        <BiUser />
                        <BsHeart />
                        <BsBagCheck />
                    </div>
            </div>

            {/* navigation  */}
            <div className=' bg-slate-200 p-4 flex items-center justify-between relative'>
                <div 
                onClick={mobileMenuhandle}
                className='block lg:hidden text-3xl cursor-pointer'>
                    {!mobileMenu ? < AiOutlineMenu /> : <RxCross1 />}
                </div>

                <div className='w-0/12 flex lg:hidden text-3xl gap-3'>
                    <BiUser />
                    <BsHeart />
                    <BsBagCheck />
                </div>

                <div className='w-10/12 mx-auto hidden lg:flex gap-6 text-1xl'>
                    <Link to="/">Home</Link>
                    <Link to="/">All Toys</Link>
                    <Link to="/">Blogs</Link>
                    <Link to="/">Add A Toy</Link>
                </div>

                <div className={`w-full mx-auto flex-col lg:hidden gap-6 text-1xl absolute top-14 p-5 left-0 bg-slate-300 ${mobileMenu ? "flex" : "hidden"}`}>
                    <Link to="/">Home</Link>
                    <Link to="/">All Toys</Link>
                    <Link to="/">Blogs</Link>
                    <Link to="/">Add A Toy</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;