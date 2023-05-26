import React, { useContext } from 'react';
import { AuthDetials } from '../../Providers/AuthProviders';

const AddToy = () => {
    const { user } = useContext(AuthDetials);

    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        console.log(form);
    }
    return (
        <div className='w-10/12 lg:w-5/12 mx-auto my-10'>
            <form action="">
                <div className="flex flex-col gap-4 border p-7 rounded bg-slate-200">
                    <label
                        className='text-2xl font-bold w-full'
                        htmlFor="title">Title
                        <input
                            className='border w-full p-2 font-sans font-normal rounded'
                            type="text" name='id' id='title' placeholder='Toy Title' />
                    </label>

                    <label
                        className='text-2xl font-bold w-full'
                        htmlFor="title">Creator Name
                        <input
                            className='border w-full p-2 font-sans font-normal rounded'
                            type="text" name='creator_name' id='creator_name' placeholder={user ? user?.displayName : "Creator Name"} />
                    </label>

                    <div className="flex justify-between w-full">
                        <label
                            className='text-2xl font-bold'
                            htmlFor="title">Price<br />
                            <input
                                className='border w-full p-2 font-sans font-normal rounded'
                                type="number" name='price' id='price' placeholder="$" />
                        </label>

                        <label
                            className='text-2xl font-bold'
                            htmlFor="title">Stock<br />
                            <input
                                className='border w-full p-2 font-sans font-normal rounded'
                                type="number" name='stock' id='stock' placeholder="Stock" />
                        </label>
                    </div>

                    <label
                            className='text-2xl font-bold'
                            htmlFor="title">Stock<br />
                            <textarea 
                            className="w-full borde roundedr font-normal p-2"
                            name="description" id="description" cols="30" rows="10"></textarea>
                    </label>
                    
                    <input 
                    className="btn"
                    type="submit" value="Post Now" />
                </div>
            </form>
        </div>
    );
};

export default AddToy;