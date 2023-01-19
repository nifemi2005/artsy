import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='lg:flex items-center justify-between lg:px-20 lg:pt-[60px] lg:pb-[40px]'>
        <div className='lg:text-start text-center'>
          <p className='font-1 text-[32px] font-bold leading-[90px]'>ARTSY.</p>
        </div>
        <div className='text-[#292929] sm:text-[24px] text-[20px] leading-[32.4px] font-normal flex flex-col lg:gap-[20px] md:gap-4 sm:gap-3 gap-2 font-2 lg:text-start text-center lg:pb-0 md:pb-7 sm:pb-5 pb-4'>
          <Link to='/'>Home</Link>
          <Link to="/market">Marketplace</Link>
          <Link to='/auction'>Auctions</Link>
          <Link to='/drop'>Drop</Link>
        </div>
        <div className='text-[#292929] sm:text-[24px] text-[20px] leading-[32.4px] font-normal flex flex-col lg:gap-[20px] md:gap-4 sm:gap-3 gap-2 font-2 lg:text-start text-center lg:pb-0 md:pb-7 sm:pb-5 pb-4'>
          <Link to='/'>Home</Link>
          <Link to="/market">Marketplace</Link>
          <Link to='/auction'>Auctions</Link>
          <Link to='/drop'>Drop</Link>
        </div>
        <div className='text-[#292929] sm:text-[24px] text-[20px] leading-[32.4px] font-normal flex flex-col lg:gap-[20px] md:gap-4 sm:gap-3 gap-2 font-2 lg:text-start text-center lg:pb-0 md:pb-5 sm:pb-4 pb-3'>
          <Link to='/'>Home</Link>
          <Link to="/market">Marketplace</Link>
          <Link to='/auction'>Auctions</Link>
          <Link to='/drop'>Drop</Link>
        </div>
      </div>
      <div className='text-center lg:pb-5 md:pb-4 sm:pb-3 pb-2'>
        <p>Artsystudios © 2022. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer