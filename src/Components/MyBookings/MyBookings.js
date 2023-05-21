import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Context/AuthProvider";
import MyBookingCard from "../MyBookingCard/MyBookingCard";

const MyBookings = () => {
  const { user } = useContext(AuthContext);

  const url = `https://boatfinder-server.vercel.app/booking?email=${user?.email}`;

  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("boatfinderToken")}`,
        },
      });
      const data = await res.json();
      console.log(data, "booking");
      return data;
    },
  });

  if (isLoading) {
    return (
      <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div class="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-32 w-32"></div>
      </div>
    );
  }

  if (bookings?.message) {
    return <h2>{bookings.message}</h2>;
  }

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
