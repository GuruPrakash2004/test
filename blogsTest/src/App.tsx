import { useState } from "react";
import Navigation from "./components/Navigation";
import PeoplesToFollow from "./components/PeoplesToFollow";
import TopTopicList from "./components/TopTopicList";
import TrendList from "./components/TrendList";
import ContextProvider from "./shared/ContextProvider";
import type { Blog } from "./utils/type";
import { IoMdAddCircle } from "react-icons/io";
import Model from "./components/Model";
import BlogForm from "./components/BlogForm";
import ArticleLsit from "./components/ArticleLsit";

const App = () => {

  const[editBlogs, setEditBlogs] = useState<Blog | undefined>(undefined)
  const[isModelOpen, setIsModelOpen] = useState(false);

  const openForAddBlog = () =>{
    setEditBlogs(undefined);
    setIsModelOpen(true);
  }
  const openForUpdateBlog = (blog: Blog) =>{
    setEditBlogs(blog);
    setIsModelOpen(true);
  }

  return (
    <div >
      <ContextProvider>
      <Navigation/>

      <div className="flex justify-center">
      <section className="mx-auto mt-30">
          <button 
          onClick={openForAddBlog}
          className="text-white bg-black flex items-center space-x-2 px-4 py-2 rounded">
            <span >Add new Blog </span> 
            <IoMdAddCircle/>
          </button>

        <ArticleLsit onEdit={openForUpdateBlog}/>
      </section>


      {isModelOpen &&
          <Model onClose={()=> setIsModelOpen(false)}>
              <BlogForm existingBLog={editBlogs} onClose={()=> setIsModelOpen(false)}/>
          </Model>
      }
    
      <div className="w-[30%] mt-20">
        <PeoplesToFollow/>
        <TrendList/>
        <TopTopicList/>

      </div>
      </div>
      </ContextProvider>
    </div>
  )
}

export default App