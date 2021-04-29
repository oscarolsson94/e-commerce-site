import e from "express";
import React, { useState } from "react";
import CheckoutSteps from "../components/CheckoutSteps";

const [paymentMethod, setPaymentMethod] = useState("");

const submitHandler = () => {
  e.preventDefault();
};

const PaymentMethodScreen = () => {
  return (
    <div>
      <CheckoutSteps step1 step2 step3 />;
      <form onSubmit={submitHandler} className="form">
        <div>
          <h1>Payment</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="paypal">PayPal</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="stripe"
              value="Stripe"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="stripe">Stripe</label>
          </div>
        </div>
        <div>
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentMethodScreen;
