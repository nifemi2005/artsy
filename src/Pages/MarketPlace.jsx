import React from 'react'
import Navbar from '../Componets/Navbar'
import { useContext } from "react";
import { ThemeContext } from '../Componets/MarketToggle';
import MarketNav from '../Componets/MarketNav';
import ImageFilter from '../Componets/ImageFilter';

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
      <ImageFilter/>
    </div>
  )
}

export default MarketPlace