import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Button, {BUTTON_TYPE_CLASS} from '../button/button.component';
import { PaymentFormContainer, FormContainer} from './payment.styles';

const PaymentForm= () => {
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();

        if(!stripe || !elements){
            return;
        }

        
    }

    return(
        <PaymentFormContainer>
            <h2> Credit Card Payment: </h2>
            <FormContainer>
            <CardElement/>
            <Button buttonType={BUTTON_TYPE_CLASS.inverted}>Pay now</Button>
            </FormContainer>
    
        </PaymentFormContainer>
    )
}

export default PaymentForm;