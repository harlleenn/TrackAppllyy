import React from 'react';

export default function Filter({ filterInternship, onSelectInternship }) {
  const internshipsToDisplay = Array.isArray(filterInternship) ? filterInternship : ["Loading"];

  return (
    <div className='mt-44 ml-8'>
      
      {internshipsToDisplay.length === 0 ?  (
      <div className=' right-1/3 top-2/4 absolute'>
        No internships found 
       </div>
        ) : 
       internshipsToDisplay.map((intern) => (
          <div key={intern.id} className='flex justify-center'>
            <div className='block w-2/6 bg-white border rounded-lg hover:bg-gray-100 p-5 shadow-2xl mb-2'>
              <h1 className='text-black font-medium text-lg'>{intern.role_name}</h1>
              <h1 className='text-gray-500 mb-5'>{intern.company_name}</h1>

              <div className='flex flex-row justify-evenly'>
                <span className='mr-8'>
                  <p className='text-gray-600 font-semibold'>Stipend</p>
                  <p className='text-black font-semibold'>Rs {intern.stipend}</p>
                </span>
                <span className='mr-9'>
                  <p className='text-gray-600 font-semibold'>Duration</p>
                  <p className='text-black font-semibold'>{intern.duration}</p>
                </span>
                <span className='mr-9'>
                  <p className='text-gray-600 font-semibold'>Location</p>
                  <p className='text-black font-semibold'>{intern.location}</p>
                </span>
                <span className='mr-9'>
                  <p className='text-gray-600 font-semibold'>Job type</p>
                  <p className='text-black font-semibold'>{intern.job_type}</p>
                </span>
              </div>
              <div key={intern.id}  onClick={() => onSelectInternship(intern)}
              className="cursor-pointer text-gray-500 hover:bg-blue-700 m-7 p-2 rounded text-center">View Options</div>
            </div>
          </div>
        ))
      }
    </div>
  );
}