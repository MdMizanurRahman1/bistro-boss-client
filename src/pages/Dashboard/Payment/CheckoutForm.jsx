import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';

const CheckoutForm = () => {

    const [cardError, setCardError] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('error', error);
            setCardError(error.message);
        } else {
            setCardError('');
            console.log('PaymentMethod', paymentMethod);
        }


    }

    return (
        <>
            <form className='w-2/3 m-10' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                <button className='btn mt-4 btn-sm btn-primary' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-400 ml-8'>{cardError}</p>
            }
        </>
    );
};

export default CheckoutForm;