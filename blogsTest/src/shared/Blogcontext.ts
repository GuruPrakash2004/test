import { createContext } from "react";
import type { Blog } from "../utils/type";


interface BlogContextType{
    blogs: Blog[];
    addBlog: (blog: Blog)=> void;
    updateBlog: (blog: Blog)=> void;
    deleteBlog: (blogId: number)=> void;
}

export const BlogContext = createContext<BlogContextType | undefined>(undefined);

