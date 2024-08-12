// import React from 'react'
// import Hero from '../../components/Hero/Hero'
// import MostVisited from '../../components/Visited/MostVisited'
// import FaqSection from '../../components/FAQ/FAQSection'
// import WhyChooseUs from '../../components/WhyChooseUs.jsx/WhyChooseUs'
// import Testimonial from '../../components/Testimonials/Testimonial'
// import Banner from '../../components/Banner/Banner'


// const LandingPage = () => {
//   return (
//     <>
//     <Hero/>
//     <WhyChooseUs/>
//     <MostVisited id="destination" />
//     <FaqSection id="faq" />
//     <Testimonial/>
//     <Banner/>
//     </>
//   )
// }

// export default LandingPage

import React from 'react';
import Hero from '../../components/Hero/Hero';
import MostVisited from '../../components/Visited/MostVisited';
import FaqSection from '../../components/FAQ/FAQSection';
import WhyChooseUs from '../../components/WhyChooseUs.jsx/WhyChooseUs';
import Testimonial from '../../components/Testimonials/Testimonial';
import Banner from '../../components/Banner/Banner';


const LandingPage = () => {
  return (
    <>
      <Hero id="home" />
      <WhyChooseUs id="why-choose-us" />
      <MostVisited id="destination" />
      <FaqSection id="faq" />
      <Testimonial id="testimonials" />
      <Banner id="banner" />
      <div id="book-a-travel" />
    </>
  );
};

export default LandingPage;
