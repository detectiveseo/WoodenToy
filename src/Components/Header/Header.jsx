import React from 'react';
import { BsSearch, BsHeart, BsBagCheck } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi'

const Header = () => {
    return (
        <div>
            {/* //top bar */}
            <div className='text-center bg-slate-200 text-sm font-mono py-1'>
                <p>Free Shipping On Orders $50+ Within The Contiguous USA
                </p>
            </div>

            {/* mainheader  */}
            <nav className=' w-10/12 mx-auto flex items-center justify-between py-2'>
                <div className='w-2/12'>
                    <h1 className='text-4xl font-bold'>WOOD TOY</h1>
                </div>
                <div className='w-8/12'>
                    <form className='flex items-center border'>
                        <input
                            className='w-full p-3'
                            type="text" placeholder='Search our store' />
                        <input type="submit" value={
                            <BsSearch className='text-3xl' />} />
                    </form>
                </div>
                <div className='w-2/12 flex justify-end text-3xl gap-3'>
                    <BiUser />
                    <BsHeart />
                    <BsBagCheck />
                </div>
            </nav>
        </div>
    );
};

export default Header;