import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise= loadStripe(process.env.REACT_APP_STRIPE_PK)

const Payment = () => {
    const booking= useLoaderData()
    return (
        <div>
            <h2>Pay <strong>${booking.price}</strong> for <strong> {booking.product}</strong></h2>
         <div className='my-5 w-96'>
         <Elements stripe={stripePromise}>
            <CheckoutForm booking={booking} ></CheckoutForm>
         </Elements>
         </div>

        </div>
    );
};

export default Payment;