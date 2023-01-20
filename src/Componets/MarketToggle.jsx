import React, { useState } from 'react'
import { useContext } from "react";
import MarketPlace from '../Pages/MarketPlace';

export const ThemeContext = React.createContext()
const MarketToggle = () => {
    const [darkTheme, setDarkTheme] = useState(true)
    function toggleTheme(){
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }
    const darkThemeToggle = useContext(ThemeContext)
    const style = {
        backgroundColor: darkThemeToggle ? 'white' : '#ccc',
        color: darkThemeToggle ? 'black' : 'green',
    }
  return (
    <div style={style}>
        <ThemeContext.Provider value={darkTheme}>
            <MarketPlace msg={toggleTheme}/>
        </ThemeContext.Provider>
    </div>
  )
}

export default MarketToggle