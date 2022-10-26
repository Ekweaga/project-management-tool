import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <>
    <footer className='  mt-[150px] flex items-center justify-center px-4'>
      <div className='grid grid-cols-1 md:grid-cols-5 gap-[30px] w-[90%] mx-auto'>
        <div className='flex flex-col gap-[40px]'>
          <div>
          <h2 className="mb-[15px] font-bold text-2xl text-[#FFCA1D]">WebSpace</h2>
          <p>All rights reserved @ webspace.com</p>

          </div>
         
          <div>
            <h3 className="mb-[15px] font-bold">Address</h3>
            <p>No 5 Benin city Edo state</p>
          </div>
          <div>
            <h3 className="mb-[15px] font-bold">Social Media</h3>
            <div className='flex gap-[20px]'><Image src="/Group 21.png" width="30px" height="30px" alt="face"></Image>
            <Image src="/Group 22.png" width="30px" height="30px" alt="instagram"></Image>
            <Image src="/Group 23.png" width="30px" height="30px" alt="twitter"></Image>
            <Image src="/Group 20.png" width="30px" height="30px" alt="youtube"></Image></div>
          </div>
        </div>
          <div>
                <h3 className="mb-[15px] font-bold">Product</h3>
                <ul className="flex flex-col gap-[15px]">
                  <li>Product</li>
                  <li>Pricing</li>
                  <li>Enterprise</li>
                  <li>Partners</li>
                  <li>Affiliate</li>
                  <li>Integrations</li>
                  <li>Developers</li>
                  <li>Students</li>
                  <li>Os</li>
                </ul>
          </div>
            <div>
            <h3  className="mb-[15px] font-bold">Team</h3>
                <ul className="flex flex-col gap-[15px]">
                  <li>Product</li>
                  <li>Pricing</li>
                  <li>Enterprise</li>
                  <li>Partners</li>
                  <li>Affiliate</li>
                 
                </ul>
            </div>
              <div>
              <h3  className="mb-[15px] font-bold">Solutions</h3>
                <ul className="flex flex-col gap-[15px]">
                  <li>Product</li>
                  <li>Pricing</li>
                  <li>Enterprise</li>
                  <li>Partners</li>
                  <li>Affiliate</li>
                  <li>Integrations</li>
                  <li>Developers</li>
                  <li>Students</li>
                  <li>Os</li>
                  <li>Developers</li>
                  <li>Students</li>
                  <li>Os</li>
                </ul>
              </div>
                <div>
                <h3 className="mb-[15px] font-bold">Resources</h3>
                <ul className="flex flex-col gap-[15px]">
                  <li>Product</li>
                  <li>Pricing</li>
                  <li>Enterprise</li>
                  <li>Partners</li>
                  <li>Affiliate</li>
                  <li>Integrations</li>
                  <li>Developers</li>
                  <li>Students</li>
                  <li>Os</li>
                  <li>Developers</li>
                  <li>Students</li>
                  <li>Os</li>
                </ul>
                </div>
      </div>
       




    </footer>
    </>
  )
}

export default Footer