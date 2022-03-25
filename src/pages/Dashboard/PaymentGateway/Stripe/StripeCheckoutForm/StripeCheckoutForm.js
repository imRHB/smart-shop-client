import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Alert, Button, Container, Spinner } from "react-bootstrap";
import styles from './StripeCheckoutForm.module.css';

// const payAmount = 300;

const StripeCheckoutForm = ({ grandTotal, handleUpdateStatus }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [processing, setProcessing] = useState(false);
    const [stripeError, setStripeError] = useState('');
    const [stripeSuccess, setStripeSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        fetch('/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ grandTotal })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));
    }, [grandTotal]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        setProcessing(true);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setStripeError(error);
        }
        else {
            setStripeError('');

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

        if (intentError) {
            setStripeError(intentError.message);
            setStripeSuccess('');
        }
        else {
            setStripeError('');
            setStripeSuccess('Your payment is successfully completed');

            setProcessing(false);
        }
    };

    return (
        <div>
            <Container>
                <div>
                    {
                        stripeError ? <Alert variant="warning">
                            {stripeError}
                        </Alert>
                            :
                            ''
                    }

                    <div className={`${'bg-light'} ${styles.stripeFormContainer}`}>
                        <form onSubmit={handleSubmit} className="">
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

                            {
                                processing ? <div className="m-4">
                                    <Spinner animation="border" variant="dark" />
                                </div>
                                    :
                                    <Button type="submit" className="mt-4" disabled={!stripe || stripeSuccess} onClick={handleUpdateStatus}>
                                        Pay ${grandTotal}
                                    </Button>
                            }
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default StripeCheckoutForm;