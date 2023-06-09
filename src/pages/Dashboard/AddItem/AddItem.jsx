import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FaUtensils } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL }
                    console.log(newItem);
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log('after posting new menu item', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Item added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    }


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
                        <select defaultValue="Category" {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Category</option>
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
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24 w-[660px]" placeholder="Recipe Details"></textarea>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
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