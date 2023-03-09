import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import CategoryProductCard from "../CategoryProductCard/CategoryProductCard";

const CategoryProducts = () => {
  const data = useLoaderData();
  const [currentBoat, setCurrentBoat] = useState(null);
  console.log(data);
  return (
    <div className="mt-10 mx-10 grid grid-cols-1 lg:grid-cols-2 gap-2">
      {data.map((product) => (
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
