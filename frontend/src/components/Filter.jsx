import React from 'react';
import { Bookmark } from 'lucide-react';


export default function Filter({ filterInternship }) {
  // Ensure filterInternship is an array before attempting to map
  // If it's not an array, default to an empty array to prevent errors
  const internshipsToDisplay = Array.isArray(filterInternship) ? filterInternship : ["Loading"];

  return (
    <>
  
      {internshipsToDisplay.length === 0 ? "No internship" : 
        // Map and display internships when available
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
                <div><Bookmark /></div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  );
}