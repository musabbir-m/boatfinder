import React from 'react';

const HeroAbout = () => {
    return (
        <div className='relative flex mt-20'>
            <div>
                <img src="https://cdn.pixabay.com/photo/2016/10/13/16/39/career-1738216_960_720.jpg" alt="" />
            </div>
            <div className='py-5 pl-10'>
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