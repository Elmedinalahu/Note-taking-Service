import React from 'react'
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'


export const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-700'>
        <div>
            <h1 className='w-full text-3xl font-bold text-indigo-500'>NotesService.</h1>
            <div className='flex justify-between md:w-[75%] my-6 mx-12'> 
                <FaFacebookSquare size={30} className="hover:text-blue-600" />
                <FaInstagram size={30} className="hover:text-red-600" />
                <FaTwitterSquare size={30} className="hover:text-sky-500" />
                <FaGithubSquare size={30} className="hover:text-black" />
            </div>
            <p className='py-4 '>Copyright © 2022 by NotesService. All rights reserved.</p>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-700 hover:text-black cursor-pointer uppercase'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Colors</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-700 hover:text-black cursor-pointer uppercase'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>API status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-700 hover:text-black cursor-pointer uppercase'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blog</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Press</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-700 hover:text-black cursor-pointer uppercase'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
