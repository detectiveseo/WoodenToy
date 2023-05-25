import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveRoute = ({to, children}) => {
    return (
        <>
            <NavLink
                to={to}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "btn border-none text-black bg-slate-50" : "btn bg-transparent border-none"
                }
            >
                {children}
            </NavLink>
        </>
    );
};

export default ActiveRoute;