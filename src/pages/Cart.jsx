import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import CartItems from '../components/CartItems'
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { SearchContext } from '../contexts/SearchContext';

const Cart = () => {
    const {cart, clearCart, total} = useContext(CartContext)
    const {setTogglesearch} = useContext(SearchContext)
  return (
    <div onClick={()=>setTogglesearch(false)}>
      <strong className=' flex justify-center mt-4 text-4xl'>SHOPPING CART</strong>
      {cart.length > 0 ? (
      <div className='p-2'>
        <div>
            {cart.map((item)=>{
                return( 
                <div>
                  <CartItems item={item} key={item.id}/>
                  <div className='flex justify-between'>
                  </div>
                </div>
                )
            })}
            <div className='flex flex-col mt-4 mb-4 justify-around md:flex-row lg:flex-row xl:flex-row'>
              <Link className='bg-green-500 p-2 text-center' to='/Shop' >Continue Shopping</Link>
              <Link className='bg-black p-2 text-white text-center' to='/CheckOut' >CHECK-OUT</Link>
            </div>
        </div>
        <div className='flex justify-around'>
         <strong className='p-2'>TOTAL: {total}</strong>
         <button className='p-2' onClick={clearCart} ><FaTrash/></button>
        </div>
      </div>
    ):(
      <div className='grid text-2xl mt-4 mb-4 justify-center'>
        <h1>Your Cart Is Empty</h1>
        <Link className='bg-black text-white text-lg text-center mt-2 rounded-md p-2' to='/Shop'>Shop Now</Link>
      </div>
    )}
    </div>
  )
}

export default Cart
