import React, { useState } from 'react';
import { BiFace } from 'react-icons/bi';
import { BsFacebook, BsInstagram, BsPinterest } from 'react-icons/bs';
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {
    const loeaderData = useLoaderData();
    const [quantity, setquantity] = useState(1);
    const handleQuantityIncrase = () => {
        if (quantity < 10) {
            setquantity(quantity + 1)
        }
    }
    const handleQuantityDecrase = () => {
        if (!quantity < 1)
            setquantity(quantity - 1)
    }
    const { _id, name, description, dimensions, image, price } = loeaderData
    return (
        <div className='w-10/12 lg:w-8/12 mx-auto'>
            <div className='lg:flex justify-center'>
                <div className='lg:w-6/12'>
                    <img src={image} alt="" />
                </div>
                <div className='flex flex-col gap-3 justify-center'>
                    <h2 className='text-3xl text-slate-600  font-bold'>{name}</h2>
                    <h2 className='text-4xl text-slate-600  font-bold'>${price} </h2>
                    <p className='text-sm'>Pay in 4 interest-free installments for orders over $50.00 with <span className='underline'>Bkash</span></p>
                    <p className='text-sm'>{description}</p>

                    <div className='flex gap-3'>
                        <div className='text-2xl border flex flex-col justify-center items-center p-3 w-40'>
                            <h5>Length</h5>
                            <p className='border rounded-full bg-slate-300 w-10 py-1 text-center'>{loeaderData.dimensions.length}</p>
                        </div>
                        <div className='text-2xl border flex flex-col justify-center items-center p-3 w-40'>
                            <h5>Width</h5>
                            <p className='border rounded-full bg-slate-300 w-10 py-1 text-center'>{loeaderData.dimensions.width}</p>
                        </div>
                        <div className='text-2xl border flex flex-col justify-center items-center p-3 w-40'>
                            <h5>Height</h5>
                            <p className='border rounded-full bg-slate-300 w-10 py-1 text-center'>{loeaderData.dimensions.height}</p>
                        </div>
                    </div>
                    <div className='flex text-3xl lg:text-5xl font-bold gap-1'>
                        <div
                            onClick={handleQuantityIncrase}
                            className='border w-10 text-center cursor-pointer'>+</div>
                        <div className='border w-16 text-center'>{quantity}</div>
                        <div
                            onClick={handleQuantityDecrase}
                            className='border w-10 text-center cursor-pointer'>-</div>
                    </div>
                    <button className='btn w-full'>Add To Cart</button>

                    <p>Share</p>
                    <div className='flex gap-2 text-3xl'>
                        <BsFacebook />
                        <BsInstagram />
                        <BsPinterest />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;