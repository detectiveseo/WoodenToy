import React, { useContext } from 'react';
import { AuthDetials } from './AuthProviders';
import { Navigate } from 'react-router-dom';

const ProteactLogin = ({ children }) => {
    const { user, loader } = useContext(AuthDetials);
    if (loader) {
        return <div className='flex justify-center items-center text-9xl'>
            <h1>Loading...</h1>
        </div>
    }
    if (!user) {
        return children;
    }
    return (
        <Navigate to="/profile"></Navigate>
    );
};

export default ProteactLogin;