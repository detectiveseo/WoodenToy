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
                        htmlFor="name">Name
                        <input
                            className='border w-full p-2 font-sans font-normal rounded'
                            type="text" name='name' id='name' placeholder='Toy Name' />
                    </label>

                    <label
                        className='text-2xl font-bold w-full'
                        htmlFor="name">Image
                        <input
                            className='border w-full p-2 font-sans font-normal rounded'
                            type="text" name='image' id='image' placeholder='image link' />
                    </label>

                    <label
                            className='text-2xl font-bold'
                            htmlFor="category">Category<br />
                            <input
                                className='border w-full p-2 font-sans font-normal rounded'
                                type="text" name='category' id='category' placeholder="category" />
                    </label>

                    <div className="grid grid-cols-2 gap-4 justify-between w-full">
                        
                        <label
                            className='text-2xl font-bold'
                            htmlFor="price">Price<br />
                            <input
                                className='border w-full p-2 font-sans font-normal rounded'
                                type="number" name='price' id='price' placeholder="$" />
                        </label>

                        <label
                            className='text-2xl font-bold'
                            htmlFor="height">Height<br />
                            <input
                                className='border w-full p-2 font-sans font-normal rounded'
                                type="text" name='height' id='height' placeholder="height" />
                        </label>

                        <label
                            className='text-2xl font-bold'
                            htmlFor="length">Length<br />
                            <input
                                className='border w-full p-2 font-sans font-normal rounded'
                                type="text" name='length' id='length' placeholder="length" />
                        </label>

                        <label
                            className='text-2xl font-bold'
                            htmlFor="width">Width<br />
                            <input
                                className='border w-full p-2 font-sans font-normal rounded'
                                type="text" name='width' id='width' placeholder="width" />
                        </label>
                    </div>

                    <label
                            className='text-2xl font-bold'
                            htmlFor="description">Description<br />
                            <textarea 
                            className="w-full borde roundedr font-normal p-2"
                            placeholder='Write your description'
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