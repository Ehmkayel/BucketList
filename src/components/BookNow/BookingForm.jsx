import React, { useState } from 'react';

const BookingForm = ({ packageDetails, onBook }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 1,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form data and package details to the parent component or API
    onBook({ ...formData, packageId: packageDetails.id });
  };

  return (
    <div className='booking-form'>
      <h3>Book {packageDetails.name}</h3>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='phone'>Phone</label>
          <input
            type='tel'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='guests'>Number of Guests</label>
          <input
            type='number'
            id='guests'
            name='guests'
            value={formData.guests}
            onChange={handleChange}
            min='1'
            required
          />
        </div>
        <div>
          <label htmlFor='message'>Additional Message</label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type='submit'>Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
