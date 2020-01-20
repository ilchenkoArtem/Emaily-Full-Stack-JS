import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { handleTokenPayment } from "../actions";

export default () => {
  const dispatch = useDispatch();

  return (
    <StripeCheckout
      name="Emaily"
      description="$5 for 5 email credits"
      amount={500}
      token={token => dispatch(handleTokenPayment(token))}
      stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
    >
      <button className="btn">Add Credits</button>
    </StripeCheckout>
  );
};
