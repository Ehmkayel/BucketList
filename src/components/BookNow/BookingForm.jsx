import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Property } from '../../lib/Search';
import Details from '../Details/Details';


const BookingForm = () => {
  const {id}=useParams()
const [formData, setFormData] = useState({});

  const [errors, setErrors] = useState({});
  useEffect(() => {
    const fetchProperty = async() => {
      const property = await Property(id)
      setFormData(property)
      console.log(property)
      console.log(id)
    }
    fetchProperty()
    

    
  },[id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear errors as user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Basic validation
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (formData.email && !validateEmail(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.guests || formData.guests < 1) newErrors.guests = 'At least one guest is required';

  }
  return (
    <main className='pt-[2rem] lg:pt-[6rem] '>
      <section className='flex flex-col'>
        {formData.message==="Success" &&  <Details packages={formData}/>  }
        <div className='booking-form bg-white p-6 rounded-lg shadow-md '>
          <h3 className='text-xl font-semibold mb-4'>Book</h3>
          <form onSubmit={handleSubmit} className='space-y-4 max-w-md mx-auto'>
            <div>
                <label htmlFor='name' className='block text-gray-700'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            aria-label='Name'
            className={`w-full p-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor='email' className='block text-gray-700'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            aria-label='Email'
            className={`w-full p-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor='phone' className='block text-gray-700'>Phone</label>
          <input
            type='tel'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            aria-label='Phone'
            className={`w-full p-2 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          {errors.phone && <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor='guests' className='block text-gray-700'>Number of Guests</label>
          <input
            type='number'
            id='guests'
            name='guests'
            value={formData.guests}
            onChange={handleChange}
            aria-label='Number of Guests'
            className={`w-full p-2 border rounded-md ${errors.guests ? 'border-red-500' : 'border-gray-300'}`}
            min='1'
            required
          />
          {errors.guests && <p className='text-red-500 text-sm mt-1'>{errors.guests}</p>}
        </div>
        <div>
          <label htmlFor='message' className='block text-gray-700'>Additional Message</label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            aria-label='Additional Message'
            className='w-full p-2 border rounded-md border-gray-300'
          ></textarea>
        </div>
        <button type='submit' className='w-full bg-skyBlue text-white py-2 rounded-md hover:bg-blue-600 transition-colors'>
          Book Now
        </button>
      </form>
    </div>
      </section>
      
    </main>
    
  );
};

export default BookingForm;

