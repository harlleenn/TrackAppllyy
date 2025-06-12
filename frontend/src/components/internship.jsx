import React, { useEffect, useState } from 'react'
import { Bookmark } from 'lucide-react';
        

export default function Internship() {
    const [showinternship, setShowInternship] = useState([])
    const [filterInternship, setFilterInternship] = useState([])
    const [inputInternship, setInputInternship] = useState("")
   const [selectedTypeJob, setSelectedTypeJob] = useState([]);
   const [selectedTypeLocation, setSelectedTypeLocation] = useState([])


 const internshipType = ['Remote', 'Hybrid', 'In-Office', 'Part-Time']
 const internshipLocation = ["Chennai", "Noida","Hyderabad", "Mumbai", "Pune", "Ahemdabad", "Kolkata"]
  
    const fetchInternship = async () => {
        try {
             const response = await fetch('http://localhost:3000/api/v1/internship')
            const data = await response.json()
            console.log(data)
            setShowInternship(data.data)
        }   catch (error){
            console.log("There was an error fetching the data", error)
        }

    }
       
    useEffect(() => {
        fetchInternship()
    },[])
  
    //this is for when the checkbox toggles
    const checkBoxChange = (jobType) => {
        if (selectedTypeJob.includes(jobType)){
            setSelectedTypeJob(selectedTypeJob.filter((t) => t!== jobType ))
        }else{
            setSelectedTypeJob([...selectedTypeJob, jobType])
        }
    }
       const CheckBoxChange = (location) => {
        if (selectedTypeLocation.includes(location)){
            setSelectedTypeLocation(selectedTypeLocation.filter((l) => l!== location ))
        }else{
            setSelectedTypeLocation([...selectedTypeLocation, location])
        }
    }
   
const handleClear = () => {
    setSelectedTypeJob([])
    setSelectedTypeLocation([])
    setFilterInternship(showinternship)
    
    console.log('hello')
}
const handleJobType = () => {
    setSelectedTypeJob([])
}
const handleJobLocation = () => {
    setSelectedTypeLocation([])
}

    //this is for the filtering funcionality
   useEffect(() => {
    const filtered = showinternship.filter((intern) => {
        const matchesRole = intern.role_name.toLowerCase().includes(inputInternship.toLowerCase());
        const matchesJobType = selectedTypeJob.length === 0 || selectedTypeJob.includes(intern.job_type);
        const matchesLocation =  selectedTypeLocation.length === 0 ||selectedTypeLocation.includes(intern.location)
        return matchesRole && matchesJobType && matchesLocation;});
    setFilterInternship(filtered);
        }, 
        [inputInternship, selectedTypeJob, showinternship , selectedTypeLocation]);
 

  


   
  return (

    <div>
          <div className='absolute left-80 top-36'>
            <input placeholder='Enter your Role name '
            value={inputInternship}
            onChange={(e) => setInputInternship(e.target.value)}
            className=' text-sm p-3 rounded-xl pr-10 pl-6 border-2 '/>
        </div>

    <div className='bg-slate-300  h-screen p-5 fixed left-0 top-40 z-40 '>
        <div>
           <span className='text-black font-semibold mr-32'>Filters</span> 
            <button onClick={handleClear} 
             className=' p-2 rounded-xl text-gray-500'>Clear All</button> 
        </div>
       
        
        
        <div>
           <span className='text-black font-semibold mr-32'>Job Type</span> 
            <button onClick={handleJobType} 
            className=' p-2 rounded-xl text-gray-500'>Clear</button> 
        </div>
      <div className="flex flex-col ">
        {/* this is to show the checkbox  */}
        {internshipType.map((type) => (
          <label key={type} className="flex items-center gap-2 hover:bg-slate-200 p-2 font-serif">
            <input
              type="checkbox"
              value={type}
              checked={selectedTypeJob.includes(type)}
              onChange={() => checkBoxChange(type)}
            />
            {type}
          </label>
        ))}
      </div>
       <div>
           <span className='text-black font-semibold mr-32'>Location</span> 
            <button onClick={handleJobLocation} 
            className=' p-2 rounded-xl text-gray-500'>Clear</button> 
        </div>
        <div className="flex flex-col">
        {/* this is to show the checkbox  */}
        {internshipLocation.map((location) => (
          <label key={location} className="flex items-center gap-2  hover:bg-slate-200 p-2 font-serif">
            <input
              type="checkbox"
              value={location}
              checked={selectedTypeLocation.includes(location)}
              onChange={() => CheckBoxChange(location)}
            />
            {location}
          </label>
        ))}
      </div>
    </div>
      
      
     

       {/* width have to make responsive */}
    
    {filterInternship.length === 0 ? <div className='absolute bg-purple-400 left-1/3 top-2/4 p-7'>No internships available</div> :

     filterInternship.map((intern) => (
    <div key={intern.id} className='flex justify-center '> 
    <div className='block w-2/6   bg-white border rounded-lg hover:bg-gray-100 p-5 shadow-2xl mb-2'>   

     <h1 className='text-black font-medium  text-lg'>{intern.role_name}</h1>
     <h1 className='text-gray-500 mb-5'>{intern.company_name} </h1>

      <div className='flex flex-row justify-evenly '>
        <span className='mr-8'>
            <p className='text-gray-600 font-semibold'>Stipend</p>
                <p className='text-black font-semibold'>Rs{intern.stipend}</p></span>
        <span className='mr-9'> 
            <p className='text-gray-600 font-semibold'>Duration</p> 
                <p className='text-black font-semibold'>{intern.duration}</p></span>
        <span className='mr-9'> 
            <p className='text-gray-600 font-semibold'>Location </p>
                <p className='text-black font-semibold'> {intern.location}</p></span>
        <span className='mr-9'>
            <p className='text-gray-600 font-semibold'>Job type</p> 
                <p className='text-black font-semibold'> {intern.job_type}</p></span>
          <div><Bookmark/></div>
      </div>
    </div>
</div>
))}

  


</div>
  )
}
