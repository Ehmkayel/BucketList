import React from 'react';

const Confirmation = () => {
  // Function to retrieve booking data from localStorage
  const getBooking = () => {
    const storedBooking = localStorage.getItem('booking');
    return storedBooking ? JSON.parse(storedBooking) : null; 
  };

  // Retrieve the booking data
  const booking = getBooking(); 

  // Check if booking data exists
  if (!booking) {
    return <p>No booking found. Please make a booking first.</p>;
  }

  return (
    <div className="booking-confirmation">
      <h2>Booking Confirmation</h2>
      <p><strong>Package ID:</strong> {booking.packageId}</p>
      <p><strong>Name:</strong> {booking.name}</p>
      <p><strong>Email:</strong> {booking.email}</p>
      <p><strong>Phone:</strong> {booking.phone}</p>
      <p><strong>Number of Guests:</strong> {booking.guests}</p>
      <p><strong>Message:</strong> {booking.message}</p>
    </div>
  );
};

export default Confirmation;
