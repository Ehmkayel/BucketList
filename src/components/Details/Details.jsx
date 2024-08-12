import React, { useEffect, useState } from 'react'
const Details = (packages) => {
    const [section, setSection] = useState()
    const [metaData, setMetaData] = useState()

    useEffect(()=>{
        const metaData = packages.packages.data
        setSection(metaData.section)
        setMetaData(metaData.metadata)

    },[packages])

    
        if (!packages ) {
          return <p>No packages available</p>; 
        }
  return (
    <main className='pt-[5rem] lg:pt-[6rem]'>
        <div className='bg-white py-5 px-3 border shadow-lg rounded-md max-w-md'>
        <img src={metaData?.sharingConfig.imageUrl} alt={metaData?.sharingConfig.title} className='w-full object-cover rounded-md  transform transition duration-500 hover:scale-105'/>
        <div className='flex justify-between items-center'>
        <p>{metaData?.sharingConfig.propertyType}</p>
        <p className='font-bold mt-2'>Capacity: {metaData?.sharingConfig.personCapacity}</p>
        </div>
        <p>{metaData?.sharingConfig.location}</p>
        <p className='text-xl'>{section?.titleDefault.title}</p>
        <p className='font-bold'>{section?.availabilityCalendarDefault.reviewAccessibilityLabel}</p>
        
       
        </div>
        
        
        
    </main>
  )
}

export default Details