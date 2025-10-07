  import React, { useEffect, useState } from 'react'
  import SearchInput from './SearchInput';
  import Filter from './Filter';
  import Header from './Header';


  export default function Internship() {
    const [showinternship, setShowInternship] = useState([])
    const [filterInternship, setFilterInternship] = useState([])
    const [inputInternship, setInputInternship] = useState("")
    const [selectedTypeJob, setSelectedTypeJob] = useState([]);
    const [selectedTypeLocation, setSelectedTypeLocation] = useState([])
    const [selectedInternship, setSelectedInternship] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [applied , setApplied] = useState(false)
 

    
    const handleStatusChange = (status) => {
    console.log(`Internship ${selectedInternship.role_name} marked as: ${status}`);
    setApplied((prev) => !prev)
    setIsModalOpen(false);  // close modal after action
  }


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

        <SearchInput
        inputInternship={inputInternship} 
        setInputInternship={setInputInternship}/>
      
   

      <Filter 
      filterInternship={filterInternship} 
      onSelectInternship={(intern) => {
      setSelectedInternship(intern);
      setIsModalOpen(true);
  }
    }/> 
  </div>
    )
  }

