import React, { useContext } from 'react';
import { AuthDetials } from '../../Providers/AuthProviders';

const AddToy = () => {
    const addPostForm = [
        {
            Title: ["text", "write here title"]
        },
        {
            Description: ["text", "write here title"]
        },
        {
            Price: ["text", "write here title"]
        },
        {
            title: ["text", "write here title"]
        },
    ]

    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        console.log(form);
    }
    return (
        <div className='w-5/12 mx-auto'>
            <form action="">
                {

                    addPostForm.map(form => {
                        const values = Object.values(form)
                        values.map(x => (x[0]))
                        return (
                            <div key={Object.keys(form)}>
                                <label
                                    className='py-2'
                                    htmlFor={Object.keys(form)}>{Object.keys(form)}
                                    <input
                                        className='w-full border p-2'
                                        placeholder={values.map(x => (x[1]))}
                                        type="text" name="" id="" />
                                </label>
                            </div>
                        )
                    })
                }
            </form>
        </div>
    );
};

export default AddToy;