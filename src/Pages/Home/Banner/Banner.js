import React from "react";
import "./Banner.css";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
import BannerItem from "./BannerItem";

const bannerData = [
  {
    id: 1,
    img: img1,
    next: 2,
    previous: 7,
  },
  {
    id: 2,
    img: img2,
    next: 3,
    previous: 1,
  },
  {
    id: 3,
    img: img3,
    next: 4,
    previous: 2,
  },
  {
    id: 4,
    img: img4,
    next: 5,
    previous: 3,
  },
  {
    id: 5,
    img: img5,
    next: 6,
    previous: 4,
  },
  {
    id: 6,
    img: img6,
    next: 1,
    previous: 5,
  },
];

const Banner = () => {
  return (
    <div className="carousel w-full pb-10">
      {bannerData.map((slide) => (
        <BannerItem key={slide.id} slide={slide}></BannerItem>
      ))}
    </div>
  );
};

export default Banner;
