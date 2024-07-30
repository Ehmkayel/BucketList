import React from 'react'
import Button from '../ReUsable/Button'

const Banner = () => {
  return (
    <section className="mx-auto bg-skyBlue px-10 py-5 mt-[4rem] w-full lg:max-w-[50%] h-full lg:h-[20vh] flex flex-col md:flex-row items-center justify-between text-center">
      <div>
      <h1 className="text-xl lg:text-3xl font-bold mb-4">Lets Make your next<span className='text-blue font-bold'> holiday amazing</span> </h1>
      </div>
        <Button className="bg-password text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-password" href="/">
          Book Now
        </Button>
    
    </section>
  )
}

export default Banner