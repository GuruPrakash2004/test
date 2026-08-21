import { useState, type ChangeEvent } from "react";
import { FaCamera, FaYoutube } from "react-icons/fa";
import Tabs from "./Tabs";



const Profile = () => {
    // https://placehold.co/1500x400
    const[topboard,setTopboard]  = useState("https://placehold.co/1500x400");
    const[profile,setProfile]  = useState("https://placehold.co/400x300");

    const handelTopboard =(e: ChangeEvent<HTMLInputElement>)=> {
        const file = e.target.files?.[0];

        if(file){
        setTopboard(URL.createObjectURL(file));
        }
    }



    const handleProfileImage =(e:ChangeEvent<HTMLInputElement>)=> {
        const file = e.target.files?.[0];
        if(file){
            setProfile(URL.createObjectURL(file))
        }
    }
  return (
    <div className="bg-amber-200 min-w-0 flex-1">
        <div className="relative">
            <img className="h-50 w-full object-cover" src={topboard} alt="" />
            <button  className="text-white  bg-gray-800 rounded-full px-2.5 py-5 btn absolute top-3 right-3 hover:bg-gray-600">
                <label htmlFor="bilboard" className="icons cursor-pointer"><FaCamera size={20}/>
                <input id="bilboard" onChange={handelTopboard} type="file" accept="image/*" className="hidden w-8 cursor-pointer"/>
                </label>
            </button>
        </div>
<div className=" ml-20 flex items-center py-4 relative">
  {/* Profile Image Container */}
  <div className="relative inline-block mx-4">
    <img 
      className="h-32 w-32 rounded-full object-cover" 
      src={profile} 
      alt="Profile"
    />
    
    {/* Camera Icon Trigger */}
    <button  className="bg-gray-800 btn p-3 rounded-full absolute bottom-0 right-0 cursor-pointer hover:bg-gray-700 transition-colors z-10">
    <label 
      htmlFor="profile" 
     
    >
      <FaCamera className="text-white cursor-pointer" size={16} />
      <input 
        id="profile"
        type="file" 
        accept="image/*" 
        onChange={handleProfileImage} 
        className="hidden" 
      />
    </label>
    </button>
   
  </div>

  <div className="content ml-4 space-y-2">
    <h1 className="font-extrabold text-2xl">Guru</h1>
    <p>1M . views</p>
    <p className="w-220">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus earum tempore culpa quos voluptatem. Quaerat ex blanditiis, itaque debitis dolore harum expedita alias, pariatur possimus aut aliquam non</p>
    <button className="flex items-center btn bg-red-600 text-white px-2 py-2"><FaYoutube className="mr-1" size={18} /> Subscribe</button>
  </div>
</div>
<Tabs/>
    </div>
  )
}

export default Profile