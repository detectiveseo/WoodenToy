import React, { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { useLoaderData } from 'react-router-dom';

const MyToys = () => {
    const loadedData = useLoaderData();
    const [products, setProducts] = useState(loadedData);
    const [slice, setSlice] = useState(8);
    const handleSlice = () => {
        setSlice(slice + 5)
    }
    const handleDelete = (id) => {
        fetch(`http://localhost:3000/product/${id}`, {
            method: "DELETE",
        }).then((res) => res.json())
        .then((data) => {
            const remaining = products.filter(product => product._id !== id);
            setProducts(remaining);
        })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>category</th>
                        <th>price</th>
                        <th>Edit Products</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        products.slice(0, slice).map((product, index) => {
                            return (
                                <tr key={product._id}>
                                    <th>{index + 1}</th>
                                    <td><img width="50px" src={product.image} alt="" /></td>
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td>$ {product.price}</td>
                                    <td>
                                        <div className='flex text-4xl gap-4'>
                                            <BiEdit
                                                className='text-green-600 cursor-pointer' />
                                            <AiFillDelete 
                                            onClick={() => handleDelete(product._id)}
                                            className='text-red-600 cursor-pointer' />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
                <div className='text-center w-full my-5'>
                    <button 
                    onClick={handleSlice}
                    className='btn'>Loade More</button>
                </div>
        </div>
    );
};

export default MyToys;