import React from 'react'

const UpcomingAuction = () => {
  return (
    <div className='star text-white'>
      <div className='lg:px-[120px] lg:pt-6 lg:pb-14'>
        <p className='text-[40px] font-medium font-2 lg:block hidden'>See Upcoming Auctions and Exhibitions</p>
        <hr className='w-[65%] mt-4'/>
        <div className='Upcoming mt-5 lg:flex lg:items-end lg:px-7 hidden'>
          <div className='lg:block hidden'></div>
          <div className='gap-5 lg:flex hidden'>
            <div>
              <p className='font-normal text-[67.61px] leading-[77px]'>01</p>
            </div>
            <div>
              <div className='flex items-start gap-3'>
                <div className='border bg-[#F5F5F5] rounded-full p-2 w-4'></div>
                <div>
                  <p className='font-normal text-[29px] leading-[33px] lg:w-[353px]'>MONALISA REDEFINED IN STYLE.</p>
                  <p className='font-normal text-[13px] leading-[20px] lg:pt-[15px] lg:pb-3'>Start on : 08:00 GTS . Monday </p>
                  <div className='lg:flex lg:pb-[52px] lg:gap-[100px]'>
                    <p className='font-medium text-[15px] leading-[21px] lg:w-[550px]'>GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.</p>
                    <div className='flex items-center gap-7'>
                      <p className='border-b hover:border-b-indigo-400 hover:scale-110 cursor-pointer'>See more</p>
                      <button className='border border-white px-[13px] py-[15px] rounded-[10px] hover:scale-110 hover:border-indigo-400'>Set a reminder</button>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
          </div>
          {/* <div className='lg:hidden'>
            <div className='flex items-center'>
              <div className='border bg-[#F5F5F5] rounded-full p-2'></div>
              <div>
                <p className='text-[18px]'>MONALISA REDEFINED IN STYLE.</p>
              </div>
            </div>
          </div> */}
        </div>
        <div className='md:px-16 sm:px-12 px-8 md:py-16 sm:py-12 py-8 lg:hidden block'>
          <div className='Upcoming2'>
            <div className='flex items-center gap-[29px] md:px-6 sm:px-5 px-4 md:pt-[30px] sm:pt-[20px] pt-[15px] pb-[15px] sm:pb-[18px] md:pb-[28px]'>
              <div className='border bg-[#F5F5F5] rounded-full p-2'></div>
              <div>
                <p className='md:text-[30px] sm:text-[25px] text-[16px] font-normal leading-6'>MONALISA REDEFINED IN STYLE.</p>
              </div>
            </div>
            <div className='flex md:px-6 sm:px-5 px-4 gap-3'>
              <div>
                <p className='text-[40px] font-normal leading-[45px]'>01</p>
              </div>
              <div>
                <p className='font-normal leading-[18px] text-[16px] md:pb-8 sm:pb-6 pb-5 sm:mt-3 mt-2'>Start on : 08:00 GTS . Monday </p>
                <p className='font-medium md:pb-5 sm:pb-4 pb-4 sm:text-[15px] text-[12px] leading-[23px]'>GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.</p>
              </div>
            </div>
            <div className='flex justify-between sm:px-4 px-3 md:pb-6 sm:pb-5 pb-4'>
              <div></div>
              <div className='flex items-center gap-7'>
                <p className='border-b hover:border-b-indigo-400 hover:scale-110 cursor-pointer'>See more</p>
                <button className='border border-white px-[13px] py-[15px] rounded-[10px] hover:scale-110 hover:border-indigo-400'>Set a reminder</button>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:flex hidden items-center justify-between pt-6'>
          <div className='rounded-full bg-[#AEAEAE] lg:w-[25%]'>
            <button className='bg-white text-[#0D0D2B]  rounded-full h-[10px] w-12'></button>
            <span className='bg-white text-[#0D0D2B]  rounded-full h-[10px] w-12'></span>
          </div>
          <div>
            <div className='flex items-center gap-4'>
              <div className='border border-transparent shadow-lg w-16 h-16 rounded-full flex items-center'>
                <i class="bi bi-chevron-left mx-auto"></i>
              </div>
              <div className='border border-transparent shadow-lg w-16 h-16 rounded-full flex items-center'>
                <i class="bi bi-chevron-right mx-auto"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingAuction