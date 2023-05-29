import React, { useContext, useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthDetials } from '../../Providers/AuthProviders';

const MyToys = () => {
    // const loadedData = useLoaderData();
    const {user} = useContext(AuthDetials);
    const email = user.email;
    const [products, setProducts] = useState([]);
    const [slice, setSlice] = useState(8);
    const navigate = useNavigate();

    useEffect(() => {
        const loadingData = async () => {
            const responce = await fetch(`https://server-side-detectiveseo.vercel.app/my-toys?email=${email}`)
            const data = await responce.json();
            setProducts(data)
        }
        loadingData();
    })
    const handleSlice = () => {
        setSlice(slice + 5)
    }
    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://server-side-detectiveseo.vercel.app/product/${id}`, {
                    method: "DELETE",
                }).then((res) => res.json())
                .then((data) => {
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
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
                                            onClick={() => handleEdit(product._id)}
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