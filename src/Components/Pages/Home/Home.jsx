import React, { useContext, useEffect, useState } from 'react';
import Hero from './HomeComponets/Hero';
import discover from '../../../img/discover.webp'
import { Link } from 'react-router-dom';
import AgeImg1 from '../../../img/0-6M.webp';
import AgeImg2 from '../../../img/6+M.webp';
import AgeImg3 from '../../../img/12M +.webp';
import AgeImg4 from '../../../img/18M+.webp';
import AgeImg5 from '../../../img/2Y+.webp';
import AgeImg6 from '../../../img/3Y+.webp';
import reasons1 from '../../../img/reasons-1.webp';
import reasons2 from '../../../img/reasons-2.webp';
import reasons3 from '../../../img/reasons-3.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Marquee from 'react-fast-marquee';
import { AuthDetials } from '../../Providers/AuthProviders';
import Gallary from './HomeComponets/Gallary';


const Home = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const [products, setProducts] = useState([]);
    const { loader, setLoader } = useContext(AuthDetials);
    useEffect(() => {
        const loaderData = async () => {
            const responce = await fetch("http://localhost:3000/products");
            const data = await responce.json();
            setProducts(data);
            setLoader(false)
        }
        loaderData();
    }, [])
    return (
        <div className=' overflow-hidden'>
            <Hero />

            <section>
                <div className='text-center w-10/12 mx-auto py-10 lg:py-32'>
                    <h4 className='text-4xl font-bold'>New Products 2023</h4>
                    <hr className='w-1/12 mx-auto mt-5 border-8' />
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
                </div>
            </section>

            <section>
                <div className='text-center w-10/12 mx-auto py-10 lg:py-32'>
                    <h4 className='text-4xl font-bold'>Shop by Age</h4>
                    <hr className='w-1/12 mx-auto mt-5 border-8' />
                    <div className='grid grid-cols-3 lg:grid-cols-6'>
                        <div className='flex flex-col items-center'>
                            <img src={AgeImg1} alt="" />
                            <p>0-6M</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={AgeImg2} alt="" />
                            <p>6M+</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={AgeImg3} alt="" />
                            <p>12M+</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={AgeImg4} alt="" />
                            <p>18M+</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={AgeImg5} alt="" />
                            <p>2Y +</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={AgeImg6} alt="" />
                            <p>3Y+</p>
                        </div>
                    </div>
                </div>
            </section>

            <Gallary />

            <section className=''>
                <div className='text-center w-10/12 mx-auto py-10 lg:py-32'>
                    <h4 className='text-4xl font-bold'>3 Reasons to choose WoodenToy for kids!</h4>
                    <hr className='w-2/12 mx-auto mt-5 border-8' />
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-14'>
                        <div className='flex flex-col items-center'>
                            <img className='w-7/12' src={reasons1} alt="" />
                            <h3 className='text-2xl font-bold'>We are passionate about child safety</h3>
                            <p className='text-sm text-justify'> Every parent wants to see their child successfully grow and develop.We believe that creative and educational play can help them do this! By playing with our educational toys, children learn and evolve in a variety of ways.</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img className='w-7/12' src={reasons2} alt="" />
                            <h3 className='text-2xl font-bold'>We help children develop</h3>
                            <p className='text-sm text-justify'> We pay close attention to the safety standards of our production process. All of our materials are non-toxic and environmentally friendly so parents can let their children play without a worry.</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img className='w-7/12' src={reasons3} alt="" />
                            <h3 className='text-2xl font-bold'>We care about the environment</h3>
                            <p className='text-sm text-justify'>We believe that a quality environment will give rise to quality individuals. At PlanToys, we use water-based colors that are chemical free, E-Zero glue that doesn’t contain formaldehyde, and we maximize resource utilization by using leftover sawdust to
                                create a new sustainable material called PlanWood.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className='flex justify-center'>
                <Link className='w-10/12 lg:w-8/12'>
                    <img data-aos="zoom-in-down" className='w-full rounded-lg my-10' src={discover} alt="" />
                </Link>
            </section>

        </div>
    );
};

export default Home;