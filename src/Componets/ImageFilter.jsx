import React from 'react'
import RightSide from './RightSide'
import SideNav from './SideNav'

const ImageFilter = () => {
  return (
    <>
        <div className='flex lg:gap-[110px] md:gap-[50px] sm:gap-[20px] lg:mt-[80px] md:mt-[60px] sm:mt-[40px] mt-[20px] lg:mx-0 md:mx-[30px]'>
            <SideNav/>
            <RightSide/>
        </div>
        <p className='lg:mt-[100px] md:mt-[70px] md:mb-[80px] sm:mt-[40px] sm:mb-[60px] lg:mb-[200px] border px-2 py-3 rounded-lg text-center w-[170px] mx-auto bg-blue-700 text-white'>See more</p>
    </>
  )
}

export default ImageFilter