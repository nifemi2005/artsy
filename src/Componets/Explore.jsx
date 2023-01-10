import React from 'react'
import { Link } from 'react-router-dom'

const Explore = () => {
  return (
    <div className='lg:py-48 md:py-32 sm:py-20 py-10'>
        <hr />
        <div className='flex items-center justify-between lg:px-20 md:px-14 sm:px-10 px-5'>
            <div>
                <p className='lg:text-[48px] md:text-[40px] sm:text-[30px] font-medium leading-[64.8px] font-2'>Explore marketplace</p>
            </div>
            <div>
                <Link to="/market"><i class="bi bi-arrow-right-short md:text-[#4693ED] md:text-[81px] sm:text-[40px] border rounded-full border-black sm:px-2 px-1 md:px-0 md:rounded-none md:border-none"></i></Link>
            </div>
        </div>
        <hr />
        <div className='flex items-center justify-between lg:px-20 md:px-14 sm:px-10 px-5'>
            <div>
                <p className='lg:text-[48px] md:text-[40px] sm:text-[30px] font-medium leading-[64.8px] font-2'>See auctions </p>
            </div>
            <div className=''>
                <Link to="/auction"><i class="bi bi-arrow-right-short md:text-[#4693ED] md:text-[81px] sm:text-[40px] border rounded-full border-black sm:px-2 px-1 md:px-0 md:rounded-none md:border-none"></i></Link>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Explore