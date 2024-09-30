import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItems from "../components/CartItems";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SearchContext } from "../contexts/SearchContext";

const Cart = () => {
  const { cart, clearCart, total } = useContext(CartContext);
  const { setTogglesearch } = useContext(SearchContext);

  return (
    <div onClick={() => setTogglesearch(false)} className="container mx-auto px-4 py-8">
      <h1 className="flex justify-center items-center text-2xl font-bold mb-8">
        <FaShoppingCart className="mr-2" />
        SHOPPING CART
      </h1>
      {cart.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Product</th>
                <th className="p-4 text-center hidden sm:table-cell">Unit Price</th>
                <th className="p-4 text-center">Quantity</th>
                <th className="p-4 text-center hidden sm:table-cell">Total</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <CartItems key={item.id} item={item} />
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-gray-200">
                <td colSpan="2" className="p-4 text-xl text-right font-bold">Total:</td>
                <td colSpan="2" className="p-4 text-xl text-center font-bold">₦ {parseFloat(total).toFixed(2)}</td>
                <td className="p-4 text-center">
                  <button 
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors duration-200 flex items-center justify-center w-full"
                    onClick={clearCart}
                    aria-label="Clear cart"
                  >
                    <FaTrash className="mr-2" />
                    Clear
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
            <Link 
              className="bg-green-500 text-black font-bold py-2 px-4 rounded hover:bg-green-600 transition-colors duration-200 mb-4 sm:mb-0 w-full sm:w-auto text-center"
              to="/Shop"
            >
              Continue Shopping
            </Link>
            <Link 
              className="bg-black text-white font-bold py-2 px-4 rounded transition-colors duration-200 w-full sm:w-auto text-center"
              to="/CheckOut"
            >
              CHECK-OUT
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl mb-4">Your Cart Is Empty</h2>
          <Link
            className="bg-black text-white font-bold py-2 px-4 rounded transition-colors duration-200 inline-block"
            to="/Shop"
          >
            Shop Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;