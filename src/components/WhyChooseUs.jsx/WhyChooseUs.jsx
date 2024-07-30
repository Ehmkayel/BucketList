
import React from 'react'
import { WhyData } from './WhyData'

const WhyChooseUs = () => {
  return (
    <section className='container mx-auto items-center py-[3rem] md:py-[4rem]'>
      <div className='flex flex-col md:flex-row items-center justify-between px-4 md:px-[4rem]'>
      <div>
            <figure>
                <img src="https://res.cloudinary.com/drphumgcb/image/upload/v1722354004/pexels-mvdheuvel-4490695_d5kqoi.jpg" className='w-full h-auto md:h-[450px] rounded-lg border-gray-300 transform transition duration-500 hover:scale-105'/>
            </figure>
        </div>
        <div className='p-4 max-w-[600px]'>
        <h2 className='heading font-bold text-xl  md:text-[39px] leading-[46.8px] mb-3'>Why Choose BucketList?</h2>
        <p className='mb-5'>With <span>BucketList</span> , experience the world with exceptional service and expert destination knowledge.</p>
        <div>
            {WhyData.map((data, index) => (
                <div key={index} className="flex items-center pb-3 ">
                    <figure className="mr-4 flex-shrink-0"><img src={data.image}/></figure>
                    <div className='flex-grow'>
                        <h2 className="heading text-lg lg:text-xl font-bold">{data.title}</h2>
                        <p className="text-base lg:text-lg text-left">{data.description}</p>
                    </div>
                </div>
          ))}
        </div>
      
        </div>
        
      </div>
    </section>
  )
}

export default WhyChooseUs
