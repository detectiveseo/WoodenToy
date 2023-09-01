import  { useContext, useEffect, useRef, useState } from 'react';
import { AuthDetials } from '../../Providers/AuthProviders';
import { Link } from 'react-router-dom';

const AllToys = () => {
    const {searchkey} = useContext(AuthDetials);
    const [products, setProducts] = useState([]);
    const [priceFilter, setPriceFilter] = useState("")
    const { loader } = useContext(AuthDetials);
    const filter = useRef();


    useEffect(() => {
        fetch(`http://localhost:3000/products?filter=${priceFilter}&key=${searchkey}`)
        .then((res) => res.json()).then((data) => setProducts(data))
    }, [priceFilter, searchkey])
    const handleFilter = () => {
        // navigate(`/all-toys?filter=${priceFilter}`)
        setPriceFilter(filter.current.value)
    }

  
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

            <div className='text-end'>
                <select ref={filter} onChange={handleFilter} name="filter" id="" className='p-2 border border-black'>
                    <option value="">Filter By Price</option>
                    <option value="low">Low to Up</option>
                    <option value="height">Height To Low</option>
                </select>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-10'>

                {
                    products.map(product => {
                        return (
                            <div
                                key={product._id}>
                                <img
                                    className='w-full h-48 lg:h-80 object-cover'
                                    src={product.image} alt="" />
                                <div className='flex flex-col justify-center text-center gap-2'>
                                    <h5>{product.name}</h5>
                                    <h5>$ {product.price}</h5>
                                    <Link to={`/toy/${product._id}`}>
                                        <button className='btn'>See Details</button>
                                    </Link>
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