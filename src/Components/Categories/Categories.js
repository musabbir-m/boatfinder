import React from 'react';
import { IoBoatSharp } from 'react-icons/io5';
import { CgArrowLongRightC } from 'react-icons/cg';

const Categories = () => {
    return (
        <div className='my-10 py-5 mx-auto bg-gray-200'>
            <h2 className='text-5xl font-bold text-center'>Boat Categories</h2>
            <p className='mt-5 text-xl text-gray-700 text-center'>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Nulla, sint.</p>
            <div className='py-10 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                <div className='bg-white max-w-sm   h-72 py-8 px-5 shadow-md border-0  text-center'>
                    <div className='flex justify-center'><IoBoatSharp className='text-6xl text-blue-500'></IoBoatSharp></div>
                    <h4 className='text-2xl font-semibold'> Power Boats</h4>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, doloribus?</p>
                    <button className='px-5 py-2 mt-5   border-2  border-orange-200  hover:bg-orange-400 ease-in duration-100' > See all <CgArrowLongRightC className='inline'></CgArrowLongRightC></button>

                </div>
                <div className='bg-white max-w-sm   h-72 py-8 px-5 shadow-md border-0  text-center'>
                    <div className='flex justify-center'><IoBoatSharp className='text-6xl text-blue-500'></IoBoatSharp></div>
                    <h4 className='text-2xl font-semibold'> Power Boats</h4>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, doloribus?</p>
                    <button className='px-5 py-2 mt-5   border-2  border-orange-200  hover:bg-orange-400 ease-in duration-100' > See all <CgArrowLongRightC className='inline'></CgArrowLongRightC></button>

                </div>
                <div className='bg-white max-w-sm   h-72 py-8 px-5 shadow-md border-0  text-center'>
                    <div className='flex justify-center'><IoBoatSharp className='text-6xl text-blue-500'></IoBoatSharp></div>
                    <h4 className='text-2xl font-semibold'> Power Boats</h4>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, doloribus?</p>
                    <button className='px-5 py-2 mt-5   border-2  border-orange-200  hover:bg-orange-400 ease-in duration-100' > See all <CgArrowLongRightC className='inline'></CgArrowLongRightC></button>

                </div>
            </div>
        </div>
    );
};

export default Categories;