import { useState, type ReactNode } from "react";
import type { Blog } from "../utils/type";
import { BlogContext } from "./Blogcontext";

interface contextType{
    children: ReactNode;
}

const ContextProvider = ({children}: contextType) => {

    const[blogs , setBlogs] = useState<Blog[]>([]);

    const addBlog = (blog: Blog) =>  {
        setBlogs([...blogs,blog]);
    }
    const updateBlog = (updateBlog: Blog) =>  {
        setBlogs(blogs.map((blog)=> blog.id === updateBlog.id ? updateBlog: blog));
    }

    const deleteBlog = (id : number)=> {
        setBlogs(blogs.filter((blog)=> blog.id !== id ));
    }

  return (

    <BlogContext.Provider value={{blogs,addBlog,updateBlog,deleteBlog}}>
        {children}
    </BlogContext.Provider>
  )
}

export default ContextProvider