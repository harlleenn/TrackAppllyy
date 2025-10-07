import React from 'react'

export default function Display({intern, onSelectInternship}) {
    return (
        <div key={intern.id} className='relative top-44  w-[400px] p-2 bg-white border-2 border-black rounded-lg'>
          <div className=' bg-pink-200 h-[200px] rounded-lg p-5'>
             <div className='text-sm font-semibold'> {intern.company_name}</div>
              <div className='text-lg font-semibold'>  {intern.role_name}</div>
                <div className='text-sm'> </div>
          </div>
         
                  {/* {intern.duration}<br></br>
                    <br></br>
                      */}
          <div key={intern.id} className="relative p-5">
            <div className='font-semibold text-base'>Rs {intern.stipend}</div>
                    <div className='text-gray-500'>{intern.location}</div>
           
          </div>
          <div className='absolute bottom-2 right-5 '>
             <button onClick={() => onSelectInternship(intern)} 
                className='rounded-md bg-black text-white text-sm p-2'> Details</button>
          </div>
          
        </div>
           
    )
}
  
