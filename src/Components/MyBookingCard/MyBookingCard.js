import React from 'react';

const MyBookingCard = ({booking}) => {

    return (
        <div className='max-w-sm  shadow-xl px-4 pb-3 '>
        {/* booking card */}
       <div>
         <img src={booking.img} alt="" />
         </div>
         <div>
             <h3 className='text-xl font-bold'>{booking.product}</h3>
             <p>
              Price: $<span className='text-orange-500'>{booking.price}</span>
             </p> 
             <button className='w-32 text-white py-2 mt-2 bg-blue-600 flex justify-center items-center mx-auto rounded-md'>Make Payment</button>
         </div>
       </div>
    );
};

export default MyBookingCard;