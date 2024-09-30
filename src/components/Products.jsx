import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "../contexts/CartContext";
import { GrStatusGood } from "react-icons/gr";

const Products = ({ product }) => {
  const { id, image, title, price } = product;
  const { addtoCart } = useContext(CartContext);
  const [popup, setPopup] = useState(false);

  const handleAddToCart = () => {
    addtoCart(product, id);
    setPopup(true);
    setTimeout(() => {
      setPopup(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col">
      <div className="border-2 border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <Link
            to={`/product/${id}`}
            className="w-[200px] mx-auto flex justify-center items-center"
          >
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt={title}
            />
          </Link>
        </div>
      </div>
      <button
        className="bg-green-500 flex gap-2 items-center justify-center w-full p-2 rounded-lg text-black hover:bg-green-600 transition duration-300"
        onClick={handleAddToCart}
      >
        <span>ADD TO CART</span>
        <FaCartPlus />
      </button>
      <div className="mt-2">
        <Link to={`/product/${id}`} className="line-clamp-1 font-semibold hover:text-green-500 transition duration-300">
          {title}
        </Link>
        <h1 className="text-xl font-bold">₦ {price.toFixed(2)}</h1>
      </div>
      {popup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-green-400 flex gap-1 items-center text-black p-4 rounded-lg shadow-lg">
            <h1 className="text-xl font-bold">ITEM ADDED TO CART</h1>
            <GrStatusGood className="text-xl mt-1" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;