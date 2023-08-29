import React from 'react';

import './Hero.css'
import Navbar from '../Navbar/Navbar';
import { easeInOut, motion } from 'framer-motion';


const Hero = () => {
    return (
   
    <div className='heromain  bg-cover h-[550px]'>
   
    
    <img src="https://i.ibb.co/whCx1jz/HeroBg.jpg" alt="" />
    

     <div className='herotext w-full md:w-1/2 h-full bg-black pt-16 px-5'
     style={{fontFamily: "'Montserrat', sans-serif"}}
     >
         <motion.h2 
         className='text-white  text-3xl md:text-6xl lg:text-5xl  text-center pt-6 mb-5 lg:mb-16 '
        //  initial={{opacity:0}}
        //  animate={{opacity:1}}
        whileInView={{opacity:[0,1]}}
         transition={{duration:1}}
         > Find Your Next Boat And Sail To The Blue </motion.h2>
         <motion.p className='text-xl text-white px-5 mb-5'
         style={{fontWeight:300}}
        //  initial={{x:-100, opacity:0}}
        //  animate={{x:0, opacity:1}}
        whileInView={{x:[-10,0], opacity:[0,1]}}
         transition={{ duration:0.8, ease:easeInOut}}
         >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum quasi aliquid laborum dolores recusandae reprehenderit corporis adipisci dicta? 
         </motion.p>
         <button className='px-4 py-3 bg-orange-500 text-white flex  mx-auto'>
            Find Boat
         </button>
     </div>
    </div>
    );
};

export default Hero;