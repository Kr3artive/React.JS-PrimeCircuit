import React, { useState } from 'react'
import { SearchContext } from '../contexts/SearchContext'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'

const Contacts = () => {
  const {setTogglesearch} = useContext(SearchContext)

  const {register, handleSubmit} = useForm('')

  const onSubmit =(data)=>{
    console.log(data);
  }
  return (
    <div onClick={()=> setTogglesearch(false)}>
      <iframe className='map-responsive w-[100%] h-[450px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.8115072618466!2d7.000777374072356!3d4.80239494076947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069ce9c459b1383%3A0x71259d567b8c34a8!2s31%20Isiokpo%20St%2C%20Elechi%2C%20Port%20Harcourt%20500101%2C%20Rivers!5e0!3m2!1sen!2sng!4v1724233969448!5m2!1sen!2sng"
      allowFullScreen="" 
      loading="eager" 
      referrerPolicy="no-referrer-when-downgrade"
      title="map"
      ></iframe>
      <div className='p-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
        <div>
          <h1 className='text-red-600 font-medium'>INFORMATIONS</h1>
          <strong className='text-[40px]'>CONTACT US</strong>
          <div>As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.</div>
          <div className='mt-4'>
            <strong className='text-[30px]'>Nigeria</strong>
            <div>31 Isiokpo Street, D-line, Port-Harcourt, Rivers.</div>
            <div>+234-706-298-7803</div>
          </div>
          <div className='mt-4'>
            <strong className='text-[30px]'>America</strong>
            <div>195 E Parker Square Dr, Parker, CO 801</div>
            <div>+43 982-314-0958</div>
          </div>
          <div className='mt-4'>
            <strong className='text-[30px]'>France</strong>
            <div>109 Avenue Léon, 63 Clermont-Ferrand</div>
            <div>+12 345-423-9893</div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-2 p-2 gap-5'>
            <input className='h-12 border-2 border-slate-300' type="text" placeholder='  Name' />
            <input className='h-12 border-2 border-slate-300' type="email" placeholder='  E-mail' />
          </div>
          <div className='p-2 grid '>
            <textarea className='border-2 h-56 border-slate-300' name="" id="" placeholder='  Message'></textarea>
          </div>
          <div className='p-2'><button onClick={()=>onSubmit()} className='p-2 w-48 bg-black text-white'>SEND MESSAGE </button></div>
        </form>
      </div>
    </div>
  )
}
export default Contacts
