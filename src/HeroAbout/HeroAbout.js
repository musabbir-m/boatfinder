import React from 'react';
import {AiOutlineCheckCircle} from 'react-icons/ai'

const HeroAbout = () => {
    return (
        <div className=' flex flex-col gap-10 md:flex-row justify-center items-center mt-20 mx-2 md:mx-10  '>
            <div className=' '>
                <img className='h-full  max-w-full rounded-lg' src="https://i.ibb.co/2Mp3SNq/about.jpg" alt="" />
            </div>
            <div className='pt-5 pl-5  max-w-full    '>
                <h6 className='text-xl text-blue-800 mb-3'>Why Buy Form Us</h6>
                <h2 className='text-2xl md:text-3xl mb-5'> Best Quality & Large <br /> Collection</h2>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Non, modi!</p>

                <div>
                    <div className='flex mb-5 '>
                       <AiOutlineCheckCircle className='text-2xl mr-5 mt-2 text-blue-600 '></AiOutlineCheckCircle>
                        <div>
                        <h3 className='font-sebold text-2xl text-blue-600'>Large collection of boats</h3>
                        <p>Lorem ipsum dolor sit amet.
                        </p>
                        </div>
                       
                    </div>
                    <div className='flex mb-5'>
                       <AiOutlineCheckCircle className='text-2xl mr-5 mt-2 text-blue-600 '></AiOutlineCheckCircle>
                        <div>
                        <h3 className=' text-2xl text-blue-600 '>Quality assured products</h3>
                        <p>Lorem ipsum dolor sit amet.
                        </p>
                        </div>
                       
                    </div>
                    <div className='flex mb-5 '>
                       <AiOutlineCheckCircle className='text-2xl mr-5 mt-2  text-blue-600 '></AiOutlineCheckCircle>
                        <div>
                        <h3 className=' text-2xl text-blue-600'>Shipping at your  door</h3>
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