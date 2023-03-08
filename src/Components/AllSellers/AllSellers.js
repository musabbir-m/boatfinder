import React, { useEffect, useState } from 'react';

const AllSellers = () => {

    const [seller, setSeller]= useState([])
    useEffect(
    ()=> {
        fetch('http://localhost:5000/seller')
        .then(res=> res.json())
        .then(data=> setSeller(data))
    }, []
   )

    return (
        <div className="overflow-x-auto">

            <h2 className='text-4xl text-center mb-5'>Sellers</h2>
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
          {seller?.map((seller, i) => (
            <tr key={seller._id}>
              <th>{i + 1}</th>
              <td>{seller.name}</td>
              <td>{seller.email}</td>
              <td>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Verify
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    ;
                  }}
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