import React from 'react'
import { FaStar } from 'react-icons/fa';
import { TestimonialData } from './TestimonialData';

const TestimonialCard = ({ description, name, JobTitle, rating }) => (
  <div className="bg-white shadow-md rounded-lg p-6 border m-2">
    <div className="flex items-center mb-2">
      {Array(rating).fill().map((_, i) => (
        <FaStar key={i} className="text-yellow-500" />
      ))}
    </div>
    <p className="text-gray-700 mb-2">{description}</p>
    <p className="font-bold text-lg">{name}</p>
    <p className="text-gray-600">{JobTitle}</p>
  </div>
);

const Testimonial = () => {
  return ( 
    <section className=" py-10 bg-gra100 mt-16 md:mt-[6rem]">
      <div className="container mx-auto md:px-4 px-1">
        <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
        <p className="text-center mb-8">What people say's about us</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TestimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;