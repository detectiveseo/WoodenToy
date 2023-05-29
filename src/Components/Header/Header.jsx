import React, { useContext, useState } from 'react';
import logo from '../../assets/logo.png'
import { BsSearch, BsHeart, BsBagCheck } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi'
import { AiOutlineMenu } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import { Link, useNavigate } from 'react-router-dom';
import { AuthDetials } from '../Providers/AuthProviders';



const Header = () => {
    const { clickToLogOut, user, searchkey, setSearchKey } = useContext(AuthDetials);
    const [mobileMenu, setMobileMenu] = useState(false)
    const mobileMenuhandle = () => {
        setMobileMenu(!mobileMenu)
    }

    const navigate = useNavigate();
    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const searchFiled = form.search.value;
        navigate("/all-toys")
        setSearchKey(searchFiled);
        form.reset();
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
                    <form 
                    onSubmit={handleSearch}
                    className='flex items-center border'>
                        <input
                            className='w-full p-3'
                            name='search'
                            type="text" placeholder='Search here Toys' />
                        <input
                            className=' bg-slate-300 py-3 px-5 uppercase cursor-pointer'
                            type="submit"
                            value="Search" />
                    </form>
                </div>
                <div className='w-0/12 hidden lg:flex text-3xl gap-3'>
                    <Link
                        className={user ? "hidden" : "block"}
                        to="/user/sing-in"><BiUser /></Link>

                    <Link to="/profile" className={!user ? "hidden" : "block"}>
                        <BiUser />
                    </Link>
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
                    <Link
                        className={user ? "hidden" : "block"}
                        to="/user/sing-in"><BiUser /></Link>

                    <Link to="/profile" className={!user ? "hidden" : "block"}>
                        <BiUser />
                    </Link>
                    <BsHeart />
                    <BsBagCheck />
                </div>

                <div className='w-10/12 mx-auto hidden lg:flex gap-6 text-1xl'>
                    <Link to="/">Home</Link>
                    <Link to="/all-toys">All Toys</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/profile/add_product">Add A Toy</Link>
                </div>

                <div className={`w-full mx-auto flex-col lg:hidden gap-6 text-1xl absolute top-14 p-5 left-0 bg-slate-300 ${mobileMenu ? "flex" : "hidden"}`}>
                    <Link to="/">Home</Link>
                    <Link to="/all-toys">All Toys</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/profile/add_product">Add A Toy</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;