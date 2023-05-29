import React, { useContext, useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { AuthDetials } from '../../../Providers/AuthProviders';
import { Link } from 'react-router-dom';

const Product = () => {

    const { loader, setLoader } = useContext(AuthDetials);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loaderData = async () => {
            const responce = await fetch("https://server-side-detectiveseo.vercel.app/catagory?catagory=car");
            const data = await responce.json();
            setProducts(data);
            setLoader(false)
        }
        loaderData();
    }, [])

    const dataHandleForTab = async(category = "car") => {
        const responce = await fetch(`https://server-side-detectiveseo.vercel.app/catagory?catagory=${category}`);
        const data = await responce.json();
        setProducts(data);
        setLoader(false);
    }
    return (
        <Tabs>
            <TabList>
                <Tab onClick={() => dataHandleForTab("car")}>Car</Tab>
                <Tab onClick={() => dataHandleForTab("puzzle")}>Puzzel</Tab>
                <Tab onClick={() => dataHandleForTab("classic")}>Classic</Tab>
            </TabList>

            <TabPanel>
                {
                    loader ? <div className='text-8xl'>Loading...</div> : <div className='grid grid-cols-2 lg:grid-cols-4 gap-10'>
                        {products.slice(0, 8).map(product => {
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
                                </div>)
                        })}
                    </div>
                }
            </TabPanel>

            <TabPanel>
                {
                    loader ? <div className='text-8xl'>Loading...</div> : <div className='grid grid-cols-2 lg:grid-cols-4 gap-10'>
                        {products.slice(0, 8).map(product => {
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
                                </div>)
                        })}
                    </div>
                }
            </TabPanel>

            <TabPanel>
                {
                    loader ? <div className='text-8xl'>Loading...</div> : <div className='grid grid-cols-2 lg:grid-cols-4 gap-10'>
                        {products.slice(0, 8).map(product => {
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
                                </div>)
                        })}
                    </div>
                }
            </TabPanel>
        </Tabs>
    );
};

export default Product;