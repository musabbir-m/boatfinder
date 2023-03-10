import React from 'react';

const SellBoat = () => {
    return (
        <div className='mt-16 py-5 flex   bg-gray-300 '>
            <div className='w-2/4 bg-gray-300 px-5 relative'>
                <h3 className='text-5xl font-bold'>Sell your boat</h3>
                <p className='mt-8'>Ready to sell your boat? Listing in boatfinder <br /> makes it super-easy for you.</p>
                <button className='mt-5 px-3 py-2 bg-orange-500 text-white'>
                    Sell My Boat
                </button>
            </div>
            <img className='w-2/4 h-2/4' src="https://i.ibb.co/5TVRnT2/sellBoat.jpg" alt="" />
            
        </div>
    );
};

export default SellBoat;