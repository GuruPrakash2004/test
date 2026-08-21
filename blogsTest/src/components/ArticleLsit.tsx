import type { Blog } from "../utils/type";
import useBlog from "../utils/useBlog";
import ArticleCard from "./ArticleCard";

interface articleProps{
    onEdit: (blog: Blog)=> void
}
const ArticleLsit = ({onEdit}:articleProps) => {

    const {blogs,deleteBlog} = useBlog();
  return (
    <div>
        {blogs.map((blog)=> (<ArticleCard key={blog.id} onEdit={()=> onEdit(blog)} article={blog} onDelete={()=>deleteBlog(blog.id)}/>))}
    </div>
  )
}

export default ArticleLsit