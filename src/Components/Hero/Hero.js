import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Hero.css'


const Hero = () => {
    return (
    //     <Swiper
    //     spaceBetween={50}
    //     slidesPerView={1}
    //     onSlideChange={() => console.log('slide change')}
    //     onSwiper={(swiper) => console.log(swiper)}
    //   >
    //     <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR7tQyoru9ybl_BJRfMVN944LEhoMQRiqecgaXFNRi&s" alt="" /></SwiperSlide>
    //     <SwiperSlide>Slide 2</SwiperSlide>
    //     <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR7tQyoru9ybl_BJRfMVN944LEhoMQRiqecgaXFNRi&s" alt="" /></SwiperSlide>
    //     <SwiperSlide>Slide 4</SwiperSlide>
    //     ...
    //   </Swiper>
    <div className='heromain   bg-cover h-[500px]'>

     <div className='herotext w-2/4 h-full bg-black pt-8 px-5 '>
         <h2 className='text-white text-6xl font-bold text-center mt-3 '> Find Your Next Boat and sail to The Blue </h2>
         <p className='text-xl text-white font-semibold px-5'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum quasi aliquid laborum dolores recusandae reprehenderit corporis adipisci dicta? 
         </p>
         <button className='px-4 py-3 bg-orange-500 text-white flex  mx-auto'>
            Sell Now
         </button>
     </div>
    </div>
    );
};

export default Hero;