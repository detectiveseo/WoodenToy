import React, { useContext } from 'react';
import { AuthDetials } from './AuthProviders';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthDetials);
    if(loader){
        return <div className='h-96 flex items-center justify-center text-9xl'>Loading ...</div>
    }
    if(!user){
        return(
            <Navigate to="/user/sing-in" state={{from: location}} replace={true} ></Navigate>
        );
    }
    else{
        return (
        <div>
            {children}
        </div>
    )}
};

export default PrivateRoute;