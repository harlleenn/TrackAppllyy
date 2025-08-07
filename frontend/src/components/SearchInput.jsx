import React from 'react'
import ResumeUploadModal from './ResumeUploadModal';
import { useState } from 'react';

export default function SearchInput({inputInternship, setInputInternship}) {
      const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
    const [uploadedResume, setUploadedResume] = useState(null);
       const handleResumeUpload = (file) => {
  console.log("Uploaded file:", file);
  setUploadedResume(file);
  setIsResumeModalOpen(false);
};
  return (
      <div className='absolute left-1/3 right-9 top-40 '>
        <div>
           <input placeholder='Enter your Role name'
            value={inputInternship}
            onChange={(e) => setInputInternship(e.target.value)}
            className=' text-sm p-3 rounded-xl pr-10 pl-6 border-2 '/>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ml-96"
          onClick={() => setIsResumeModalOpen(true)}
        >
          {uploadedResume ? "Uploaded" : "Upload Resume"}
        </button>
        </div>
           
          
          <ResumeUploadModal
          isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onFileUpload={handleResumeUpload}
        />
        </div>
  )
}
