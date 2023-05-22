import React from 'react';

import './Hero.css'


const Hero = () => {
    return (
   
    <div className='heromain  bg-cover h-[500px]'>
    
    <img src="https://i.ibb.co/whCx1jz/HeroBg.jpg" alt="" />

     <div className='herotext w-full md:w-1/2 h-full bg-black pt-8 px-5'>
         <h2 className='text-white  text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-3 mb-5 lg:mb-16 '> Find Your Next Boat and sail to The Blue </h2>
         <p className='text-xl text-white font-semibold px-5 mb-5'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum quasi aliquid laborum dolores recusandae reprehenderit corporis adipisci dicta? 
         </p>
         <button className='px-4 py-3 bg-orange-500 text-white flex  mx-auto'>
            Find Boat
         </button>
     </div>
    </div>
    );
};

export default Hero;