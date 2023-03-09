import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../Context/AuthProvider';

const BookingModal = ({currentBoat, setcurrentBoat}) => {
    const { user } = useContext(AuthContext);
    const confirmBooking = (event) => {
      event.preventDefault();
      const form = event.target;
      const product = currentBoat.productName;
      const productId= currentBoat._id
      const price = currentBoat.price;
      const phone = form.phone.value;
      const buyerEmail = user?.email;
      const buyerName = user?.displayName;
      const sellerEmail = currentBoat.sellerEmail;
      const location = form.location.value;
      const img= currentBoat.img
  
      const booking = {
        product,
        productId,
        price,
        phone,
        buyerEmail,
        buyerName,
        location,
        sellerEmail,
        img
      };
  
      //post booking
  
      fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(booking),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            toast('Added to your booking.')
            setcurrentBoat(null);
          }
        });
    };
    return (
      <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal  max-w-sm lg:max-w-full">
          <div className="modal-box relative">
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle border-none absolute  right-2 top-2 "
            >
              ✕
            </label>
  
            <form
              onSubmit={confirmBooking}
              className="grid grid-cols-1 gap-3 mt-6"
            >
              <h4 className="text-center text-blue-600 text-3xl font-semibold">
                {" "}
               {currentBoat.productName}
              </h4>
  
              <p
                
                // value={currentBoat.price}
                className=" mt-2 input-bordered  text-xl font-bold w-full"
              >Price: $ <span className='text-orange-500'>{currentBoat.price}</span></p>
              <h3>Give Your Contact Details:</h3>
              <input
                type="text"
                name="userName"
                placeholder={`${user?.displayName}`}
                className="input font-semibold mt-2 input-bordered w-full"
                disabled
              />
              <p
                
                placeholder={`${user?.email}`}
                className="input mt-2 input-bordered w-full"
                disabled
              > {user?.email} </p>
              <input
                type="text"
                name="phone"
                placeholder="Phone number"
                className="input mt-2 input-bordered w-full"
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Loacation"
                className="input mt-2 input-bordered w-full"
              />
  
              <button type='submit' className="btn flex justify-center mx-auto btn-md max-w-xs bg-orange-500 border-none">
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </>
    );
};

export default BookingModal;