import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Hero } from './Hero'
import Typed from 'react-typed';
import { Analytics } from './Analytics';
import { Newsletter } from './Newsletter';
import { Cards } from './Cards';

const Homepage = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  return (<>
  <body className='bg-gradient-to-r from-violet-400 to-indigo-300'>
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-gray-700' >
        <h1 className='w-full text-3xl font-bold text-indigo-500' >NotesService.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4' >Home</li>
            <li className='p-4' >Company</li>
            <li className='p-4' >Resources</li>
            <li className='p-4' >About</li>
            <li className='p-4' >Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={!nav ? 'ease-in-out duration-300 fixed left-0 top-0 w-[60%] h-full border-r border-r-indigo-200 bg-indigo-200' : 'fixed left-[-100%]'  } >
          <h1 className='w-full text-3xl font-bold text-indigo-500 m-4' >NotesService.</h1>
          <ul className='uppercase p-4' >
            <li className='p-4 border-b border-violet-400' >Home</li>
            <li className='p-4 border-b border-violet-400' >Company</li>
            <li className='p-4 border-b border-violet-400' >Resources</li>
            <li className='p-4 border-b border-violet-400' >About</li>
            <li className='p-4' >Contact</li>
          </ul>
        </div>
    </div>
    <div>
      <Hero />
    </div>
    <div>
      <Analytics />
    </div>
    <div>
      <Newsletter />
    </div>
    <div>
      <Cards />
    </div>
  </body>
    </>
  )
}

export default Homepage