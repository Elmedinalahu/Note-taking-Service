import React from 'react'


// Some info about the app
export const Analytics = () => {
  return (
    <div className='w-full bg-white py-24 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src="https://shovelapp.io/wp-content/uploads/2017/03/Take-Notes-Effectively.png" alt="" />
            <div className='flex flex-col justify-center'>
                <p className='text-violet-600 uppercase font-bold'>Ruani atë që keni në mendje</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Gjeni atë që ju nevojitet, shpejtë</h1>
                <p>
                NotesService punon në telefonin, tabletin dhe kompjuterin tuaj. Gjithçka që shtoni te NotesService sinkronizohet në pajisjet tuaja, në mënyrë që gjërat tuaja të rëndësishme të jenë gjithmonë me ju.
                </p>
            </div>

        </div>

    </div>
  )
}
