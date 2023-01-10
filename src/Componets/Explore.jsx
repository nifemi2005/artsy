import React from 'react'
import { Link } from 'react-router-dom'

const Explore = () => {
  return (
    <div className='lg:py-48'>
        <hr />
        <div className='flex items-center justify-between lg:px-20'>
            <div>
                <p className='lg:text-[48px] font-medium lg:leading-[64.8px] font-2'>Explore marketplace</p>
            </div>
            <div>
                <Link to="/market"><i class="bi bi-arrow-right-short text-[#4693ED] text-[81px]"></i></Link>
            </div>
        </div>
        <hr />
        <div className='flex items-center justify-between lg:px-20'>
            <div>
                <p className='lg:text-[48px] font-medium lg:leading-[64.8px] font-2'>See auctions </p>
            </div>
            <div>
                <Link to="/auction"><i class="bi bi-arrow-right-short text-[#4693ED] text-[81px]"></i></Link>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Explore