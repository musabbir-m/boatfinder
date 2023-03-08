import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { async } from "@firebase/util";
import { toast } from "react-hot-toast";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const [adbtnLoading, setAddbtnLoading] = useState(false);
  const url = `http://localhost:5000/myproducts?email=${user?.email}`;
  console.log(url);

  const {
    data: myProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myproducts"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  //advertise product
  const advertiseItem = (product) => {
    setAddbtnLoading(true);

    const advertise = { advertised: "true" };

    fetch(`http://localhost:5000/advertise/${product._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(advertise),
    })
      .then((res) => res.json())
      .then((data) => {
       toast('advertised successfully')
        refetch()
        setAddbtnLoading(false)
      });

  };

  if (isLoading) {
    return <button className="btn btn-square loading"></button>;
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
                <button disabled
                  onClick={()=>{advertiseItem(product)}}
                  className={`text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 `}
                >
                  {product.advertised === "false" ? "advertise" : "advertised"}{" "}
                  
                </button>
              </td>
              <td>
                <button class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
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
