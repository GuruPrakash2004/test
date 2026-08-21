import { FaHome, FaInfo, FaPhone } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { SiCoursera } from "react-icons/si";
import Card from "./tab-data-components/Card";
import Image1 from "../assets/image1.png"
import Image2 from "../assets/image2.png"
import About from "./tab-data-components/About";
import Contact from "./tab-data-components/Contact";
import { useState } from "react";

  const tabs = [
    {
      id: "home",
      icone: <FaHome />,
      lable: "Home",
      content: (
        <div className="grid scrollbar-thin grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card
              key={index}
              title="title1"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, labore!"
              image={Image1}
            />
          ))}
          <></>
        </div>
      ),
    },
    {
      id: "about",
      icone: <FaInfo />,
      lable: "About",
      content: <About />,
    },
    {
      id: "projects",
      icone: <GoProjectSymlink />,
      lable: "Projects",
      content: (
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card
              key={index}
              title="title2"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, labore!"
              image={Image2}
            />
          ))}
         
        </div>
      )
    },
    {
      id: "course",
      icone: <SiCoursera />,
      lable: "Course",
      content: (
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card
              key={index}
              title="title3"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, labore!"
              image="https://placehold.co/400x300"
            />
          ))}
         
        </div>
      )
    },
    {
      id: "contact",
      icone: <FaPhone />,
      lable: "Contact",
      content: <Contact />,
    },

    
  ];
const Tabs = () => {
    const[activeTab,setActiveTab] = useState(tabs[0].id);

    const handelActiveTab =(id: string)=> {
            setActiveTab(id)
    }
  return (
    <div className="mt-10  ml-20  p-4 border-gray-500">
              <ul className="flex mb-10 justify-around text-lg border-b  border-gray-500">
            {tabs.map(
                (tab)=>(<button onClick={()=> handelActiveTab(tab.id)}
                    className={`${activeTab === tab.id ? "border-b-2 border-gray-700": "border-gray-500"}
                        w-full 
                        `}
                >
                    
                    <div className="flex justify-center items-center space-x-1.5">
                        <span>{tab.icone}</span>
                        <span>{tab.lable}</span>
                    </div>
                    
                    
                    </button>
                    )
            )

            }
        </ul>
        

        <div className="rounded-lg">
             {tabs.find((tab)=> tab.id === activeTab)?.content}
        </div>
       
       
    </div>
  )
}

export default Tabs