import React from 'react';

const HeroAbout = () => {
    return (
        <div className='relative flex mt-20 h-96'>
            <div className='w-full h-full'>
                <img src="https://media.istockphoto.com/id/1363734893/photo/happy-family-aboard-a-yacht-out-to-sea.jpg?b=1&s=170667a&w=0&k=20&c=COw-RRsIy5kkeFWM1NALhrEfylEOBkHgliYNuAy14iM=" alt="" />
            </div>
            <div className='py-5 px-10 w-/4 bg-gray-300 lg:absolute left-96 top-10 h-96 '>
                <h6 className='text-xl font-semibold '>About us</h6>
                <h2 className='text-3xl font-bold'> What we offer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, modi!</p>

                <div>
                    <div className='flex'>
                        <p>icon</p>
                        <div>
                        <h3 className='font-bold text-xl'>Exiting places</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quis laborum sed inventore voluptates, odit asperiores voluptate? 
                        </p>
                        </div>
                       
                    </div>
                    <button className='px-5 py-3 bg-orange-600'>
                        Something
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default HeroAbout;