import React from 'react'

const Newsletter = () => {
  return (
    <div className='sm:flex items-center sm:flex-col justify-center sm:border border-[#333333] lg:py-16 md:py-8 sm:py-6 lg:mx-14 md:mx-12 sm:mx-7 sm:px-0 px-3'>
        <div>
            <p className='font-normal lg:text-[30px] text-[20px] lg:leading-[40px] lg:pb-5 md:pb-4 sm:pb-3 pb-2'>NEWSLETTER</p>
        </div>
        <div>
            <p className='font-normal lg:text-[32px] lg:leading-[43px] lg:pb-8 md:pb-4 sm:pb-3 pb-2'>Subscribe to get daily updates on new drops & exciting deals </p>
        </div>
        <div className=''>
            <input type="email" placeholder='Enter your Email' className='font-normal leading-[20px] md:py-4 md:pl-[58px] sm:py-[10px] py-2 sm:pl-[5px] pl-1 sm:w-[62%] w-[90%] sm:pr-8 md:pr-0 md:w-[446px] border border-[#333333] sm:mb-0 mb-3' />
            <button className='font-normal leading-[20px] bg-[#272727] md:py-[19px] md:px-[45px] sm:py-[10px] sm:px-[25px] px-6 py-4 md:ml-6 sm:ml-4 text-white sm:inline block'>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter