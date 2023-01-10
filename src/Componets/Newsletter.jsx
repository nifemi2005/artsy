import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex items-center flex-col justify-center border border-[#333333] lg:py-16 lg:mx-14'>
        <div>
            <p className='font-normal lg:text-[30px] leading-[40px] pb-5'>NEWSLETTER</p>
        </div>
        <div>
            <p className='font-normal lg:text-[32px] leading-[43px] pb-8'>Subscribe to get daily updates on new drops & exciting deals </p>
        </div>
        <div className=''>
            <input type="email" placeholder='Enter your Email' className='font-normal leading-[20px] py-4 pl-[58px] w-[446px] border' />
            <button className='font-normal leading-[20px] bg-[#272727] py-[19px] px-[45px] ml-6'>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter