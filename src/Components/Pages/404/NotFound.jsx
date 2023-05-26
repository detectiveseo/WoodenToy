import React from 'react';

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen text-9xl font-bold'>
           <p>404</p> 
           <p className='text-2xl'>Sorry We couldn't found, <a className='underline' href="/">Back to Home</a></p>
        </div>
    );
};

export default NotFound;