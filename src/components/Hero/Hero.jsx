import React from 'react'
import Button from '../ReUsable/Button'

const Hero = () => {
  return (
    <main className="bg-skyBlue container mx-auto pt-[6rem] lg:pt-[10rem]">
    <section className="flex flex-col lg:flex-row justify-between px-4 md:px-[2rem] lg:px-[4rem] items-center">
      <figcaption className="heroText mb-8 text-center lg:text-left w-full lg:w-[40%]">
        <h1 className="text-3xl md:text-[2xl] xl:text-[3rem] leading-[2rem] md:leading-[3.3rem] font-semibold mb-4">
        Start planning your ultimate adventure. Your bucket list awaits!
        </h1>
        <p className="text-base md:text-xl">
        Tired of just dreaming about those incredible destinations on your bucket list? Our curated tours and personalized travel experiences are designed to make your travel aspirations come true. 
        </p>

        <div className="btn flex flex-col md:flex-row mt-6 space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-[40%]">
            Sign Up
          </Button>
          <input type="text" placeholder="Search for destinations" className="border p-3 rounded-[5px] text-center font-bold w-full md:w-[40%] outline-blue"/>
        </div>
      </figcaption>
      <figure className="lg:max-w-[50%] object-contain hidden md:block overflow-hidden ">
        <img
          className="w-full h-[450px] rounded-lg  border-gray-300  transform transition duration-500
   hover:scale-105  "
          src="https://res.cloudinary.com/drphumgcb/image/upload/v1722262192/pexels-roney-john-171488-602607_x7qzrr.jpg"
          alt="Hero"
        />
      </figure>
      <figure className="heroimg overflow-hidden md:hidden block w-full md:w-[50%] mt-8 md:mt-0">
        <img
          className="w-full h-auto  rounded-lg border-gray-300 transform transition duration-500 hover:scale-105"
          src="https://res.cloudinary.com/drphumgcb/image/upload/v1722262192/pexels-roney-john-171488-602607_x7qzrr.jpg"
          alt="Hero"
        />
      </figure>
    </section>
  </main>
  )
}

export default Hero