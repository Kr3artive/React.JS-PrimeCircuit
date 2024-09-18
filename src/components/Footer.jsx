import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Payment from "../img/Payment.png"
import { SiMinutemailer } from "react-icons/si"
import { SearchContext } from '../contexts/SearchContext'

const Footer = () => {
  const {setTogglesearch} = useContext(SearchContext)
  return (
    <div onClick={()=> setTogglesearch(false)} className='bg-black gap-3 p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:justify-around'>
      <div>
        <Link to={'/'} ><strong className='text-white text-[30px]'>PrimeCircuit</strong></Link>
        <p className='text-white mb-4'>The customer is at the heart of our unique business model, which includes design.</p>
        <img src={Payment} alt="" />
      </div>
      <div className='text-white grid grid-col'>
        <strong>SHOPPING</strong>
        <a href="#">Men Wears</a>
        <a href="#">Women Wears</a>
        <a href="#">Electronics</a>
        <a href="#">Jeweleries</a>
      </div>
      <div className='text-white grid grid-col'>
        <strong>INFORMATION</strong>
        <a href="#">Contact Us</a>
        <a href="#">Payment Methods</a>
        <a href="#">Delivery</a>
        <a href="#">Returns and Exchange</a>
      </div>
      <div className='text-white'>
        <strong>NEWSLETTER</strong>
        <p className='mb-3'>Be the first to know about new arrivals, look books, sales & promos!</p>
        <div className='flex items-center mb-3'>
          <input className='bg-transparent mt-2 border-white border-b-2' type="email" placeholder= ' Your  E-mail' />
          <button className='mt-2'><SiMinutemailer /></button>
        </div>
      </div>
    </div>
  )
}

export default Footer
