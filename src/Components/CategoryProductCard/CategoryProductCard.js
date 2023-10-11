import React from "react";

const CategoryProductCard = ({ boat, setCurrentBoat }) => {
  const { productName, productCategory, price, condition, description, img } =
    boat;
  return (
    <div className="border-2 border-gray-100 max-w-sm bg-base-100 shadow-xl">
      <img className="w-full h-60" src={img} alt="" />

      <div className="card-body">
        <h2 className="card-title">
          {productName}
          <div className="badge badge-secondary">{condition}</div>
        </h2>
        <p>{description.slice(0, 150)}</p>
        <div className="card-actions justify-end">
          {/* <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div> */}

          <p className="font-semibold">
            Price: $ <span className="text-orange-500">{price}</span>
          </p>
        </div>

        {!boat.booked ? (
          <label
            htmlFor="booking-modal"
            className="btn  border-none bg-blue-500 px-3 py-2 text-center w-28 mx-auto text-white"
            onClick={() => setCurrentBoat(boat)}
          >
            Book Now
          </label>
        ) : (
          <p className="font-bold text-blue-500">Already booked</p>
        )}

        {boat?.booked === "true" && (
          <p className="font-bold text-orange-500">Already Booked</p>
        )}
      </div>
    </div>
  );
};

export default CategoryProductCard;
