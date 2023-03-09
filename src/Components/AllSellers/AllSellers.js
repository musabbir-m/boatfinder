import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { async } from "@firebase/util";
import { toast } from "react-hot-toast";

const AllSellers = () => {
  // laod sellers
  const url = "http://localhost:5000/seller";

  const {
    data: sellers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["seller"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  //     const [seller, setSeller]= useState([])
  //     useEffect(
  //     ()=> {
  //         fetch('http://localhost:5000/seller')
  //         .then(res=> res.json())
  //         .then(data=> setSeller(data))
  //     }, []
  //    )

  //delete seller

  const deleteSeller = (target) => {
    const proceed = window.confirm();

    if (proceed) {
      fetch(`http://localhost:5000/seller/${target._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Deleted one seller");
          refetch();
        });
    }
  };

  //verify seller
  const verifySeller = (seller) => {
   

    const verify = { verified: "true" };

    fetch(`http://localhost:5000/seller/${seller._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(verify),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Seller verified");
        refetch();
       
      });
  };

  return (
    <div className="">
      <h2 className="text-4xl text-blue-500 text-center mb-5">Sellers</h2>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Take action</th>
          </tr>
        </thead>
        <tbody>
          {sellers?.map((seller, i) => (
            <tr key={seller._id}>
              <th>{i + 1}</th>
              <td>{seller.name}</td>
              <td>{seller.email}</td>
              <td>
                <button
                onClick={()=> {verifySeller(seller)}}
                  type="button"
                  className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  {seller.verified==='true'? 'verified': 'verify'}
                </button>
              </td>
              <td>
                <button
                  onClick={() => {deleteSeller(seller)}}
                  type="button"
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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

export default AllSellers;
