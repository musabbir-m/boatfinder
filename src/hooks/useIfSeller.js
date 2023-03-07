import React, { useEffect, useState } from 'react';

const useIfSeller = (email) => {
   const [isSeler, setIsSeller]= useState(false)
   const [sellerLoading, setSellerLoading]= useState(true)

   useEffect(
    ()=> {
        fetch(`http://localhost:5000/user/seller/${email}`)
        .then(res=> res.json())
        .then(data=> {
            setIsSeller(data.isSeler)
            setSellerLoading(false)
        })
    }
   )
    return (
        [isSeler,sellerLoading]
    );
};

export default useIfSeller;