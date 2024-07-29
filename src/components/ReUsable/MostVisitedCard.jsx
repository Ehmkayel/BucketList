import React from 'react'

const MostVisitedCard = ({image, imageTitle, title, fee, button}) => {
  return (
    <section className='flex flex-col'>
     <figure className='w-full overflow-hidden rounded-lg mb-0'>
        <img 
          src={image}
          alt={imageTitle}
          className="w-full h-auto rounded-lg object-cover border-gray-300 transform transition duration-500 hover:scale-105"
        />
      </figure>
      <figcaption className="p-4 md:p-6 w-full flex flex-col justify-between text-center md:text-left">
        <div className='flex flex-col'>
          <h2 className="text-xl md:text-[20px] font-bold mb-2">{title}</h2>
          <div className='flex flex-col md:flex-row items-center justify-between mb-3'>
          <p className="text-textColor text-base md:text-[20px] mb-2">{fee}</p>
          {button}
          </div>
         
        </div>
      </figcaption>
    </section>
  )
}

export default MostVisitedCard