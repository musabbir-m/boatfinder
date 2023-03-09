import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { async } from "@firebase/util";
import { toast } from "react-hot-toast";

const AllBuyer = () => {
  //     const [buyer, setBuyer]= useState([])
  //     useEffect(
  //     ()=> {
  //         fetch('https://boatfinder-server.vercel.app/buyer')
  //         .then(res=> res.json())
  //         .then(data=> setBuyer(data))
  //     }, []
  //    )
  const url = "https://boatfinder-server.vercel.app/buyer";
  const {
    data: buyers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["buyer"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = res.json();
      return data;
    },
  });
  //veryfy buyer
  const verifyBuyer = (buyer) => {
    const verify = { verified: "true" };

    fetch(`https://boatfinder-server.vercel.app/buyer/${buyer._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(verify),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Buyer verified");
        refetch();
      });
  };

  //delete buyer
  const deleteBuyer = (buyer) => {
    const proceed = window.confirm();
    fetch(`https://boatfinder-server.vercel.app/buyer/${buyer._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Deleted Buyer");
        refetch();
      });
  };
  return (
    <div className="overflow-x-auto">
      <h2 className="text-4xl mb-5 text-center">Buyers</h2>
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
          {buyers?.map((buyer, i) => (
            <tr key={buyer._id}>
              <th>{i + 1}</th>
              <td>{buyer.name}</td>
              <td>{buyer.email}</td>
              <td>
                <button
                  onClick={() => {
                    verifyBuyer(buyer);
                  }}
                  type="button"
                  className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  {buyer?.verified === "true" ? "verified" : "verify"}
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    deleteBuyer(buyer);
                  }}
                  type="button"
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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

export default AllBuyer;
