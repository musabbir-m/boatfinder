import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

const CheckoutForm = ({booking}) => {
  const [clientSecret, setClientSecret]= useState("")  
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing]= useState(false)
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const {price, buyerName, buyerEmail, _id}= booking

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "content-type": "application/json",
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

    setSuccess('')
    setProcessing(true)

    const {paymentIntent, error: confirmError}= await stripe.confirmCardPayment(clientSecret,
        {
            payment_method: {
                card: card, 
                billing_details: {
                    name: buyerName,
                    email: buyerEmail,
                   
                }
            }
        })

    if (confirmError){
        setCardError(confirmError.message)
        return 
    }

    if(paymentIntent.status==="succeeded"){
     
    

      const payment= {
        price,
        transactionId: paymentIntent.id,
        email: buyerEmail,
        bookingId: _id
      }

      fetch("http://localhost:5000/payment", {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `bearer ${localStorage.getItem('boatfinderToken')}`
        },
        body: JSON.stringify(payment)
      })
      .then(res=> res.json())
      .then(data=> {
        if(data.insertedId){
          setSuccess("Congrats! your payment completed")
          setTransactionId(paymentIntent.id)
        }
      })
      
    }
    setProcessing(false)
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
          disabled={!stripe || !clientSecret || processing}
          className="btn btn-sm btn-primary mt-4"
        >
          Pay
        </button>
      </form>

      {
        cardError && <p className="text-red-500">{cardError}</p>
      }
      {
        success && <div>
          <p className="text-green-500">{success}</p>
          <p>Your transaction id: <span className="font-bold">{transactionId}</span> </p>

        </div>
      }
    </>



  );
};

export default CheckoutForm;
