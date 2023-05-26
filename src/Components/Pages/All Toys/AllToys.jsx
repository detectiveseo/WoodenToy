import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthDetials } from '../../Providers/AuthProviders';

const AllToys = () => {
    const { loader } = useContext(AuthDetials);
    const loadedProducts = useLoaderData();

    if (loader) {
        return <div className='flex justify-center items-center text-9xl'>
            <h1>Loading...</h1>
        </div>
    }
    return (
        <div className='w-11/12 lg:w-8/12 mx-auto'>
            <div className='bg-slate-300 py-3 lg:w-6/12 mx-auto my-10 text-center px-4'>
                <h2 className='text-5xl font-bold text-center'>Baby</h2>
                <p className='text-sm text-gray-500'>Wooden toy set for newborns designed, developed, and arranged to enhance appropriate developmental skills and stimulate early age-appropriate growth.
                </p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-10'>
                {
                    loadedProducts.map(products => {
                        return (
                            <div
                                key={products._id}>
                                <img
                                    className='w-full h-48 lg:h-80 object-cover'
                                    src={products.image} alt="" />
                                <div className='flex flex-col justify-center text-center gap-2'>
                                    <h5>{products.name}</h5>
                                    <h5>$ {products.price}</h5>
                                    <button className='btn'>See Details</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AllToys;