import React from 'react'
import { Link } from 'react-router-dom'
// import { IconName } from "react-icons/bs";
import { AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { FaQuestion } from 'react-icons/fa';
import { GiSecretBook } from 'react-icons/gi';

const Footer = () => {
  return (
    <div>
      <div className='lg:flex items-center justify-between lg:px-28 lg:pt-[60px] lg:pb-[50px]'>
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
          <Link to='/'>Blog</Link>
          <Link to="/">Wallets</Link>
          <Link to='/'>Rates</Link>
          <Link to='/'>High Bids</Link>
        </div>
        <div className='text-[#292929] sm:text-[24px] text-[20px] leading-[32.4px] font-normal flex flex-col lg:gap-[20px] md:gap-4 sm:gap-3 gap-2 font-2 lg:text-start text-center lg:pb-0 md:pb-5 sm:pb-4 pb-3'>
          <div className='flex items-center sm:gap-5 gap-3 lg:mx-0 mx-auto'>
            <AiOutlineMail className='sm:text-[41px]'/>
            <Link to='/'>artsystudios@gmail.com</Link>
          </div>
          <div className='flex items-center sm:gap-5 gap-3 lg:mx-0 mx-auto'>
            <GoLocation className='sm:text-[41px]'/>
            <Link to="/">Lagos, Nigeria.</Link>
          </div>
          <div className='flex items-center sm:gap-5 gap-3 lg:mx-0 mx-auto'>
            <GiSecretBook className='sm:text-[41px]'/>
            <Link to='/'>Read more</Link>
          </div>
          <div className='flex items-center sm:gap-5 gap-3 lg:mx-0 mx-auto'>
            <FaQuestion className='sm:text-[41px]'/>
            <Link to='/'>FAQ</Link>
          </div>
        </div>
      </div>
      <div className='text-center lg:pb-5 md:pb-4 sm:pb-3 pb-2'>
        <p>Artsystudios © 2022. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer