import React from 'react'

// Some images telling the user what the app is about
export const Cards = () => {
  return (
    <div className='w-full pt-[8rem] px-4 bg-white'>
        <div className='max-w[1240px] mx-auto grid md:grid-cols-3 gap-x-4'>
            <div className='w-fit flex flex-col p-4 mx-8 my-16 hover:scale-105 duration-300 cursor-pointer'>
                <img className='rounded-lg shadow-xl border-solid border-2 border-gray-300 w-auto mx-auto mt-[-8rem] bg-white' src="https://glean.co/hubfs/BLOG_working_memory_important_note_taking_HERO_fbc4d50061.png" alt="" />
            </div>
            <div className='w-fit flex flex-col p-4 mx-8 my-16 hover:scale-105 duration-300 cursor-pointer'>
                <img className='rounded-lg shadow-xl border-solid border-2 border-gray-300 w-auto mx-auto mt-[-8rem] bg-white' src="https://glean.co/hubfs/why_note_taking_hard_hero_12_a919564282.png" alt="" />
            </div>
            <div className='w-fit flex flex-col p-4 mx-8 my-16 hover:scale-105 duration-300 cursor-pointer'>
                <img className='rounded-lg shadow-xl border-solid border-2 border-gray-300 w-auto mx-auto mt-[-8rem] bg-white' src="https://cdn-icons-png.flaticon.com/512/3200/3200740.png" alt="" />
            </div>
        </div>
    </div>
  )
}
