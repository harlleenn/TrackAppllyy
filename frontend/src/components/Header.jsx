// FileUpload.js
import React, { useState } from "react";
import axios from "axios";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("resumeFile", file); // must match backend field

    try {
      const res = await axios.post("http://localhost:3000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("✅ File uploaded successfully!");
      console.log(res.data);
    } catch (err) {
      setMessage("❌ File upload failed");
      console.error(err);
    }
  };

  return (
    <div>
        <div className='bg-blue-900  w-full z-20 top-0 h-40 '>
        <div className=' justify-start p-5 flex-col'>
            <span className='font-bold font-roboto text-white'>TrackApply.</span>
            <span className=' font-roboto text-white ml-10'>Find Internship</span>

        <form onSubmit={handleUpload}>
        <input type="file" onChange={handleChange} />
        <button type="submit">Upload</button>
        </form>
      
           
        <span  className='  bg-white absolute right-10'>User</span>
        </div>
        <div className='absolute left-56  '>
            <span className='font-bold text-4xl text-white'>Find Your Internship</span>
        </div>
        
    </div>
    </div>
  );
}

export default FileUpload;
