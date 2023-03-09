import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import CategoryProductCard from "../CategoryProductCard/CategoryProductCard";

const CategoryProducts = () => {
  const data = useLoaderData();
  const [currentBoat, setCurrentBoat] = useState(null);
  console.log(data);

  if (data.length===0) {
    return <h2>Loading..</h2>
  }
  return (
    <div className="mt-5 mx-auto lg:mt-10 px-5   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {data?.map((product) => (
        <CategoryProductCard
          key={product._id}
          boat={product}
          setCurrentBoat={setCurrentBoat}
        ></CategoryProductCard>
      ))}
      {currentBoat && (
        <BookingModal
          currentBoat={currentBoat}
          setCurrentBoat={setCurrentBoat}
        ></BookingModal>
      )}
    </div>
  );
};

export default CategoryProducts;
