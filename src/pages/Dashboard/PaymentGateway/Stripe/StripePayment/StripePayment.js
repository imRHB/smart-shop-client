import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckoutForm from "../StripeCheckoutForm/StripeCheckoutForm";

const stripePromise = loadStripe('pk_test_51JvolqDDx1eUK2QE6EQUXOtHXlcxn3Mh8emlRCkKOIr28p0yAhQ03BXSiaOizrX90axYizuhY4FrsSAmshvUHEUV00SRG0P7pa');

const StripePayment = () => {
    const amount = 300;

    const { id } = useParams();

    const [service, setService] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch(`/${id}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
                setIsLoading(false);
            })
    }, [id]);

    return (
        <div>
            {
                amount && <Elements stripe={stripePromise}>
                    <StripeCheckoutForm
                        service={service}
                    />
                </Elements>
            }
        </div>
    );
};

export default StripePayment;