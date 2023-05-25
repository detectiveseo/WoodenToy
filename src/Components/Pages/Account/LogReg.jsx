import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import { Link, Outlet } from 'react-router-dom';
import imgOfLogin from '../../../img/sicure-2.jpg'
import ActiveRoute from './ActiveRoute';
import googleIcon from '../../../assets/google.png'
import { AuthDetials } from '../../Providers/AuthProviders';

const LogReg = () => {
    const {clickToGoogleLogin, user} = useContext(AuthDetials);

    return (
        <div className=' w-10/12 lg:w-6/12 mx-auto my-20 shadow-lg border'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                <div className='flex flex-col items-center justify-center p-10'>
                    <img className='w-4/12 mb-10' src={logo} alt="" />
                    <div className='text-center flex flex-col gap-2 mb-5'>
                        <h3 className='font-bold text-3xl'>Welcome Back</h3>
                        <p>Welcom back! Please enter here your details</p>
                    </div>
                    <div className='bg-slate-300 py-2 px-2 rounded-lg flex justify-center gap-2'>
                        <ActiveRoute to="/user/sing-in">Sing In</ActiveRoute>
                        <ActiveRoute to="/user/sing-up">Sing Up</ActiveRoute>
                    </div>
                    <div className='my-7 w-full'>
                        <Outlet></Outlet>
                    </div>
                    <div className='w-full flex justify-center items-center gap-5 mb-7'>
                        <hr className='w-full'/>
                        <span className='w-full'>Or Sing up with</span>
                        <hr className='w-full'/>
                    </div>

                    <div 
                    onClick={clickToGoogleLogin}
                    className='flex items-center justify-center p-1 bg-blue-500 cursor-pointer'>
                        <div className='bg-white p-3'>
                            <img className='w-6 rounded h-full' src={googleIcon} alt="" />
                        </div>
                        <div className='text-1xl p-2 py-2 text-white fount-bold '>
                            Sing Up with Google</div>
                    </div>
                </div>
                <div className='hidden lg:flex items-center'>
                    <img
                    className='w-full'
                    src={imgOfLogin} alt="" />
                </div>
            </div>
        </div>
    );
};

export default LogReg;