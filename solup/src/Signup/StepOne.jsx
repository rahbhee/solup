import React from 'react'
import first from '/3793121.jpg'
import second from '/3303213.jpg'
import third from '/5484597.jpg'
import fourth from '/9791984.jpg'

const StepOne = () => {
  return (
    <div className=''>
        <div className='grid gap-4 hero-images grid-cols-2 grid-rows-2'>
          <div className='bg-white flex-col flex items-center font-semibold text-xs'>
          <img className='h-28' src={first} alt="" />
          <h3>Basic Trader</h3>
          </div>
          <div className='bg-white flex-col flex items-center font-semibold text-xs'>
          <img className='h-28' src={second} alt="" />
          <h3>Private Investor</h3>
          </div>
          <div className='bg-white flex-col flex  items-center font-semibold text-xs'>
          <img className='h-28' src={third} alt="" />
          <h3>Project Creator</h3>
          </div>
          <div className='bg-white flex-col flex items-center font-semibold text-xs'>
          <img className='h-28' src={fourth} alt="" />
          <h3>Venture Capitalist</h3>
          </div>
        </div>
    </div>
  )
}

export default StepOne
