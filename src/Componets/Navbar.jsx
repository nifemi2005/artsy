import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Search from '../assets/Search.png'
import Bell from '../assets/Bell.png'
import Cart from '../assets/Cart.png'

const Navbar = () => {
   const [nav, setNav] = useState(false)
   const handleNav = () => {
      setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center lg:px-[130px] md:px-[30px] sm:px-[25px] px-[18px] lg:h-[120px]'>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose className='hidden' size={20}/> :  <AiOutlineMenu size={20}/>}
      </div>
      <h3 className='text-[32px] font-bold leading-[90px]'>ARTSY.</h3>
      <div className='text-[#292929] text-[24px] leading-[32.4px] font-normal lg:flex hidden gap-[40px]'>
        <Link to='/'>Home</Link>
        <Link to="/market">Marketplace</Link>
        <Link to='/auction'>Auctions</Link>
        <Link to='/drop'>Drop</Link>
      </div>
      <div className='flex md:gap-[30px] sm:gap-[17px] gap-[17px]'>
        <div className='sm:text-[24px] text-[20px] text-[#333333]'>
          <i class="bi bi-search"></i>
        </div>
        <div className='sm:text-[24px] text-[20px] text-[#333333]'>
          <i class="bi bi-cart3"></i>
        </div>
        <div className='sm:text-[24px] md:block sm:hidden hidden text-[#333333]'>
          <i class="bi bi-bell"></i>
        </div>
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-200 bg-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <div className='flex items-center justify-between m-4'>
          <h1 className='w-full text-[24px] font-bold text-[#292929]'>ARTSY.</h1>
          <div onClick={handleNav}>
            <AiOutlineClose size={20}/>
          </div>
        </div>
        <div className='p-4 uppercase flex flex-col gap-[18px] font-medium text-[20px]'>
          <Link to='/'>Home</Link>
          <Link to="/market">Marketplace</Link>
          <Link to='/auction'>Auctions</Link>
          <Link to='/drop'>Drop</Link>
        </div>
        <div className='absolute bottom-[64px] right-0 text-white mr-[32px] bg-[#3341C1] rounded-[52px] p-[17px]'>
          <i class="bi bi-chat-left-fill"></i>
        </div>
      </div>
    </div>
  )
}

export default Navbar