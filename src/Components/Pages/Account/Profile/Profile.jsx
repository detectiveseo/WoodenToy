import React, { useContext } from 'react';
import { AuthDetials } from '../../../Providers/AuthProviders';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ActiveRoute from './ActiveRoute';

const Profile = () => {
    const { user, clickToLogOut, loader } = useContext(AuthDetials);
    if (loader) {
        return
    }
    return (
        <div className='relative flex flex-col lg:flex-row border-y border-slate-400'>
            <div className=' bg-slate-200 w-full lg:w-96 p-20 lg:flex flex-col gap-4 text-2xl text-slate-500'>
                <div className='w-20 flex flex-col justify-center items-center mx-auto'>
                    <img className='mask mask-squircle w-full' src={user?.photoURL} alt="" />
                    <h3>{user?.displayName}</h3>
                    <h3>{user?.email}</h3>
                </div>

                <div className='flex flex-col gap-2'>
                    <ActiveRoute to="/profile/add_product">Add A Toy</ActiveRoute>

                    <ActiveRoute to={`/profile/my-toys?${user.email}`}>My Toys</ActiveRoute>
                    <button
                        onClick={clickToLogOut}
                        className='btn mt-4'>Log Out
                    </button>
                </div>
            </div>
            <div className='w-full'>
                <Outlet />
            </div>
        </div>
    )
};

export default Profile;