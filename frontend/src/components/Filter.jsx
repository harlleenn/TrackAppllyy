import React from 'react';
import Display from './Display';

export default function Filter({ filterInternship, onSelectInternship }) {
  const internshipsToDisplay = Array.isArray(filterInternship) ? filterInternship : ["Loading"];

  return (
    <div className='grid grid-cols-3 gap-20 '>
      {internshipsToDisplay.length === 0 ?  (
      <div className=' right-1/3 top-2/4 absolute'>
        No internships found 
       </div>
        ) : 
       internshipsToDisplay.map((intern) => (
         <Display 
         key={intern.id}
         intern ={intern}
         onSelectInternship={onSelectInternship}/>
         
        ))
      }
    </div>
  );
}