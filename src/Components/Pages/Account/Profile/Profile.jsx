import React, { useContext } from 'react';
import { AuthDetials } from '../../../Providers/AuthProviders';

const Profile = () => {
    const {user, clickToLogOut, loader} = useContext(AuthDetials);
    if(loader){
        return 
    }
    return (
        <div className='py-0 lg:py-10'>
            <div className='w-12/12 lg:w-4/12 mx-auto border p-10 flex flex-col justify-center items-center text-3xl font-bold shadow-lg'>
                <img className='w-36 lg:w-72 mask mask-hexagon' src={user?.photoURL} alt="" />
                <h3>Welcome back {user?.displayName}</h3>
                <h3>{user?.email}</h3>
                <button 
                onClick={clickToLogOut}
                className='btn mt-4'>Logout</button>
            </div>
        </div>
    )
};

export default Profile;