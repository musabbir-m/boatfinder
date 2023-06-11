import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const [adbtnLoading, setAddbtnLoading] = useState(false);
  const url = `https://boatfinder-server.vercel.app/myproducts?email=${user?.email}`;
  console.log(url);

  const {
    data: myProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myproducts"],
    queryFn: async () => {
      const res = await fetch(url,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('boatfinderToken')}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  //delete product

  const deleteProduct = (product) => {
    const proceed = window.confirm(
      "Do you really want to delete this product?"
    );
    if (proceed) {
      fetch(
        `https://boatfinder-server.vercel.app/myproductdelete/${product._id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          toast("Deleted product");
          refetch();
        });
    }
  };

  //advertise product
  const advertiseItem = (product) => {
    setAddbtnLoading(true);

    const advertise = { advertised: "true" };

    fetch(`https://boatfinder-server.vercel.app/advertise/${product._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(advertise),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("advertised successfully");
        refetch();
        setAddbtnLoading(false);
      });
  };

  if (isLoading) {
    return <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
    <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-32 w-32"></div>
  </div> 
  
  }
  
  return (
    <div className="overflow-x-auto px-5 py-10">
      <h2 className="mb-5 lg:mb-10 text-center text-4xl font-semibold">
        Products Added By You.
      </h2>
      {adbtnLoading && <button className="btn btn-square loading"></button>}
      <table className="table table-zebra">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Advertise</th>
            <th>Take action</th>
          </tr>
        </thead>
        <tbody>
          {myProducts.map((product, i) => (
            <tr key={product._id}>
              <th>{i + 1}</th>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>
                <button
                  onClick={() => {
                    advertiseItem(product);
                  }}
                  className={`text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 `}
                >
                  {product.advertised === "false" ? "advertise" : "advertised"}{" "}
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    deleteProduct(product);
                  }}
                  class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;
