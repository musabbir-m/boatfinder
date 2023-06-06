import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({booking}) => {
  const [clientSecret, setClientSecret]= useState("")  
  const [cardError, setCardError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const {price, buyerName, buyerEmail}= booking

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json",
    authorization: `bearer ${localStorage.getItem("boatfinderToken")}`
    },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

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
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    const {paymentIntent, error: confirmError}= await stripe.confirmCardPayment(clientSecret,
        {
            payment_method: {
                card: card, 
                billing_details: {
                    name: buyerName,
                    email: buyerEmail
                }
            }
        })

    if (confirmError){
        setCardError(confirmError.message)
        return 
    }
    console.log(paymentIntent, "intent");
  };

  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="btn btn-sm btn-primary mt-4"
        >
          Pay
        </button>
      </form>

      {
        cardError && <p className="text-red-500">{cardError}</p>
      }
    </>



  );
};

export default CheckoutForm;
