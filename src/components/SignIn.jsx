import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import SignInSchema from '../FormSchema/SignInSchema';
import { SearchContext } from '../contexts/SearchContext';

const SignIn = () => {
  const {setTogglesearch} = useContext(SearchContext)
  const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(SignInSchema)})

  const onSubmit=(data)=>{
    console.log(data);
  }
  return (
    <div onClick={()=> setTogglesearch(false)} className='grid justify-center p-10'>
      <div className='border-black min-w-[300px] rounded-lg border-2 p-6'>
        <div className='text-4xl mb-8 mt-2'>
          <strong>SIGN IN</strong>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className='mb-2 p-2'><strong>E-MAIL</strong></div>
            <input className='p-2 w-full border-b-slate-400 border-2' {...register('email')} type="email" id='email' placeholder=' E-mail' />
            {errors.email && <p className='text-red-500' >{errors.email.message}</p>}
          </div>
          <div>
            <div className='mb-2 p-2'><strong>PASSWORD</strong></div>
            <input className='p-2 w-full border-b-slate-400 border-2' {...register('password')} type="password" id='password' placeholder=' Password' />
            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          </div>
          <div className='grid justify-center'>
            <button className='p-2 mt-2  mb-2 bg-green-400 font-semibold rounded-lg' type='submit' >Sign In</button>
          </div>
          

        </form>
        </div>
    </div>
  )
}

export default SignIn
