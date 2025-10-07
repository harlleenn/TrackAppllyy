import { FaBriefcase } from "react-icons/fa";

import { useState } from "react";
import ResumeUploadModal from "./ResumeUploadModal";



function Header() {

  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
    const [uploadedResume, setUploadedResume] = useState(null);
    const handleResumeUpload = (file) => {
    console.log("Uploaded file:", file);
    setUploadedResume(file);
    setIsResumeModalOpen(false);
  };
  return (
    <div className=" w-full z-20 top-0 h-40 fixed shadow-md bg-blue-700">
      <div className="flex justify-between items-center px-8 py-4">
        <div className="flex space-x-3">
          <FaBriefcase className="text-white text-2xl" />
          <span className="font-bold font-roboto text-white text-xl">TrackApply.</span>
        </div>

        <div className="flex gap-6">
           <div  className='absolute right-48 '>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ml-96"
              onClick={() => setIsResumeModalOpen(true)}>
              {uploadedResume ? "Uploaded" : "Upload Resume"}
              </button>
          </div>
        </div>
           <ResumeUploadModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
          onFileUpload={handleResumeUpload}
        />
      </div>
  

      <div className="absolute left-7 top-24 text-center">
        <h1 className="font-bold text-3xl text-white ">Find Your Internship</h1>
      </div>
    </div>
  );
}

export default Header;
