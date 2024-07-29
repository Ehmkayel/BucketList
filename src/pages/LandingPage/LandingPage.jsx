import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import MostVisited from '../../components/Visited/MostVisited'
import FaqSection from '../../components/FAQ/FAQSection'

const LandingPage = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <MostVisited/>
    <FaqSection/>
    </>
  )
}

export default LandingPage