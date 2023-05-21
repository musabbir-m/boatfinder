import React from 'react';

const SellBoat = () => {
    return (
        <div className='mt-16 mx-auto  py-5 flex flex-col md:flex-row justify-center items-center  bg-gray-300 '>
            <div className='w-2/4 max-w-full bg-gray-300 px-5 relative'>
                <h3 className='text-5xl font-bold'>Sell your boat</h3>
                <p className='mt-8'>Ready to sell your boat? Listing in boatfinder <br /> makes it super-easy for you.</p>
                <button className='mt-5 px-3 py-2 bg-orange-500 text-white'>
                    Sell My Boat
                </button>
            </div>
            <div className='w-2/4'>
            <img className='w-full' src="https://i.ibb.co/5TVRnT2/sellBoat.jpg" alt="" />
            </div>
            
        </div>
    );
};

export default SellBoat;