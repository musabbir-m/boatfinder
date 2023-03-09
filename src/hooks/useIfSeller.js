import React, { useEffect, useState } from "react";

const useIfSeller = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  const [sellerLoading, setSellerLoading] = useState(true);

  useEffect(() => {
    fetch(`https://boatfinder-server.vercel.app/user/seller/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setIsSeller(data.isSeller);
        setSellerLoading(false);
      });
  });
  return [isSeller, sellerLoading];
};

export default useIfSeller;
