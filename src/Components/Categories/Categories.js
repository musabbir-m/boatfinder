import React, { useEffect, useState } from "react";
import { IoBoatSharp } from "react-icons/io5";
import { CgArrowLongRightC } from "react-icons/cg";
import { GiSailboat } from "react-icons/gi";
import { TbSailboat } from "react-icons/tb";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://boatfinder-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  if (categories.length === 0) {
    return (
      <button className="btn btn-square loading bg-white text-blue-600 border-none flex justify-center mx-auto"></button>
    );
  }

  return (
    <div className="my-10 py-5 mx-auto bg-gray-200">
      <h2 className="text-5xl font-bold text-center">Boat Categories</h2>
      <p className="mt-5 text-xl text-gray-700 text-center">
        Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Nulla,
        sint.
      </p>
      <div className="py-10 px-5 flex flex-col justify-center items-center lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {categories?.map((category) => (
          <div className="bg-white border-b-4 border-blue-500 max-w-sm   h-72 py-8 px-5 shadow-md border-0  text-center">
            <div className="flex justify-center">
              <IoBoatSharp className="text-6xl text-blue-500"></IoBoatSharp>
            </div>
            <h4 className="text-2xl  mb-5  pb-5 font-semibold">
              {" "}
              {category.categoryName} Boats
            </h4>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, doloribus?
            </p>{" "}
            <Link
              to={`/category/${category._id}`}
              className="px-5 py-2 text- font-semibold border-2  border-orange-400  hover:bg-orange-400 ease-in duration-100"
            >
              See all <CgArrowLongRightC className="inline"></CgArrowLongRightC>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
