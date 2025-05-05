import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="p-3 flex items-center bg-base-200">
      <div className="bg-secondary text-base-100 px-3 py-2">Latest</div>
      <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
        <p className="font-bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Perspiciatis, aspernatur.
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Perspiciatis, aspernatur.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
