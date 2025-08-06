import React from 'react'

export default function SearchInput({inputInternship, setInputInternship}) {
  return (
      <div className='absolute left-72 top-40 '>
            <input placeholder='Enter your Role name'
            value={inputInternship}
            onChange={(e) => setInputInternship(e.target.value)}
            className=' text-sm p-3 rounded-xl pr-10 pl-6 border-2 '/>
        </div>
  )
}
