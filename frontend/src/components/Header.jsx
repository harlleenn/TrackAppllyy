
import React from 'react'

export default function Header() {
  return (
    <div className='bg-blue-900 fixed w-full z-20 top-0 h-40 '>
        <div className=' justify-start p-5 flex-col'>
            <span className='font-bold font-roboto text-white'>TrackApply.</span>
            <span className=' font-roboto text-white ml-10'>Find Internship</span>
                <button className='bg-yellow-100 absolute right-24'>Upload Resume</button>
                <span  className='  bg-white absolute right-10'>User</span>
        </div>
        <div className='absolute left-56  '>
            <span className='font-bold text-4xl text-white'>Find Your Internship</span>
        </div>
        
    </div>
  )
}
