import React from "react";
import HeroImage from "../img/HeroImage.jpeg";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="h-screen text-black justify-center items-center px-4 sm:px-8">
      <div className="h-full justify-around items-center flex sm:block md:flex">
        <img
          src={HeroImage}
          alt="Hero Image"
          className=" sm:mt-8 w-[400px] border-2 rounded object-cover"
        />
        <div>
          <h1 className="mt-4 text-5xl font-bold">Elevate Your Everyday</h1>
          <p className=" my-4 text-lg">
            Discover timeless pieces for every occasion.
          </p>
          <Link
            className="bg-black text-white text-lg text-center rounded-md p-2"
            to="/Shop"
          >
            {" "}
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
