import { BiSearch } from "react-icons/bi";
import { FaHome, FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="side-bar fixed top-0 z-55 left-0 bg-black w-20 flex flex-col justify-between h-screen">
        <div className=" flex flex-col justify-center items-center mt-4">
            <div className="p-4 flex justify-center items-center cursor-pointer text-white"><FaHome size={16}/></div>
            <div className="p-4 flex justify-center items-center cursor-pointer text-white"><FaUser size={16} /></div>
            <div className="p-4 flex justify-center items-center cursor-pointer text-white font-bold"><BiSearch size={16} /></div>
        </div>
        <div className="mb-4 ">
             <div className="p-4 flex justify-center items-center cursor-pointer text-white"><FaGear size={16} /></div>
             <div className="p-4 flex justify-center items-center cursor-pointer text-white"><FaUser size={16} /></div>
        </div>
    </div>
  )
}

export default Sidebar