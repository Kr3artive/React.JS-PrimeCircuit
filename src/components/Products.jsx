import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa"
import { FaInfoCircle } from "react-icons/fa"
import { CartContext } from '../contexts/CartContext';


const Products = ({product}) => {
  const {id, image, title, price} = product
  const {addtoCart} = useContext(CartContext)
  
  return (
    <div>
    <Link key={id} to={`/product/${id}`}>
     <div className='border-2 border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition '>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='w-[200px] mx-auto flex justify-center items-center'>
          <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt="" />
        </div>
      </div>
     </div>
     <div>
      <Link to={`/product/${id}`} ><strong>{title}</strong></Link>
      <div className='flex  items-center p-2 text-xl justify-around'>
        <h1 className='text-xl'>₦ {price}</h1>
        <button className='bg-green-500 p-2 rounded-lg' onClick={()=> addtoCart(product,id)} ><FaCartPlus/></button>
      </div>
     </div>
    </Link>
    </div>
  )
}

export default Products
