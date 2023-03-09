import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  //Add Product functin
  const handleAddProduct = (data) => {
    const imageBbKey = "e419d019481d8c92648b9beb567065df";
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?&key=${imageBbKey}`;
    //
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);

          //prouct data

          const newProduct = {
            productName: data.name,
            productCategory: data.category,
            price: data.price,
            condition: data.condition,
            purchaseDate: data.purchaseDate,
            postDate: new Date().toJSON().slice(0, 10),
            yearsUsed: data.useDuration,
            location: data.location,
            mobile: data.phone,
            sellerEmail: user?.email,
            img: imgData.data.url,
            description: data.description,
            advertised: "false",
            salesStatus: "unsold",
          };

          console.log(newProduct);
          //post product
          fetch("https://boatfinder-server.vercel.app/product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newProduct),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              toast("Product Added Successfully");
            });
        }
        navigate("/dashboard/myproducts");
      });
    //
  };

  //callsses for style

  const labelClass = " mb-2 text-sm font-medium text-gray-900 ";
  const inputClass =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   w-full p-2.5  ";

  //Add product form
  return (
    <div className="my-10 h-full">
      <h2 className="text-4xl text-center border text-orange-500 mb-8 py-2 shadow-sm">
        Add Product
      </h2>

      <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="grid gap-3 mb-10 md:grid-cols-2">
          <div>
            <label htmlFor="first-name" className={labelClass}>
              Product Name
            </label>
            <input
              {...register("name")}
              type="text"
              id=""
              className={inputClass}
              placeholder="product model or name"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="last-name" className={labelClass}>
              Category
            </label>
            <select className={inputClass} {...register("category")}>
              <option value="6405b0e3ff3e999f86ee5e92">Sail Boat</option>
              <option value="6405b0e3ff3e999f86ee5e91">Powered Boat</option>
              <option value="6405b0e3ff3e999f86ee5e93">Unpowerd Boat</option>
            </select>
          </div>
          <div>
            <label htmlFor="price" className={labelClass}>
              Price
            </label>
            <input
              {...register("price")}
              type="text"
              id="price"
              className={inputClass}
              placeholder="price $"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="condition" className={labelClass}>
              Condition
            </label>
            <select className={inputClass} {...register("condition")}>
              <option value="excellent">excellent</option>
              <option value="good">good</option>
              <option value="fair">fair</option>
            </select>
          </div>
          <div>
            <label htmlFor="purchase-date" className={labelClass}>
              Date of Purchase
            </label>
            <input
              {...register("purchaseDate")}
              type="date"
              id="date"
              className={inputClass}
              placeholder="eg: 1-1-2020"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="used" className={labelClass}>
              Total used
            </label>
            <input
              {...register("useDuration")}
              type="text"
              id="useduration"
              className={inputClass}
              placeholder="duration of use (in month)"
              required
            ></input>
          </div>
        </div>

        <div>
          <label htmlFor="location" className={labelClass}>
            Location
          </label>
          <input
            {...register("location")}
            type="text"
            id="location"
            className={inputClass}
            placeholder="eg: Dhaka"
            required
          ></input>
        </div>

        <div>
          <label htmlFor="mobile" className={labelClass}>
            Mobile number{" "}
          </label>
          <input
            {...register("phone")}
            type="tel"
            id="tel"
            className={inputClass}
            placeholder="01700000000"
            required
          ></input>
        </div>

        <div className="mb-6">
          <label htmlFor="email" className={labelClass}>
            Email address
          </label>
          <input
            {...register("email")}
            defaultValue={user?.email}
            type="email"
            id="email"
            className={inputClass}
            placeholder={user?.email}
            disabled
          ></input>
        </div>
        {/* Image bellow */}
        <div className="mb-6">
          <label htmlFor="email" className={labelClass}>
            Add Photo{" "}
          </label>
          <input
            {...register("img")}
            type="file"
            id="img"
            className={inputClass}
          ></input>
        </div>

        <div className="mb-6">
          <label htmlFor="description" className={labelClass}>
            Description
          </label>
          <textarea
            {...register("description")}
            className="textarea textarea-bordered w-full"
            placeholder="Product description"
          ></textarea>
        </div>

        <input
          className="py-3 px-4   mx-auto  mb-10  bg-orange-500 text-white hover:bg-orange-400
          "
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
