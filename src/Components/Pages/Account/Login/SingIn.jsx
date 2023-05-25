import React from 'react';
import { Form } from 'react-router-dom';

const SingIn = () => {
    return (
        <form action="">
            <div className='flex flex-col w-full  items-center justify-center gap-2'>
                <input
                    className='border w-full rounded p-2'
                    placeholder='write here'
                    type="email" name="email" id="email" />
                <input
                    className='border w-full rounded p-2'
                    placeholder='write here'
                    type="password" name="password" id="password" />
                <input className='btn' type="submit" value="Sing In" />
            </div>
        </form>
    );
};

export default SingIn;