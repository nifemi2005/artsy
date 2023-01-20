import React from 'react'
import Footer from '../Componets/Footer'
import Navbar from '../Componets/Navbar'
import { useContext } from "react";
import { ThemeContext } from '../Componets/MarketToggle';

const MarketPlace = (props) => {
   const darkTheme = useContext(ThemeContext)
    const style = {
        backgroundColor: darkTheme ? 'white' : 'black',
        color: darkTheme ? 'black' : 'green',
    }
  return (
    <div style={style}>
      <Navbar msg={props.msg}/>
      <Footer/>
    </div>
  )
}

export default MarketPlace