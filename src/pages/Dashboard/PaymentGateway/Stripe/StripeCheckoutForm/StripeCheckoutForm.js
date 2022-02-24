import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Alert, Button, Container } from "react-bootstrap";
import styles from './StripeCheckoutForm.module.css';

const amount = 300;

const StripeCheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [stripeError, setStripeError] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        fetch('', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ amount })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setStripeError(error);
        }
        else {
            setStripeError('');
            console.log(paymentMethod);
        }

        // Peyment Intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: 'Rakib Babu',
                },
            },
        });
    };

    return (
        <div>
            <Container>
                <div>
                    {
                        stripeError ? <Alert variant="warning">
                            {stripeError.message}
                        </Alert>
                            :
                            ''
                    }

                    <div className={`${'bg-light'} ${styles.stripeForm}`}>
                        <form onSubmit={handleSubmit}>
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
                            <Button type="submit" variant="secondary" className="mt-4" disabled={!stripe}>
                                Pay ${amount}
                            </Button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default StripeCheckoutForm;