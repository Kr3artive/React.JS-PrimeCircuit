import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import AboutHero from '../img/AboutHero.webp';
import SignUpSchema from '../FormSchema/SignUpSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { auth, db } from '../../config/firebase';
import { setDoc, doc } from 'firebase/firestore';

const SignUp = () => {
  const { setTogglesearch } = useContext(SearchContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignUpSchema),
  });

  const handleRegister = async (data) => {
    const { fullname, email, password } = data;

    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log("User registered successfully", user);

      // Save user information in Firestore
      await setDoc(doc(db, "Users", user.uid), {
        fullname,
        email,
      });

      // Navigate to home page after successful registration
      navigate("/");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div onClick={() => setTogglesearch(false)} className='grid lg:grid-cols-2 p-10 justify-center'>
      <div className='hidden md:hidden lg:block xl:block'>
        <img className='rounded-xl h-full' src={AboutHero} alt='' />
      </div>
      <div className='border-black border-2 w-[300px] md:w-full lg:w-full rounded-xl lg:border-none xl:border-none p-8'>
        <div className='text-4xl mb-6'>
          <strong>SIGN UP</strong>
        </div>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit(handleRegister)}>
          <div>
            <div className='p-2 text-lg'>
              <strong>FULL NAME</strong>
            </div>
            <input
              className='p-2 w-full border-b-2 border-slate-400'
              {...register('fullname')}
              type='text'
              placeholder='FullName'
              id='fullname'
            />
            {errors.fullname && <p className="text-red-500">{errors.fullname.message}</p>}
          </div>

          <div>
            <div className='p-2 text-lg'>
              <strong>E-MAIL</strong>
            </div>
            <input
              className='p-2 w-full border-b-2 border-slate-400'
              {...register('email')}
              type='email'
              placeholder='E-mail'
              id='email'
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <div className='p-2 text-lg'>
              <strong>PASSWORD</strong>
            </div>
            <input
              className='p-2 w-full border-b-2 border-slate-400'
              {...register('password')}
              type='password'
              placeholder='Password'
              id='password'
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          <div className='flex gap-3 p-2'>
            <input type='checkbox' {...register('terms')} id='terms' />
            <h1>
              I agree to the <strong>Terms And Conditions</strong>
            </h1>
            {errors.terms && <p className="text-red-500">{errors.terms.message}</p>}
          </div>

          <div className='flex gap-2 justify-around'>
            <button className='w-44 bg-green-500 rounded-xl p-1 font-semibold' type='submit'>
              Sign Up
            </button>
            <Link className='w-44 border-b-2 font-semibold p-1 text-center' to='/SignIn'>
              Sign In →
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
