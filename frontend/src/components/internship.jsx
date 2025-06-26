import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import ThemeContext from './ThemeContext';
import SearchInput from './SearchInput';
import Filter from './Filter';
import Header from './Header';
import Checkbox from './Checkbox';


export default function Internship() {
    const [showinternship, setShowInternship] = useState([])
    const [filterInternship, setFilterInternship] = useState([])
    const [inputInternship, setInputInternship] = useState("")
   const [selectedTypeJob, setSelectedTypeJob] = useState([]);
   const [selectedTypeLocation, setSelectedTypeLocation] = useState([])
   const {handleTheme} = useContext(ThemeContext)
  


 const internshipType = ['Remote', 'Hybrid', 'In-Office', 'Part-Time']
 const internshipLocation = ["Chennai", "Noida","Hyderabad", "Mumbai", "Pune", "Ahemdabad", "Kolkata"]
  
    const fetchInternship = async () => {
        try {
             const response = await fetch('http://localhost:3000/api/v1/internship')
            const data = await response.json()
            console.log(data)
            setShowInternship(data.data)
        }   catch (error) {
            console.log("There was no fetching the data", error)
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
      <Header/>

      <SearchInput inputInternship={inputInternship} 
      setInputInternship={setInputInternship}/>
    
  <div className='bg-slate-300  h-screen p-5 absolute left-0 top-40 z-40 '>
        <div>
        
           <span className='text-black font-semibold mr-32'>Filters</span> 
            <button onClick={handleClear} 
             className=' p-2 rounded-xl text-gray-500'>Clear All</button> 
        </div>
        <div>
              <div>
                    {/*   /////////////////////////////////////////////////////////////               */}
                <button onClick={handleTheme}>Theme toggle</button>
              </div> 
             
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
       {/* used child component passed props */}
<Filter filterInternship={filterInternship} /> 


  


</div>
  )
}
