import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

//TODO: provide published key

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK);
const Payment = () => {
    return (
        <div>
            <h2 className='uppercase text-3xl text-center my-6'>Payment</h2>

            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;