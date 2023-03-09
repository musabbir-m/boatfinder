import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { async } from "@firebase/util";
import { AuthContext } from "../Context/AuthProvider";
import MyBookingCard from "../MyBookingCard/MyBookingCard";

const MyBookings = () => {
  const { user } = useContext(AuthContext);

  const url = `https://boatfinder-server.vercel.app/booking/${user?.email}`;

  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="mx-auto px-2 md:px-5">
      <h2 className="text-5xl font-semibold text-blue-600 mb-3 text-center">
        {" "}
        Your Bookings{" "}
      </h2>
      <p className="text-center text-2xl font-semibold mb-10">
        Make payment to confirm your purchase.
      </p>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {bookings?.map((booking) => (
          <MyBookingCard key={booking._id} booking={booking}></MyBookingCard>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
