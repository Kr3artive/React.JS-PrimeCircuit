import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { SearchContext } from '../contexts/SearchContext';

const ProductDetails = () => {
  const { products } = useContext(ProductContext);  // Get the products from context
  const { id } = useParams();  // Get the product ID from the route parameters
  const {addtoCart} = useContext(CartContext)
  const {setTogglesearch} = useContext(SearchContext)

  // Find the product based on the ID
  const product = products.find(item => item.id === parseInt(id));
  
  // Destructure the product properties after ensuring the product exists
  const { title, image, price, description } = product;

  return (
    <section onClick={()=>setTogglesearch(false)} className='p-10'>
      <div>
        <div className='grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mb-4 gap-4'>
          <img className='w-[300px] p-2' src={image} alt="" />
          <div className='flex gap-6'>
            <button className='bg-green-500 p-2' onClick={()=>addtoCart(product,id)}>ADD TO CART</button>
            <Link className='text-center bg-black text-white p-2' to='/Shop'>CONTINUE SHOP</Link>
          </div>
        </div>
        <div>
          <strong className='text-xl'>{title}</strong>
          <p>{description}</p>
          <strong className='text-lg'>PRICE: ₦ {price}</strong>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
