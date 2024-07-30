import React from 'react'
import Button from '../ReUsable/Button'

const Footer = () => {
  return (
    <section className='mt-[4rem] relative border pb-[5rem] flex md:justify-center'>
        <div className=' md:px-8 md:flex md:justify-between md:space-x-[2rem] lg:space-x-[4rem] px-4 md:pt-[2.5rem] top-[1rem] text-gray-900'>
            {/* First column */}
        <div className='logo md:w-[70%]'>
            <img src="https://res.cloudinary.com/drphumgcb/image/upload/v1722260853/cover-removebg-preview_nhgfi2.png" alt="logo" className='h-12'/>
            <p className=''>Discover and plan your dream adventures with ease. From exploring exotic destinations to finding unique experiences, BucketList makes travel planning simple and exciting.</p>
        </div> 

        {/* second column */}
        <div>
            <p className='font-bold cursor-pointer'>Company</p>
            <ul className='mt-2  flex flex-col cursor-pointer'>
                <li>About Us</li>
                <li>FAQ</li>
                <li>Why Choose Us</li>
                <li>Packages</li>
                <li>Pricing</li>
            </ul>
        </div>
        {/* Third column */}
        <div>
            <p className='font-bold cursor-pointer'>Destinations</p>
            <ul className='mt-2  flex flex-col cursor-pointer'>
                <li>Santorini</li>
                <li>Maldives</li>
                <li>Torronto</li>
                <li>Eiffel Tower</li>
                <li>Las Vegas</li>
            </ul>
        </div>
        {/* Fourth column */}
        <div className='my-8 md:my-0 md:w-[30%]'>
            <p className='font-bold cursor-pointer mb-3'>Join Our Newsletter</p>
            <div className="relative w-full max-w-md">
                <input type="email" placeholder="Your email Address" className="w-full pr-32 py-2 pl-4 border outline-blue rounded-md"/><button className="absolute top-0 right-0 w-24 h-full bg-blue text-white rounded-md border-none">Subscribe</button>
            </div>
            <p>Will send weekly updates of packages available</p>
        </div>
        </div>
    </section>
  )
}

export default Footer