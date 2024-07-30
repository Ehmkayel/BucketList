import React, { useState } from 'react';
import { FAQData } from './FAQData';
import { FaPlus, FaMinus } from 'react-icons/fa';


const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="heading text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {FAQData.map((item, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-200 p-4"
          >
            <button
              className="cursor-pointer font-medium text-lg flex justify-between items-center w-full"
              onClick={() => handleClick(index)}
            >
              <span className="text-base lg:text-lg text-left font-medium flex-grow">{item.question}</span>{activeIndex === index ? (
                <FaMinus className="text-gray-700 flex-shrink-0" />
              ) : (
                <FaPlus className="text-gray-700 flex-shrink-0" />
              )}
             
            </button>
            {activeIndex === index && (
              <div className="mt-2 text-gray-600">
                <p>{item.answer}</p>
              </div>
            )}
           
            </div>
         
        ))}
      </div>
    </section>
  );
};

export default FaqSection