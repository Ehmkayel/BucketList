import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import MostVisited from '../../components/Visited/MostVisited'
import FaqSection from '../../components/FAQ/FAQSection'
import WhyChooseUs from '../../components/WhyChooseUs.jsx/WhyChooseUs'
import Testimonial from '../../components/Testimonials/Testimonial'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'

const LandingPage = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <WhyChooseUs/>
    <MostVisited/>
    <FaqSection/>
    <Testimonial/>
    <Banner/>
    <Footer/>
    </>
  )
}

export default LandingPage