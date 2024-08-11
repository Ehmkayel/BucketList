import React from 'react'
import { VisitedData } from './VisitedData'
import { FaStar } from 'react-icons/fa'


const MostVisited = ({id}) => {
  return (
  <section id={id} className='py-4 lg:py-10 mt-10 md:mt-[6rem] px-4 lg:px-20'>
        <div className=''>
        <h2 className='text-xl md:text-3xl font-bold text-left md:text-center mb-8'>Most Visited Destinations</h2>
        <div className='py-5 lg:py-20 px-4 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {VisitedData.map((data, index) => (
                    <div key={index} className='bg-white py-5 px-5 border shadow-lg rounded-md'>
                        <img src={data.image} alt={data.imageTitle} className='w-full object-cover rounded-md  transform transition duration-500 hover:scale-105 ' />
                        <div className='flex justify-between items-center'>
                           <h3 className='text-lg font-semibold mt-3'>{data.title}</h3>
                            <div className="flex items-center mb-2">
                              {Array(data.rating).fill().map((_, i) => (
                              <FaStar key={i} className="text-yellow-500" />
                                ))}
                            </div>
                          
                        </div>
                        <div className='flex items-center gap-4'>
                          <p className=''>{data.locationArrow}</p>
                        <p className=''>{data.location}</p>
                        </div>
                       
                        <p className='mt-2'>{data.description}</p>
                      
                        <h3 className='text-lg font-semibold mt-3'>{data.fee}</h3>
                      
                        
                        <a href={`/booking/${data.id}`} className='mt-4 inline-block bg-blue text-white px-4 py-2 rounded-md'>Book Now</a>
                    </div>
                ))}
            </div>
        </div>
      
    </section>
  )
}

export default MostVisited


            
          
  