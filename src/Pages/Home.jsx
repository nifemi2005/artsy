import React from 'react'
import Explore from '../Componets/Explore'
import FeaturedProduct from '../Componets/FeaturedProduct'
import Footer from '../Componets/Footer'
import HomeHero from '../Componets/Home-Hero'
import Navbar from '../Componets/Navbar'
import UpcomingAuction from '../Componets/UpcomingAuction'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HomeHero/>
      <FeaturedProduct/>
      <UpcomingAuction/>
      <Explore/>
      <Footer/>
    </div>
  )
}

export default Home