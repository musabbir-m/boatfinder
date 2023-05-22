import React from "react";
import { useQuery } from "@tanstack/react-query";
import AdvertisementCard from "../AdvertisementCard/AdvertisementCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Advertisement = () => {
  const settings = {
    dots: true,

    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    slidesToShow: 3,

    autoplay: true,
    autoplaySpeed: 1500,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const url = "https://boatfinder-server.vercel.app/advertisement";
  const { data: ads = [], isLoading } = useQuery({
    queryKey: ["advertisement"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  if (ads.length === 0) {
    return <></>;
  }
  return (
    <div className="my-10 mx-5">
      <h2 className="mb-5 text-blue-600 text-center text-5xl font-semibold">
        Advertisement
      </h2>
      <Slider {...settings}>
        {ads?.map((ad) => (
          <AdvertisementCard key={ad._id} ad={ad}></AdvertisementCard>
        ))}
      </Slider>
    </div>
  );
};

export default Advertisement;
