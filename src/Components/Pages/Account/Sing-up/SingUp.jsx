import React, { useContext, useState } from 'react';
import { AuthDetials } from '../../../Providers/AuthProviders';
import { updateProfile } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const SingUp = () => {

    const [showPass, setShowPass] = useState(false);
    const { onSingUpFormSubmit, auth, setUser, user, updateUser } = useContext(AuthDetials);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const formHandle = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        onSingUpFormSubmit(email, password)
            .then((res) => {
                updateUser(name, photo)
                .then(() => {
                    navigate(from, { replace: true })
                })
            }).catch((err) => {
                alert(err);
            });
        form.reset();
    }
    console.log(location);
    return (
        <form onSubmit={formHandle}>
            <div className='flex flex-col w-full  items-center justify-center gap-2'>
                <label
                    className='w-full'
                    htmlFor="name">Name
                    <input
                        className='border w-full rounded p-2'
                        placeholder='Enter your full name'
                        type="text" name="name" id="name" />
                </label>
                <label
                    className='w-full'
                    htmlFor="PhotUrl">Your Photo
                    <input
                        className='border w-full rounded p-2'
                        placeholder='Set your Photo URL'
                        type="text" name="photourl" id="photourl" />
                </label>
                <label
                    className='w-full'
                    htmlFor="email">Email
                    <input
                        className='border w-full rounded p-2'
                        placeholder='Enter your email'
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
                        type={showPass ? "text" : "password"}
                        name="password"
                        id="password" />
                </label>

                <input className='btn' type="submit" value="Sing Up" />
            </div>
        </form>
    );
};

export default SingUp;