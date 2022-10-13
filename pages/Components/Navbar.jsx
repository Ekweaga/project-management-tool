import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  const [open,setOpen] = useState(false)
  return (
    <>
    <nav className='text-white bg-[#043873] h-[80px] flex justify-between items-center px-[30px] '>
        <div>
            <h1 className='font-bold text-2xl'>
                WebSpace
            </h1>
        </div>
        <ul className='md:flex items-center justify-center gap-[30px] hidden'>
            <li>Home</li>
            <li>Our Solutions</li>
            <li>Get Started</li>
            <li className='cursor-pointer'><Link href="logins"><span><Image src='/Btn-login.png' width="100px" height="40px" alt="element"></Image></span></Link> </li>
           
        </ul>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[99999px]  ${
            open ? "text-white" : ""
          } text-3xl md:hidden `}
        >
          <img src={open ? "/icon-close.svg" :"/icon-hamburger.svg"}/>
        </div>

        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen z-10
      px-7 py-2 font-medium bg-white top-0 duration-300 ${
        open ? "left-0 block" : "left-0 hidden"
      }`}
        >
          <ul className="flex flex-col justify-center h-[300px] gap-10 py-2 text-lg mt-[100px]">
          <li  onClick={() => setOpen(!open)}>Home</li>
                <li  onClick={() => setOpen(!open)}>Our Solutions</li>
                
                <li  onClick={() => setOpen(!open)}>Get Started</li>
               
                <li  onClick={() => setOpen(!open)}><Link href="logins"><span><Image src='/Btn-login.png' width="150px" height="60px" alt="element"></Image></span></Link></li>
          </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar