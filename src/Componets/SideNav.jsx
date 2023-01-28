import React from 'react'
import {VscSettings} from 'react-icons/vsc'
import {RiArrowDropUpLine} from 'react-icons/ri'

const SideNav = () => {
  return (
    <div className='lg:block hidden'>
      <div>
        <div className='sidebar lg:left-0 left-[-300px] p-2 w-[300px] overflow-y-auto pl-[120px]'>
          <div className='flex items-center gap-6'>
            <VscSettings className='text-[35px]'/>
            <p className='font-medium lg:text-[32px]'>Filter</p>
          </div>
          <div className='border-b border-b-[#AFB091] pt-3'/>
          <div className='flex items-center gap-5 lg:pt-[70px] lg:pb-[50px]'>
            <p className='font-medium text-[25px]'>By category</p>
            <RiArrowDropUpLine className='text-[17.4px] cursor-pointer'/>
          </div>
          <div className='text-[24px]'>
            <div className='flex items-center gap-4'>
              <input type="checkbox" checked/>
              <p>Editorials</p>
            </div>
            <div className='flex items-center gap-4'>
              <input type="checkbox" checked/>
              <p>Fashion</p>
            </div>
            <div className='flex items-center gap-4'>
              <input type="checkbox"/>
              <p>Optics</p>
            </div>
            <div className='flex items-center gap-4'>
              <input type="checkbox"/>
              <p>Art&Museum</p>
            </div>
            <div className='flex items-center gap-4'>
              <input type="checkbox"/>
              <p>Nature</p>
            </div>
          </div>
          <div className='flex items-center gap-5 lg:pt-[70px] lg:pb-[50px]'>
            <p className='font-medium text-[25px]'>By price</p>
            <RiArrowDropUpLine className='text-[17.4px] cursor-pointer'/>
          </div>
          <div className='text-[21px]'>
            <p>$100.00 - $150.00</p>
          </div>
          <div className='text-black'>
            <input type="range" />
          </div>
          <div className='flex items-center gap-5 lg:pt-[70px] lg:pb-[50px]'>
            <p className='font-medium text-[25px]'>By artist</p>
            <RiArrowDropUpLine className='text-[17.4px] cursor-pointer'/>
          </div>
          <div className='flex flex-col gap-5 lg:text-[20px] font-normal'>
            <p className='underline'>All</p>
            <p>Below $100.00</p>
            <p>$100.00 - $150.00</p>
            <p>$150.00 - $200.00</p>
            <p>Above $200.00</p>
          </div>
          <div className='flex items-center gap-5 lg:pt-[70px]'>
            <p className='font-medium text-[19px]'>Collection year</p>
            <RiArrowDropUpLine className='text-[17.4px] cursor-pointer'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideNav