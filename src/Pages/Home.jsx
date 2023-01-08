import React from 'react'
import FeaturedProduct from '../Componets/FeaturedProduct'
import HomeHero from '../Componets/Home-Hero'
import Navbar from '../Componets/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HomeHero/>
      <FeaturedProduct/>
    </div>
  )
}

export default Home