import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <>
    <footer className='h-[80px] bg-[#043873] mt-[50px] flex flex-col items-center justify-center text-white p-3'>
        <div className='FirstContainer text-sm mb-[10px]'>
         infowebspace@gmail.com
        </div>



<div className='SecondContainer'>
    <Image src="/Btm.png" width="1000px" height="10px" alt="btm"></Image>
</div>
    </footer>
    </>
  )
}

export default Footer