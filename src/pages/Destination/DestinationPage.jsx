import React from 'react'
import Header from '../../components/Header/Header'
import DestinationHero from './DestinationHero'
import PackageSection from './PackageSection'

const DestinationPage = () => {
  return (
    <main>
        <Header/>
        <DestinationHero/>
        <PackageSection/>
    </main>
  )
}

export default DestinationPage