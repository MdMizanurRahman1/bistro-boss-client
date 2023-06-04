import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FaUtensils } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    console.log(errors);
    return (
        <div className='w-full px-14 py-10'>
            <SectionTitle subHeading="What's new" heading="Add an item"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-base-200 p-5 rounded-lg w-[720px]'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Recipe name*</span>
                    </label>
                    <input type="text" placeholder="Recipe name" {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <div className='flex gap-5'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select {...register("category", { required: true })} className="select select-bordered">
                            <option disabled selected>Category</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Dessert</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="number" placeholder="Price" {...register("price", { required: true })} className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details*</span>
                    </label>
                    <textarea {...register("details", { required: true })} className="textarea textarea-bordered h-24 w-[660px]" placeholder="Recipe Details"></textarea>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <div className='flex items-center btn btn-sm w-28 gap-2 bg-yellow-600 mt-4'>
                    <input type="submit" value="Add Item" />
                    <p><FaUtensils></FaUtensils></p>
                </div>
            </form>
        </div>
    );
};

export default AddItem;