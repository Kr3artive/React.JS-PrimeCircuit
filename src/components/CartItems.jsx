import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { CartContext } from '../contexts/CartContext';

const CartItems = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  const { id, title, price, amount, image } = item;

  return (
    <div className="relative border-2 w-full border-black rounded-lg mb-3 p-2 items-center gap-2">
      <button className="bg-red-500 absolute top-2 right-2" onClick={() => removeFromCart(id)}>
        <IoMdClose className="text-black hover:text-white transition" />
      </button>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Link className="flex justify-center" to={`/product/${id}`}>
          <img className="p-2 max-w-[150px]" src={image} alt="" />
        </Link>
        <div className="flex justify-center gap-2 items-center">
          <Link className="text-xl uppercase font-medium max-w-[240px] hover:underline" to={`/ProductDetails/${id}`}>
            {title}
          </Link>
        </div>
        <div className="flex justify-center gap-2 items-center">
          <button className="bg-red-500 text-xl mt-2 rounded-full" onClick={() => decreaseAmount(id)}>
            <IoMdRemove />
          </button>
          <div className="mt-2 font-bold">{amount}</div>
          <button className="bg-green-500 text-xl mt-2 rounded-full" onClick={() => increaseAmount(id)}>
            <IoMdAdd />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-xl">UNIT PRICE: {price}</div>
          <div className="text-xl font-bold">{`₦ ${parseFloat(price * amount).toFixed(0)}`}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;