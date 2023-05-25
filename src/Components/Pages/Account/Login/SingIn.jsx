import React, { useContext, useState } from 'react';
import { AuthDetials } from '../../../Providers/AuthProviders';

const SingIn = () => {
    const [showPass, setShowPass] = useState(false);
    const { onSingInFormSubmit, user } = useContext(AuthDetials);

    const formHandle = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        onSingInFormSubmit(email, password)
    }
    console.log(user)

    return (
        <form onSubmit={formHandle}>
            <div className='flex flex-col w-full  items-center justify-center gap-2'>
                <label
                    className='w-full'
                    htmlFor="email">Email
                    <input
                        className='border w-full rounded p-2'
                        placeholder='Enter your Email'
                        type="email" name="email" id="email" />
                </label>
                <label
                    className='w-full'
                    htmlFor="password">
                    <div className='flex justify-between'>
                        <span>Password</span>
                        <span
                            onClick={() => setShowPass(!showPass)}
                            className='cursor-pointer'
                        >{showPass ? "Hide" : "Show"}</span>
                    </div>
                    <input
                        className='border w-full rounded p-2'
                        placeholder='Enter your password'
                        type={showPass ? "text" : "password"} name="password" id="password" />
                </label>
                <input className='btn' type="submit" value="Sing In" />
            </div>
        </form>
    );
};

export default SingIn;