import React from 'react'
import Footer from '../Componets/Footer'
import Navbar from '../Componets/Navbar'
import { useContext } from "react";
import { ThemeContext } from '../Componets/MarketToggle';
import MarketNav from '../Componets/MarketNav';

const MarketPlace = (props) => {
   const darkTheme = useContext(ThemeContext)
    const style = {
        backgroundColor: darkTheme ? 'white' : 'black',
        color: darkTheme ? 'black' : 'green',
    }
  return (
    <div style={style}>
      <Navbar msg={props.msg}/>
      <MarketNav/>
      <Footer/>
    </div>
  )
}

export default MarketPlace