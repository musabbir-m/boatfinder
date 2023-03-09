import React, { useEffect, useState } from "react";

const useIfBuyer = (email) => {
  const [isBuyer, setIsBuyer] = useState(false);
  const [buyerLoading, setBuyerLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://boatfinder-server.vercel.app/user/buyer/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsBuyer(data.isBuyer);
          console.log(data.isBuyer);
          setBuyerLoading(false);
        });
    }
  }, [email]);
  return [isBuyer, buyerLoading];
};

export default useIfBuyer;
