import Link from "next/link";
import { getBlogs } from "../services/blogs";


const Blogs = async () => {
const allBlogs = getBlogs()
    return(
        <div>
            <h1 className="font-semibold">Blog Listing</h1>

            <div>
                {allBlogs.map(blog => (
                 <li key={blog.id}>
                    <Link href={`/blogs/${blog.id}`}> {blog.title} </Link>
                     by {blog.author}
                 </li>
                ))}
            </div>
        </div>
    )
}

export default Blogs;