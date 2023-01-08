import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Auctions from './Pages/Auctions';
import Drop from './Pages/Drop';
import Home from './Pages/Home';
import Marketplace from './Pages/MarketPlace';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/market" element={<Marketplace/>}/>
        <Route path='/auction' element={<Auctions/>} />
        <Route path='/drop' element={<Drop/>} />
      </Routes>
    </div>
  )
}

export default App
