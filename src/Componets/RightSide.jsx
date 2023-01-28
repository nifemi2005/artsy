import React from 'react'
import Image1 from '../assets/grid-image-1.png'
import Image2 from '../assets/grid-image-2.png'
import Image3 from '../assets/grid-image-3.png'
import Image4 from '../assets/grid-image-4.png'
import Image5 from '../assets/grid-image-5.png'
import Image6 from '../assets/grid-image-6.png'
import Image7 from '../assets/grid-image-7.png'
import Image8 from '../assets/grid-image-8.png'
import Image9 from '../assets/grid-image-9.png'

const RightSide = () => {
  return (
    <div className='grid md:grid-cols-3 lg:gap-[50px] md:gap-[30px] sm:gap-[20px] gap-[10px] sm:grid-cols-2 mx-auto'>
      <div className='shade-2 bg-white sm:block hidden'>
        <img src={Image1} alt="grid-image-1" className='pt-5 px-[14px]'/>
        <p className='font-normal lg:text-[19px] pt-3 pl-[14px]'>PHILOMENA ‘22</p>
        <p className='font-bold lg:text-[21px] pl-[14px] pb-2'>$3.90</p>
      </div>
      <div className='shade-2 bg-white'>
        <img src={Image2} alt="grid-image-2" className='pt-5 px-[14px]' />
        <p className='font-normal lg:text-[19px] pt-3 px-[14px]'>BOOLEAN EGYPTIAN</p>
        <p className='font-bold lg:text-[21px] pl-[14px] pb-2'>$3.90</p>
      </div>
      <div className='shade-2 bg-white'>
        <img src={Image3} alt="grid-image-3" className='pt-5 px-[14px]' />
        <p className='font-normal lg:text-[19px] pt-3 pl-[14px]'>BLANC</p>
        <p className='font-bold lg:text-[21px] pl-[14px] pb-2'>$3.90</p>
      </div>
      <div className='shade-2 bg-white'>
        <img src={Image4} alt="grid-image-4" className='pt-5 px-[14px]'/>
        <p className='font-normal lg:text-[19px] pt-3 pl-[14px]'>ELLIPSIA</p>
        <p className='font-bold lg:text-[21px] pl-[14px] pb-2'>$3.90</p>
      </div>
      <div className='shade-2 bg-white'>
        <img src={Image5} alt="grid-image-5" className='pt-5 px-[14px]' />
        <p className='font-normal lg:text-[19px] pt-3 pl-[14px]'>THE LAWMAKERS </p>
        <p className='font-bold lg:text-[21px] pl-[14px] pb-2'>$3.90</p>
      </div>
      <div className='shade-2 bg-white'>
        <img src={Image6} alt="grid-image-6" className='pt-5 px-[14px]'/>
        <p className='font-normal lg:text-[19px] pt-3 pl-[14px]'>VEIL</p>
        <p className='font-bold lg:text-[21px] pl-[14px] pb-2'>$3.90</p>
      </div>
      <div className='shade-2 bg-white'>
        <img src={Image7} alt="grid-image-7" className='pt-5 px-[14px]'/>
        <p className='font-normal lg:text-[19px] pt-3 pl-[14px]'>ALTERNATING</p>
        <p className='font-bold lg:text-[21px] pl-[14px] pb-2'>$3.90</p>
      </div>
      <div className='shade-2 bg-white'>
        <img src={Image8} alt="grid-image-8" className='pt-5 px-[14px]'/>
        <p className='font-normal lg:text-[19px] pt-3 pl-[14px]'>ROSEMARY ‘22</p>
        <p className='font-bold lg:text-[21px] pl-[14px] pb-2'>$3.90</p>
      </div>
      <div className='shade-2 bg-white'>
        <img src={Image9} alt="grid-image-9" className='pt-5 px-[14px]'/>
        <p className='font-normal lg:text-[19px] pt-3 pl-[14px]'>BEVERLY</p>
        <p className='font-bold lg:text-[21px] pl-[14px] pb-2'>$3.90</p>
      </div>
    </div>
  )
}

export default RightSide