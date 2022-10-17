import React from 'react'
import Typed from 'react-typed';

// This is the first section of the app
export const Hero = () => {
  return (
    <div className=''>
        <div className='max-w-[800px] mt-[70px] w-full mb-48 mx-auto text-center flex flex-col'>
             <p className='text-indigo-500 font-bold p-2 uppercase' >Mos humb asnjë shkrim</p>
             <h1 className='md:text-5xl sm:text-5xl text-3xl font-bold md:py-6 uppercase text-gray-700'>
                 Ruaj shkrimet tua, <br /> kudo që je.
            </h1>
            <div className='flex justify-center items-center'>
              <p className='md:text-xl sm:text-xl text-xl font-bold uppercase text-gray-700'>Shpejtë, thjeshtë dhe</p> 
              <Typed strings={['Pa pagesë', 'Gratis', 'Free']} typeSpeed={100} backSpeed={120} loop className='md:text-xl sm:text-xl text-xl font-bold uppercase text-gray-700 pl-2'/>
            </div>
            <div>
              <a href="/home">
                <button className='bg-gradient-to-r from-indigo-400 to-indigo-500 hover:from-violet-400 hover:to-violet-500 rounded-lg w-[200px] font-medium my-6 mx-auto py-3 text-gray-700 uppercase' >Fillo këtu!</button>
              </a>
            </div>
        </div>
    </div>
  )
}
