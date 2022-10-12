import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <>
    <footer className='h-[100px] bg-[#043873] mt-[50px] flex flex-col items-center justify-center text-white'>
        <div className='FirstContainer'>
            <h1>Try WebSpace <br/> today</h1>

        </div>



<div className='SecondContainer'>
    <Image src="/Btm.png" width="1000px" height="10px" alt="btm"></Image>
</div>
    </footer>
    </>
  )
}

export default Footer