import React, { useEffect, useState } from 'react';

const AllBuyer = () => {
    const [seller, setBuyer]= useState([])
    useEffect(
    ()=> {
        fetch('http://localhost:5000/buyer')
        .then(res=> res.json())
        .then(data=> setBuyer(data))
    }, []
   )
    return (
        <div className="overflow-x-auto">

            <h2 className='text-4xl mb-5 text-center'>Buyers</h2>
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
                    class="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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

export default AllBuyer;