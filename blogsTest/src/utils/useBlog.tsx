import { useContext } from "react";
import { BlogContext } from "../shared/Blogcontext";


const useBlog = () => {
    const context = useContext(BlogContext);

    if(!context){
        throw new Error("conext are accessed only with in the blocks")
    }
  return context;
}

export default useBlog