import { loadStripe } from "@stripe/stripe-js"; //Load Stripe is what runs in order for us to actually know that this is our stripe instance.

export const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);