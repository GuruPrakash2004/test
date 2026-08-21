import { FaSearch, FaUser } from "react-icons/fa";


const Navigation = () => {
  return (
    <div>
        <div className=" px-8 p-3 flex justify-between items-center border-b border-gray-300 fixed top-0 left-0 w-screen pb-6">
            <div className="search-icon flex  justify-center items-center border-2 border-gray-300  bg-transparent rounded-full px-4 py-2 ">
              <FaSearch/>
              <input type="text" className="border-none outline-none ml-4 grow w-full" placeholder="Search...."/>
            </div>
            <div className="">
              <FaUser size={24}/>
            </div>
        </div>
    </div>
  )
}

export default Navigation