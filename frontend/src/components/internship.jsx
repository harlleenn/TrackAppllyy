import React, { useEffect, useState } from 'react'

export default function Internship() {
    const [showinternship, setShowInternship] = useState([])
  
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


  return (
    <div>
        {showinternship && showinternship.map((i) => (
            <div key={i.id} className='bg-red-100'>
               <div>Company name{i.company_name}</div> 
             <div> Stipend Rs {i.stipend}</div> 
             <div>Role {i.role_name}</div>
             <div> duration for {i.duration}</div>
                </div>
        ))}
    </div>
  )
}
