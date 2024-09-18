import React from 'react';
import HeroImage from '../img/HeroImage.jpeg'
import { Link } from 'react-router-dom';
function Hero() {
  return (
    <div className="h-screen bg-slate-400 text-black flex flex-col justify-center items-center px-4 sm:px-8">
      <img src={HeroImage}alt="Hero Image" className="w-[400px] border-2 rounded object-cover" />
      <h1 className="text-5xl font-bold mt-4">Elevate Your Everyday</h1>
      <p className="text-lg mt-4">Discover timeless pieces for every occasion.</p>
      <Link className="bg-black text-white text-lg text-center mt-4 rounded-md p-2" to="/Shop"> Shop Now</Link>
    </div>
  );
}

export default Hero;