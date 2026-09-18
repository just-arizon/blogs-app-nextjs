import { getBlogs } from "../services/blogs";


const Blogs = () => {
const blogs = getBlogs()
    return(
        <div>
            <h2>Blog Listing</h2>

            <div>
                {blogs.map(blog => (
                 <li key={blog.id}>
                    <a href={blog.url}> {blog.title} </a>
                     by {blog.author}
                 </li>
                ))}
            </div>
        </div>
    )
}

export default Blogs;