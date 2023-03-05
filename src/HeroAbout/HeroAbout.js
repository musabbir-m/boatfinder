import React from 'react';
import {AiOutlineCheckCircle} from 'react-icons/ai'

const HeroAbout = () => {
    return (
        <div className=' flex mt-20  mx-10 '>
            <div className='w-2/4'>
                <img className='h-full ' src="https://media.istockphoto.com/id/1363734893/photo/happy-family-aboard-a-yacht-out-to-sea.jpg?b=1&s=170667a&w=0&k=20&c=COw-RRsIy5kkeFWM1NALhrEfylEOBkHgliYNuAy14iM=" alt="" />
            </div>
            <div className='pt-5 pl-12   bg-white shadow-md w-2/4 '>
                <h6 className='text-xl text-blue-800 font-semibold mb-3'>Why Buy Form Us</h6>
                <h2 className='text-5xl font-semibold mb-5'> What we offer</h2>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Non, modi!</p>

                <div>
                    <div className='flex  '>
                       <AiOutlineCheckCircle className='text-4xl mr-5 mt-2 text-blue-600 '></AiOutlineCheckCircle>
                        <div>
                        <h3 className='font-bold text-3xl text-blue-600'>Exiting places</h3>
                        <p>Lorem ipsum dolor sit amet.
                        </p>
                        </div>
                       
                    </div>
                    <div className='flex '>
                       <AiOutlineCheckCircle className='text-4xl mr-5 mt-2 text-blue-600 '></AiOutlineCheckCircle>
                        <div>
                        <h3 className='font-bold text-3xl text-blue-600'>Exiting places</h3>
                        <p>Lorem ipsum dolor sit amet.
                        </p>
                        </div>
                       
                    </div>
                    <div className='flex '>
                       <AiOutlineCheckCircle className='text-4xl mr-5 mt-2 text-blue-600 '></AiOutlineCheckCircle>
                        <div>
                        <h3 className='font-bold text-3xl text-blue-600'>Exiting places</h3>
                        <p>Lorem ipsum dolor sit amet.
                        </p>
                        </div>
                       
                    </div>
                    {/* <button className='px-5 py-3 mt-10 bg-blue-500'>
                        Something
                    </button> */}
                </div>
            </div>
            
        </div>
    );
};

export default HeroAbout;