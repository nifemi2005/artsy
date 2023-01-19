import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";

const Navbar = (props) => {
   const [nav, setNav] = useState(false)
   const handleNav = () => {
      setNav(!nav)
    }
    const [toggle, setToggle] = useState(false)
    const handleClick = () => {
      setToggle (!toggle)
    }
  return (
    <div className='flex justify-between items-center lg:px-[130px] md:px-[30px] sm:px-[25px] px-[18px] lg:h-[120px]'>
      <div onClick={handleNav} className='block lg:hidden'>
        {nav ? <AiOutlineClose className='opacity-0' size={20}/> :  <AiOutlineMenu size={20}/>}
      </div>
      <h3 className='font-1 text-[32px] font-bold leading-[90px]'>ARTSY.</h3>
      <div className='text-[#292929] text-[24px] leading-[32.4px] font-normal lg:flex hidden gap-[40px] font-2'>
        <NavLink style={({isActive})=>{return isActive ? {color: "blue" , borderBottom: 'solid'}: {} }} to="/">
          Home
        </NavLink>
        <NavLink style={({isActive})=>{return isActive ? {color: "blue", borderBottom: 'solid'}: {} }} to="/market">
          Marketplace
        </NavLink>
        <NavLink style={({isActive})=>{return isActive ? {color: "blue", borderBottom: 'solid'}: {} }} to="/auction">
          Auctions
        </NavLink>
        <NavLink style={({isActive})=>{return isActive ? {color: "blue", borderBottom: 'solid'}: {} }} to="/drop">
          Drop
        </NavLink>
      </div>
      <div className='flex md:gap-[30px] sm:gap-[17px] gap-[17px]'>
        <div className='sm:text-[24px] text-[20px] text-[#333333] cursor-pointer'>
          <i class="bi bi-search"></i>
        </div>
        <div className='sm:text-[24px] text-[20px] text-[#333333] cursor-pointer'>
          <i class="bi bi-cart3"></i>
        </div>
        <div className='sm:text-[24px] md:block sm:hidden hidden text-[#333333] cursor-pointer'>
          <i class="bi bi-bell"></i>
        </div>
        <div  onClick={handleClick} className='lg:block hidden'>
          <div onClick={props.msg} className='cursor-pointer'>
            {toggle ? <BsToggle2On size={30}/> : <BsToggle2Off className='' size={30}/>}
          </div>
          </div>
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-200 bg-white ease-in-out duration-500 sm:w-[50%]' : 'fixed left-[-100%]'}>
        <div className='flex items-center justify-between m-4'>
          <h1 className='w-full text-[24px] font-bold text-[#292929]'>ARTSY.</h1>
          <div onClick={handleNav}>
            <AiOutlineClose size={26}/>
          </div>
        </div>
        <div className='p-4 uppercase flex flex-col gap-[18px] font-medium text-[20px] font-2'>
          <Link to='/'>Home</Link>
          <Link to="/market">Marketplace</Link>
          <Link to='/auction'>Auctions</Link>
          <Link to='/drop'>Drop</Link>
          <div  onClick={handleClick}>
            <div onClick={props.msg}>
              {toggle ? <BsToggle2On size={30}/> :   <BsToggle2Off className='opacity-1' size={30}/>}
            </div>
          </div>
        </div>
        <div className='absolute bottom-[64px] right-0 text-white mr-[32px] w-[68px] h-[68px] bg-[#3341C1] rounded-full flex items-center'>
          <i class="bi bi-chat-left-fill mx-auto"></i>
        </div>
        <div className='border border-[#333333] w-[78px] h-[78px] rounded-full lg:flex sm:hidden md:hidden hidden items-center lg:ml-[67px]'>
          <i class="bi bi-arrow-right text-[40px] mx-auto"></i>
        </div>

      </div>
    </div>
  )
}

export default Navbar