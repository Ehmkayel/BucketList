import React from 'react'

const DestinationView = (packages) => {
  return (
    <main className='pt-[2rem] lg:pt-[6rem]'>
    <section>
        <div className='py-5 lg:py-20 px-4 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {packages.packages.map((data) => (
                <div key={data.id} className='bg-white py-5 px-5 border shadow-lg rounded-md'>
                    <img src={data.listing.contextualPictures[0].picture} alt={data.listing.title} className='w-full h-auto max-h-[300px] object-cover rounded-md  transform transition duration-500 hover:scale-105 ' />
                    <div className='flex items-center justify-between'>
                    <h3 className='text-lg font-semibold mt-3'>{data.listing.title}</h3>
                    <p className='font-bold'>{data.listing.avgRatingLocalized}</p>
                    </div>
                   
                    <p className='mt-2'>{data.listing.name}</p>
                    <p className='mt-2'>{data.pricingQuote.structuredStayDisplayPrice.primaryLine.price}</p>
                                         
                    <a href={`/booking/${data.id}`} className='mt-4 inline-block bg-blue text-white px-4 py-2 rounded-md'>Book Now</a> 
                </div>
            ))}
        </div>
    </section>
</main>
  )
}

export default DestinationView