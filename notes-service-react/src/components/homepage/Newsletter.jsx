import React from 'react'

// This section is for the quality of the app
export const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>A po don me i përmirësu shkrimet tua?</h1>
                <p>Na informo se qka mundemi me përmirësu me mesazhin tënd.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-lg text-black focus:outline-none' type="text" placeholder='Sheno mesazhin tend!' />
                    <button className='bg-gradient-to-r from-indigo-400 to-indigo-500 hover:from-violet-400 hover:to-violet-500 rounded-lg w-[200px] font-medium my-6 mx-4 py-3 text-gray-700 uppercase'>Dërgo</button>
                </div>

            </div>
        </div>
    </div>
  )
}
