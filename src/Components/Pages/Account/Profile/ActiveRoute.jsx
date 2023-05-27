import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveRoute = ({to, children}) => {
    return (
        <NavLink to={to} className={({isActive}) => isActive? "bg-slate-500 text-slate-100 border p-3 text-center" : "border p-3 text-center bg-slate-300 "}>
            {children}
        </NavLink>
    );
};

export default ActiveRoute;