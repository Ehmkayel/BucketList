import React from 'react'
import { VisitedData } from './VisitedData'
import MostVisitedCard from '../ReUsable/MostVisitedCard'
import Button from '../ReUsable/Button'

const MostVisited = ({id}) => {
  return (
  <section id={id} className='py-4 lg:py-10 mt-10 md:mt-[6rem] px-4 lg:px-20'>
        <div className=''>
        <h2 className='text-xl md:text-3xl font-bold text-left md:text-center mb-8'>Most Visited Destinations</h2>
        <div className='flex flex-col lg:flex-row p-4 lg:space-x-10 items-center '>
            {VisitedData.map((item, index) => (
                <MostVisitedCard
                key={index}
                image={item.image}
                imageTitle={item.imageTitle}
                title={item.title}
                locationArrow ={item.locationArrow} 
                location={item.location}
                description={item.description}
                fee={item.fee} 
                rating={item.rating}
                button={ <Button className="w-full md:w-[30%]">
                Book Now
              </Button>}
            />
            ))}
        </div>
        </div>
      
    </section>
  )
}

export default MostVisited


            
          
  