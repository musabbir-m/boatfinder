import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const handleSubscribe = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    if (email === "") {
      toast.error("please provide an email");
      return;
    }
    setEmail(email);

    toast.success("Subscription added successfully");

    console.log(email);
  };
  return (
    <div className="mt-10 h-96 flex flex-col items-center justify-center">
      <h2 className="text-center  text-3xl font-semibold py-3">Newsletter</h2>
      <p className="font-semibold text-xl">Subcribe to our newsletter</p>
      <div className="mt-5 w-full flex items-center justify-center ">
        <form action="" onSubmit={handleSubscribe}>
          <input
            type="email"
            name="email"
            placeholder="your email"
            className="px-5 w-46 md:w-96  h-12 bg-gray-300  inline-block"
          />
          <button
            className="inline-block px-3 py-3 h-12 bg-orange-500 hover:bg-blue-600 hover:text-white ease-in duration-200"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
