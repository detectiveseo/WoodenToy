import React from 'react';

const SingUp = () => {
    return (
        <form action="">
            <div className='flex flex-col w-full  items-center justify-center gap-2'>
                <input 
                className='border w-full rounded p-2'
                placeholder='Enter your full name'
                type="text" name="name" id="name" />
                <input
                    className='border w-full rounded p-2'
                    placeholder='Enter your email'
                    type="email" name="email" id="email" />
                <input
                    className='border w-full rounded p-2'
                    placeholder='Enter your password'
                    type="password" name="password" id="password" />
                <input
                className='border w-full rounded p-2'
                placeholder='Set your Photo URL'
                type="text" name="photourl" id="photourl" />

                <input className='btn' type="submit" value="Sing In" />
            </div>
        </form>
    );
};

export default SingUp;