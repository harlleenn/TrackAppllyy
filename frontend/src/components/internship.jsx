import React, { useEffect, useState } from 'react'

export default function Internship() {
    const [showinternship, setShowInternship] = useState([])
    const [filterInternship, setFilterInternship] = useState([])
    const [inputInternship, setInputInternship] = useState("")
  
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

useEffect(() => {
    const filtered = showinternship.filter((intern)=> 
    (intern.role_name.toLowerCase().includes(inputInternship)))
    setFilterInternship(filtered)
},[inputInternship, showinternship])
   
  return (
    <div>
         <div className='absolute right-72'>
            <input placeholder='Enter your Location'
            value={inputInternship}
            onChange={(e) => setInputInternship(e.target.value)}/>
        </div>
        <div className='absolute left-72 '>
            <input placeholder='Enter your Role name eg:Java Intern , Frontend Intern'
            value={inputInternship}
            onChange={(e) => setInputInternship(e.target.value)}/>
        </div>
        <div className='absolute right-10 bg-purple-100 p-5 border-radius'>
            <button>Search</button>
            </div>
       {/* width have to make responsive */}
{filterInternship && filterInternship.map((intern) => (
    <div key={intern.id} className='flex justify-center'> 
    <div className='block w-2/6 max-lg:  bg-white border 
     border-gray-200 rounded-lg shadow-sm hover:bg-slate-300  dark:hover:bg-slate-200'>   
     <h1 className='text-black font-medium  text-lg'> Company name is {intern.company_name}</h1>
     <h1 className='text-gray-500'>   Role is {intern.role_name} </h1>
     
      <div className='  '>
        Stipend is  {intern.stipend}<br></br>
      Duration will be for {intern.duration}
      </div>
    
</div>
         
    

    </div>
))}
    </div>
  )
}
