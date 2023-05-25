import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import moment from 'moment';
import './Featured.css';

const Featured = () => {
    const currentDate = moment().format('DD-MM-YYYY');
    return (
        <div className='featured-item text-white pt-8 my-20 bg-fixed'>
            <section>
                <SectionTitle heading='Featured Item' subHeading='Check it out'></SectionTitle>
            </section>
            <div className='md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-40'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>{currentDate}</p>
                    <p className='uppercase'>Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem a assumenda distinctio repudiandae ut harum, laboriosam quibusdam, ratione libero, in itaque quos deserunt temporibus? Repudiandae.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;