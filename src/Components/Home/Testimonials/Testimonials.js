import React from "react";
import "./Testimonial.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import img1 from "../../../Assets/img1.jpg";
import img2 from "../../../Assets/img2.jpg";
import img3 from "../../../Assets/img3.jpg";
import img4 from "../../../Assets/img4.jpg";
import img5 from "../../../Assets/img5.jpg";

const Testimonials = () => {
  return (
    <div className="testimonial-main w-full   h-[1000px] md:h-[500px]  mt-16 mx-auto text-white ">
      <div className="testimonial-overlay">
        <h2 className="text-3xl font-semibold text-center text-white mt-8">
          What Our Clients Say
        </h2>
        <div className=" px-5 py-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-8">
          <div className="w-80 flex flex-col items-center ">
            <RiDoubleQuotesL className="text-orange-400 text-3xl" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit
            numquam est maiores culpa ut. Eveniet, numquam. Placeat, officiis
            at.
            <img src={img1} alt="" className="rounded-full w-24 mt-5" />
            <h3 className="text-center text-orange-400 font-semibold mt-3">
              JON DON
            </h3>
          </div>

          <div className="w-80 flex flex-col items-center">
            <RiDoubleQuotesL className="text-orange-400 text-3xl" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit
            numquam est maiores culpa ut. Eveniet, numquam. Placeat, officiis
            at.
            <img src={img2} alt="" className="rounded-full w-24 mt-5" />
            <h3 className="text-center text-orange-400 font-semibold mt-3">
              JON DON
            </h3>
          </div>

          <div className="w-80 flex flex-col items-center">
            <RiDoubleQuotesL className="text-orange-400 text-3xl" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit
            numquam est maiores culpa ut. Eveniet, numquam. Placeat, officiis
            at.
            <img src={img3} alt="" className="rounded-full mt-5 w-24" />
            <h3 className="text-center text-orange-400 font-semibold mt-3">
              JON DON
            </h3>
          </div>

          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
