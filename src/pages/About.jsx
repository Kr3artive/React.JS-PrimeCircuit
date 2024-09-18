import React, { useContext } from 'react'
import AboutHero from '../img/AboutHero.webp'
import { SearchContext } from '../contexts/SearchContext'

const About = () => {
  const {setTogglesearch} = useContext(SearchContext)
  return (
    <div onClick={()=>setTogglesearch(false)}>
      <div className='p-10'>
        <div>
          <img className='w-full mb-12' src={AboutHero} alt="" />
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3'>
            <div>
              <strong className='text-2xl'>WHO WE ARE ?</strong>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ut iste omnis excepturi quod a!</p>
            </div>
            <div>
              <strong className='text-2xl'>WHAT WE DO ?</strong>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nobis iusto voluptate enim possimus nam dicta saepe culpa unde eum.</p>
            </div>
            <div>
              <strong className='text-2xl'>WHY CHOOSE US ?</strong>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, rerum iure temporibus saepe architecto aperiam harum accusantium illo quo doloremque!</p>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 p-12 gap-2'>
        <div className='grid grid-flow-row'>
          <strong className='text-[50px] text-center'>102</strong>
          <div className='text-xl text-center'>OUR CLIENTS</div>
        </div>
        <div className='grid grid-flow-row'>
          <strong className='text-[50px] text-center'>4</strong>
          <div className='text-xl text-center'>CATEGORIES</div>
        </div>
        <div className='grid grid-flow-row'>
        <strong className='text-[50px] text-center'>102</strong>
        <div className='text-xl text-center'>IN COUNTRIES</div>
        </div>
        <div className='grid grid-flow-row'>
        <strong className='text-[50px] text-center'>98%</strong>
        <div className='text-xl text-center'>HAPPY CUSTOMERS</div>
        </div>
      </div>
      
    </div>
  )
}

export default About
