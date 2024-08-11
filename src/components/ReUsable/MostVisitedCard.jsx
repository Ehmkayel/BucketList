import React from 'react'
import { FaStar } from 'react-icons/fa'

const MostVisitedCard = ({image, imageTitle, title, locationArrow, location, description, rating, fee, button}) => {
  return (
    <section className='flex flex-col w-full md:w-1/2 lg:w-1/3 mb-6'>
        <div className='relative aspect-video'>
        <figure className='w-full overflow-hidden rounded-lg mb-0'>
        <img 
          src={image}
          alt={imageTitle}
          className="w-full h-auto  rounded-lg border-gray-300 transform transition duration-500 hover:scale-105 "/>
      </figure>
      <figcaption className=" w-full flex flex-col justify-between text-left">
        <div className='flex flex-col'>
            <div className='flex flex-row justify-between mt-3'>
            <h2 className="text-xl md:text-[20px] font-bold mb-2">{title}</h2>
            <div className="flex items-center mb-2">
                {Array(rating).fill().map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                ))}
            </div>
            </div>
         
          <div className='flex flex-row mb-2'>
            <figure className='mr-3'>{locationArrow}</figure>
            <p>{location}</p>
          </div>
          <div className='flex flex-col items-start justify-between mb-3'>
          <p className="text-blue font-bold text-base md:text-[20px] mb-2">{fee}</p>
          <p className='mb-5'>{description}</p>
          {button}
          </div>
         
        </div>
      </figcaption>
        </div>
     
    </section>
  )
}

export default MostVisitedCard