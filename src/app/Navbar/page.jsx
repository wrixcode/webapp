
'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if(open){
     document.body.style.overflow=('hidden')
    }else{
     document.body.style.overflow=('auto')
 
    }
 
   
     return () => {
       document.body.style.overflow=('auto')
     
     };
   }, [open]);
   
  return (
    <div className='absolute w-full top-0 left-0  z-10'>
        <div className='container flex px-6 md:px-20 lg:px-28  py-4 justify-between items-center ' >
<h1  className='text-white text-3xl md:text-4xl'>
  <img className='w-24 md:w-36' src="./logo2.png" alt="" />
</h1>
<ul className='hidden md:flex gap-8'>
    <Link  href="/" className='cursor-pointer hover:text-gray-400 text-white'>Home</Link>
    <Link  href="About" className='cursor-pointer hover:text-gray-400 text-white'>About</Link>
    <Link  href="Services" className='cursor-pointer hover:text-gray-400 text-white'>Service</Link>
    <Link  href="Contact" className='cursor-pointer hover:text-gray-400 text-white'>Contact</Link>
</ul>

<FaBars className='md:hidden text-white' onClick={() => setOpen(true)}/>


  </div>
  {/* mobile-screen   */}
  <div className={`md:hidden  top-0 overflow-hidden ${open ? 'w-full fixed' : 'w-0 h-0'} right-0 transition-all bottom-0  bg-white  `}>

    <div className='flex justify-end p-6 cursor-pointer'>
<FaTimes className='w-7 text-black' onClick={() => setOpen(false)}/>
     
    </div>
    <ul className='flex  flex-col gap-4 it font-medium items-center text-lg '>
      <Link href="/"  onClick={() => setOpen(false)}  className=''>Home</Link>
      <Link href="About"  onClick={() => setOpen(false)}  className=''>About</Link>
      <Link href="Services"  onClick={() => setOpen(false)}  className=''>Service</Link>
      <Link href="Contact"  onClick={() => setOpen(false)}  className=''>Contact</Link>
    </ul>
 
</div>
        
</div>
  )
}

export default Navbar
