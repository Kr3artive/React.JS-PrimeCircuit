import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CheckOutSchema from '../FormSchema/CheckOutSchema';
import { CartContext } from '../contexts/CartContext';
import CartItems from './CartItems';
import { useContext } from 'react';



const CheckOut = () => {
  const { register,handleSubmit,formState: { errors },} = useForm({resolver: zodResolver(CheckOutSchema)});
  const navigate = useNavigate()
  const {cart, total} = useContext(CartContext)

  const onSubmit = (data) => {
    console.log('Form Data:', data)
    navigate('/')
  };

  return (
    <div className="w-[300px] md:w-[500px] lg:w-[600px] mx-auto border-2 border-black bg-white p-6 rounded-lg mb-10 mt-10">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className=" text-xl font-bold">NAME</label>
          <input
            type="text"
            {...register('name')}
            className=" w-full p-1 border-b-2 border-slate-400"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label className="text-xl font-bold">EMAIL</label>
          <input
            type="email"
            {...register('email')}
            className=" w-full p-1 border-b-2 border-slate-400"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Address Field */}
        <div>
          <label className=" text-xl font-bold ">ADDRESS</label>
          <input
            type="text"
            {...register('address')}
            className=" w-full p-1 border-b-2 border-slate-400"
          />
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
        </div>

        {/* City Field */}
        <div>
          <label className=" text-xl font-bold">CITY</label>
          <input
            type="text"
            {...register('city')}
            className=" w-full p-1 border-b-2 border-gray-400"
          />
          {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
        </div>

        {/* Zip Code Field */}
        <div>
          <label className=" text-xl font-bold">ZIP-CODE</label>
          <input
            type="text"
            {...register('zip')}
            className=" w-full p-1 border-b-2 border-slate-400"
          />
          {errors.zip && <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>}
        </div>

        {/* Card Number Field */}
        <div>
          <label className=" text-xl font-bold">CARD NUMBER</label>
          <input
            type="text"
            {...register('cardNumber')}
            className=" w-full p-1 border-b-2 border-slate-400"
          />
          {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber.message}</p>}
        </div>

        {/* Expiration Date Field */}
        <div>
          <label className=" text-xl font-bold ">Expiration Date (MM/YY)</label>
          <input
            type="text"
            {...register('expirationDate')}
            className=" w-full p-1 border-b-2 border-slate-400"
          />
          {errors.expirationDate && <p className="text-red-500 text-sm mt-1">{errors.expirationDate.message}</p>}
        </div>

        {/* CVV Field */}
        <div>
          <label className=" text-xl font-bold">CVV</label>
          <input
            type="text"
            {...register('cvv')}
            className=" w-full p-1 border-b-2 border-slate-400"
          />
          {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv.message}</p>}
        </div>
        {cart.length > 0 ? (
          <div>
            <h1 className='mt-10 font-bold text-center text-3xl'>YOUR ORDERS</h1>
            {cart.map((item)=>{
              return (
                  <div className='flex items-center gap-2'>
                    <div><img className='w-20 p-4' src={item.image} alt="" /></div>
                    <div>{item.title}</div>
                  </div>
              )
            })}
            <h1 className='mt-10 font-bold text-center text-xl'>TOTAL: {total}</h1>
          </div>
        ):(
          <></>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded-md hover:bg-green-500 hover:text-black"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckOut;