import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Search } from '../../lib/Search'
import DestinationView from '../DestinationView/DestinationView'

const Hero = () => {
  const[latLong, setLatLong] = useState('')
  const[locations, setLocations] = useState([])

  const searchLocation = async () => {
     const searchResults = await Search(latLong);          
      const locationData = searchResults.data.list 
      setLocations(locationData)
      locationData.map((item) =>{
        console.log(item.listing.localizedCityName, item.listing.contextualPictures[0].picture)
      })
    
    
};
  return (
    <>
    <main className="bg-skyBlue container mx-auto pt-[6rem] lg:pt-[10rem]">
    <section className="flex flex-col lg:flex-row justify-between px-4 md:px-[2rem] lg:px-[4rem] items-center">
      <figcaption className=" mb-8 text-center lg:text-left w-full lg:w-[40%]">
        <h1 className="text-3xl md:text-[2xl] xl:text-[3rem] leading-[2rem] md:leading-[3.3rem] font-semibold mb-4">
        Start planning your ultimate adventure. Your bucket list awaits!
        </h1>
        <p className="text-base md:text-xl">
        Tired of just dreaming about those incredible destinations on your bucket list? Our curated tours and personalized travel experiences are designed to make your travel aspirations come true. 
        </p>
          <div className='flex flex-col lg:flex-row space-y-5'>
          <div className="relative w-full lg:max-w-[50%] mt-6">
              <FaSearch className="absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-500"/>
              <input
                 type="text"
                 placeholder="Search your destinations"
                 className="w-full pr-4 py-2 pl-12 border outline-blue rounded-md"
                 onChange={e=>setLatLong(e.target.value)}
              />
             
          </div>
            <button className="px-4 p-3 flex text-white justify-center items-center cursor-pointer rounded-[8px] bg-blue hover:bg-white hover:text-blue border border-blue w-full max-w-[40%] mx-auto" onClick={searchLocation}>Enter</button>
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
    {locations.length > 0 && <DestinationView packages={locations}/> }
    
    </>
  
  )
}

export default Hero