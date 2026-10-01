
import { toggleLike } from "@/app/actions/blog";
import { getBlogById } from "@/app/services/blogs";
import { notFound } from "next/navigation";


const BlogPage = async ({ params } : { params: Promise<{ id: string }>})  => {
 const { id } = await params;
 const blog = getBlogById(Number(id))

if (!blog) {
    notFound()
}

return (
    <div>
       <h2>{blog.title}</h2>
       <em>by {blog.author}</em>

       <p><a href={ blog.url }>{blog.url}</a> <span>with {blog.likes} likes</span></p>

       <form action= { toggleLike }>
        <input type="hidden" name="id" value={blog.id} />
        <button type="submit">Like</button>
       </form>
    </div>
)


}

export default BlogPage