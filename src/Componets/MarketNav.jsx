import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const MarketNav = () => {
  return (
    <div className='lg:flex items-center lg:px-[120px] lg:pt-[80px]'>
        <div className='lg:hidden text-[#BCB7B7] md:px-6 sm:px-4 px-2'>
            <p className='md:pb-7 sm:pb-5 pb-4'>Home/ Marketplace/ <span className='text-[#292929]'>Editorials</span></p>
            <p className='md:pb-6 sm:pb-4 pb-3'>Showing 1-5  of 18 results</p>
        </div>
        <div className='lg:flex hidden items-center lg:pr-[72px]'>
            <AiOutlineSearch className='absolute text-[28px]'/>
            <input type="search" className='pl-8 bg-[#f4f2f2] py-4 rounded-2xl lg:w-52' placeholder='Search'/>
        </div>
        <div className='shade lg:py-7 md:py-6 sm:py-5 py-4 flex items-center justify-between lg:w-[72%] md:w-[70%] sm:w-[80%] w-[90%] px-7 lg:mx-0 mx-auto'>
            <div className='lg:text-[24px] lg:leading-9 font-normal lg:block hidden'>
                <p>See 1-6 of 15 results</p>
            </div>
            <select className='flex items-center lg:hidden'>
                <option>Filter</option>
            </select>
            <div className='lg:border lg:text-[24px] lg:leading-9 lg:px-8 rounded-lg border-black'>
                <select className='outline-0'>
                    <option value="">Sort by</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default MarketNav