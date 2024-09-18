import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io"
import { CartContext } from '../contexts/CartContext'

const CartItems = ({item}) => {
  const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext)
  const {id, title, price, amount, image} = item
  
  return (
    <div>
      <div className='grid relative border-2 w-full border-black rounded-lg mb-3 p-2 items-center gap-2 '>
      <button className='bg-red-500 absolute top-2 right-2' onClick={()=> removeFromCart(id)}><IoMdClose className='text-black hover:text-white transition' /></button>
        <Link className='flex justify-center' to={`/product/${id}`}><img className='p-2 max-w-[150px]' src={image} alt="" /></Link>
        <div className='flex justify-center gap-2 items-center'>
          <Link className='text-xl uppercase font-medium max-w[240px] hover:underline ' to={`/ProductDetails/${id}`}>{title}</Link>
        </div>
        <div className='bg-black rounded-lg text-white'>
          <div className='flex gap-2 justify-center items-center'>
            <button className='bg-red-500 text-xl mt-2 rounded-full' onClick={()=> decreaseAmount(id)}><IoMdRemove/></button>
            <div className='mt-2 font-bold'>{amount}</div>
            <button className='bg-green-500 text-xl mt-2 rounded-full' onClick={()=> increaseAmount(id)} ><IoMdAdd/></button>
          </div>
          <div>
            <div className='flex justify-center'>{price}</div>
            <strong className='flex justify-center'>{`₦ ${parseFloat(price * amount).toFixed(0)}`}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
