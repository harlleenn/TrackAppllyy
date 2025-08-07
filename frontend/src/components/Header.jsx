import { FaBriefcase } from "react-icons/fa";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";



function Header() {
  const { handleTheme } = useContext(ThemeContext);
   
 


  return (
    <div className=" w-full z-20 top-0 h-40 fixed shadow-md bg-blue-700">
      <div className="flex justify-between items-center px-8 py-4">
        <div className="flex space-x-3">
          <FaBriefcase className="text-white text-2xl" />
          <span className="font-bold font-roboto text-white text-xl">TrackApply.</span>
        </div>

        <div className="flex gap-6">
          <button onClick={handleTheme} className="bg-white px-4 py-2 rounded">
            Toggle Theme
          </button>
          

        </div>
      </div>
  

      <div className="absolute left-7 top-24 text-center">
        <h1 className="font-bold text-3xl text-white ">Find Your Internship</h1>
      </div>
    </div>
  );
}

export default Header;
