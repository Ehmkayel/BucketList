import React from 'react';
import TravelPackages from './TravelPackageData';

const PackageSection = () => {
  return (
    <main className='pt-[2rem] lg:pt-[6rem]'>
        <section>
            <h2 className='font-bold text-2xl lg:text-4xl text-center'>Travel Packages</h2>
            <p className='mt-2 text-center'>Explore our exclusive travel packages designed to give you an unforgettable experience.</p>
            <div className='py-5 lg:py-20 px-4 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {TravelPackages.map((data) => (
                    <div key={data.id} className='bg-white py-5 px-5 border shadow-lg rounded-md'>
                        <img src={data.image} alt={data.name} className='w-full object-cover rounded-md  transform transition duration-500 hover:scale-105 ' />
                        <h3 className='text-lg font-semibold mt-3'>{data.name}</h3>
                        <p className='mt-2'>{data.description}</p>
                        <ul className='mt-4'>
                            {data.features.map((feature, index) => (
                                <li key={index} className='flex items-center'>
                                    <svg className="w-5 h-5 text-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div className='flex justify-between items-center'>
                        <p className='mt-4 font-bold'>{data.duration}</p>
                        <p className='mt-4 font-bold'>{data.priceRange}</p>
                        
                        </div>
                        
                        <a href={`/booking/${data.id}`} className='mt-4 inline-block bg-blue text-white px-4 py-2 rounded-md'>Book Now</a>
                    </div>
                ))}
            </div>
        </section>
    </main>
  );
};

export default PackageSection;
