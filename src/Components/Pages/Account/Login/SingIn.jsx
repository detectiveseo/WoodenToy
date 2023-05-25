import React, { useContext, useState } from 'react';
import { AuthDetials } from '../../../Providers/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';

const SingIn = () => {
    const [showPass, setShowPass] = useState(false);
    const { onSingInFormSubmit, setUser } = useContext(AuthDetials);
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    const formHandle = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        onSingInFormSubmit(email, password)
            .then((res) => {
                setUser(res.user);
                navigate(from, { replace: true })
            }).catch((err) => {
                alert(err);
            });
        form.reset()
    }
    console.log(location)

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