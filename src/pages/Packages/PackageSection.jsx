import React from 'react'
import TravelPackages from './TravelPackageData'

const PackageSection = () => {
  return (
    <main>
        <section>
            <h2>Travel Packages</h2>
            <p>Explore our exclusive travel packages designed to give you an unforgettable experience.</p>
            <div className='py-5 lg:py-20 px-4 lg:px-20  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {TravelPackages.map((data, index)=>{
                    return(
                        <div key={index} className='bg-white py-5 px-5 border shadow-md rounded-lg'>
                        <figure><img src={data.image}alt=""/></figure>
                        <div>
                        <h2>{data.name}</h2>
                        <p>{data.description}</p>
                        </div>
                       <div>
                       <p>{data.duration}</p>
                        <p>{data.priceRange}</p>
                       </div>
                       
                    </div>
                    )
                   
                })}
            </div>
        </section>
    
    </main>
  )
}

export default PackageSection