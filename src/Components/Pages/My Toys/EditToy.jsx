import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const EditToy = () => {
    const product = useLoaderData();
    const notify = () => toast.success("Your Product Has Changed", {
        position: "bottom-right"
    });

    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const age_range = form.age_range.value;
        const category = form.category.value;
        const price = form.price.value;
        const height = form.height.value;
        const length = form.length.value;
        const width = form.length.value;
        const description = form.description.value;


        const newProdductData = {
            name,
            image,
            age_range,
            category,
            price,
            dimensions: {
                length,
                width,
                height,
            },
            description,
        }
        console.log(newProdductData);
        notify();
    }
    return (
        <div className='w-12/12 mx-auto'>
            <ToastContainer
                theme='light' />
            <form onSubmit={handleForm}>
                <div className="flex flex-col gap-4 border p-7 rounded">
                    <label
                        className='text-2xl font-bold w-full'
                        htmlFor="name">Name
                        <input
                            required
                            defaultValue={product.name}
                            className='border w-full p-2 font-sans font-normal rounded'
                            type="text" name='name' id='name' placeholder='Toy Name' />
                    </label>

                    <label
                        className='text-2xl font-bold w-full'
                        htmlFor="name">Image
                        <input
                            required
                            defaultValue={product.image}
                            className='border w-full p-2 font-sans font-normal rounded'
                            type="text" name='image' id='image' placeholder='image link' />
                    </label>

                    <label
                        className='text-2xl font-bold'
                        htmlFor="category">Category<br />
                        <input
                            required
                            defaultValue={product.category}
                            className='border w-full p-2 font-sans font-normal rounded'
                            type="text" name='category' id='category' placeholder="category" />
                    </label>

                    <div className="grid grid-cols-2 gap-4 justify-between w-full">

                        <label
                            className='text-2xl font-bold'
                            htmlFor="age_range">Age range<br />
                            <input
                                required
                                defaultValue={product.age_range}
                                className='border w-full p-2 font-sans font-normal rounded'
                                type="number" name='age_range' id='age_range' placeholder="Age" />
                        </label>

                        <label
                            className='text-2xl font-bold'
                            htmlFor="height">Height<br />
                            <input
                                required
                                defaultValue={product.dimensions.height}
                                className='border w-full p-2 font-sans font-normal rounded'
                                type="text" name='height' id='height' placeholder="height" />
                        </label>

                        <label
                            className='text-2xl font-bold'
                            htmlFor="length">Length<br />
                            <input
                                required
                                defaultValue={product.dimensions.length}
                                className='border w-full p-2 font-sans font-normal rounded'
                                type="text" name='length' id='length' placeholder="length" />
                        </label>

                        <label
                            className='text-2xl font-bold'
                            htmlFor="width">Width<br />
                            <input
                                required
                                defaultValue={product.dimensions.width}
                                className='border w-full p-2 font-sans font-normal rounded'
                                type="text" name='width' id='width' placeholder="width" />
                        </label>

                        <label
                            className='text-2xl font-bold'
                            htmlFor="price">Price<br />
                            <input
                                required
                                defaultValue={product.price}
                                className='border w-3/12 p-2 font-sans font-normal rounded'
                                type="number" name='price' id='price' placeholder="$" />
                        </label>
                    </div>

                    <label
                        className='text-2xl font-bold'
                        htmlFor="description">Description<br />
                        <textarea
                            required
                            defaultValue={product.description}
                            className="w-full border-2 roundedr font-normal p-2"
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

export default EditToy;