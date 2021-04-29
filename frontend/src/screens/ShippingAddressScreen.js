import React, { useState } from "react";
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingAddressScreen = () => {
  const [fullName, setfullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch save shipping action
  };

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}></form>
      <div>
        <h1>Shipping Address</h1>
      </div>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          placeholder="Enter you full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
    </div>
  );
};

export default ShippingAddressScreen;
