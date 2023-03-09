import React from "react";
import "./AdvertisementCard.css";

const AdvertisementCard = ({ ad }) => {
  return (
    <div
      className="mx-2 bg-cover h-72 center bg-no-repeat"
      style={{ backgroundImage: `url(${ad.img})` }}
    >
      <div className="relative overlay  px-5 pt-5 h-full">
        {" "}
        <h2 className="text-3xl text-white z-0"> {ad.productName}</h2>
        <button className="text-white  px-4 py-2  border-orange-600  border-2 hover:bg-orange-600 ease-in duration-200 absolute bottom-[40%] left-[50%]"> See details</button>
      </div>
    </div>
  );
};

export default AdvertisementCard;
