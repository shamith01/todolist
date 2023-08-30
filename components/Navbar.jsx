import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-slate-800 px-8 py-3 items-center'>
      
        <Link className='text-white font-bold' href="/">GTSTORE.in</Link>
        <Link className='bg-white rounded-md p-2 font-bold' href={'/addtopic'}>Add Topic</Link>

      
    </div>
  )
}

export default Navbar
