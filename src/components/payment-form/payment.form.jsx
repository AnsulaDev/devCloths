import { useState} from 'react';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from 'react-redux';

import {BUTTON_TYPE_CLASS} from '../button/button.component';
import { PaymentFormContainer, FormContainer, PaymentButton} from './payment.styles';
import {selectCartTotal} from '../../store/cart/cart.selector';
import { selectorCurrentUser} from '../../store/user/user.selector';
const PaymentForm= () => {
    const stripe = useStripe();
    const elements = useElements();

    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectorCurrentUser);

    const [isProcessingPayment, setIsProcessingPayment] = useState(false);


    const paymentHandler = async (e) => {
            e.preventDefault();
            if (!stripe || !elements) {
            return;
            }
            setIsProcessingPayment(true);
            const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: amount * 100 }),
            }).then((res) => {
            return res.json();
            });
        
            const clientSecret = response.paymentIntent.client_secret;
        
            const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                name: currentUser ? currentUser.displayName : 'Ansula Dev',
                },
            },
            });
        
            setIsProcessingPayment(false);
        
            if (paymentResult.error) {
            alert(paymentResult.error.message);
            } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Successful!');
            }
            }
        };
        
        return (
            <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment:</h2>
                <CardElement />
                <PaymentButton
                buttonType={BUTTON_TYPE_CLASS.inverted}
                isLoading={isProcessingPayment}
                >
                Pay Now
                </PaymentButton>
            </FormContainer>
            </PaymentFormContainer>
        );
}

export default PaymentForm;