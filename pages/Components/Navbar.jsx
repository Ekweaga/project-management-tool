import React from 'react'
import Image from 'next/image'

function Navbar() {
  return (
    <>
    <nav className='text-white bg-[#043873] h-[80px] flex justify-between items-center px-[30px]'>
        <div>
            <h1 className='font-bold text-2xl'>
                WebSpace
            </h1>
        </div>
        <ul className='flex items-center justify-center gap-[30px]'>
            <li>Home</li>
            <li>Our Solutions</li>
            <li>Get Started</li>
            <li> <span><Image src='/Btn-login.png' width="100px" height="40px" alt="element"></Image></span></li>
           
        </ul>
    </nav>
    </>
  )
}

export default Navbar