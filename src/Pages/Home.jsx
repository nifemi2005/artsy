import React from 'react'
import Explore from '../Componets/Explore'
import FeaturedProduct from '../Componets/FeaturedProduct'
import Footer from '../Componets/Footer'
import HomeHero from '../Componets/Home-Hero'
import Navbar from '../Componets/Navbar'
import Newsletter from '../Componets/Newsletter'
import UpcomingAuction from '../Componets/UpcomingAuction'
import { useContext } from "react";
import { ThemeContext } from '../Componets/HomeToggle'

const Home = (props) => {
  const darkTheme = useContext(ThemeContext)
    const style = {
        backgroundColor: darkTheme ? 'white' : '#ccc',
        color: darkTheme ? 'black' : 'green',
    }
  return (
    <div style={style}>
      <Navbar msg={props.msg}/>
      <HomeHero/>
      <FeaturedProduct/>
      <UpcomingAuction/>
      <Explore/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home