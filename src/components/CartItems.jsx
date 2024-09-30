import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { CartContext } from '../contexts/CartContext';

const CartItems = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  const { id, title, price, amount, image } = item;

  return (
    <tr className="border-b border-gray-200">
      <td className="p-4">
        <div className="flex items-center space-x-4">
          <Link to={`/product/${id}`} className="hidden sm:block">
            <img className="w-16 h-16 object-contain" src={image} alt={title} />
          </Link>
          <div className="flex flex-col">
            <Link 
              className="text-sm md:text-base font-medium hover:underline"
              to={`/ProductDetails/${id}`}
            >
              {title}
            </Link>
            <span className="text-sm text-gray-500 sm:hidden">₦ {parseFloat(price).toFixed(2)}</span>
          </div>
        </div>
      </td>
      <td className="p-4 text-center hidden sm:table-cell">₦ {parseFloat(price).toFixed(2)}</td>
      <td className="p-4">
        <div className="flex justify-center items-center space-x-2">
          <button 
            className="bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors duration-200"
            onClick={() => decreaseAmount(id)}
            aria-label="Decrease quantity"
          >
            <IoMdRemove />
          </button>
          <span className="font-bold">{amount}</span>
          <button 
            className="bg-green-500 text-white p-1 rounded-full hover:bg-green-600 transition-colors duration-200"
            onClick={() => increaseAmount(id)}
            aria-label="Increase quantity"
          >
            <IoMdAdd />
          </button>
        </div>
      </td>
      <td className="p-4 text-center hidden sm:table-cell font-bold">
        ₦ {parseFloat(price * amount).toFixed(2)}
      </td>
      <td className="p-4 text-center">
        <button 
          className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors duration-200"
          onClick={() => removeFromCart(id)}
          aria-label="Remove item"
        >
          <IoMdClose />
        </button>
      </td>
    </tr>
  );
};

export default CartItems;