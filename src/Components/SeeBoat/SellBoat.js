import React from "react";
import { useNavigate } from "react-router-dom";

const SellBoat = () => {
  const navigate = useNavigate();
  const handleSellButton = () => {
    navigate("/signup", {
      state: { message: "Sign up as a seller to list your boats for selling" },
    });
  };
  return (
    <div className="mt-16 mx-auto  py-5 flex flex-col md:flex-row justify-center items-center  bg-blue-300 ">
      <div className="w-2/4 max-w-full px-5 relative">
        <h3 className="text-3xl md:text-4xl font-bold">Sell Your Boat</h3>
        <p className="mt-8">
          Ready to sell your boat? Listing in boatfinder <br /> makes it
          super-easy for you.
        </p>
        <button
          onClick={handleSellButton}
          className="mt-5 mb-3 px-3 py-2 bg-orange-500 text-white"
        >
          Sell My Boat
        </button>
      </div>
      <div className="w-2/4 mx-2">
        <img
          className="w-full rounded-xl"
          src="https://i.ibb.co/5TVRnT2/sellBoat.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default SellBoat;
