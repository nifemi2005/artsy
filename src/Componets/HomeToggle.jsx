import React, { useState } from 'react'
import Home from '../Pages/Home'
import { useContext } from "react";

export const ThemeContext = React.createContext()
const HomeToggle = () => {
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
            <Home msg={toggleTheme}/>
        </ThemeContext.Provider>
    </div>
  )
}

export default HomeToggle