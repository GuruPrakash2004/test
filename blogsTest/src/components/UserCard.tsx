
import { FaUserCircle } from "react-icons/fa";

interface userProps{
    index:number
    name: string;
    follow:boolean;
}

const UserCard = ({name,follow,index}:userProps) => {
  return (
    <section key={index} className="flex justify-between">
        <div className="flex items-center space-x-1.5 px-4 py-2">
        <FaUserCircle className="text-gray-500" size={20} />
        <span>{name}</span>
        </div>
        <div className="">
            <button className={`my-1 btn rounded px-2 py-1 ${follow===true ? "bg-success ": "bg-info"} w-20`}>
            {follow ? "Following" : "Follow"}
        </button>
        </div>


    </section>
  )
}

export default UserCard