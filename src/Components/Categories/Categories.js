import React, { useEffect, useState } from "react";
import { IoBoatSharp } from "react-icons/io5";
import { CgArrowLongRightC } from "react-icons/cg";
import { GiSailboat } from "react-icons/gi";
import { TbSailboat } from "react-icons/tb";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    <motion.div
     className=" py-16 mx-auto bg-gray-200"
     whileInView={{opacity:[0,1]}}
     transition={{duration:1.5}}

     >
      <h2 className="md:pt-5 text-3xl  md:text-4xl  text-blue-700  text-center">Boat Categories</h2>
      <p className="mt-5 text-2xl text-gray-700 text-center font-extralight">
        Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Nulla,
        sint.
      </p>
      
      <motion.div 
      className="py-10 px-5 flex flex-col justify-center items-center lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {categories?.map((category) => (
          <motion.div 
          whileHover={{scale:1.1}}
          transition={{duration:0.5, ease:'easeInOut'}}
          className="bg-white border-b-4 border-blue-500 max-w-sm   h-72 py-8 px-5 shadow-md border-0  text-center">
            <div className="flex justify-center">
              <IoBoatSharp className="text-6xl text-blue-500"></IoBoatSharp>
            </div>
            <h4 className="text-2xl  mb-5  pb-5 ">
              {" "}
              {category.categoryName} Boats
            </h4>
            <p className="mb-5 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, doloribus?
            </p>{" "}
            <Link
              to={`/category/${category._id}`}
              className="px-5 py-2 text- font-semibold border-2  border-orange-400  hover:bg-orange-400 ease-in duration-100"
            >
              See all <CgArrowLongRightC className="inline"></CgArrowLongRightC>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Categories;
