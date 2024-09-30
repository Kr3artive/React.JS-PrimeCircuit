import React, { useContext, useState } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { SearchContext } from '../contexts/SearchContext';
import { GrStatusGood } from "react-icons/gr";

const ProductDetails = () => {
  const { products } = useContext(ProductContext);  // Get the products from context
  const { id } = useParams();  // Get the product ID from the route parameters
  const {addtoCart} = useContext(CartContext)
  const {setTogglesearch} = useContext(SearchContext)
  const [popup, setPopup] = useState(false);

  // Find the product based on the ID
  const product = products.find(item => item.id === parseInt(id));
  
  // Destructure the product properties after ensuring the product exists
  const { title, image, price, description } = product;
  const handleAddToCart = () => {
    addtoCart(product, id);
    setPopup(true);
    setTimeout(() => {
      setPopup(false);
    }, 1000);
  };


  return (
    <section onClick={()=>setTogglesearch(false)} className='p-10'>
      <div>
        <div className='grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mb-4 gap-4'>
          <img className='w-[300px] p-2' src={image} alt="" />
          <div className='flex gap-6'>
            <button className='bg-green-500 p-2' onClick={handleAddToCart}>ADD TO CART</button>
            <Link className='text-center bg-black text-white p-2' to='/Shop'>CONTINUE SHOP</Link>
          </div>
        </div>
        <div>
          <strong className='text-xl'>{title}</strong>
          <p>{description}</p>
          <strong className='text-lg'>PRICE: ₦ {price}</strong>
        </div>
      </div>
      {popup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-green-400 flex gap-1 items-center text-black p-4 rounded-lg shadow-lg">
            <h1 className="text-xl font-bold">ITEM ADDED TO CART</h1>
            <GrStatusGood className="text-xl mt-1" />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetails;
