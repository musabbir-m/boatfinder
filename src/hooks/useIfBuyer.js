import React, { useEffect, useState } from 'react';

const useIfBuyer = (email) => {

    const [isBuyer, setIsBuyer]= useState(false)
    const [buyerLoading, setBuyerLoading]= useState(true)
    useEffect(()=> {
        if(email){
            fetch(`http://localhost:5000/user/buyer/${email}`)
            .then(res=> res.json())
            .then(data=> {
                setIsBuyer(data.isBuyer)
                setBuyerLoading(false)
            })
        }
    }, [email])
    return (
       [isBuyer, buyerLoading]
    );
};

export default useIfBuyer;